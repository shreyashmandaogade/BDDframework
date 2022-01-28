package com.runner;

import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

		features="src/main/java/com/features", //path features
		glue="com.stepdefs",  //path of stepdefs
		format={"pretty","html:target"},	//report generation

		monochrome = true ,  //readable console 
		dryRun = false,  // check whether every step is defined
		  tags = "@run"       
		)


public class TestRunner {

	
}
