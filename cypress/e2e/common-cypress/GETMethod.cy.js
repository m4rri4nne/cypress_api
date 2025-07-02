import {RequestService } from '@m4rri4nne/cypress-common';

const requestService = new RequestService(); 
//const validator = new ContractValidator(bookContract); 

describe('Testing GET method', ()=>{
    const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"
    it('Search all books with success', ()=>{
        requestService.request({
            method: 'GET', 
            url: baseUrl
        }).then((response) =>{
            expect(response.status).to.equal(200)
            //validator.validate(response.body)
        })
    })
})