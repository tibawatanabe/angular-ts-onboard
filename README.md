# angular-ts-onboard
Angular Onboard project using Typescript+Jade+Stylus+Gulp

Reference: check [Onboard guide](guide.md) to have a detailed step-to-step of this project.

## Environment setup

### Editor setup

This project uses EditorConfig to maintain consistent coding style. Please install [EditorConfig](http://editorconfig.org/) plugin.


### Configuring environment

To build/run this project, firstly follow these instructions:

- Ensure you have and selected a compatible node version by running `nvm list`
- Make sure you have [Bower](http://bower.io/) and [Gulp](http://gulpjs.com/) installed globally by running `npm list -g`
  - if you don't have, install by running `npm install -g bower` and `npm install -g gulp`
- Install all dependencies by running `npm install` and `bower install` (npm might take a long, so be sure to do it in strategical hours)

#### Tips

- to install a node version run `nvm install x.y.z` where `x.y.z` is the version
- to select an installed version, run `nvm use x.y.z` (if you have a unique version installed, i.e one v5 series, you can abbreviate this command by running `nvm use 5` instead of `nvm use 5.7.1`)
- every time you open a new terminal, the system selects the `default` node version, you can change the default version by aliasing the version you want `nvm alias default x.y.z`
- you can short the list npm displays by adding `--depth=0` to list command (i.e `npm list --depth=0`)


### Tested envs

- `node 5.7.1` + `bower 1.7.9` + `gulp 3.9.1` + `npm 3.6.0`


### Noteworthy dependencies

- In order to do something, we had to install this2.
- As solution to bug-thing we updated that to v2.


## Running

To run the app, follow these:

- run `gulp serve`


## Testing

To test feature A, run `this code` then make these actions...


## Publishing

To build a distribution pack, follow these:

- run `gulp build` or `gulp serve:dist`


### Selecting configuration file

You can select the configuration you want to use by using `env` arg when running a `gulp` command.

There are 3 available configurations: `development`, `staging` and `production`. If no arg is passed, `development` is selected automatically.

Examples:

- `gulp serve`
- `gulp serve --env staging`
- `gulp build --env production`


# Post Morten

---

**Note: Use this area to describe problems regarding the management aspect of the project, it is highly important is to include possible solutions and alternatives to *all* problems**

---


## Project management issues

- Process
  - Scope changed every sprint. Solution: Separate projet into several phases
- Client issues
  - Client never did this or that. Solution: Change client
  - Client ...

## Main techincal issues

- JS
  - Framework didn't allow this or that. Solution: use alternative framework X
- Ruby
  - Database driver couldn't do this or that. Solution: Changed the database scheme to X and Y
  - Several issues regarding this or that

## Specific techinical issues

### Problem A

#### Issue

- Constant erro while executing script X

#### Solution

- Clean and build project


### Problem B

#### Issue

- Constant erro while executing script Y

#### Solution

- Clean and build project
