# Developer Setup
---
This page contains information about how to set up your local environment to develop for this project. 

## Overview of Stack
---
Homebrew: This is a package manager that lets us install other packages.
Docker: This will load all the dependencies you need in an “image” so you don’t mess up your local computer. We launch a container and do all our hacking in there.
Visual Studio Code: This is an IDE that has git/terminal/docker integration. You’ll write your code here

## macOS Setup
---

1. Install Homebrew with: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
2. Install Docker with: brew install docker
3. Install Git with: brew install git
4. Install IDE

## Git 
---

### Setting up your local repo

1. Clone repo locally with: git clone https://github.com/mellychat/webapp.git 
2. Install recommended extensions
3. Setup remote to track upstream with: git remote add upstream https://github.com/mellychat/webapp.git

### Workflow

1. Fetch any changes from the upstream/mainline branch and merges them into your local copy of mainline:

  git fetch upstream
  git checkout mainline
  git merge upstream/mainline

2. Create a new branch on which you will make whatever changes you want with: git checkout -b my-feature-branch
3. Commit any changes you have made to your local branch. Push your changes to your Github with: git push upstream
4. Send a pull request so that we get a copy of the feature branch you wish to merge 
5. We merge your feature branch into mainline




