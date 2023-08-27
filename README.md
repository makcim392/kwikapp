# Kwikapp

## General description

Kwikapp is an e-commerce web app developed using React 18.

## Technologies Used

- **Chakra UI:** We've used Chakra UI for our visual styling. Chakra UI is a simple, modular, and accessible component library that helps us create beautiful user interfaces effortlessly.

- **Redux and React Context:** For state management and local persistence, we've utilized both Redux and React Context. Redux helps manage global application state, while React Context provides local state management for components.

- **Firebase:** Firebase serves as our database for storing product data and managing orders. Firebase is a powerful cloud platform that makes it easy to build and scale applications without the need for server-side infrastructure.

## Main functionalities

![Main functionalities](./docs/resources/main_functionalities.gif)

### Package manager

The package manager for this project is ```yarn```

## Installation

After cloning the repo, run ```yarn install```

## Configuration

1. Run ```yarn install```

### ssh-setup for multiple github accounts

1. Start SSH agent
```eval "$(ssh-agent -s)"```

2. Add SSH key
```ssh-add ~/.ssh/id_rsa_personal```

### Babel 

There's a file called ```babel.config.js```, which helped some issues encountered while installing fortawesome icons.

#### Babel
Babel is a popular JavaScript compiler that allows developers to write modern JavaScript code and transform it into a compatible format that can run in older browsers or environments. It helps ensure that your code works across different platforms and versions.

#### Babel Configuration
Babel can be configured using a configuration file called babel.config.js. This file specifies how Babel should transform your code. It allows you to define various presets, plugins, and options that determine how your JavaScript code is transpiled.

#### babel.config.js File
The babel.config.js file is where you define your Babel configuration. It typically resides in the root directory of your project. When Babel is run, it looks for this file to determine how to process your code.

#### Why Adding the Configuration Helps
Adding the babel.config.js file with the correct configuration helps Babel understand how to transform your code. It provides Babel with the necessary instructions and settings to handle different language features, syntax, and compatibility requirements.

In the context of the error message you encountered, the error is related to the configuration of caching in Babel. Babel uses caching to improve performance by remembering previous transpilations. By providing the correct caching configuration in babel.config.js, you are resolving the error and ensuring that Babel functions properly.

Overall, babel.config.js is an essential file for configuring Babel in your project. It helps determine how your modern JavaScript code is transformed into a compatible format, enabling better cross-browser compatibility and ensuring your code runs correctly in different environments.

## Running the project

To run the project, run 

```yarn start```

### Linter

Followed this guide: [Config Eslint and Prettier in Visual Studio Code for React js development](https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a)

## Styling

Styling was made using Chakra UI.

### Icons

Icons library in usage is [Font awesome](https://fontawesome.com/icons)

## Useful commands

### Create react component

```npx generate-react-cli component Component``` 
