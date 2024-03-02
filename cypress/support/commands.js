Cypress.Commands.add('BaseRequest', (method, baseUrl, bodyRequest= null)=>{
    cy.log(bodyRequest);
    cy.request({
        'method': method, 
        'url': baseUrl,
        'body': bodyRequest == null ? null : bodyRequest 
    })
})
