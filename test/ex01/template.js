/*
 * DELETE ME TEXT: Make a copy, do not modify.
 * Implements Excercise 01: Fun with Firestore SDK.
 * @Author: Your Name
 * @Date: 2021/01/DD
 */

import "firebase/firestore";

import {
  TOP_LEVEL_COLLECTION_NAME,
  AUTHOR_INFO_DOC_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
  RESEARCH_DOC_NAME,
  UNIMPLEMENTED_ERROR,
} from "./constants.js";

/**
 * Step 1: Create a document in the top level collection named COMPLETED_STEPS_DOC_NAME.
 * Add a data item keyed by the steps with values set to `false`.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function setupStepsCompleted(db) {
  // TODO: Implement.
  throw new Error(UNIMPLEMENTED_ERROR);
}

/**
 * Step 2: Given the reference to a db and the key for the COMPLETED_STEPS_DOC_NAME document
 * to update, set the corresponding value to `true``.
 *
 * @param {firestore.Firestore} db The firestore instance.
 * @param {string} key The key for the data contained in COMPLETED_STEPS_DOC_NAME.
 */
export async function updateStepsCompleted(db, key) {
  // TODO: Implement.
  throw new Error(UNIMPLEMENTED_ERROR);
}

/**
 * Step 3: Create a document called `authorInfo` under the top level collection,
 * `TOP_LEVEL_COLLECTION_NAME`. The document contains the following data:
 *
 *  - `authorName`: String, The name of the implementor.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function createAuthorInfo(db) {
  // TODO: Implement.
  throw new Error(UNIMPLEMENTED_ERROR);
}

/**
 * Step 4: Create document called `RESEARCH_DOC_NAME` under the top level collection.
 * The document contains the following data:
 *   1. `title`: String, The title of the research.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function createResearchDoc(db) {
  // TODO: Implement.
  throw new Error(UNIMPLEMENTED_ERROR);
}

/**
 * Step 5: Create a subcollection under the `RESEARCH_DOC_NAME` document named
 * `RESEARCH_ITEMS_COLLECTION_NAME`. This sub-collection should be contain 9 research
 * items keyed by the title of the research. See README
 * for the kind of items that should go into this collection.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function addResearchItems(db) {
  // TODO: Implement.
  throw new Error(UNIMPLEMENTED_ERROR);
}
