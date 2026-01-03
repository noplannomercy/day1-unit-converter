# Unit Converter - Product Requirements Document

## Project Overview

**Name:** Unit Converter Web App  
**Type:** Single Page Application  
**Target:** General users needing quick, accurate conversions  
**Timeline:** Day 1 (30-60 minutes)

---

## WHAT (Tech Stack)

**Frontend:**
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6+)

**Storage:**
- LocalStorage API

**Structure:**
- Single HTML file
- Modular JS files
- No build tools required
- No external dependencies

---

## WHY (Purpose & Goals)

**Primary Goal:**  
Provide fast, accurate unit conversions with smart features

**Target Users:**
- Students doing homework
- Engineers needing quick calculations
- General users for daily conversions

**Key Differentiators:**
- Conversion history
- Favorite unit pairs
- Formula explanations
- Instant results (< 1 second)

---

## HOW (Features & Requirements)

### 1. Core Conversion Categories

**Length:**
- meter (m)
- kilometer (km) 
- feet (ft)
- mile (mi)

**Weight:**
- kilogram (kg)
- pound (lb)

**Temperature:**
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

### 2. User Interface

**Layout Structure:**
```
[Header: Unit Converter]

[Tab Navigation]
[Length] [Weight] [Temperature]

[Conversion Panel]
Input: [____] [From Unit ▼]
→
Result: [____] [To Unit ▼]

[Additional Features Panel]
• History (last 10)
• Favorites (max 5)
• Formula Display (toggle)
```

**UI Requirements:**
- Clean, minimal design
- Mobile-first responsive
- Instant visual feedback
- Clear error messages

### 3. Conversion Logic

**Accuracy:**
- 4 decimal places precision
- Handle edge cases (0, negatives, large numbers)

**Performance:**
- Real-time conversion (on input)
- No page reloads
- Instant updates

**Validation:**
- Accept only numeric input
- Handle invalid inputs gracefully
- Show clear error states

### 4. Additional Features

**A. Conversion History**
- Store last 10 conversions
- Display as list
- Persist in LocalStorage
- "Clear History" button
- Click to reuse conversion

**B. Favorites**
- Save frequent unit pairs
- Max 5 favorites
- Quick select from list
- Star icon toggle
- Persist in LocalStorage

**C. Formula Display**
- Toggle show/hide
- Display conversion formula
- Example format: "1 km = 1,000 m"
- Educational purpose

### 5. Data Persistence

**LocalStorage Schema:**
```javascript
{
  history: [
    {value, fromUnit, toUnit, result, timestamp}
  ],
  favorites: [
    {category, fromUnit, toUnit}
  ]
}
```

**Error Handling:**
- Try-catch for storage operations
- Fallback if storage unavailable
- Clear corrupted data

---

## File Structure

```
day1-unit-converter/
├── index.html       # Main HTML + Tailwind CDN
├── js/
│   ├── app.js       # Main application logic
│   ├── converter.js # Conversion calculations
│   └── storage.js   # LocalStorage management
└── README.md
```

---

## Implementation Sequence

**Phase 1: Basic Structure (10 min)**
1. HTML skeleton with Tailwind
2. Tab navigation
3. Input/output layout

**Phase 2: Core Logic (15 min)**
4. Conversion functions (converter.js)
5. Input validation
6. Real-time updates

**Phase 3: UI Connection (10 min)**
7. Event handlers
8. Dynamic result display
9. Tab switching

**Phase 4: Features (15 min)**
10. History implementation
11. Favorites system
12. Formula display

**Phase 5: Polish (10 min)**
13. Error handling
14. Mobile responsive
15. Final testing

---

## CRITICAL RULES

**IMPORTANT:**
- All calculations MUST be mathematically accurate
- UI MUST work on mobile devices
- LocalStorage MUST handle errors gracefully
- Code MUST be readable and maintainable

**YOU MUST:**
- Use only Tailwind utility classes for styling
- Validate ALL numeric inputs before conversion
- Handle division by zero
- Provide instant visual feedback
- Test on mobile viewport

**NEVER:**
- Add external JS libraries
- Make API calls
- Store sensitive data
- Use inline styles
- Ignore error cases

**ALWAYS:**
- Show clear error messages
- Provide instant feedback on input
- Keep UI clean and minimal
- Comment complex logic
- Use semantic HTML

---

## Success Criteria

**Functional:**
- [ ] All conversions mathematically correct
- [ ] Real-time updates work
- [ ] History stores 10 items
- [ ] Favorites store/retrieve correctly
- [ ] Formula displays accurately

**Non-Functional:**
- [ ] Loads in < 2 seconds
- [ ] Works on mobile (320px+)
- [ ] No console errors
- [ ] Clean, readable code
- [ ] Intuitive UX

---

## Testing Checklist

**Conversion Accuracy:**
- [ ] 100 km = 62.1371 mi
- [ ] 1 kg = 2.2046 lb
- [ ] 0°C = 32°F = 273.15K
- [ ] Negative numbers work
- [ ] Very large numbers work

**Features:**
- [ ] History adds new items
- [ ] History clears properly
- [ ] Favorites save/load
- [ ] Formula toggles correctly
- [ ] Tabs switch smoothly

**Edge Cases:**
- [ ] Input 0 works
- [ ] Invalid input shows error
- [ ] LocalStorage full handled
- [ ] Browser without LocalStorage works

---

**Ready to implement! Copy this entire PRD into Claude Code.**