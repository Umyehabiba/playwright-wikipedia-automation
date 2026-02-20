# DESIGN DISCUSSION

## 1. Architecture Pattern

The framework follows the **Page Object Model (POM)** pattern.

### Why POM?

- Separation of test logic and UI interaction
- Improved maintainability
- Reduced duplication
- Easier scalability

---

## 2. BasePage Abstraction

`BasePage` contains:

- Navigation helpers
- Common waits
- Shared page reference

This promotes reuse and reduces duplication.

---

## 3. PageManager

Centralized page factory:

```tsx
getHomePage()
getArticlePage()
getTablePage()
```

Benefits:

- Cleaner test code
- Decouples test from page constructors
- Easier dependency management

---

## 4. Selector Strategy

Selectors prioritize:

- IDs when stable
- Role-based locators
- Text-based filtering with `hasText`
- Scoped locators (table → header → cells)

Avoided:

- Deep CSS chains
- Index-based selectors (except controlled column access)

---

## 5. Sorting Validation Strategy

Instead of simply checking:

```tsx
expect(afterSort).not.toEqual(beforeSort)
```

The framework:

1. Waits for sorting class change
2. Extracts column values
3. Validates true alphabetical ordering

This ensures:

- Deterministic validation
- Reduced flakiness
- Functional correctness

---

## 6. Parallel Execution Strategy

- `fullyParallel: true`
- No shared global variables
- Independent test flows
- Isolated page instances

---

## 7. Retry Strategy

```tsx
retries: process.env.CI ? 2 : 0
```

Why:

- Fail fast locally
- Handle CI instability gracefully

---

## 8. CI Integration

Pipeline performs:

- Clean install
- Browser installation
- Test execution
- Report upload

Artifacts allow debugging without rerunning locally.

---

## 9. Maintainability Considerations

- Constants centralized
- Utilities extracted
- Test data separated
- Modular page objects
- Clear test steps