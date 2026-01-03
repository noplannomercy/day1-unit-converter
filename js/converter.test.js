/**
 * Unit Converter - Test Suite
 * Run in browser console or include in test.html
 */

const tests = {
    passed: 0,
    failed: 0,
    results: []
};

function test(name, fn) {
    try {
        fn();
        tests.passed++;
        tests.results.push({ name, status: 'PASS' });
        console.log(`✅ PASS: ${name}`);
    } catch (e) {
        tests.failed++;
        tests.results.push({ name, status: 'FAIL', error: e.message });
        console.log(`❌ FAIL: ${name}`);
        console.log(`   Expected: ${e.message}`);
    }
}

function assertEqual(actual, expected, precision = 4) {
    if (typeof actual === 'number' && typeof expected === 'number') {
        const actualRounded = Math.round(actual * Math.pow(10, precision)) / Math.pow(10, precision);
        const expectedRounded = Math.round(expected * Math.pow(10, precision)) / Math.pow(10, precision);
        if (actualRounded !== expectedRounded) {
            throw new Error(`${expected}, but got ${actual}`);
        }
    } else if (actual !== expected) {
        throw new Error(`${expected}, but got ${actual}`);
    }
}

function runTests() {
    console.log('🧪 Running Unit Converter Tests...\n');
    tests.passed = 0;
    tests.failed = 0;
    tests.results = [];

    // ==================== LENGTH TESTS ====================
    console.log('--- Length Conversions ---');

    test('100 km = 62.1371 mi', () => {
        assertEqual(convertLength(100, 'km', 'mi'), 62.1371);
    });

    test('1 mi = 1.6093 km', () => {
        assertEqual(convertLength(1, 'mi', 'km'), 1.6093);
    });

    test('1 km = 1000 m', () => {
        assertEqual(convertLength(1, 'km', 'm'), 1000);
    });

    test('1 m = 3.2808 ft', () => {
        assertEqual(convertLength(1, 'm', 'ft'), 3.2808);
    });

    test('1 ft = 0.3048 m', () => {
        assertEqual(convertLength(1, 'ft', 'm'), 0.3048);
    });

    test('Same unit returns same value (m to m)', () => {
        assertEqual(convertLength(5, 'm', 'm'), 5);
    });

    // ==================== WEIGHT TESTS ====================
    console.log('\n--- Weight Conversions ---');

    test('1 kg = 2.2046 lb', () => {
        assertEqual(convertWeight(1, 'kg', 'lb'), 2.2046);
    });

    test('1 lb = 0.4536 kg', () => {
        assertEqual(convertWeight(1, 'lb', 'kg'), 0.4536);
    });

    test('Same unit returns same value (kg to kg)', () => {
        assertEqual(convertWeight(10, 'kg', 'kg'), 10);
    });

    // ==================== TEMPERATURE TESTS ====================
    console.log('\n--- Temperature Conversions ---');

    test('0°C = 32°F', () => {
        assertEqual(convertTemperature(0, 'C', 'F'), 32);
    });

    test('0°C = 273.15K', () => {
        assertEqual(convertTemperature(0, 'C', 'K'), 273.15);
    });

    test('32°F = 0°C', () => {
        assertEqual(convertTemperature(32, 'F', 'C'), 0);
    });

    test('100°C = 212°F', () => {
        assertEqual(convertTemperature(100, 'C', 'F'), 212);
    });

    test('273.15K = 0°C', () => {
        assertEqual(convertTemperature(273.15, 'K', 'C'), 0);
    });

    test('Same unit returns same value (C to C)', () => {
        assertEqual(convertTemperature(25, 'C', 'C'), 25);
    });

    // ==================== EDGE CASES ====================
    console.log('\n--- Edge Cases ---');

    test('Zero value works (0 km to mi)', () => {
        assertEqual(convertLength(0, 'km', 'mi'), 0);
    });

    test('Negative value works (-10°C to F)', () => {
        assertEqual(convertTemperature(-10, 'C', 'F'), 14);
    });

    test('Large number works (1000000 m to km)', () => {
        assertEqual(convertLength(1000000, 'm', 'km'), 1000);
    });

    test('Decimal input works (0.5 kg to lb)', () => {
        assertEqual(convertWeight(0.5, 'kg', 'lb'), 1.1023);
    });

    // ==================== VALIDATION TESTS ====================
    console.log('\n--- Input Validation ---');

    test('isValidNumber accepts positive numbers', () => {
        assertEqual(isValidNumber(42), true);
    });

    test('isValidNumber accepts zero', () => {
        assertEqual(isValidNumber(0), true);
    });

    test('isValidNumber accepts negative numbers', () => {
        assertEqual(isValidNumber(-5), true);
    });

    test('isValidNumber accepts decimals', () => {
        assertEqual(isValidNumber(3.14), true);
    });

    test('isValidNumber rejects strings', () => {
        assertEqual(isValidNumber('abc'), false);
    });

    test('isValidNumber rejects empty string', () => {
        assertEqual(isValidNumber(''), false);
    });

    test('isValidNumber rejects null', () => {
        assertEqual(isValidNumber(null), false);
    });

    test('isValidNumber rejects undefined', () => {
        assertEqual(isValidNumber(undefined), false);
    });

    test('isValidNumber rejects NaN', () => {
        assertEqual(isValidNumber(NaN), false);
    });

    // ==================== SUMMARY ====================
    console.log('\n========================================');
    console.log(`📊 Results: ${tests.passed} passed, ${tests.failed} failed`);
    console.log('========================================\n');

    return tests;
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
    console.log('💡 Run runTests() in console to execute tests');
}
