import { Selector } from 'testcafe';

class MainPage {
    
    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
}

export default new MainPage();