# Testing

## Overview

This doc contains info on how testing works for the project. We use the following components:

- mochajs: This is a testing framework
- shouldjs: This is a fluent, BDD-style assertion libary
- [Firebase Emulators](https://firebase.google.com/docs/emulator-suite): This is a set
  of emulators which mimic the behavior of real firebase services.

## Setup

### Prerequisites

- [Developing for MellyChat](http://github.com/mellychat/README.md#hack-mellychat)
- [Firebase Project Setup](firebase.md)

This section contains details for setting up Firebase Emulators

1. Install the emulators

You'll need to do this at least once. This command downloads the emulators
configured in `firebase.json`. The testing harness automatically
downloads and installs these emulators (?).

```
firebase login
firebase emulators:start
```

2. Use the Emulator UI

For manual testing, you can browse to
[http://localhost:5003](http://localhost:5003) for a view of the emulators.
For example, you can checkout the status of the emulated firestore database.

## Running tests

Tests are located in the `test` folder in the project root. You can run tests
using NPM:

```
npm test
```

## Resources:

- [Install, configure and integrate Local Emulator Suite](https://firebase.google.com/docs/emulator-suite/install_and_configure)
- [Connect your app to the Cloud Firestore Emulator](https://firebase.google.com/docs/emulator-suite/connect_firestore)
- [Stack Overflow: How to setup...Firestore with Firebase Emulator](https://stackoverflow.com/a/56236349)
- [Github: nginocchio/List-Share](https://github.com/nginocchio/List-Share). An example project that tests using emulators.
