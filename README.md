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
```

## Developing for MellyChat

Our workflwos are heavily tied to VS Code due to easy Docker/extensions
integrations. Dev testing is done in a dev container (Dockerfile is supplied
in repo). 

To start developing, install dev dependencies:

> npm install -D

Then launch the container and start a dev instance:

> npm run local


1. TODO: Document details for developer setup.
1. TODO: Document dev workflow (git flow, expectations for PRs)