# Getting Started
## Back-End
### Libraries used
- restify
- knex.js
- async

### Routes
- POST/dico/:word
Add a word to the dictionnay.

- POST/dico/
BODY [ key='file' : a .txt file with a word on each line]
Add file's content to the dictionnay

- HEAD/dico/:word
Returns
  - 200 if the 'word' exists
  - 404 otherwise

- GET/anag/:word
Return
  - 200 if at least 1 anagram has been found
    - BODY : JSON object, object.data is an array that contains the results
  - 404 if it didn't found an anagram
  - 500 if an error has been encountered

- GET/history/:offset/:limit
Return
  - 200 if offset and limit are valid
    - BODY : JSON object, object.data is an array that contains the results
  - 500 otherwise
  
### Usage
2 npm runs are avaible :
- "startDev"
  - Launch all the Routes
  - For now there are no auth mecanism, don't use it on a server, you don't want your users to be able to add words in your dictionnay without controls.
- "startProd"
  - Launch GET/anag/:word and GET/history/:offset/:limit only
  - This one is (supposed to be) safe on a server
  
## Front-End
### Libraries used
- Angular2
- MDL

### Usage
TODO

# Work in Progress
 - Authentication system
 - History display
 - Multi-words search
 ...
