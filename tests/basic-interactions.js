import MainPage from '../pages/MainPage.js';
import ThankYouPage from '../pages/ThankYouPage.js';
const data = require('../data/data.json');

fixture.skip `Basic Interactions with Elements`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Simple Submission', async t => {
    const name = data["example"]["name"];
    await t
        .typeText(MainPage.nameInput, name)
        .click(MainPage.submitButton)
        .expect(ThankYouPage.thankYouLabel.exists).eql(true)
        .expect(ThankYouPage.thankYouLabel.innerText).contains(name);

});

fixture.skip `Auto Populate`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Testing Auto populate feature', async t => {
    const auto_populated_name = data["example"]["auto-populated-name"];
    await MainPage.autoPopulate();
    await t.expect(MainPage.nameInput.value).eql(auto_populated_name);
});

fixture `Full E2E`
    .page `https://devexpress.github.io/testcafe/example/`;

test("Validate the User can submit with all the features", async t => {
    //Type a Name
    await MainPage.insertName(data["example"]["name"]);

    //Check all the features that are important
    await MainPage.checkAllFeatures();

    //Select Operating System
    await MainPage.selectOSByName(data["example"]["os"]);

    //Select 'TestCafe Interface'
    await MainPage.selectDropDownByKeyboard();

    //Check the 'I have tried TestCafe' checkbox
    await MainPage.checkTriedTestCafe();
    await MainPage.dragSliderToIndex(data["example"]["slider-test"]);

    //Insert Comments
    await MainPage.insertComments(data["example"]["comment"]);

    //Submit
    await MainPage.submit();

    //Assert
    await ThankYouPage.assertSubmission(data["example"]["name"]);
});