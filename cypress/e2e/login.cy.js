describe("Login Page", () => {
  beforeEach(() => {
    //***** Visit the login page before each test case
    cy.visit("https://sakshingp.github.io/assignment/login.html");
  });

  it("should login with valid credentials", () => {
    //***** / Enter valid username and password
    cy.get("#username").type("anand");
    cy.get("#password").type("Anand@123");

    
   
      cy.get('.form-check-input').check()

      // ****** Submit the login form 
    cy.get("#log-in").click();


    //**** / Assert that the user is logged in successfully
    cy.url().should(
      "include",
      "https://sakshingp.github.io/assignment/home.html"
    );
   
  });
});


