# Developer Setup
---
This page contains information about how to set up your local environment to develop for this project. 

## MacOS Setup
---

1. [Install Homebrew](https://brew.sh)
2. [Install Docker](https://docs.docker.com/get-docker/)
3. [Install Git](https://git-scm.com/downloads)
4. Install IDE: We prefer [VSCode](https://code.visualstudio.com/download) as it's integrated into our dev workflows (e.g. extensions, container dev, etc)

## Git Setup
---

### Setting up your local repo

1. Clone repo locally with:
`git clone https://github.com/mellychat/webapp.git`

2. Install recommended extensions

3. Setup remote to track upstream with:
`git remote add upstream https://github.com/mellychat/webapp.git`

### Workflow

1. Fetch any changes from the upstream/mainline branch and merges them into your local copy of mainline:

  `git fetch upstream`
  `git checkout mainline`
  `git merge upstream/mainline`
TIP: ONLY when on the `mainline` branch, you can use `git pull upstream mainline` instead of the previous three commands.
2. Create a new branch on which you will make whatever changes you want with:
`git checkout -b my-feature-branch`

3. Commit any changes you have made to your local branch. Push your changes to your Github with:
`git push upstream my-feature-branch`

4. Send a pull request so that we get a copy of the feature branch you wish to merge 

5. We merge your feature branch into mainline

### Important Git Commands

* `git add .`
Adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit.

* `git push --force`
Overwrites remote branch.
WARNING: Use with care. Ensure that your reviewer hasn't added any commits to your PR on github. Otherwise if you `--force` you'll be blowing away their changes.
### Next Steps

* Testing Locally --> links to https://github.com/mellychat/webapp/blob/mainline/README.md
* Deploying to Firebase --> links to https://github.com/mellychat/webapp/blob/mainline/docs/firebase.md
