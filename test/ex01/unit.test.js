/*
 * Defines a simple unit tests using mocha and the firestore emulator.
 */

import { expect } from "chai";

import {
  initializeTestApp,
  clearFirestoreData,
} from "@firebase/rules-unit-testing";
import { firestore } from "firebase";

import {
  TOP_LEVEL_COLLECTION_NAME,
  AUTHOR_INFO_DOC_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
  RESEARCH_DOC_NAME,
  FIRESTORE_EMULATOR_PORT,
  PROJECT_ID,
  UNIMPLEMENTED_ERROR,
} from "./constants.js";

// TODO: Add a statement with your solutions
import * as MY_SOLUTION from "./solution";
import * as TEMPLATE_SOLUTION from "./template";

// TODO: add it to the list of test suites.
const testSuites = [
  { name: "My Solution", solution: MY_SOLUTION },
  { name: "Template Solution", solution: TEMPLATE_SOLUTION },
];

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
  testSuites.forEach((testSuite) => {
    describe(`Suite: ${testSuite.name}: Unit Test`, function () {
      const db = getFirestore();
      before(function (done) {
        // Run the set up method.
        testSuite.solution
          .setupStepsCompleted(db)
          .then((resolve) => done())
          .catch((err) => {
            console.log(err);
            done();
          });
      });

      // Actually check the results.
      it(`should create a ${TOP_LEVEL_COLLECTION_NAME} document with author information`, async function () {
        // Run the method
        await testSuite.solution.createAuthorInfo(db);

        // Validate the db
        const author = await db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(AUTHOR_INFO_DOC_NAME)
          .get();

        expect(
          author.exists,
          `Either the collection ("${TOP_LEVEL_COLLECTION_NAME}") or the document ("${AUTHOR_INFO_DOC_NAME}") does not exist.`
        ).to.be.equal(true);
        expect(author.data()["authorName"]).to.be.a("string", "authorName");
      });

      it(`should create a document named ${RESEARCH_DOC_NAME}`, async function () {
        // Run the method
        await testSuite.solution.createResearchDoc(db);

        // Validate the db
        const firstResearchDoc = await db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(RESEARCH_DOC_NAME)
          .get();

        expect(
          firstResearchDoc.exists,
          `Either the collection ("${TOP_LEVEL_COLLECTION_NAME}") or the document ("${RESEARCH_DOC_NAME}") does not exist.`
        ).to.be.equal(true);
      });

      it(`should create a ${RESEARCH_DOC_NAME} document with required 9 data items`, async function () {
        // Run the method
        await testSuite.solution.addResearchItems(db);

        // Validate the db
        const firstResearchItemsCollectionRef = db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(RESEARCH_DOC_NAME)
          .collection(RESEARCH_ITEMS_COLLECTION_NAME);

        const collection = await firstResearchItemsCollectionRef.get();

        expect(collection.size, "There should be 9 research items").to.be.equal(
          9
        );

        const git_query = await firstResearchItemsCollectionRef
          .where("category", "==", "Git")
          .get();
        const webRtc_query = await firstResearchItemsCollectionRef
          .where("category", "==", "WebRTC")
          .get();
        const firebase_query = await firstResearchItemsCollectionRef
          .where("category", "==", "Firebase")
          .get();

        expect(
          git_query.size,
          "There should be 3 Git research items"
        ).to.be.equal(3);
        expect(
          webRtc_query.size,
          "There should be 3 WebRTC research items"
        ).to.be.equal(3);
        expect(
          firebase_query.size,
          "There should be 3 Firebase research items"
        ).to.be.equal(3);
      });

      it(`${COMPLETED_STEPS_DOC_NAME} document should have all the values set to true`, async function () {
        // Validate the db
        const stepsCompletedDoc = await db
          .collection(TOP_LEVEL_COLLECTION_NAME)
          .doc(COMPLETED_STEPS_DOC_NAME)
          .get();

        expect(
          stepsCompletedDoc.exists,
          `Either the collection ("${TOP_LEVEL_COLLECTION_NAME}") or the document ("${COMPLETED_STEPS_DOC_NAME}") does not exist.`
        ).to.be.equal(true);

        for (const [key, value] of Object.entries(stepsCompletedDoc.data())) {
          expect(value)
            .to.be.a("boolean")
            .that.is.equal(true, `${key} should be true`);
        }
      });

      // Teardown firestore test instance.
      after(async function () {
        await clearFirestoreData({
          projectId: PROJECT_ID,
        });
      });
    });
  });
}

runTestSuites();
