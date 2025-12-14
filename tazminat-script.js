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
        
        // Kıdem brüt (tavan kontrolü ile)
        kidemBrut = Math.min(kidemBrutHesaplanan, KIDEM_TAVAN);
        
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
    
    // TOPLAMLAR
    const toplamVergi = kidemDamga + ihbarSGK + ihbarGelirVergisi + ihbarDamga + izinSGK + izinGelirVergisi + izinDamga;
    const toplamTazminat = kidemNet + ihbarNet + izinNet;
    
    // Sonuçları göster
    // Kıdem
    document.getElementById('kidemCalismaYili').textContent = workYears.toFixed(2) + ' yıl';
    document.getElementById('kidemEsasTutar').textContent = formatCurrency(aylikBrutMaas / 30);
    document.getElementById('kidemGun').textContent = kidemGun + ' gün';
    document.getElementById('kidemBrutHesaplanan').textContent = formatCurrency(kidemBrutHesaplanan);
    document.getElementById('kidemTavan').textContent = formatCurrency(KIDEM_TAVAN);
    document.getElementById('kidemBrut').textContent = formatCurrency(kidemBrut);
    document.getElementById('kidemDamga').textContent = formatCurrency(kidemDamga);
    document.getElementById('kidemNet').textContent = formatCurrency(kidemNet);
    
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
    
    // Yıllık İzin (izinHakki artık input olduğu için set edilmiyor)
    document.getElementById('kalanIzin').textContent = kalanIzin + ' gün';
    document.getElementById('gunlukUcret').textContent = formatCurrency(gunlukUcret);
    document.getElementById('izinBrut').textContent = formatCurrency(izinBrut);
    document.getElementById('izinSGK').textContent = formatCurrency(izinSGK);
    document.getElementById('izinGelirVergisi').textContent = formatCurrency(izinGelirVergisi);
    document.getElementById('izinDamga').textContent = formatCurrency(izinDamga);
    document.getElementById('izinNet').textContent = formatCurrency(izinNet);
    
    // Toplamlar
    document.getElementById('toplamVergi').textContent = formatCurrency(toplamVergi);
    document.getElementById('toplamTazminat').textContent = formatCurrency(toplamTazminat);
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
