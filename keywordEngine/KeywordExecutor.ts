import steps from '../testData/KeywordSteps.json';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LogoutPage } from '../pages/LogoutPage';

import { Page } from '@playwright/test';

import { Logger } from '../utils/Logger';

export class KeywordExecutor {

    constructor(
        private page: Page,
        private loginPage: LoginPage,
        private inventoryPage: InventoryPage,
        private cartPage: CartPage,
        private checkoutPage: CheckoutPage,
        private logoutPage: LogoutPage
    ) {}

    async executeKeywords() {

        for(const step of steps) {

            switch(step.keyword) {

                case 'LAUNCH_APP':

                    Logger.info('Launching Application');

                    await this.page.goto('https://www.saucedemo.com');

                    break;

                case 'LOGIN':

                    Logger.info('Executing Login');

                    await this.loginPage.login(step.username!,step.password!);

                    break;

                case 'VERIFY_LOGIN':

                    const loginSuccess =await this.loginPage.isLoginSuccessful();

                    if(!loginSuccess) {

                        throw new Error('Login Failed');
                    }

                    console.log('Login Successful');

                    break;    

                case 'ADD_PRODUCT':

                    Logger.info('Adding Product');

                    await this.inventoryPage.addProduct(step.product!);

                    break;

                case 'OPEN_CART':

                    Logger.info('Opening Cart');

                    await this.inventoryPage.openCart();

                    break;

                case 'VERIFY_PRODUCT':

                    const isPresent =await this.cartPage.verifyProduct(step.product!);

                    if(!isPresent) {

                        throw new Error(`Product Not Found : ${step.product}`);
                    }

                    console.log(`${step.product} Found`);

                    break;

                case 'CHECKOUT':

                    Logger.info('Checkout Started');

                    await this.cartPage.checkout();

                    break;

                case 'ENTER_DETAILS':

                    Logger.info('Entering Customer Details');

                    await this.checkoutPage.enterDetails(step.firstName!,step.lastName!,step.postalCode!);

                    break;

                case 'FINISH_ORDER':

                    Logger.info('Finishing Order');

                    await this.checkoutPage.finishOrder();

                    break;

                case 'VERIFY_SUCCESS':

                    Logger.info('Verifying Success');

                    const successMessage =await this.checkoutPage.getSuccessMessage();

                    Logger.info(`Message : ${successMessage}`);

                    break;

                case 'LOGOUT':

                    await this.logoutPage.logout();

                    console.log('Logout Executed');

                    break;  
                    
                 case 'VERIFY_LOGOUT':

                    const logoutSuccess =await this.logoutPage.verifyLogout();

                    if(!logoutSuccess) {

                        throw new Error('Logout Failed');
                    }

                    console.log('Logout Successful');

                    break;   
            }
        }
    }
}