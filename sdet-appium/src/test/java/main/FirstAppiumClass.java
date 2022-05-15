package main;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import bsh.org.objectweb.asm.Constants;
import constants.MyConstants;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.LongPressOptions;
import io.appium.java_client.touch.offset.PointOption;
import methods.MethodClass;

//public class FirstAppiumClass 
public class FirstAppiumClass extends Base

{
	//public AndroidDriver driver;
	//public AndroidDriver<MobileElement> driver;

	@Test
	public void FirstAppiumMethod() throws MalformedURLException, InterruptedException {
		//DesiredCapabilities cap = new DesiredCapabilities();
		//URL appiumURL = new URL("http://127.0.0.1:4723/wd/hub/");

		//cap.setCapability("platformName", "Android");
		//cap.setCapability("appium:deviceName", "Android SDK built for x86");
		//cap.setCapability("appium:platformVersion", "11");
		//cap.setCapability("appium:appActivity", "io.appium.android.apis.ApiDemos");
		//cap.setCapability("appium:appPackage", "io.appium.android.apis");
		//cap.setCapability("appium:fastReset", "true" );
		//driver = new AndroidDriver(appiumURL, cap);
		//driver = new AndroidDriver<MobileElement>(appiumURL, cap);
		//driver.findElement(By.xpath("//android.widget.TextView[@content-desc='Views']")).click();
		//MobileElement viewLink = driver.findElement(By.xpath("//android.widget.TextView[@content-desc='Views']"));
		//viewLink.click();
		
		
		//Thread.sleep(3000);
	
	}

	/*@Test
	public void addTestButton() {
		MobileElement el1 = (MobileElement) driver.findElementByAccessibilityId("Text");
		el1.click();
		MobileElement el2 = (MobileElement) driver.findElementByAccessibilityId("LogTextBox");
		el2.click();
		MobileElement el3 = (MobileElement) driver.findElementByAccessibilityId("Add");
		el3.click();
		MobileElement text = (MobileElement) driver.findElement(By.id("io.appium.android.apis:id/text"));
		System.out.println("****"+text.getText());
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertEquals(text.getText(), "This is a test");
	}*/
	
	//@Test
	public void scrollToElement() throws InterruptedException {
	MobileElement el1= (MobileElement) driver.findElementByAccessibilityId("Views");
	el1.click();

    //MethodClass methods = new MethodClass();
   // methods.scrollViaCordinates(Constants.LongX,Constants.LongY,Constants.moveX,Constants.moveY,driver);
	//TouchAction action = new TouchAction(driver);
	//action.longPress(LongPressOptions.longPressOptions().withPosition(new PointOption().withCoordinates(499,2058)))
	//.moveTo(new PointOption().withCoordinates(499,372)).release().perform();
	//action.longPress(LongPressOptions.longPressOptions().withPosition(new PointOption().withCoordinates(499,2058)))
	//.moveTo(new PointOption().withCoordinates(499,372)).release().perform();
	//action.longPress(LongPressOptions.longPressOptions().withPosition(new PointOption().withCoordinates(499,2058)))
	//.moveTo(new PointOption().withCoordinates(499,372)).release().perform();
	MobileElement el2= (MobileElement) driver.findElementByAccessibilityId("TextFields");
	el2.click();

	Thread.sleep(3000);
	MobileElement textBox1 = (MobileElement) driver.findElement
	                         (By.id("io.appium.android.apis:id/edit"));
	textBox1.clear();
	textBox1.sendKeys("This is Test");
	}

	//@Test

	public void checkBox() throws InterruptedException {
		MobileElement el1 = (MobileElement) driver.findElementByAccessibilityId("Views");
		el1.click();
		driver.findElementByAccessibilityId("Controls").click();
		driver.findElementByAccessibilityId("1. Light Theme").click();
		driver.findElementById("io.appium.android.apis:id/check1").click();
		driver.findElementById("io.appium.android.apis:id/check2").click();
		driver.findElementById("io.appium.android.apis:id/radio1").click();
		driver.findElementById("io.appium.android.apis:id/radio2").click();
		Thread.sleep(3000);
	}

	//@Test
	public void dragandDrop()
	{
	driver.findElementByAccessibilityId("Views").click();
	driver.findElementByAccessibilityId("Drag and Drop").click();
	MobileElement dragElement = driver.findElementById("io.appium.android.apis:id/drag_dot_1");
	MobileElement dropElement = driver.findElementById("io.appium.android.apis:id/drag_dot_2");

	MethodClass methods =new MethodClass();
	methods.dragAndDrop(dragElement,dropElement,driver);
	SoftAssert softassert = new SoftAssert();
	String message = driver.findElementById("io.appium.android.apis:id/drag_result_text").getText();
	softassert.assertEquals(message, "Dropped!");
	}

	//Test
	public void ratingBar() {
	driver.findElementByAccessibilityId("Views").click();
	MethodClass methods =new MethodClass();
	methods.scrollViaCordinates(MyConstants.LongX,MyConstants.LongY,MyConstants.moveX,
			MyConstants.moveY,driver);
	methods.scrollViaCordinates(MyConstants.LongX,MyConstants.LongY,MyConstants.moveX,
			MyConstants.moveY,driver);
	driver.findElementByAccessibilityId("Rating Bar").click();
	WebElement threeStartRatingBar = driver.findElement(By.id("io.appium.android.apis:id/ratingbar1"));
	int startX= threeStartRatingBar.getLocation().getX();
	int endX = threeStartRatingBar.getSize().getWidth();
	System.out.println("StartX = "+startX+" and endX = "+endX);
	int tappingPoint = (int)(endX*0.6);
	int tapY = threeStartRatingBar.getLocation().getY();

	new TouchAction(driver).press(new PointOption().withCoordinates(tappingPoint,tapY)).perform();

	}


	@Test
	public void dropDown()
	{
	MobileElement el1 = (MobileElement) driver.findElementByAccessibilityId("Views");
			el1.click();
	MethodClass methods = new MethodClass();
	methods.scrollViaCordinates(MyConstants.LongX,MyConstants.LongY,MyConstants.moveX,
				MyConstants.moveY,driver);
	methods.scrollViaCordinates(MyConstants.LongX,MyConstants.LongY,MyConstants.moveX,
				MyConstants.moveY,driver);
	driver.findElementByAccessibilityId("Spinner").click();
	driver.findElementById("io.appium.android.apis:id/spinner2").click();
	List<MobileElement> dropDownList=driver.findElements(By.xpath
	("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView"));

	for (MobileElement mobileElement : dropDownList) {
	System.out.println(mobileElement.getText());
	if(mobileElement.getText().equalsIgnoreCase("jupiter")) {
	mobileElement.click();
	break;
	}


	}

	}
	
	
	
	
	
	
	
	@AfterSuite
	public void closeDriver() {
		driver.quit();
	}
}
