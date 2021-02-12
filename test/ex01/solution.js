import firebase from "firebase/app";
import "firebase/firestore";

import {
  TOP_LEVEL_COLLECTION_NAME,
  AUTHOR_INFO_DOC_NAME,
  COMPLETED_STEPS_DOC_NAME,
  RESEARCH_ITEMS_COLLECTION_NAME,
  RESEARCH_DOC_NAME,
} from "./constants.js";

class ResearchItem {
  constructor(category, count) {
    this.category = category;
    this.count = count;
  }

  getItem() {
    return {
      title: "title ".concat(this.count),
      category: this.category,
      url: "url ".concat(this.count),
      summary: "summary ".concat(this.count),
      date: "date ".concat(this.count),
    };
  }
}

/**
 * Step 1: Create a document in the top level collection named COMPLETED_STEPS_DOC_NAME.
 * Add a data item keyed by the steps with values set to `false`.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function setupStepsCompleted(db) {
  return await db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(COMPLETED_STEPS_DOC_NAME)
    .set({
      createAuthorInfo: false,
      createResearchDoc: false,
      addResearchItems: false,
    });
}

/**
 * Step 2: Given the reference to a db and the key for the COMPLETED_STEPS_DOC_NAME document
 * to update, set the corresponding value to `true``.
 *
 * @param {firestore.Firestore} db The firestore instance.
 * @param {string} key The key for the data contained in COMPLETED_STEPS_DOC_NAME.
 */
export async function updateStepsCompleted(db, key) {
  await db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(COMPLETED_STEPS_DOC_NAME)
    .update({ [`${key}`]: true });
  console.log(`Updated ${COMPLETED_STEPS_DOC_NAME} and set ${key} to true`);
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
  const name = "Coach Lilly";
  await db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(AUTHOR_INFO_DOC_NAME)
    .set({ authorName: name });
  await updateStepsCompleted(db, "createAuthorInfo");
}

/**
 * Step 4: Create document called `RESEARCH_DOC_NAME` under the top level collection.
 * The document contains the following data:
 *   1. `title`: String, The title of the research.
 *
 * @param {firestore.Firestore} db The firestore instance.
 */
export async function createResearchDoc(db) {
  await db
    .collection(TOP_LEVEL_COLLECTION_NAME)
    .doc(RESEARCH_DOC_NAME)
    .set({ title: "my first research" });
  await updateStepsCompleted(db, "createResearchDoc");
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
  let researchItems = [];
  const testItem = new ResearchItem("Git", 3);
  console.log(testItem.getItem()["title"]);
  for (let i = 0; i < 9; i++) {
    if (i < 3) {
      researchItems.push(new ResearchItem("Git", i));
      continue;
    }
    if (i < 6) {
      researchItems.push(new ResearchItem("WebRTC", i));
      continue;
    }
    researchItems.push(new ResearchItem("Firebase", i));
  }

  let promises = [];

  researchItems.forEach(async (researchItem) => {
    const item = researchItem.getItem();
    promises.push(
      db
        .collection(TOP_LEVEL_COLLECTION_NAME)
        .doc(RESEARCH_DOC_NAME)
        .collection(RESEARCH_ITEMS_COLLECTION_NAME)
        .doc(`${item["title"]}`)
        .set(item)
    );
  });

  await Promise.all(promises);
  await updateStepsCompleted(db, "addResearchItems");
}
