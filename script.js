//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const message = document.createElement("p");
  message.textContent = "DOM load success";
  body.appendChild(message);
});


describe('Test Page', () => {
  const baseUrl = 'http://example.com'; // Replace 'http://example.com' with your actual base URL

  it('Should verify absence of child elements in the body tag', () => {
    cy.visit(baseUrl);
    cy.get('body').children().should('not.exist');
  });
});

