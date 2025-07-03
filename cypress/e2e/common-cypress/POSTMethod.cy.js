import {RequestService, ContractValidator, bookContract, ResponseValidation } from '@m4rri4nne/cypress-common';

const requestService = new RequestService(); 
const validator = new ContractValidator(bookContract);
const responseValidation = new ResponseValidation();
const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books"

describe('Testing POST Method', ()=>{
    it('Create a book with success', ()=>{ 
        const body = {
            id: 100,
            title: "string1",
            description: "string1",
            pageCount: 100,
            excerpt: "string",
            publishDate: "2023-10-14T18:44:34.674Z"
        }
        requestService.request({
            method: 'POST', 
            url: baseUrl,
            body: body
        }).then((response) =>{
            expect(response.status).to.equal(200)
            validator.validate(response.body)
            responseValidation.reponseValidation(body, response.body)
        })
    })

})