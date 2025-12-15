// Ana sayfada yorum widget'ı için
import { getRecentComments } from './feedback-firebase.js';

async function loadRecentComments() {
    const recentCommentsDiv = document.getElementById('recentComments');
    
    // Firestore'dan son 3 yorumu getir
    const recentComments = await getRecentComments();
    
    if (recentComments.length === 0) {
        recentCommentsDiv.innerHTML = `
            <div class="no-comments">
                <p>Henüz yorum yapılmamış. İlk yorumu siz yapın! 🎉</p>
            </div>
        `;
        return;
    }
    
    recentCommentsDiv.innerHTML = recentComments.map(comment => {
        const stars = '★'.repeat(comment.rating) + '☆'.repeat(5 - comment.rating);
        
        // Yorumu kısalt (max 150 karakter)
        let shortComment = comment.comment;
        if (shortComment.length > 150) {
            shortComment = shortComment.substring(0, 150) + '...';
        }
        
        return `
            <div class="comment-widget-item">
                <div class="comment-widget-header">
                    <div class="comment-widget-author">${escapeHtml(comment.name)}</div>
                    <div class="comment-widget-rating">${stars}</div>
                </div>
                <div class="comment-widget-text">${escapeHtml(shortComment)}</div>
            </div>
        `;
    }).join('');
}

async function updateWidgetStats() {
    const totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');
    
    // Firestore'dan yorum sayısını al
    const comments = await getRecentComments();
    
    const totalVisitorsEl = document.getElementById('widgetTotalVisitors');
    const totalCommentsEl = document.getElementById('widgetTotalComments');
    
    if (totalVisitorsEl) totalVisitorsEl.textContent = totalVisitors;
    if (totalCommentsEl) totalCommentsEl.textContent = comments.length;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Sayfa yüklendiğinde
window.addEventListener('load', function() {
    loadRecentComments();
    updateWidgetStats();
});
