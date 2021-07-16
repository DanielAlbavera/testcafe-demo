import { Selector, t } from 'testcafe';

class MainPage {
    
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.populateButton = Selector('#populate');
        this.featureCheckBoxes = Selector('fieldset p input[type="checkbox"]');
        this.osOptions = Selector('.col-2 fieldset p label');
        this.interfaceDropdown = Selector('#preferred-interface');
        this.iHaveTriedCheckBox = Selector('#tried-test-cafe');
        this.rateSlider = Selector('.ui-slider-handle');
        this.textArea = Selector('#comments');
        this.submitButton = Selector('#submit-button');
    }

    async autoPopulate() {
        await t.setNativeDialogHandler( () => true )
               .click(this.populateButton);
    }

    async insertName(name) {
        await t.typeText(this.nameInput, name);
    }

    async checkAllFeatures() {
        for (let index = 0; index < await this.featureCheckBoxes.count; index++) {
            await t.click(this.featureCheckBoxes.nth(index));
        }
    }

    async checkTriedTestCafe() {
        await t.click(this.iHaveTriedCheckBox);
    }

    async selectOSByName(osName) {
        await t.click(this.osOptions                               
                               .withText(osName)
                               .child('input'));            
    }

    async selectDropDownByKeyboard() {
        await t.click(this.interfaceDropdown)
               .pressKey('down+down+enter');
    }

    async dragSliderToIndex(index) {
        const sliderIndex = Selector(`.slider-values div`).nth(index);
        await t.dragToElement(this.rateSlider, sliderIndex);
    }

    async insertComments(text) {
        await t.typeText(this.textArea, text);
    }

    async submit() {
        await t.click(this.submitButton);
    }
}

export default new MainPage();