# Javascript interview test template

Write something about your company here.


## Requirements

Write here what you'd like the candidate to build and what you expect of them.

This project contains a `web/` and a `server/` folder, both configured with Typescript. The web folder uses React, while the server one uses Express. You can adapt this to your own needs and / or remove one of the folders altogether.

Both folders are configured with jest, which can be run through `yarn test`.


## Tech description

After you're happy with your folder structure, add some notes here so the candidate knows what to expect.

## Developing

### Setup

- Install [yarn version manager](https://yvm.js.org/docs/overview) and [node version manager](https://github.com/nvm-sh/nvm).
- Run `yvm use` && `nvm use` to use the versions of yarn and npm configured in `.nvmrc` and `.yvmrc` in this directory.
- Run `yarn` in both, the `server` and `web` directories to install dependencies.

In case you are having trouble installing the version managers, please use whichever node / yarn version you prefer and update
`.nvmrc` and `.yvmrc` and with those version, so that we know how to run your project.

### Run

In each of the folders, run `yarn start` to start up the application:

  - The app in `http://localhost:3000`.
  - The server will run in `http://localhost:5000`

### Test

Run `yarn test` to run the tests in each directory.
