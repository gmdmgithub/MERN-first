# First MERN project
Implementation simple project with Mongodb, express, react and node.js

## Quick Start
1. Instal express
``` bash
$ npm init
$ npm i express 
$ npm i body-parser
```
2. Add dotenv (reading configuration from .env file) and nodemon - watcher
``` bash
$ npm i dotenv
$ npm i -D nodemon 
```
3. Modify package.json add scripts 
 ```
 "start": "nodemon index.js"
```
4. Add a react app (client)
 ``` bush
 $ npx create-react-app client
```
5. Add concurrently to run cople comand in one line: https://www.npmjs.com/package/concurrently
 ``` bush
 $ npm i -D concurrently
```
6. Modufy the package.json file add line similar to that
 ```
 "dev" : "concurrently \"nodemon index.js\" \"cd client && npm run start\""
```


## Version

1.0.0

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
