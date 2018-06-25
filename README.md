# Theia Application

An example Theia application setup

## Prerequisites

[Node.js > v8.11.1](https://nodejs.org), [nvm](https://github.com/creationix/nvm) is recommended.

[yarn](https://yarnpkg.com), installed using:

```bash
$ npm install -g yarn
```

## Cloning

We use git submodules to manage a fork of the theia packages.

Either recurse these submodules during the inital clone:

```bash
$ git clone https://github.com/ARMmbed/mbs-ide --recursive
```

Or clone the repository as normal and then initiate the submodules:

```bash
git submodule update --recursive --init --remote
```

## Installation

Once the repository is cloned, install the dependencies:

```bash
$ yarn
```

A `postinstall` hook also bootstraps the monorepo using [lerna](https://github.com/lerna/lerna).

## Running the application

### Running in browser

```bash
$ cd apps/browser
$ yarn start
```

Open http://localhost:3000 in the browser.

### Running on the desktop

```bash
$ cd apps/electron
$ yarn start
```

## Developing a plugin

Start watching all plugin and app source code for `browser` or `electron`:

```bash
$ yarn watch:browser
or
$ yarn watch:electron
```

Then run the application using the steps above for `browser` or `electron`.

##  Cleaning

To remove all built artifacts, use this command:

```bash
$ yarn clean
```

To remove all `node_modules` as well which leaves just the source, use this command:

```bash
$ yarn clean:all
```

_Note:_ You must install the node modules again after using this command with `yarn`.

## Debugging in VSCode

### Browser

* Click on the debug icon on the left hand side of the VS Code window. 
* Launch `Start Browser Backend` configuration from the 'DEBUG' pull down.

### Electron

* Click on the debug icon on the left hand side of the VS Code window. 
* Launch `Start Electron Backend` configuration from VS code as before.
* Launch `Start Electron FE Debugger` configuration from VS code as before. Make sure you have `Debugger for Chrome` installed when doing this.
