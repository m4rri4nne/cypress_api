import {RequestService, ContractValidator, bookContract } from '@m4rri4nne/cypress-common';

const requestService = new RequestService(); 
const validator = new ContractValidator(bookContract); 

describe('Testing GET method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"
    it('Search all books with success', ()=>{
        requestService.request({
            method: 'GET', 
            url: baseUrl
        }).then((response) =>{
            expect(response.status).to.equal(200)
            validator.validate(response.body)
        })
    })
    it('Search for a specific books with success', ()=>{
        const url = baseUrl + "/10"
        requestService.request({
            method: 'GET', 
            url: url
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(10)
            validator.validate(response.body)
        })
    })
    it('Search for a specific books with invalid Id', ()=>{
        const url = baseUrl + "/10AAA"
        requestService.request({
            method: 'GET', 
            url: url
        }).then((response) =>{
            expect(response.status).to.equal(400)
        })
    })

})