import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xhibrr",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// module.exports = {
//   projectId: "xhibrr",
//   // ...rest of the Cypress project config
// }