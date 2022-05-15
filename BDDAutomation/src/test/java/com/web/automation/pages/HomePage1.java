package com.web.automation.pages;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class HomePage1 {
	WebDriver driver;
    private WebDriverWait wait;
	//WebDriver driver;
	public HomePage1(WebDriver driver)
	{
	wait= new WebDriverWait(driver,15,50);	
		PageFactory.initElements(driver, this);
	 
	}
	@FindBy(xpath="//*[@id='location']")
	private WebElement  searchLocationTextBox;
	@FindBy(xpath="//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]")
	private WebElement enterselectedLocation; 
	
	
	//private WebElement  searchLocationTextBox;
	public void enterLocation(String location)
	{
       
		wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='location']"))));	
		searchLocationTextBox.sendKeys(location);
		Assert.assertEquals(true, searchLocationTextBox.isDisplayed());
		System.out.println("Search location as expected – Assert passed");
	}
//--------------------------------------
	// private webelement enterselectedLocation
	
	//public void clickselectedLocation(String location)
	
	public void clickselectedLocation()
	{

		wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]"))));	
		enterselectedLocation.click();
	}
	
	
	
}



