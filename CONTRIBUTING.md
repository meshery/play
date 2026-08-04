# <a name="contributing">Contributing Overview</a>
Please do! Thanks for your help improving the project! :balloon:

All contributors are welcome. Please see the [newcomers welcome guide](https://meshery.io/community/newcomers) for how, where and why to contribute. This project is community-built and welcomes collaboration. Contributors are expected to adhere to our [Code of Conduct](.CODE_OF_CONDUCT.md).

Not sure where to start? First, see the [newcomers welcome guide](https://meshery.io/community/newcomers). Grab an open issue with the [help-wanted label](../../labels/help%20wanted) and jump in. Join the [Slack account](https://slack.meshery.io) and engage in conversation. Create a [new issue](/../../issues/new/choose) if needed.  All [pull requests](/../../pulls) should reference an open [issue](/../../issues). Include keywords in your pull request descriptions, as well as commit messages, to [automatically close issues in GitHub](https://help.github.com/en/github/managing-your-work-on-github/closing-issues-using-keywords).

**Sections**
- <a name="contributing">General Contribution Flow</a>
  - <a href="#how-to-contribute">How to Contribute</a>
  - <a href="#commit-signing">Developer Certificate of Origin</a>
  - <a href="#contributing-docs">Documentation Contribution Flow</a>

Relevant coding style guidelines are the Go Code Review Comments and the Formatting and style section of Peter Bourgon's Go: Best Practices for Production Environments.

# <a name="contributing">General Contribution Flow</a>

In order to contribute to Meshery Play, please follow the fork-and-pull request workflow described [here](./CONTRIBUTING-gitflow.md).

## Issues & Pull Requests

### Creating an Issue

Before **creating** an Issue i.e for `features`/`bugs`/`improvements` please follow these steps:


1. Search existing Issues before creating a new Issue (look to see if the Issue has already been created).
1. If it doesn't exist create a new Issue giving as much context as possible (please take note and select the correct Issue type, for example `bug`, `documentation` or `feature`.
1. If you wish to work on the Issue once it has been triaged, please include this in your Issue description.

### Working on an Issue

Before working on an existing Issue please follow these steps:

1. Comment asking for the Issue to be assigned to you.
1. To best position yourself for Issues assignment, we recommend that you:
    1. Confirm that you have read the CONTRIBUTING.md.
    1. Have a functional development environment (have built and are able to run the project).
    1. Convey your intended approach to solving the issue.
    1. Put each of these items in writing in one or more comments.
1. After the Issue is assigned to you, you can start working on it.
1. In general, **only** start working on this Issue (and open a Pull Request) when it has been assigned to you. Doing so will prevent confusion, duplicate work (some of which may go unaccepted given its duplicity), incidental stepping on toes, and the headache involved for maintainers and contributors alike as Issue assignments collide and heads bump together. 
1. Reference the Issue in your Pull Request (for example `This PR fixes #123`). so that the corresponding Issue is automatically closed upon merge of your Pull Request.

> Notes:
>
> - Check the `Assignees` box at the top of the page to see if the Issue has been assigned to someone else before requesting this be assigned to you. If the issue has a current Assignee, but appears to be inactive, politely inquire with the current Assignee as to whether they are still working on a solution and/or if you might collaborate with them.
> - Only request to be assigned an Issue if you know how to work on it.
> - If an Issue is unclear, ask questions to get more clarity before asking to have the Issue assigned to you; avoid asking "what do I do next? how do I fix this?" (see the item above this line)
> - An Issue can be assigned to multiple people, if you all agree to collaborate on the Issue (the Pull Request can contain commits from different collaborators)
> - Any Issues that has no activity after 2 weeks will be unassigned and re-assigned to someone else.

## Reviewing Pull Requests

We welcome everyone to review Pull Requests. It is a great way to learn, network, and support each other.

### DOs

- Use inline comments to explain your suggestions
- Use inline suggestions to propose changes
- Exercise patience and empathy while offering critiques of the works of others.

### DON'Ts

- Do not repeat feedback, this creates more noise than value (check the existing conversation), use GitHub reactions if you agree/disagree with a comment
- Do not blindly approve Pull Requests to improve your GitHub contributors graph

## Style Guide
The play.meshery.io site is built using ReactJS.

## Working with themes
A custom React hook [useDarkMode.js](./site/src/components/useDarkMode.js) has been used to provide dark theme functionality to the website. The theme can be passed as props to the component where the functionality is desired.

The styling for the light and dark themes is defined in [index.style.js](./site/src/index.style.js)

### Examples

To change text color in CSS, this can be used:

```
color: ${({ theme }) => theme.text};
```

To change background color in CSS, this can be executed:
```
background: ${({ theme }) => theme.body};
```

## Changing images according to theme

To change images or SVG in image source, according to the theme, pass the theme state to the specific image component and change its source according to the theme.

### Example
```
theme === 'light' ? mesheryLogo : mesheryLogoLight;
```

To create new classes or components with theme changing functionality, pass the theme state state to the component and use it as mentioned above.

## <a name="how-to-contribute">How to Contribute</a>

### Prerequisites
Make sure you have the following prerequisites installed on your operating system before you start contributing:

- [Nodejs and npm](https://nodejs.org/en/)

To verify run:
```
node -v
```
```
npm -v
```

### Set up your Local Development Environment
Follow the following instructions to start contributing.

**1.** Fork this repository.

**2.** Clone your forked copy of the project.

```
git clone git@github.com:<your-github-username>/play.git
```

**3.** Navigate to the project directory.

```
cd play
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/meshery/play.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository).

```
git pull upstream master
```

**7.** Create a new branch. Follow [this](https://docs.meshery.io/project/contributing/contributing-gitflow#create-a-new-branch-give-your-branch-its-own-simple-informative-name) guideline when naming your branches.

```
git checkout -b <your_branch_name>
```

**8.** Install the dependencies for running the site.

```
make setup
```

**9.** Make the desired changes.

**10.** Run the site locally to preview changes.

```
make site
```

This will run a local webserver with "live reload" conveniently enabled. ( NOTE: while using the make command on Windows, there sometimes arises an error in identifying the command even after it is installed (unrecognized command), this is because the PATH for the binary might not be set correctly ).

**11.** Track your changes.

```
git add .
```

**12.** Commit your changes. To contribute to this project, you must agree to the Developer Certificate of Origin (DCO) for each commit you make.

```
git commit --signoff -m "<commit subject>"
```

or you could go with the shorter format for the same, as shown below.

```
git commit -s -m "<commit subject>"
```

**13.** While you are working on your branch, other developers may update the `master` branch with their branch. This action means your branch is now out of date with the `master` branch and missing content. So to fetch the new changes, follow along:

```
git checkout master
git fetch upstream master
git merge upstream/master
git push origin
```

Now you need to merge the `master` branch into your branch. This can be done in the following way:

```
git checkout <your_branch_name>
git merge master
```

**14.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**15.** Once you’ve committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. Please ensure that you compare your feature branch to the desired branch of the repo you are supposed to make a PR to. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes in your development branch and update it.

## <a name="commit-signing">Signing-off on Commits (Developer Certificate of Origin)</a>

To contribute to this project, you must agree to the Developer Certificate of
Origin (DCO) for each commit you make. The DCO is a simple statement that you,
as a contributor, have the legal right to make the contribution.

See the [DCO](https://developercertificate.org) file for the full text of what you must agree to
and how it works [here](https://github.com/probot/dco#how-it-works).
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

```
Signed-off-by: Jane Smith <jane.smith@example.com>
```

In most cases, you can add this signoff to your commit automatically with the
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:
```
$ commit -s -m “my commit message w/signoff”
```

To ensure all your commits are signed, you may choose to add this alias to your global ```.gitconfig```:

*~/.gitconfig*
```
[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
```
Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:

<a href="https://user-images.githubusercontent.com/7570704/64490167-98906400-d25a-11e9-8b8a-5f465b854d49.png" ><img src="https://user-images.githubusercontent.com/7570704/64490167-98906400-d25a-11e9-8b8a-5f465b854d49.png" width="50%"><a>

## <a name="contributing-docs">Documentation Contribution Flow</a>
Please contribute! Meshery documentation uses Jekyll and GitHub Pages to host docs sites. Learn more about [Meshery's documentation framework](https://docs.meshery.io/project/contributing). The process of contributing follows this flow:

1. Create a fork, if you have not already, by following the steps described [here](./CONTRIBUTING-gitflow.md)
1. In the local copy of your fork, navigate to the docs folder.
`cd docs`
1. Create and checkout a new branch to make changes within
`git checkout -b <my-changes>`
1. Edit/add documentation.
`vi <specific page>.md`
1. Run site locally to preview changes.
`make site`
1. Commit, [sign-off](#commit-signing), and push changes to your remote branch.
`git push origin <my-changes>`
1. Open a pull request (in your web browser) against the repo.


#### Tests
Users can now test their code on their local machine against the CI checks implemented using `make run-tests`.

To test code changes on your local machine, run the following command:

```
make run-tests
```

#### Building Docker image
To build a Docker image of the project, please ensure you have `Docker` installed to be able to build the image. Now, run the following command to build the Docker image:

```sh
make docker
```

### UI Lint Rules

Meshery uses eslint to maintain code consistency.

# <a name="maintaining"> Reviews</a>
All contributors are invited to review pull requests. See this short video on [how to review a pull request](https://www.youtube.com/watch?v=isLfo7jfE6g&feature=youtu.be).

# New to Git?
Resources: https://lab.github.com and https://try.github.com/

### Stargazers

<p align="center">
  <i>If you’re using Meshery or if you like the project, please <a href="../../stargazers">★</a> star this repository to show your support! 🤩</i>
<a href="../../stargazers"><img align="right" src="https://starchart.cc/meshery/meshery.svg" /></a></p>

### License

This repository and site are available as open-source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).

