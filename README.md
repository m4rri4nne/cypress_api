# API Testing using Cypress

| Endpoint | Method | Test | Expected Result |
| ---------|---------|--------|-------------------|
| /Books | GET | Search all books with success | Return a status code 200 |


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

Based on Response body, we can do different tests, like: 

| Endpoint | Method | Test | Expected Result |
| ---------|---------|--------|-------------------|
| /Books | GET | Search all books with success | - Return a status code 200<br/> - The body response contain all fields non empty <br/> - The pageCount value is an integer|
Using the same strategy to the other endpoints: 

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

There's more tests that you can do related to validation of the body request and the parameters that we need to send, I recommend you try it out! 