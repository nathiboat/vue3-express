# vue3-express

## Tech stack I have used in this app
Frontend: TypeScript/VueJS 3 (JavaScript), Tailwind (CSS), TypeScript/ExpressJs backend (JavaScript). Cypress (E2E testing), Jest (Unit Testing)

## Backend: ExpressJs 

I have create a simple RESTFul Api for each folder each model and route.


### How to run the app

* Unzip folder or clone the repository


#### Locally
``` bash

# Navigate to server folder 
$ cd server
# install using npm locally
$ npm install
# Complie all type script file into javascript and everything will be complied to lthe build folder
$ npm run build
# start the server from complied code
$ npm run start

# The default server port is set to 3000 
#visit http://localhost:3000 
```

## Frontend: Vue3 


#### Locally
``` bash

# Navigate to client folder 
$ cd client
# install using npm locally
$ npm install

# start the server from complied code
$ npm run serve

# The default server port is set to 8080 
#visit http://localhost:8080/ 
```

## Testing: Unit test : Jest 
At the moment I only one the test on client

``` bash

# Navigate to client folder 
$ cd client
# run test npm locally
$ npm run test:unit

# The test will run automatically



```

## Testing: E2E : Cypress 
At the moment I only one the test on client

``` bash

# Navigate to client folder 
$ cd client
# run test npm locally
$ npm run test:e2e

# The test will run automatically

```

## What I can improve

From the optionals tank in this case I would like to add validation on form. 
I have already structured and setup for a large application with a help of Vuex so there is no worry
if the project is getting bigger. When the project is going to have many pages I will add vue router for routes and ability to mange more on 
page rendering. 

On vuex store can also be separate into modoule folder and declar a namespace. This will help us to manage store easier.  

If I have more time I will write commend and add testing make sure if the project not break anywhere possible.  