import { BasePage } from './BasePage';

import inventoryLocators from '../locators/inventoryLocators.json';

export class InventoryPage extends BasePage {

    async addProduct(productName: string) {

        const products =
            this.page.locator('.inventory_item');

        const count =
            await products.count();

        for(let i=0;i<count;i++) {

            const title =
                await products
                .nth(i)
                .locator('.inventory_item_name')
                .textContent();

            if(title === productName) {

                await products
                    .nth(i)
                    .locator('button')
                    .click();

                break;
            }
        }
    }

    async openCart() {

        await this.click(
            inventoryLocators.cartIcon
        );
    }
}