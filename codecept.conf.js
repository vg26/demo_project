exports.config = {
  tests: './tests/logintest.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demoqa.com',
      browser: 'chrome',
      host: "localhost",
      path: "/wd/hub", 
      port: 4444
      
    }
  },
  include: {
    I: './steps_file.js',
    
   login_pagePage: './pages/login_page.js',
   
    
  
    
  },
  bootstrap: null,
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mochawesome": {
       "stdout": "./output/console.log",
       "options": {
         "reportDir": "./output",
         "reportFilename": "report"
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml",
          "attachments": true //add screenshot for a failed test
        }
      }
    }
  }
},
  name: 'demo_project',
  plugins: {
    allure: {
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true 
    },

      multiple: {
        parallel: {
          // run all tests in chrome and firefox
          browsers: ["chrome", "firefox"]
    }
  }
  }}