# TEST PLAN

## 1. Objective

Validate key user workflows on Wikipedia using automated UI tests implemented with Playwright.

---

## 2. Scope

### In Scope

- Search functionality
- Sidebar navigation
- Table validation and sorting behavior
- Cross-browser execution (Chromium, Firefox)

### Out of Scope

- Performance testing
- Accessibility validation
- API validation
- Authentication scenarios

---

## 3. Test Scenarios

### 3.1 Search Workflow

| Step                  | Validation                  |
| ---                   | ---                         |
| Navigate to Wikipedia | Homepage loads              |
| Select English        | English homepage loads      |
| Search term           | Article page loads          |
| Validate heading      | Heading matches search term |
| Validate TOC          | Table of contents visible   |
| Validate paragraph    | Expected keyword present    |

---

### 3.2 Navigation Workflow

| Step                 | Validation                |
| ---                  | ---                       |
| Open article         | Page loads                |
| Click Random article | URL changes               |
| Validate heading     | New page heading visible  |
| Validate title       | Page title not empty      |

---

### 3.3 Table Validation Workflow

| Step             | Validation                 |
| ---              | ---                        |
| Locate table     | Table visible              |
| Count rows       | Row count > 0              |
| Click sort       | Sort class updated         |
| Validate sorting | Data alphabetically sorted |

Sorting validation uses:

```ts
isSortedAlphabetically()
```

Ensures deterministic validation rather than simple order change.

---

## 4. Test Environment

| Component          | Value             |
| ---                | ---               |
| Browser            | Chromium, Firefox |
| OS                 | Ubuntu (CI)       |
| Execution Mode     | Headless          |
| Parallel Execution | Enabled           |
| Retries            | CI: 2, Local: 0   |

---

## 5. Risks & Mitigation

| Risk                    | Mitigation                          |
| ---                     | ---                                 |
| Wikipedia UI changes    | Use stable selectors                |
| Dynamic table loading   | Wait for tablesorter initialization |
| Flaky sorting           | Validate class + sorted array       |
| Parallel data collision | Avoid shared global state           |

