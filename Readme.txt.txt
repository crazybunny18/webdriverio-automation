Demo Automation Project Using Cucumber and WebDriverIO
======================================================

1.	Git checkout link: https://github.com/crazybunny18/webdriverio-automation.git

2.	command to checkout the code :
	-	 git clone https://github.com/crazybunny18/webdriverio-automation.git

3.	Steps to run the project the project:

	. install node.js, npm and visual studio code
	. open visual studio code 
	. Select File-> add folder to workspace( Select the project root folder)
	. open terminal and go to the project path( the PWD should be the project root directory)
	. Run the following command to execute test scenarios
		-	npx wdio wdio.conf.js
	. for report generation execute the following command on terminal
		-	allure generate allure-results && allure open
		or
		-	allure generate allure-results --clean && allure open
	
