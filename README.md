# MellyChat WebApp

## Project Layout

```
webapp
|_public/ ... (This is the top level folder for the app)
   |_index.html
   |_config/
      |_ ... (Project specific config e.g. firebase.json, node config etc)
   |_ assets/
       |_... (This is where any static assets will live such as style and images)
       |_css/
       |_fonts/
       |_img/
       |_js
    |_ templates/
        |_... (This is where all HTML templates will live.)
    |_ components/
        |_...(This is where all javascript files that implement functionality will live.)
|_ docs/
     |_...(This is where the project documentation lives.)
|_ test/
     |_...(This is where unit and e2e tests lives.)
```

## Developing for MellyChat {#hack-mellychat}

TODO: Document dev workflow (git flow, expectations for PRs)

Development workflows are heavily tied to VS Code. The project uses
Docker-based remote dev containers and VSCode extensions that make setup and
workflows easier.

To get started, launch the container and then in the terminal:

> npm install -D

Next, launch a local dev instance which kills any existing instance:

> npm run start:local

When you're done, you can kill the local instance. This script kills the
firebase server instance along with any emulators setup for testing.

> npm run stop:firebase

You may also run the tests. For details on testing see the
[Testing](https://github.com/mellychat/webapp/tree/mainline/docs)
documentation.

> npm test

## Next Steps

Developer setup: https://github.com/mellychat/webapp/blob/mainline/docs/developersetup.md
