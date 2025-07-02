describe('Testing PUT Method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"

    const body = {
        id: 100,
        title: "string1 updated",
        description: "string1 updated",
        pageCount: 100,
        excerpt: "string",
        publishDate: "2023-10-14T18:44:34.674Z"
    }

    it('Update an book with success', ()=>{ 
        cy.BaseRequest('PUT', baseUrl + "/100", body).then((response)=>{
            expect(response.status).to.equal(200)
            cy.ContractValidation(response.body)
            cy.ResponseValidation(body, response.body)
        })
    })
    it('Update a book passing invalid ID', ()=>{ 
        cy.BaseRequest('PUT', baseUrl + "/invalid", body).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Update a book with empty body request', ()=>{ 
        const body = {}
        cy.BaseRequest('PUT', baseUrl + "/100", body).then((response)=>{
            expect(response.status).to.equal(200)
            cy.ContractValidation(response.body)
        })
    })

})