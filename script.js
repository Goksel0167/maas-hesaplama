console.log('Script yuklendi! v' + new Date().getTime());// DÃƒÆ’â‚¬Â¶viz kurlarÃƒâ€â‚¬Â± iÃƒÆ’â‚¬Â§in global deÃƒâ€Ã…Â¸iÃƒâ€¦Ã…Â¸kenler
let exchangeRates = { USD: 34.50, EUR: 37.80 }; // VarsayÃƒâ€â‚¬Â±lan deÃƒâ€Ã…Â¸erler

console.log('Ã„Å¸Ã…Â¸Ã…Â¡â‚¬â€šÂ¬ Script.js yÃƒÆ’â‚¬Â¼klendi - Versiyon: 2025121507');

// DÃƒÆ’â‚¬Â¶viz kurlarÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± ÃƒÆ’â‚¬Â§ek (Alternatif API)
async function fetchExchangeRates() {
    try {
        // ÃƒÆ’â‚¬â‚¬â€œnce free API dene
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.TRY) {
            exchangeRates.USD = data.rates.TRY;
            exchangeRates.EUR = data.rates.TRY / data.rates.EUR;
            console.log('DÃƒÆ’â‚¬Â¶viz KurlarÃƒâ€â‚¬Â± GÃƒÆ’â‚¬Â¼ncellendi:', exchangeRates);
        }
    } catch (error) {
        console.log('DÃƒÆ’â‚¬Â¶viz kurlarÃƒâ€â‚¬Â± yÃƒÆ’â‚¬Â¼klenemedi, varsayÃƒâ€â‚¬Â±lan deÃƒâ€Ã…Â¸erler kullanÃƒâ€â‚¬Â±lÃƒâ€â‚¬Â±yor:', error);
        console.log('VarsayÃƒâ€â‚¬Â±lan kurlar:', exchangeRates);
    }
}

// Sayfa yÃƒÆ’â‚¬Â¼klendiÃƒâ€Ã…Â¸inde kurlarÃƒâ€â‚¬Â± ÃƒÆ’â‚¬Â§ek
fetchExchangeRates();

// YÃƒâ€â‚¬Â±llara gÃƒÆ’â‚¬Â¶re Gelir Vergisi Dilimleri ve AGI OranlarÃƒâ€â‚¬Â±
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
        // Tahmini deÃƒâ€Ã…Â¸erler (2025 deÃƒâ€Ã…Â¸erlerinin yaklaÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±k %45 artÃƒâ€â‚¬Â±rÃƒâ€â‚¬Â±lmÃƒâ€â‚¬Â±Ãƒâ€¦Ã…Â¸ hali - enflasyon tahmini)
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

// Aktif vergi dilimleri ve AGI oranlarÃƒâ€â‚¬Â± (varsayÃƒâ€â‚¬Â±lan 2025)
let TAX_BRACKETS = TAX_DATA[2025].brackets;
let AGI_RATES = TAX_DATA[2025].agi;

// Para formatÃƒâ€â‚¬Â±
function formatCurrency(amount) {
    return new Inâ‚º.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' ÃƒÂ¢â‚¬â‚¬Å¡â‚º';
}

// Emekli alanlarÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¶ster/gizle
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

// Vergi dilimi detayÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± hesapla
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
            details.push(`%${percentage.toFixed(1)} ÃƒÂ¢â‚¬â‚¬Â â‚¬â‚¬â„¢ %${rate}`);
        }

        totalProcessed += amountInBracket;
        if (totalProcessed >= yearlyIncome) break;
    }

    return details.join(' | ');
}

// Gelir vergisi hesaplama (kÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif)
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

// AGÃƒâ€â‚¬Â° oranÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± hesapla
function getAGIRate(medeniDurum, cocukSayisi) {
    if (medeniDurum === 'bekar') {
        return cocukSayisi > 0 ? AGI_RATES.evli[cocukSayisi] : AGI_RATES.bekar[0];
    } else {
        return AGI_RATES.evli[Math.min(cocukSayisi, 6)] || AGI_RATES.evli[0];
    }
}

// Ana hesaplama fonksiyonu
function calculate() {
    // SeÃƒÆ’â‚¬Â§ilen yÃƒâ€â‚¬Â±la gÃƒÆ’â‚¬Â¶re vergi dilimlerini ve AGI oranlarÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¼ncelle
    const selectedYear = parseInt(document.getElementById('taxYear').value);
    TAX_BRACKETS = TAX_DATA[selectedYear].brackets;
    AGI_RATES = TAX_DATA[selectedYear].agi;

    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    
    // EÃƒâ€Ã…Â¸er brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸ girilmemiÃƒâ€¦Ã…Â¸se hesaplama yapma, sonuÃƒÆ’â‚¬Â§ bÃƒÆ’â‚¬Â¶lÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼nÃƒÆ’â‚¬Â¼ gizle
    if (brutMaas === 0) {
        document.getElementById('resultSection').style.display = 'none';
        return;
    }
    
    // SonuÃƒÆ’â‚¬Â§ bÃƒÆ’â‚¬Â¶lÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼nÃƒÆ’â‚¬Â¼ gÃƒÆ’â‚¬Â¶ster
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
        // EMEKLÃƒâ€â‚¬Â° ÃƒÆ’â‚¬â‚¬Â¡ALIÃƒâ€¦â‚¬ÂAN HESAPLAMA
        sgkIsci = 0; // Emeklilerden SGK kesilmez
        issizlikIsci = 0; // Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸sizlik sigortasÃƒâ€â‚¬Â± kesilmez
        gelirVergisiMatrahi = brutMaas; // Emeklilerde matrah = brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸
        
        // Gelir vergisi - Ãƒâ€â‚¬Â°lk ay iÃƒÆ’â‚¬Â§in basit hesaplama (Ocak ayÃƒâ€â‚¬Â± tahmini)
        // Not: YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k tabloda her ay iÃƒÆ’â‚¬Â§in kÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif hesaplama yapÃƒâ€â‚¬Â±lacak
        aylikGelirVergisi = calculateIncomeTax(gelirVergisiMatrahi);
        
        // AGÃƒâ€â‚¬Â° - Emeklilerde AGÃƒâ€â‚¬Â° uygulanmaz
        agi = 0;
        
        netGelirVergisi = aylikGelirVergisi;
    } else {
        // NORMAL ÃƒÆ’â‚¬â‚¬Â¡ALIÃƒâ€¦â‚¬ÂAN HESAPLAMA
        // SGK Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i Primi (%14)
        sgkIsci = brutMaas * 0.14;

        // Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸sizlik SigortasÃƒâ€â‚¬Â± Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i Primi (%1)
        issizlikIsci = brutMaas * 0.01;

        // Gelir Vergisi MatrahÃƒâ€â‚¬Â±
        gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;

        // Gelir Vergisi (aylÃƒâ€â‚¬Â±k - basiâ‚ºeÃƒâ€¦Ã…Â¸tirilmiÃƒâ€¦Ã…Â¸)
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        aylikGelirVergisi = yillikGelirVergisi / 12;

        // AGÃƒâ€â‚¬Â° Hesaplama - Asgari ÃƒÆ’â‚¬Â¼cret ÃƒÆ’â‚¬Â¼zerinden hesaplanÃƒâ€â‚¬Â±r
        const asgariBrutUcret2025 = 22104.00; // 2025 asgari brÃƒÆ’â‚¬Â¼t ÃƒÆ’â‚¬Â¼cret
        const asgariBrutUcretYillik = asgariBrutUcret2025 * 12;
        const asgariSGK = asgariBrutUcret2025 * 0.14;
        const asgariIssizlik = asgariBrutUcret2025 * 0.01;
        const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
        const asgariMatrahYillik = asgariMatrah * 12;
        const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const yillikAGI = asgariGelirVergisiYillik * agiOrani;
        agi = yillikAGI / 12; // AylÃƒâ€â‚¬Â±k AGÃƒâ€â‚¬Â°

        // Net Gelir Vergisi
        netGelirVergisi = aylikGelirVergisi - agi;
    }
    
    // Damga Vergisi (%0.759) - Her iki durumda da kesilir
    const damgaVergisi = brutMaas * 0.00759;

    // Toplam Kesinti
    const toplamKesinti = sgkIsci + issizlikIsci + netGelirVergisi + damgaVergisi;

    // Net MaaÃƒâ€¦Ã…Â¸
    const netMaas = brutMaas - toplamKesinti;

    // Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸veren Maliyeâ‚ºeri
    const sgkIsveren = brutMaas * 0.205;
    const issizlikIsveren = brutMaas * 0.02;
    const toplamMaliyet = brutMaas + sgkIsveren + issizlikIsveren;

    // SonuÃƒÆ’â‚¬Â§larÃƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¶ster
    document.getElementById('brutMaas').textContent = formatCurrency(brutMaas);
    document.getElementById('netMaas').textContent = formatCurrency(netMaas);
    document.getElementById('netMaasUSD').textContent = '$' + (netMaas / exchangeRates.USD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('netMaasEUR').textContent = 'ÃƒÂ¢â‚¬â‚¬Å¡â‚¬Â¬' + (netMaas / exchangeRates.EUR).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

    // YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k tabloyu doldur
    fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, {ocak: primOcak, nisan: primNisan, temmuz: primTemmuz, ekim: primEkim}, calisanDurumu, emekliAyligi);
    
    // NOT: Tahmini Zam Hesaplama artÃƒâ€â‚¬Â±k baÃƒâ€Ã…Â¸Ãƒâ€â‚¬Â±msÃƒâ€â‚¬Â±z - calculateIndependentProjections() kullanÃƒâ€â‚¬Â±lÃƒâ€â‚¬Â±yor
}

// YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k tabloyu doldur
function fillAnnualTable(brutMaas, medeniDurum, cocukSayisi, primTutarlari, calisanDurumu = 'normal', emekliAyligi = 0) {
    // YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k tablo bÃƒÆ’â‚¬Â¶lÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼nÃƒÆ’â‚¬Â¼ gÃƒÆ’â‚¬Â¶ster
    document.getElementById('annualSection').style.display = 'block';
    
    const tbody = document.getElementById('annualTableBody');
    const tfoot = document.getElementById('annualTableFoot');
    tbody.innerHTML = '';
    tfoot.innerHTML = '';

    const aylar = [
        'Ocak', 'Ãƒâ€¦â‚¬Âubat', 'Mart', 'Nisan', 'MayÃƒâ€â‚¬Â±s', 'Haziran',
        'Temmuz', 'AÃƒâ€Ã…Â¸ustos', 'EylÃƒÆ’â‚¬Â¼l', 'Ekim', 'KasÃƒâ€â‚¬Â±m', 'AralÃƒâ€â‚¬Â±k'
    ];

    // Prim ÃƒÆ’â‚¬Â¶deme aylarÃƒâ€â‚¬Â± ve tutarlarÃƒâ€â‚¬Â±
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
        // Prim kontrolÃƒÆ’â‚¬Â¼
        const aylikPrim = primMap[i] || 0;
        const toplamAylikBrut = brutMaas + aylikPrim;

        console.log(`${aylar[i]}: BrÃƒÆ’â‚¬Â¼t=${toplamAylikBrut}, KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif Gelir ÃƒÆ’â‚¬â‚¬â€œncesi=${cumulativeIncome}`);

        let sgkIsci, issizlikIsci, gelirVergisiMatrahi, aylikGelirVergisi, agi, netGelirVergisi, vergiDilimiDetay;
        
        if (calisanDurumu === 'emekli') {
            // EMEKLÃƒâ€â‚¬Â° HESAPLAMA - KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif vergi sistemi uygulanÃƒâ€â‚¬Â±r
            sgkIsci = 0;
            issizlikIsci = 0;
            gelirVergisiMatrahi = toplamAylikBrut; // Emeklilerde matrah = brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸
            
            // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayÃƒâ€â‚¬Â±
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGÃƒâ€â‚¬Â° - Emeklilerde AGÃƒâ€â‚¬Â° uygulanmaz
            agi = 0;
            
            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi;
            
            console.log(`${aylar[i]} (Emekli): KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif=${cumulativeIncome}, AylÃƒâ€â‚¬Â±k Vergi=${aylikGelirVergisi}, Net Vergi=${netGelirVergisi}`);
        } else {
            // NORMAL ÃƒÆ’â‚¬â‚¬Â¡ALIÃƒâ€¦â‚¬ÂAN HESAPLAMA
            sgkIsci = toplamAylikBrut * 0.14;
            issizlikIsci = toplamAylikBrut * 0.01;
            gelirVergisiMatrahi = toplamAylikBrut - sgkIsci - issizlikIsci;

            // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif gelir
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;

            // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif vergi hesaplama
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            aylikGelirVergisi = cumulativeTax - previousCumulativeTax;

            // Vergi dilimi detayÃƒâ€â‚¬Â±
            vergiDilimiDetay = calculateTaxBracketDetails(cumulativeIncome);

            // AGÃƒâ€â‚¬Â° - Asgari ÃƒÆ’â‚¬Â¼cret ÃƒÆ’â‚¬Â¼zerinden sabit hesaplanÃƒâ€â‚¬Â±r
            const asgariBrutUcret2025 = 22104.00;
            const asgariSGK = asgariBrutUcret2025 * 0.14;
            const asgariIssizlik = asgariBrutUcret2025 * 0.01;
            const asgariMatrah = asgariBrutUcret2025 - asgariSGK - asgariIssizlik;
            const asgariMatrahYillik = asgariMatrah * 12;
            const asgariGelirVergisiYillik = calculateIncomeTax(asgariMatrahYillik);
            const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
            const yillikAGI = asgariGelirVergisiYillik * agiOrani;
            agi = yillikAGI / 12; // Her ay sabit AGÃƒâ€â‚¬Â° tutarÃƒâ€â‚¬Â±

            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi - agi;
        }
        
        const damgaVergisi = toplamAylikBrut * 0.00759;
        
        // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif vergi toplamÃƒâ€â‚¬Â±
        cumulativeTaxTotal += netGelirVergisi;

        // Net maaÃƒâ€¦Ã…Â¸
        const netMaas = toplamAylikBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
        
        // DÃƒÆ’â‚¬Â¶viz karÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±lÃƒâ€â‚¬Â±klarÃƒâ€â‚¬Â±
        const netUSD = netMaas / exchangeRates.USD;
        const netEUR = netMaas / exchangeRates.EUR;
        
        // KÃƒâ€â‚¬Â±dem TazminatÃƒâ€â‚¬Â± BrÃƒÆ’â‚¬Â¼t (gÃƒÆ’â‚¬Â¼nlÃƒÆ’â‚¬Â¼k brÃƒÆ’â‚¬Â¼t x 30 gÃƒÆ’â‚¬Â¼n)
        const KIDEM_TAVAN = 53919.68; // 2025 tavanÃƒâ€â‚¬Â±
        const gunlukBrut = toplamAylikBrut / 30;
        const aylikKidemBrut = Math.min(gunlukBrut * 30, KIDEM_TAVAN);
        
        // Ãƒâ€â‚¬Â°hbar TazminatÃƒâ€â‚¬Â± BrÃƒÆ’â‚¬Â¼t (ÃƒÆ’â‚¬Â§alÃƒâ€â‚¬Â±Ãƒâ€¦Ã…Â¸ma sÃƒÆ’â‚¬Â¼resine gÃƒÆ’â‚¬Â¶re)
        const ayIndex = i + 1; // 1-12 arasÃƒâ€â‚¬Â± ay
        const calismaAySayisi = i + 1; // Bu aya kadar geÃƒÆ’â‚¬Â§en ay sayÃƒâ€â‚¬Â±sÃƒâ€â‚¬Â±
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
        
        // KÃƒâ€â‚¬Â±dem ve Ãƒâ€â‚¬Â°hbar Net hesaplamalarÃƒâ€â‚¬Â± (damga vergisi %0.759)
        const DAMGA_ORANI = 0.00759;
        const aylikKidemNet = aylikKidemBrut * (1 - DAMGA_ORANI);
        const aylikIhbarNet = aylikIhbarBrut * (1 - DAMGA_ORANI);

        // ToplamlarÃƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¼ncelle
        toplamBrut += brutMaas;
        toplamPrim += aylikPrim;
        toplamSGKIsci += sgkIsci;
        toplamIssizlikIsci += issizlikIsci;
        toplamGelirVergisi += netGelirVergisi;
        toplamDamgaVergisi += damgaVergisi;
        toplamAGI += agi;
        toplamNet += netMaas;

        // SatÃƒâ€â‚¬Â±r oluÃƒâ€¦Ã…Â¸tur
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
            <td style="color: #007bff; font-weight: 600;">ÃƒÂ¢â‚¬â‚¬Å¡â‚¬Â¬${netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td style="background: #e3f2fd; font-weight: 600;">${formatCurrency(aylikKidemNet)}</td>
            <td style="background: #fff3e0; font-weight: 600;">${formatCurrency(aylikIhbarNet)}</td>
        `;
        tbody.appendChild(row);
    }

    // Toplam satÃƒâ€â‚¬Â±rÃƒâ€â‚¬Â±
    const toplamNetUSD = toplamNet / exchangeRates.USD;
    const toplamNetEUR = toplamNet / exchangeRates.EUR;
    
    // Not: KÃƒâ€â‚¬Â±dem ve Ãƒâ€â‚¬Â°hbar toplamlarÃƒâ€â‚¬Â± her ay iÃƒÆ’â‚¬Â§in zaten hesaplandÃƒâ€â‚¬Â±, ayrÃƒâ€â‚¬Â±ca toplamaya gerek yok
    
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
        <td style="color: #007bff;"><strong>ÃƒÂ¢â‚¬â‚¬Å¡â‚¬Â¬${toplamNetEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong></td>
        <td style="background: #e3f2fd;"><strong>-</strong></td>
        <td style="background: #fff3e0;"><strong>-</strong></td>
    `;
    tfoot.appendChild(totalRow);
}

// Netten brÃƒÆ’â‚¬Â¼te hesaplama fonksiyonu
function calculateNetToBrut() { alert("Fonksiyon Ã§alÄ±ÅŸtÄ±!");
    // SeÃƒÆ’â‚¬Â§ilen yÃƒâ€â‚¬Â±la gÃƒÆ’â‚¬Â¶re vergi dilimlerini ve AGI oranlarÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¼ncelle
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
    
    // Ãƒâ€â‚¬Â°teratif yaklaÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±mla brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸ bulma
    let tahminBrut = hedefNetMaas * 1.5; // BaÃƒâ€¦Ã…Â¸langÃƒâ€â‚¬Â±ÃƒÆ’â‚¬Â§ tahmini
    let tolerance = 0.01; // Tolerans
    let maxIterations = 100;
    let iteration = 0;
    
    while (iteration < maxIterations) {
        // Bu tahmini brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸la net hesapla
        const sgkIsci = tahminBrut * 0.14;
        const issizlikIsci = tahminBrut * 0.01;
        const gelirVergisiMatrahi = tahminBrut - sgkIsci - issizlikIsci;
        const damgaVergisi = tahminBrut * 0.00759;
        
        // YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k vergi hesaplama
        const yillikMatrah = gelirVergisiMatrahi * 12;
        const yillikGelirVergisi = calculateIncomeTax(yillikMatrah);
        const aylikGelirVergisi = yillikGelirVergisi / 12;
        
        // AGÃƒâ€â‚¬Â° - Asgari ÃƒÆ’â‚¬Â¼cret ÃƒÆ’â‚¬Â¼zerinden hesaplanÃƒâ€â‚¬Â±r
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
        
        // Fark kontrolÃƒÆ’â‚¬Â¼
        const fark = hedefNetMaas - hesaplananNet;
        
        if (Math.abs(fark) < tolerance) {
            break; // Yeterince yakÃƒâ€â‚¬Â±n
        }
        
        // Tahmini gÃƒÆ’â‚¬Â¼ncelle
        tahminBrut += fark * 1.3; // FarkÃƒâ€â‚¬Â± telafi etmek iÃƒÆ’â‚¬Â§in ayarlama
        iteration++;
    }

    // Sonucu alert ile goster
    const sgk = tahminBrut * 0.14;
    const issizlik = tahminBrut * 0.01;
    const damga = tahminBrut * 0.00759;
    const matrah = tahminBrut - sgk - issizlik;
    const yillikMatrah = matrah * 12;
    const yillikVergi = calculateIncomeTax(yillikMatrah);
    const aylikVergi = yillikVergi / 12;
    const asgariBrut = 22104.00;
    const asgariSGK = asgariBrut * 0.14;
    const asgariIssizlik = asgariBrut * 0.01;
    const asgariMatrah = asgariBrut - asgariSGK - asgariIssizlik;
    const asgariYillik = asgariMatrah * 12;
    const asgariVergi = calculateIncomeTax(asgariYillik);
    const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
    const agi = (asgariVergi * agiOrani) / 12;
    const netVergi = aylikVergi - agi;
    const hesaplananNet = tahminBrut - sgk - issizlik - netVergi - damga;
    const toplamKesinti = sgk + issizlik + netVergi + damga;
    
    alert('HESAPLAMA SONUCU:\\n\\n' +
          'Hedef Net Maaş: ' + hedefNetMaas.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Gereken Brüt Maaş: ' + tahminBrut.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Hesaplanan Net: ' + hesaplananNet.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n\\n' +
          'KESİNTİLER:\\n' +
          'SGK (14%): ' + sgk.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'İşsizlik (1%): ' + issizlik.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Gelir Vergisi: ' + aylikVergi.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'AGİ İndirimi: -' + agi.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Net Gelir Vergisi: ' + netVergi.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Damga Vergisi: ' + damga.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺\\n' +
          'Toplam Kesinti: ' + toplamKesinti.toLocaleString('tr-TR', {minimumFractionDigits: 2}) + ' ₺');
    if (mevcutMaas === 0) {
        // MaaÃƒâ€¦Ã…Â¸ girilmemiÃƒâ€¦Ã…Â¸se hesaplama yapma, deÃƒâ€Ã…Â¸erleri olduÃƒâ€Ã…Â¸u gibi bÃƒâ€â‚¬Â±rak
        return;
    }
    
    // Net'ten brÃƒÆ’â‚¬Â¼te ÃƒÆ’â‚¬Â§evirme fonksiyonu (yaklaÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±k)
    function netToBrut(netMaas) {
        // Ãƒâ€â‚¬Â°teratif yaklaÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±m ile net'ten brÃƒÆ’â‚¬Â¼t bulma
        let brutTahmin = netMaas * 1.45; // BaÃƒâ€¦Ã…Â¸langÃƒâ€â‚¬Â±ÃƒÆ’â‚¬Â§ tahmini
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
    
    // Hesaplama tÃƒÆ’â‚¬Â¼rÃƒÆ’â‚¬Â¼ne gÃƒÆ’â‚¬Â¶re brÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â± belirle
    let mevcutBrutMaas;
    if (hesaplamaTuru === 'net') {
        mevcutBrutMaas = netToBrut(mevcutMaas);
        console.log('Net\'ten dÃƒÆ’â‚¬Â¶nÃƒÆ’â‚¬Â¼Ãƒâ€¦Ã…Â¸tÃƒÆ’â‚¬Â¼rÃƒÆ’â‚¬Â¼len brÃƒÆ’â‚¬Â¼t:', mevcutBrutMaas);
    } else {
        mevcutBrutMaas = mevcutMaas;
    }
    
    // Basit hesaplama - AGI ve prim olmadan
    for (let i = 1; i <= 3; i++) {
        const zamOran = parseFloat(document.getElementById(`zam${i}Oran`).value) || 0;
        const zamAyValue = document.getElementById(`zam${i}Ay`).value;
        const zamAy = zamAyValue ? parseInt(zamAyValue) : null;
        
        console.log(`Senaryo ${i}: Zam OranÃƒâ€â‚¬Â±=${zamOran}%, Zam AyÃƒâ€â‚¬Â±=${zamAyValue}`);
        
        // EÃƒâ€Ã…Â¸er ay seÃƒÆ’â‚¬Â§ilmemiÃƒâ€¦Ã…Â¸se ama zam oranÃƒâ€â‚¬Â± girilmiÃƒâ€¦Ã…Â¸se, varsayÃƒâ€â‚¬Â±lan olarak Ocak kabul et
        const effectiveZamAy = zamAy || 1;
        
        const yeniBrutMaas = mevcutBrutMaas * (1 + zamOran / 100);
        console.log(`Senaryo ${i}: Yeni BrÃƒÆ’â‚¬Â¼t=${yeniBrutMaas}`);
        
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
        
        // DÃƒÆ’â‚¬Â¶viz karÃƒâ€¦Ã…Â¸Ãƒâ€â‚¬Â±lÃƒâ€â‚¬Â±klarÃƒâ€â‚¬Â±
        const netUSD = ortalamaNetMaas / exchangeRates.USD;
        const netEUR = ortalamaNetMaas / exchangeRates.EUR;
        
        document.getElementById(`zam${i}Brut`).textContent = formatCurrency(yeniBrutMaas);
        document.getElementById(`zam${i}Net`).textContent = formatCurrency(ortalamaNetMaas);
        document.getElementById(`zam${i}USD`).textContent = '$' + netUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        document.getElementById(`zam${i}EUR`).textContent = 'ÃƒÂ¢â‚¬â‚¬Å¡â‚¬Â¬' + netEUR.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

// Sekme deÃƒâ€Ã…Â¸iÃƒâ€¦Ã…Â¸tirme
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

// Sayfa yÃƒÆ’â‚¬Â¼klendiÃƒâ€Ã…Â¸inde hesapla
window.addEvenâ‚ºistener('load', function() {
    calculate();
});

// Input deÃƒâ€Ã…Â¸iÃƒâ€¦Ã…Â¸ikliklerinde otomatik hesaplama
document.getElementById('salary').addEvenâ‚ºistener('input', calculate);
document.getElementById('calisanDurumu').addEvenâ‚ºistener('change', calculate);
document.getElementById('emekliAyligi').addEvenâ‚ºistener('input', calculate);
document.getElementById('medeniDurum').addEvenâ‚ºistener('change', calculate);
document.getElementById('cocukSayisi').addEvenâ‚ºistener('input', calculate);
document.getElementById('primOcak').addEvenâ‚ºistener('input', calculate);
document.getElementById('primNisan').addEvenâ‚ºistener('input', calculate);
document.getElementById('primTemmuz').addEvenâ‚ºistener('input', calculate);
document.getElementById('primEkim').addEvenâ‚ºistener('input', calculate);
document.getElementById('engelliIndirimi').addEvenâ‚ºistener('change', calculate);
document.getElementById('asgariBrutUcret').addEvenâ‚ºistener('change', calculate);

// Zam hesaplama input deÃƒâ€Ã…Â¸iÃƒâ€¦Ã…Â¸iklikleri
for (let i = 1; i <= 3; i++) {
    document.getElementById(`zam${i}Oran`).addEvenâ‚ºistener('input', calculate);
    document.getElementById(`zam${i}Ay`).addEvenâ‚ºistener('change', calculate);
}

// Vergi dilimi tablosunu gÃƒÆ’â‚¬Â¼ncelle
function updateTaxBracketTable() {
    console.log('updateTaxBracketTable ÃƒÆ’â‚¬Â§aÃƒâ€Ã…Â¸rÃƒâ€â‚¬Â±ldÃƒâ€â‚¬Â±');
    
    const year = parseInt(document.getElementById('taxBracketYear').value);
    console.log('SeÃƒÆ’â‚¬Â§ilen yÃƒâ€â‚¬Â±l:', year);
    
    const yearData = TAX_DATA[year];
    console.log('YÃƒâ€â‚¬Â±l verisi:', yearData);
    
    const currentYear = new Date().getFullYear();
    
    if (!yearData) {
        console.error('YÃƒâ€â‚¬Â±l verisi bulunamadÃƒâ€â‚¬Â±!');
        return;
    }
    
    // BaÃƒâ€¦Ã…Â¸lÃƒâ€â‚¬Â±Ãƒâ€Ã…Â¸Ãƒâ€â‚¬Â± gÃƒÆ’â‚¬Â¼ncelle - 2026 ve ÃƒÆ’â‚¬Â¶ncesi iÃƒÆ’â‚¬Â§in tahmini etiketi kaldÃƒâ€â‚¬Â±r
    const isFuture = year > currentYear;
    const tiâ‚ºeText = `${year} Gelir Vergisi Dilimleri${isFuture ? ' (Tahmini)' : ''}`;
    console.log('BaÃƒâ€¦Ã…Â¸lÃƒâ€â‚¬Â±k:', tiâ‚ºeText);
    
    document.getElementById('taxBracketTiâ‚ºe').textContent = tiâ‚ºeText;
    document.getElementById('agiTiâ‚ºe').textContent = `Asgari GeÃƒÆ’â‚¬Â§im Ãƒâ€â‚¬Â°ndirimi OranlarÃƒâ€â‚¬Â± (${year})`;
    
    // Tablo gÃƒÆ’â‚¬Â¶vdesini gÃƒÆ’â‚¬Â¼ncelle
    const tbody = document.getElementById('taxBracketTableBody');
    if (!tbody) {
        console.error('Tablo gÃƒÆ’â‚¬Â¶vdesi bulunamadÃƒâ€â‚¬Â±!');
        return;
    }
    
    tbody.innerHTML = '';
    console.log('Dilim sayÃƒâ€â‚¬Â±sÃƒâ€â‚¬Â±:', yearData.brackets.length);
    
    yearData.brackets.forEach((bracket, index) => {
        const row = document.createElement('tr');
        const minFormatted = bracket.min === 0 ? '0' : formatCurrency(bracket.min).replace(' ÃƒÂ¢â‚¬â‚¬Å¡â‚º', '');
        const maxFormatted = bracket.max === Infinity ? 've ÃƒÆ’â‚¬Â¼zeri' : formatCurrency(bracket.max).replace(' ÃƒÂ¢â‚¬â‚¬Å¡â‚º', '');
        
        row.innerHTML = `
            <td>${minFormatted} ÃƒÂ¢â‚¬â‚¬Å¡â‚º ${bracket.max === Infinity ? '' : '- ' + maxFormatted + ' ÃƒÂ¢â‚¬â‚¬Å¡â‚º'}</td>
            <td>%${(bracket.rate * 100).toFixed(0)}</td>
        `;
        tbody.appendChild(row);
        console.log(`SatÃƒâ€â‚¬Â±r ${index + 1} eklendi: ${minFormatted} - ${maxFormatted}`);
    });
    
    console.log('Tablo gÃƒÆ’â‚¬Â¼ncellendi');
}

// PDF Export Fonksiyonu
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'mm', 'a4'); // Landscape, mm, A4
    
    // TÃƒÆ’â‚¬Â¼rkÃƒÆ’â‚¬Â§e karakter desteÃƒâ€Ã…Â¸i iÃƒÆ’â‚¬Â§in charset ayarÃƒâ€â‚¬Â±
    doc.seâ‚ºanguage("tr");
    
    // BaÃƒâ€¦Ã…Â¸lÃƒâ€â‚¬Â±k
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Yillik Maas Hesaplama Raporu', 14, 15);
    
    // Tarih
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')}`, 14, 22);
    
    // BrÃƒÆ’â‚¬Â¼t maaÃƒâ€¦Ã…Â¸ bilgisi
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli Calisan' : 'Normal Calisan';
    const brutMaasText = formatCurrency(brutMaas).replace('ÃƒÂ¢â‚¬â‚¬Å¡â‚º', 'â‚º');
    doc.text(`Brut Maas: ${brutMaasText} | Calisan Durumu: ${calisanDurumu}`, 14, 28);
    
    // TÃƒÆ’â‚¬Â¼rkÃƒÆ’â‚¬Â§e karakterleri deÃƒâ€Ã…Â¸iÃƒâ€¦Ã…Â¸tiren yardÃƒâ€â‚¬Â±mcÃƒâ€â‚¬Â± fonksiyon
    const fixTurkishChars = (text) => {
        if (!text) return '';
        return text.toString()
            .replace(/Ãƒâ€¦Ã…Â¸/g, 's').replace(/Ãƒâ€¦â‚¬Â/g, 'S')
            .replace(/Ãƒâ€Ã…Â¸/g, 'g').replace(/Ãƒâ€â‚¬Â/g, 'G')
            .replace(/ÃƒÆ’â‚¬Â¼/g, 'u').replace(/ÃƒÆ’Ã…â€œ/g, 'U')
            .replace(/ÃƒÆ’â‚¬Â¶/g, 'o').replace(/ÃƒÆ’â‚¬â‚¬â€œ/g, 'O')
            .replace(/ÃƒÆ’â‚¬Â§/g, 'c').replace(/ÃƒÆ’â‚¬â‚¬Â¡/g, 'C')
            .replace(/Ãƒâ€â‚¬Â±/g, 'i').replace(/Ãƒâ€â‚¬Â°/g, 'I')
            .replace(/ÃƒÂ¢â‚¬â‚¬Å¡â‚º/g, 'â‚º')
            .replace(/ÃƒÂ¢â‚¬â‚¬Â â‚¬â‚¬â„¢/g, '->')  // Ok iÃƒâ€¦Ã…Â¸areti
            .replace(/ÃƒÂ¢â‚¬â‚¬â€œâ‚º/g, '->')  // ÃƒÆ’Ã…â€œÃƒÆ’â‚¬Â§gen ok
            .replace(/ÃƒÂ¢â‚¬â€šÂ¬â‚¬Â¢/g, '*')   // Bullet point
            .replace(/ÃƒÂ¢â‚¬â€šÂ¬â‚¬â‚¬Å“/g, '-')   // En dash
            .replace(/ÃƒÂ¢â‚¬â€šÂ¬â‚¬â‚¬Â/g, '-')   // Em dash
            .replace(/ÃƒÂ¢â‚¬â€šÂ¬â‚¬Â¦/g, '...') // Ellipsis
            .replace(/'/g, "'")   // Smart quote
            .replace(/'/g, "'")   // Smart quote
            .replace(/"/g, '"')   // Smart quote
            .replace(/"/g, '"');  // Smart quote
    };
    
    // Tablo verilerini topla
    const table = document.getElementById('annualTable');
    const headers = [];
    const rows = [];
    
    // BaÃƒâ€¦Ã…Â¸lÃƒâ€â‚¬Â±klarÃƒâ€â‚¬Â± al ve TÃƒÆ’â‚¬Â¼rkÃƒÆ’â‚¬Â§e karakterleri dÃƒÆ’â‚¬Â¼zelt
    table.querySelectorAll('thead th').forEach(th => {
        headers.push(fixTurkishChars(th.textContent));
    });
    
    // SatÃƒâ€â‚¬Â±rlarÃƒâ€â‚¬Â± al (TOPLAM satÃƒâ€â‚¬Â±rÃƒâ€â‚¬Â± hariÃƒÆ’â‚¬Â§)
    table.querySelectorAll('tbody tr').forEach(tr => {
        const row = [];
        tr.querySelectorAll('td').forEach(td => {
            row.push(fixTurkishChars(td.textContent));
        });
        rows.push(row);
    });
    
    // Toplam satÃƒâ€â‚¬Â±rÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± al
    const totalRow = [];
    if (table.querySelector('tfoot tr')) {
        table.querySelector('tfoot tr').querySelectorAll('td').forEach(td => {
            totalRow.push(fixTurkishChars(td.textContent));
        });
    }
    
    // AutoTable ile tablo oluÃƒâ€¦Ã…Â¸tur
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
            0: { halign: 'left' }, // Ay sÃƒÆ’â‚¬Â¼tunu sola hizalÃƒâ€â‚¬Â±
            3: { halign: 'left', fontSize: 6 } // Vergi dilimi detayÃƒâ€â‚¬Â± kÃƒÆ’â‚¬Â¼ÃƒÆ’â‚¬Â§ÃƒÆ’â‚¬Â¼k font
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });
    
    // Zam senaryolarÃƒâ€â‚¬Â± varsa ekle
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
    
    // Ana tablo iÃƒÆ’â‚¬Â§in worksheet oluÃƒâ€¦Ã…Â¸tur
    const table = document.getElementById('annualTable');
    const ws = XLSX.utils.table_to_sheet(table);
    
    // SÃƒÆ’â‚¬Â¼tun geniÃƒâ€¦Ã…Â¸liklerini ayarla
    ws['!cols'] = [
        { wch: 10 },  // Ay
        { wch: 12 },  // BrÃƒÆ’â‚¬Â¼t MaaÃƒâ€¦Ã…Â¸
        { wch: 12 },  // Prim
        { wch: 20 },  // Vergi Dilimi
        { wch: 12 },  // SGK Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i
        { wch: 12 },  // Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸sizlik Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i
        { wch: 12 },  // Gelir Vergisi
        { wch: 14 },  // KÃƒÆ’â‚¬Â¼mÃƒÆ’â‚¬Â¼latif Vergi
        { wch: 12 },  // Damga Vergisi
        { wch: 12 },  // AGÃƒâ€â‚¬Â°
        { wch: 14 },  // Net MaaÃƒâ€¦Ã…Â¸
        { wch: 12 },  // Net USD
        { wch: 12 },  // Net EUR
        { wch: 12 },  // KÃƒâ€â‚¬Â±dem Net
        { wch: 12 }   // Ãƒâ€â‚¬Â°hbar Net
    ];
    
    XLSX.utils.book_append_sheet(wb, ws, 'YÃƒâ€â‚¬Â±llÃƒâ€â‚¬Â±k Hesaplama');
    
    // Zam senaryolarÃƒâ€â‚¬Â± iÃƒÆ’â‚¬Â§in worksheet
    const zamBrutMaas = parseFloat(document.getElementById('mevcutBrutMaas').value) || 0;
    if (zamBrutMaas > 0) {
        const zamData = [
            ['Senaryo', 'Zam OranÃƒâ€â‚¬Â± (%)', 'Zam AyÃƒâ€â‚¬Â±', 'Yeni BrÃƒÆ’â‚¬Â¼t MaaÃƒâ€¦Ã…Â¸', 'Yeni Net MaaÃƒâ€¦Ã…Â¸ (Ort.)', 'USD', 'EUR']
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
            XLSX.utils.book_append_sheet(wb, wsZam, 'Zam SenaryolarÃƒâ€â‚¬Â±');
        }
    }
    
    // ÃƒÆ’â‚¬â‚¬â€œzet bilgiler iÃƒÆ’â‚¬Â§in worksheet
    const brutMaas = parseFloat(document.getElementById('salary').value) || 0;
    const netMaas = document.getElementById('netMaas').textContent;
    const calisanDurumu = document.getElementById('calisanDurumu').value === 'emekli' ? 'Emekli ÃƒÆ’â‚¬â‚¬Â¡alÃƒâ€â‚¬Â±Ãƒâ€¦Ã…Â¸an' : 'Normal ÃƒÆ’â‚¬â‚¬Â¡alÃƒâ€â‚¬Â±Ãƒâ€¦Ã…Â¸an';
    const toplamMaliyet = document.getElementById('toplamMaliyet').textContent;
    
    const ozet = [
        ['MaaÃƒâ€¦Ã…Â¸ Hesaplama ÃƒÆ’â‚¬â‚¬â€œzeti', ''],
        ['', ''],
        ['Rapor Tarihi:', new Date().toLocaleDateString('tr-TR')],
        ['ÃƒÆ’â‚¬â‚¬Â¡alÃƒâ€â‚¬Â±Ãƒâ€¦Ã…Â¸an Durumu:', calisanDurumu],
        ['BrÃƒÆ’â‚¬Â¼t MaaÃƒâ€¦Ã…Â¸:', formatCurrency(brutMaas)],
        ['Net MaaÃƒâ€¦Ã…Â¸:', netMaas],
        ['Toplam Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸veren Maliyeti:', toplamMaliyet],
        ['', ''],
        ['Kesintiler', ''],
        ['SGK Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i Primi:', document.getElementById('sgkIsci').textContent],
        ['Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸sizlik Ãƒâ€â‚¬Â°Ãƒâ€¦Ã…Â¸ÃƒÆ’â‚¬Â§i Primi:', document.getElementById('issizlikIsci').textContent],
        ['Gelir Vergisi:', document.getElementById('gelirVergisi').textContent],
        ['Damga Vergisi:', document.getElementById('damgaVergisi').textContent],
        ['AGÃƒâ€â‚¬Â°:', document.getElementById('agi').textContent]
    ];
    
    const wsOzet = XLSX.utils.aoa_to_sheet(ozet);
    wsOzet['!cols'] = [{ wch: 30 }, { wch: 20 }];
    XLSX.utils.book_append_sheet(wb, wsOzet, 'ÃƒÆ’â‚¬â‚¬â€œzet');
    
    // Excel dosyasÃƒâ€â‚¬Â±nÃƒâ€â‚¬Â± indir
    const fileName = `Maas_Hesaplama_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

// Sayfa yÃƒÆ’â‚¬Â¼klendiÃƒâ€Ã…Â¸inde tabloyu oluÃƒâ€¦Ã…Â¸tur ve mevcut yÃƒâ€â‚¬Â±lÃƒâ€â‚¬Â± seÃƒÆ’â‚¬Â§
window.addEvenâ‚ºistener('load', function() {
    const currentYear = new Date().getFullYear();
    const taxBracketYearSelect = document.getElementById('taxBracketYear');
    
    // Mevcut yÃƒâ€â‚¬Â±l 2026 veya sonrasÃƒâ€â‚¬Â±ysa, 2026'yÃƒâ€â‚¬Â± seÃƒÆ’â‚¬Â§
    if (currentYear >= 2026) {
        taxBracketYearSelect.value = '2026';
    }
    
    updateTaxBracketTable();
});

// Netten BrÃƒÂ¼te SonuÃƒÂ§ GÃƒÂ¶ster
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
    alert('Hedef Net: ' + formatCurrency(netMaas) + '\\nGereken BrÃƒÂ¼t: ' + formatCurrency(brutMaas) + '\\nHesaplanan Net: ' + formatCurrency(hesaplananNet));
}

