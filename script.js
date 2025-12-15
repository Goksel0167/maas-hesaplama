// DÃƒÂ¶viz kurlarÃ„Â± iÃƒÂ§in global deÃ„Å¸iÃ…Å¸kenler
let exchangeRates = { USD: 34.50, EUR: 37.80 }; // VarsayÃ„Â±lan deÃ„Å¸erler

console.log('ÄŸÅ¸Å¡â‚¬ Script.js yÃƒÂ¼klendi - Versiyon: 2025121507');

// DÃƒÂ¶viz kurlarÃ„Â±nÃ„Â± ÃƒÂ§ek (Alternatif API)
async function fetchExchangeRates() {
    try {
        // Ãƒâ€“nce free API dene
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.TRY) {
            exchangeRates.USD = data.rates.TRY;
            exchangeRates.EUR = data.rates.TRY / data.rates.EUR;
            console.log('DÃƒÂ¶viz KurlarÃ„Â± GÃƒÂ¼ncellendi:', exchangeRates);
        }
    } catch (error) {
        console.log('DÃƒÂ¶viz kurlarÃ„Â± yÃƒÂ¼klenemedi, varsayÃ„Â±lan deÃ„Å¸erler kullanÃ„Â±lÃ„Â±yor:', error);
        console.log('VarsayÃ„Â±lan kurlar:', exchangeRates);
    }
}

// Sayfa yÃƒÂ¼klendiÃ„Å¸inde kurlarÃ„Â± ÃƒÂ§ek
fetchExchangeRates();

// YÃ„Â±llara gÃƒÂ¶re Gelir Vergisi Dilimleri ve AGI OranlarÃ„Â±
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
        // Tahmini deÃ„Å¸erler (2025 deÃ„Å¸erlerinin yaklaÃ…Å¸Ã„Â±k %45 artÃ„Â±rÃ„Â±lmÃ„Â±Ã…Å¸ hali - enflasyon tahmini)
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

// Aktif vergi dilimleri ve AGI oranlarÃ„Â± (varsayÃ„Â±lan 2025)
let TAX_BRACKETS = TAX_DATA[2025].brackets;
let AGI_RATES = TAX_DATA[2025].agi;

// Para formatÃ„Â±
function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' Ã¢â€šÂº';
}

// Emekli alanlarÃ„Â±nÃ„Â± gÃƒÂ¶ster/gizle
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

// Vergi dilimi detayÃ„Â±nÃ„Â± hesapla
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
            details.push(`%${percentage.toFixed(1)} Ã¢â€ â€™ %${rate}`);
        }

        totalProcessed += amountInBracket;
        if (totalProcessed >= yearlyIncome) break;
    }

    return details.join(' | ');
}

// Gelir vergisi hesaplama (kÃƒÂ¼mÃƒÂ¼latif)
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

// AGÃ„Â° oranÃ„Â±nÃ„Â± hesapla
function getAGIRate(medeniDurum, cocukSayisi) {
    if (medeniDurum === 'bekar') {
        return cocukSayisi > 0 ? AGI_RATES.evli[cocukSayisi] : AGI_RATES.bekar[0];
    } else {
        return AGI_RATES.evli[Math.min(cocukSayisi, 6)] || AGI_RATES.evli[0];
    }
}

// Ana hesaplama fonksiyonu
function calculate() {
    // SeÃƒÂ§ilen yÃ„Â±la gÃƒÂ¶re vergi dilimlerini ve AGI oranlarÃ„Â±nÃ„Â± gÃƒÂ¼ncelle
    const selectedYear = parseInt(document.getElementById('taxYear').value);
    TAX_BRACKETS = TAX_DATA[selectedYear].brackets;
    AGI_RATES = TAX_DATA[selectedYear].agi;

    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    
    // EÃ„Å¸er brÃƒÂ¼t maaÃ…Å¸ girilmemiÃ…Å¸se hesaplama yapma, sonuÃƒÂ§ bÃƒÂ¶lÃƒÂ¼mÃƒÂ¼nÃƒÂ¼ gizle
    if (brutMaas === 0) {
        document.getElementById('resultSection').style.display = 'none';
        return;
    }
    
    // SonuÃƒÂ§ bÃƒÂ¶lÃƒÂ¼mÃƒÂ¼nÃƒÂ¼ gÃƒÂ¶ster
    document.getElementById('resultSection').style.display = 'block';
    
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
        // EMEKLÃ„Â° Ãƒâ€¡ALIÃ…ÂAN HESAPLAMA
        sgkIsci = 0; // Emeklilerden SGK kesilmez
        issizlikIsci = 0; // Ã„Â°Ã…Å¸sizlik sigortasÃ„Â± kesilmez
        gelirVergisiMatrahi = brutMaas; // Emeklilerde matrah = brÃƒÂ¼t maaÃ…Å¸
        
        // Gelir vergisi - Ã„Â°lk ay iÃƒÂ§in basit hesaplama (Ocak ayÃ„Â± tahmini)
        // Not: YÃ„Â±llÃ„Â±k tabloda her ay iÃƒÂ§in kÃƒÂ¼mÃƒÂ¼latif hesaplama yapÃ„Â±lacak
        aylikGelirVergisi = calculateIncomeTax(gelirVergisiMatrahi);
        
        // AGÃ„Â° - Emeklilerde AGÃ„Â° uygulanmaz
        agi = 0;
        
        netGelirVergisi = aylikGelirVergisi;
    } else {
        // NORMAL Ãƒâ€¡ALIÃ…ÂAN HESAPLAMA
        // SGK Ã„Â°Ã…Å¸ÃƒÂ§i Primi (%14)
        sgkIsci = brutMaas * 0.14;

        // Ã„Â°Ã…Å¸sizlik SigortasÃ„Â± Ã„Â°Ã…Å¸ÃƒÂ§i Primi (%1)
        issizlikIsci = brutMaas * 0.01;

        // Gelir Vergisi MatrahÃ„Â±
        gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;

        // Gelir Vergisi (aylÃ„Â±k - basitleÃ…Å¸tirilmiÃ…Å¸)
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        aylikGelirVergisi = yillikGelirVergisi / 12;

        // AGÃ„Â° Hesaplama - Asgari ÃƒÂ¼cret ÃƒÂ¼zerinden hesaplanÃ„Â±r
        const asgariBrutUcret2025 = 22104.00; // 2025 asgari brÃƒÂ¼t ÃƒÂ¼cret
        const asgariBrutUcretYillik = asgariBrutUcret2025 * 12;
        const asgariSGK = asgariBrutUcret2025 * 0.14;
        const asgariIssizlik = asgariBrutUcret2025 * 0.01;
        const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
        const asgariMatrahYillik = asgariMatrah * 12;
        const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const yillikAGI = asgariGelirVergisiYillik * agiOrani;
        agi = yillikAGI / 12; // AylÃ„Â±k AGÃ„Â°

        // Net Gelir Vergisi
        netGelirVergisi = aylikGelirVergisi - agi;
    }
    
    // Damga Vergisi (%0.759) - Her iki durumda da kesilir
    const damgaVergisi = brutMaas * 0.00759;

    // Toplam Kesinti
    const toplamKesinti = sgkIsci + issizlikIsci + netGelirVergisi + damgaVergisi;

    // Net MaaÃ…Å¸
    const netMaas = brutMaas - toplamKesinti;

    // Ã„Â°Ã…Å¸veren Maliyetleri
    const sgkIsveren = brutMaas * 0.205;
    const issizlikIsveren = brutMaas * 0.02;
    const toplamMaliyet = brutMaas + sgkIsveren + issizlikIsveren;

    // SonuÃƒÂ§larÃ„Â± gÃƒÂ¶ster
    document.getElementById('brutMaas').textContent = formatCurrency(brutMaas);
    document.getElementById('netMaas').textContent = formatCurrency(netMaas);
    document.getElementById('netMaasUSD').textContent = '$' + (netMaas / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('netMaasEUR').textContent = 'Ã¢â€šÂ¬' + (netMaas / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

    // YÃ„Â±llÃ„Â±k tabloyu doldur
    fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, {ocak: primOcak, nisan: primNisan, temmuz: primTemmuz, ekim: primEkim}, calisanDurumu, emekliAyligi);
    
    // NOT: Tahmini Zam Hesaplama artÃ„Â±k baÃ„Å¸Ã„Â±msÃ„Â±z - calculateIndependentProjections() kullanÃ„Â±lÃ„Â±yor
}

// YÃ„Â±llÃ„Â±k tabloyu doldur
function fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, primTutarlari, calisanDurumu = 'normal', emekliAyligi = 0) {
    // YÃ„Â±llÃ„Â±k tablo bÃƒÂ¶lÃƒÂ¼mÃƒÂ¼nÃƒÂ¼ gÃƒÂ¶ster
    document.getElementById('annualSection').style.display = 'block';
    
    const tbody = document.getElementById('annualTableBody');
    const tfoot = document.getElementById('annualTableFoot');
    tbody.innerHTML = '';
    tfoot.innerHTML = '';

    const aylar = [
        'Ocak', 'Ã…Âubat', 'Mart', 'Nisan', 'MayÃ„Â±s', 'Haziran',
        'Temmuz', 'AÃ„Å¸ustos', 'EylÃƒÂ¼l', 'Ekim', 'KasÃ„Â±m', 'AralÃ„Â±k'
    ];

    // Prim ÃƒÂ¶deme aylarÃ„Â± ve tutarlarÃ„Â±
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
        // Prim kontrolÃƒÂ¼
        const aylikPrim = primMap[i] || 0;
        const toplamAylikBrut = brutMaas + aylikPrim;

        console.log(`${aylar[i]}: BrÃƒÂ¼t=${toplamAylikBrut}, KÃƒÂ¼mÃƒÂ¼latif Gelir Ãƒâ€“ncesi=${cumulativeIncome}`);

        let sgkIsci, issizlikIsci, gelirVergisiMatrahi, aylikGelirVergisi, agi, netGelirVergisi, vergiDilimiDetay;
        
        if (calisanDurumu === 'emekli') {
            // EMEKLÃ„Â° HESAPLAMA - KÃƒÂ¼mÃƒÂ¼latif vergi sistemi uygulanÃ„Â±r
            sgkIsci = 0;
            issizlikIsci = 0;
            gelirVergisiMatrahi = toplamAylikBrut; // Emeklilerde matrah = brÃƒÂ¼t maaÃ…Å¸
            
            // KÃƒÂ¼mÃƒÂ¼latif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // KÃƒÂ¼mÃƒÂ¼latif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayÃ„Â±
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGÃ„Â° - Emeklilerde AGÃ„Â° uygulanmaz
            agi = 0;
            
            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi;
            
            console.log(`${aylar[i]} (Emekli): KÃƒÂ¼mÃƒÂ¼latif=${cumulativeIncome}, AylÃ„Â±k Vergi=${aylikGelirVergisi}, Net Vergi=${netGelirVergisi}`);
        } else {
            // NORMAL Ãƒâ€¡ALIÃ…ÂAN HESAPLAMA
            sgkIsci = toplamAylikBrut * 0.14;
            issizlikIsci = toplamAylikBrut * 0.01;
            gelirVergisiMatrahi = toplamAylikBrut - sgkIsci - issizlikIsci;

            // KÃƒÂ¼mÃƒÂ¼latif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // KÃƒÂ¼mÃƒÂ¼latif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayÃ„Â±
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGÃ„Â° - Asgari ÃƒÂ¼cret ÃƒÂ¼zerinden sabit hesaplanÃ„Â±r
            const asgariBrutUcret2025 = 22104.00;
            const asgariSGK = asgariBrutUcret2025 * 0.14;
            const asgariIssizlik = asgariBrutUcret2025 * 0.01;
            const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
            const asgariMatrahYillik = asgariMatrah * 12;
            const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
            const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
            const yillikAGI = asgariGelirVergisiYillik * agiOrani;
            agi = yillikAGI / 12; // Her ay sabit AGÃ„Â° tutarÃ„Â±

            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi - agi;
        }
        
        const damgaVergisi = toplamAylikBrut * 0.00759;
        
        // KÃƒÂ¼mÃƒÂ¼latif vergi toplamÃ„Â±
        cumulativeTaxTotal += netGelirVergisi;

        // Net maaÃ…Å¸
        const netMaas = toplamAylikBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
        
        // DÃƒÂ¶viz karÃ…Å¸Ã„Â±lÃ„Â±klarÃ„Â±
        const netUSD = netMaas / exchangeRates.USD;
        const netEUR = netMaas / exchangeRates.EUR;
        
        // KÃ„Â±dem TazminatÃ„Â± BrÃƒÂ¼t (gÃƒÂ¼nlÃƒÂ¼k brÃƒÂ¼t x 30 gÃƒÂ¼n)
        const KIDEM_TAVAN = 53919.68; // 2025 tavanÃ„Â±
        const gunlukBrut = toplamAylikBrut / 30;
        const aylikKidemBrut = Math.min(gunlukBrut * 30, KIDEM_TAVAN);
        
        // Ã„Â°hbar TazminatÃ„Â± BrÃƒÂ¼t (ÃƒÂ§alÃ„Â±Ã…Å¸ma sÃƒÂ¼resine gÃƒÂ¶re)
        const ayIndex = i + 1; // 1-12 arasÃ„Â± ay
        const calismaAySayisi = i + 1; // Bu aya kadar geÃƒÂ§en ay sayÃ„Â±sÃ„Â±
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
        
        // KÃ„Â±dem ve Ã„Â°hbar Net hesaplamalarÃ„Â± (damga vergisi %0.759)
        const DAMGA_ORANI = 0.00759;
        const aylikKidemNet = aylikKidemBrut * (1 - DAMGA_ORANI);
        const aylikIhbarNet = aylikIhbarBrut * (1 - DAMGA_ORANI);

        // ToplamlarÃ„Â± gÃƒÂ¼ncelle
        toplamBrut += brutMaas;
        toplamPrim += aylikPrim;
        toplamSGKIsci += sgkIsci;
        toplamIssizlikIsci += issizlikIsci;
        toplamGelirVergisi += netGelirVergisi;
        toplamDamgaVergisi += damgaVergisi;
        toplamAGI += agi;
        toplamNet += netMaas;

        // SatÃ„Â±r oluÃ…Å¸tur
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
            <td style="color: #007bff; font-weight: 600;">Ã¢â€šÂ¬${netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td style="background: #e3f2fd; font-weight: 600;">${formatCurrency(aylikKidemNet)}</td>
            <td style="background: #fff3e0; font-weight: 600;">${formatCurrency(aylikIhbarNet)}</td>
        `;
        tbody.appendChild(row);
    }

    // Toplam satÃ„Â±rÃ„Â±
    const toplamNetUSD = toplamNet / exchangeRates.USD;
    const toplamNetEUR = toplamNet / exchangeRates.EUR;
    
    // Not: KÃ„Â±dem ve Ã„Â°hbar toplamlarÃ„Â± her ay iÃƒÂ§in zaten hesaplandÃ„Â±, ayrÃ„Â±ca toplamaya gerek yok
    
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
        <td style="color: #007bff;"><strong>Ã¢â€šÂ¬${toplamNetEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong></td>
        <td style="background: #e3f2fd;"><strong>-</strong></td>
        <td style="background: #fff3e0;"><strong>-</strong></td>
    `;
    tfoot.appendChild(totalRow);
}

// Netten brÃƒÂ¼te hesaplama fonksiyonu
function calculateNetToBrut() {
    // SeÃƒÂ§ilen yÃ„Â±la gÃƒÂ¶re vergi dilimlerini ve AGI oranlarÃ„Â±nÃ„Â± gÃƒÂ¼ncelle
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
    
    // Ã„Â°teratif yaklaÃ…Å¸Ã„Â±mla brÃƒÂ¼t maaÃ…Å¸ bulma
    let tahminBrut = hedefNetMaas * 1.5; // BaÃ…Å¸langÃ„Â±ÃƒÂ§ tahmini
    let tolerance = 0.01; // Tolerans
    let maxIterations = 100;
    let iteration = 0;
    
    while (iteration < maxIterations) {
        // Bu tahmini brÃƒÂ¼t maaÃ…Å¸la net hesapla
        const sgkIsci = tahminBrut * 0.14;
        const issizlikIsci = tahminBrut * 0.01;
        const gelirVergisiMatrahi = tahminBrut - sgkIsci - issizlikIsci;
        const damgaVergisi = tahminBrut * 0.00759;
        
        // YÃ„Â±llÃ„Â±k vergi hesaplama
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        const aylikGelirVergisi = yillikGelirVergisi / 12;
        
        // AGÃ„Â° - Asgari ÃƒÂ¼cret ÃƒÂ¼zerinden hesaplanÃ„Â±r
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
        
        // Fark kontrolÃƒÂ¼
        const fark = hedefNetMaas - hesaplananNet;
        
        if (Math.abs(fark) < tolerance) {
            break; // Yeterince yakÃ„Â±n
        }
        
        // Tahmini gÃƒÂ¼ncelle
        tahminBrut += fark * 1.3; // FarkÃ„Â± telafi etmek iÃƒÂ§in ayarlama
        iteration++;
    }
    
    // Bulunan brÃƒÂ¼t maaÃ…Å¸Ã„Â± ana forma aktar ve hesapla
    document.getElementById('salary').value = tahminBrut.toFixed(2);
    document.getElementById('medeniDurum').value = medeniDurum;
    document.getElementById('cocukSayisi').value = cocukSayisi;
    document.getElementById('primOcak').value = primOcak;
    document.getElementById('primNisan').value = primNisan;
    document.getElementById('primTemmuz').value = primTemmuz;
    document.getElementById('primEkim').value = primEkim;
    
    // BrÃƒÂ¼tten nete sekmesine geÃƒÂ§ ve hesapla
    // Sonucu göster
    showNetToBrutResult(tahminBrut, hedefNetMaas, medeniDurum, cocukSayisi);
    calculate();
}

// BaÃ„Å¸Ã„Â±msÃ„Â±z Tahmini Zam HesaplamasÃ„Â± (yeni - kendi input alanÃ„Â±ndan)
function calculateIndependentProjections() {
    console.log('calculateIndependentProjections ÃƒÂ§aÃ„Å¸rÃ„Â±ldÃ„Â±');
    
    const mevcutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    const hesaplamaTuru = document.querySelector('input[name="maasHesaplamaTuru"]:checked').value;
    
    // Label'Ã„Â± gÃƒÂ¼ncelle
    const label = document.getElementById('mevcutMaasLabel');
    if (hesaplamaTuru === 'brut') {
        label.textContent = 'Mevcut BrÃƒÂ¼t MaaÃ…Å¸ (Ã¢â€šÂº)';
    } else {
        label.textContent = 'Mevcut Net MaaÃ…Å¸ (Ã¢â€šÂº)';
    }
    
    console.log('Mevcut MaaÃ…Å¸:', mevcutMaas, 'TÃƒÂ¼r:', hesaplamaTuru);
    
    if (mevcutMaas === 0) {
        // MaaÃ…Å¸ girilmemiÃ…Å¸se hesaplama yapma, deÃ„Å¸erleri olduÃ„Å¸u gibi bÃ„Â±rak
        return;
    }
    
    // Net'ten brÃƒÂ¼te ÃƒÂ§evirme fonksiyonu (yaklaÃ…Å¸Ã„Â±k)
    function netToBrut(netMaas) {
        // Ã„Â°teratif yaklaÃ…Å¸Ã„Â±m ile net'ten brÃƒÂ¼t bulma
        let brutTahmin = netMaas * 1.45; // BaÃ…Å¸langÃ„Â±ÃƒÂ§ tahmini
        let iterasyon = 0;
        const maxIterasyon = 20;
        
        while (iterasyon < maxIterasyon) {
            const sgkIsci = brutTahmin * 0.14;
            const issizlikIsci = brutTahmin * 0.01;
            const damgaVergisi = brutTahmin * 0.00759;
            const gelirVergisiMatrahi = brutTahmin - sgkIsci - issizlikIsci;
            const gelirVergisi = gelirVergisiMatrahi * 0.20; // Ortalama %20
            
            const hesaplananNet = brutTahmin - sgkIsci - issizlikIsci - gelirVergisi - damgaVergisi;
            const fark = netMaas - hesaplananNet;
            
            if (Math.abs(fark) < 0.01) {
                break;
            }
            
            brutTahmin += fark * 1.45;
            iterasyon++;
        }
        
        return brutTahmin;
    }
    
    // Hesaplama tÃƒÂ¼rÃƒÂ¼ne gÃƒÂ¶re brÃƒÂ¼t maaÃ…Å¸Ã„Â± belirle
    let mevcutBrutMaas;
    if (hesaplamaTuru === 'net') {
        mevcutBrutMaas = netToBrut(mevcutMaas);
        console.log('Net\'ten dÃƒÂ¶nÃƒÂ¼Ã…Å¸tÃƒÂ¼rÃƒÂ¼len brÃƒÂ¼t:', mevcutBrutMaas);
    } else {
        mevcutBrutMaas = mevcutMaas;
    }
    
    // Basit hesaplama - AGI ve prim olmadan
    for (let i = 1; i <= 3; i++) {
        const zamOran = parseFloat(document.getElementById(`zam${i}Oran`).value) || 0;
        const zamAyValue = document.getElementById(`zam${i}Ay`).value;
        const zamAy = zamAyValue ? parseInt(zamAyValue) : null;
        
        console.log(`Senaryo ${i}: Zam OranÃ„Â±=${zamOran}%, Zam AyÃ„Â±=${zamAyValue}`);
        
        // EÃ„Å¸er ay seÃƒÂ§ilmemiÃ…Å¸se ama zam oranÃ„Â± girilmiÃ…Å¸se, varsayÃ„Â±lan olarak Ocak kabul et
        const effectiveZamAy = zamAy || 1;
        
        const yeniBrutMaas = mevcutBrutMaas * (1 + zamOran / 100);
        console.log(`Senaryo ${i}: Yeni BrÃƒÂ¼t=${yeniBrutMaas}`);
        
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
        
        // DÃƒÂ¶viz karÃ…Å¸Ã„Â±lÃ„Â±klarÃ„Â±
        const netUSD = ortalamaNetMaas / exchangeRates.USD;
        const netEUR = ortalamaNetMaas / exchangeRates.EUR;
        
        document.getElementById(`zam${i}Brut`).textContent = formatCurrency(yeniBrutMaas);
        document.getElementById(`zam${i}Net`).textContent = formatCurrency(ortalamaNetMaas);
        document.getElementById(`zam${i}USD`).textContent = '$' + netUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        document.getElementById(`zam${i}EUR`).textContent = 'Ã¢â€šÂ¬' + netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

// Sekme deÃ„Å¸iÃ…Å¸tirme
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

// Sayfa yÃƒÂ¼klendiÃ„Å¸inde hesapla
window.addEventListener('load', function() {
    calculate();
});

// Input deÃ„Å¸iÃ…Å¸ikliklerinde otomatik hesaplama
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

// Zam hesaplama input deÃ„Å¸iÃ…Å¸iklikleri
for (let i = 1; i <= 3; i++) {
    document.getElementById(`zam${i}Oran`).addEventListener('input', calculate);
    document.getElementById(`zam${i}Ay`).addEventListener('change', calculate);
}

// Vergi dilimi tablosunu gÃƒÂ¼ncelle
function updateTaxBracketTable() {
    console.log('updateTaxBracketTable ÃƒÂ§aÃ„Å¸rÃ„Â±ldÃ„Â±');
    
    const year = parseInt(document.getElementById('taxBracketYear').value);
    console.log('SeÃƒÂ§ilen yÃ„Â±l:', year);
    
    const yearData = TAX_DATA[year];
    console.log('YÃ„Â±l verisi:', yearData);
    
    const currentYear = new Date().getFullYear();
    
    if (!yearData) {
        console.error('YÃ„Â±l verisi bulunamadÃ„Â±!');
        return;
    }
    
    // BaÃ…Å¸lÃ„Â±Ã„Å¸Ã„Â± gÃƒÂ¼ncelle - 2026 ve ÃƒÂ¶ncesi iÃƒÂ§in tahmini etiketi kaldÃ„Â±r
    const isFuture = year > currentYear;
    const titleText = `${year} Gelir Vergisi Dilimleri${isFuture ? ' (Tahmini)' : ''}`;
    console.log('BaÃ…Å¸lÃ„Â±k:', titleText);
    
    document.getElementById('taxBracketTitle').textContent = titleText;
    document.getElementById('agiTitle').textContent = `Asgari GeÃƒÂ§im Ã„Â°ndirimi OranlarÃ„Â± (${year})`;
    
    // Tablo gÃƒÂ¶vdesini gÃƒÂ¼ncelle
    const tbody = document.getElementById('taxBracketTableBody');
    if (!tbody) {
        console.error('Tablo gÃƒÂ¶vdesi bulunamadÃ„Â±!');
        return;
    }
    
    tbody.innerHTML = '';
    console.log('Dilim sayÃ„Â±sÃ„Â±:', yearData.brackets.length);
    
    yearData.brackets.forEach((bracket, index) => {
        const row = document.createElement('tr');
        const minFormatted = bracket.min === 0 ? '0' : formatCurrency(bracket.min).replace(' Ã¢â€šÂº', '');
        const maxFormatted = bracket.max === Infinity ? 've ÃƒÂ¼zeri' : formatCurrency(bracket.max).replace(' Ã¢â€šÂº', '');
        
        row.innerHTML = `
            <td>${minFormatted} Ã¢â€šÂº ${bracket.max === Infinity ? '' : '- ' + maxFormatted + ' Ã¢â€šÂº'}</td>
            <td>%${(bracket.rate * 100).toFixed(0)}</td>
        `;
        tbody.appendChild(row);
        console.log(`SatÃ„Â±r ${index + 1} eklendi: ${minFormatted} - ${maxFormatted}`);
    });
    
    console.log('Tablo gÃƒÂ¼ncellendi');
}

// PDF Export Fonksiyonu
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4'); // Landscape, mm, A4
    
    // TÃƒÂ¼rkÃƒÂ§e karakter desteÃ„Å¸i iÃƒÂ§in charset ayarÃ„Â±
    doc.setLanguage("tr");
    
    // BaÃ…Å¸lÃ„Â±k
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Yillik Maas Hesaplama Raporu', 14, 15);
    
    // Tarih
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')}`, 14, 22);
    
    // BrÃƒÂ¼t maaÃ…Å¸ bilgisi
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli Calisan' : 'Normal Calisan';
    const brutMaasText = formatCurrency(brutMaas).replace('Ã¢â€šÂº', 'TL');
    doc.text(`Brut Maas: ${brutMaasText} | Calisan Durumu: ${calisanDurumu}`, 14, 28);
    
    // TÃƒÂ¼rkÃƒÂ§e karakterleri deÃ„Å¸iÃ…Å¸tiren yardÃ„Â±mcÃ„Â± fonksiyon
    const fixTurkishChars = (text) => {
        if (!text) return '';
        return text.toString()
            .replace(/Ã…Å¸/g, 's').replace(/Ã…Â/g, 'S')
            .replace(/Ã„Å¸/g, 'g').replace(/Ã„Â/g, 'G')
            .replace(/ÃƒÂ¼/g, 'u').replace(/ÃƒÅ“/g, 'U')
            .replace(/ÃƒÂ¶/g, 'o').replace(/Ãƒâ€“/g, 'O')
            .replace(/ÃƒÂ§/g, 'c').replace(/Ãƒâ€¡/g, 'C')
            .replace(/Ã„Â±/g, 'i').replace(/Ã„Â°/g, 'I')
            .replace(/Ã¢â€šÂº/g, 'TL')
            .replace(/Ã¢â€ â€™/g, '->')  // Ok iÃ…Å¸areti
            .replace(/Ã¢â€“Âº/g, '->')  // ÃƒÅ“ÃƒÂ§gen ok
            .replace(/Ã¢â‚¬Â¢/g, '*')   // Bullet point
            .replace(/Ã¢â‚¬â€œ/g, '-')   // En dash
            .replace(/Ã¢â‚¬â€/g, '-')   // Em dash
            .replace(/Ã¢â‚¬Â¦/g, '...') // Ellipsis
            .replace(/'/g, "'")   // Smart quote
            .replace(/'/g, "'")   // Smart quote
            .replace(/"/g, '"')   // Smart quote
            .replace(/"/g, '"');  // Smart quote
    };
    
    // Tablo verilerini topla
    const table = document.getElementById('annualTable');
    const headers = [];
    const rows = [];
    
    // BaÃ…Å¸lÃ„Â±klarÃ„Â± al ve TÃƒÂ¼rkÃƒÂ§e karakterleri dÃƒÂ¼zelt
    table.querySelectorAll('thead th').forEach(th => {
        headers.push(fixTurkishChars(th.textContent));
    });
    
    // SatÃ„Â±rlarÃ„Â± al (TOPLAM satÃ„Â±rÃ„Â± hariÃƒÂ§)
    table.querySelectorAll('tbody tr').forEach(tr => {
        const row = [];
        tr.querySelectorAll('td').forEach(td => {
            row.push(fixTurkishChars(td.textContent));
        });
        rows.push(row);
    });
    
    // Toplam satÃ„Â±rÃ„Â±nÃ„Â± al
    const totalRow = [];
    if (table.querySelector('tfoot tr')) {
        table.querySelector('tfoot tr').querySelectorAll('td').forEach(td => {
            totalRow.push(fixTurkishChars(td.textContent));
        });
    }
    
    // AutoTable ile tablo oluÃ…Å¸tur
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
            0: { halign: 'left' }, // Ay sÃƒÂ¼tunu sola hizalÃ„Â±
            3: { halign: 'left', fontSize: 6 } // Vergi dilimi detayÃ„Â± kÃƒÂ¼ÃƒÂ§ÃƒÂ¼k font
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });
    
    // Zam senaryolarÃ„Â± varsa ekle
    const zamBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    if (zamBrutMaas > 0) {
        const finalY = doc.lastAutoTable.finalY + 10;
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Tahmini Zam Senaryolari', 14, finalY);
        
        const zamHeaders = ['Senaryo', 'Zam Orani', 'Zam Ayi', 'Yeni Brut Maas', 'Yeni Net Maas (Ort.)'];
        const zamRows = [];
        
        for (let i = 1; i <= 3; i++) {
            const zamOran = document.getElementById(`zam${i}Oran`).value || '-';
            const zamAy = fixTurkishChars(document.getElementById(`zam${i}Ay`).selectedOptions[0]?.text || '-');
            const zamBrut = fixTurkishChars(document.getElementById(`zam${i}Brut`).textContent);
            const zamNet = fixTurkishChars(document.getElementById(`zam${i}Net`).textContent);
            
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
                    cellPadding: 3,
                    font: 'helvetica'
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
    
    // Ana tablo iÃƒÂ§in worksheet oluÃ…Å¸tur
    const table = document.getElementById('annualTable');
    const ws = XLSX.utils.table_to_sheet(table);
    
    // SÃƒÂ¼tun geniÃ…Å¸liklerini ayarla
    ws['!cols'] = [
        { wch: 10 },  // Ay
        { wch: 12 },  // BrÃƒÂ¼t MaaÃ…Å¸
        { wch: 12 },  // Prim
        { wch: 20 },  // Vergi Dilimi
        { wch: 12 },  // SGK Ã„Â°Ã…Å¸ÃƒÂ§i
        { wch: 12 },  // Ã„Â°Ã…Å¸sizlik Ã„Â°Ã…Å¸ÃƒÂ§i
        { wch: 12 },  // Gelir Vergisi
        { wch: 14 },  // KÃƒÂ¼mÃƒÂ¼latif Vergi
        { wch: 12 },  // Damga Vergisi
        { wch: 12 },  // AGÃ„Â°
        { wch: 14 },  // Net MaaÃ…Å¸
        { wch: 12 },  // Net USD
        { wch: 12 },  // Net EUR
        { wch: 12 },  // KÃ„Â±dem Net
        { wch: 12 }   // Ã„Â°hbar Net
    ];
    
    XLSX.utils.book_append_sheet(wb, ws, 'YÃ„Â±llÃ„Â±k Hesaplama');
    
    // Zam senaryolarÃ„Â± iÃƒÂ§in worksheet
    const zamBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    if (zamBrutMaas > 0) {
        const zamData = [
            ['Senaryo', 'Zam OranÃ„Â± (%)', 'Zam AyÃ„Â±', 'Yeni BrÃƒÂ¼t MaaÃ…Å¸', 'Yeni Net MaaÃ…Å¸ (Ort.)', 'USD', 'EUR']
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
            XLSX.utils.book_append_sheet(wb, wsZam, 'Zam SenaryolarÃ„Â±');
        }
    }
    
    // Ãƒâ€“zet bilgiler iÃƒÂ§in worksheet
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const netMaas = document.getElementById('netMaas').textContent;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli Ãƒâ€¡alÃ„Â±Ã…Å¸an' : 'Normal Ãƒâ€¡alÃ„Â±Ã…Å¸an';
    const toplamMaliyet = document.getElementById('toplamMaliyet').textContent;
    
    const ozet = [
        ['MaaÃ…Å¸ Hesaplama Ãƒâ€“zeti', ''],
        ['', ''],
        ['Rapor Tarihi:', new Date().toLocaleDateString('tr-TR')],
        ['Ãƒâ€¡alÃ„Â±Ã…Å¸an Durumu:', calisanDurumu],
        ['BrÃƒÂ¼t MaaÃ…Å¸:', formatCurrency(brutMaas)],
        ['Net MaaÃ…Å¸:', netMaas],
        ['Toplam Ã„Â°Ã…Å¸veren Maliyeti:', toplamMaliyet],
        ['', ''],
        ['Kesintiler', ''],
        ['SGK Ã„Â°Ã…Å¸ÃƒÂ§i Primi:', document.getElementById('sgkIsci').textContent],
        ['Ã„Â°Ã…Å¸sizlik Ã„Â°Ã…Å¸ÃƒÂ§i Primi:', document.getElementById('issizlikIsci').textContent],
        ['Gelir Vergisi:', document.getElementById('gelirVergisi').textContent],
        ['Damga Vergisi:', document.getElementById('damgaVergisi').textContent],
        ['AGÃ„Â°:', document.getElementById('agi').textContent]
    ];
    
    const wsOzet = XLSX.utils.aoa_to_sheet(ozet);
    wsOzet['!cols'] = [{ wch: 30 }, { wch: 20 }];
    XLSX.utils.book_append_sheet(wb, wsOzet, 'Ãƒâ€“zet');
    
    // Excel dosyasÃ„Â±nÃ„Â± indir
    const fileName = `Maas_Hesaplama_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

// Sayfa yÃƒÂ¼klendiÃ„Å¸inde tabloyu oluÃ…Å¸tur ve mevcut yÃ„Â±lÃ„Â± seÃƒÂ§
window.addEventListener('load', function() {
    const currentYear = new Date().getFullYear();
    const taxBracketYearSelect = document.getElementById('taxBracketYear');
    
    // Mevcut yÃ„Â±l 2026 veya sonrasÃ„Â±ysa, 2026'yÃ„Â± seÃƒÂ§
    if (currentYear >= 2026) {
        taxBracketYearSelect.value = '2026';
    }
    
    updateTaxBracketTable();
});

// Netten BrÃ¼te SonuÃ§ GÃ¶ster
function showNetToBrutResult(brutMaas, netMaas, medeniDurum, cocukSayisi) {
    const sgkIsci = brutMaas * 0.14;
    const issizlikIsci = brutMaas * 0.01;
    const gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;
    const damgaVergisi = brutMaas * 0.00759;
    const yillikMatrah = gelirVergisiMatrahi * 12;
    const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
    const aylikGelirVergisi = yillikGelirVergisi / 12;
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
    const hesaplananNet = brutMaas - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
    alert('Hedef Net: ' + formatCurrency(netMaas) + '\\nGereken BrÃ¼t: ' + formatCurrency(brutMaas) + '\\nHesaplanan Net: ' + formatCurrency(hesaplananNet));
}
