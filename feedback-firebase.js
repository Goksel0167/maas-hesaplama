// Firebase Firestore işlemleri için yardımcı fonksiyonlar
import { collection, addDoc, getDocs, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Yorum ekleme
export async function addComment(commentData) {
    try {
        console.log('Firestore: Veritabanı bağlantısı:', window.db);
        console.log('Firestore: Kaydedilecek veri:', commentData);
        
        const docRef = await addDoc(collection(window.db, 'comments'), {
            ...commentData,
            timestamp: new Date().toISOString()
        });
        console.log('Firestore: Yorum başarıyla eklendi, ID:', docRef.id);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Firestore: Yorum eklenemedi - Detaylı hata:', error);
        console.error('Hata kodu:', error.code);
        console.error('Hata mesajı:', error.message);
        alert('Firestore hatası: ' + error.message);
        return { success: false, error: error.message };
    }
}

// Yorumları getirme
export async function getComments() {
    try {
        const q = query(
            collection(window.db, 'comments'),
            orderBy('timestamp', 'desc'),
            limit(50)
        );
        
        const querySnapshot = await getDocs(q);
        const comments = [];
        
        querySnapshot.forEach((doc) => {
            comments.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        console.log('Firestore: Yorumlar getirildi, toplam:', comments.length);
        return comments;
    } catch (error) {
        console.error('Firestore: Yorumlar getirilemedi:', error);
        return [];
    }
}

// Son 3 yorumu getirme (ana sayfa için)
export async function getRecentComments() {
    try {
        const q = query(
            collection(window.db, 'comments'),
            orderBy('timestamp', 'desc'),
            limit(3)
        );
        
        const querySnapshot = await getDocs(q);
        const comments = [];
        
        querySnapshot.forEach((doc) => {
            comments.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return comments;
    } catch (error) {
        console.error('Firestore: Son yorumlar getirilemedi:', error);
        return [];
    }
}
