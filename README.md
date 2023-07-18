# ma_study01

This document should help to get started with the study website of the thesis "The Fine Line Between Assistance and
Dependence: The Impact of Task Difficulty and AI Explanation on User Overreliance".

## Project Setup

Clone project into empty repository and install all necessary dependencies via

```sh
cd .\ma_study01\
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Setting Firebase settings

1. Copy the content of `src/firebase/firebase.js.example` to `src/firebase/firebase.js`
2. Update the empty strings of `apiKey`,`authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId` with
   original data in newly created `src/firebase/firebase.js` file.

In this special case of being part of a master thesis the according data was already placed
in `src/firebase/firebase.js.example` making only the first step necessary.

### Switching between development and production mode

**Development mode** enables a free explorable use of the website.
This state is achieved by using `npm run dev` AND setting mode in `store.js` to `isDebug: true`.<br>
**Production mode** with disabled duplicate participation can be entered by using `npm run build` AND setting mode
in `store.js` to `isDebug: false`. <br>
In case you are prompted with the StudyReentering view but want to inspect the website again, navigate to your browser's
cookies and delete cookie `ORS_PCID-ssn`.

