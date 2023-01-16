import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
    state: () => {
        return {
            stepIndex: 0,
            steps: [
                'welcome-to-study',
                'informed-consent',
                'demographic-questions',
                'trial-instruction',
                'study-trial',
                'thanks-for-participating',
            ],
            userInput: {
                userID: null,
                "created-on": null,
                "consent-accepted": null,

                "user-taken-test-before": null,
                "user-origin-country": null,
                "user-current-country": null,
                "user-age": null,
                "user-native-language": null,
                "user-religion": null,
                "user-education": null,
                "user-gender": null,
                "user-cookie-consent": null,
            },
            debrief: {
                "user-comment": null,
                "user-difficulties": null,
                "user-difficulties-description": null,
                "user-cheat": null,
                "user-cheat-description": null,
            },

            street: "Baker Street",
            housenumber: "221b",
            city: "London",
        };
    },
    getters: {
        getCurrentStep(state) {
            return state.steps[state.stepIndex];
        },
        getConsentAccepted(state) {
            console.log(state.userInput['consent-accepted']);
            return state.userInput['consent-accepted'];
        },
        getUserTakenTestBefore(state) {
            return state.userInput['user-taken-test-before'];
        },
        getUserOriginCountry(state) {
            return state.userInput['user-origin-country'];
        },
        getUserCurrentCountry(state) {
            return state.userInput['user-current-country'];
        },
        getUserAge(state) {
            return state.userInput['user-age'];
        },
        getUserNativeLanguage(state) {
            return state.userInput['user-native-language'];
        },
        getUserReligion(state) {
            return state.userInput['user-religion'];
        },
        getUserEducation(state) {
            return state.userInput['user-education'];
        },
        getUserGender(state) {
            return state.userInput['user-gender'];
        },
        getUserCookieConsent(state) {
            return state.userInput['user-cookie-consent'];
        },
        getUserComment(state) {
            return state.debrief['user-comment'];
        },
        getUserDifficulties(state) {
            return state.debrief['user-difficulties'];
        },
        getUserDifficultiesDescription(state) {
            return state.debrief['user-difficulties-description'];
        },
        getUserCheat(state) {
            return state.debrief['user-cheat'];
        },
        getUserCheatDescription(state) {
            return state.debrief['user-cheat-description'];
        },
    },
    actions: {
        // Restarts the study
        restartStudy(state) {
            state.stepIndex = 0
        },

        // Goes to next component
        nextStep(state, stepsToGo) {
            // Scroll to top
            window.scrollTo(0, 0)

            // Update screen
            state.stepIndex += stepsToGo

            // Log Timestamp
            // var step = state.stepIndex + '-' + state.steps[state.stepIndex]
            // var timestamp = state.answers.timestamps
            // timestamp[step] = new Date(Date.now()).toLocaleString("de-DE")

            // Update
            // var id = state.answers["participantId"]
            // var collectionName = state.isDebug ? 'debug' : 'prod'
            // var db = firebase.firestore()
            // db
            //     .collection(collectionName)
            //     .doc(id)
            //     .set(state.answers)
            //     .then( () => {
            //       // console.log("Updated")
            //     })
        },

        // Saves answers to answer object
        setUserInput(state, payload) {
            // console.log(payload)
            state.userInput[payload.key] = payload.value
        },
    },
})
