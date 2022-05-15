package main;
import org.testng.annotations.Test;
import org.openqa.selenium.Alert;
public class AppiumMethods extends Base  {

	@Test
	public void checkAlerts() throws InterruptedException 
	{
	driver.findElementByAccessibilityId("App").click();
	driver.findElementByAccessibilityId("Alert Dialogs").click();
	driver.findElementById("io.appium.android.apis:id/two_buttons").click();

	Alert alert = driver.switchTo().alert();
	alert.accept();
	driver.findElementById("io.appium.android.apis:id/two_buttons2").click();
	alert.accept();
	driver.findElementById("io.appium.android.apis:id/two_buttons2ultra").click();
	System.out.println(alert.getText());
	alert.dismiss();
	Thread.sleep(3000);	
	
	
	}	
	
}
