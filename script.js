// Döviz kurları için global değişkenler
let exchangeRates = { USD: 34.50, EUR: 37.80 }; // Varsayılan değerler

console.log('🚀 Script.js yüklendi - Versiyon: 2025121503');

// Döviz kurlarını çek (Alternatif API)
async function fetchExchangeRates() {
    try {
        // Önce free API dene
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.TRY) {
            exchangeRates.USD = data.rates.TRY;
            exchangeRates.EUR = data.rates.TRY / data.rates.EUR;
            console.log('Döviz Kurları Güncellendi:', exchangeRates);
        }
    } catch (error) {
        console.log('Döviz kurları yüklenemedi, varsayılan değerler kullanılıyor:', error);
        console.log('Varsayılan kurlar:', exchangeRates);
    }
}

// Sayfa yüklendiğinde kurları çek
fetchExchangeRates();

// Yıllara göre Gelir Vergisi Dilimleri ve AGI Oranları
const TAX_DATA = {
    2020: {
        brackets: [
            { min: 0, max: 22000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 22000, max: 49000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 49000, max: 180000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 180000, max: 600000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 600000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2021: {
        brackets: [
            { min: 0, max: 24000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 24000, max: 53000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 53000, max: 190000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 190000, max: 650000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 650000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2022: {
        brackets: [
            { min: 0, max: 32000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 32000, max: 70000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 70000, max: 250000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 250000, max: 880000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 880000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2023: {
        brackets: [
            { min: 0, max: 70000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 70000, max: 150000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 150000, max: 550000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 550000, max: 1900000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 1900000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2024: {
        brackets: [
            { min: 0, max: 110000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 110000, max: 230000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 230000, max: 870000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 870000, max: 3000000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 3000000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2025: {
        brackets: [
            { min: 0, max: 110000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 110000, max: 230000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 230000, max: 580000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 580000, max: 3000000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 3000000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    },
    2026: {
        // Tahmini değerler (2025 değerlerinin yaklaşık %45 artırılmış hali - enflasyon tahmini)
        brackets: [
            { min: 0, max: 160000, rate: 0.15, name: '1. Dilim (%15)' },
            { min: 160000, max: 335000, rate: 0.20, name: '2. Dilim (%20)' },
            { min: 335000, max: 840000, rate: 0.27, name: '3. Dilim (%27)' },
            { min: 840000, max: 4350000, rate: 0.35, name: '4. Dilim (%35)' },
            { min: 4350000, max: Infinity, rate: 0.40, name: '5. Dilim (%40)' }
        ],
        agi: {
            bekar: { 0: 0.50 },
            evli: { 0: 0.60, 1: 0.685, 2: 0.76, 3: 0.835, 4: 0.91, 5: 0.91, 6: 0.91 }
        }
    }
};

// Aktif vergi dilimleri ve AGI oranları (varsayılan 2025)
let TAX_BRACKETS = TAX_DATA[2025].brackets;
let AGI_RATES = TAX_DATA[2025].agi;

// Para formatı
function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' ₺';
}

// Emekli alanlarını göster/gizle
function toggleEmekliFields() {
    const calisanDurumu = document.getElementById('calisanDurumu').value;
    const emekliAyligiGroup = document.getElementById('emekliAyligiGroup');
    const emekliInfo = document.getElementById('emekliInfo');
    
    if (calisanDurumu === 'emekli') {
        emekliAyligiGroup.style.display = 'block';
        emekliInfo.style.display = 'block';
    } else {
        emekliAyligiGroup.style.display = 'none';
        emekliInfo.style.display = 'none';
    }
}

function toggleEmekliFields2() {
    const calisanDurumu = document.getElementById('calisanDurumu2').value;
    const emekliAyligiGroup = document.getElementById('emekliAyligiGroup2');
    
    if (calisanDurumu === 'emekli') {
        emekliAyligiGroup.style.display = 'block';
    } else {
        emekliAyligiGroup.style.display = 'none';
    }
}

// Vergi dilimini hesapla
function calculateTaxBracket(yearlyIncome) {
    for (let bracket of TAX_BRACKETS) {
        if (yearlyIncome >= bracket.min && yearlyIncome < bracket.max) {
            return bracket.name;
        }
    }
    return TAX_BRACKETS[TAX_BRACKETS.length - 1].name;
}

// Vergi dilimi detayını hesapla
function calculateTaxBracketDetails(yearlyIncome) {
    let details = [];
    let remainingIncome = yearlyIncome;
    let totalProcessed = 0;

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
            const percentage = (amountInBracket / yearlyIncome) * 100;
            const rate = (bracket.rate * 100).toFixed(0);
            details.push(`%${percentage.toFixed(1)} → %${rate}`);
        }

        totalProcessed += amountInBracket;
        if (totalProcessed >= yearlyIncome) break;
    }

    return details.join(' | ');
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

// AGİ oranını hesapla
function getAGIRate(medeniDurum, cocukSayisi) {
    if (medeniDurum === 'bekar') {
        return cocukSayisi > 0 ? AGI_RATES.evli[cocukSayisi] : AGI_RATES.bekar[0];
    } else {
        return AGI_RATES.evli[Math.min(cocukSayisi, 6)] || AGI_RATES.evli[0];
    }
}

// Ana hesaplama fonksiyonu
function calculate() {
    // Seçilen yıla göre vergi dilimlerini ve AGI oranlarını güncelle
    const selectedYear = parseInt(document.getElementById('taxYear').value);
    TAX_BRACKETS = TAX_DATA[selectedYear].brackets;
    AGI_RATES = TAX_DATA[selectedYear].agi;

    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const calisanDurumu = document.getElementById('calisanDurumu').value;
    const emekliAyligi = parseFloat(document.getElementById('emekliAyligi').value) || 0;
    const medeniDurum = document.getElementById('medeniDurum').value;
    const cocukSayisi = parseInt(document.getElementById('cocukSayisi').value) || 0;
    const primOcak = parseFloat(document.getElementById('primOcak').value) || 0;
    const primNisan = parseFloat(document.getElementById('primNisan').value) || 0;
    const primTemmuz = parseFloat(document.getElementById('primTemmuz').value) || 0;
    const primEkim = parseFloat(document.getElementById('primEkim').value) || 0;
    const engelliIndirimi = document.getElementById('engelliIndirimi').checked;
    const asgariBrutUcret = document.getElementById('asgariBrutUcret').checked;

    let sgkIsci, issizlikIsci, gelirVergisiMatrahi, aylikGelirVergisi, agi, netGelirVergisi;
    
    if (calisanDurumu === 'emekli') {
        // EMEKLİ ÇALIŞAN HESAPLAMA
        sgkIsci = 0; // Emeklilerden SGK kesilmez
        issizlikIsci = 0; // İşsizlik sigortası kesilmez
        gelirVergisiMatrahi = brutMaas; // Emeklilerde matrah = brüt maaş
        
        // Gelir vergisi - İlk ay için basit hesaplama (Ocak ayı tahmini)
        // Not: Yıllık tabloda her ay için kümülatif hesaplama yapılacak
        aylikGelirVergisi = calculateIncomeTax(gelirVergisiMatrahi);
        
        // AGİ - Emeklilerde AGİ uygulanmaz
        agi = 0;
        
        netGelirVergisi = aylikGelirVergisi;
    } else {
        // NORMAL ÇALIŞAN HESAPLAMA
        // SGK İşçi Primi (%14)
        sgkIsci = brutMaas * 0.14;

        // İşsizlik Sigortası İşçi Primi (%1)
        issizlikIsci = brutMaas * 0.01;

        // Gelir Vergisi Matrahı
        gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;

        // Gelir Vergisi (aylık - basitleştirilmiş)
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        aylikGelirVergisi = yillikGelirVergisi / 12;

        // AGİ Hesaplama - Asgari ücret üzerinden hesaplanır
        const asgariBrutUcret2025 = 22104.00; // 2025 asgari brüt ücret
        const asgariBrutUcretYillik = asgariBrutUcret2025 * 12;
        const asgariSGK = asgariBrutUcret2025 * 0.14;
        const asgariIssizlik = asgariBrutUcret2025 * 0.01;
        const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
        const asgariMatrahYillik = asgariMatrah * 12;
        const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const yillikAGI = asgariGelirVergisiYillik * agiOrani;
        agi = yillikAGI / 12; // Aylık AGİ

        // Net Gelir Vergisi
        netGelirVergisi = aylikGelirVergisi - agi;
    }
    
    // Damga Vergisi (%0.759) - Her iki durumda da kesilir
    const damgaVergisi = brutMaas * 0.00759;

    // Toplam Kesinti
    const toplamKesinti = sgkIsci + issizlikIsci + netGelirVergisi + damgaVergisi;

    // Net Maaş
    const netMaas = brutMaas - toplamKesinti;

    // İşveren Maliyetleri
    const sgkIsveren = brutMaas * 0.205;
    const issizlikIsveren = brutMaas * 0.02;
    const toplamMaliyet = brutMaas + sgkIsveren + issizlikIsveren;

    // Sonuçları göster
    document.getElementById('brutMaas').textContent = formatCurrency(brutMaas);
    document.getElementById('netMaas').textContent = formatCurrency(netMaas);
    document.getElementById('netMaasUSD').textContent = '$' + (netMaas / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('netMaasEUR').textContent = '€' + (netMaas / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('sgkIsci').textContent = formatCurrency(sgkIsci);
    document.getElementById('issizlikIsci').textContent = formatCurrency(issizlikIsci);
    document.getElementById('gelirVergisiMatrahi').textContent = formatCurrency(gelirVergisiMatrahi);
    document.getElementById('gelirVergisi').textContent = formatCurrency(netGelirVergisi);
    document.getElementById('damgaVergisi').textContent = formatCurrency(damgaVergisi);
    document.getElementById('agi').textContent = formatCurrency(agi);
    document.getElementById('toplamKesinti').textContent = formatCurrency(toplamKesinti);
    document.getElementById('sgkIsveren').textContent = formatCurrency(sgkIsveren);
    document.getElementById('issizlikIsveren').textContent = formatCurrency(issizlikIsveren);
    document.getElementById('toplamMaliyet').textContent = formatCurrency(toplamMaliyet);

    // Yıllık tabloyu doldur
    fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, {ocak: primOcak, nisan: primNisan, temmuz: primTemmuz, ekim: primEkim}, calisanDurumu, emekliAyligi);
    
    // NOT: Tahmini Zam Hesaplama artık bağımsız - calculateIndependentProjections() kullanılıyor
}

// Yıllık tabloyu doldur
function fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, primTutarlari, calisanDurumu = 'normal', emekliAyligi = 0) {
    const tbody = document.getElementById('annualTableBody');
    const tfoot = document.getElementById('annualTableFoot');
    tbody.innerHTML = '';
    tfoot.innerHTML = '';

    const aylar = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    // Prim ödeme ayları ve tutarları
    const primMap = {
        0: primTutarlari.ocak,    // Ocak
        3: primTutarlari.nisan,   // Nisan
        6: primTutarlari.temmuz,  // Temmuz
        9: primTutarlari.ekim     // Ekim
    };

    let toplamBrut = 0;
    let toplamPrim = 0;
    let toplamSGKIsci = 0;
    let toplamIssizlikIsci = 0;
    let toplamGelirVergisi = 0;
    let toplamDamgaVergisi = 0;
    let toplamAGI = 0;
    let toplamNet = 0;

    let cumulativeIncome = 0;
    let cumulativeTaxTotal = 0;

    for (let i = 0; i < 12; i++) {
        // Prim kontrolü
        const aylikPrim = primMap[i] || 0;
        const toplamAylikBrut = brutMaas + aylikPrim;

        console.log(`${aylar[i]}: Brüt=${toplamAylikBrut}, Kümülatif Gelir Öncesi=${cumulativeIncome}`);

        let sgkIsci, issizlikIsci, gelirVergisiMatrahi, aylikGelirVergisi, agi, netGelirVergisi, vergiDilimiDetay;
        
        if (calisanDurumu === 'emekli') {
            // EMEKLİ HESAPLAMA - Kümülatif vergi sistemi uygulanır
            sgkIsci = 0;
            issizlikIsci = 0;
            gelirVergisiMatrahi = toplamAylikBrut; // Emeklilerde matrah = brüt maaş
            
            // Kümülatif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // Kümülatif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayı
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGİ - Emeklilerde AGİ uygulanmaz
            agi = 0;
            
            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi;
            
            console.log(`${aylar[i]} (Emekli): Kümülatif=${cumulativeIncome}, Aylık Vergi=${aylikGelirVergisi}, Net Vergi=${netGelirVergisi}`);
        } else {
            // NORMAL ÇALIŞAN HESAPLAMA
            sgkIsci = toplamAylikBrut * 0.14;
            issizlikIsci = toplamAylikBrut * 0.01;
            gelirVergisiMatrahi = toplamAylikBrut - sgkIsci - issizlikIsci;

            // Kümülatif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // Kümülatif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayı
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGİ - Asgari ücret üzerinden sabit hesaplanır
            const asgariBrutUcret2025 = 22104.00;
            const asgariSGK = asgariBrutUcret2025 * 0.14;
            const asgariIssizlik = asgariBrutUcret2025 * 0.01;
            const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
            const asgariMatrahYillik = asgariMatrah * 12;
            const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
            const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
            const yillikAGI = asgariGelirVergisiYillik * agiOrani;
            agi = yillikAGI / 12; // Her ay sabit AGİ tutarı

            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi - agi;
        }
        
        const damgaVergisi = toplamAylikBrut * 0.00759;
        
        // Kümülatif vergi toplamı
        cumulativeTaxTotal += netGelirVergisi;

        // Net maaş
        const netMaas = toplamAylikBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
        
        // Döviz karşılıkları
        const netUSD = netMaas / exchangeRates.USD;
        const netEUR = netMaas / exchangeRates.EUR;
        
        // Kıdem Tazminatı Brüt (günlük brüt x 30 gün)
        const KIDEM_TAVAN = 53919.68; // 2025 tavanı
        const gunlukBrut = toplamAylikBrut / 30;
        const aylikKidemBrut = Math.min(gunlukBrut * 30, KIDEM_TAVAN);
        
        // İhbar Tazminatı Brüt (çalışma süresine göre)
        const ayIndex = i + 1; // 1-12 arası ay
        const calismaAySayisi = i + 1; // Bu aya kadar geçen ay sayısı
        let ihbarHafta = 0;
        
        if (calismaAySayisi >= 18 && calismaAySayisi < 36) {
            ihbarHafta = 2;
        } else if (calismaAySayisi >= 36 && calismaAySayisi < 60) {
            ihbarHafta = 4;
        } else if (calismaAySayisi >= 60 && calismaAySayisi < 84) {
            ihbarHafta = 6;
        } else if (calismaAySayisi >= 84) {
            ihbarHafta = 8;
        }
        
        const aylikIhbarBrut = (toplamAylikBrut / 30) * 7 * ihbarHafta;
        
        // Kıdem ve İhbar Net hesaplamaları (damga vergisi %0.759)
        const DAMGA_ORANI = 0.00759;
        const aylikKidemNet = aylikKidemBrut * (1 - DAMGA_ORANI);
        const aylikIhbarNet = aylikIhbarBrut * (1 - DAMGA_ORANI);

        // Toplamları güncelle
        toplamBrut += brutMaas;
        toplamPrim += aylikPrim;
        toplamSGKIsci += sgkIsci;
        toplamIssizlikIsci += issizlikIsci;
        toplamGelirVergisi += netGelirVergisi;
        toplamDamgaVergisi += damgaVergisi;
        toplamAGI += agi;
        toplamNet += netMaas;

        // Satır oluştur
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aylar[i]}</td>
            <td>${formatCurrency(brutMaas)}</td>
            <td style="background: ${aylikPrim > 0 ? '#d4edda' : '#f8f9fa'}; color: ${aylikPrim > 0 ? '#155724' : '#6c757d'}; font-weight: ${aylikPrim > 0 ? '700' : '400'};">${formatCurrency(aylikPrim)}</td>
            <td class="tax-bracket" style="font-size: 0.85em;">${vergiDilimiDetay}</td>
            <td>${formatCurrency(sgkIsci)}</td>
            <td>${formatCurrency(issizlikIsci)}</td>
            <td>${formatCurrency(netGelirVergisi)}</td>
            <td style="background: #fff3cd; font-weight: 600; color: #856404;">${formatCurrency(cumulativeTaxTotal)}</td>
            <td>${formatCurrency(damgaVergisi)}</td>
            <td>${formatCurrency(agi)}</td>
            <td><strong>${formatCurrency(netMaas)}</strong></td>
            <td style="color: #28a745; font-weight: 600;">$${netUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td style="color: #007bff; font-weight: 600;">€${netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td style="background: #e3f2fd; font-weight: 600;">${formatCurrency(aylikKidemNet)}</td>
            <td style="background: #fff3e0; font-weight: 600;">${formatCurrency(aylikIhbarNet)}</td>
        `;
        tbody.appendChild(row);
    }

    // Toplam satırı
    const toplamNetUSD = toplamNet / exchangeRates.USD;
    const toplamNetEUR = toplamNet / exchangeRates.EUR;
    
    // Not: Kıdem ve İhbar toplamları her ay için zaten hesaplandı, ayrıca toplamaya gerek yok
    
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td><strong>TOPLAM</strong></td>
        <td><strong>${formatCurrency(toplamBrut)}</strong></td>
        <td><strong>${formatCurrency(toplamPrim)}</strong></td>
        <td class="tax-bracket"><strong>-</strong></td>
        <td><strong>${formatCurrency(toplamSGKIsci)}</strong></td>
        <td><strong>${formatCurrency(toplamIssizlikIsci)}</strong></td>
        <td><strong>${formatCurrency(toplamGelirVergisi)}</strong></td>
        <td style="background: #fff3cd;"><strong>${formatCurrency(cumulativeTaxTotal)}</strong></td>
        <td><strong>${formatCurrency(toplamDamgaVergisi)}</strong></td>
        <td><strong>${formatCurrency(toplamAGI)}</strong></td>
        <td><strong>${formatCurrency(toplamNet)}</strong></td>
        <td style="color: #28a745;"><strong>$${toplamNetUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong></td>
        <td style="color: #007bff;"><strong>€${toplamNetEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong></td>
        <td style="background: #e3f2fd;"><strong>-</strong></td>
        <td style="background: #fff3e0;"><strong>-</strong></td>
    `;
    tfoot.appendChild(totalRow);
}

// Netten brüte hesaplama fonksiyonu
function calculateNetToBrut() {
    // Seçilen yıla göre vergi dilimlerini ve AGI oranlarını güncelle
    const selectedYear = parseInt(document.getElementById('taxYear2').value);
    TAX_BRACKETS = TAX_DATA[selectedYear].brackets;
    AGI_RATES = TAX_DATA[selectedYear].agi;

    const hedefNetMaas = parseFloat(document.getElementById('netSalary').value) || 0;
    const medeniDurum = document.getElementById('medeniDurum2').value;
    const cocukSayisi = parseInt(document.getElementById('cocukSayisi2').value) || 0;
    const primOcak = parseFloat(document.getElementById('primOcak2').value) || 0;
    const primNisan = parseFloat(document.getElementById('primNisan2').value) || 0;
    const primTemmuz = parseFloat(document.getElementById('primTemmuz2').value) || 0;
    const primEkim = parseFloat(document.getElementById('primEkim2').value) || 0;
    
    // İteratif yaklaşımla brüt maaş bulma
    let tahminBrut = hedefNetMaas * 1.5; // Başlangıç tahmini
    let tolerance = 0.01; // Tolerans
    let maxIterations = 100;
    let iteration = 0;
    
    while (iteration < maxIterations) {
        // Bu tahmini brüt maaşla net hesapla
        const sgkIsci = tahminBrut * 0.14;
        const issizlikIsci = tahminBrut * 0.01;
        const gelirVergisiMatrahi = tahminBrut - sgkIsci - issizlikIsci;
        const damgaVergisi = tahminBrut * 0.00759;
        
        // Yıllık vergi hesaplama
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        const aylikGelirVergisi = yillikGelirVergisi / 12;
        
        // AGİ - Asgari ücret üzerinden hesaplanır
        const asgariBrutUcret2025 = 22104.00;
        const asgariSGK = asgariBrutUcret2025 * 0.14;
        const asgariIssizlik = asgariBrutUcret2025 * 0.01;
        const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
        const asgariMatrahYillik = asgariMatrah * 12;
        const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const yillikAGI = asgariGelirVergisiYillik * agiOrani;
        const agi = yillikAGI / 12;
        const netGelirVergisi = aylikGelirVergisi - agi;
        
        // Hesaplanan net
        const hesaplananNet = tahminBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
        
        // Fark kontrolü
        const fark = hedefNetMaas - hesaplananNet;
        
        if (Math.abs(fark) < tolerance) {
            break; // Yeterince yakın
        }
        
        // Tahmini güncelle
        tahminBrut += fark * 1.3; // Farkı telafi etmek için ayarlama
        iteration++;
    }
    
    // Bulunan brüt maaşı ana forma aktar ve hesapla
    document.getElementById('salary').value = tahminBrut.toFixed(2);
    document.getElementById('medeniDurum').value = medeniDurum;
    document.getElementById('cocukSayisi').value = cocukSayisi;
    document.getElementById('primOcak').value = primOcak;
    document.getElementById('primNisan').value = primNisan;
    document.getElementById('primTemmuz').value = primTemmuz;
    document.getElementById('primEkim').value = primEkim;
    
    // Brütten nete sekmesine geç ve hesapla
    document.querySelectorAll('.tab-btn')[0].click();
    calculate();
}

// Bağımsız Tahmini Zam Hesaplaması (yeni - kendi input alanından)
function calculateIndependentProjections() {
    console.log('calculateIndependentProjections çağrıldı');
    
    const mevcutBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    console.log('Mevcut Brüt Maaş:', mevcutBrutMaas);
    
    if (mevcutBrutMaas === 0) {
        // Maaş girilmemişse hesaplama yapma, değerleri olduğu gibi bırak
        return;
    }
    
    // Basit hesaplama - AGI ve prim olmadan
    for (let i = 1; i <= 3; i++) {
        const zamOran = parseFloat(document.getElementById(`zam${i}Oran`).value) || 0;
        const zamAyValue = document.getElementById(`zam${i}Ay`).value;
        const zamAy = zamAyValue ? parseInt(zamAyValue) : null;
        
        console.log(`Senaryo ${i}: Zam Oranı=${zamOran}%, Zam Ayı=${zamAyValue}`);
        
        // Eğer ay seçilmemişse ama zam oranı girilmişse, varsayılan olarak Ocak kabul et
        const effectiveZamAy = zamAy || 1;
        
        const yeniBrutMaas = mevcutBrutMaas * (1 + zamOran / 100);
        console.log(`Senaryo ${i}: Yeni Brüt=${yeniBrutMaas}`);
        
        // Basit net hesaplama (ortalama)
        let yillikNet = 0;
        
        for (let ay = 1; ay <= 12; ay++) {
            const brutMaas = ay >= effectiveZamAy ? yeniBrutMaas : mevcutBrutMaas;
            
            const sgkIsci = brutMaas * 0.14;
            const issizlikIsci = brutMaas * 0.01;
            const damgaVergisi = brutMaas * 0.00759;
            
            // Basit gelir vergisi tahmini (%20 ortalama)
            const gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;
            const gelirVergisi = gelirVergisiMatrahi * 0.20;
            
            const netMaas = brutMaas - sgkIsci - issizlikIsci - gelirVergisi - damgaVergisi;
            yillikNet += netMaas;
        }
        
        const ortalamaNetMaas = yillikNet / 12;
        console.log(`Senaryo ${i}: Ortalama Net=${ortalamaNetMaas}`);
        
        // Döviz karşılıkları
        const netUSD = ortalamaNetMaas / exchangeRates.USD;
        const netEUR = ortalamaNetMaas / exchangeRates.EUR;
        
        document.getElementById(`zam${i}Brut`).textContent = formatCurrency(yeniBrutMaas);
        document.getElementById(`zam${i}Net`).textContent = formatCurrency(ortalamaNetMaas);
        document.getElementById(`zam${i}USD`).textContent = '$' + netUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        document.getElementById(`zam${i}EUR`).textContent = '€' + netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

// Sekme değiştirme
function switchTab(tab) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const brutToNetInputs = document.getElementById('brutToNetInputs');
    const netToBrutInputs = document.getElementById('netToBrutInputs');

    if (tab === 'net-to-brut') {
        brutToNetInputs.style.display = 'none';
        netToBrutInputs.style.display = 'block';
    } else {
        brutToNetInputs.style.display = 'block';
        netToBrutInputs.style.display = 'none';
    }
}

// Sayfa yüklendiğinde hesapla
window.addEventListener('load', function() {
    calculate();
});

// Input değişikliklerinde otomatik hesaplama
document.getElementById('salary').addEventListener('input', calculate);
document.getElementById('calisanDurumu').addEventListener('change', calculate);
document.getElementById('emekliAyligi').addEventListener('input', calculate);
document.getElementById('medeniDurum').addEventListener('change', calculate);
document.getElementById('cocukSayisi').addEventListener('input', calculate);
document.getElementById('primOcak').addEventListener('input', calculate);
document.getElementById('primNisan').addEventListener('input', calculate);
document.getElementById('primTemmuz').addEventListener('input', calculate);
document.getElementById('primEkim').addEventListener('input', calculate);
document.getElementById('engelliIndirimi').addEventListener('change', calculate);
document.getElementById('asgariBrutUcret').addEventListener('change', calculate);

// Zam hesaplama input değişiklikleri
for (let i = 1; i <= 3; i++) {
    document.getElementById(`zam${i}Oran`).addEventListener('input', calculate);
    document.getElementById(`zam${i}Ay`).addEventListener('change', calculate);
}

// Vergi dilimi tablosunu güncelle
function updateTaxBracketTable() {
    console.log('updateTaxBracketTable çağrıldı');
    
    const year = parseInt(document.getElementById('taxBracketYear').value);
    console.log('Seçilen yıl:', year);
    
    const yearData = TAX_DATA[year];
    console.log('Yıl verisi:', yearData);
    
    const currentYear = new Date().getFullYear();
    
    if (!yearData) {
        console.error('Yıl verisi bulunamadı!');
        return;
    }
    
    // Başlığı güncelle - 2026 ve öncesi için tahmini etiketi kaldır
    const isFuture = year > currentYear;
    const titleText = `${year} Gelir Vergisi Dilimleri${isFuture ? ' (Tahmini)' : ''}`;
    console.log('Başlık:', titleText);
    
    document.getElementById('taxBracketTitle').textContent = titleText;
    document.getElementById('agiTitle').textContent = `Asgari Geçim İndirimi Oranları (${year})`;
    
    // Tablo gövdesini güncelle
    const tbody = document.getElementById('taxBracketTableBody');
    if (!tbody) {
        console.error('Tablo gövdesi bulunamadı!');
        return;
    }
    
    tbody.innerHTML = '';
    console.log('Dilim sayısı:', yearData.brackets.length);
    
    yearData.brackets.forEach((bracket, index) => {
        const row = document.createElement('tr');
        const minFormatted = bracket.min === 0 ? '0' : formatCurrency(bracket.min).replace(' ₺', '');
        const maxFormatted = bracket.max === Infinity ? 've üzeri' : formatCurrency(bracket.max).replace(' ₺', '');
        
        row.innerHTML = `
            <td>${minFormatted} ₺ ${bracket.max === Infinity ? '' : '- ' + maxFormatted + ' ₺'}</td>
            <td>%${(bracket.rate * 100).toFixed(0)}</td>
        `;
        tbody.appendChild(row);
        console.log(`Satır ${index + 1} eklendi: ${minFormatted} - ${maxFormatted}`);
    });
    
    console.log('Tablo güncellendi');
}

// PDF Export Fonksiyonu
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4'); // Landscape, mm, A4
    
    // Başlık
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('Yıllık Maaş Hesaplama Raporu', 14, 15);
    
    // Tarih
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')}`, 14, 22);
    
    // Brüt maaş bilgisi
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli Çalışan' : 'Normal Çalışan';
    doc.text(`Brüt Maaş: ${formatCurrency(brutMaas)} | Çalışan Durumu: ${calisanDurumu}`, 14, 28);
    
    // Tablo verilerini topla
    const table = document.getElementById('annualTable');
    const headers = [];
    const rows = [];
    
    // Başlıkları al
    table.querySelectorAll('thead th').forEach(th => {
        headers.push(th.textContent);
    });
    
    // Satırları al (TOPLAM satırı hariç)
    table.querySelectorAll('tbody tr').forEach(tr => {
        const row = [];
        tr.querySelectorAll('td').forEach(td => {
            row.push(td.textContent);
        });
        rows.push(row);
    });
    
    // Toplam satırını al
    const totalRow = [];
    if (table.querySelector('tfoot tr')) {
        table.querySelector('tfoot tr').querySelectorAll('td').forEach(td => {
            totalRow.push(td.textContent);
        });
    }
    
    // AutoTable ile tablo oluştur
    doc.autoTable({
        head: [headers],
        body: rows,
        foot: totalRow.length > 0 ? [totalRow] : [],
        startY: 35,
        styles: {
            fontSize: 7,
            cellPadding: 2,
            halign: 'right',
            font: 'helvetica'
        },
        headStyles: {
            fillColor: [42, 82, 152],
            textColor: 255,
            fontStyle: 'bold',
            halign: 'center'
        },
        footStyles: {
            fillColor: [220, 220, 220],
            textColor: 0,
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { halign: 'left' }, // Ay sütunu sola hizalı
            3: { halign: 'left', fontSize: 6 } // Vergi dilimi detayı küçük font
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });
    
    // Zam senaryoları varsa ekle
    const zamBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    if (zamBrutMaas > 0) {
        const finalY = doc.lastAutoTable.finalY + 10;
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Tahmini Zam Senaryoları', 14, finalY);
        
        const zamHeaders = ['Senaryo', 'Zam Oranı', 'Zam Ayı', 'Yeni Brüt Maaş', 'Yeni Net Maaş (Ort.)'];
        const zamRows = [];
        
        for (let i = 1; i <= 3; i++) {
            const zamOran = document.getElementById(`zam${i}Oran`).value || '-';
            const zamAy = document.getElementById(`zam${i}Ay`).selectedOptions[0]?.text || '-';
            const zamBrut = document.getElementById(`zam${i}Brut`).textContent;
            const zamNet = document.getElementById(`zam${i}Net`).textContent;
            
            if (zamOran !== '-') {
                zamRows.push([`Senaryo ${i}`, `%${zamOran}`, zamAy, zamBrut, zamNet]);
            }
        }
        
        if (zamRows.length > 0) {
            doc.autoTable({
                head: [zamHeaders],
                body: zamRows,
                startY: finalY + 5,
                styles: {
                    fontSize: 9,
                    cellPadding: 3
                },
                headStyles: {
                    fillColor: [103, 126, 234],
                    textColor: 255,
                    fontStyle: 'bold'
                }
            });
        }
    }
    
    // PDF'i indir
    const fileName = `Maas_Hesaplama_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
}

// Excel Export Fonksiyonu
function exportToExcel() {
    const wb = XLSX.utils.book_new();
    
    // Ana tablo için worksheet oluştur
    const table = document.getElementById('annualTable');
    const ws = XLSX.utils.table_to_sheet(table);
    
    // Sütun genişliklerini ayarla
    ws['!cols'] = [
        { wch: 10 },  // Ay
        { wch: 12 },  // Brüt Maaş
        { wch: 12 },  // Prim
        { wch: 20 },  // Vergi Dilimi
        { wch: 12 },  // SGK İşçi
        { wch: 12 },  // İşsizlik İşçi
        { wch: 12 },  // Gelir Vergisi
        { wch: 14 },  // Kümülatif Vergi
        { wch: 12 },  // Damga Vergisi
        { wch: 12 },  // AGİ
        { wch: 14 },  // Net Maaş
        { wch: 12 },  // Net USD
        { wch: 12 },  // Net EUR
        { wch: 12 },  // Kıdem Net
        { wch: 12 }   // İhbar Net
    ];
    
    XLSX.utils.book_append_sheet(wb, ws, 'Yıllık Hesaplama');
    
    // Zam senaryoları için worksheet
    const zamBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    if (zamBrutMaas > 0) {
        const zamData = [
            ['Senaryo', 'Zam Oranı (%)', 'Zam Ayı', 'Yeni Brüt Maaş', 'Yeni Net Maaş (Ort.)', 'USD', 'EUR']
        ];
        
        for (let i = 1; i <= 3; i++) {
            const zamOran = document.getElementById(`zam${i}Oran`).value || '';
            const zamAy = document.getElementById(`zam${i}Ay`).selectedOptions[0]?.text || '';
            const zamBrut = document.getElementById(`zam${i}Brut`).textContent;
            const zamNet = document.getElementById(`zam${i}Net`).textContent;
            const zamUSD = document.getElementById(`zam${i}USD`).textContent;
            const zamEUR = document.getElementById(`zam${i}EUR`).textContent;
            
            if (zamOran) {
                zamData.push([`Senaryo ${i}`, zamOran, zamAy, zamBrut, zamNet, zamUSD, zamEUR]);
            }
        }
        
        if (zamData.length > 1) {
            const wsZam = XLSX.utils.aoa_to_sheet(zamData);
            wsZam['!cols'] = [
                { wch: 12 },
                { wch: 15 },
                { wch: 12 },
                { wch: 18 },
                { wch: 20 },
                { wch: 12 },
                { wch: 12 }
            ];
            XLSX.utils.book_append_sheet(wb, wsZam, 'Zam Senaryoları');
        }
    }
    
    // Özet bilgiler için worksheet
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const netMaas = document.getElementById('netMaas').textContent;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli Çalışan' : 'Normal Çalışan';
    const toplamMaliyet = document.getElementById('toplamMaliyet').textContent;
    
    const ozet = [
        ['Maaş Hesaplama Özeti', ''],
        ['', ''],
        ['Rapor Tarihi:', new Date().toLocaleDateString('tr-TR')],
        ['Çalışan Durumu:', calisanDurumu],
        ['Brüt Maaş:', formatCurrency(brutMaas)],
        ['Net Maaş:', netMaas],
        ['Toplam İşveren Maliyeti:', toplamMaliyet],
        ['', ''],
        ['Kesintiler', ''],
        ['SGK İşçi Primi:', document.getElementById('sgkIsci').textContent],
        ['İşsizlik İşçi Primi:', document.getElementById('issizlikIsci').textContent],
        ['Gelir Vergisi:', document.getElementById('gelirVergisi').textContent],
        ['Damga Vergisi:', document.getElementById('damgaVergisi').textContent],
        ['AGİ:', document.getElementById('agi').textContent]
    ];
    
    const wsOzet = XLSX.utils.aoa_to_sheet(ozet);
    wsOzet['!cols'] = [{ wch: 30 }, { wch: 20 }];
    XLSX.utils.book_append_sheet(wb, wsOzet, 'Özet');
    
    // Excel dosyasını indir
    const fileName = `Maas_Hesaplama_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

// Sayfa yüklendiğinde tabloyu oluştur ve mevcut yılı seç
window.addEventListener('load', function() {
    const currentYear = new Date().getFullYear();
    const taxBracketYearSelect = document.getElementById('taxBracketYear');
    
    // Mevcut yıl 2026 veya sonrasıysa, 2026'yı seç
    if (currentYear >= 2026) {
        taxBracketYearSelect.value = '2026';
    }
    
    updateTaxBracketTable();
});
