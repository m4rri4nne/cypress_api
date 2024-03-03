describe('Testing DELETE Method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"

    it('Delete a book with success', ()=>{ 
        cy.BaseRequest('DELETE', baseUrl + "/100").then((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    it('Update a book passing invalid ID', ()=>{ 
        cy.BaseRequest('DELETE', baseUrl + "/invalid").then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

})