import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import synpressPlugins from "@synthetixio/synpress/plugins";
import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    e2e: {
        specPattern: ["**/*.feature", "cypress/tests/**/*.cy.{js,jsx,ts,tsx}"],
        video: false,
        videosFolder: "cypress/report/video",
        screenshotsFolder: "cypress/report/screenshots",
        supportFile: "cypress/support/e2e.ts",
        env: {
            TAGS: "not @ignore",
            BASE_URL: "http://localhost:3000",
        },
        testIsolation: true,
        async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            synpressPlugins(on, config);

            await addCucumberPreprocessorPlugin(on, config);

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            // Make sure to return the config object as it might have been modified by the plugin.
            return config;
        },
    },
});
