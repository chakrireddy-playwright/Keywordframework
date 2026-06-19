import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LogoutPage } from '../pages/LogoutPage';

import { KeywordExecutor } from '../keywordEngine/KeywordExecutor';

test('Keyword Driven Framework Execution',async ({ page }) => {

        const loginPage = new LoginPage(page);

        const inventoryPage = new InventoryPage(page);

        const cartPage = new CartPage(page);

        const checkoutPage = new CheckoutPage(page);

        const logoutPage = new LogoutPage(page);    

        const executor = new KeywordExecutor(page,loginPage,inventoryPage,cartPage,checkoutPage,logoutPage);

        await executor.executeKeywords();
    }
);