# Currency-Exchange

#### 

#### By DeAunte Hall



## Technologies Used 

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _gh-pages 3.1.0_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description
Currency Exchanger
For this week's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate limited. You are expected to get an API key through the "Free Plan" - (and to protect that key in your application using environmental variables).

Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

* A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user  should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.

* Users should be able to convert U.S. currency into at least 5 other types of currency.

* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)

* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)




## Specifications

# Setup Instructions for API_KEY
Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable API_KEY in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
Include .env in .gitignore.
Use at least two JavaScript files: one for UI logic and one for service logic.
This example assumes your API Key is stored in an API_KEY variable, as described in this lesson. In order to make your applications quick to grade, please follow the example exactly and do not rename your API_KEY variable to something different.


## Setup/Installation Requirements
* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone https://github.com/88-1982/currency-exchange.git`
* _Navigate to the top level of the repository with the command `$ cd currency-exchange`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_


## Known Bugs

No known bugs.

## License
	MIT
Copyright (c) 2021 DeAunte Hall

## Contact Information
	http://www.88-1982@github.com
	godsofolympus88@gmail.com	

