const {
  Given,
  When,
  Then,
  Before,
  SnippetsFormatter,
} = require("@cucumber/cucumber");
const expect = require("chai").expect;
const fs = require("fs");
const { faker } = require('@faker-js/faker');

const {
  SHORT_VERSION_V3,
  SHORT_VERSION_V4,
  BASE_URL,
  NUMBER,
} = require("../../../properties.json");
let dir = "";

Before((scenario) => {
  let folder = "";
  if (BASE_URL == "http://localhost:3001") {
    folder = SHORT_VERSION_V3;
  } else {
    folder = SHORT_VERSION_V4;
  }
  dir = "./results/" + folder + "/";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

Then("I take a screenshot {string}", async function (id) {
  await this.driver.saveScreenshot(dir + "/" + id + ".png");
});

Given("I navigate to register page", async function () {
  let loginUrl = "";
  if (BASE_URL == "http://localhost:3001") {
    loginUrl = `${BASE_URL}/ghost/#/setup/two`;
  } else {
    loginUrl = `${BASE_URL}/ghost/#/setup/`;
  }
  await this.driver.url(`${loginUrl}`);
});

Given("I navigate to signin page {kraken-string}", async function (baseUrl) {
  let loginUrl = `${baseUrl}/ghost/#/signin`;
  await this.driver.url(`${loginUrl}`);
});

Then("I navigate to base URL {kraken-string}", async function (baseUrl) {
  await this.driver.url(baseUrl);
});

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When(
  "I enter password {kraken-string}",async function (password) {
    let element = await this.driver.$(".gh-icon-lock > input:nth-child(1)");
    return await element.setValue(password);
  }
);

Then("I click Sign in {kraken-string}", async function (baseUrl) {
  let element = "";
  if (baseUrl == "http://localhost:3001") {
    element = await this.driver.$("#ember12");
  } else {
    element = await this.driver.$("#ember11");
  }
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

When("I click in Posts {kraken-string}", async function (baseUrl) {
  let element = "";
  if (baseUrl == "http://localhost:3001") {
    element = await this.driver.$("#ember28");
  } else {
    element = await this.driver.$("#ember26");
  }
  return await element.click();
});

When("I click on New Post button", async function () {
  let element = await this.driver.$(
    "(//span[normalize-space()='New post'])[1]"
  );
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

When(
  "I click link to return to Posts {kraken-string}",
  async function (baseUrl) {
    if (baseUrl == "http://localhost:3001") {
      let element = await this.driver.$(".blue");
      return await element.click();
    } else {
      let element = await this.driver.$('(//a[@href="#/posts/"])');
      return await element.click();
    }
  }
);

When("I click plus button for add text", async function () {
  let element = await this.driver.$(".koenig-plus-menu-button");
  return await element.click();
});

When("I click span for publish {kraken-string}", async function (baseUrl) {
  if (baseUrl == "http://localhost:3001") {
    let element = await this.driver.$(".gh-publishmenu > div:nth-child(1)");
    return await element.click();
  } else {
    let publishElement = await this.driver.$(
      "(//span[normalize-space()='Publish'])[1]"
    );
    await publishElement.click();

    let element = await this.driver.$("(//span[normalize-space()='Publish'])");
    return await element.click();
  }
});

When("I click on set it live now {kraken-string}", async function (baseUrl) {
  if (baseUrl == "http://localhost:3001") {
    let element = await this.driver.$(".gh-publishmenu-radio-button");
    return await element.click();
  } else {
    return;
  }
});

When("I click Publish Button {kraken-string}", async function (baseUrl) {
  if (baseUrl == "http://localhost:3001") {
    let element = await this.driver.$(".gh-publishmenu-button");
    return await element.click();
  } else {
    let element = await this.driver.$("div.gh-publishmenu-radio-button");
    return await element.click();
  }
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

When("I click on cancel button", async function () {
  let element = await this.driver.$("(//span[normalize-space()='Cancel'])[1]");
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
  let settingsElement = await this.driver.$("(//button[@title='Settings'])[1]");
  await settingsElement.click();

  let element = await this.driver.$(
    "(//span[normalize-space()='Delete post'])[1]"
  );
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

When(
  /^I enter new site title Scenario Outline "([^"]*)"$/,
  async function (siteTitle) {
    let element = await this.driver.$('(//input[@id="blog-title"])[1]');
    return await element.setValue(siteTitle);
  }
);

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

When("I click do this later {kraken-string}", async function (baseUrl) {
  if (baseUrl == "http://localhost:3002") {
    return;
  }
  let element = await this.driver.$(
    '(//button[normalize-space()="I\'ll do this later, take me to my site!"])[1]'
  );
  return await element.click();
});

Then("I expect error message {kraken-string}", async function (errorMsg) {
  let element = await this.driver.$(`p*=${errorMsg}`).getText();
  expect(element).to.contains(errorMsg);
  //equals(errorMsg);
});

Then(
  "I except new user success {kraken-string} {kraken-string}",
  async function (myFirstBlog, baseUrl) {
    if (baseUrl == "http://localhost:3001") {
      let element = await this.driver
        .$('(//div[@class="gh-nav-menu-details-blog"])[1]')
        .getText();
      expect(element).to.equals(myFirstBlog);
    } else {
      let element = await this.driver
        .$('(//h1[normalize-space()="All done!"])[1]')
        .getText();
      expect(element).to.equals("All done!");
    }
  }
);

When("I enter random email", async function () {
  let element = await this.driver.$(".gh-icon-mail > input:nth-child(1)");
  return await element.setValue(faker.datatype.string(192));
});

When("I enter random password", async function () {
  let element = await this.driver.$(".gh-icon-lock > input:nth-child(1)");
  return await element.setValue(faker.internet.password());
});

When("I Send login data", async function () {
  let element = await this.driver.$(".gh-btn-login");
  return await element.click();
});
 
When("I wait an error message", async function () {
  let element = await this.driver.$(".main-error").getText();
  expect(element).not.to.equal(null);
});

When("I enter random text into field post title max", async function () {
    let element = await this.driver.$(".gh-editor-title");
    return await element.setValue(faker.datatype.string(256));
  }
);

When("I enter ramdom text into post body max", async function () {
  let element = await this.driver.$(".__has-no-content > p:nth-child(1)");
  return await element.setValue(faker.datatype.string(2001));
}
);

When("I click span for publish", async function () {
    let element = await this.driver.$("(//span[normalize-space()='Publish'])[1]");
    return await element.click();
});

When("I click Publish Button", async function () {
  let element = await this.driver.$(".gh-publishmenu-button");
  return await element.click();
});

Then("I cant find publish span", async function () {
  let element = await this.driver.$("(//span[normalize-space()='Publish'])[1]");
  expect(element).undefined();
});


When("I confirm post publish", async function () {
  let element = await this.driver.$(".gh-btn-black");
  return await element.click();
});


When("I click into post title", async function () {
  let element = await this.driver.$(".gh-editor-title");
    return element.click();
});

When("I enter random text into field post title max 255", async function () {
  let element = await this.driver.$(".gh-editor-title");
  return await element.setValue(faker.datatype.string(255));
});

When("I enter random text into field post title max 254", async function () {
  let element = await this.driver.$(".gh-editor-title");
  return await element.setValue(faker.datatype.string(254));
});