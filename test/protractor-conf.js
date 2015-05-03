exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      binary: '/usr/bin/google-chrome',
      args: [],
      extensions: [],
    }

    //'browserName': 'firefox'
  },

  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  //chromeOnly: true,

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',

};
