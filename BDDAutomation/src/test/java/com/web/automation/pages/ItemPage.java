package com.web.automation.pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class ItemPage {
	WebDriver driver;
    private WebDriverWait wait;
	//WebDriver driver;
	public ItemPage(WebDriver driver)
	{
	wait= new WebDriverWait(driver,15,50);	
		PageFactory.initElements(driver, this);
	 
	}
	

	
		@FindBy(xpath="//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]")
		private WebElement  selectitem;
		
		public void selecteditem()
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]"))));	
			selectitem.click();
			Assert.assertEquals(true, selectitem.isDisplayed());
			System.out.println("Item is selected – Assert passed");
		
		}
	
		@FindBy(xpath="//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[3]")
		private WebElement removeitem;
		
		public void removeditem()
		{

			wait.until(ExpectedConditions.presenceOfElementLocated((By.xpath("//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[3]"))));	
			removeitem.click();
		}
	
	
}
