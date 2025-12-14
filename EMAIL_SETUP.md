# 📧 Email Bildirim Kurulum Rehberi

Kullanıcılar yorum yaptığında email bildirimi almak için aşağıdaki adımları takip edin.

## 🚀 Adım 1: EmailJS Hesabı Oluşturun

1. [EmailJS](https://www.emailjs.com/) adresine gidin
2. "Sign Up" butonuna tıklayın
3. Ücretsiz hesap oluşturun (Aylık 200 email ücretsiz)

## 📨 Adım 2: Email Servisi Ekleyin

1. Dashboard'da **"Email Services"** sekmesine gidin
2. **"Add New Service"** butonuna tıklayın
3. **Gmail** seçin (gcapkin82@gmail.com için)
4. Gmail hesabınızla (gcapkin82@gmail.com) bağlanın
5. **Service ID**'yi kopyalayın (örn: `service_abc123`)

## 📝 Adım 3: Email Template Oluşturun

1. Dashboard'da **"Email Templates"** sekmesine gidin
2. **"Create New Template"** butonuna tıklayın
3. Template içeriğini aşağıdaki gibi oluşturun:

### Template İçeriği:

**To Email (Kime):**
```
{{to_email}}
```
*Bu alan otomatik olarak gcapkin82@gmail.com olarak gelecek*

**Subject (Konu):**
```
{{feedback_type}} - {{website}}
```

**Content (İçerik):**
```html
<h2>Yeni Yorum Alındı!</h2>

<p><strong>İsim:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Değerlendirme:</strong> {{rating}}</p>
<p><strong>Yorum Tipi:</strong> {{feedback_type}}</p>
<p><strong>Tarih:</strong> {{date}}</p>

<h3>Yorum:</h3>
<p>{{comment}}</p>

<hr>
<p><em>Bu email {{website}} sitesinden otomatik olarak gönderilmiştir.</em></p>
```

4. Template'i kaydedin
5. **Template ID**'yi kopyalayın (örn: `template_xyz789`)

## 🔑 Adım 4: Public Key Alın

1. Dashboard'da **"Account"** sekmesine gidin
2. **"General"** bölümünden **Public Key**'i kopyalayın (örn: `abcdefghijk123456`)

## ⚙️ Adım 5: Kodu Güncelleyin

`feedback-script.js` dosyasını açın ve aşağıdaki bilgileri güncelleyin:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc123',       // Adım 2'den aldığınız Service ID
    templateID: 'template_xyz789',     // Adım 3'ten aldığınız Template ID
    publicKey: 'abcdefghijk123456',    // Adım 4'ten aldığınız Public Key
    toEmail: 'gcapkin82@gmail.com'     // ✅ Zaten ayarlanmış!
};
```

**ÖNEMLİ:** Sadece ilk 3 değeri (serviceID, templateID, publicKey) güncellemeniz yeterli. Email adresi zaten `gcapkin82@gmail.com` olarak ayarlanmış.

## ✅ Adım 6: Test Edin

1. Web sitenizi yeniden yükleyin
2. Yorum formunu doldurun
3. "Gönder" butonuna tıklayın
4. Email hesabınızı kontrol edin

## 📊 Email İçeriği

Her yorum için **gcapkin82@gmail.com** adresine şu bilgileri içeren bir email alacaksınız:

- ✅ Kullanıcı Adı
- ✅ Kullanıcı Email (varsa)
- ✅ Yıldız Değerlendirmesi (★★★★★)
- ✅ Yorum Tipi (Genel/Öneri/Hata/Teşekkür)
- ✅ Yorum Metni
- ✅ Tarih ve Saat

## 🔧 Sorun Giderme

### Email gelmiyor?
1. Browser console'u açın (F12)
2. Hata mesajlarını kontrol edin
3. EmailJS Dashboard'da "Email Log" sekmesini kontrol edin
4. Service ID, Template ID ve Public Key'in doğru olduğundan emin olun

### "Invalid public key" hatası?
- Public Key'i tekrar kopyalayın
- Başında/sonunda boşluk olmadığından emin olun
- Tırnak işaretleri içinde olduğundan emin olun

### Gmail ile çalışmıyor?
1. **gcapkin82@gmail.com** hesabınızda "2-Step Verification" açın
2. "App Passwords" oluşturun (Google Account > Security > App Passwords)
3. EmailJS'de servisi bu App Password ile yeniden bağlayın
4. Alternatif: Gmail'de "Less secure app access" ayarını açın (önerilmez)

## 💡 İpuçları

- **Ücretsiz Plan:** Ayda 200 email gönderebilirsiniz
- **Test Modu:** İlk yorumlarla test yapın
- **Spam Kontrolü:** Gelen kutunuzun spam klasörünü kontrol edin
- **Yedek Email:** Birden fazla email adresine gönderebilirsiniz (Template'de CC ekleyin)

## 🌟 Ek Özellikler

EmailJS ile şunları da yapabilirsiniz:

1. **Otomatik Yanıt:** Yorum yapana teşekkür emaili gönderin
2. **Slack/Discord:** Email yerine Slack/Discord bildirimi
3. **Webhook:** Kendi backend'inize bildirim gönderin
4. **Filtreleme:** Sadece belirli yorum tiplerinde email alın

---

**Önemli:** Email bildirimi tamamen isteğe bağlıdır. Yapılandırmazsanız yorumlar sadece localStorage'a kaydedilir ve sitede görüntülenir.
