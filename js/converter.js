/**
 * Unit Converter - Conversion Functions
 */

// Length conversion factors (base unit: meter)
const LENGTH_TO_METER = {
    m: 1,
    km: 1000,
    ft: 0.3048,
    mi: 1609.344
};

// Weight conversion factors (base unit: kilogram)
const WEIGHT_TO_KG = {
    kg: 1,
    lb: 0.45359237
};

/**
 * Round to specified decimal places
 */
function round(value, decimals = 4) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

/**
 * Convert length units
 * @param {number} value - Input value
 * @param {string} from - Source unit (m, km, ft, mi)
 * @param {string} to - Target unit (m, km, ft, mi)
 * @returns {number|null} - Converted value (4 decimal places) or null if invalid
 */
function convertLength(value, from, to) {
    if (!isValidNumber(value)) return null;
    if (!LENGTH_TO_METER[from] || !LENGTH_TO_METER[to]) return null;

    // Convert to base unit (meter), then to target unit
    const meters = value * LENGTH_TO_METER[from];
    const result = meters / LENGTH_TO_METER[to];
    return round(result);
}

/**
 * Convert weight units
 * @param {number} value - Input value
 * @param {string} from - Source unit (kg, lb)
 * @param {string} to - Target unit (kg, lb)
 * @returns {number|null} - Converted value (4 decimal places) or null if invalid
 */
function convertWeight(value, from, to) {
    if (!isValidNumber(value)) return null;
    if (!WEIGHT_TO_KG[from] || !WEIGHT_TO_KG[to]) return null;

    // Convert to base unit (kg), then to target unit
    const kg = value * WEIGHT_TO_KG[from];
    const result = kg / WEIGHT_TO_KG[to];
    return round(result);
}

/**
 * Convert temperature units
 * @param {number} value - Input value
 * @param {string} from - Source unit (C, F, K)
 * @param {string} to - Target unit (C, F, K)
 * @returns {number|null} - Converted value (4 decimal places) or null if invalid
 */
function convertTemperature(value, from, to) {
    if (!isValidNumber(value)) return null;

    const validUnits = ['C', 'F', 'K'];
    if (!validUnits.includes(from) || !validUnits.includes(to)) return null;

    // Convert to Celsius first
    let celsius;
    switch (from) {
        case 'C': celsius = value; break;
        case 'F': celsius = (value - 32) * 5 / 9; break;
        case 'K': celsius = value - 273.15; break;
        default: return null;
    }

    // Convert from Celsius to target
    let result;
    switch (to) {
        case 'C': result = celsius; break;
        case 'F': result = celsius * 9 / 5 + 32; break;
        case 'K': result = celsius + 273.15; break;
        default: return null;
    }

    return round(result);
}

/**
 * Validate numeric input
 * @param {any} value - Input to validate
 * @returns {boolean} - True if valid number
 */
function isValidNumber(value) {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (typeof value === 'number' && isNaN(value)) return false;
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
}
