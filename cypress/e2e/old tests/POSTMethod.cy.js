describe('Testing POST Method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"

    it('Create a book with success', ()=>{ 
        const body = {
            id: 100,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }

        cy.BaseRequest('POST', baseUrl, body).then((response)=>{
            expect(response.status).to.equal(200)
            cy.ContractValidation(response.body)
            cy.ResponseValidation(body, response.body)
        })
    })
    it('Create a book without body request', ()=>{ 
        cy.BaseRequest('POST', baseUrl).then((response)=>{
            expect(response.status).to.equal(415)
        })
    })
    it('Create a book with empty body request', ()=>{ 
        const body = {}
        cy.BaseRequest('POST', baseUrl, body).then((response)=>{
            expect(response.status).to.equal(200)
            cy.ContractValidaton(response.body)
        })
    })

})