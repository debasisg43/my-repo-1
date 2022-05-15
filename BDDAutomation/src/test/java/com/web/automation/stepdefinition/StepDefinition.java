package com.web.automation.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.web.automation.pages.HomePage;
import com.web.automation.pages.HomePage1;
import com.web.automation.pages.RestaurantPage;
import com.web.automation.pages.ItemPage;

import org.openqa.selenium.WebElement;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class StepDefinition {
	
	//WebDriver driver = null;
	WebDriver driver;
	HomePage1 home;
	RestaurantPage restaurant;
	ItemPage item;
	
//	@Parameters (value = "browser")
	
	
	
	@Given("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
	driver= new ChromeDriver();
	driver.get("https://www.swiggy.com");
	driver.manage().window().maximize();
	//driver.findElement(By.xpath("//*[@id='location']")).sendKeys("Kolkata");
	
	//-----------
	String Expected_Title ="Order food online from India's best food delivery service. Order from restaurants near you";
	String Actual_Title = driver.getTitle();
	Assert.assertEquals(Expected_Title, Actual_Title);
	System.out.println("Title as expected – Assert passed");
	
	//----------------
	
	
	
	//Click on location// ( line 27,line 31 to 71 commented out)
/*	WebDriverWait wait = new WebDriverWait(driver, 40);
	wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]")));
	driver.findElement(By.xpath("//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]")).click();
	
	//Click on Search Restaurant button//
	WebDriverWait wait1 = new WebDriverWait(driver, 40);
	wait1.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]")));
	Thread.sleep(5000);
	driver.findElement(By.xpath("//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]")).click();
	
	//Search Restaurant//
	WebDriverWait wait3 = new WebDriverWait(driver, 40);
	wait3.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input")));
	driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input")).sendKeys("Zeeshan Deshapriya");
	
	
	//Enter Restaurant//
	WebDriverWait wait4 = new WebDriverWait(driver, 40);
	wait4.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]")));
	driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]")).click();		
	
	//*[@id="root"]/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]
	
	//Click on selected restaurant//
	WebDriverWait wait5 = new WebDriverWait(driver, 40);
	wait5.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]")));
	driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]")).click();
			//*[@id="root"]/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]
	
	//Add Product and check Pricing
	WebDriverWait wait6 = new WebDriverWait(driver, 40);
	wait6.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]")));
	driver.findElement(By.xpath("//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]")).click();
	Thread.sleep(5000);
	//Remove Product
	JavascriptExecutor js = (JavascriptExecutor)driver;
	js.executeScript("window.scrollBy(0,600)");
	
	WebDriverWait wait7 = new WebDriverWait(driver, 40);
	wait7.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/div/div[1]/div[3]")));
	driver.findElement(By.xpath("//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/div/div[1]/div[3]")).click();*/
	
	}
	
	//@Test (dataProvider = "myData")
	@When("^User enters location$")
	public void user_enters_location() throws Throwable
	//public void user_enters_location(String loc) throws Throwable
	
	{
	//WebDriverWait wait = new WebDriverWait(driver, 40);
	//wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='location']")));
	//driver.findElement(By.xpath("//*[@id='location']")).sendKeys("Kolkata");
	home = new HomePage1(driver);
	home.enterLocation("Kolkata");
	//home.enterLocation(loc);
		
	System.out.println("I have entered location");	
	
	}
	//@DataProvider
	//public Object[] myData() {
	//Object[] myData = {"Kolkata"};
	//return myData;
	//}
	

	@And("^User clicks on location$")
	public void user_clicks_on_location() throws Throwable {

	// WebDriverWait wait = new WebDriverWait(driver, 40);
	//wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]")));
	//driver.findElement(By.xpath("//div[@id='root']/div/div/div/div/div/div/div[2]/div/div[3]/div/span[2]")).click();   
	home = new HomePage1(driver);
	home.clickselectedLocation();
	System.out.println("I have selected and clicked on location");
	
	}

	@Then("^User should be on restaurant page$")
	public void user_should_be_on_restaurant_page() throws Throwable {
	//WebDriverWait wait1 = new WebDriverWait(driver, 40);
	//wait1.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]")));
	Thread.sleep(5000);
	//driver.findElement(By.xpath("//*[@id='root']/div[1]/header/div/div/ul/li[5]/div/a/span[2]")).click();   
	
	restaurant = new RestaurantPage(driver);
	restaurant.searchRestaurant();
	Thread.sleep(5000);
	System.out.println("I have clicked on Restaurant icon");
	}
	
	@And("^User searches restaurant$")
	public void user_searches_restaurant() throws Throwable {
		//WebDriverWait wait3 = new WebDriverWait(driver, 40);
		//wait3.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input")));
		//driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input")).sendKeys("Zeeshan Park Circus");
	   // driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div/input")).sendKeys("Zeeshan DeshaPriya");
		restaurant = new RestaurantPage(driver);
	    restaurant.enterRestaurantName("Zeeshan Deshapriya");
	    System.out.println("I have entered Restaurant Name");
	}
	
	@And("^User selects restaurant$")
	public void user_selects_restaurant() throws Throwable {
		//WebDriverWait wait4 = new WebDriverWait(driver, 40);
		//wait4.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]")));
		//driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/span/span[3]")).click();			
		restaurant = new RestaurantPage(driver);
	    restaurant.selectRestaurantName();
	    System.out.println("I have selected Restaurant Name");
	}
	
	@Then("^In search page user clicks on selected restaurant$")
	public void in_search_page_user_clicks_on_selected_restaurant() throws Throwable {
		//WebDriverWait wait5 = new WebDriverWait(driver, 40);
		//wait5.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]")));
		//driver.findElement(By.xpath("//*[@id='root']/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/a/div/div/div[1]")).click();	
		restaurant = new RestaurantPage(driver);
		restaurant.selectedRestaurantName();
		System.out.println("I have selected and entered Restaurant Name");
	}
	
	@And("^User adds product and checks pricing$")
	public void user_adds_product_and_checks_pricing() throws Throwable {
		//WebDriverWait wait6 = new WebDriverWait(driver, 40);
		//wait6.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]")));
		//driver.findElement(By.xpath("//*[@id='h-1950595611']/div[2]/div[1]/div[1]/div/div[2]/div[2]/div/div[1]")).click();
		Thread.sleep(5000);
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,200)");
		item= new ItemPage(driver);
	    item.selecteditem();
	    System.out.println("I have selected and added Item");
	}
	
	@Then("^User removes product$")
	public void user_removes_product() throws Throwable {
		//JavascriptExecutor js = (JavascriptExecutor)driver;
		//js.executeScript("window.scrollBy(0,600)");
		
		//WebDriverWait wait7 = new WebDriverWait(driver, 40);
		//wait7.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[3]")));
		//driver.findElement(By.xpath("//*[@id='menu-content']/div[2]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[1]/div[3]")).click();	
	
		item= new ItemPage(driver);
		item.removeditem();
		System.out.println("I have removed Item");
	}

	@After
	public void tearDown() throws Exception {
		Thread.sleep(1000);
		System.out.println("Close browser");
		//driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.quit();
	}
	

}
