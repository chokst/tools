function calculateRisk() {
    const totalInvestment = parseFloat(document.getElementById("totalInvestment").value);
    const riskPercentage = parseFloat(document.getElementById("riskPercentage").value) / 100;

    if (!isNaN(totalInvestment) && !isNaN(riskPercentage)) {
        const maxLoss = totalInvestment * riskPercentage;
        document.getElementById("riskOutput").innerText = `Max Loss Allowed: $${maxLoss.toFixed(2)}`;
    } else {
        document.getElementById("riskOutput").innerText = "Please enter valid inputs.";
    }
}

function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById("sipAmount").value);
    const annualReturnRate = parseFloat(document.getElementById("sipRate").value) / 100;
    const duration = parseFloat(document.getElementById("sipDuration").value);

    if (!isNaN(monthlyInvestment) && !isNaN(annualReturnRate) && !isNaN(duration)) {
        const months = duration * 12;
        const futureValue = monthlyInvestment * (((1 + (annualReturnRate / 12)) ** months - 1) / (annualReturnRate / 12));
        document.getElementById("sipOutput").innerText = `Future Value: $${futureValue.toFixed(2)}`;
    } else {
        document.getElementById("sipOutput").innerText = "Please enter valid inputs.";
    }
}

function calculateSWP() {
    const totalInvestment = parseFloat(document.getElementById("swpAmount").value);
    const annualReturnRate = parseFloat(document.getElementById("swpRate").value) / 100;
    const duration = parseFloat(document.getElementById("swpDuration").value);
    const annualWithdrawal = parseFloat(document.getElementById("annualWithdrawal").value);

    if (!isNaN(totalInvestment) && !isNaN(annualReturnRate) && !isNaN(duration) && !isNaN(annualWithdrawal)) {
        const totalWithdrawn = annualWithdrawal * duration;
        const remainingInvestment = totalInvestment * ((1 + annualReturnRate) ** duration - (annualWithdrawal / annualReturnRate) * ((1 + annualReturnRate) ** duration - 1));
        document.getElementById("swpOutput").innerText = `Total Withdrawn: $${totalWithdrawn.toFixed(2)}, Remaining Investment: $${remainingInvestment.toFixed(2)}`;
    } else {
        document.getElementById("swpOutput").innerText = "Please enter valid inputs.";
    }
}

function calculateCamarilla() {
    const high = parseFloat(document.getElementById("high").value);
    const low = parseFloat(document.getElementById("low").value);
    const close = parseFloat(document.getElementById("close").value);

    if (!isNaN(high) && !isNaN(low) && !isNaN(close)) {
        const range = high - low;
        const pp = (high + low + close) / 3;

        const h1 = close + (range * 1.1 / 12);
        const h2 = close + (range * 1.1 / 6);
        const h3 = close + (range * 1.1 / 4);
        const h4 = close + (range * 1.1 / 3);
        const h5 = close + (range * 1.1 / 2);
        const h6 = close + (range * 1.1 * 2 / 3);

        const l1 = close - (range * 1.1 / 12);
        const l2 = close - (range * 1.1 / 6);
        const l3 = close - (range * 1.1 / 4);
        const l4 = close - (range * 1.1 / 3);
        const l5 = close - (range * 1.1 / 2);
        const l6 = close - (range * 1.1 * 2 / 3);

        document.getElementById("camarillaOutput").innerText = 
            `PP: ${pp.toFixed(2)}, H1: ${h1.toFixed(2)}, H2: ${h2.toFixed(2)}, H3: ${h3.toFixed(2)}, H4: ${h4.toFixed(2)}, H5: ${h5.toFixed(2)}, H6: ${h6.toFixed(2)}, L1: ${l1.toFixed(2)}, L2: ${l2.toFixed(2)}, L3: ${l3.toFixed(2)}, L4: ${l4.toFixed(2)}, L5: ${l5.toFixed(2)}, L6: ${l6.toFixed(2)}`;
    } else {
        document.getElementById("camarillaOutput").innerText = "Please enter valid inputs.";
    }
}
