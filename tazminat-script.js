// Döviz kurları için global değişkenler
let exchangeRates = { USD: 34.50, EUR: 37.80 }; // Varsayılan değerler

// Döviz kurlarını çek
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.TRY) {
            exchangeRates.USD = data.rates.TRY;
            exchangeRates.EUR = data.rates.TRY / data.rates.EUR;
            console.log('Döviz Kurları Güncellendi:', exchangeRates);
        }
    } catch (error) {
        console.log('Döviz kurları yüklenemedi, varsayılan değerler kullanılıyor:', error);
    }
}

// Sayfa yüklendiğinde kurları çek
fetchExchangeRates();

// 2025 Gelir Vergisi Dilimleri
const TAX_BRACKETS = [
    { min: 0, max: 110000, rate: 0.15, name: '1. Dilim (%15)' },
    { min: 110000, max: 230000, rate: 0.20, name: '2. Dilim (%20)' },
    { min: 230000, max: 580000, rate: 0.27, name: '3. Dilim (%27)' },
    { min: 580000, max: 3000000, rate: 0.35, name: '4. Dilim (%35)' },
    { min: 3000000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
];

// 2025 Kıdem Tazminatı Tavanı (yıllık güncellenir)
const KIDEM_TAVAN = 53919.68;

// Para formatı
function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' ₺';
}

// Tarih farkı hesaplama
function calculateDateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = Math.floor((diffDays % 365) % 30);
    
    return {
        totalDays: diffDays,
        years: years,
        months: months,
        days: days,
        text: `${years} yıl ${months} ay ${days} gün`
    };
}

// Gelir vergisi hesaplama (kümülatif)
function calculateIncomeTax(yearlyIncome) {
    let tax = 0;
    let remainingIncome = yearlyIncome;

    for (let i = 0; i < TAX_BRACKETS.length; i++) {
        const bracket = TAX_BRACKETS[i];
        const bracketSize = bracket.max - bracket.min;

        if (remainingIncome <= 0) break;

        if (remainingIncome >= bracketSize) {
            tax += bracketSize * bracket.rate;
            remainingIncome -= bracketSize;
        } else {
            tax += remainingIncome * bracket.rate;
            remainingIncome = 0;
        }
    }

    return tax;
}

// Vergi dilimi detayını hesapla
function calculateTaxBracketDetails(income) {
    let details = [];
    let remainingIncome = income;

    for (let i = 0; i < TAX_BRACKETS.length; i++) {
        const bracket = TAX_BRACKETS[i];
        const bracketSize = bracket.max - bracket.min;

        if (remainingIncome <= 0) break;

        let amountInBracket = 0;
        if (remainingIncome >= bracketSize) {
            amountInBracket = bracketSize;
            remainingIncome -= bracketSize;
        } else {
            amountInBracket = remainingIncome;
            remainingIncome = 0;
        }

        if (amountInBracket > 0) {
            const percentage = (amountInBracket / income) * 100;
            const rate = (bracket.rate * 100).toFixed(0);
            details.push(`%${percentage.toFixed(1)} → %${rate}`);
        }
    }

    return details.join(' | ');
}

// Yıllık izin günü hesaplama
function calculateAnnualLeave(workYears) {
    if (workYears < 1) return 0;
    if (workYears >= 1 && workYears < 5) return 14;
    if (workYears >= 5 && workYears < 15) return 20;
    return 26;
}

// Hesaplama yöntemi değiştirme
function toggleCalculationMethod() {
    const method = document.getElementById('hesaplamaYontemi').value;
    const formMethod = document.getElementById('formMethod');
    const maasMethod = document.getElementById('maasMethod');
    
    if (method === 'form') {
        formMethod.style.display = 'block';
        maasMethod.style.display = 'none';
    } else {
        formMethod.style.display = 'none';
        maasMethod.style.display = 'block';
    }
}

// Tarih değişikliklerini dinle ve çalışma süresini güncelle
function updateWorkDuration() {
    const startDate = document.getElementById('isGirisTarihi').value;
    const endDate = document.getElementById('istenCikisTarihi').value;
    
    if (startDate && endDate) {
        const duration = calculateDateDifference(startDate, endDate);
        document.getElementById('toplamSure').textContent = duration.text;
    }
}

// Ana hesaplama fonksiyonu
function calculateSeverance() {
    const startDate = document.getElementById('isGirisTarihi').value;
    const endDate = document.getElementById('istenCikisTarihi').value;
    const aylikBrutMaas = parseFloat(document.getElementById('aylikBrutMaas').value) || 0;
    const kumulatifMatrah = parseFloat(document.getElementById('kumulatifMatrah').value) || 0;
    const yillikEkGelir = parseFloat(document.getElementById('yillikEkGelir').value) || 0;
    const kullanilanIzin = parseFloat(document.getElementById('kullanilanIzin').value) || 0;
    
    // Çalışma süresi hesaplama
    const workDuration = calculateDateDifference(startDate, endDate);
    const workYears = workDuration.years + (workDuration.months / 12) + (workDuration.days / 365);
    
    // KIDEM TAZMİNATI HESAPLAMA
    let kidemGun = 0;
    let kidemBrutHesaplanan = 0;
    let kidemBrut = 0;
    let kidemDamga = 0;
    let kidemNet = 0;
    
    if (workYears >= 1) {
        // Kıdem günü: TOPLAM ÇALIŞMA SÜRESİNE GÖRE
        // Her tam yıl için 30 gün
        const tamYillar = Math.floor(workYears);
        const kalanAylar = Math.floor((workYears - tamYillar) * 12);
        
        // Toplam kıdem günü = (tam yıllar * 30) + (kalan aylar * 2.5)
        kidemGun = (tamYillar * 30) + Math.floor(kalanAylar * 2.5);
        
        // Günlük brüt ücret
        const gunlukBrut = aylikBrutMaas / 30;
        
        // Kıdem brüt (hesaplanan - tavan uygulanmadan)
        kidemBrutHesaplanan = gunlukBrut * kidemGun;
        
        // DOĞRU HESAPLAMA: Her yıl için ayrı tavan uygulanmalı
        // Her 30 günlük periyod = 1 kıdem yılı
        const tamPeriyodlar = Math.floor(kidemGun / 30);
        const kalanGunler = kidemGun % 30;
        
        // Her tam periyod için tavan uygulanmış tutar
        const birYillikKidem = gunlukBrut * 30;
        const birYillikTavanli = Math.min(birYillikKidem, KIDEM_TAVAN);
        
        // Tam periyodlar
        kidemBrut = tamPeriyodlar * birYillikTavanli;
        
        // Kalan günler için
        if (kalanGunler > 0) {
            const kalanTutar = gunlukBrut * kalanGunler;
            const kalanTavanli = Math.min(kalanTutar, KIDEM_TAVAN * kalanGunler / 30);
            kidemBrut += kalanTavanli;
        }
        
        // Damga vergisi
        kidemDamga = kidemBrut * 0.00759;
        
        // Net kıdem (kıdem tazminatı gelir vergisinden muaftır)
        kidemNet = kidemBrut - kidemDamga;
    }
    
    // İHBAR TAZMİNATI HESAPLAMA
    let ihbarSureHafta = 0;
    let ihbarBrut = 0;
    let ihbarSGK = 0;
    let ihbarGelirVergisi = 0;
    let ihbarDamga = 0;
    let ihbarNet = 0;
    let ihbarKumulatifMatrah = 0;
    let ihbarVergiDagilim = '';
    
    // İhbar süresi belirleme (İş Kanunu'na göre)
    if (workYears < 0.5) {
        ihbarSureHafta = 2;
    } else if (workYears < 1.5) {
        ihbarSureHafta = 4;
    } else if (workYears < 3) {
        ihbarSureHafta = 6;
    } else {
        ihbarSureHafta = 8;
    }
    
    // İhbar brüt (aylık maaşın haftaya bölünmesi)
    ihbarBrut = (aylikBrutMaas / 4.345) * ihbarSureHafta;
    
    // SGK işçi primi (İhbar için %15)
    ihbarSGK = ihbarBrut * 0.15;
    
    // Gelir vergisi matrahı
    const ihbarMatrah = ihbarBrut - ihbarSGK;
    
    // Kümülatif matraha ekleme
    ihbarKumulatifMatrah = kumulatifMatrah + ihbarMatrah;
    
    // Gelir vergisi hesaplama (kümülatif)
    const vergiOncesi = calculateIncomeTax(kumulatifMatrah);
    const vergiSonrasi = calculateIncomeTax(ihbarKumulatifMatrah);
    ihbarGelirVergisi = vergiSonrasi - vergiOncesi;
    
    // Vergi dilimi dağılımı
    ihbarVergiDagilim = calculateTaxBracketDetails(ihbarKumulatifMatrah);
    
    // Damga vergisi
    ihbarDamga = ihbarBrut * 0.00759;
    
    // Net ihbar
    ihbarNet = ihbarBrut - ihbarSGK - ihbarGelirVergisi - ihbarDamga;
    
    // YILLIK İZİN HESAPLAMA
    // Otomatik hesaplanan izin hakkını al ve input'a yaz (eğer değiştirilmemişse)
    const hesaplananIzinHakki = calculateAnnualLeave(workYears);
    const mevcutIzinHakki = parseFloat(document.getElementById('izinHakki').value);
    
    // Eğer input boş veya 0 ise otomatik hesaplanana set et
    if (!mevcutIzinHakki || mevcutIzinHakki === 0) {
        document.getElementById('izinHakki').value = hesaplananIzinHakki;
    }
    
    const yillikIzinHakki = parseFloat(document.getElementById('izinHakki').value) || hesaplananIzinHakki;
    const kalanIzin = Math.max(0, yillikIzinHakki - kullanilanIzin);
    const gunlukUcret = aylikBrutMaas / 30;
    const izinBrut = gunlukUcret * kalanIzin;
    const izinSGK = izinBrut * 0.15;
    const izinMatrah = izinBrut - izinSGK;
    
    // İzin için gelir vergisi (kümülatif hesaba dahil)
    const izinKumulatifMatrah = ihbarKumulatifMatrah + izinMatrah;
    const vergiIhbarSonrasi = calculateIncomeTax(ihbarKumulatifMatrah);
    const vergiIzinSonrasi = calculateIncomeTax(izinKumulatifMatrah);
    const izinGelirVergisi = vergiIzinSonrasi - vergiIhbarSonrasi;
    
    const izinDamga = izinBrut * 0.00759;
    const izinNet = izinBrut - izinSGK - izinGelirVergisi - izinDamga;
    
    // PAKET TEKLİFİ HESAPLAMA
    const paketBrutMaas = parseFloat(document.getElementById('paketBrutMaas').value) || 0;
    const paketSayisi = parseFloat(document.getElementById('paketSayisi').value) || 0;
    
    let paketNetMaas = 0;
    let paketToplam = 0;
    
    if (paketBrutMaas > 0) {
        // Paket için net maaş hesaplama (kesintiler düşülmüş)
        const paketSGK = paketBrutMaas * 0.15;
        const paketIssizlik = paketBrutMaas * 0.01;
        const paketDamga = paketBrutMaas * 0.00759;
        
        // Paket için gelir vergisi (matrah üzerinden ortalama %25 varsayımı)
        const paketMatrah = paketBrutMaas - paketSGK - paketIssizlik;
        const paketGelirVergisi = paketMatrah * 0.25; // Ortalama oran
        
        paketNetMaas = paketBrutMaas - paketSGK - paketIssizlik - paketGelirVergisi - paketDamga;
        paketToplam = paketNetMaas * paketSayisi;
    }
    
    // TOPLAMLAR
    const toplamVergi = kidemDamga + ihbarSGK + ihbarGelirVergisi + ihbarDamga + izinSGK + izinGelirVergisi + izinDamga;
    const toplamTazminat = kidemNet + ihbarNet + izinNet + paketToplam;
    
    // Sonuçları göster
    // Kıdem
    document.getElementById('kidemCalismaYili').textContent = workYears.toFixed(2) + ' yıl';
    document.getElementById('kidemEsasTutar').textContent = formatCurrency(aylikBrutMaas / 30);
    document.getElementById('kidemGun').textContent = kidemGun + ' gün';
    document.getElementById('kidemBrutHesaplanan').textContent = formatCurrency(kidemBrutHesaplanan);
    
    // Kıdem Brüt Hesaplanan'ın net karşılığı (damga vergisi düşülmüş)
    const kidemBrutHesaplananNet = kidemBrutHesaplanan * (1 - 0.00759);
    document.getElementById('kidemBrutHesaplananNet').textContent = formatCurrency(kidemBrutHesaplananNet);
    
    document.getElementById('kidemTavan').textContent = formatCurrency(KIDEM_TAVAN);
    document.getElementById('kidemBrut').textContent = formatCurrency(kidemBrut);
    document.getElementById('kidemDamga').textContent = formatCurrency(kidemDamga);
    document.getElementById('kidemNet').textContent = formatCurrency(kidemNet);
    document.getElementById('kidemUSD').textContent = '$' + (kidemNet / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('kidemEUR').textContent = '€' + (kidemNet / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // İhbar
    document.getElementById('ihbarEsasTutar').textContent = formatCurrency(aylikBrutMaas);
    document.getElementById('ihbarSure').textContent = ihbarSureHafta + ' hafta';
    document.getElementById('ihbarBrut').textContent = formatCurrency(ihbarBrut);
    document.getElementById('ihbarSGK').textContent = formatCurrency(ihbarSGK);
    document.getElementById('ihbarKumulatifMatrah').textContent = formatCurrency(ihbarKumulatifMatrah);
    document.getElementById('ihbarVergiDagilim').textContent = ihbarVergiDagilim;
    document.getElementById('ihbarGelirVergisi').textContent = formatCurrency(ihbarGelirVergisi);
    document.getElementById('ihbarDamga').textContent = formatCurrency(ihbarDamga);
    document.getElementById('ihbarNet').textContent = formatCurrency(ihbarNet);
    document.getElementById('ihbarUSD').textContent = '$' + (ihbarNet / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('ihbarEUR').textContent = '€' + (ihbarNet / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Yıllık İzin (izinHakki artık input olduğu için set edilmiyor)
    document.getElementById('kalanIzin').textContent = kalanIzin + ' gün';
    document.getElementById('gunlukUcret').textContent = formatCurrency(gunlukUcret);
    document.getElementById('izinBrut').textContent = formatCurrency(izinBrut);
    document.getElementById('izinSGK').textContent = formatCurrency(izinSGK);
    document.getElementById('izinGelirVergisi').textContent = formatCurrency(izinGelirVergisi);
    document.getElementById('izinDamga').textContent = formatCurrency(izinDamga);
    document.getElementById('izinNet').textContent = formatCurrency(izinNet);
    
    // Paket Teklifi
    document.getElementById('paketNetMaas').textContent = formatCurrency(paketNetMaas);
    document.getElementById('paketToplam').textContent = formatCurrency(paketToplam);
    
    // Toplamlar - Kalem kalem
    document.getElementById('toplamKidem').textContent = formatCurrency(kidemNet);
    document.getElementById('toplamIhbar').textContent = formatCurrency(ihbarNet);
    document.getElementById('toplamIzin').textContent = formatCurrency(izinNet);
    document.getElementById('toplamVergi').textContent = formatCurrency(toplamVergi);
    document.getElementById('toplamPaket').textContent = formatCurrency(paketToplam);
    document.getElementById('toplamTazminat').textContent = formatCurrency(toplamTazminat);
    document.getElementById('toplamUSD').textContent = '$' + (toplamTazminat / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('toplamEUR').textContent = '€' + (toplamTazminat / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Event listeners
document.getElementById('isGirisTarihi').addEventListener('change', function() {
    updateWorkDuration();
    calculateSeverance();
});

document.getElementById('istenCikisTarihi').addEventListener('change', function() {
    updateWorkDuration();
    calculateSeverance();
});

document.getElementById('aylikBrutMaas').addEventListener('input', calculateSeverance);
document.getElementById('kumulatifMatrah').addEventListener('input', calculateSeverance);
document.getElementById('yillikEkGelir').addEventListener('input', calculateSeverance);

// Sayfa yüklendiğinde hesapla
window.addEventListener('load', function() {
    updateWorkDuration();
    calculateSeverance();
});

// PDF Export Fonksiyonu
function exportTazminatToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Türkçe karakter düzeltme
    const fixTurkishChars = (text) => {
        if (!text) return '';
        return text.toString()
            .replace(/ş/g, 's').replace(/Ş/g, 'S')
            .replace(/ğ/g, 'g').replace(/Ğ/g, 'G')
            .replace(/ü/g, 'u').replace(/Ü/g, 'U')
            .replace(/ö/g, 'o').replace(/Ö/g, 'O')
            .replace(/ç/g, 'c').replace(/Ç/g, 'C')
            .replace(/ı/g, 'i').replace(/İ/g, 'I')
            .replace(/₺/g, 'TL');
    };
    
    // Başlık
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Kidem ve Ihbar Tazminati Hesaplama Raporu', 14, 15);
    
    // Tarih
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')}`, 14, 22);
    
    // Çalışma Süresi
    const toplamSure = document.getElementById('toplamSure').textContent;
    doc.text(`Toplam Calisma Suresi: ${fixTurkishChars(toplamSure)}`, 14, 28);
    
    // Kıdem Tazminatı Tablosu
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Kidem Tazminati', 14, 38);
    
    const kidemData = [
        ['Calisma Suresi', fixTurkishChars(document.getElementById('kidemCalismaYili').textContent)],
        ['Hesaplamaya Esas Tutar', fixTurkishChars(document.getElementById('kidemEsasTutar').textContent)],
        ['Kidem Gunu', fixTurkishChars(document.getElementById('kidemGun').textContent)],
        ['Kidem Brut (Hesaplanan)', fixTurkishChars(document.getElementById('kidemBrutHesaplanan').textContent)],
        ['Kidem Tazminati Tavani', fixTurkishChars(document.getElementById('kidemTavan').textContent)],
        ['Kidem Brut (Tavan Uygulanmis)', fixTurkishChars(document.getElementById('kidemBrut').textContent)],
        ['Damga Vergisi (%0.759)', fixTurkishChars(document.getElementById('kidemDamga').textContent)],
        ['KIDEM NET', fixTurkishChars(document.getElementById('kidemNet').textContent)]
    ];
    
    doc.autoTable({
        body: kidemData,
        startY: 42,
        styles: {
            fontSize: 10,
            cellPadding: 3
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 80 },
            1: { halign: 'right', cellWidth: 60 }
        }
    });
    
    // İhbar Tazminatı Tablosu
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Ihbar Tazminati', 14, finalY);
    
    const ihbarData = [
        ['Hesaplamaya Esas Tutar', fixTurkishChars(document.getElementById('ihbarEsasTutar').textContent)],
        ['Ihbar Suresi', fixTurkishChars(document.getElementById('ihbarSure').textContent)],
        ['Ihbar Brut', fixTurkishChars(document.getElementById('ihbarBrut').textContent)],
        ['SGK Isci Primi (%15)', fixTurkishChars(document.getElementById('ihbarSGK').textContent)],
        ['Gelir Vergisi', fixTurkishChars(document.getElementById('ihbarGelirVergisi').textContent)],
        ['Damga Vergisi', fixTurkishChars(document.getElementById('ihbarDamga').textContent)],
        ['IHBAR NET', fixTurkishChars(document.getElementById('ihbarNet').textContent)]
    ];
    
    doc.autoTable({
        body: ihbarData,
        startY: finalY + 4,
        styles: {
            fontSize: 10,
            cellPadding: 3
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 80 },
            1: { halign: 'right', cellWidth: 60 }
        }
    });
    
    // Yıllık İzin Tablosu
    const finalY2 = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Yillik Izin', 14, finalY2);
    
    const izinData = [
        ['Yillik Izin Hakki', fixTurkishChars(document.getElementById('izinHakki').value + ' gun')],
        ['Kullanilan Izin', fixTurkishChars(document.getElementById('kullanilanIzin').value + ' gun')],
        ['Kalan Izin Gunu', fixTurkishChars(document.getElementById('kalanIzin').textContent)],
        ['Gunluk Brut Ucret', fixTurkishChars(document.getElementById('gunlukUcret').textContent)],
        ['Izin Brut Tutari', fixTurkishChars(document.getElementById('izinBrut').textContent)],
        ['SGK Isci Primi (%15)', fixTurkishChars(document.getElementById('izinSGK').textContent)],
        ['Gelir Vergisi', fixTurkishChars(document.getElementById('izinGelirVergisi').textContent)],
        ['Damga Vergisi (%0.759)', fixTurkishChars(document.getElementById('izinDamga').textContent)],
        ['IZIN NET', fixTurkishChars(document.getElementById('izinNet').textContent)]
    ];
    
    doc.autoTable({
        body: izinData,
        startY: finalY2 + 4,
        styles: {
            fontSize: 10,
            cellPadding: 3
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 80 },
            1: { halign: 'right', cellWidth: 60 }
        }
    });
    
    // Paket Teklifi
    const finalY3 = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Paket Teklifi (Dava Onleme)', 14, finalY3);
    
    const paketData = [
        ['Paket Icin Brut Maas', fixTurkishChars(document.getElementById('paketBrutMaas').value + ' TL')],
        ['Paket Icin Net Maas', fixTurkishChars(document.getElementById('paketNetMaas').textContent)],
        ['Paket Sayisi', fixTurkishChars(document.getElementById('paketSayisi').value + ' ay')],
        ['TOPLAM PAKET TUTARI (NET)', fixTurkishChars(document.getElementById('paketToplam').textContent)]
    ];
    
    doc.autoTable({
        body: paketData,
        startY: finalY3 + 4,
        styles: {
            fontSize: 10,
            cellPadding: 3
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 80 },
            1: { halign: 'right', cellWidth: 60 }
        }
    });
    
    // Genel Toplam
    const finalY4 = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    
    const toplamData = [
        ['Kidem Tazminati (Net)', fixTurkishChars(document.getElementById('toplamKidem').textContent)],
        ['Ihbar Tazminati (Net)', fixTurkishChars(document.getElementById('toplamIhbar').textContent)],
        ['Yillik Izin Ucreti (Net)', fixTurkishChars(document.getElementById('toplamIzin').textContent)],
        ['Paket Tutari (Net)', fixTurkishChars(document.getElementById('toplamPaket').textContent)]
    ];
    
    doc.autoTable({
        body: toplamData,
        startY: finalY4,
        styles: {
            fontSize: 11,
            cellPadding: 4,
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { cellWidth: 80 },
            1: { halign: 'right', cellWidth: 60 }
        }
    });
    
    // Toplam Vergi ve Genel Toplam
    const finalY5 = doc.lastAutoTable.finalY + 5;
    const toplamVergi = fixTurkishChars(document.getElementById('toplamVergi').textContent);
    const genelToplam = fixTurkishChars(document.getElementById('toplamTazminat').textContent);
    
    doc.setFontSize(12);
    doc.text(`Toplam Vergi: ${toplamVergi}`, 14, finalY5);
    
    doc.setFontSize(16);
    doc.setTextColor(220, 53, 69);
    doc.text(`GENEL TOPLAM (NET): ${genelToplam}`, 14, finalY5 + 8);
    
    // PDF'i indir
    const fileName = `Tazminat_Hesaplama_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
}

// Excel Export Fonksiyonu
function exportTazminatToExcel() {
    const wb = XLSX.utils.book_new();
    
    // Genel Bilgiler
    const genelBilgiler = [
        ['KIDEM VE IHBAR TAZMINATI HESAPLAMA RAPORU', ''],
        ['', ''],
        ['Rapor Tarihi:', new Date().toLocaleDateString('tr-TR')],
        ['Is Giris Tarihi:', document.getElementById('isGirisTarihi').value],
        ['Isten Cikis Tarihi:', document.getElementById('istenCikisTarihi').value],
        ['Toplam Calisma Suresi:', document.getElementById('toplamSure').textContent],
        ['', '']
    ];
    
    // Kıdem Tazminatı
    const kidemBaslik = [['KIDEM TAZMINATI', '']];
    const kidemData = [
        ['Calisma Suresi', document.getElementById('kidemCalismaYili').textContent],
        ['Hesaplamaya Esas Tutar', document.getElementById('kidemEsasTutar').textContent],
        ['Kidem Gunu', document.getElementById('kidemGun').textContent],
        ['Kidem Brut (Hesaplanan)', document.getElementById('kidemBrutHesaplanan').textContent],
        ['Kidem Tazminati Tavani', document.getElementById('kidemTavan').textContent],
        ['Kidem Brut (Tavan Uygulanmis)', document.getElementById('kidemBrut').textContent],
        ['Damga Vergisi (%0.759)', document.getElementById('kidemDamga').textContent],
        ['KIDEM NET', document.getElementById('kidemNet').textContent],
        ['USD Karsiligi', document.getElementById('kidemUSD').textContent],
        ['EUR Karsiligi', document.getElementById('kidemEUR').textContent]
    ];
    
    // İhbar Tazminatı
    const ihbarBaslik = [['', ''], ['IHBAR TAZMINATI', '']];
    const ihbarData = [
        ['Hesaplamaya Esas Tutar', document.getElementById('ihbarEsasTutar').textContent],
        ['Ihbar Suresi', document.getElementById('ihbarSure').textContent],
        ['Ihbar Brut', document.getElementById('ihbarBrut').textContent],
        ['SGK Isci Primi (%15)', document.getElementById('ihbarSGK').textContent],
        ['Gelir Vergisi', document.getElementById('ihbarGelirVergisi').textContent],
        ['Damga Vergisi', document.getElementById('ihbarDamga').textContent],
        ['IHBAR NET', document.getElementById('ihbarNet').textContent],
        ['USD Karsiligi', document.getElementById('ihbarUSD').textContent],
        ['EUR Karsiligi', document.getElementById('ihbarEUR').textContent]
    ];
    
    // Yıllık İzin
    const izinBaslik = [['', ''], ['YILLIK IZIN', '']];
    const izinData = [
        ['Yillik Izin Hakki', document.getElementById('izinHakki').value + ' gun'],
        ['Kullanilan Izin', document.getElementById('kullanilanIzin').value + ' gun'],
        ['Kalan Izin Gunu', document.getElementById('kalanIzin').textContent],
        ['Gunluk Brut Ucret', document.getElementById('gunlukUcret').textContent],
        ['Izin Brut Tutari', document.getElementById('izinBrut').textContent],
        ['SGK Isci Primi (%15)', document.getElementById('izinSGK').textContent],
        ['Gelir Vergisi', document.getElementById('izinGelirVergisi').textContent],
        ['Damga Vergisi (%0.759)', document.getElementById('izinDamga').textContent],
        ['IZIN NET', document.getElementById('izinNet').textContent]
    ];
    
    // Paket Teklifi
    const paketBaslik = [['', ''], ['PAKET TEKLIFI (DAVA ONLEME)', '']];
    const paketTeklifData = [
        ['Paket Icin Brut Maas', document.getElementById('paketBrutMaas').value + ' TL'],
        ['Paket Icin Net Maas', document.getElementById('paketNetMaas').textContent],
        ['Paket Sayisi', document.getElementById('paketSayisi').value + ' ay'],
        ['TOPLAM PAKET TUTARI (NET)', document.getElementById('paketToplam').textContent]
    ];
    
    // Genel Toplam
    const genelToplamBaslik = [['', ''], ['TOPLAM OZET', '']];
    const genelToplamData = [
        ['Kidem Tazminati (Net)', document.getElementById('toplamKidem').textContent],
        ['Ihbar Tazminati (Net)', document.getElementById('toplamIhbar').textContent],
        ['Yillik Izin Ucreti (Net)', document.getElementById('toplamIzin').textContent],
        ['Paket Tutari (Net)', document.getElementById('toplamPaket').textContent],
        ['Toplam Vergi', document.getElementById('toplamVergi').textContent],
        ['', ''],
        ['GENEL TOPLAM (NET)', document.getElementById('toplamTazminat').textContent]
    ];
    
    // Tüm verileri birleştir
    const allData = [...genelBilgiler, ...kidemBaslik, ...kidemData, ...ihbarBaslik, ...ihbarData, ...izinBaslik, ...izinData, ...paketBaslik, ...paketTeklifData, ...genelToplamBaslik, ...genelToplamData];
    
    const ws = XLSX.utils.aoa_to_sheet(allData);
    
    // Sütun genişlikleri
    ws['!cols'] = [{ wch: 30 }, { wch: 25 }];
    
    XLSX.utils.book_append_sheet(wb, ws, 'Tazminat Hesaplama');
    
    // Excel dosyasını indir
    const fileName = `Tazminat_Hesaplama_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
}
