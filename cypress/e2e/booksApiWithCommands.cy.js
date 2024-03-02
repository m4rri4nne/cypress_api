const { expect } = require("chai")

describe('Books API Testing - Using Commands from cypress', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"

    it('Search all books with success', ()=>{
        cy.BaseRequest('GET', baseUrl).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    
    it('Search all books with success - Using promisses', ()=>{
        cy.BaseRequest('GET', baseUrl).as('response').then((response)=>{
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

        cy.BaseRequest('POST', baseUrl, body).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(100)
            expect(response.body.title).to.equal('string1')
            expect(response.body.description).to.equal('string1')
            expect(response.body.pageCount).to.equal(100)
            expect(response.body.excerpt).to.equal('string')
            expect(response.body.publishDate).to.equal('2023-10-14T18:44:34.674Z')
        })
    })



    it('Updating a book', ()=>{ 
        const id = 100
        const body = {
            id: id,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }

        cy.BaseRequest('POST', baseUrl + {}, body).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(100)
            expect(response.body.title).to.equal('string1')
            expect(response.body.description).to.equal('string1')
            expect(response.body.pageCount).to.equal(100)
            expect(response.body.excerpt).to.equal('string')
            expect(response.body.publishDate).to.equal('2023-10-14T18:44:34.674Z')
        })
    })

})