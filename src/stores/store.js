import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
    state: () => {
        return {
            stepIndex: 0,
            steps: [
                'welcome-to-study',
                'informed-consent',
                'demographic-questions',
                'labelling-instruction',
                'labelling-trial',
                'study-instruction',
                'study-trial',
                'ai-insights',
                'debrief',
                'results',
            ],
            userInput: {
                userID: null,
                "created-on": null,
                "consent-accepted": null,
                "user-taken-test-before": null,
                "user-age": null,
                "user-education": null,
                "user-gender": null,
                "user-english-proficiency": null,
                "user-ml-knowledge": null,
                "user-cookie-consent": null,
            },
            AI_error_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            AI_truth_ids: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,27, 28, 29, 30],
            labelling_ids: [],
            study_ids: [],
            labelling_answer0: null,
            labelling_answer1: null,
            labelling_answer2: null,
            labelling_answer3: null,
            labelling_answer4: null,
            labelling_answer5: null,
            labelling_answer6: null,
            labelling_answer7: null,
            labelling_answer8: null,
            labelling_answer9: null,
            aiInsights: {
                "ai-included-decision": null,
                "ai-use-prediction": null,
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
            return state.userInput['consent-accepted'];
        },
        getUserTakenTestBefore(state) {
            return state.userInput['user-taken-test-before'];
        },
        getUserAge(state) {
            return state.userInput['user-age'];
        },
        getUserEducation(state) {
            return state.userInput['user-education'];
        },
        getUserGender(state) {
            return state.userInput['user-gender'];
        },
        getUserEnglishProficiency(state) {
            return state.userInput['user-english-proficiency'];
        },
        getUserMLKnowledge(state) {
            return state.userInput['user-ml-knowledge'];
        },
        getUserCookieConsent(state) {
            return state.userInput['user-cookie-consent'];
        },
        getAiIncludedDecision(state) {
            return state.aiInsights['ai-included-decision'];
        },
        getAiUsePrediction(state) {
            return state.aiInsights['ai-use-prediction'];
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
        getAiErrorIds(state) {
            return state['AI_error_ids'];
        },
        getAiTruthIds(state) {
            return state['AI_truth_ids'];
        },
        getLabellingIds(state) {
            return state['labelling_ids'];
        },
        getStudyIds(state) {
            return state['study_ids'];
        },
    },
    actions: {
        // Restarts the study
        restartStudy(state) {
            state.stepIndex = 0;
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
        distributeIds(state) {
            this.shuffle(state.AI_error_ids);
            state.labelling_ids = state.AI_error_ids.slice(0, 10);
            state.study_ids = state.AI_error_ids.slice(10, state.AI_error_ids.length);
            state.AI_truth_ids.forEach(function(id) {
                console.log("entered");
                state.study_ids.push(id);
            });
            this.shuffle(state.study_ids);
        },
        /**
         * Shuffles array in place.
         */
        shuffle(arr) {
            let j, x, index;
            for (index = arr.length - 1; index > 0; index--) {
                j = Math.floor(Math.random() * (index + 1));
                x = arr[index];
                arr[index] = arr[j];
                arr[j] = x;
            }
             return arr;
        },

        // Saves answers to answer object
        setUserInput(state, payload) {
            // console.log(payload)
            state.userInput[payload.key] = payload.value
        },
    },
})
