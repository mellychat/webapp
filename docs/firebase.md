# Firebase Project Setup

This page contains information about the current firebase project setup and
quick references for how to launch firebase (inside the container).

## Environments

An *environment* is just a Firebase project. There are 3 environments, each
with identical configuration in firebase:

Environment | URL | Use | Description
------------|-----|----|-------
`mellychat-dev`| https://mellychat-dev.web.app/ | Dev | Anyone can deploy at any time.
`mellychat-nightly-10f3b` | https://mellychat-nightly-10f3b.web.app | Release | Automated nightly release. No manual deploys
`mellychat-prod-78ca4` | https://mellychat-prod-78ca4.web.app | Release | Automated weekly release

## Per-PR Previews

Firebase has a handy feature that can automatically deploy to a temporary channel within a single project.
For each pull request, a preview is generated and the unique preview link is posted back to the PR.

More info can be found here:

- [Deploy to live & preview channels via GitHub pull requests](https://firebase.google.com/docs/hosting/github-integration)

TODO: Both the previews feature and the associated Github action are in Beta. We can move all deployment to use the channels
approach. In the short term, previews can replace the `mellychat-dev` environment.

## Automated releases

The project uses GitHub Actions to deploy the app to firebase hosting
periodically.

The github actions are located in [.github/workflows][../.github/workflows/]. The workflows need access to the folowing tokens:

- `$FIREBASE_TOKEN`: A token that has access to deploy in Firebase
- `$READ_ONLY_GITHUB_TOKEN`: A read only token for github
- `FIREBASE_SERVICE_ACCOUNT_MELLYCHAT_DEV`: A key corresponding to the service account configured at Firebase.

TODO: See if we can get service accounts so that they aren't tied to an individual contributer.

## Useful commands (within container)

### Deploy to {dev,prod,nightly} environment

`firebase deploy --only hosting -P $ENVIRONMENT`

In general, just swap out `$ENVIRONMENT` with your target. For example to
deploy to the `dev` environment:

`firebase deploy --only hosting -P dev:`

## Config

There are a few important repo config files to be aware of:

File | Usage
---| ---
`.firebaserc` | Contains projects and alias used with the `firebase` cli tool. For example, the `dev` alias is configured there which maps the alias to a specific firebase environment.
`firebase.json` | This helps firebase hosting figure out how to launch the app.

There is also the `.firebase` folder which contains caches -- this folder can be ignored.

## Resources 
* https://firebase.googleblog.com/2016/07/deploy-to-multiple-environments-with.html