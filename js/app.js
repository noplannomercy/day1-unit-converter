/**
 * Unit Converter - Main Application Logic
 */

// Unit options for each category
const UNITS = {
    length: [
        { value: 'm', label: 'meter (m)' },
        { value: 'km', label: 'kilometer (km)' },
        { value: 'ft', label: 'feet (ft)' },
        { value: 'mi', label: 'mile (mi)' }
    ],
    weight: [
        { value: 'kg', label: 'kilogram (kg)' },
        { value: 'lb', label: 'pound (lb)' }
    ],
    temperature: [
        { value: 'C', label: 'Celsius (°C)' },
        { value: 'F', label: 'Fahrenheit (°F)' },
        { value: 'K', label: 'Kelvin (K)' }
    ]
};

// Formulas for display
const FORMULAS = {
    length: {
        'm-km': '1 m = 0.001 km',
        'km-m': '1 km = 1,000 m',
        'm-ft': '1 m = 3.2808 ft',
        'ft-m': '1 ft = 0.3048 m',
        'm-mi': '1 m = 0.000621 mi',
        'mi-m': '1 mi = 1,609.344 m',
        'km-mi': '1 km = 0.6214 mi',
        'mi-km': '1 mi = 1.6093 km',
        'km-ft': '1 km = 3,280.84 ft',
        'ft-km': '1 ft = 0.000305 km',
        'ft-mi': '1 ft = 0.000189 mi',
        'mi-ft': '1 mi = 5,280 ft'
    },
    weight: {
        'kg-lb': '1 kg = 2.2046 lb',
        'lb-kg': '1 lb = 0.4536 kg'
    },
    temperature: {
        'C-F': '°F = °C × 9/5 + 32',
        'F-C': '°C = (°F - 32) × 5/9',
        'C-K': 'K = °C + 273.15',
        'K-C': '°C = K - 273.15',
        'F-K': 'K = (°F - 32) × 5/9 + 273.15',
        'K-F': '°F = (K - 273.15) × 9/5 + 32'
    }
};

// Current state
let currentCategory = 'length';

// DOM Elements
const inputValue = document.getElementById('input-value');
const resultValue = document.getElementById('result-value');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const errorMessage = document.getElementById('error-message');
const formulaToggle = document.getElementById('formula-toggle');
const formulaDisplay = document.getElementById('formula-display');
const tabButtons = document.querySelectorAll('.tab-btn');

/**
 * Initialize the application
 */
function init() {
    // Set up event listeners
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.category));
    });

    inputValue.addEventListener('input', performConversion);
    fromUnit.addEventListener('change', performConversion);
    toUnit.addEventListener('change', performConversion);
    formulaToggle.addEventListener('click', toggleFormula);

    // Initial state
    updateUnitOptions('length');
}

/**
 * Switch between tabs (Length, Weight, Temperature)
 */
function switchTab(category) {
    currentCategory = category;

    // Update tab styles
    tabButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-gray-50');
        }
    });

    // Update unit dropdowns
    updateUnitOptions(category);

    // Clear and re-convert
    clearResult();
    performConversion();
}

/**
 * Update unit dropdown options based on category
 */
function updateUnitOptions(category) {
    const units = UNITS[category];

    // Clear existing options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    // Add new options
    units.forEach((unit, index) => {
        fromUnit.add(new Option(unit.label, unit.value));
        toUnit.add(new Option(unit.label, unit.value));
    });

    // Set default "to" unit to second option
    if (units.length > 1) {
        toUnit.selectedIndex = 1;
    }
}

/**
 * Perform the conversion and update result
 */
function performConversion() {
    const value = inputValue.value;

    // Clear if empty
    if (value === '') {
        clearResult();
        return;
    }

    // Validate input
    if (!isValidNumber(parseFloat(value))) {
        showError('Please enter a valid number');
        return;
    }

    const numValue = parseFloat(value);
    const from = fromUnit.value;
    const to = toUnit.value;

    // Perform conversion based on category
    let result;
    switch (currentCategory) {
        case 'length':
            result = convertLength(numValue, from, to);
            break;
        case 'weight':
            result = convertWeight(numValue, from, to);
            break;
        case 'temperature':
            result = convertTemperature(numValue, from, to);
            break;
    }

    if (result !== null) {
        resultValue.value = result;
        hideError();
        updateFormula();
    } else {
        showError('Conversion error');
    }
}

/**
 * Clear the result field
 */
function clearResult() {
    resultValue.value = '';
    hideError();
}

/**
 * Show error message
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    resultValue.value = '';
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.add('hidden');
}

/**
 * Toggle formula display
 */
function toggleFormula() {
    const isHidden = formulaDisplay.classList.contains('hidden');

    if (isHidden) {
        formulaDisplay.classList.remove('hidden');
        formulaToggle.textContent = 'Hide Formula';
        updateFormula();
    } else {
        formulaDisplay.classList.add('hidden');
        formulaToggle.textContent = 'Show Formula';
    }
}

/**
 * Update formula display
 */
function updateFormula() {
    const from = fromUnit.value;
    const to = toUnit.value;
    const key = `${from}-${to}`;

    const formulas = FORMULAS[currentCategory];
    const formula = formulas[key] || `${from} → ${to}`;

    formulaDisplay.textContent = formula;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
