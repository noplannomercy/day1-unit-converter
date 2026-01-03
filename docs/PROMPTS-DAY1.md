# Day 1 Prompts - Unit Converter Project

## 1. CLAUDE.md Generation

```
Read: docs/PRD.md

Based on this PRD, generate CLAUDE.md following Anthropic best practices:

## Project: Unit Converter

### Tech Stack
[Extract from PRD]

### Commands
- Open: open index.html
- Test: Run test suite in browser console

### Development Workflow
CRITICAL: Follow TDD approach:
1. Write test cases FIRST (in browser console or test file)
2. Run tests - confirm they FAIL
3. Implement minimum code to pass
4. Verify tests PASS
5. Refactor if needed

DO NOT implement without tests ready.
DO NOT skip test verification.

### Git Workflow
Branch Strategy:
- feature/[name] for new features
- fix/[name] for bug fixes

Commit Format:
- feat: [description]
- fix: [description]
- test: [description]

Before ANY commit:
YOU MUST:
- Run full test suite
- Verify all tests pass
- No console errors

### Testing Requirements
Tests FIRST approach:

Write tests for:
- Conversion accuracy (100km=62.1371mi, 1kg=2.2046lb, 0°C=32°F=273.15K)
- Edge cases (0, negative, very large numbers)
- LocalStorage (save, load, clear, error handling)
- Input validation (invalid input, non-numeric)

Test each component:
- converter.js functions independently
- storage.js operations with try-catch
- UI updates in real-time

NEVER:
- Skip writing tests
- Commit failing tests
- Write mock implementations

### Code Conventions
[Extract from PRD]

### Critical Rules
[Extract from PRD CRITICAL RULES section]

Keep under 60 lines.
Strong keywords: IMPORTANT, YOU MUST, NEVER, ALWAYS, CRITICAL.

Save to: CLAUDE.md
```

---

## 2. IMPLEMENTATION.md Creation

```
Read:
- docs/PRD.md
- CLAUDE.md

Create detailed implementation plan:

Format as checklist:
## Phase 1: [Name]
- [ ] Task 1
- [ ] Task 2
- [ ] Test: [what to verify]

## Phase 2: [Name]
- [ ] Task 1
- [ ] Task 2
- [ ] Test: [what to verify]

Include:
- All phases from PRD Implementation Sequence
- TDD steps for each phase
- Specific test cases
- Time estimate per phase

Save to: docs/IMPLEMENTATION.md

STOP after saving.
Show me the plan.
```

---

## 3. Git Initialization

```
Initialize Git repository:

1. git init
2. Create .gitignore:
   - .DS_Store
   - node_modules/
   - *.log

3. Initial commit:
   git add docs/
   git add CLAUDE.md
   git commit -m "docs: Initial project setup with PRD and implementation plan"

4. Create develop branch:
   git checkout -b develop

Ready to start implementation.
```

---

## 4. Phase 1 Implementation

```
Read: docs/IMPLEMENTATION.md

Start Phase 1 (HTML Structure):

TDD approach:
- Create index.html with Tailwind CDN
- Build basic layout (tabs, input, output)
- Verify in browser

STOP after Phase 1.
Show me the HTML.
```

---

## 5. Phase 1 Test & Commit

```
테스트하고 커밋해주세요. 그리고 IMPLEMENTATION.md 업데이트 해줘요
```

---

## 6. Phase 2 Implementation

```
진행해줘요.
```

---

## 7. Phase 3 Implementation

```
Phase 3 진행해줘
```

---

## 8. Phase 4 Implementation

```
Phase 4 진행해줘
```

---

## 9. Phase 5 Implementation

```
Phase 5 진행해줘
```

---

## 10. Final Merge

```
네 머지하고 커밋 해줘
```

---

## 11. Document Prompts

```
List all prompts I used today from start to finish.

Include:
1. PRD creation request
2. CLAUDE.md generation
3. IMPLEMENTATION.md creation
4. Git init
5. All phase implementations
6. Everything

Chronological order.
Save to: docs/PROMPTS-DAY1.md
```

---

## Summary

| # | Prompt | Purpose |
|---|--------|---------|
| 1 | CLAUDE.md generation | Project guidelines |
| 2 | IMPLEMENTATION.md creation | Detailed plan |
| 3 | Git init | Repository setup |
| 4 | Phase 1 | HTML structure |
| 5 | Test & commit | Phase 1 완료 |
| 6 | Phase 2 | Core logic (TDD) |
| 7 | Phase 3 | UI connection |
| 8 | Phase 4 | History & Favorites (TDD) |
| 9 | Phase 5 | Polish & mobile |
| 10 | Merge | develop → master |
| 11 | Document | This file |

**Total: 11 prompts**
