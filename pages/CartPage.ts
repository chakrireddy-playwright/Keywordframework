import { BasePage } from './BasePage';

import cartLocators from '../locators/cartLocators.json';

export class CartPage extends BasePage {

    async verifyProduct(productName: string) {

        const products =
            this.page.locator('.inventory_item_name');

        const count =
            await products.count();

        for(let i = 0; i < count; i++) {

            const text =
                await products.nth(i).textContent();

            if(text === productName) {

                return true;
            }
        }

        return false;
    }

    async checkout() {

        await this.click(
            cartLocators.checkoutButton
        );
    }
}