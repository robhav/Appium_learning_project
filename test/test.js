// javascript

const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "7.0",
    deviceName: "Galaxy S6",
    app: "-",
    automationName: "UiAutomator2",
    appActivity:"-"
    }
};


const client = wdio.remote(opts);
var confirmButton = 'new UiSelector().text("Confirm").className("android.widget.TextView")';
var confirmButton2 = 'new UiSelector().text("Confirm").className("android.widget.Button")';

client.init();
client.click('android=' + confirmButton);
client.click('android=' + confirmButton2);
 /* .click("~Alert Dialogs")
  .back()
  .back() */
  client.end();