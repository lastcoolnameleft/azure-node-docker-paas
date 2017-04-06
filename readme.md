# Azure DevOps Lab with Node.js, Azure, Docker & VSTS

## Synopsis
#### From first principals and nothing but VS Code, an empty directory and a command terminal we will create a working web Node.js app running in Azure web platform services & Docker, deployed via an automated DevOps CI/CD pipeline

The scenario will cover:
* Node.js
* Docker
* Azure Container Registry 
* Azure Web App (Linux)
* VSTS

You do not need to be an Node.js or JavaScript expert for the coding part but you will need to make basic changes to a JS file. Likewise no prior experience with VSTS and Azure is required (but obviously beneficial). We will also spend some time with Docker registries and image building & tagging. You will be able to complete the lab with either a Windows or Mac machine, but only Windows has been tested.

The basic overall flow is:
* Create basic Node.js Express app
* Add Docker support
* Git repo setup
* Deploy resources in Azure from template
* Get Azure Container Registry details 
* Creation of VSTS project and code repo
* Push of git repo into VSTS
* Create & run VSTS build definition 
* Create & run VSTS release definition 
* Resulting in our Node app deployed & running in a Azure Linux Web App

---

## Pre-requisites 
:warning: **Do not ignore this part!** :warning:  
You will need the following things set up and installed on your machine: 
* An active [Azure subscription](https://portal.azure.com/). If you do not have a subscription:
  * You may have been given an [Azure Pass](https://www.microsoftazurepass.com/) card & code, please follow the steps given to activate your new subscription.
  * OR - create a [free Azure account and subscription](https://azure.microsoft.com/en-gb/free/)
* An active [VSTS Account](https://app.vsaex.visualstudio.com/)
  * If you don't have an account, [create a free VSTS account](https://www.visualstudio.com/en-gb/docs/setup-admin/team-services/sign-up-for-visual-studio-team-services)
* Install [Node.js](https://nodejs.org/en/download/)
* Install [VS Code](https://code.visualstudio.com/download)
  * Required extension: Docker (Ctrl+P `ext install vscode-docker`)
* Install git; [Git for Windows](https://git-scm.com/download/win) or [Git for Mac](https://git-scm.com/download/mac)
* Optional but strongly recommended: [Git credential manager](https://www.visualstudio.com/en-us/docs/git/set-up-credential-managers)


## Initial Setup Steps
Overview of steps:
 1. Create a new VSTS account (or new project if you already have an account)
 3. Make a note of your Azure subscription ID
 5. Make a note of your VSTS account name, e.g. `{account_name}.visualstudio.com`
 6. If you've never run git before, run these commands (modifying with your details as required):
 ```
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
git config --global credential.helper manager
```
> #### For detailed instructions of these steps with screenshots [click here](setup/)

It is recommended you paste the VSTS account name and Azure subscription ID to a scratchpad file somewhere.

---

# Main Exercise Flow
With all the setup pre-reqs complete, what follows is the full step by step guide to the exercise 

## 1. Create Node.js / Express web app
We'll use the well know [Express](https://expressjs.com/) web framework for Node.js, and it's builtin generator to create a skeleton application.   
Open a command prompt or terminal and run the following commands:
```bash
npm install express-generator -g
express --view=pug myapp
cd myapp
npm install
```
This will install the Express generator, then create a new app and folder called 'myapp', then install the Node modules required.
> Note. You can call the app folder anything you like, you don't need to call it 'myapp'

Now open your project folder in VS Code
```bash
code .
```
Take a look around, there's not a huge amount to see, but we'll probably dive into the `views` folder in a second to customise the app a little.

From VS Code, press `Ctrl+'` to open the builtin terminal and run:
```bash
npm start
```
This will start the Node/Express app + webserver which will be listening on port 3000, so open [`http://localhost:3000`](http://localhost:3000) in your browser to see your app.  

Looks pretty dull eh? It's not the most exciting starting page for sure. If you go back to VS Code and open ***views/index.pug*** you can change what your app shows. This file is a view layout in a format called 'Pug', which has a special format like a very minimal HTML, you can find out the basics [here](https://www.sitepoint.com/jade-tutorial-for-beginners/). This is an example:
```pug
extends layout

block content
  h1 Linux PaaS - Demo Web App
  h3 Microsoft &hearts; Open source
  h3 Let's run this in Azure with Docker
  button OK Great!
```
Any changes to Pug views are picked up without needing to restart Node, so just refresh the browser.  
How much you want to personalize and tweak it from here is up to you. If you know CSS then some quick edits to ***public/stylesheets/style.css*** can make things less of an eyesore.  

Once you you're happy move on to the next step, press `Ctrl+C` in your VS Code terminal to stop Node from running.

---

# Summary
You should now have a containerized blah xxxx

---

# Appendix

## Suggested cleanup & removal tasks
 * Yes
 * Words here

