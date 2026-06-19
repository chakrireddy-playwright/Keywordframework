import { BasePage } from './BasePage';

import loginLocators from '../locators/loginLocators.json';

export class LoginPage extends BasePage {

    async login(
        username: string,
        password: string
    ) {

        await this.fill(
            loginLocators.username,
            username
        );

        await this.fill(
            loginLocators.password,
            password
        );

        await this.click(
            loginLocators.loginButton
        );
    }

    async isLoginSuccessful() {

        return await this.page
            .locator('.shopping_cart_link')
            .isVisible();
    }
}