import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePageObject } from '../support/page-objects/home';

const home = new HomePageObject();

let tokenBalanceAmount = 0;

Then("the page shows the token balance {word}", (amount) => {
  home.tokenBalanceInfo.should("contain.text", `Your token balance is ${amount}`);
});

Then("the deposit input shows an error", () => {
  home.depositErrorMessage.should("be.visible");
});

Then("the deposit button is not visible", () => {
  home.depositButton.should("not.exist");
});

Then("the deposit button is visible", () => {
  home.depositButton.should("is.visible");
});

When("the user clicks the Get more tokens link", () => {
  home.getMoreExampleTokensAction.click();
});

When("the user enter the max amount of tokens in the amount field", () => {
  home.tokenBalanceAmount.then($value => {
    tokenBalanceAmount = $value.text();
    home.depositInputAmount.type(tokenBalanceAmount);
  });
});

When("the user clicks the deposit button", () => {
  home.depositButton.click();
});

When("the user approve the deposit", () => {
  cy.confirmMetamaskPermissionToSpend().should("be.true").wait(30000);
  cy.confirmMetamaskTransaction().wait(30000);
});