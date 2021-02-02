/*
 * DELETE ME TEXT: Make a copy, do not modify.
 * Implements Excercise 01: Fun with Firestore SDK.
 * @Date: 2021/01/DD
 */
import firebase from "firebase/app";
import "firebase/firestore";

import {
  TOP_LEVEL_COLLECTION_NAME,
  TEST_DOCUMENT_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
} from "./constants.js";

/**
 * Creates a sub collection in the given top level collection.
 *
 * The create sub collection which stores documents that contain info about
 * research documents we've read. Also updates the steps completed collection
 * to reflect progress.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
function createResearchItemsCollection(db) {
  // TODO: Create a collection inside the top level collection.
  // TODO: Update the steps completed collection.
}

/**
 * Adds the required research items into the collection.
 *
 * Also updates the steps completed collection to refelect progress.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
function allAllResearchItems(db) {
  // TODO: Add 3 git documents
  // TODO: Add 3 webRTC documents
  // TODO: Add 3 firebase documents
}

/**
 * Creates a document in the given top level collection.
 *
 * Also add booleans which track progress on the exercise.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
async function createStepsCompletedDoc(db) {
  await db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(COMPLETED_STEPS_DOC_NAME)
    .set({
      createdATopLevelCollection: true,
      addADocumentInTopLevelCollection: true,
      createdResearchItemsSubCollection: false,
      addedAllResearchDocuments: false,
    });

  console.log(
    `Added doc named ${COMPLETED_STEPS_DOC_NAME} in ${topLevelCollection.id}`
  );
}

/**
 * Create a top-level collection with the given name.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
async function createTopLevelCollection(db) {
  const name = "CodeNext";
  collectionRef = db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(TEST_DOCUMENT_NAME)
    .set({ authorName: name });

  console.log(
    `Created doc ${TEST_DOCUMENT_NAME} in collection ${collection}. Set authorName to "${name}"`
  );
}

/**
 * Implements all required functionality.
 *
 * @param {firebase.firestore.Firestore} db The firestore instance.
 */
export function Run(db) {
  const topLevelCollection = createTopLevelCollection(db);

  const stepsCompletedDoc = createStepsCompletedDoc(db);
  const researchItemsCollection = createResearchItemsCollection(
    topLevelCollection,
    stepsCompletedDoc
  );
  allAllResearchItems(researchItemsCollection, stepsCompletedDoc);
}
