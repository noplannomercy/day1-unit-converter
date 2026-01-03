/**
 * Unit Converter - Storage Test Suite
 * Run in browser console or include in test.html
 */

const storageTests = {
    passed: 0,
    failed: 0,
    results: []
};

function storageTest(name, fn) {
    try {
        fn();
        storageTests.passed++;
        storageTests.results.push({ name, status: 'PASS' });
        console.log(`✅ PASS: ${name}`);
    } catch (e) {
        storageTests.failed++;
        storageTests.results.push({ name, status: 'FAIL', error: e.message });
        console.log(`❌ FAIL: ${name}`);
        console.log(`   ${e.message}`);
    }
}

function assertStorageEqual(actual, expected) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
        throw new Error(`Expected ${expectedStr}, but got ${actualStr}`);
    }
}

function assertStorageTrue(value, message) {
    if (value !== true) {
        throw new Error(message || `Expected true, but got ${value}`);
    }
}

function assertStorageLength(arr, length) {
    if (arr.length !== length) {
        throw new Error(`Expected length ${length}, but got ${arr.length}`);
    }
}

function runStorageTests() {
    console.log('🧪 Running Storage Tests...\n');
    storageTests.passed = 0;
    storageTests.failed = 0;
    storageTests.results = [];

    // Clear storage before tests
    localStorage.removeItem('unitConverter_history');
    localStorage.removeItem('unitConverter_favorites');

    // ==================== HISTORY TESTS ====================
    console.log('--- History Tests ---');

    storageTest('saveHistory stores item to LocalStorage', () => {
        clearHistory();
        const item = { value: 100, fromUnit: 'km', toUnit: 'mi', result: 62.1371, timestamp: Date.now() };
        saveHistory(item);
        const history = getHistory();
        assertStorageLength(history, 1);
        assertStorageEqual(history[0].value, 100);
    });

    storageTest('getHistory retrieves array from LocalStorage', () => {
        clearHistory();
        saveHistory({ value: 1, fromUnit: 'kg', toUnit: 'lb', result: 2.2046, timestamp: Date.now() });
        saveHistory({ value: 2, fromUnit: 'kg', toUnit: 'lb', result: 4.4092, timestamp: Date.now() });
        const history = getHistory();
        assertStorageTrue(Array.isArray(history), 'History should be an array');
        assertStorageLength(history, 2);
    });

    storageTest('clearHistory removes all history', () => {
        saveHistory({ value: 100, fromUnit: 'km', toUnit: 'mi', result: 62.1371, timestamp: Date.now() });
        clearHistory();
        const history = getHistory();
        assertStorageLength(history, 0);
    });

    storageTest('History limits to 10 items (oldest removed)', () => {
        clearHistory();
        // Add 12 items
        for (let i = 1; i <= 12; i++) {
            saveHistory({ value: i, fromUnit: 'km', toUnit: 'mi', result: i * 0.6214, timestamp: Date.now() + i });
        }
        const history = getHistory();
        assertStorageLength(history, 10);
        // Oldest (1, 2) should be removed, newest (12) should be first
        assertStorageEqual(history[0].value, 12);
        assertStorageEqual(history[9].value, 3);
    });

    storageTest('getHistory returns empty array if no history', () => {
        clearHistory();
        const history = getHistory();
        assertStorageTrue(Array.isArray(history), 'Should return array');
        assertStorageLength(history, 0);
    });

    // ==================== FAVORITES TESTS ====================
    console.log('\n--- Favorites Tests ---');

    storageTest('saveFavorite stores favorite to LocalStorage', () => {
        clearFavorites();
        const fav = { category: 'length', fromUnit: 'km', toUnit: 'mi' };
        saveFavorite(fav);
        const favorites = getFavorites();
        assertStorageLength(favorites, 1);
        assertStorageEqual(favorites[0].fromUnit, 'km');
    });

    storageTest('getFavorites retrieves array from LocalStorage', () => {
        clearFavorites();
        saveFavorite({ category: 'length', fromUnit: 'km', toUnit: 'mi' });
        saveFavorite({ category: 'weight', fromUnit: 'kg', toUnit: 'lb' });
        const favorites = getFavorites();
        assertStorageTrue(Array.isArray(favorites), 'Favorites should be an array');
        assertStorageLength(favorites, 2);
    });

    storageTest('Favorites limits to 5 items', () => {
        clearFavorites();
        // Add 7 items
        for (let i = 1; i <= 7; i++) {
            saveFavorite({ category: 'length', fromUnit: `unit${i}`, toUnit: 'mi' });
        }
        const favorites = getFavorites();
        assertStorageLength(favorites, 5);
    });

    storageTest('removeFavorite removes specific favorite', () => {
        clearFavorites();
        saveFavorite({ category: 'length', fromUnit: 'km', toUnit: 'mi' });
        saveFavorite({ category: 'weight', fromUnit: 'kg', toUnit: 'lb' });
        removeFavorite({ category: 'length', fromUnit: 'km', toUnit: 'mi' });
        const favorites = getFavorites();
        assertStorageLength(favorites, 1);
        assertStorageEqual(favorites[0].fromUnit, 'kg');
    });

    storageTest('No duplicate favorites allowed', () => {
        clearFavorites();
        saveFavorite({ category: 'length', fromUnit: 'km', toUnit: 'mi' });
        saveFavorite({ category: 'length', fromUnit: 'km', toUnit: 'mi' });
        const favorites = getFavorites();
        assertStorageLength(favorites, 1);
    });

    // ==================== ERROR HANDLING TESTS ====================
    console.log('\n--- Error Handling Tests ---');

    storageTest('getHistory handles corrupted data gracefully', () => {
        localStorage.setItem('unitConverter_history', 'invalid json{{{');
        const history = getHistory();
        assertStorageTrue(Array.isArray(history), 'Should return empty array on error');
        assertStorageLength(history, 0);
    });

    storageTest('getFavorites handles corrupted data gracefully', () => {
        localStorage.setItem('unitConverter_favorites', 'invalid json{{{');
        const favorites = getFavorites();
        assertStorageTrue(Array.isArray(favorites), 'Should return empty array on error');
        assertStorageLength(favorites, 0);
    });

    // Cleanup
    clearHistory();
    clearFavorites();

    // ==================== SUMMARY ====================
    console.log('\n========================================');
    console.log(`📊 Storage Results: ${storageTests.passed} passed, ${storageTests.failed} failed`);
    console.log('========================================\n');

    return storageTests;
}

// Helper for clearing favorites (used in tests)
function clearFavorites() {
    localStorage.removeItem('unitConverter_favorites');
}

// Auto-run message
if (typeof window !== 'undefined') {
    console.log('💡 Run runStorageTests() in console to execute storage tests');
}
