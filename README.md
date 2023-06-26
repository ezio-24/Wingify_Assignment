
# Wingify_Assignment

This repository represents a test scenario for a different page using Cypress, a JavaScript end-to-end testing framework. The test aims to verify that users can successfully log in with valid credentials. Here's a description of the code:

#Test On the Login Page

The test suite is described as a "Login Page" using the describe function, which provides a container for individual test cases. The beforeEach hook is used to execute a set of instructions before each test case in the suite.

Within the beforeEach hook, the code visits the login page by navigating to the URL "https://sakshingp.github.io/assignment/login.html" using the cy.visit() command.

The first and only test case in the suite is defined using its function. This test case is titled "Should log in with valid credentials" and verifies that users can successfully log in with the provided credentials.

Inside the test case, the code interacts with the login form. It retrieves the username input field using the cy.get() command and types the value "anand" into it using the type() method. Similarly, it retrieves the password input field using cy.get() and types the value "Anand@123" into it.

The code then selects the checkbox element with the class "form-check-input" using cy.get(), and checks it using the check() method. This step suggests that the test scenario involves a remember me functionality or a similar feature.

Next, the code submits the login form by clicking on the element with the ID "log-in" using cy.get().click().

After submitting the form, the test case verifies the successful login by asserting that the current URL contains "https://sakshingp.github.io/assignment/home.html" using cy.url().should().

In summary, this code represents a Cypress test case that visits a login page, enters valid credentials, checks a checkbox, submits the form, and verifies that the user is redirected to the home page after a successful login.

#Test On the Home Page
The test suite is described as "Home Page" using the describe function, which provides a container for individual test cases. The beforeEach hook is used to execute a set of instructions before each test case in the suite.

Within the beforeEach hook, the code visits the home page by navigating to the URL "https://sakshingp.github.io/assignment/home.html" using the cy.visit() command.

The test case is defined using it function and is titled "Sorts transaction table in ascending order by an amount". This test case verifies the sorting functionality of the transaction table.

Inside the test case, the code interacts with the table. It clicks on the "AMOUNT" header to sort the table in ascending order by the amount column. This step assumes that the table has a clickable header for sorting.

Next, the code retrieves all the amounts from the table using the cy.get() command and a CSS selector. The each() method is used to iterate over each amount in the table.

Within the iteration, the code compares each amount with the next one in the table. It extracts the numerical value of the current and next amounts by removing any symbols or non-numeric characters using regular expressions.

The code then uses the expect() assertion to verify if the current amount is less than or equal to the subsequent amount. This assertion checks that the amounts are sorted in ascending order.

In summary, this code represents a Cypress test case that visits the home page, sorts the transaction table in ascending order by the amount column, and verifies that each subsequent amount is greater than or equal to the previous one.
