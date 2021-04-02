/*
 * Implements Excercise 01: Fun with Firestore SDK.
 * @Author: Mannendri Olivares
 * @Date: 2021/02/12
 */
import firebase from "firebase/app";
import "firebase/firestore";

import {
  TOP_LEVEL_COLLECTION_NAME,
  AUTHOR_INFO_DOC_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
  RESEARCH_DOC_NAME,
  UNIMPLEMENTED_ERROR,
} from "./constants.js";

let topLevelCollection;
let completedStepsDoc;
let researchDoc;
/**
 * Step 1: Create a document in the top level collection named COMPLETED_STEPS_DOC_NAME.
 * Add a data item keyed by the steps with values set to `false`.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function setupStepsCompleted(db) {
  // TODO: Implement.
  topLevelCollection = db.collection(TOP_LEVEL_COLLECTION_NAME);
  completedStepsDoc = topLevelCollection.doc(COMPLETED_STEPS_DOC_NAME);
  await completedStepsDoc.set({ createAuthorInfo: false });
  await completedStepsDoc.set({ createResearchDoc: false });
  await completedStepsDoc.set({ addResearchItems: false });
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
  completedStepsDoc.update({ [`${key}`]: true });
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
  let authorInfoDoc = topLevelCollection.doc(AUTHOR_INFO_DOC_NAME);
  await authorInfoDoc.set({ authorName: "Mannendri" });
  updateStepsCompleted(db, "createAuthorInfo");
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
  researchDoc = topLevelCollection.doc(RESEARCH_DOC_NAME);
  await researchDoc.set({ title: "Firestore & WebRTC Research" });
  updateStepsCompleted(db, "createResearchDoc");
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
  let researchItemsCollection = researchDoc.collection(
    RESEARCH_ITEMS_COLLECTION_NAME
  );
  let doc1 = researchItemsCollection.doc("doc1");
  await doc1.set(
    { title: "Introduction to WebRTC protocols" },
    { merge: true }
  );
  await doc1.set({ category: "WebRTC" }, { merge: true });
  await doc1.set({ url: false }, { merge: true });
  await doc1.set({ summary: false }, { merge: true });
  await doc1.set({ date: false }, { merge: true });

  let doc2 = researchItemsCollection.doc("doc2");
  await doc2.set({ title: false }, { merge: true });
  await doc2.set({ category: "WebRTC" }, { merge: true });
  await doc2.set({ url: false }, { merge: true });
  await doc2.set({ summary: false }, { merge: true });
  await doc2.set({ date: false }, { merge: true });

  let doc3 = researchItemsCollection.doc("doc3");
  await doc3.set({ title: false }, { merge: true });
  await doc3.set({ category: "WebRTC" }, { merge: true });
  await doc3.set({ url: false }, { merge: true });
  await doc3.set({ summary: false }, { merge: true });
  await doc3.set({ date: false }, { merge: true });

  let doc4 = researchItemsCollection.doc("doc4");
  await doc4.set({ title: false }, { merge: true });
  await doc4.set({ category: "Git" }, { merge: true });
  await doc4.set({ url: false }, { merge: true });
  await doc4.set({ summary: false }, { merge: true });
  await doc4.set({ date: false }, { merge: true });

  let doc5 = researchItemsCollection.doc("doc5");
  await doc5.set({ title: false }, { merge: true });
  await doc5.set({ category: "Git" }, { merge: true });
  await doc5.set({ url: false }, { merge: true });
  await doc5.set({ summary: false }, { merge: true });
  await doc5.set({ date: false }, { merge: true });

  let doc6 = researchItemsCollection.doc("doc6");
  await doc6.set({ title: false }, { merge: true });
  await doc6.set({ category: "Git" }, { merge: true });
  await doc6.set({ url: false }, { merge: true });
  await doc6.set({ summary: false }, { merge: true });
  await doc6.set({ date: false }, { merge: true });

  let doc7 = researchItemsCollection.doc("doc7");
  await doc7.set({ title: false }, { merge: true });
  await doc7.set({ category: "Firebase" }, { merge: true });
  await doc7.set({ url: false }, { merge: true });
  await doc7.set({ summary: false }, { merge: true });
  await doc7.set({ date: false }, { merge: true });

  let doc8 = researchItemsCollection.doc("doc8");
  await doc8.set({ title: false }, { merge: true });
  await doc8.set({ category: "Firebase" }, { merge: true });
  await doc8.set({ url: false }, { merge: true });
  await doc8.set({ summary: false }, { merge: true });
  await doc8.set({ date: false }, { merge: true });

  let doc9 = researchItemsCollection.doc("doc9");
  await doc9.set({ title: false }, { merge: true });
  await doc9.set({ category: "Firebase" }, { merge: true });
  await doc9.set({ url: false }, { merge: true });
  await doc9.set({ summary: false }, { merge: true });
  await doc9.set({ date: false }, { merge: true });

  updateStepsCompleted(db, "addResearchItems");
}
