describe("Pizza Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    });

    const nameInput = () => cy.get("input[name=name]");
    const specialInstInput = () => cy.get("input[name=specialInst]");
    const sizeInput = () => cy.get("select[name=size]");
    const submitBtn = () => cy.get(`input[id="order-button"]`);
    const top1Input = () => cy.get("input[name=topping1]")
    const top2Input = () => cy.get("input[name=topping2]")
    const top3Input = () => cy.get("input[name=topping3]")
    const top4Input = () => cy.get("input[name=topping4]")

    it('Can use text boxes', () => {
        nameInput().should("have.value", "").type("Bob").should("have.value", "Bob");
        specialInstInput().should("have.value", "").type("Bob").should("have.value", "Bob");
    })
    it('Can select multiple toppings', () => {
        top1Input().check().should("have.value", "on");
        top2Input().check().should("have.value", "on");
        top3Input().check().should("have.value", "on");
        top4Input().check().should("have.value", "on");
    });
    it('Check to see if a user can submit the form data', () => {
        nameInput().type("Bob");
        sizeInput().select([1]);
        submitBtn().should("not.be.disabled");
    })
});
