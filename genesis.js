const fs = require('fs');
const path = require('path');
const axios = require('axios');

function createDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function createFile(filePath, content = "") {
    fs.writeFileSync(filePath, content);
}

// Main project directory
const projectRoot = "genesis";
createDir(projectRoot);

// Create directories
const directories = ["public", "src", "src/controllers", "src/models", "src/routes", "src/services"];
directories.forEach(directory => createDir(path.join(projectRoot, directory)));

// Define the remote URLs
const remoteDataUrl = "https://psicodata.io/CDN/data.json";
const remoteServerJsUrl = "https://psicodata.io/CDN/js/server.js";
const remoteIndexHtmlUrl = "https://psicodata.io/CDN/html-templates/index.html";
const remoteGitignoreUrl = "https://psicodata.io/CDN/.gitignore";
const remoteAutoUpdateUrl = "https://psicodata.io/CDN/js/auto-update.js";
const remoteObfuscateScriptUrl = "https://psicodata.io/CDN/js/obfuscate-script.js";

// Function to fetch data from a remote URL
async function fetchDataFromRemoteUrl(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

// Fetch data from remote URLs
const fetchDataPromises = [
    fetchDataFromRemoteUrl(remoteDataUrl),
    fetchDataFromRemoteUrl(remoteServerJsUrl),
    fetchDataFromRemoteUrl(remoteIndexHtmlUrl),
    fetchDataFromRemoteUrl(remoteGitignoreUrl),
    fetchDataFromRemoteUrl(remoteAutoUpdateUrl),
    fetchDataFromRemoteUrl(remoteObfuscateScriptUrl)
];

Promise.all(fetchDataPromises)
    .then(([data, serverJsContent, indexHtmlContent, gitignoreContent, autoUpdateContent, obfuscateScriptContent]) => {
        if (data) {
            const packageJsonContent = JSON.stringify(data, null, 4);
            createFile(path.join(projectRoot, "package.json"), packageJsonContent);
        }

        if (serverJsContent) {
            createFile(path.join(projectRoot, "server.js"), serverJsContent);
        }

        if (indexHtmlContent) {
            createFile(path.join(projectRoot, "public/index.html"), indexHtmlContent);
        }

        if (gitignoreContent) {
            createFile(path.join(projectRoot, ".gitignore"), gitignoreContent);
        }

        if (autoUpdateContent) {
            createFile(path.join(projectRoot, "auto-update.js"), autoUpdateContent);
        }

        if (obfuscateScriptContent) {
            createFile(path.join(projectRoot, "obfuscate-script.js"), obfuscateScriptContent);
        }

        createFile(path.join(projectRoot, "README.md"), "# Node.js Application");
        console.log("Node.js app structure has been generated successfully in the 'genesis' folder.");
    })
    .catch(error => {
        console.error("Error fetching remote data:", error);
    });