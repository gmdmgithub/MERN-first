# First MERN project

Implementation simple project with Mongodb, express, react and node.js

## Quick Start

1. Instal express

```bash
$ npm init
$ npm i express
$ npm i body-parser
```

2. Add dotenv (reading configuration from .env file) and nodemon - watcher

```bash
$ npm i dotenv
$ npm i -D nodemon 
```

3. Modify package.json add scripts 

 ```
 "start": "nodemon index.js"
```

4. Add a react app (client)

 ```bash
 $ npx create-react-app client
```

5. Add concurrently to run couple command in one line: https://www.npmjs.com/package/concurrently

 ```bash
 $ npm i -D concurrently
```

6. Modify the package.json file add line similar to that

 ```
 "dev" : "concurrently \"nodemon index.js\" \"cd client && npm run start\""
```

7. In the client package.json add line

```
"proxy": "http://localhost:<BACKEND_PORT>"
```

8. For the client folder install react router (remember to run it in sub-folder client)

```bash
 $ cd <CLIENT_FOLDER>
 $ npm i react-router-dom
```
In the App.js file add line:
```
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
```

8. Run the project in dev mode

```bash
$ npm run dev
```

## Version

1.0.0

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
