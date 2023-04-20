# Cypress Framework With BDD and Github CI Integration
## By **Rohit Shinde** | [LinkedIn](https://www.linkedin.com/in/rohit-shinde-498a05a7/) 
---
## Description:

Using Cypress, we will create a test automation framework with the following features:

- The Page Object Model is a pattern
- BDD (Cucumber) support
- Multi-environment and multi-browser testing support
- Create reports that include videos and screenshots
- Test results dashboard with options to compare, analyze history, and generate graphs.
- CI integration

## 🚀 Lets get started...

## 🟩 PART 1️⃣

## 1. Create an empty repo in VCS (e.g. GitHub) and clone
## 2. Initialize node project and install cypress

```
npm init -y
npm install cypress --save-dev
npx cypress open
```

## 3. Add BDD support (Gherkin syntax)

### Install

```
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

### add to config

`cypress.config.js`

```javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	specPattern: "**/*.feature",
  },
});

```

### configure the cypress-cucumber-preprocessor to using global step definitions

`package.json`

```javascript
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/",
    "nonGlobalStepDefinitions": false
  }
```

## 4. Add IDE plugin for `.feature` files

## 🟩 PART 2️⃣

## 5. add scripts to package.json with Multiple browser support

`package.json`

```json
"scripts": {
    "cy:headless": "cypress run --config baseUrl=${baseUrl} --headless",
    "cy:chrome:headless": "cypress run --config baseUrl=${baseUrl} --browser chrome --headless --record",
    "cy:firefox:headless": "cypress run --config baseUrl=${baseUrl} --browser firefox --headless --record",
    "cy:chrome": "cypress run --config baseUrl=${baseUrl} --browser chrome",
    "cy:firefox": "cypress run --config baseUrl=${baseUrl} --browser firefox",
    "cy:headed": "cypress run --config baseUrl=${baseUrl} --headed",
    "cy:test": "cypress run --config baseUrl=${baseUrl}"
}
```

## 6. Define report folder

`cypress.config.js`

```javascript
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...
    },
    ...,
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
  },
})
```

## 7. Add Mochawesome reporter

### Install

```
npm install cypress-mochawesome-reporter --save-dev
```

### add to config

`cypress.config.js`

```javascript

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    ...,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
})
```

### add to cypress/support/e2e.js

`e2e.js`

```javascript
import 'cypress-mochawesome-reporter/register';
```

## 8. Connect to Cypress Dashboard

### Create a user, an organization and a project

```
https://cloud.cypress.io/
```

### Add "projectId" to cypress config

```javascript
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...
    },
    ...,
    projectId: "xxxxxx",
  },
})
```
## 🟩 PART 3️⃣

## 9. Integrate to CI (GitHub Actions as an example)

### Define **"CYPRESS_RECORD_KEY"** as a secret in GitHub repo → Settings → Secrets → Actions
```
"CYPRESS_RECORD_KEY" > From cypress dashboard
```

### Add workflow for cypress

<h4>create yaml config file (master branch)</h4> 

`.github/workflows/main.yml`

```yaml
name: Run All Tests
on:
  push:
    branches: [master]

jobs:
  Test-on-Chrome:
    runs-on: ubuntu-latest
    steps:
        - name: Checkout GitCode
          uses: actions/checkout@v3.3.0

        - name: Install dependencies
          uses: cypress-io/github-action@v5.0.8
          with:
            runTests: false

        - name: Run Cypress Tests
          uses: cypress-io/github-action@v5.0.8
          with:
            record: true
            parallel: true
            command: "npm run cy:chrome:headless"
          env:
            CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
        
        - name: Upload Videos to Build Artifacts
          uses: actions/upload-artifact@v3.1.2
          if: always()
          with:
            name: cypress-videos-chrome
            path: "${{ github.workspace }}/cypress/reports/videos/"
          
        - name: Upload Screenshots to Build Artifacts
          uses: actions/upload-artifact@v3.1.2
          if: failure()
          with:
            name: cypress-screenshots-chrome
            path: "${{ github.workspace }}/cypress/reports/screenshots/"
        
        - name: Upload Mocha report to Build Artifacts
          uses: actions/upload-artifact@v3.1.2
          if: always()
          with:
            name: cypress-mocha-chrome
            path: "${{ github.workspace }}/cypress/reports/html/"

```
## 10. Add `node_modules` to `.gitignore` 

## 11. Push everything to origin master

### Check GitHub actions and cypress dashboard

## 12. To run locally and record to dashboard

```
npx cypress run --record --key {PROJECT_ACCESS_KEY}
```

## THANK YOU 🙂