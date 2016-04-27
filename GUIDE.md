# Onboard guide

This guide describes the steps done to complete this project. Each finished step has (will have) a release and a description here.


## Track 0

### Repo setup

- Create a new repository in Github.com
- Create a branch called develop and set it to be the default.
- Clone the created repo.
- Add the README.md template


### Project setup

- We are using an angular-boilerplate to generate and setup the inital configuration of this project. Follow the instructions from [here](https://www.npmjs.com/package/generator-angular-boilerplate) making the necessary changes.
  - In this project, we are using Typescript + Jade, so be sure to select these options when prompted
  - Though we selected to use Jade, the boilerplate creates some HTML files, so, as first task, convert the main.html and navbar.html to jade files.

- This is optional, but we've updated all packages used by this project.
  - The proccess was manual as we checked if there was a new version available and tried to updated. Of course, as colateral damage, we had to fix some problems (broken build, deprecated code, etc). To make it easier, just copy our package.json and bower.json files.

- Another optional step we made was to change some code (both jade and ts files) in order to make them consistent with some conventions we use. We consider extremely important because this also ensures our code quality.

- Update README.md defining the tools needed to build this project, node version and so on.


### Proxy

- There not much to say in this task. We are using `express` and `express-http-proxy` to do our work. Replace all content in `gulp/proxy.js` with the one in this branch/commit. And be sure to add npm dev-dependencies as well by running

```
npm install --save-dev express
npm install --save-dev express-http-proxy
npm install --save-dev url
```

- Once you've installed all dependencies and replaced the `proxy.js` content, you can test if the proxy is really working by running `curl` command

```shell
# change the port number with the one registered in proxy.js
curl http://localhost:5000
```
