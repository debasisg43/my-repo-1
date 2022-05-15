package com.web.automation.pages;


	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.FindBy;
	import org.openqa.selenium.support.PageFactory;
	import org.openqa.selenium.support.ui.ExpectedConditions;
	import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

	public class RestaurantPage {
		WebDriver driver;
	    private WebDriverWait wait;
		//WebDriver driver;
		public RestaurantPage(WebDriver driver)
		{
		wait= new WebDriverWait(driver,15,50);	
			PageFactory.initElements(driver, this);
		 
		}
		@FindBy(xpath="//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]")
		private WebElement  searchRestaurantIcon;
	
		@FindBy(xpath="//*[@id='root']/div[1]/div/div/div/div/div/input")
		private WebElement  searchRestaurantTextBox;
		
		@FindBy(xpath="//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]")
	     private WebElement  enterrestaurant;
		
		@FindBy(xpath="//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]")
		private WebElement  selectrestaurant;
		
		public void searchRestaurant()
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]"))));	
			searchRestaurantIcon.click();
		}
		
		public void enterRestaurantName(String restaurantname)
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input"))));	
			searchRestaurantTextBox.sendKeys(restaurantname);
			Assert.assertEquals(true, searchRestaurantTextBox.isDisplayed());
			System.out.println("Search restaurant as expected – Assert passed");
		
		}
		
		public void selectRestaurantName()
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]"))));	
			enterrestaurant.click();
		}
		
		public void selectedRestaurantName()
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]"))));	
			selectrestaurant.click();
		}
	
	}
