require('dotenv').config();
const { Client } = require("@octoai/client");
const prompts = require('prompts');
prompts.override(require('yargs').argv);
const pdf = require('pdf-parse');
const fs = require('fs/promises');
const path = require('path');

const client = new Client(process.env.OCTO_AI_TOKEN);

(async () => {
    const models = await client.chat.listAllModels().map
    (model => {
        return {
            title: model,
            value: model
        }
    });

    const ModelSelect = await prompts({
        type: 'select',
        name: 'model',
        message: 'Which model would you like to use?',
        choices: models,
        initial: 7
    });

    const Allfiles = await fs.readdir("files");
    let pdfs = Allfiles.filter(file => path.extname(file).toLowerCase() === '.pdf');

    let choices = pdfs.map(pdf => {
        return {
            title: pdf,
            value: pdf
        }
    })

    const pdfSelect = await prompts({
        type: 'select',
        name: 'pdf',
        message: 'Which PDF would you like to use?',
        choices: choices,
    });

    const dataBuffer = await fs.readFile(`files/${pdfSelect.pdf}`);

    const text = await pdf(dataBuffer).then(data => {
        return data.text;
    });

    const userQuestion = await prompts({
        type: 'text',
        name: 'question',
        message: 'What question would you like to ask about the pdf ?'
    });

    const completion = await client.chat.completions
        .create({
            "messages" : [
                {
                    "role" : "system",
                    "content" :  "The text below is from a PDF file. \
                    Please read and answer the questions that follow. PDF Content: " + text,
                },
                {
                    "role" : "user",
                    "content" : userQuestion.question 
                }
            ],
            "model": ModelSelect.model,
            "presence_penalty": 0,
            "temperature": 0.1,
            "top_p": 0.9
        }
    );
    console.log(completion.choices[0].message.content)
    fs.writeFile(`files/${pdfSelect.pdf}.txt`, completion.choices[0].message.content, "utf8");

    let AskQuestion;
    do {
        AskQuestion = await prompts({
            type: 'text',
            name: 'anotherQuestion',
            message: 'Do you have a question (yes/no)?',
            validate: anotherQuestion => anotherQuestion.toLowerCase() !== "yes" && anotherQuestion.toLowerCase() !== "no"
                ? 'The only allowed input is yes or no' : true
        });
    } while (AskQuestion.anotherQuestion.toLowerCase() !== 'yes' && AskQuestion.anotherQuestion.toLowerCase() !== 'no');
    
    while (AskQuestion.anotherQuestion.toLowerCase() === 'yes') {

        let NewQuestion = await prompts({
            type: 'text',
            name: 'question',
            message: 'What is yout new question ?'
        });

        const completion = await client.chat.completions
        .create({
            "messages" : [
                {
                    "role" : "system",
                    "content" :  "The text below is from a PDF file. \
                    Please read and answer the questions that follow. PDF Content: " + text,
                },
                {
                    "role" : "user",
                    "content" : NewQuestion.question 
                }
            ],
            "model": ModelSelect.model,
            "presence_penalty": 0,
            "temperature": 0.1,
            "top_p": 0.9
        });
        console.log(completion.choices[0].message.content)
        let AskQuestion;
        do {
            AskQuestion = await prompts({
                type: 'text',
                name: 'anotherQuestion',
                message: 'Do you have a question (yes/no)?',
                validate: (anotherQuestion) => {
                    const lowerCaseInput = anotherQuestion.toLowerCase();
                    if (lowerCaseInput !== 'yes' && lowerCaseInput !== 'no') {
                        return 'The only allowed input is yes or no';
                    }
                    return true;
                }}
            );
        } while (AskQuestion.anotherQuestion.toLowerCase() !== 'yes' && AskQuestion.anotherQuestion.toLowerCase() !== 'no');
    }
})();
