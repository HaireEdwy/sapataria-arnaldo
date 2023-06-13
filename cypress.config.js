const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here(escutas de eventod do node)
    },
    aseUrl: 'http://127.0.0.1:5500/',
    experimentalStudio: true,
  },
});
