// Current tax year
let currentYear = 2025;

// Tax data limits for current year
let taxLimits = {
    2024: { meal: 125, benefits: 2500 },
    2025: { meal: 150, benefits: 3500 },
    2026: { meal: 180, benefits: 4000 }
};

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const tabs = {
        'brut-net': 0,
        'net-brut': 1,
        'annual-plan': 2
    };
    
    const tabIndex = tabs[tabName];
    if (tabIndex !== undefined) {
        document.getElementById(`${tabName}-tab`).classList.add('active');
        document.querySelectorAll('.tab-button')[tabIndex].classList.add('active');
    }
}

// Update tax year
function updateTaxYear() {
    currentYear = parseInt(document.getElementById('tax-year').value);
    const limits = taxLimits[currentYear];
    
    // Update helper texts
    document.getElementById('meal-limit-gross').textContent = `Vergiden muaf limit: ${limits.meal}‚º/gÃ¼n`;
    document.getElementById('meal-limit-net').textContent = `Vergiden muaf limit: ${limits.meal}‚º/gÃ¼n`;
    document.getElementById('benefits-limit-gross').textContent = `Vergiden muaf limit: ${formatNumber(limits.benefits)}‚º/ay`;
    document.getElementById('benefits-limit-net').textContent = `Vergiden muaf limit: ${formatNumber(limits.benefits)}‚º/ay`;
}

// Update children options based on marital status
function updateChildrenOptions(type) {
    const maritalStatus = document.getElementById(`marital-status-${type}`).value;
    const childrenGroup = document.getElementById(`children-group-${type}`);
    
    if (maritalStatus === 'married') {
        childrenGroup.style.display = 'block';
    } else {
        childrenGroup.style.display = 'none';
        document.getElementById(`children-${type}`).value = '0';
    }
}

// Format number as Turkish Lira
function formatCurrency(amount) {
    const formatted = new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
    return formatted + ' TL';
}

// Format number without currency
function formatNumber(amount) {
    return new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const container = document.querySelector('.container');
    container.insertBefore(errorDiv, container.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Display tax bracket details in table
function displayBracketDetails(brackets, tableId) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = '';
    
    if (!brackets || brackets.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Vergi dilimi bilgisi yok</td></tr>';
        return;
    }
    
    let totalTax = 0;
    brackets.forEach(bracket => {
        const row = document.createElement('tr');
        
        // max null ise sonsuz demektir
        const minDisplay = formatNumber(bracket.min) + ' TL';
        const maxDisplay = bracket.max === null || bracket.max === undefined ? 'ˆ' : formatNumber(bracket.max) + ' TL';
        
        row.innerHTML = `
            <td>Dilim ${bracket.bracket}</td>
            <td>${minDisplay} - ${maxDisplay}</td>
            <td>%${bracket.rate}</td>
            <td>${formatCurrency(bracket.taxable_amount)}</td>
            <td>${formatCurrency(bracket.tax_amount)}</td>
        `;
        
        tbody.appendChild(row);
        totalTax += bracket.tax_amount;
    });
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = 'bold';
    totalRow.style.background = '#f0f0f0';
    totalRow.innerHTML = `
        <td colspan="4" style="text-align: right;">TOPLAM VERGÄ°:</td>
        <td>${formatCurrency(totalTax)}</td>
    `;
    tbody.appendChild(totalRow);
}

// Calculate Net from Gross
async function calculateNetFromGross() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const maritalStatus = document.getElementById('marital-status-gross').value;
    const children = parseInt(document.getElementById('children-gross').value);
    const monthlyBonus = parseFloat(document.getElementById('monthly-bonus-gross').value) || 0;
    const mealVoucher = parseFloat(document.getElementById('meal-voucher-gross').value) || 0;
    const otherBenefits = parseFloat(document.getElementById('other-benefits-gross').value) || 0;
    
    if (!grossSalary || grossSalary <= 0) {
        showError('LÃ¼tfen geÃ§erli bir brÃ¼t maaÅŸ giriniz');
        return;
    }
    
    try {
        const response = await fetch('/api/calculate/net-from-gross', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gross_salary: grossSalary,
                marital_status: maritalStatus,
                children: children,
                employee_type: 'worker',
                year: currentYear,
                monthly_bonus: monthlyBonus,
                meal_voucher_daily: mealVoucher,
                other_benefits: otherBenefits
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            showError(error.error || 'Hesaplama sÄ±rasÄ±nda bir hata oluÅŸtu');
            return;
        }
        
        const data = await response.json();
        displayNetFromGrossResults(data);
        
    } catch (error) {
        showError('Sunucuya baÄŸlanÄ±rken bir hata oluÅŸtu');
        console.error('Error:', error);
    }
}

// Display Net from Gross Results
function displayNetFromGrossResults(data) {
    document.getElementById('result-year-1').textContent = data.year || currentYear;
    document.getElementById('result-gross').textContent = formatCurrency(data.gross_salary);
    document.getElementById('result-net').textContent = formatCurrency(data.net_salary);
    
    // Show benefits if any
    const hasBenefits = data.monthly_bonus > 0 || data.monthly_meal_voucher > 0 || data.other_benefits > 0;
    const benefitsSection = document.getElementById('benefits-summary-1');
    if (hasBenefits) {
        benefitsSection.style.display = 'block';
        document.getElementById('result-bonus').textContent = formatCurrency(data.monthly_bonus);
        document.getElementById('result-meal').textContent = formatCurrency(data.monthly_meal_voucher);
        document.getElementById('result-benefits').textContent = formatCurrency(data.other_benefits);
        document.getElementById('result-total-gross').textContent = formatCurrency(data.total_gross);
    } else {
        benefitsSection.style.display = 'none';
    }
    
    document.getElementById('result-sgk').textContent = formatCurrency(data.sgk_employee);
    document.getElementById('result-unemployment').textContent = formatCurrency(data.unemployment);
    document.getElementById('result-taxable').textContent = formatCurrency(data.taxable_income);
    document.getElementById('result-income-tax-before').textContent = formatCurrency(data.income_tax_before_agi);
    document.getElementById('result-agi').textContent = formatCurrency(data.agi);
    document.getElementById('result-income-tax').textContent = formatCurrency(data.income_tax);
    document.getElementById('result-stamp').textContent = formatCurrency(data.stamp_duty);
    document.getElementById('result-total-deductions').textContent = formatCurrency(data.total_deductions);
    
    // Display tax bracket details
    displayBracketDetails(data.bracket_details, 'bracket-details-1');
    
    if (data.employer_cost) {
        document.getElementById('result-sgk-employer').textContent = formatCurrency(data.employer_cost.sgk_employer);
        document.getElementById('result-unemployment-employer').textContent = formatCurrency(data.employer_cost.unemployment_employer);
        document.getElementById('result-employer-cost').textContent = formatCurrency(data.employer_cost.total_cost);
    }
    
    document.getElementById('result-brut-net').style.display = 'block';
    
    // Scroll to results
    document.getElementById('result-brut-net').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Calculate Gross from Net
async function calculateGrossFromNet() {
    const netSalary = parseFloat(document.getElementById('net-salary').value);
    const maritalStatus = document.getElementById('marital-status-net').value;
    const children = parseInt(document.getElementById('children-net').value);
    const monthlyBonus = parseFloat(document.getElementById('monthly-bonus-net').value) || 0;
    const mealVoucher = parseFloat(document.getElementById('meal-voucher-net').value) || 0;
    const otherBenefits = parseFloat(document.getElementById('other-benefits-net').value) || 0;
    
    if (!netSalary || netSalary <= 0) {
        showError('LÃ¼tfen geÃ§erli bir net maaÅŸ giriniz');
        return;
    }
    
    try {
        const response = await fetch('/api/calculate/gross-from-net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                net_salary: netSalary,
                marital_status: maritalStatus,
                children: children,
                employee_type: 'worker',
                year: currentYear,
                monthly_bonus: monthlyBonus,
                meal_voucher_daily: mealVoucher,
                other_benefits: otherBenefits
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            showError(error.error || 'Hesaplama sÄ±rasÄ±nda bir hata oluÅŸtu');
            return;
        }
        
        const data = await response.json();
        displayGrossFromNetResults(data);
        
    } catch (error) {
        showError('Sunucuya baÄŸlanÄ±rken bir hata oluÅŸtu');
        console.error('Error:', error);
    }
}

// Display Gross from Net Results
function displayGrossFromNetResults(data) {
    document.getElementById('result-year-2').textContent = data.year || currentYear;
    document.getElementById('result-gross-2').textContent = formatCurrency(data.gross_salary);
    document.getElementById('result-net-2').textContent = formatCurrency(data.net_salary);
    
    // Show benefits if any
    const hasBenefits = data.monthly_bonus > 0 || data.monthly_meal_voucher > 0 || data.other_benefits > 0;
    const benefitsSection = document.getElementById('benefits-summary-2');
    if (hasBenefits) {
        benefitsSection.style.display = 'block';
        document.getElementById('result-bonus-2').textContent = formatCurrency(data.monthly_bonus);
        document.getElementById('result-meal-2').textContent = formatCurrency(data.monthly_meal_voucher);
        document.getElementById('result-benefits-2').textContent = formatCurrency(data.other_benefits);
        document.getElementById('result-total-gross-2').textContent = formatCurrency(data.total_gross);
    } else {
        benefitsSection.style.display = 'none';
    }
    
    document.getElementById('result-sgk-2').textContent = formatCurrency(data.sgk_employee);
    document.getElementById('result-unemployment-2').textContent = formatCurrency(data.unemployment);
    document.getElementById('result-taxable-2').textContent = formatCurrency(data.taxable_income);
    document.getElementById('result-income-tax-before-2').textContent = formatCurrency(data.income_tax_before_agi);
    document.getElementById('result-agi-2').textContent = formatCurrency(data.agi);
    document.getElementById('result-income-tax-2').textContent = formatCurrency(data.income_tax);
    document.getElementById('result-stamp-2').textContent = formatCurrency(data.stamp_duty);
    document.getElementById('result-total-deductions-2').textContent = formatCurrency(data.total_deductions);
    
    // Display tax bracket details
    displayBracketDetails(data.bracket_details, 'bracket-details-2');
    
    if (data.employer_cost) {
        document.getElementById('result-sgk-employer-2').textContent = formatCurrency(data.employer_cost.sgk_employer);
        document.getElementById('result-unemployment-employer-2').textContent = formatCurrency(data.employer_cost.unemployment_employer);
        document.getElementById('result-employer-cost-2').textContent = formatCurrency(data.employer_cost.total_cost);
    }
    
    document.getElementById('result-net-brut').style.display = 'block';
    
    // Scroll to results
    document.getElementById('result-net-brut').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Calculate Annual Plan
async function calculateAnnualPlan() {
    const initialGross = parseFloat(document.getElementById('annual-gross-salary').value);
    const maritalStatus = document.getElementById('marital-status-annual').value;
    const children = parseInt(document.getElementById('children-annual').value);
    const quarterlyBonus = parseFloat(document.getElementById('annual-bonus').value) || 0;
    const mealVoucher = parseFloat(document.getElementById('annual-meal').value) || 0;
    const otherBenefits = parseFloat(document.getElementById('annual-benefits').value) || 0;
    
    if (!initialGross || initialGross <= 0) {
        showError('LÃ¼tfen geÃ§erli bir baÅŸlangÄ±Ã§ brÃ¼t maaÅŸ giriniz');
        return;
    }
    
    // Zam planÄ±nÄ± hazÄ±rla
    const raiseSchedule = [];
    for (let i = 1; i <= 3; i++) {
        const month = parseInt(document.getElementById(`raise-month-${i}`).value);
        const rate = parseFloat(document.getElementById(`raise-rate-${i}`).value) || 0;
        
        if (month > 0 && rate > 0) {
            raiseSchedule.push({
                month: month,
                rate: rate / 100  // YÃ¼zdeyi ondalÄ±ÄŸa Ã§evir
            });
        }
    }
    
    try {
        const response = await fetch('/api/calculate/annual-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                initial_gross: initialGross,
                marital_status: maritalStatus,
                children: children,
                employee_type: 'worker',
                year: currentYear,
                quarterly_bonus: quarterlyBonus,
                meal_voucher_daily: mealVoucher,
                other_benefits: otherBenefits,
                raise_schedule: raiseSchedule
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            showError(error.error || 'Hesaplama sÄ±rasÄ±nda bir hata oluÅŸtu');
            return;
        }
        
        const data = await response.json();
        displayAnnualPlan(data);
        
    } catch (error) {
        showError('Sunucuya baÄŸlanÄ±rken bir hata oluÅŸtu');
        console.error('Error:', error);
    }
}

// Display Annual Plan Results
function displayAnnualPlan(data) {
    document.getElementById('result-year-annual').textContent = currentYear;
    
    // AylÄ±k tablo
    const monthlyTable = document.getElementById('monthly-table');
    monthlyTable.innerHTML = '';
    
    data.monthly.forEach(month => {
        const row = document.createElement('tr');
        
        // Prim Ã¶denen aylarÄ± vurgula (Nisan, Temmuz, Ekim)
        if (month.quarterly_bonus > 0) {
            row.classList.add('raise-applied');
        }
        
        const raiseText = month.raise_applied > 0 ? `%${(month.raise_applied * 100).toFixed(1)}` : '-';
        const bonusText = month.quarterly_bonus > 0 ? formatCurrency(month.quarterly_bonus) : '-';
        const taxBracketText = `Dilim ${month.tax_bracket.bracket_number} (%${month.tax_bracket.bracket_rate})`;
        
        row.innerHTML = `
            <td>${month.month_name}</td>
            <td>${formatCurrency(month.gross_salary)}</td>
            <td>${bonusText}</td>
            <td>${formatCurrency(month.net_salary)}</td>
            <td><strong>${taxBracketText}</strong></td>
            <td>${formatCurrency(month.taxable_income)}</td>
            <td><strong>${formatCurrency(month.cumulative_taxable_income)}</strong></td>
            <td>${formatCurrency(month.income_tax)}</td>
            <td><strong>${formatCurrency(month.cumulative_income_tax)}</strong></td>
            <td>${raiseText}</td>
        `;
        
        monthlyTable.appendChild(row);
    });
    
    // Toplam satÄ±rÄ± ekle
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td><strong>TOPLAM</strong></td>
        <td><strong>${formatCurrency(data.annual.total_gross)}</strong></td>
        <td colspan="1"></td>
        <td><strong>${formatCurrency(data.annual.total_net)}</strong></td>
        <td colspan="2"></td>
        <td><strong>${formatCurrency(data.annual.total_tax)}</strong></td>
        <td colspan="3"></td>
    `;
    monthlyTable.appendChild(totalRow);
    
    // 3 AylÄ±k Ã¶zetler
    data.quarterly.forEach((q, index) => {
        document.getElementById(`q${index + 1}-net`).textContent = formatCurrency(q.total_net);
    });
    
    // YÄ±llÄ±k Ã¶zet
    document.getElementById('annual-total-gross').textContent = formatCurrency(data.annual.total_gross);
    document.getElementById('annual-total-net').textContent = formatCurrency(data.annual.total_net);
    document.getElementById('annual-total-sgk').textContent = formatCurrency(data.annual.total_sgk);
    document.getElementById('annual-total-tax').textContent = formatCurrency(data.annual.total_tax);
    document.getElementById('annual-total-stamp').textContent = formatCurrency(data.annual.total_stamp_duty);
    document.getElementById('annual-total-deductions').textContent = formatCurrency(data.annual.total_deductions);
    
    document.getElementById('result-annual-plan').style.display = 'block';
    
    // Scroll to results
    document.getElementById('result-annual-plan').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Calculate Independent Projections (if needed)
function calculateIndependentProjections() {
    // Bu fonksiyon gelecekte kullanÄ±lmak Ã¼zere eklendi
    const mevcutBrutMaas = document.getElementById('mevcutBrutMaas');
    if (!mevcutBrutMaas) return;
    
    const brutMaas = parseFloat(mevcutBrutMaas.value);
    if (!brutMaas || brutMaas <= 0) return;
    
    // Åimdilik basit bir net hesaplama yapÄ±yoruz
    console.log('Mevcut BrÃ¼t MaaÅŸ:', brutMaas);
    
    // Burada projeksiyon hesaplamalarÄ± yapÄ±labilir
    // Ã–rneÄŸin: gelecek yÄ±l tahminleri, zam senaryolarÄ± vs.
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial year and update limits
    updateTaxYear();
    
    // Add enter key support for inputs
    document.getElementById('gross-salary').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateNetFromGross();
    });
    
    document.getElementById('net-salary').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateGrossFromNet();
    });
    
    document.getElementById('annual-gross-salary').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAnnualPlan();
    });
});
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
    
    // Başlığı güncelle
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

// Sayfa yüklendiğinde tabloyu oluştur
window.addEventListener('load', function() {
    const currentYear = new Date().getFullYear();
    const taxBracketYearSelect = document.getElementById('taxBracketYear');
    
    if (taxBracketYearSelect && currentYear >= 2026) {
        taxBracketYearSelect.value = '2026';
    }
    
    updateTaxBracketTable();
});
