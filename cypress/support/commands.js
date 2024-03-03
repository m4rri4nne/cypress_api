Cypress.Commands.add('BaseRequest', (method, baseUrl, bodyRequest= null)=>{
    cy.log(bodyRequest);
    cy.request({
        'method': method, 
        'url': baseUrl,
        'body': bodyRequest == null ? null : bodyRequest,
        'failOnStatusCode': false
    })
})

Cypress.Commands.add('ContractValidation', (response)=>{  
    expect(response).to.have.property('id')
    expect(response).to.have.property('title')
    expect(response).to.have.property('description')
    expect(response).to.have.property('pageCount')
    expect(response).to.have.property('excerpt')
    expect(response).to.have.property('publishDate')  
})

Cypress.Commands.add('ResponseValidation', (requestBody, responseBody)=>{
    expect(responseBody.id).to.equal(requestBody.id)
    expect(responseBody.title).to.equal(requestBody.title)
    expect(responseBody.description).to.equal(requestBody.description)
    expect(responseBody.pageCount).to.equal(requestBody.pageCount)
    expect(responseBody.excerpt).to.equal(requestBody.excerpt)
    expect(responseBody.publishDate).to.equal(requestBody.publishDate) 
})
