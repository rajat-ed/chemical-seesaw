// 50 different equations from simple to complex
const equations = [
    { reactants: [{ formula: "H₂", atoms: { H: 2 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "H₂ + O₂ → H₂O" },
    { reactants: [{ formula: "N₂", atoms: { N: 2 } }, { formula: "H₂", atoms: { H: 2 } }], products: [{ formula: "NH₃", atoms: { N: 1, H: 3 } }], display: "N₂ + H₂ → NH₃" },
    { reactants: [{ formula: "Na", atoms: { Na: 1 } }, { formula: "Cl₂", atoms: { Cl: 2 } }], products: [{ formula: "NaCl", atoms: { Na: 1, Cl: 1 } }], display: "Na + Cl₂ → NaCl" },
    { reactants: [{ formula: "Mg", atoms: { Mg: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "MgO", atoms: { Mg: 1, O: 1 } }], display: "Mg + O₂ → MgO" },
    { reactants: [{ formula: "H₂O", atoms: { H: 2, O: 1 } }], products: [{ formula: "H₂", atoms: { H: 2 } }, { formula: "O₂", atoms: { O: 2 } }], display: "H₂O → H₂ + O₂" },
    { reactants: [{ formula: "Fe", atoms: { Fe: 1 } }, { formula: "S", atoms: { S: 1 } }], products: [{ formula: "FeS", atoms: { Fe: 1, S: 1 } }], display: "Fe + S → FeS" },
    { reactants: [{ formula: "C", atoms: { C: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }], display: "C + O₂ → CO₂" },
    { reactants: [{ formula: "K", atoms: { K: 1 } }, { formula: "Cl₂", atoms: { Cl: 2 } }], products: [{ formula: "KCl", atoms: { K: 1, Cl: 1 } }], display: "K + Cl₂ → KCl" },
    { reactants: [{ formula: "Al", atoms: { Al: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "Al₂O₃", atoms: { Al: 2, O: 3 } }], display: "Al + O₂ → Al₂O₃" },
    { reactants: [{ formula: "H₂", atoms: { H: 2 } }, { formula: "N₂", atoms: { N: 2 } }], products: [{ formula: "NH₃", atoms: { N: 1, H: 3 } }], display: "H₂ + N₂ → NH₃" },
    { reactants: [{ formula: "CH₄", atoms: { C: 1, H: 4 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "CH₄ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "Fe", atoms: { Fe: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "Fe₂O₃", atoms: { Fe: 2, O: 3 } }], display: "Fe + O₂ → Fe₂O₃" },
    { reactants: [{ formula: "HCl", atoms: { H: 1, Cl: 1 } }, { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 } }], products: [{ formula: "NaCl", atoms: { Na: 1, Cl: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "HCl + NaOH → NaCl + H₂O" },
    { reactants: [{ formula: "Zn", atoms: { Zn: 1 } }, { formula: "HCl", atoms: { H: 1, Cl: 1 } }], products: [{ formula: "ZnCl₂", atoms: { Zn: 1, Cl: 2 } }, { formula: "H₂", atoms: { H: 2 } }], display: "Zn + HCl → ZnCl₂ + H₂" },
    { reactants: [{ formula: "Cu", atoms: { Cu: 1 } }, { formula: "S", atoms: { S: 1 } }], products: [{ formula: "CuS", atoms: { Cu: 1, S: 1 } }], display: "Cu + S → CuS" },
    { reactants: [{ formula: "AgNO₃", atoms: { Ag: 1, N: 1, O: 3 } }, { formula: "NaCl", atoms: { Na: 1, Cl: 1 } }], products: [{ formula: "AgCl", atoms: { Ag: 1, Cl: 1 } }, { formula: "NaNO₃", atoms: { Na: 1, N: 1, O: 3 } }], display: "AgNO₃ + NaCl → AgCl + NaNO₃" },
    { reactants: [{ formula: "H₂SO₄", atoms: { H: 2, S: 1, O: 4 } }, { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 } }], products: [{ formula: "Na₂SO₄", atoms: { Na: 2, S: 1, O: 4 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "H₂SO₄ + NaOH → Na₂SO₄ + H₂O" },
    { reactants: [{ formula: "FeS", atoms: { Fe: 1, S: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "Fe₂O₃", atoms: { Fe: 2, O: 3 } }, { formula: "SO₂", atoms: { S: 1, O: 2 } }], display: "FeS + O₂ → Fe₂O₃ + SO₂" },
    { reactants: [{ formula: "C₂H₅OH", atoms: { C: 2, H: 5, O: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₂H₅OH + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "Pb(NO₃)₂", atoms: { Pb: 1, N: 2, O: 6 } }, { formula: "KI", atoms: { K: 1, I: 1 } }], products: [{ formula: "PbI₂", atoms: { Pb: 1, I: 2 } }, { formula: "KNO₃", atoms: { K: 1, N: 1, O: 3 } }], display: "Pb(NO₃)₂ + KI → PbI₂ + KNO₃" },
    { reactants: [{ formula: "C₃H₈", atoms: { C: 3, H: 8 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₃H₈ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "Al", atoms: { Al: 1 } }, { formula: "H₂SO₄", atoms: { H: 2, S: 1, O: 4 } }], products: [{ formula: "Al₂(SO₄)₃", atoms: { Al: 2, S: 3, O: 12 } }, { formula: "H₂", atoms: { H: 2 } }], display: "Al + H₂SO₄ → Al₂(SO₄)₃ + H₂" },
    { reactants: [{ formula: "Na₂CO₃", atoms: { Na: 2, C: 1, O: 3 } }, { formula: "HCl", atoms: { H: 1, Cl: 1 } }], products: [{ formula: "NaCl", atoms: { Na: 1, Cl: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }, { formula: "CO₂", atoms: { C: 1, O: 2 } }], display: "Na₂CO₃ + HCl → NaCl + H₂O + CO₂" },
    { reactants: [{ formula: "Fe₂O₃", atoms: { Fe: 2, O: 3 } }, { formula: "CO", atoms: { C: 1, O: 1 } }], products: [{ formula: "Fe", atoms: { Fe: 1 } }, { formula: "CO₂", atoms: { C: 1, O: 2 } }], display: "Fe₂O₃ + CO → Fe + CO₂" },
    { reactants: [{ formula: "C₄H₁₀", atoms: { C: 4, H: 10 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₄H₁₀ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "KClO₃", atoms: { K: 1, Cl: 1, O: 3 } }], products: [{ formula: "KCl", atoms: { K: 1, Cl: 1 } }, { formula: "O₂", atoms: { O: 2 } }], display: "KClO₃ → KCl + O₂" },
    { reactants: [{ formula: "NH₃", atoms: { N: 1, H: 3 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "NO", atoms: { N: 1, O: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "NH₃ + O₂ → NO + H₂O" },
    { reactants: [{ formula: "CuSO₄", atoms: { Cu: 1, S: 1, O: 4 } }, { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 } }], products: [{ formula: "Cu(OH)₂", atoms: { Cu: 1, O: 2, H: 2 } }, { formula: "Na₂SO₄", atoms: { Na: 2, S: 1, O: 4 } }], display: "CuSO₄ + NaOH → Cu(OH)₂ + Na₂SO₄" },
    { reactants: [{ formula: "HNO₃", atoms: { H: 1, N: 1, O: 3 } }, { formula: "Ca(OH)₂", atoms: { Ca: 1, O: 2, H: 2 } }], products: [{ formula: "Ca(NO₃)₂", atoms: { Ca: 1, N: 2, O: 6 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + H₂O" },
    { reactants: [{ formula: "Mg(OH)₂", atoms: { Mg: 1, O: 2, H: 2 } }, { formula: "HCl", atoms: { H: 1, Cl: 1 } }], products: [{ formula: "MgCl₂", atoms: { Mg: 1, Cl: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "Mg(OH)₂ + HCl → MgCl₂ + H₂O" },
    { reactants: [{ formula: "C₆H₁₂O₆", atoms: { C: 6, H: 12, O: 6 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₆H₁₂O₆ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "Al(OH)₃", atoms: { Al: 1, O: 3, H: 3 } }, { formula: "H₂SO₄", atoms: { H: 2, S: 1, O: 4 } }], products: [{ formula: "Al₂(SO₄)₃", atoms: { Al: 2, S: 3, O: 12 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "Al(OH)₃ + H₂SO₄ → Al₂(SO₄)₃ + H₂O" },
    { reactants: [{ formula: "Fe₃O₄", atoms: { Fe: 3, O: 4 } }, { formula: "H₂", atoms: { H: 2 } }], products: [{ formula: "Fe", atoms: { Fe: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "Fe₃O₄ + H₂ → Fe + H₂O" },
    { reactants: [{ formula: "C₅H₁₂", atoms: { C: 5, H: 12 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₅H₁₂ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "KMnO₄", atoms: { K: 1, Mn: 1, O: 4 } }, { formula: "HCl", atoms: { H: 1, Cl: 1 } }], products: [{ formula: "MnCl₂", atoms: { Mn: 1, Cl: 2 } }, { formula: "KCl", atoms: { K: 1, Cl: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }, { formula: "Cl₂", atoms: { Cl: 2 } }], display: "KMnO₄ + HCl → MnCl₂ + KCl + H₂O + Cl₂" },
    { reactants: [{ formula: "Na₂S₂O₃", atoms: { Na: 2, S: 2, O: 3 } }, { formula: "I₂", atoms: { I: 2 } }], products: [{ formula: "NaI", atoms: { Na: 1, I: 1 } }, { formula: "Na₂S₄O₆", atoms: { Na: 2, S: 4, O: 6 } }], display: "Na₂S₂O₃ + I₂ → NaI + Na₂S₄O₆" },
    { reactants: [{ formula: "C₇H₁₆", atoms: { C: 7, H: 16 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₇H₁₆ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "H₃PO₄", atoms: { H: 3, P: 1, O: 4 } }, { formula: "Ca(OH)₂", atoms: { Ca: 1, O: 2, H: 2 } }], products: [{ formula: "Ca₃(PO₄)₂", atoms: { Ca: 3, P: 2, O: 8 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "H₃PO₄ + Ca(OH)₂ → Ca₃(PO₄)₂ + H₂O" },
    { reactants: [{ formula: "FeCl₃", atoms: { Fe: 1, Cl: 3 } }, { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 } }], products: [{ formula: "Fe(OH)₃", atoms: { Fe: 1, O: 3, H: 3 } }, { formula: "NaCl", atoms: { Na: 1, Cl: 1 } }], display: "FeCl₃ + NaOH → Fe(OH)₃ + NaCl" },
    { reactants: [{ formula: "C₈H₁₈", atoms: { C: 8, H: 18 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₈H₁₈ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "K₂Cr₂O₇", atoms: { K: 2, Cr: 2, O: 7 } }, { formula: "H₂SO₄", atoms: { H: 2, S: 1, O: 4 } }], products: [{ formula: "K₂SO₄", atoms: { K: 2, S: 1, O: 4 } }, { formula: "Cr₂(SO₄)₃", atoms: { Cr: 2, S: 3, O: 12 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }, { formula: "O₂", atoms: { O: 2 } }], display: "K₂Cr₂O₇ + H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃ + H₂O + O₂" },
    { reactants: [{ formula: "NH₄NO₃", atoms: { N: 2, H: 4, O: 3 } }], products: [{ formula: "N₂O", atoms: { N: 2, O: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "NH₄NO₃ → N₂O + H₂O" },
    { reactants: [{ formula: "C₆H₅OH", atoms: { C: 6, H: 6, O: 1 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₆H₅OH + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "BaCl₂", atoms: { Ba: 1, Cl: 2 } }, { formula: "Na₃PO₄", atoms: { Na: 3, P: 1, O: 4 } }], products: [{ formula: "Ba₃(PO₄)₂", atoms: { Ba: 3, P: 2, O: 8 } }, { formula: "NaCl", atoms: { Na: 1, Cl: 1 } }], display: "BaCl₂ + Na₃PO₄ → Ba₃(PO₄)₂ + NaCl" },
    { reactants: [{ formula: "C₁₀H₂₂", atoms: { C: 10, H: 22 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₁₀H₂₂ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "Fe₂(SO₄)₃", atoms: { Fe: 2, S: 3, O: 12 } }, { formula: "KOH", atoms: { K: 1, O: 1, H: 1 } }], products: [{ formula: "Fe(OH)₃", atoms: { Fe: 1, O: 3, H: 3 } }, { formula: "K₂SO₄", atoms: { K: 2, S: 1, O: 4 } }], display: "Fe₂(SO₄)₃ + KOH → Fe(OH)₃ + K₂SO₄" },
    { reactants: [{ formula: "C₆H₁₄", atoms: { C: 6, H: 14 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₆H₁₄ + O₂ → CO₂ + H₂O" },
    { reactants: [{ formula: "H₂C₂O₄", atoms: { H: 2, C: 2, O: 4 } }, { formula: "KMnO₄", atoms: { K: 1, Mn: 1, O: 4 } }], products: [{ formula: "MnO₂", atoms: { Mn: 1, O: 2 } }, { formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "KOH", atoms: { K: 1, O: 1, H: 1 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "H₂C₂O₄ + KMnO₄ → MnO₂ + CO₂ + KOH + H₂O" },
    { reactants: [{ formula: "Zn(NO₃)₂", atoms: { Zn: 1, N: 2, O: 6 } }, { formula: "NaOH", atoms: { Na: 1, O: 1, H: 1 } }], products: [{ formula: "Zn(OH)₂", atoms: { Zn: 1, O: 2, H: 2 } }, { formula: "NaNO₃", atoms: { Na: 1, N: 1, O: 3 } }], display: "Zn(NO₃)₂ + NaOH → Zn(OH)₂ + NaNO₃" },
    { reactants: [{ formula: "C₉H₂₀", atoms: { C: 9, H: 20 } }, { formula: "O₂", atoms: { O: 2 } }], products: [{ formula: "CO₂", atoms: { C: 1, O: 2 } }, { formula: "H₂O", atoms: { H: 2, O: 1 } }], display: "C₉H₂₀ + O₂ → CO₂ + H₂O" }
];

let currentEquationIndex = 0;
let hasCelebrated = false;

function loadEquation() {
    const equation = equations[currentEquationIndex];
    const equationDisplay = document.getElementById('equation-display');
    const inputPanel = document.getElementById('input-panel');

    if (!equationDisplay || !inputPanel) {
        console.error("Required DOM elements not found!");
        return;
    }

    equationDisplay.innerHTML = equation.display;
    inputPanel.innerHTML = '';

    // Reactants
    equation.reactants.forEach((term, i) => {
        const div = document.createElement('div');
        div.className = 'term';
        div.innerHTML = `<input type="number" id="r${i}" min="1" value="1"> ${term.formula}`;
        inputPanel.appendChild(div);
        if (i < equation.reactants.length - 1) inputPanel.appendChild(document.createTextNode(' + '));
    });

    // Arrow
    inputPanel.appendChild(document.createTextNode(' → '));

    // Products
    equation.products.forEach((term, i) => {
        const div = document.createElement('div');
        div.className = 'term';
        div.innerHTML = `<input type="number" id="p${i}" min="1" value="1"> ${term.formula}`;
        inputPanel.appendChild(div);
        if (i < equation.products.length - 1) inputPanel.appendChild(document.createTextNode(' + '));
    });

    // Add event listeners for automatic balance check
    const inputs = inputPanel.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', checkBalance);
    });

    // Reset celebration flag and check balance
    hasCelebrated = false;
    checkBalance();
}

function checkBalance() {
    const equation = equations[currentEquationIndex];
    const reactantsAtoms = {};
    const productsAtoms = {};

    // Calculate total atoms for reactants
    let reactantTotal = 0;
    equation.reactants.forEach((term, i) => {
        const coeff = parseInt(document.getElementById(`r${i}`).value) || 1;
        for (let atom in term.atoms) {
            reactantsAtoms[atom] = (reactantsAtoms[atom] || 0) + term.atoms[atom] * coeff;
        }
        reactantTotal += Object.values(term.atoms).reduce((a, b) => a + b, 0) * coeff;
    });

    // Calculate total atoms for products
    let productTotal = 0;
    equation.products.forEach((term, i) => {
        const coeff = parseInt(document.getElementById(`p${i}`).value) || 1;
        for (let atom in term.atoms) {
            productsAtoms[atom] = (productsAtoms[atom] || 0) + term.atoms[atom] * coeff;
        }
        productTotal += Object.values(term.atoms).reduce((a, b) => a + b, 0) * coeff;
    });

    // Display individual atom counts on seesaw
    const reactantDisplay = Object.entries(reactantsAtoms)
        .map(([atom, count]) => `${atom}: ${count}`)
        .join(', ');
    const productDisplay = Object.entries(productsAtoms)
        .map(([atom, count]) => `${atom}: ${count}`)
        .join(', ');
    document.getElementById('reactants-count').textContent = reactantDisplay || '0';
    document.getElementById('products-count').textContent = productDisplay || '0';

    // Check if balanced
    let isBalanced = true;
    const allAtoms = new Set([...Object.keys(reactantsAtoms), ...Object.keys(productsAtoms)]);
    for (let atom of allAtoms) {
        if ((reactantsAtoms[atom] || 0) !== (productsAtoms[atom] || 0)) {
            isBalanced = false;
            break;
        }
    }

    // Update seesaw tilt and trigger sound/confetti when balanced
    const seesaw = document.getElementById('seesaw');
    const status = document.getElementById('status');
    const successSound = document.getElementById('success-sound');
    const soundToggle = document.getElementById('sound-toggle');

    if (isBalanced) {
        seesaw.style.transform = 'rotate(0deg)';
        status.textContent = 'Balanced';
        status.className = 'balanced';
        if (!hasCelebrated) {
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
            if (successSound && soundToggle.checked) { // Play sound only if toggle is on
                successSound.currentTime = 0; // Reset to start
                successSound.play().catch(err => console.error("Audio playback failed:", err));
            }
            hasCelebrated = true;
        }
    } else {
        const tilt = (productTotal - reactantTotal) * 0.5;
        seesaw.style.transform = `rotate(${Math.min(Math.max(tilt, -20), 20)}deg)`;
        status.textContent = 'Unbalanced';
        status.className = 'unbalanced';
        hasCelebrated = false;
    }
}

// Event listener for next equation
document.getElementById('next-equation').addEventListener('click', () => {
    currentEquationIndex = (currentEquationIndex + 1) % equations.length;
    loadEquation();
});

// Initial load with error checking
document.addEventListener('DOMContentLoaded', () => {
    if (equations.length > 0) {
        loadEquation();
    } else {
        console.error("No equations defined!");
    }
});
