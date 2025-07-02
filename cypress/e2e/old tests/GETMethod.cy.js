describe('Testing GET method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"
    it('Search all books with success', ()=>{
        cy.BaseRequest('GET', baseUrl).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    it('Search all books with success - Using promisses', ()=>{
        cy.BaseRequest('GET', baseUrl).then((response)=>{
            expect(response.status).to.equal(200)
            response.body.forEach(element => {
                cy.ContractValidation(element)
            });
        } )
    })
    it('Search for a specific books with success', ()=>{
        const url = baseUrl + "/10"
        cy.BaseRequest('GET', url).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(10)
            cy.ContractValidation(response.body)
        })
    })
    it('Search for a specific books with invalid Id', ()=>{
        const url = baseUrl + "/10AAA"
        cy.BaseRequest('GET', url).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })
})