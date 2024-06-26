# genesis

genesis creates the framework for initailizing a node.js application project and populates the initialized project with the necessary folder structure.

Then populates the project with the essential components : package.json , readme.md , .gitignore (node_modules) , index.html , server.js , auto-update.js , obfuscate-script.js.

No need to ```npm init``` , your project is initialized by the genesis event. (see also 'files' section below for and explanation of the auto-update).

![terra](genesis.png) 
index.html

[Listen to Genesis](https://psicodata.io/DDD/genesis-demo/genesis.mp3)

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

# Method

Clone the repo : https://github.com/Mulc1b3R/genesis.git

Navigate to the root directory : genesis/

```npm install``` : to install dependencies.

```npm start``` : creates all folders and files.

```cd genesis``` : change directory to the new 'genesis' folder , this is your working repo after successfully running 'start'.

In the new directory : ``` npm run server``` : starts the development server @  http://localhost:3000

Visit :  http://localhost:3000  in your browser to view the default index.html

Planet Earth is spinning in the void : Genesis = true. /project initialized.

Click on audio to listen to the Blade Runner soudtrack ... and start coding.
(just edit the 'index.html' to suit the needs of your project , this is your projects GUI).

### AI Terminal

(If you need to get any technical advice related to coding your project , find included ; ai.js , you will need an open ai api key to use it , gpt 3.5 , is really good value.
add your api key to 'example.env' file and rename it '.env'  by removing the word 'example'  , then type; ```npm run openai ``` , the ai will appear in your terminal ready to answer any questions...)
To add the ai to your new project , just drag (or copy and paste) the 'ai.js' and '.env' files in to your new 'genesis' folder... i put it in the initial root in case it is needed prior to genesis...

# Files
index.html ; your default front end , edit it in whatever way you want ,this is the project GUI.

server.js ; this is the development server , you can view any changes on the fly , in your default browser. Pre genesis there is nothing to see.

obfuscate-script.js enables code obfuscation and minification obviating the need to add minification .css from remote servers as is the current modus operandi.

Reducing energy waste two fold.

After genesis type ; ```npm run encrypt``` , with the file you want to encrypt and 'obfuscate-script.js' in the sane dir , open 'obfuscate-script.js' in your IDE first

and edit the input and out put file names to the name of the file u want to encrypt and what u want it to be named after encryption.


auto-update.js updates the package.json to allow updated versions of all modules to be 'pushed' to your application fron the psicodata.io CDN.
Just delete the packagelock.json and run the script .
This is a breaking change from the orthodox method which we consider to be semi 'obsolete'. (packagelock.json , builds in any zero day vulnerabilities that may exist in the dependencies
that may not have been discovered at the time you created your app , disables forward compatability , and forces reliance on modules that may have become depreciated ,
consigning millions of lines of code, annually , the the scrap heap. (to be on the safe side just copy the old package.json prior to update in case of any incompatabilities caused by 'breaking changes').

The 'packagelock.json' will re-spawn next time you run ```npm install``` .

It also makes forensic reconstruction of node.js applications virtually impossible.
It's your choice whether you auto-update or not , stick with the old way if you prefer.
To update type ```npm run imagine``` . ( update is an actual npm command so it was out of bounds, ```imagine``` updates everything instead of having to
run the npm update command for every module ). This only works in genesis and not outside of it.(in case u were wodering , an 'imagine' is a group of Butterflies).

Package.json comes pre-loaded with up to date modules capable of performing almost any function imaginable : (modules that are 'built in don't need to be listed).

### Broadcast Event Propagation

Easily broadcast events across your application with the power of

 **React Microdata Broadcast Event**.

### Radio Broadcast Service

Experience real-time data broadcasting with the cutting-edge **React Microdata Radio Broadcast Service**.

### API Interaction

Effortlessly communicate with external APIs using the **API** module, enhancing your application's

 connectivity.

### Apollo Server Express

Empower your GraphQL server capabilities with the efficiency of **Apollo Server Express**.

### Secure Data Handling

Encrypt and decrypt data seamlessly using **bcrypt** for robust security measures.

### Blockchain Integration

Tap into blockchain technology with **Bitcoin Core** and **Bitcore Lib**, enabling advanced

 cryptocurrency functionalities.

### Web Scraping and Crawling

Effortlessly parse and fetch web content using **Cheerio**, simplifying your web scraping endeavors.

### GitHub Integration

Interact with GitHub's API effortlessly using **D-GitHub**, enhancing your GitHub integration features.

### Templating Engine

Enhance your server-side rendering with the flexibility of **EJS** for dynamic and interactive content

 creation.

### Cryptography Operations

Leverage elliptic curve cryptography effortlessly with the **Elliptic** module for secure data exchange.

### Web Server Framework

Build robust web applications effortlessly using the popular **Express** framework for Node.js.

### Media Processing

Effortlessly handle media processing tasks with **FFmpeg-Static** and

 **Fluent-FFmpeg** for seamless multimedia experiences.

### Real-time Data Queries

Efficiently handle real-time data queries with **GraphQL**, streamlining your data retrieval

 and manipulation processes.

### Image Manipulation Utilities

Convert images to base64 effortlessly with the **Image-to-Base64** module for seamless data encoding.

### Data Validation

Simplify data validation tasks with the intuitive functionality of **Joi** for streamlined input handling.

### Token-based Authentication

Secure your application with token-based authentication using the 

**Jsonwebtoken** library for enhanced user validation.

### Time and Date Management

Efficiently handle time and date operations with **Moment** for streamlined time-related functionalities.

### HTTP Request Handling

Simplify HTTP requests with the intuitive features of **Node-Fetch** for effortless data retrieval.

### Audio Metadata Extraction

Retrieve and manipulate audio file metadata effortlessly with **Node-ID3** for seamless audio processing.

### AI-Powered Solutions

Leverage the power of artificial intelligence with the **OpenAI** library, 

enabling advanced AI functionalities in your project.

### Encryption and Decryption


Securely encrypt and decrypt sensitive information with ease using the **OpenPGP** library for

 data protection.

### QR Code Generation

Generate QR codes dynamically with the **QR-Creator** library, enhancing your data encoding capabilities.

### HTTP Request Management

Simplify HTTP request handling with **Request**, allowing effortless communication with 

external APIs and services.

### Secure JavaScript Cryptography Library

Enhance your encryption capabilities with the **SJCL** library, ensuring secure cryptography operations.

### Real-time Communication

Implement real-time communication features effortlessly with **Socket.io** for seamless client-server

 interactions.

### Blockchain Interaction

Interact with blockchain networks effortlessly using **Web3** .

### Historical market data

Stock tickers , forex and crypto market data enabled , every ticker , every currency , every coin.

### vercel

Deploy your app to vercel in the blink of an eye : in terminal...

type ; ``` vercel login``` 
then ; ``` vercel --prod ```

this will deploy your new app to the vercel servers (make sure you have a , free ,  vercel account prior to deployment).

### Do's and Do not's

* Do Not rename the'public' folder , or 'index.html' , edit it all you want but keep it where it is...
* Do not rename or move any files created by genesis... ( exept 'obfuscate-script.js' and 'ai.js' , which are non-essential).
* Do anything else you want ,including renaming or deleting empty folders...
* Do create yr app in the 'src' folder and sub folders therein...

### Genesis Engine : 'Get with the program'...

The genesis engine is the easiest and fastest project initiation engine on Earth - no need to spend hours reading the 'docs'.
(Although a number of add on's to come will be released with comprehensive documentation).

Initailize in less that 60 seconds and start coding....

Enable automatic updates - we 'push' you the most recent versions of all your node_modules : type ;  ```npn run imagine```

Instant deployment to vercel.com 

type ; ``` vercel login``` 
then ; ``` vercel --prod ```

**************************************************************************************************************************************************************************************************************************


metamask address ; 0x63673528404C9B9394d4Ec6FA037ED825c8b0faa
  
Copyright © 2024 Psico Communications and Blockchain Development.
  
Licensed under the Apache License, Version 2.0

Mulc1b3R .

```
MADE IN YORKSHIRE
```









