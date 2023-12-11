import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { HomePageObject } from '../support/page-objects/home';

const home = new HomePageObject();

Then("the page shows the account address", () => {
  home.appContent.should("contains.text", "Connected as");
});

Then("the page shows the input address field", () => {
  home.addressInputField.should("be.be.visible");
});

Then("the page shows a network error message", () => {
  home.mataMaskErrorMessage.should("be.visible");
});

Then("the page doesn't show a network error message", () => {
  home.mataMaskErrorMessage.should("not.exist");
});

Then("the page shows the switch network button", () => {
  home.switchNetworkButton.should("contains.text", "Connect Metamask to Sepolia");
});

Then("the page doesn't show the input address field", () => {
  home.addressInputField.should("not.exist");
});

When("the user clicks the switch network button", () => {
  home.switchNetworkButton.click();
});
