import { Selector } from 'testcafe';

class ThankYouPage {

    get thankYouLabel () { return Selector('#article-header') };

}

export default new ThankYouPage();