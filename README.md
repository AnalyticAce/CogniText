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

## Contribution Guidelines

We welcome contributions to Open Kitchen! If you'd like to contribute, please follow these guidelines:

1. **Fork the Repository**: Start by forking the OpenCuisine repository on GitHub.

2. **Clone the Forked Repository**: Clone your forked repository to your local machine using `git clone`.

3. **Create a New Branch**: Create a new branch for your contribution using `git checkout -b feature/my-contribution`.

4. **Make Changes**: Make your desired changes to the codebase. You can add new features, fix bugs, or improve existing functionality.

5. **Test Locally**: Test your changes locally by running the app using node (`node index.js`). Ensure that everything works as expected.

6. **Commit and Push**: Commit your changes and push them to your forked repository.

7. **Create a Pull Request**: Create a pull request from your branch to the `main` branch of the original repository. Provide a clear description of your changes.

8. **Review and Merge**: The maintainers will review your pull request. Once approved, your changes will be merged into the main codebase.

## Disclaimer

This app uses LLM models, which may generate unpredictable responses. Always use caution and common sense when following the generated responses.