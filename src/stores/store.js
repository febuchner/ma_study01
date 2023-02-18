import {defineStore} from 'pinia'
import { ConfusionMatrix } from 'ml-confusion-matrix';

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
            AI_truth_ids: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
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
            bias: {
                f_true_labels: [],
                m_true_labels: [],
                f_pred_labels: [],
                m_pred_labels: [],
                gap: [],
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
            let timestamp = state.timestamps;
            timestamp[step] = new Date(Date.now()).toLocaleString("de-DE");

            state.trial_index++;
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
            state.AI_truth_ids.forEach(function (id) {
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
        saveLabelsForCM(state, name, item) {
            if (item['gender'] === 'F') {
                state.bias['f_true_labels'].push(item['title']);
                state.bias['f_pred_labels'].push(state[name]);
            } else {
                state.bias['m_true_labels'].push(item['title']);
                state.bias['m_pred_labels'].push(state[name]);
            }

            console.log(item);

        },
        calculateBias(state) {
            state.bias['f_true_labels'] = [0,0,0,2,0,0,0,0,1,3,0];
            state.bias['m_true_labels'] = [0,0,1,1,4,1,1,1,0,0,0,1,4,0,0,0,1,3,0];
            state.bias['f_pred_labels'] = [2,0,3,4,1,2,4,1,1,4,0];
            state.bias['m_pred_labels'] = [0,1,3,4,1,2,0,3,0,2,3,4,0,2,3,1,2,3,4];
            // The order of the arguments has to be (trueLabels, predictedLabels) !!!
            let f_confmatrix = ConfusionMatrix.fromLabels(state.bias['f_true_labels'], state.bias['f_pred_labels']);
            let m_confmatrix = ConfusionMatrix.fromLabels(state.bias['m_true_labels'], state.bias['m_pred_labels']);

            let all_professions = [...state.bias['f_true_labels'], ...state.bias['m_true_labels']];
            let num_professions = [...new Set(all_professions)].sort();

            let f_tpr_pro_profession = [];
            let m_tpr_pro_profession = [];

            // female by profession
            for (let profession in num_professions) {
                f_tpr_pro_profession.push(f_confmatrix.getTruePositiveRate(num_professions[profession]));
            }

            // male by profession
            for (let profession in num_professions) {
                m_tpr_pro_profession.push(m_confmatrix.getTruePositiveRate(num_professions[profession]));
            }

            // calculate f_m-gaps by profession
            for (let profession in num_professions) {
               state['bias']['gap'].push(f_tpr_pro_profession[profession] - m_tpr_pro_profession[profession]);
            }

            // calculate overall f_m_gap
            let filtered_f_tpr_pro_profession = f_tpr_pro_profession.filter(Boolean)
            let sum_f_tpr_pro_profession = filtered_f_tpr_pro_profession.reduce((x, y) => {
                return x + y;
            });
            let all_f_tpr = sum_f_tpr_pro_profession / filtered_f_tpr_pro_profession.length;

            let filtered_m_tpr_pro_profession = m_tpr_pro_profession.filter(Boolean)
            let sum_m_tpr_pro_profession = filtered_m_tpr_pro_profession.reduce((x, y) => {
                return x + y;
            });
            let all_m_tpr = sum_m_tpr_pro_profession / filtered_m_tpr_pro_profession.length;

            state['bias']['gap'].push(all_f_tpr - all_m_tpr);
        },
    },
})
