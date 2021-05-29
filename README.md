# Typescript Boilerplate

## Highlights

-   Typescript.
-   Material UI (no css/sass/scss).
-   No Class Components.
-   No `else` or nested `if` statement in the code.
-   No redux connect(mapToState/mapToDispatch), we perfer dispatch hook and state selectors.
-   Uses Store Slices to reduce code boilerplate https://redux-toolkit.js.org/api/createSlice
-   Custom [API hook](https://github.com/shobhit1999/Typescript-boilerplate/blob/main/src/Hooks/useService.ts) to reduce code. [click to see example.](https://github.com/shobhit1999/Typescript-boilerplate/blob/main/src/features/Home/index.tsx#L11)
-   Cancelable APIs check above API hook.
-   Github actions to check code styling.

## Contribution Guidelines

-   Clone the project on your local machine.
-   We prefer VS Code.
-   Use Extension `TypeScript Import Sorter` to sort and format the imports, with following rules.

```json
({
	"type": "importMember",
	"regex": "^$",
	"orderLevel": 5,
	"disableSort": true
},
{
	"regex": "react",
	"orderLevel": 8,
	"disableSort": true
},
{
	"regex": "^[^.@]",
	"orderLevel": 15
},
{
	"regex": "^[@]",
	"orderLevel": 10
},
{
	"regex": "^[.]",
	"orderLevel": 30
})
```

-   install dependencies via `yarn install` with node version greater than 13.5.
-   use `yarn start` for local development
-   Before commiting the code, please ensure that code style has been followed (`yarn lint`)
-   use proper commit message, we prefer with Prefix as feat(Scope):`message`, refactor(Scope):`message`, fix(Scope):`message`, breakingchange!:`message` with proper description.

## Environment Variables

```props
REACT_APP_API_BACKEND=<Backend API URL goes here>
PUBLIC_URL=<used for hosting as part of another application>
GENERATE_SOURCEMAP=<true/false in production it is false>
```

### Local

    `.env.development` file overrides the configuration for local development.

### Stage

    `.env` file used here, and we are deleting the `.env.production` while building the application.

### Production

    `.env.production` file overriders the configuration.
