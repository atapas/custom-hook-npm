# Custom Hook NPM

This is a boilerplate to create an NPM package for one or more ReactJS custom hooks and components. I hope you find it helpful.

## 🫶 Support
Liked it? You can show your support with a STAR(⭐).

### Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Thanks to all stargazers](https://git-lister.onrender.com/api/stars/atapas/custom-hook-npm?limit=15)](https://github.com/atapas/custom-hook-npm/stargazers)

### Sponsor My Work

I am an independent educator who creates meaningful projects to teach programming. You can support me further by [sponsoring me on GitHub](https://github.com/sponsors/atapas).


## How to use it?

You can use the project in this way:

### Install

- 1. Clone this repository and change the directory to the project folder.
- 2. Edit the `package.json` file to change the package name, author info, and GitHub link info as per your information.
- 3. Run `npm install` in the root directory of your project.
- 4. Add your React component and hooks. Hooks to go inside the `hooks` folder.

### Build

You can build the project in two ways:

- 1. `yarn build`: To build the project with a source map.
- 2. `yarn build: prod`. This will generate minified files without a sourcemap.

### NPM Pack for test

After building, create a npm locally to test:

`npm pack`: this command will generate the tar npm package file that you can take to any React-based projects(including Next.js) and use it.

- Just copy the tar npm package file into your ReactJS/Next.js project folder. 
- Add this line to your project's `package.json` file:
  ```bash
  "<NPM-PACKAGE-NAME>": "file:<PATH-TO-THE-TAR-PACKAGE-FILE>",
  ```
  Please note the `NPM-PACKAGE-NAME` should be the same as the name you provided in the `package.json` file after cloning this repo.
- Now you can check the `node-modules` folder to see if a new folder has been created with the `NPM-PACKAGE-NAME`. Then your installation is successful.

### Publish It

- To publish it, you must have an account on [https://www.npmjs.com](https://www.npmjs.com).
- Make sure to be in this project folder.
- Now, open a command prompt/terminal and execute this command to login:
  ```
  npm login
  ```
- Please provide the credentials you have created already. You can also check if you are in the session with the following command,
  ```
  npm whoami
  ```   
The next part is just to run the the publish command,
  ```
   npm publish
  ```

Happy Publishing!


