/*
 * DELETE ME TEXT: Make a copy, do not modify.
 * Implements Excercise 01: Fun with Firestore SDK.
 * @Author: Your Name
 * @Date: 2021/01/DD
 */
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";

import {
  TOP_LEVEL_COLLECTION_NAME,
  TEST_DOCUMENT_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
} from "./constants";

/**
 * Creates a sub collection in the given top level collection.
 *
 * The create sub collection stores documents that contain info about research
 * documents we've read. Also updates the steps completed collection to reflect
 * progress.
 *
 * @param {firestore.CollectionReference} topLevelCollection The reference to
 * the top level collection.
 * @param {firestore.CollectionReference} stepsCompletedCollection The
 * reference to the collection used to track progress.
 */
function createResearchItemsCollection(
  topLevelCollection,
  stepsCompletedCollection
) {
  throw "NotImplementedError: Implement Me!";
  // 1. Create a collection inside the top level collection.

  // 2. Update the steps completed collection
}

/**
 * Adds the required research items into the collection.
 *
 * Also updates the steps completed collection to refelect progress.
 *
 * @param {firestore.CollectionReference} researchItemsCollection The reference
 * to the collection where research items will be added.
 * @param {firestore.CollectionReference} stepsCompletedCollection The
 * reference to the collection used to track progress.
 */
function allAllResearchItems(
  researchItemsCollection,
  stepsCompletedCollection
) {
  throw "NotImplementedError: Implement Me!";

  console.log(
    `Added ${documentsAdded} to the ${RESEARCH_ITEMS_COLLECTION_NAME}`
  );
}

/**
 * Creates a subcollection in the given top level collection.
 *
 * Also add booleans which track progress on the exercise.
 *
 * @param {firestore.CollectionReference} topLevelCollection a reference to
 *  the top level collection.
 * @returns {firestore.CollectionReference} The reference to the created
 *  collection.
 */
function createStepsCompletedCollection(topLevelCollection) {
  throw "NotImplementedError: Implement Me!";
  // 1. Create the sub collection

  // 2. Populate it with required data and set appropriate values.
}

/**
 * Create a top-level collection with the given name.
 * @param {String} collectionName The name of the top level collection to
 * create.
 * @param {firestore.Firestore} db The firestore instance.
 * @returns {firestore.CollectionReference} The reference to the created
 *  collection
 */
function createTopLevelCollection(collectionName, db) {
  throw "NotImplementedError: Implement Me!";
  // 1. Create collection

  // 2. Add required data
}

/**
 * Implements all required functionality.
 *
 * @param {firebase.firestore.Firestore} db The firestore instance.
 */
export function Run(db) {
  const topLevelCollection = createTopLevelCollection(
    TOP_LEVEL_COLLECTION_NAME,
    db
  );

  const stepsCompletedCollection = createStepsCompletedCollection(
    topLevelCollection
  );

  const researchItemsCollection = createResearchItemsCollection(
    topLevelCollection,
    stepsCompletedCollection
  );

  allAllResearchItems(researchItemsCollection, stepsCompletedCollection);
}
