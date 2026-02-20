# README.md

## Playwright Wikipedia Automation Suite

This project contains a maintainable Web UI automation framework built using **Playwright + TypeScript** to validate core workflows on Wikipedia.

The framework demonstrates:

- Page Object Model design
- Stable selectors
- Deterministic sorting validation
- Parallel execution
- CI integration (GitHub Actions)
- HTML reporting with artifacts

---

## Application Under Test

Wikipedia

[https://www.wikipedia.org](https://www.wikipedia.org/)

Wikipedia is used as a stable, public, content-rich site suitable for UI automation without authentication.

---

## Test Coverage

### A. Search Workflow

- Navigate to Wikipedia
- Select English
- Search for a term (e.g., *Playwright (software)*)
- Validate article page loads
- Validate Table of Contents exists
- Validate first paragraph contains expected keyword

### B. Navigation Workflow

- Open an article
- Click "Random article" from sidebar
- Validate new page loads
- Validate page title is not empty

### C. Table Validation Workflow

- Navigate to article containing sortable table
- Validate table exists
- Validate row count > 0
- Validate sorting changes order
- Validate data is alphabetically sorted

---

## Framework Architecture

```
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── ArticlePage.ts
│   ├── TablePage.ts
│   └── PageManager.ts
│
├── tests/
│   ├── search.spec.ts
│   ├── navigation.spec.ts
│   └── table.spec.ts
│
├── utils/
│   ├── helper.ts
│   ├── constants.ts
│   └── test-data.ts
│
├── playwright.config.ts
└── .github/workflows/playwright.yml
```

---

## Setup Instructions

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Install browsers

```bash
npx playwright install --with-deps
```

### 3️⃣ Run tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Open HTML report

```bash
npx playwright show-report
```

---

## CI Pipeline

GitHub Actions automatically runs:

- Install dependencies
- Install browsers
- Execute tests
- Upload HTML report as artifact

Workflow file:

```
.github/workflows/playwright.yml
```

---

## Key Design Decisions

- **Page Object Model** for maintainability
- Reusable utilities for sorting validation
- Deterministic sorting validation (not just order change)
- Parallel execution enabled
- Retries enabled only in CI
- Fail-fast locally (0 retries)

---

## Reporting & Debugging

- HTML report
- Screenshot on failure
- Trace on failure
- Video on failure

## Documentation 
- [Test Plan](docs/TestPlan.md)
- [Design Discussion](docs/DesignDiscussion.md)