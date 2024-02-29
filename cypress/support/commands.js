Cypress.Commands.add('BaseRequest', (method, baseUrl, bodyRequest='')=>{
    cy.request({
        'method': method, 
        'url': baseUrl,
        'body': bodyRequest == ''? null : bodyRequest 
    })
})

Cypress.Commands.add('ResponseBodyValidation', (bodyResponse)=>{
    expect(bodyResponse.id).to.be.a('int')
    expect(bodyResponse.title).to.be.a('string')
})