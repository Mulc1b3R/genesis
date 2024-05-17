import { config } from "dotenv";
config();

import { OpenAI } from "openai";
import readline from "readline"

const openai = new OpenAI({apiKey: process.env.API_KEY});

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const completion = await openai.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[{role:"user", content:"Hello!"}]
})
console.log('\x1b[32m%s\x1b[0m', completion.choices[0].message.content);

userInterface.on("line", async input => {
    const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[{role:"user", content:input}]
    })
    console.log('\x1b[32m%s\x1b[0m', completion.choices[0].message.content);
    userInterface.prompt()    
})

// Copyright © 2023 Psico Communications and Blockchain Development.
//https://psicodata.io/CDN/ai-terminal.json
