/*
 * Defines a simple unit tests using mocha and the firestore emulator.
 */

// Inspiration from: https://github.com/nginocchio/List-Share
const assert = require("assert");
const firebase = require("@firebase/rules-unit-testing");

const PROJ_ID = "mellychat-dev";
const FIRESTORE_EMULATOR_PORT = 5002;

function getFirestore() {
  db = firebase.initializeTestApp({ projectId: PROJ_ID }).firestore();
  db.useEmulator("localhost", FIRESTORE_EMULATOR_PORT);
  return db;
}

describe("List share app", () => {
  beforeEach(async (done) => {
    done();
  });

  // TODO(joe): Also teardown all apps (1) and delete any data (2)
  // (1) Promise.all(firebase.apps().map(app => app.delete()))
  // (2) clearFirestoreData({ projectId: string }) => Promise
  // See: https://firebase.google.com/docs/rules/unit-tests#test_sdk_methods
  afterEach((done) => {
    firebase.clearFirestoreData({
      projectId: PROJ_ID,
    });
    done();
  });

  it("Understands basic math", () => {
    assert.strictEqual(2 + 2, 4);
  });

  it("Can read user collection", async () => {
    const db = getFirestore();
    const testDoc = db.collection("users").doc("testDoc");
    await firebase.assertSucceeds(testDoc.get());
  });
});
