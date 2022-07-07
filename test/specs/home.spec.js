const assert = require('assert');
const HomePage = require('../pageobjects/home.page');

describe('On https://www.testdevlab.com/ Home page:', () => {
    it('Menu sub-sections should not be displayed until site users hover over sub-menu items', async () => {
        await HomePage.open();
        await assert.equal(false , await HomePage.areMainMenuSubsectionsLinksVisible());
    });

    it('Each Menu sub-section link is visible for site users when they hover over sub-menu items', async () => {
        await HomePage.open();
        await assert.equal(true , await HomePage.areMainMenuSubsectionsLinksVisibleOnHover());
    });
});


