import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePageObject } from '../support/page-objects/home';

const home = new HomePageObject();

Then("the page shows the address balance for the selected token", () => {
  home.tokenBalanceInfo.should("contain.text", "Your token balance is");
});

Then("the page shows the table of the deposit history for the selected token", () => {
  home.depositHistoryTable.should("be.visible");
});

Then("the submit button is disabled", () => {
  home.submitTokenAddressButton.should("be.disabled");
});
