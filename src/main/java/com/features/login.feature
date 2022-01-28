Feature: JBK offline application
@run
Scenario Outline: login test

Given user will enter url "file://F:/CORE_JAVA/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html"
When user enters "<uname>" and "<pass>"
Then user will verify "<title>"
And  user will validate "<error>"

Examples:

|uname               |pass  |title    |error|
|kiran@gmail.com     |123456|Dashboard||
|mangesh@gmail.com   |asdfgh|Log in   |Please enter password 123456|
|neelam@gmail.com    |123456|Log in   |Please enter password 123456|
|shreyash@gmail.com  |123456|Log in   |Please enter password 123456|

Scenario: verify logo
Given user should be on login page

