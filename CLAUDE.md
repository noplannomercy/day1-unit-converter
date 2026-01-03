# Unit Converter

## Tech Stack
- HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6+)
- LocalStorage API for persistence
- No build tools, no external dependencies

## Commands
- **Open:** `index.html` in browser
- **Test:** Run test suite in browser console

## Development Workflow
CRITICAL: Follow TDD approach:
1. Write test cases FIRST (in browser console or test file)
2. Run tests - confirm they FAIL
3. Implement minimum code to pass
4. Verify tests PASS
5. Refactor if needed

## Git Workflow
**Branches:** `feature/[name]`, `fix/[name]`
**Commits:** `feat:`, `fix:`, `test:` prefix

YOU MUST before ANY commit:
- Run full test suite
- Verify all tests pass
- No console errors

## Testing Requirements
ALWAYS write tests FIRST for:
- Conversion accuracy: 100km=62.1371mi, 1kg=2.2046lb, 0C=32F=273.15K
- Edge cases: 0, negative numbers, very large numbers
- LocalStorage: save, load, clear, error handling (try-catch)
- Input validation: invalid input, non-numeric values

Test each component independently:
- `converter.js` - conversion functions
- `storage.js` - LocalStorage operations
- UI - real-time updates

## Code Conventions
- Tailwind utility classes ONLY (no inline styles)
- Modular JS files (app.js, converter.js, storage.js)
- Semantic HTML elements
- 4 decimal places precision
- Comment complex logic only

## Critical Rules
**IMPORTANT:** All calculations MUST be mathematically accurate. UI MUST work on mobile (320px+).

**YOU MUST:** Validate ALL numeric inputs. Handle division by zero. Provide instant visual feedback.

**NEVER:** Add external JS libraries. Make API calls. Store sensitive data. Use inline styles. Ignore error cases. Skip writing tests. Commit failing tests.

**ALWAYS:** Show clear error messages. Provide instant feedback. Keep UI clean and minimal. Use semantic HTML.
