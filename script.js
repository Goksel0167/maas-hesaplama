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
        
        // Gelir vergisi stopajı %15 (sabit)
        aylikGelirVergisi = brutMaas * 0.15;
        
        // Emeklilerde AGİ yok
        agi = 0;
        netGelirVergisi = aylikGelirVergisi;
        
        gelirVergisiMatrahi = brutMaas; // Matraha etkisi yok
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

        // AGİ Hesaplama
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const agiMatrahi = aylikGelirVergisi;
        agi = agiMatrahi * agiOrani;

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

    // Tahmini zam hesaplamalarını güncelle
    calculateProjections(brutMaas, medeniDurum, cocukSayisi, {ocak: primOcak, nisan: primNisan, temmuz: primTemmuz, ekim: primEkim}, calisanDurumu, emekliAyligi);
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

        let sgkIsci, issizlikIsci, gelirVergisiMatrahi, aylikGelirVergisi, agi, netGelirVergisi, vergiDilimiDetay;
        
        if (calisanDurumu === 'emekli') {
            // EMEKLİ HESAPLAMA
            sgkIsci = 0;
            issizlikIsci = 0;
            aylikGelirVergisi = toplamAylikBrut * 0.15; // %15 stopaj
            agi = 0;
            netGelirVergisi = aylikGelirVergisi;
            vergiDilimiDetay = '%15 Stopaj (Emekli)';
            gelirVergisiMatrahi = toplamAylikBrut;
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

            // AGİ
            const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
            agi = aylikGelirVergisi * agiOrani;

            // Net gelir vergisi
            netGelirVergisi = aylikGelirVergisi - agi;
        }
        
        const damgaVergisi = toplamAylikBrut * 0.00759;
        
        // Kümülatif vergi toplamı
        cumulativeTaxTotal += netGelirVergisi;

        // Net maaş
        const netMaas = toplamAylikBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;

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
        `;
        tbody.appendChild(row);
    }

    // Toplam satırı
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
        
        // AGİ
        const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
        const agi = aylikGelirVergisi * agiOrani;
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

// Tahmini zam hesaplamaları
function calculateProjections(currentBrutMaas, medeniDurum, cocukSayisi, primTutarlari) {
    for (let i = 1; i <= 3; i++) {
        const zamOran = parseFloat(document.getElementById(`zam${i}Oran`).value) || 0;
        const zamAy = parseInt(document.getElementById(`zam${i}Ay`).value) || 1;
        
        const yeniBrutMaas = currentBrutMaas * (1 + zamOran / 100);
        
        // Yıllık net hesaplama
        let yillikNet = 0;
        let cumulativeIncome = 0;
        const primMap = {
            1: primTutarlari.ocak,
            4: primTutarlari.nisan,
            7: primTutarlari.temmuz,
            10: primTutarlari.ekim
        };
        
        for (let ay = 1; ay <= 12; ay++) {
            const brutMaas = ay >= zamAy ? yeniBrutMaas : currentBrutMaas;
            const aylikPrim = primMap[ay] || 0;
            const toplamAylikBrut = brutMaas + aylikPrim;
            
            const sgkIsci = toplamAylikBrut * 0.14;
            const issizlikIsci = toplamAylikBrut * 0.01;
            const gelirVergisiMatrahi = toplamAylikBrut - sgkIsci - issizlikIsci;
            const damgaVergisi = toplamAylikBrut * 0.00759;
            
            const previousCumulativeIncome = cumulativeIncome;
            cumulativeIncome += gelirVergisiMatrahi;
            
            const cumulativeTax = calculateIncomeTax(cumulativeIncome);
            const previousCumulativeTax = calculateIncomeTax(previousCumulativeIncome);
            const aylikGelirVergisi = cumulativeTax - previousCumulativeTax;
            
            const agiOrani = getAGIRate(medeniDurum, cocukSayisi);
            const agi = aylikGelirVergisi * agiOrani;
            const netGelirVergisi = aylikGelirVergisi - agi;
            
            const netMaas = toplamAylikBrut - sgkIsci - issizlikIsci - netGelirVergisi - damgaVergisi;
            yillikNet += netMaas;
        }
        
        const ortalamaBrutMaas = (currentBrutMaas * (zamAy - 1) + yeniBrutMaas * (13 - zamAy)) / 12;
        const ortalamaNetMaas = yillikNet / 12;
        
        document.getElementById(`zam${i}Brut`).textContent = formatCurrency(yeniBrutMaas);
        document.getElementById(`zam${i}Net`).textContent = formatCurrency(ortalamaNetMaas);
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
