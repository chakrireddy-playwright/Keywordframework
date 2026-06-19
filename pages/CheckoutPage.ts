import { BasePage } from './BasePage';

import checkoutLocators
from '../locators/checkoutLocators.json';

export class CheckoutPage extends BasePage {

    async enterDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.fill(
            checkoutLocators.firstName,
            firstName
        );

        await this.fill(
            checkoutLocators.lastName,
            lastName
        );

        await this.fill(
            checkoutLocators.postalCode,
            postalCode
        );

        await this.click(
            checkoutLocators.continueButton
        );
    }

    async finishOrder() {

        await this.click(
            checkoutLocators.finishButton
        );
    }

    async getSuccessMessage() {

        return await this.getText(
            checkoutLocators.successMessage
        );
    }
}