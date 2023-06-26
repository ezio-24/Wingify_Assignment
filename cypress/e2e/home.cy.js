

  describe("Home Page", () => {
    beforeEach(() => {
      //***** / Visit the home page and log in before each test case
      cy.visit("https://sakshingp.github.io/assignment/home.html");
    
    });
  
    it('Sorts transaction table in ascending order by amount', () => {
      //***** / Click the "AMOUNT" header to sort in ascending order
      cy.get('#amount').click();
    
      //******  Get all the amounts from the table
      cy.get('#transactionsTable tbody tr td.text-right').each(($row, index, $list) => {
        if (index < $list.length - 1) {
          const currentAmount = parseFloat($row.text().replace(/[^0-9.-]+/g,"")); // Extract the amount without symbols
          const nextAmount = parseFloat($list.eq(index + 1).text().replace(/[^0-9.-]+/g,"")); // Extract the amount without symbols
          expect(currentAmount).to.be.at.most(nextAmount); // Verify if the current amount is less than or equal to the next amount
        }
      });
    });
});