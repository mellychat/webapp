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

1.  Create a top level collection called `exercise01TopLevelCollection` which
    contains a Document called `testDocument`, the document contains the
    following data:

    1. `authorName`: String, The name of the implementor.

2.  Add document called `stepsCompleted` to your top level collection. It
    must contain the following data:

    1. `createdATopLevelCollection`: Boolean, Set when you create your
       top-level collection
    2. `addADocumentInTopLevelCollection`: Boolean, Set when you add datum
       (see above) to your top-level collection
    3. `createdResearchItemsSubCollection`: Boolean, Set when you create
       your `researchItemsCollection` sub collection
    4. `addedAllResearchDocuments`: Boolean, Set when you all documents
       to the `researchItemsCollection` sub collection

3.  Add a subcollection to your top level collection. This sub-collection
    should be named `researchItemsCollection`. It should contain 9 research items
    (see the [Research Document](#research-items) for details). For each item,
    create a Firestore document with the following data:
    1. `title`: String, The title of the document
    2. `category`: String, Must be one of: `GIT`, `WebRTC`, or `Firebase`
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
