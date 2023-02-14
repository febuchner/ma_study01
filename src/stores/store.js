import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
    state: () => {
        return {
            stepIndex: 0,
            trial_index: 0,
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
            labelling_items: [],
            study_ids: [],
            study_items: [],
            study_condition: null,
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
            study_answer0: null,
            study_answer1: null,
            study_answer2: null,
            study_answer3: null,
            study_answer4: null,
            study_answer5: null,
            study_answer6: null,
            study_answer7: null,
            study_answer8: null,
            study_answer9: null,
            study_answer10: null,
            study_answer11: null,
            study_answer12: null,
            study_answer13: null,
            study_answer14: null,
            study_answer15: null,
            study_answer16: null,
            study_answer17: null,
            study_answer18: null,
            study_answer19: null,
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
            timestamps: {},
            street: "Baker Street",
            housenumber: "221b",
            city: "London",
        };
    },
    getters: {
        getCurrentStep(state) {
            return state.steps[state.stepIndex];
        },
        getCurrentTrialStep(state) {
            return state.steps[state.trial_index];
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
        getLabellingItems(state) {
            return state['labelling_items'];
        },
        getStudyIds(state) {
            return state['study_ids'];
        },
        getStudyCondition(state) {
            return state['study_condition'];
        }
    },
    actions: {
        // Restarts the study
        restartStudy(state) {
            state.stepIndex = 0;
        },
        nextTrialStep(state) {
            // Log Timestamp
            let step = state.stepIndex + '-' + state.trial_index + '-' + state.steps[state.stepIndex];
            console.log(step);
            let timestamp = state.timestamps;
            timestamp[step] = new Date(Date.now()).toLocaleString("de-DE");

            state.trial_index ++;
        },
        resetTrialStep(state) {
            state.trial_index = 0;
        },
        // Goes to next component
        nextStep(state, stepsToGo) {
            // Scroll to top
            window.scrollTo(0, 0)

            // Log Timestamp
            let step = state.stepIndex + '-' + state.steps[state.stepIndex];
            let timestamp = state.timestamps;
            timestamp[step] = new Date(Date.now()).toLocaleString("de-DE");

            // Update screen
            state.stepIndex += stepsToGo

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
                state.study_ids.push(id);
            });
            this.shuffle(state.study_ids);
        },
        decideStudyCondition(state) {
            state.study_condition = Math.random() < 0.5 ? 'with_explanation_highlights' : 'without_explanation_highlights';
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
    },
})
