// Kullanıcı sayacı ve yorum sistemi

// Sayfa yüklendiğinde ziyaretçi sayısını artır
function trackVisitor() {
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = new Date().toISOString().substring(0, 7);
    
    // Toplam ziyaretçi
    let totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');
    let uniqueVisitor = localStorage.getItem('uniqueVisitor');
    
    if (!uniqueVisitor) {
        totalVisitors++;
        localStorage.setItem('totalVisitors', totalVisitors);
        localStorage.setItem('uniqueVisitor', 'true');
    }
    
    // Aylık ziyaretçi
    let monthlyData = JSON.parse(localStorage.getItem('monthlyVisitors') || '{}');
    if (!monthlyData[thisMonth]) {
        monthlyData[thisMonth] = 0;
    }
    monthlyData[thisMonth]++;
    localStorage.setItem('monthlyVisitors', JSON.stringify(monthlyData));
    
    // Günlük ziyaretçi
    let dailyData = JSON.parse(localStorage.getItem('dailyVisitors') || '{}');
    if (!dailyData[today]) {
        dailyData[today] = 0;
    }
    dailyData[today]++;
    localStorage.setItem('dailyVisitors', JSON.stringify(dailyData));
    
    // İstatistikleri güncelle
    updateStats();
}

function updateStats() {
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = new Date().toISOString().substring(0, 7);
    
    const totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');
    const monthlyData = JSON.parse(localStorage.getItem('monthlyVisitors') || '{}');
    const dailyData = JSON.parse(localStorage.getItem('dailyVisitors') || '{}');
    const comments = JSON.parse(localStorage.getItem('userComments') || '[]');
    
    document.getElementById('totalVisitors').textContent = totalVisitors;
    document.getElementById('monthlyVisitors').textContent = monthlyData[thisMonth] || 0;
    document.getElementById('dailyVisitors').textContent = dailyData[today] || 0;
    document.getElementById('totalComments').textContent = comments.length;
}

// Yıldız derecelendirme
let selectedRating = 0;

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = parseInt(this.dataset.rating);
        document.getElementById('rating').value = selectedRating;
        
        document.querySelectorAll('.star').forEach((s, index) => {
            if (index < selectedRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
    
    star.addEventListener('mouseover', function() {
        const rating = parseInt(this.dataset.rating);
        document.querySelectorAll('.star').forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#ffc107';
            } else {
                s.style.color = '#ddd';
            }
        });
    });
});

document.getElementById('ratingStars').addEventListener('mouseleave', function() {
    document.querySelectorAll('.star').forEach((s, index) => {
        if (index < selectedRating) {
            s.style.color = '#ffc107';
        } else {
            s.style.color = '#ddd';
        }
    });
});

// Yorum gönderme
function submitFeedback(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const rating = parseInt(document.getElementById('rating').value);
    const feedbackType = document.getElementById('feedbackType').value;
    const comment = document.getElementById('comment').value;
    
    if (!rating) {
        alert('Lütfen bir değerlendirme puanı verin.');
        return;
    }
    
    const newComment = {
        id: Date.now(),
        name: userName,
        email: userEmail,
        rating: rating,
        type: feedbackType,
        comment: comment,
        date: new Date().toLocaleString('tr-TR')
    };
    
    // Yorumları kaydet
    let comments = JSON.parse(localStorage.getItem('userComments') || '[]');
    comments.unshift(newComment); // En yeniler başta
    localStorage.setItem('userComments', JSON.stringify(comments));
    
    // Formu temizle
    document.getElementById('feedbackForm').reset();
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    
    // Başarı mesajı
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
    
    // Yorumları yeniden yükle
    loadComments();
    updateStats();
}

// Yorumları yükleme
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('userComments') || '[]');
    const commentsList = document.getElementById('commentsList');
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 40px;">Henüz yorum yapılmamış. İlk yorumu siz yapın! 🎉</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => {
        const stars = '★'.repeat(comment.rating) + '☆'.repeat(5 - comment.rating);
        const typeLabels = {
            'genel': '💬 Genel Yorum',
            'oneri': '💡 Öneri',
            'hata': '🐛 Hata Bildirimi',
            'tesekkur': '🙏 Teşekkür'
        };
        
        return `
            <div class="comment-item">
                <div class="comment-header">
                    <div>
                        <div class="comment-author">${escapeHtml(comment.name)}</div>
                        <div style="color: #6c757d; font-size: 0.9em;">${typeLabels[comment.type]}</div>
                    </div>
                    <div class="comment-date">${comment.date}</div>
                </div>
                <div class="comment-rating">${stars}</div>
                <div class="comment-text">${escapeHtml(comment.comment)}</div>
            </div>
        `;
    }).join('');
}

// HTML güvenliği için
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Sayfa yüklendiğinde
window.addEventListener('load', function() {
    trackVisitor();
    loadComments();
});
