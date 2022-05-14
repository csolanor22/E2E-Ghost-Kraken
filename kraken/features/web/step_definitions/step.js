const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");
  return await element.setValue(password);
});

Then("I click Sign in", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});

When("I click on User menu", async function () {
  let element = await this.driver.$(".gh-nav-bottom > div:nth-child(1)");
  return await element.click();
});

When("I click Sing Out", async function () {
  let element = await this.driver.$(
    ".gh-nav-menu-dropdown > ul:nth-child(1) > li:nth-child(9)"
  );
  return await element.click();
});

When("I click in Posts", async function () {
  let element = await this.driver.$("#ember28");
  return await element.click();
});

When("I click on New Post button", async function () {
  let element = await this.driver.$(".gh-btn-green");
  return await element.click();
});

When(
  "I enter text {kraken-string} into field post title",
  async function (title) {
    let element = await this.driver.$(".gh-editor-title");
    return await element.setValue(title);
  }
);

When("I click into post body", async function () {
  let element = await this.driver.$(".koenig-editor__editor");
  return await element.click();
});

When("I enter text {kraken-string} into post body", async function (title) {
  let element = await this.driver.$(".koenig-editor__editor > p:nth-child(1)");
  return await element.setValue(title);
});

When("I click link to return to Posts", async function () {
  let element = await this.driver.$(".blue");
  return await element.click();
});

When("I click plus button for add text", async function () {
  let element = await this.driver.$(".koenig-plus-menu-button");
  return await element.click();
});

When("I click span for publish", async function () {
  let element = await this.driver.$(".gh-publishmenu > div:nth-child(1)");
  return await element.click();
});

When("I click on set it live now", async function () {
  let element = await this.driver.$(".gh-publishmenu-radio-button");
  return await element.click();
});

When("I click Publish Button", async function () {
  let element = await this.driver.$(".gh-publishmenu-button");
  return await element.click();
});

When("I click on Schedule it for later", async function () {
  let element = await this.driver.$(".gh-publishmenu-radio-button");
  return await element.click();
});

When("I set the time for publish 2 minutes later", async function () {
  const d = new Date();
  let hour = d.getHours();
  d.setMinutes(d.getMinutes() + 2);
  let minutes = d.getMinutes();
  let element = await this.driver.$(
    ".gh-date-time-picker-time > input:nth-child(1)"
  );
  return await element.setValue(
    `${hour}:${minutes < 10 ? "0" + minutes : minutes}`
  );
});

Then("I search new post with title {kraken-string}", async function (title) {
  let element = await this.driver
    .$(".post-feed > article:nth-child(1) > div > a > header > h2")
    .getText();
  expect(element).to.equals(title);
});

When("I wait for {int} minutes", async function (minutes) {
  await new Promise((r) => setTimeout(r, 60000 * minutes));
  return;
});

When("I select the first post at list", async function () {
  let element = await this.driver.$(
    ".content-list > ol > li:nth-child(2) > a:nth-child(2)"
  );
  return await element.click();
});

When("I click on update button", async function () {
  let element = await this.driver.$(
    ".gh-publishmenu-footer > button:nth-child(2)"
  );
  return await element.click();
});

When("I click on post settings", async function () {
  let element = await this.driver.$(".gh-editor-header  > section > button");
  return await element.click();
});

When("I click on delete post", async function () {
  let element = await this.driver.$(".settings-menu-content > form > button");
  return await element.click();
});

When("I click on confirm delete post", async function () {
  let element = await this.driver.$(
    "(//span[normalize-space()='Delete post'])[1]"
  );
  return await element.click();
});

When("I select unpublished", async function () {
  let element = await this.driver.$(".gh-publishmenu-radio-label");
  return await element.click();
});

When("I select published posts", async function () {
  let element = await this.driver.$(".gh-nav-view-list > li:nth-child(3) > a");
  return await element.click();
});

// Pasos para el feature de crear admin
When("I click create your account", async function () {
  let element = await this.driver.$(
    '(//span[normalize-space()="Create your account"])[1]'
  );
  return await element.click();
});

When("I enter new site title {kraken-string}", async function (siteTitle) {
  let element = await this.driver.$('(//input[@id="blog-title"])[1]');
  return await element.setValue(siteTitle);
});

When("I enter new user fullname {kraken-string}", async function (fullname) {
  let element = await this.driver.$('(//input[@id="name"])[1]');
  return await element.setValue(fullname);
});

When("I enter sign up email {kraken-string}", async function (email) {
  let element = await this.driver.$('(//input[@id="email"])[1]');
  return await element.setValue(email);
});

When("I enter new password {kraken-string}", async function (pwd) {
  let element = await this.driver.$('(//input[@id="password"])[1]');
  return await element.setValue(pwd);
});

When("I click signup", async function () {
  let element = await this.driver.$("(//form/button)[1]");
  return await element.click();
});

When("I click do this later", async function () {
  let element = await this.driver.$(
    '(//button[normalize-space()="I\'ll do this later, take me to my site!"])[1]'
  );
  return await element.click();
});

Then("I expect error message {kraken-string}", async function (errorMsg) {
  let element = await this.driver
    .$("(//p[normalize-space()='" + errorMsg + "'])[1]")
    .getText();
  expect(element).to.equals(errorMsg);
});

Then("I except new user success {kraken-string}", async function (myFirstBlog) {
  let element = await this.driver
    .$('(//div[@class="gh-nav-menu-details-blog"])[1]')
    .getText();
  expect(element).to.equals(myFirstBlog);
});
