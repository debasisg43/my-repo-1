package main;

import java.net.URL;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.BeforeSuite;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class Base {
public AndroidDriver<MobileElement> driver;
@BeforeSuite
public void setupDriver() throws MalformedURLException {
	DesiredCapabilities cap = new DesiredCapabilities();
URL appiumURL = new URL("http://127.0.0.1:4723/wd/hub/");

//browser stack
String userName = "debasisghosh_TV1U2h";
String accessKey = "35tBXGWA3oG6NtAAG5xS";

//browser stack		
cap.setCapability("appium:deviceName", "Samsung Galaxy S8 Plus");
cap.setCapability("platformName","Android");
cap.setCapability("appium:platformVersion","7.0");
cap.setCapability("appium:app","bs://51d8d778dad56d0f776bc7aae002e6ec44df9a83");
cap.setCapability("appium:device","Samsung Galaxy S8 Plus");
//emulator     
//cap.setCapability("platformName", "Android");
		//cap.setCapability("appium:deviceName", "Android SDK built for x86");
		//cap.setCapability("appium:platformVersion", "11");
		//cap.setCapability("appium:appActivity", "io.appium.android.apis.ApiDemos");
		//cap.setCapability("appium:appPackage", "io.appium.android.apis");
		cap.setCapability("appium:fastReset", "true" );


		
		
		
		//emulator
		//driver = new AndroidDriver<MobileElement>(appiumURL, cap);
		
		//browser stack	
		driver = new AndroidDriver<MobileElement>(new URL
				("https://"+userName+":"+accessKey+"@hub-cloud.browserstack.com/wd/hub"), cap);



}
}

