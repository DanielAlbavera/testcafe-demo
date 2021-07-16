import { Selector, t } from 'testcafe';

class ThankYouPage {

    constructor() {
        this.thankYouLabel = Selector('#article-header');
    }

    async assertSubmission(name) {
        await t.expect(this.thankYouLabel.exists).eql(true);
        await t.expect(this.thankYouLabel.innerText).contains(name);
    }

}

export default new ThankYouPage();