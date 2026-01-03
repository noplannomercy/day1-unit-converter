/**
 * Unit Converter - LocalStorage Management
 */

const STORAGE_KEYS = {
    HISTORY: 'unitConverter_history',
    FAVORITES: 'unitConverter_favorites'
};

const LIMITS = {
    HISTORY: 10,
    FAVORITES: 5
};

// ==================== HISTORY ====================

/**
 * Save conversion to history
 * @param {Object} item - {value, fromUnit, toUnit, result, timestamp}
 */
function saveHistory(item) {
    try {
        const history = getHistory();
        // Add new item at the beginning
        history.unshift(item);
        // Limit to max items
        while (history.length > LIMITS.HISTORY) {
            history.pop();
        }
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch (e) {
        console.error('Error saving history:', e);
    }
}

/**
 * Get conversion history
 * @returns {Array} - Array of history items
 */
function getHistory() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        if (!data) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error('Error reading history:', e);
        // Clear corrupted data
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        return [];
    }
}

/**
 * Clear all history
 */
function clearHistory() {
    try {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch (e) {
        console.error('Error clearing history:', e);
    }
}

// ==================== FAVORITES ====================

/**
 * Save favorite unit pair
 * @param {Object} item - {category, fromUnit, toUnit}
 */
function saveFavorite(item) {
    try {
        const favorites = getFavorites();

        // Check for duplicate
        const exists = favorites.some(f =>
            f.category === item.category &&
            f.fromUnit === item.fromUnit &&
            f.toUnit === item.toUnit
        );

        if (exists) return;

        // Add new item at the beginning
        favorites.unshift(item);
        // Limit to max items
        while (favorites.length > LIMITS.FAVORITES) {
            favorites.pop();
        }
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (e) {
        console.error('Error saving favorite:', e);
    }
}

/**
 * Get all favorites
 * @returns {Array} - Array of favorite items
 */
function getFavorites() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        if (!data) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error('Error reading favorites:', e);
        // Clear corrupted data
        localStorage.removeItem(STORAGE_KEYS.FAVORITES);
        return [];
    }
}

/**
 * Remove specific favorite
 * @param {Object} item - {category, fromUnit, toUnit}
 */
function removeFavorite(item) {
    try {
        const favorites = getFavorites();
        const filtered = favorites.filter(f =>
            !(f.category === item.category &&
              f.fromUnit === item.fromUnit &&
              f.toUnit === item.toUnit)
        );
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
    } catch (e) {
        console.error('Error removing favorite:', e);
    }
}

/**
 * Check if unit pair is favorited
 * @param {Object} item - {category, fromUnit, toUnit}
 * @returns {boolean}
 */
function isFavorite(item) {
    const favorites = getFavorites();
    return favorites.some(f =>
        f.category === item.category &&
        f.fromUnit === item.fromUnit &&
        f.toUnit === item.toUnit
    );
}
