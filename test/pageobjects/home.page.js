/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const Page = require('./page');




class HomePage extends Page {

    get mainSubmenus() { return $$('.menu-bar .menu .sub-menu')}

    async open() {
        await super.open('/')
    }

    async areMainMenuSubsectionsLinksVisible () {
        let linksStatuses = [];
        await this.mainSubmenus.forEach(submenu => {
            submenu.$$('.menu-block .sub-menu-box .links .menu-item .menu-link-w-icon').forEach(submenuLink => {
                linksStatuses.push(submenuLink.isDisplayed());
            });
        });
        

        return linksStatuses.every(val => val === linksStatuses[0]) && linksStatuses[0] == true
    }


    async areMainMenuSubsectionsLinksVisibleOnHover () {
        let linksStatuses = [];

        for await ( const submenu of this.mainSubmenus) { 
            await submenu.$('.title').moveTo();

            const submenuLinks = await submenu.$$('.menu-block .sub-menu-box .links .menu-item .menu-link-w-icon');

            for (let j = 0; j < submenuLinks.length; j++) {
                const submenuLink = submenuLinks[j];
                const submenuLinkName = await submenuLink.$('.link-name')
                await submenuLinkName.waitForDisplayed({ timeout: 1000 });
                const isSubmenuLinkNameVisible = await submenuLink.$('.link-name').isDisplayed();

                
                linksStatuses.push(isSubmenuLinkNameVisible);
            }
        };   
        
        return linksStatuses.every(val => val === linksStatuses[0]) && linksStatuses[0] == true;
    }
}


module.exports = new HomePage();