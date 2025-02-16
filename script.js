const equationDisplay = document.getElementById('equation-display');
const seesawCanvas = document.getElementById('seesaw-canvas');
const atomCounts = document.getElementById('atom-counts');
const newEquationButton = document.getElementById('new-equation-button');
const feedback = document.getElementById('feedback');
const ctx = seesawCanvas.getContext('2d');

const equations = [
    { equation: "H2 + O2 -> H2O", reactants: [{ formula: "H2", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "H2O", coefficient: 1 }] },
    { equation: "N2 + H2 -> NH3", reactants: [{ formula: "N2", coefficient: 1 }, { formula: "H2", coefficient: 1 }], products: [{ formula: "NH3", coefficient: 1 }] },
    { equation: "CH4 + O2 -> CO2 + H2O", reactants: [{ formula: "CH4", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "CO2", coefficient: 1 }, { formula: "H2O", coefficient: 1 }] },
    { equation: "C2H6 + O2 -> CO2 + H2O", reactants: [{ formula: "C2H6", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "CO2", coefficient: 1 }, { formula: "H2O", coefficient: 1 }] },
    { equation: "C3H8 + O2 -> CO2 + H2O", reactants: [{ formula: "C3H8", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "CO2", coefficient: 1 }, { formula: "H2O", coefficient: 1 }] },
    { equation: "H2O2 -> H2O + O2", reactants: [{ formula: "H2O2", coefficient: 1 }], products: [{ formula: "H2O", coefficient: 1 }, { formula: "O2", coefficient: 1 }] },
    { equation: "KClO3 -> KCl + O2", reactants: [{ formula: "KClO3", coefficient: 1 }], products: [{ formula: "KCl", coefficient: 1 }, { formula: "O2", coefficient: 1 }] },
    { equation: "Fe + O2 -> Fe2O3", reactants: [{ formula: "Fe", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "Fe2O3", coefficient: 1 }] },
    { equation: "Na + Cl2 -> NaCl", reactants: [{ formula: "Na", coefficient: 1 }, { formula: "Cl2", coefficient: 1 }], products: [{ formula: "NaCl", coefficient: 1 }] },
    { equation: "Mg + O2 -> MgO", reactants: [{ formula: "Mg", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "MgO", coefficient: 1 }] },
    { equation: "Al + O2 -> Al2O3", reactants: [{ formula: "Al", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "Al2O3", coefficient: 1 }] },
    { equation: "P4 + O2 -> P4O10", reactants: [{ formula: "P4", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "P4O10", coefficient: 1 }] },
    { equation: "S8 + O2 -> SO2", reactants: [{ formula: "S8", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "SO2", coefficient: 1 }] },
    { equation: "ZnS + O2 -> ZnO + SO2", reactants: [{ formula: "ZnS", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "ZnO", coefficient: 1 }, { formula: "SO2", coefficient: 1 }] },
    { equation: "Cu2S + O2 -> Cu + SO2", reactants: [{ formula: "Cu2S", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "Cu", coefficient: 1 }, { formula: "SO2", coefficient: 1 }] },
    { equation: "CS2 + O2 -> CO2 + SO2", reactants: [{ formula: "CS2", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "CO2", coefficient: 1 }, { formula: "SO2", coefficient: 1 }] },
    { equation: "NH3 + O2 -> NO + H2O", reactants: [{ formula: "NH3", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "NO", coefficient: 1 }, { formula: "H2O", coefficient: 1 }] },
    { equation: "NO + O2 -> NO2", reactants: [{ formula: "NO", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "NO2", coefficient: 1 }] },
    { equation: "SO2 + O2 -> SO3", reactants: [{ formula: "SO2", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "SO3", coefficient: 1 }] },
    { equation: "PbS + O2 -> PbO + SO2", reactants: [{ formula: "PbS", coefficient: 1 }, { formula: "O2", coefficient: 1 }], products: [{ formula: "PbO", coefficient: 1 }, { formula: "SO2", coefficient: 1 }] },
    { equation: "CH4 + Cl2 -> CH3Cl + HCl", reactants: [{ formula: "CH4", coefficient: 1 }, { formula: "Cl2", coefficient: 1 }], products: [{ formula: "CH3Cl", coefficient: 1 }, { formula: "HCl", coefficient: 1 }] },
    { equation: "C6H12O6 -> C2H5OH + CO2", reactants: [{ formula: "C6H12O6", coefficient: 1 }], products: [{ formula: "C2H5OH", coefficient: 1 }, { formula: "CO2", coefficient: 1 }] }
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
