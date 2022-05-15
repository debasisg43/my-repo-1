package com.web.automation.pages;

import java.util.ResourceBundle;

import org.openqa.selenium.WebDriver;

public class HomePage {
	ResourceBundle element;
	WebDriver driver;
	public HomePage(WebDriver driver)
	{
	 this.driver=driver;
	 element=ResourceBundle.getBundle("Elements"); 
	}

	public void enterLocation(String location)
	{
		
	}
	
	public void clickLocation()
	{
		
	}
}
