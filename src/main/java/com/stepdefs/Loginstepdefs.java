package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Loginstepdefs {

	WebDriver driver;

	@Given("^user will enter url \"([^\"]*)\"$")
	public void user_will_enter_url(String url) throws Throwable {

		System.setProperty("webdriver.chrome.driver","F:\\Chromedriver.exe");
		driver= new ChromeDriver();
		driver.get(url);
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user will verify \"([^\"]*)\"$")
	public void user_will_verify(String title) throws Throwable {
		Assert.assertTrue(driver.getTitle().contains(title));
	}

	@Then("^user should see a JBK logo$")
	public void user_should_see_a_JBK_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));

		Assert.assertTrue(logo.isDisplayed());
	}

	@Then("^user will validate \"([^\"]*)\"$")
	public void user_will_validate(String error) throws Throwable {	

		String text="";
		if(driver.getTitle().equals("JavaByKiran | Log in"))
			text = driver.findElement(By.id("password_error")).getText();
		Assert.assertEquals(error,text);
	}
}






