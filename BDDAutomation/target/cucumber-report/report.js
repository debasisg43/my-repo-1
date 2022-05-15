$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddRemoveProduct.feature");
formatter.feature({
  "line": 1,
  "name": "User will come on application searches location selects restaurant adds and removes items",
  "description": "",
  "id": "user-will-come-on-application-searches-location-selects-restaurant-adds-and-removes-items",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add remove Product",
  "description": "",
  "id": "user-will-come-on-application-searches-location-selects-restaurant-adds-and-removes-items;add-remove-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters location",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on location",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be on restaurant page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User searches restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "In search page user clicks on selected restaurant",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User adds product and checks pricing",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User removes product",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11309957800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_location()"
});
formatter.result({
  "duration": 612560200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_location()"
});
formatter.result({
  "duration": 435825900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_restaurant_page()"
});
formatter.result({
  "duration": 10193919000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_searches_restaurant()"
});
formatter.result({
  "duration": 394921900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_restaurant()"
});
formatter.result({
  "duration": 555081300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.in_search_page_user_clicks_on_selected_restaurant()"
});
formatter.result({
  "duration": 15077317200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1] (tried for 15 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat ✽.Then In search page user clicks on selected restaurant(AddRemoveProduct.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-HTKHAH0B\u0027, ip: \u0027192.168.43.233\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\02327J~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52801}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3aeb342cbdaeb6c31ef383144124c2a8\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_adds_product_and_checks_pricing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_removes_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2389569200,
  "status": "passed"
});
formatter.uri("LoginLogout.feature");
formatter.feature({
  "line": 1,
  "name": "User will come on application and search",
  "description": "",
  "id": "user-will-come-on-application-and-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User comes to application and performs search",
  "description": "",
  "id": "user-will-come-on-application-and-search;user-comes-to-application-and-performs-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters location",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on location",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be on restaurant page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User searches restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "In search page user clicks on selected restaurant",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User adds product and checks pricing",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User removes product",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5314317900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_location()"
});
formatter.result({
  "duration": 249346500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_location()"
});
formatter.result({
  "duration": 605167800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_restaurant_page()"
});
formatter.result({
  "duration": 10187225000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_searches_restaurant()"
});
formatter.result({
  "duration": 436791700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_restaurant()"
});
formatter.result({
  "duration": 702731300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.in_search_page_user_clicks_on_selected_restaurant()"
});
formatter.result({
  "duration": 15007474300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1] (tried for 15 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat ✽.Then In search page user clicks on selected restaurant(LoginLogout.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-HTKHAH0B\u0027, ip: \u0027192.168.43.233\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\02327J~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62007}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3c120cc46d8d187fe2a08db5b9e0c862\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_adds_product_and_checks_pricing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_removes_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2345037700,
  "status": "passed"
});
formatter.uri("SearchLocation.feature");
formatter.feature({
  "line": 2,
  "name": "User will come on application and searches Location",
  "description": "",
  "id": "user-will-come-on-application-and-searches-location",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User comes to application and performs location search",
  "description": "",
  "id": "user-will-come-on-application-and-searches-location;user-comes-to-application-and-performs-location-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters location",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on location",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6997128400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_location()"
});
formatter.result({
  "duration": 217950900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_location()"
});
formatter.result({
  "duration": 632459900,
  "status": "passed"
});
formatter.after({
  "duration": 2365436900,
  "status": "passed"
});
formatter.uri("SearchRestaurant.feature");
formatter.feature({
  "line": 1,
  "name": "User will come on application searches location and searches restaurant",
  "description": "",
  "id": "user-will-come-on-application-searches-location-and-searches-restaurant",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User searches for restaurant",
  "description": "",
  "id": "user-will-come-on-application-searches-location-and-searches-restaurant;user-searches-for-restaurant",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters location",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on location",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be on restaurant page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User searches restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects restaurant",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "In search page user clicks on selected restaurant",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6143642700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_location()"
});
formatter.result({
  "duration": 253488800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_location()"
});
formatter.result({
  "duration": 626024700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_restaurant_page()"
});
formatter.result({
  "duration": 10174799700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_searches_restaurant()"
});
formatter.result({
  "duration": 333968700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_restaurant()"
});
formatter.result({
  "duration": 572650400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.in_search_page_user_clicks_on_selected_restaurant()"
});
formatter.result({
  "duration": 15084420000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1] (tried for 15 second(s) with 50 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat ✽.Then In search page user clicks on selected restaurant(SearchRestaurant.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-HTKHAH0B\u0027, ip: \u0027192.168.43.233\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\02327J~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56240}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 28c094340b2922d9a959fa247b3a046f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027root\u0027]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]}\r\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.web.automation.pages.RestaurantPage.selectedRestaurantName(RestaurantPage.java:62)\r\n\tat com.web.automation.stepdefinition.StepDefinition.in_search_page_user_clicks_on_selected_restaurant(StepDefinition.java:172)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2362589500,
  "status": "passed"
});
});