/*
 * Defines a simple unit tests using mocha and the firestore emulator.
 */

import { expect } from "chai";

import {
  initializeTestApp,
  clearFirestoreData,
  assertSucceeds,
} from "@firebase/rules-unit-testing";
import { firestore } from "firebase";

import {
  TOP_LEVEL_COLLECTION_NAME,
  TEST_DOCUMENT_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
  PROJECT_ID,
  FIRESTORE_EMULATOR_PORT,
} from "./constants.js";

// Add a statement with your solutions
import { Run as solution } from "./solution";

// And add it to the list of test suites.
const testSuites = [{ name: "Solution", runImpl: solution }];

/**
 * Initializes a test instance of Firebase Firestore emulators.
 *
 * @returns {firestore.Firestore} The initialized firestore instance pointed at
 * the Firestore emulator.
 */
function getFirestore() {
  let db = initializeTestApp({ projectId: PROJECT_ID }).firestore();
  db.useEmulator("localhost", FIRESTORE_EMULATOR_PORT);
  return db;
}

function runTestSuites() {
  testSuites.forEach((suiteDefinition) => {
    describe(`Suite: ${suiteDefinition.name}: Unit Test`, function () {
      // Run the specific suite with the given database.
      const db = getFirestore();
      suiteDefinition.runImpl(db);

      // Actually check the results.
      it(`should create a ${TOP_LEVEL_COLLECTION_NAME} document with required data items`, async function () {
        const wantDocRef = db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(TEST_DOCUMENT_NAME);
        const doc = await wantDocRef.get();

        expect(
          doc.exists,
          `Either the collection ("${TOP_LEVEL_COLLECTION_NAME}") or the document ("${TEST_DOCUMENT_NAME}") does not exist.`
        ).to.be.equal(true);
        expect(doc.get("authorName")).to.be.a("string", "authorName").that.is
          .not.empty;
      });

      it(`should create a ${COMPLETED_STEPS_DOC_NAME} document`, async function () {
        const wantDocRef = db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(COMPLETED_STEPS_DOC_NAME);
        const doc = await wantDocRef.get();
        expect(
          doc.exists,
          `Either the collection ("${TOP_LEVEL_COLLECTION_NAME}") or the document ("${COMPLETED_STEPS_DOC_NAME}") does not exist.`
        ).to.be.equal(true);

        [
          "createdATopLevelCollection",
          "addADocumentInTopLevelCollection",
          // TODO: Uncomment to validate these bools are set after implementing
          // the remaining methods.
          // "createdResearchItemsSubCollection",
          // "addedAllResearchDocuments",
        ].forEach((fieldName) => {
          expect(doc.get(fieldName))
            .to.be.a("boolean")
            .that.is.equal(true, `${fieldName} should be true`);
        });
      });

      it.skip(`should create a ${RESEARCH_ITEMS_COLLECTION_NAME} collection.`, async () => {});
      it.skip(
        `should create 9 research documents in the ${RESEARCH_ITEMS_COLLECTION_NAME} collection.`
      );

      // Teardown firestore test instance.
      after(function (done) {
        clearFirestoreData({
          projectId: PROJECT_ID,
        });

        done();
      });
    });
  });
}

runTestSuites();
