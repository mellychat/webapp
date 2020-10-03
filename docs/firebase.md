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
`mellychat-prod-78ca4` | https://mellychat-prod-78ca4.web.app | Release | Automated weekly release.

## Automated releases

The project uses GitHub Actions to deploy the app to firebase hosting
periodically. The `nightly` version is deploy once per day while the `prod`
version is deployed weekly (TODO).

The [`deploy-firebase-hosting-nightly.yml`](../.github/workflows/deploy-firebase-hosting-nightly.yml)
action will build and deploy the app. It requires the `$FIREBASE_TOKEN` which
has been setup as a github secret.

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