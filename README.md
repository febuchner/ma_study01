# ma_study01

This document should help to get started with the study website of the thesis "The Fine Line Between Assistance and
Dependence: The Impact of Task Difficulty and AI Explanation on User Overreliance".
The last and used version for conducting the study can be seen at https://gender-bias-litw.fortiss-demo.org/

## Project Setup

Clone project into empty repository and install all necessary dependencies via the following commands.
In order to do this, you should have Node.js installed.
Preferably version 18.12.1 as this is the version this site was developed and tested on.
First, navigate inside ma_study01 folder with package.json file in root and then install dependencies.

```sh
cd .\ma_study01\
npm install
```

### Compile and Hot-Reload for Development
Generate version of website on localhost by running the following command:

```sh
npm run dev
```

### Compile and Minify for Production
Generate production version for uploading on server by running following command:
```sh
npm run build
```

### Setting Firebase settings
In case there is no `firebase.js` in `src/firebase`, do the following step. 
In case there is a `firebase.js` in `src/firebase` which is filled with data, ignore the following step.

1. Copy the content of `src/firebase/firebase.js.example` to `src/firebase/firebase.js`

### Switching between development and production mode

**Development mode** enables a free explorable use of the website.
This state is achieved by using `npm run dev` AND setting mode in `src/stores/store.js` to `isDebug: true`.<br>
**Production mode** with disabled duplicate participation can be entered by using `npm run build` AND setting mode
in `src/stores/store.js` to `isDebug: false`. <br>
In case you are prompted with the StudyReentering view but want to inspect the website again, navigate to your browser's
cookies and delete cookie `ORS_PCID-ssn`.

