# Excercise 01: Fun with Firestore

## Overview

This folder contains excercises aimed at learning how to work with the
Firestore Javascript SDK. When you are don you will know:

- How to use the main Firestore objects: Collections, Documents, Data.
- How to write code that performs basic firestore operations such as
  reading/writing Collections (and subcollections), Documents, and Data
- How to write tests for your code using the Mochajs testing framework.

## Excercise Details

Your code must do all of the following tasks. We've created a test suite that
will check that each tasks is done.

1. Create a top level collection called `TOP_LEVEL_COLLECTION_NAME` that
   contains a document named `COMPLETED_STEPS_DOC_NAME`. This document contains
   data keyed by these function names: `createAuthorInfo`, `createResearchDoc`,
   and `addResearchItems`. Their values should be set to `false`.

2. Complete the `updateStepsCompleted` method. This function takes a reference
   to the database and a key to the data stored in the `COMPLETED_STEPS_DOC_NAME`
   document and sets its corresponding value to `true`. You will call this method
   at the end of each of the methods you implement in steps 3, 4, and 5.

3. Create a document called `AUTHOR_INFO_DOC_NAME` under the top level collection.
   The document contains the following data:

   1. `authorName`: String, The name of the implementor.

4. Create document called `RESEARCH_DOC_NAME` under the top level collection. The
   document contains the following data:

   1. `title`: String, The title of the research.

5. Create a subcollection under the `RESEARCH_DOC_NAME` document named
   `RESEARCH_ITEMS_COLLECTION_NAME`. This sub-collection should be contain 9 research
   items keyed by the title of the research.
   (see the [Research Document](#research-items) for details). For each item,
   create a document with the following data:
   1. `title`: String, The title of the document
   2. `category`: String, Must be one of: `Git`, `WebRTC`, or `Firebase`
   3. `url`: String, The URL of the document
   4. `summary`: String, A 30 word summary of the document you read.
   5. `date`: String, The date you read the document

### Research Items

An important part of engineering is research. We've put together a collection
of reading materials you should read to ramp up on coding with Firestore and
WebRTC. For this excercise, you'll select 9 articles to read and create short
summary for each (in your own words). You'll select 3 articles for each of
the following topics:

- Git
- WebRTC
- Firebase

At least 2 documents must be from the recommened reading list (check the deep
dive slides). The last article will be one you find on your own.

## Getting Started

TODO: Create `template.js` from `solution.js`

1. Make a copy of the `template.js` template in this directory.
   Give it a unique name such as `joe_ex01.test.js`
2. Update your file to implement the required functionality.
3. Update the `unit.test.js` to import your module
4. Run the tests: `npm tests`
