import { BasePage } from './BasePage';

import logoutLocators
from '../locators/logoutLocators.json';

export class LogoutPage extends BasePage {

    async logout() {

        await this.click(
            logoutLocators.menuButton
        );

        await this.click(
            logoutLocators.logoutLink
        );
    }

    async verifyLogout() {

        return await this.page
            .locator('#login-button')
            .isVisible();
    }
}