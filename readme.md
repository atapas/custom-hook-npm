# Custom Hook NPM

This is a boilerplate to create NPM package for one or more ReactJS custom hooks and components.

## How to use it?

You can use the project in this way:

### Install

- 1. Clone this repository and change directory to the project folder.
- 2. Edit the `package.json` file to change the package name, author info, and github link info as per your information.
- 3. Run `npm install` in the root directory of your project.
- 4. Add your React component and hooks. Hooks to go inside the `hooks` folder.

### Build

You can build the project in two ways:

- 1. `yarn build`: To build the project with source map.
- 2. `yarn build: prod`. This will generate minified files without sourcemap.

### NPM Pack for test

After building, create a npm locally to test:

`npm pack`: this command will generate the tar npm package file that you can take to any React-based projects(including Next.js) and use it.

- Just copy the tar npm package file into your ReactJS/Next.js project folder. 
- Add this line to your project's `package.json` file:
  ```bash
  "<NPM-PACKAGE-NAME>": "file:<PATH-TO-THE-TAR-PACKAGE-FILE>",
  ```
  Please note the `NPM-PACKAGE-NAME` should be same as the name you provided in the `package.json` file after cloning this repo.
- Now you can check the `node-modules` folder to see if a new folder has been created with the `NPM-PACKAGE-NAME`. Then your installation is successful.

### Publish It

- To publish it you need to have an account on [https://www.npmjs.com](https://www.npmjs.com).
- Now, open a command prompt/terminal and execute this comand to login:
  ```
  npm login
  ```
- Please provide the credentials you have created already. You can also check if you are in the session with following command,
  ```
  npm whoami
  ```   
- Next part is, just to run the the publish command,
  ```
   npm publish
  ```   


