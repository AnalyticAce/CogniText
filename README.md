# CogniText
CogniText is a LLM powered PDF reader that allow user to chat and get summary information about your pdf files. This app is powerd by [Octo](https://octo.ai/)

## Demo
Below is the demo of CogniText on [Youtube](https://youtu.be/dxC4OOwnVEQ)

## Instructions

1. Download or clone this project

2. Install Nodejs:
To run this app, you'll need to have Node.js installed on your machine. If you don't have it installed, you can download it from the official [Node.js website](https://nodejs.org).


## Install Requirements
Once you have Node.js installed, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory using the `cd` command.
3. Install the project dependencies by running the following command:

```
$ npm install
```

### Environment setup

To run our app, first we need to set up our environment variable, we can do this by:

- Get an OctoAI API token by following [these instructions](https://octo.ai/docs/getting-started/how-to-create-octoai-api-token/).
- Create and paste your API token in the file called `.env` in this directory.

```bash
OCTO_AI_TOKEN=<your key here>
```

## Run the project
To run the project, follow these steps:

1. Make sure you have completed the previous steps successfully.

2. Open a terminal or command prompt.

3. Navigate to the project directory using the `cd` command.

4. Execute the following command to start the project:

```bash
node index.js
```

Voilà you can now interact with the pdf files uploader in the **files** folder.

`NB: Copy to the files directory all the pdf files you will like to interact with. :)`