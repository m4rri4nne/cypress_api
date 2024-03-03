# API Testing using Cypress
Project of test automation using cypress. For this project, the api used was [Free API Books](https://fakerestapi.azurewebsites.net/index.html). 

## API Specification
The model of response body for all requests is: 
```json
 {
    "id": 0,
    "title": "string",
    "description": "string",
    "pageCount": 0,
    "excerpt": "string",
    "publishDate": "2023-10-14T18:44:34.674Z"
  }
```

## Test Scenarios 
| Endpoint | Method | Test | Expected Result |
| ---------|---------|--------|-------------------|
| /Books | GET | Search all books with success | - Return a status code 200<br/> - The body response contain all fields non empty <br/> - The pageCount value is an integer|
| /Books/{id} | GET | Search a specific book with success | - Return a status code 200<br/> - The body response contain all fields non empty|
| /Books/{id} | GET | Search a specific book with invalid id | - Return a status code 404 <br/> - The title of message error should be "Not Found"|
| /Books | POST | Create a book with success | - Return a status code 200<br/> - The body response contain all fields non empty <br/> - The pageCount value is an integer|
| /Books | POST | Create a book without body request | - Return a status code 415 <br/>|
| /Books | POST | Create a book with empty body request | - Return a status code 200 <br/> - The fields of body response are filled with default configuration|
| /Books/{id} | PUT | Update an book with success | - Return a status code 200<br/> - The body response contain all fields non empty <br/> |
| /Books/{id} | PUT | Update a book passing an inexistent ID | - Return a status code 404 <br/>|
| /Books/{id} | PUT | Update a book passing invalid ID | - Return a status code 400 <br/>|
| /Books/{id} | PUT | Update a book with empty body request| - Return a status code 200 <br/>|
| /Books/{id} | DELETE | Delete a book with success | - Return a status code 200 <br/>|
| /Books/{id} | DELETE | Delete a book with inexistent ID| - Return a status code 400 <br/>|


## Running the tests locally 

Install the depencencies: 
```bash 
npm install 
```

Running the tests: 
```bash
npm run tests
```

You can check more details about how this project was built [here]() 

