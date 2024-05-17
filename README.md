# genesis

genesis creates the framework for initailizing a node.js application project and populates the initialized project with the necessary folder structure.

Then populates the project with the essential components : package.json , readme.md , .gitignore (node_modules) , index.html , server.js , auto-update.js , obfuscate-script.js.

# Schema

```
genesis
│
├── package.json
│
├── server.js
│
├── README.md
│
├── public
│   │
│   └── index.html
│
├── src
│   │
│   ├── controllers
│   │
│   ├── models
│   │
│   ├── routes
│   │
│   └── services
│
├── .gitignore
│
├── auto-update.js
│
└── obfuscate-script.js
```

#Method

Clone the repo : https://github.com/Mulc1b3R/genesis.git

Navigate to the root directory : genesis/

npm install : to install dependencies.

npm start : creates all folders and files.

npm run server : starts the development server @ 
