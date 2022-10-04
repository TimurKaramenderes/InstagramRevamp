# Smiling Frontend (Subscription)

### Prerequesites

To be able to run and develop on our code base you need to have some libraries installed on your local machine.

- `nvm` node version manager, to handle different versions of `node` in one machine
- `node` (>= 14.16.0) node environment
- `yarn` package manager for the project dependencies
- `ssh` to connect via ssh to the server

### Starting Point

- Clone this repo on your local machine. Go to folder `website/`
- Install dependencies with `yarn install`
- ask one of the team mates to pass you the `.env.*` files for the secrets.
- ask one of the team mates to pass you a dump of the dbs `dbs` to run them locally.

### Development

The repo has many scripts, available via `yarn run <name of the script I want to run>`.

The most notable ones:

**Local development**

- `yarn run start` work on local and see changes as you work
- `yarn run build` to build the project, this is to see if the typescript code compiles to js. (rarely use in local, but useful)
- `yarn run build:<env-to-build>` to be build the project for that particular env
- `yarn run test` for testing components (_WORK IN PROGRESS_)
- `yarn run lint` for linting the project with `eslint` \*

\*code formatting and code quality checks happen automatically if you have the following extensions installed in your favorite code editor.

- `eslint`
- `prettier`

### Code Architecture

Not an extensive list, but where you gonna be working the most.

```
website
|
src
|
components/  // components related things
|
hooks/  // custom helper hooks
|
models/  // redux related stuff
  |
  models/
    |
    Actions.js // action creators pertaining to the model
    |
    ModelR.js // reducer pertaining to the model
    |
    Logic.js // backend api calls pertaining to the model. *Newer components use useEffect instead for api calls*
|
routes/  // route declarations for the frontend
|
utils/   // helper functions
|
styles/   // **read below

** css related stuff we use styled components in most of our newer components, some old components use the old scss classes, we prefer new changes to be with styled components
```

### Other tools we used that you might need access too

- Bitbucket (`frontend, services, and scripts repo's`)
- Jira
- Sentry
- ubuntu server
- slack

If questions please ask. ❤️ &copy; 2022
