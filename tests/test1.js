import MainPage from '../pages/MainPage.js';
import ThankYouPage from '../pages/ThankYouPage.js';
const data = require('../data/data.json');

fixture `Geting Started`
    .page `https://devexpress.github.io/testcafe/example/`;

test('My First Test', async t => {
    const name = data["example"]["name"];
    await t
        .typeText(MainPage.nameInput, name)
        .click(MainPage.submitButton)
        .expect(ThankYouPage.thankYouLabel.exists).eql(true)
        .expect(ThankYouPage.thankYouLabel.innerText).contains(name);

});