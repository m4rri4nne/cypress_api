describe('Books API Testing', ()=>{
    it('Search all books with success', ()=>{
        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books').as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    it('Search all books with success - Using command', ()=>{
        var baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books'
        cy.BaseRequest('GET', baseUrl).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    
    it('Search all books with success - Using promisses', ()=>{
        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books').then((response)=>{
            expect(response.status).to.equal(200)
        } )
    })

    it('Creating a new book', ()=>{ 
        const body = {
            id: 100,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }

        cy.request({
            'method': 'POST', 
            'url': 'https://fakerestapi.azurewebsites.net/api/v1/Books',
            'body': body
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    it('Creating a new book - Using command', ()=>{ 
        const body = {
            id: 100,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }
        const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books'

        cy.BaseRequest('POST', baseUrl, body).then((response)=>{
            expect(response.status).to.equal(200)
            cy.ResponseBodyValidation(bodyResponse= response.body)
        })
    })

    it('Creating a new book - Using commands', ()=>{ 
        const body = {
            id: 100,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }
        const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books'

        cy.BaseRequest('POST', baseUrl, body).as('response')
        
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.be.a('integer')
        })
    })

})