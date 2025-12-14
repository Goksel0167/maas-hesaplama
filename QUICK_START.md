# 🚀 Hızlı Başlangıç - Email Bildirimi Kurulumu

Yorumları **gcapkin82@gmail.com** adresine almak için sadece 3 adım:

## 1️⃣ EmailJS Hesabı Oluştur
- [https://www.emailjs.com/](https://www.emailjs.com/) → Sign Up
- Ücretsiz hesap (200 email/ay)

## 2️⃣ Servisi Bağla
- Dashboard → **Email Services** → Add New Service
- **Gmail** seç → **gcapkin82@gmail.com** ile bağlan
- **Service ID**'yi kopyala → `service_xxxxx`

## 3️⃣ Template Oluştur
- Dashboard → **Email Templates** → Create New Template

### Template Ayarları:

**To Email:**
```
{{to_email}}
```

**From Name:**
```
Maaş Hesaplama
```

**Subject:**
```
Yeni {{feedback_type}} - {{website}}
```

**Content:**
```html
<h2>Yeni Yorum Alındı! 🎉</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #f8f9fa;">
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>İsim:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{user_name}}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{user_email}}</td>
  </tr>
  <tr style="background: #f8f9fa;">
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Değerlendirme:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd; font-size: 20px; color: #ffc107;">{{rating}}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Yorum Tipi:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{feedback_type}}</td>
  </tr>
  <tr style="background: #f8f9fa;">
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Tarih:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{date}}</td>
  </tr>
</table>

<div style="background: #e7f3ff; padding: 15px; border-left: 4px solid #2196F3; margin: 20px 0;">
  <h3 style="margin-top: 0;">💬 Yorum:</h3>
  <p style="margin: 0; line-height: 1.6;">{{comment}}</p>
</div>

<hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

<p style="color: #666; font-size: 12px; text-align: center;">
  <em>Bu email {{website}} sitesinden otomatik olarak gönderilmiştir.</em><br>
  <a href="https://goksel0167.github.io/maas-hesaplama/">Siteye Git</a>
</p>
```

**Template ID**'yi kopyala → `template_xxxxx`

## 4️⃣ Public Key Al
- Dashboard → **Account** → General
- **Public Key**'i kopyala → `xxxxxxxxxxxxxxxxx`

## 5️⃣ Kodu Güncelle
`feedback-script.js` dosyasını aç ve şunu değiştir:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_xxxxx',        // 👈 Buraya yapıştır
    templateID: 'template_xxxxx',      // 👈 Buraya yapıştır
    publicKey: 'xxxxxxxxxxxxxxxxx',    // 👈 Buraya yapıştır
    toEmail: 'gcapkin82@gmail.com'     // ✅ Zaten ayarlı
};
```

## 6️⃣ Test Et
1. Değişiklikleri kaydet ve GitHub'a push et:
   ```bash
   git add feedback-script.js
   git commit -m "EmailJS yapılandırması tamamlandı"
   git push
   ```

2. Site yenilendikten sonra (2-3 dakika) yorum yap

3. **gcapkin82@gmail.com** adresini kontrol et!

---

## 🎯 Özet Checklist

- [ ] EmailJS hesabı oluşturuldu
- [ ] Gmail servisi bağlandı (gcapkin82@gmail.com)
- [ ] Service ID kopyalandı
- [ ] Template oluşturuldu
- [ ] Template ID kopyalandı
- [ ] Public Key kopyalandı
- [ ] `feedback-script.js` güncellendi
- [ ] GitHub'a push edildi
- [ ] Test yapıldı ✅

---

## 💡 İpuçları

- Gmail App Password kullanmanız önerilir (daha güvenli)
- Spam klasörünü kontrol edin
- Browser console'da (F12) hata var mı bakın
- Test yaparken kendi isminizi kullanın

## 📞 Yardım

Detaylı talimatlar için: [EMAIL_SETUP.md](EMAIL_SETUP.md)
