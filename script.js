const equationDisplay = document.getElementById('equation-display');
const seesawCanvas = document.getElementById('seesaw-canvas');
const atomCounts = document.getElementById('atom-counts');
const newEquationButton = document.getElementById('new-equation-button');
const feedback = document.getElementById('feedback');
const ctx = seesawCanvas.getContext('2d');

const equations = [
  { "equation": "H2 + O2 -> H2O", "reactants": [{"formula": "H2", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "H2O", "coefficient": 1}] },
  { "equation": "Mg + O2 -> MgO", "reactants": [{"formula": "Mg", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "MgO", "coefficient": 1}] },
  { "equation": "Zn + HCl -> ZnCl2 + H2", "reactants": [{"formula": "Zn", "coefficient": 1}, {"formula": "HCl", "coefficient": 1}], "products": [{"formula": "ZnCl2", "coefficient": 1}, {"formula": "H2", "coefficient": 1}] },
  { "equation": "CH4 + O2 -> CO2 + H2O", "reactants": [{"formula": "CH4", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "Fe + O2 -> Fe2O3", "reactants": [{"formula": "Fe", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "Fe2O3", "coefficient": 1}] },
  { "equation": "N2 + H2 -> NH3", "reactants": [{"formula": "N2", "coefficient": 1}, {"formula": "H2", "coefficient": 1}], "products": [{"formula": "NH3", "coefficient": 1}] },
  { "equation": "C + O2 -> CO", "reactants": [{"formula": "C", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO", "coefficient": 1}] },
  { "equation": "Na + Cl2 -> NaCl", "reactants": [{"formula": "Na", "coefficient": 1}, {"formula": "Cl2", "coefficient": 1}], "products": [{"formula": "NaCl", "coefficient": 1}] },
  { "equation": "Al + O2 -> Al2O3", "reactants": [{"formula": "Al", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "Al2O3", "coefficient": 1}] },
  { "equation": "CaO + H2O -> Ca(OH)2", "reactants": [{"formula": "CaO", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}], "products": [{"formula": "Ca(OH)2", "coefficient": 1}] },
  { "equation": "H2O2 -> H2O + O2", "reactants": [{"formula": "H2O2", "coefficient": 1}], "products": [{"formula": "H2O", "coefficient": 1}, {"formula": "O2", "coefficient": 1}] },
  { "equation": "KCl + O2 -> KClO3", "reactants": [{"formula": "KCl", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "KClO3", "coefficient": 1}] },
  { "equation": "AgNO3 + NaCl -> AgCl + NaNO3", "reactants": [{"formula": "AgNO3", "coefficient": 1}, {"formula": "NaCl", "coefficient": 1}], "products": [{"formula": "AgCl", "coefficient": 1}, {"formula": "NaNO3", "coefficient": 1}] },
  { "equation": "CuO + H2 -> Cu + H2O", "reactants": [{"formula": "CuO", "coefficient": 1}, {"formula": "H2", "coefficient": 1}], "products": [{"formula": "Cu", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "SO2 + O2 -> SO3", "reactants": [{"formula": "SO2", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "SO3", "coefficient": 1}] },
  { "equation": "K + H2O -> KOH + H2", "reactants": [{"formula": "K", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}], "products": [{"formula": "KOH", "coefficient": 1}, {"formula": "H2", "coefficient": 1}] },
  { "equation": "Li + Cl2 -> LiCl", "reactants": [{"formula": "Li", "coefficient": 1}, {"formula": "Cl2", "coefficient": 1}], "products": [{"formula": "LiCl", "coefficient": 1}] },
  { "equation": "BaO + H2O -> Ba(OH)2", "reactants": [{"formula": "BaO", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}], "products": [{"formula": "Ba(OH)2", "coefficient": 1}] },
  { "equation": "NH3 + O2 -> NO + H2O", "reactants": [{"formula": "NH3", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "NO", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "P4 + O2 -> P4O10", "reactants": [{"formula": "P4", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "P4O10", "coefficient": 1}] },
  { "equation": "CaCO3 -> CaO + CO2", "reactants": [{"formula": "CaCO3", "coefficient": 1}], "products": [{"formula": "CaO", "coefficient": 1}, {"formula": "CO2", "coefficient": 1}] },
  { "equation": "HCl + NaOH -> NaCl + H2O", "reactants": [{"formula": "HCl", "coefficient": 1}, {"formula": "NaOH", "coefficient": 1}], "products": [{"formula": "NaCl", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "C2H6 + O2 -> CO2 + H2O", "reactants": [{"formula": "C2H6", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "MgCO3 -> MgO + CO2", "reactants": [{"formula": "MgCO3", "coefficient": 1}], "products": [{"formula": "MgO", "coefficient": 1}, {"formula": "CO2", "coefficient": 1}] },
  { "equation": "H2SO4 -> SO3 + H2O", "reactants": [{"formula": "H2SO4", "coefficient": 1}], "products": [{"formula": "SO3", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "CH3OH + O2 -> CO2 + H2O", "reactants": [{"formula": "CH3OH", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "FeS + O2 -> FeO + SO2", "reactants": [{"formula": "FeS", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "FeO", "coefficient": 1}, {"formula": "SO2", "coefficient": 1}] },
  { "equation": "Al2O3 + H2 -> Al + H2O", "reactants": [{"formula": "Al2O3", "coefficient": 1}, {"formula": "H2", "coefficient": 1}], "products": [{"formula": "Al", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "C3H8 + O2 -> CO2 + H2O", "reactants": [{"formula": "C3H8", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "CO + O2 -> CO2", "reactants": [{"formula": "CO", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}] },
  { "equation": "Na2O + H2O -> NaOH", "reactants": [{"formula": "Na2O", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}], "products": [{"formula": "NaOH", "coefficient": 1}] },
  { "equation": "Cu + O2 -> CuO", "reactants": [{"formula": "Cu", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CuO", "coefficient": 1}] },
  { "equation": "ZnS + O2 -> ZnO + SO2", "reactants": [{"formula": "ZnS", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "ZnO", "coefficient": 1}, {"formula": "SO2", "coefficient": 1}] },
  { "equation": "Si + O2 -> SiO2", "reactants": [{"formula": "Si", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "SiO2", "coefficient": 1}] },
  { "equation": "HNO3 -> N2O5 + H2O", "reactants": [{"formula": "HNO3", "coefficient": 1}], "products": [{"formula": "N2O5", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "Cl2 + H2 -> HCl", "reactants": [{"formula": "Cl2", "coefficient": 1}, {"formula": "H2", "coefficient": 1}], "products": [{"formula": "HCl", "coefficient": 1}] },
  { "equation": "FeCl3 + NaOH -> Fe(OH)3 + NaCl", "reactants": [{"formula": "FeCl3", "coefficient": 1}, {"formula": "NaOH", "coefficient": 1}], "products": [{"formula": "Fe(OH)3", "coefficient": 1}, {"formula": "NaCl", "coefficient": 1}] },
  { "equation": "Pb(NO3)2 + KI -> PbI2 + KNO3", "reactants": [{"formula": "Pb(NO3)2", "coefficient": 1}, {"formula": "KI", "coefficient": 1}], "products": [{"formula": "PbI2", "coefficient": 1}, {"formula": "KNO3", "coefficient": 1}] },
  { "equation": "SnO2 + H2 -> Sn + H2O", "reactants": [{"formula": "SnO2", "coefficient": 1}, {"formula": "H2", "coefficient": 1}], "products": [{"formula": "Sn", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}] },
  { "equation": "PCl5 + H2O -> H3PO4 + HCl", "reactants": [{"formula": "PCl5", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}], "products": [{"formula": "H3PO4", "coefficient": 1}, {"formula": "HCl", "coefficient": 1}] },
   { "equation": "KClO3 -> KCl + O2", "reactants": [{"formula": "KClO3", "coefficient": 1}], "products": [{"formula": "KCl", "coefficient": 1}, {"formula": "O2", "coefficient": 1}] },
  { "equation": "Na2CO3 + HCl -> NaCl + H2O + CO2", "reactants": [{"formula": "Na2CO3", "coefficient": 1}, {"formula": "HCl", "coefficient": 1}], "products": [{"formula": "NaCl", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}, {"formula": "CO2", "coefficient": 1}] },
  { "equation": "BaCl2 + Na2SO4 -> BaSO4 + NaCl", "reactants": [{"formula": "BaCl2", "coefficient": 1}, {"formula": "Na2SO4", "coefficient": 1}], "products": [{"formula": "BaSO4", "coefficient": 1}, {"formula": "NaCl", "coefficient": 1}] },
  { "equation": "Ca3(PO4)2 + H2SO4 -> CaSO4 + H3PO4", "reactants": [{"formula": "Ca3(PO4)2", "coefficient": 1}, {"formula": "H2SO4", "coefficient": 1}], "products": [{"formula": "CaSO4", "coefficient": 1}, {"formula": "H3PO4", "coefficient": 1}] },
  { "equation": "CuCO3 -> CuO + CO2", "reactants": [{"formula": "CuCO3", "coefficient": 1}], "products": [{"formula": "CuO", "coefficient": 1}, {"formula": "CO2", "coefficient": 1}] },
  { "equation": "Ag2O -> Ag + O2", "reactants": [{"formula": "Ag2O", "coefficient": 1}], "products": [{"formula": "Ag", "coefficient": 1}, {"formula": "O2", "coefficient": 1}] },
  { "equation": "CS2 + O2 -> CO2 + SO2", "reactants": [{"formula": "CS2", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "CO2", "coefficient": 1}, {"formula": "SO2", "coefficient": 1}] },
  { "equation": "HCN + O2 -> N2 + H2O + CO2", "reactants": [{"formula": "HCN", "coefficient": 1}, {"formula": "O2", "coefficient": 1}], "products": [{"formula": "N2", "coefficient": 1}, {"formula": "H2O", "coefficient": 1}, {"formula": "CO2", "coefficient": 1}] }
];

let currentEquation = getRandomEquation();

function getRandomEquation() {
    const randomIndex = Math.floor(Math.random() * equations.length);
    return equations[randomIndex];
}

function parseFormula(formula) {
    const atomCounts = {};
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2]) : 1;
        atomCounts[element] = (atomCounts[element] || 0) + count;
    }
    return atomCounts;
}

function calculateAtomCounts(equationData) {
    const reactantCounts = {};
    const productCounts = {};

    equationData.reactants.forEach(reactant => {
        const atomCounts = parseFormula(reactant.formula);
        for (const element in atomCounts) {
            reactantCounts[element] = (reactantCounts[element] || 0) + atomCounts[element] * reactant.coefficient;
        }
    });

    equationData.products.forEach(product => {
        const atomCounts = parseFormula(product.formula);
        for (const element in atomCounts) {
            productCounts[element] = (productCounts[element] || 0) + atomCounts[element] * product.coefficient;
        }
    });

    return { reactants: reactantCounts, products: productCounts };
}

function drawSeesaw(imbalance, reactantsCounts, productsCounts) {
    // Ensure context exists
    if (!ctx) {
        console.error("Canvas context not initialized!");
        return;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, seesawCanvas.width, seesawCanvas.height);

    const beamStartX = 50;
    const beamEndX = seesawCanvas.width - 50;
    const beamY = seesawCanvas.height / 2;
    const tiltAngle = imbalance * 0.1;

    // Draw seesaw beam
    ctx.beginPath();
    ctx.moveTo(beamStartX, beamY + Math.sin(tiltAngle) * 50);
    ctx.lineTo(beamEndX, beamY - Math.sin(tiltAngle) * 50);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Draw pivot
    const pivotX = seesawCanvas.width / 2;
    const pivotY = beamY;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Draw labels with atom counts for reactants
    let labelY = beamY - 50; // Position above the seesaw
    let labelXReactants = 100;  // Starting X position

    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    for (const element in reactantsCounts) {
        ctx.fillText(`${element}: ${reactantsCounts[element]}`, labelXReactants, labelY);
        labelXReactants += 50; // Adjust horizontal spacing as needed
    }
    // Draw labels with atom counts for products
    let labelXProducts = 400;  // Starting X position
    for (const element in productsCounts) {
        ctx.fillText(`${element}: ${productsCounts[element]}`, labelXProducts, labelY);
        labelXProducts += 50; // Adjust horizontal spacing as needed
    }
}

function updateAtomCountsDisplay(reactantCounts, productCounts) {
    let html = "<table><tr><th>Element</th><th>Reactants</th><th>Products</th></tr>";
    const allElements = new Set([...Object.keys(reactantCounts), ...Object.keys(productCounts)]);

    for (const element of allElements) {
        const reactantCount = reactantCounts[element] || 0;
        const productCount = productCounts[element] || 0;
        html += `<tr><td>${element}</td><td>${reactantCount}</td><td>${productCount}</td></tr>`;
    }

    html += "</table>";
    atomCounts.innerHTML = html;
}

function formatSubscript(formula) {
    return formula.replace(/(\d+)/g, '<sub>$1</sub>');
}

function updateEquationDisplay() {
    equationDisplay.innerHTML = '';
    const equationRow = document.createElement('div');
    equationRow.classList.add('equation-row');

    // Process Reactants
    currentEquation.reactants.forEach((reactant, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('equation-element');

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `reactant${index}`;
        input.value = reactant.coefficient;
        input.min = 1;
        input.oninput = checkBalance;
        elementDiv.appendChild(input);

        const label = document.createElement('label');
        label.innerHTML = formatSubscript(reactant.formula);
        elementDiv.appendChild(label);

        equationRow.appendChild(elementDiv);

        if (index < currentEquation.reactants.length - 1) {
            const plusSign = document.createElement('span');
            plusSign.textContent = ' + ';
            equationRow.appendChild(plusSign);
        }
    });

    // Add the '->' arrow
    const arrowSpan = document.createElement('span');
    arrowSpan.textContent = '  ----------->  ';
    equationRow.appendChild(arrowSpan);

    // Process Products
    currentEquation.products.forEach((product, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('equation-element');

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `product${index}`;
        input.value = product.coefficient;
        input.min = 1;
        input.oninput = checkBalance;
        elementDiv.appendChild(input);

        const label = document.createElement('label');
        label.innerHTML = formatSubscript(product.formula);
        elementDiv.appendChild(label);

        equationRow.appendChild(elementDiv);

        if (index < currentEquation.products.length - 1) {
            const plusSign = document.createElement('span');
            plusSign.textContent = ' + ';
            equationRow.appendChild(plusSign);
        }
    });

    equationDisplay.appendChild(equationRow);
}

function checkBalance() {
    // Update Coefficients
    currentEquation.reactants.forEach((reactant, index) => {
        const inputElement = document.getElementById(`reactant${index}`);
        reactant.coefficient = parseInt(inputElement.value || 1);
    });
    currentEquation.products.forEach((product, index) => {
        const inputElement = document.getElementById(`product${index}`);
        product.coefficient = parseInt(inputElement.value || 1);
    });

    // Calculate Atom Counts
    const { reactants: reactantsCounts, products: productsCounts } = calculateAtomCounts(currentEquation);

    // Update Atom Counts Display
    updateAtomCountsDisplay(reactantsCounts, productsCounts);

    // Calculate Imbalance
    let imbalance = 0;
    for (const element in reactantsCounts) {
        imbalance += (reactantsCounts[element] - (productsCounts[element] || 0));
    }
    for (const element in productsCounts) {
        if (!reactantsCounts[element]) {
            imbalance -= productsCounts[element];
        }
    }

    // Draw Seesaw
    drawSeesaw(imbalance, reactantsCounts, productsCounts);

    // Check if Balanced
    let isBalanced = true;
    for (const element in reactantsCounts) {
        if (reactantsCounts[element] !== (productsCounts[element] || 0)) {
            isBalanced = false;
            break;
        }
    }
    for (const element in productsCounts) {
        if (reactantsCounts[element] === undefined && productsCounts[element] !== 0) {
            isBalanced = false;
            break;
        }
    }

    // Update Feedback
    if (isBalanced) {
        feedback.textContent = "Balanced!";
        feedback.className = "balanced";
    } else {
        feedback.textContent = "Not balanced. Try again!";
        feedback.className = "not-balanced";
    }
}



function loadNewEquation() {
    currentEquation = getRandomEquation();
    updateEquationDisplay();
    checkBalance();
}

updateEquationDisplay();
newEquationButton.addEventListener('click', loadNewEquation);
checkBalance();
