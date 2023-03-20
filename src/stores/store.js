import {defineStore} from 'pinia';
import {ConfusionMatrix} from 'ml-confusion-matrix';
import {collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import {db} from '@/firebase/firebase';

export const useStore = defineStore('store', {
    state: () => {
        return {
            isDebug: true,
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
                "consent-accepted": null,
                "user-taken-test-before": null,
                "user-age": null,
                "user-education": null,
                "user-gender": null,
                "user-english-proficiency": null,
                "user-ml-knowledge": null,
                "user-cookie-consent": null,
            },
            AI_error_ids: [1398, 3588, 750, 3147, 4831, 1034, 4468, 225, 99, 15967, 993, 203, 552, 1458], // #14
            AI_truth_ids: [27, 70, 306, 325, 2, 682, 3754, 15, 19, 103, 44, 297, 357, 116, 201, 71], //#16
            labelling_ids: [],
            labelling_items: [],
            study_ids: [],
            study_items: [],
            study_condition: null,
            labelling_answers: {
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
            },
            study_answers: {
                study_answer00: null,
                study_answer01: null,
                study_answer02: null,
                study_answer03: null,
                study_answer04: null,
                study_answer05: null,
                study_answer06: null,
                study_answer07: null,
                study_answer08: null,
                study_answer09: null,
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
            },
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
                gap: [NaN, NaN, NaN, NaN, NaN, NaN],
                gap_labinthewild: [],
            },
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
        async initParticipant(state) {
            // Create
            const collectionName = state.isDebug ? "debug" : "production";
            const colRef = collection(db, collectionName);
            const docRef = await addDoc(colRef, this.$state);
            state.userInput.userID = docRef.id;
            // TODO: Remove before golive
            console.log("document id: "+ docRef.id)
        },
        async updateDB(state) {
            const collectionName = state.isDebug ? "debug" : "production";

            const docRef = doc(db, collectionName, state.userInput.userID);
            await updateDoc(docRef, this.$state);
        },
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
        saveLabelsForCM(state, answer, name, item) {
            if (item['gender'] === 'F') {
                state.bias['f_true_labels'].push(item['title']);
                state.bias['f_pred_labels'].push(state[answer][name]);
            } else {
                state.bias['m_true_labels'].push(item['title']);
                state.bias['m_pred_labels'].push(state[answer][name]);
            }
        },
        calculateBias(state) {
            // The order of the arguments has to be (trueLabels, predictedLabels) !!!
            let f_confmatrix = ConfusionMatrix.fromLabels(state.bias['f_true_labels'], state.bias['f_pred_labels']);
            let m_confmatrix = ConfusionMatrix.fromLabels(state.bias['m_true_labels'], state.bias['m_pred_labels']);

            let all_professions = [...state.bias['f_true_labels'], ...state.bias['m_true_labels']];
            let num_professions = [...new Set(all_professions)].sort();

            let f_tpr_pro_profession = [NaN, NaN, NaN, NaN, NaN];
            let m_tpr_pro_profession = [NaN, NaN, NaN, NaN, NaN];

            // female by profession
            for (let profession in num_professions) {
                switch (profession) {
                    case "0":
                        f_tpr_pro_profession[0] = f_confmatrix.getTruePositiveRate(0);
                        break;
                    case "1":
                        f_tpr_pro_profession[1] = f_confmatrix.getTruePositiveRate(1);
                        break;
                    case "2":
                        f_tpr_pro_profession[2] = f_confmatrix.getTruePositiveRate(2);
                        break;
                    case "3":
                        f_tpr_pro_profession[3] = f_confmatrix.getTruePositiveRate(3);
                        break;
                    case "4":
                        f_tpr_pro_profession[4] = f_confmatrix.getTruePositiveRate(4);
                        break;
                }
            }

            // male by profession
            for (let profession in num_professions) {
                switch (profession) {
                    case "0":
                        m_tpr_pro_profession[0] = m_confmatrix.getTruePositiveRate(0);
                        break;
                    case "1":
                        m_tpr_pro_profession[1] = m_confmatrix.getTruePositiveRate(1);
                        break;
                    case "2":
                        m_tpr_pro_profession[2] = m_confmatrix.getTruePositiveRate(2);
                        break;
                    case "3":
                        m_tpr_pro_profession[3] = m_confmatrix.getTruePositiveRate(3);
                        break;
                    case "4":
                        m_tpr_pro_profession[4] = m_confmatrix.getTruePositiveRate(4);
                        break;
                }
            }

            // calculate f_m_gaps by profession
            for (let profession in num_professions) {
                switch (profession) {
                    case "0":
                        state['bias']['gap'][0] = (f_tpr_pro_profession[0] - m_tpr_pro_profession[0]);
                        break;
                    case "1":
                        state['bias']['gap'][1] = (f_tpr_pro_profession[1] - m_tpr_pro_profession[1]);
                        break;
                    case "2":
                        state['bias']['gap'][2] = (f_tpr_pro_profession[2] - m_tpr_pro_profession[2]);
                        break;
                    case "3":
                        state['bias']['gap'][3] = (f_tpr_pro_profession[3] - m_tpr_pro_profession[3]);
                        break;
                    case "4":
                        state['bias']['gap'][4] = (f_tpr_pro_profession[4] - m_tpr_pro_profession[4]);
                        break;
                }
            }

            // calculate overall f_m_gap
            let filtered_f_tpr_pro_profession = f_tpr_pro_profession.filter(function (value) {
                return !Number.isNaN(value);
            });
            let filtered_m_tpr_pro_profession = m_tpr_pro_profession.filter(function (value) {
                return !Number.isNaN(value);
            });

            if (!(filtered_f_tpr_pro_profession.length === 0) && !(filtered_m_tpr_pro_profession.length === 0)) {
                let sum_f_tpr_pro_profession = filtered_f_tpr_pro_profession.reduce((x, y) => {
                    return x + y;
                });
                let all_f_tpr = sum_f_tpr_pro_profession / filtered_f_tpr_pro_profession.length;

                let sum_m_tpr_pro_profession = filtered_m_tpr_pro_profession.reduce((x, y) => {
                    return x + y;
                });
                let all_m_tpr = sum_m_tpr_pro_profession / filtered_m_tpr_pro_profession.length;

                state['bias']['gap'][5] = (all_f_tpr - all_m_tpr);
            }
        },
        async litwBias(state) {
            // Get bias from litw_bias document in db
            const collectionName = state.isDebug ? "debug" : "production";
            const docRef = doc(db, collectionName, "litw_bias");
            const docSnap = await getDoc(docRef);
            let data = docSnap.data()
            state.bias.gap_labinthewild[0] = data.professor_score / data.professor_usercount;
            state.bias.gap_labinthewild[1] = data.physician_score / data.physician_usercount;
            state.bias.gap_labinthewild[2] = data.psychologist_score / data.psychologist_usercount;
            state.bias.gap_labinthewild[3] = data.teacher_score / data.teacher_usercount;
            state.bias.gap_labinthewild[4] = data.surgeon_score / data.surgeon_usercount;
            state.bias.gap_labinthewild[5] = data.average_score / data.average_usercount;

            // Add new bias to litw_bias document in db
            await updateDoc(docRef, {
                professor_score: this.generateNewLITWGapScore(state.bias.gap[0], data.professor_score),
                professor_usercount: this.generateNewLITWGapUserCount(state.bias.gap[0],data.professor_usercount),
                physician_score: this.generateNewLITWGapScore(state.bias.gap[1], data.physician_score),
                physician_usercount: this.generateNewLITWGapUserCount(state.bias.gap[1],data.physician_usercount),
                psychologist_score: this.generateNewLITWGapScore(state.bias.gap[2], data.psychologist_score),
                psychologist_usercount: this.generateNewLITWGapUserCount(state.bias.gap[2],data.psychologist_usercount),
                teacher_score: this.generateNewLITWGapScore(state.bias.gap[3], data.teacher_score),
                teacher_usercount: this.generateNewLITWGapUserCount(state.bias.gap[3],data.teacher_usercount),
                surgeon_score: this.generateNewLITWGapScore(state.bias.gap[4], data.surgeon_score),
                surgeon_usercount: this.generateNewLITWGapUserCount(state.bias.gap[4],data.surgeon_usercount),
                average_score: this.generateNewLITWGapScore(state.bias.gap[5], data.average_score),
                average_usercount: this.generateNewLITWGapUserCount(state.bias.gap[5],data.average_usercount),
            });


        },
        generateNewLITWGapScore(user_gap, old_avg_gap_score) {
            let score;
            if (isFinite(user_gap)) {
                return score = old_avg_gap_score + user_gap;
            } else {
                return score = old_avg_gap_score;
            }
        },
        generateNewLITWGapUserCount(user_gap, old_avg_gap_usercount) {
            let usercount;
            if (isFinite(user_gap)) {
                return usercount = old_avg_gap_usercount + 1;
            } else {
                return usercount = old_avg_gap_usercount;
            }
        },
    },
})
