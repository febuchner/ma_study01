import {defineStore} from 'pinia';
import {ConfusionMatrix} from 'ml-confusion-matrix';
import {collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import {db} from '@/firebase/firebase';

export const useStore = defineStore('store', {
    state: () => {
        return {
            isDebug: false,
            stepIndex: 0,
            trial_index: 0,
            steps: [
                'welcome-to-study',
                'study-reentering',
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
            attentionCheck: {
                attentionCheck01: null,
                attentionCheck02: null,
                attentionCheck03: null,
            },
            userInput: {
                userID: null,
                userProlificID: null,
                "consent-accepted": null,
                "user-taken-test-before": null,
                "user-age": null,
                "user-education": null,
                "user-gender": null,
                "user-ml-knowledge": null,
                "user-ai-attitude": null,
                "user-cookie-consent": null,
            },
            AI_error_ids: [1398, 3588, 750, 3147, 4831, 1034, 4468, 225, 99, 15967, 993, 203, 552, 1458], // #14
            AI_truth_ids: [70, 306, 325, 2, 682, 3754, 15, 19, 44, 297, 357, 116, 201, 71], //#14 excluded 27, 103
            AI_check_ids: [27224, 27225], //#2
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
            labelling_pairs: {
                labelling_round0: {
                    id: null,
                    user_answer: null,
                },
                labelling_round1: {
                    id: null,
                    user_answer: null,
                },
                labelling_round2: {
                    id: null,
                    user_answer: null,
                },
                labelling_round3: {
                    id: null,
                    user_answer: null,
                },
                labelling_round4: {
                    id: null,
                    user_answer: null,
                },
                labelling_round5: {
                    id: null,
                    user_answer: null,
                },
                labelling_round6: {
                    id: null,
                    user_answer: null,
                },
                labelling_round7: {
                    id: null,
                    user_answer: null,
                },
                labelling_round8: {
                    id: null,
                    user_answer: null,
                },
                labelling_round9: {
                    id: null,
                    user_answer: null,
                },
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
                "ai-use-prediction": null,
                ai_error_sample_00: {
                    ai_error_id: null,
                    user_answer_same_as_ai: null,
                    user_answer: null,
                    ai_prediction_consideration: null,
                    other_answer_consideration: null,
                    why_choose_answer: null,
                },
                ai_error_sample_01: {
                    ai_error_id: null,
                    user_answer_same_as_ai: null,
                    user_answer: null,
                    ai_prediction_consideration: null,
                    other_answer_consideration: null,
                    why_choose_answer: null,
                },
                ai_error_sample_02: {
                    ai_error_id: null,
                    user_answer_same_as_ai: null,
                    user_answer: null,
                    ai_prediction_consideration: null,
                    other_answer_consideration: null,
                    why_choose_answer: null,
                },
                ai_error_sample_03: {
                    ai_error_id: null,
                    user_answer_same_as_ai: null,
                    user_answer: null,
                    ai_prediction_consideration: null,
                    other_answer_consideration: null,
                    why_choose_answer: null,
                },
                ai_error_sample_04: {
                    ai_error_id: null,
                    user_answer_same_as_ai: null,
                    user_answer: null,
                    ai_prediction_consideration: null,
                    other_answer_consideration: null,
                    why_choose_answer: null,
                },

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
                true_labels: [],
                pred_labels: [],
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
        getUserProlificID(state) {
            return state.userInput['userProlificID'];
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
        getUserMLKnowledge(state) {
            return state.userInput['user-ml-knowledge'];
        },
        getUserAIAttitude(state) {
            return state.userInput['user-ai-attitude'];
        },
        getUserCookieConsent(state) {
            return state.userInput['user-cookie-consent'];
        },
        getAiUsePrediction(state) {
            return state.aiInsights['ai-use-prediction'];
        },
        getUseConsiderationAIErrorSample00(state) {
            return state.aiInsights.ai_error_sample_00['ai_prediction_consideration'];
        },
        getUserAnswerSameAsAIAtAIErrorSample00(state) {
            return state.aiInsights.ai_error_sample_00['user_answer_same_as_ai'];
        },
        getOtherAnswerConsiderationAtAIErrorSample00(state) {
            return state.aiInsights.ai_error_sample_00['other_answer_consideration'];
        },
        getWhyChooseAnswerAtAIErrorSample00(state) {
            return state.aiInsights.ai_error_sample_00['why_choose_answer'];
        },
        getUseConsiderationAIErrorSample01(state) {
            return state.aiInsights.ai_error_sample_01['ai_prediction_consideration'];
        },
        getUserAnswerSameAsAIAtAIErrorSample01(state) {
            return state.aiInsights.ai_error_sample_01['user_answer_same_as_ai'];
        },
        getOtherAnswerConsiderationAtAIErrorSample01(state) {
            return state.aiInsights.ai_error_sample_01['other_answer_consideration'];
        },
        getWhyChooseAnswerAtAIErrorSample01(state) {
            return state.aiInsights.ai_error_sample_01['why_choose_answer'];
        },
        getUseConsiderationAIErrorSample02(state) {
            return state.aiInsights.ai_error_sample_02['ai_prediction_consideration'];
        },
        getUserAnswerSameAsAIAtAIErrorSample02(state) {
            return state.aiInsights.ai_error_sample_02['user_answer_same_as_ai'];
        },
        getOtherAnswerConsiderationAtAIErrorSample02(state) {
            return state.aiInsights.ai_error_sample_02['other_answer_consideration'];
        },
        getWhyChooseAnswerAtAIErrorSample02(state) {
            return state.aiInsights.ai_error_sample_02['why_choose_answer'];
        },
        getUseConsiderationAIErrorSample03(state) {
            return state.aiInsights.ai_error_sample_03['ai_prediction_consideration'];
        },
        getUserAnswerSameAsAIAtAIErrorSample03(state) {
            return state.aiInsights.ai_error_sample_03['user_answer_same_as_ai'];
        },
        getOtherAnswerConsiderationAtAIErrorSample03(state) {
            return state.aiInsights.ai_error_sample_03['other_answer_consideration'];
        },
        getWhyChooseAnswerAtAIErrorSample03(state) {
            return state.aiInsights.ai_error_sample_03['why_choose_answer'];
        },
        getUseConsiderationAIErrorSample04(state) {
            return state.aiInsights.ai_error_sample_04['ai_prediction_consideration'];
        },
        getUserAnswerSameAsAIAtAIErrorSample04(state) {
            return state.aiInsights.ai_error_sample_04['user_answer_same_as_ai'];
        },
        getOtherAnswerConsiderationAtAIErrorSample04(state) {
            return state.aiInsights.ai_error_sample_04['other_answer_consideration'];
        },
        getWhyChooseAnswerAtAIErrorSample04(state) {
            return state.aiInsights.ai_error_sample_04['why_choose_answer'];
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
        },
        getAttentionCheck01(state) {
            return state.attentionCheck['attentionCheck01'];
        },
        getAttentionCheck02(state) {
            return state.attentionCheck['attentionCheck02'];
        },
        getAttentionCheck03(state) {
            return state.attentionCheck['attentionCheck03'];
        },
        getUserAccuracy(state){
            return state.bias['acc'];
        },
    },
    actions: {
        async initParticipant(state) {
            // Create
            const collectionName = state.isDebug ? "debug" : "production";
            const colRef = collection(db, collectionName);
            const docRef = await addDoc(colRef, this.$state);
            state.userInput.userID = docRef.id;
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
            state.study_ids = [];
            state.labelling_ids = [];

            this.shuffle(state.AI_error_ids);
            this.shuffle(state.AI_truth_ids);
            this.shuffle(state.AI_check_ids);


            let n = 0;
            while (n <= 8) {
                state.labelling_ids.push(state.AI_error_ids[n]);
                n++;
            }

            let q = 0;
            while (q <= 0) {
                state.labelling_ids.push(state.AI_check_ids[q]);
                q++;
            }

            let m = 9;
            while (m <= 13) {
                state.study_ids.push(state.AI_error_ids[m]);
                m++;
            }

            let p = 0;
            while (p <= 13) {
                state.study_ids.push(state.AI_truth_ids[p]);
                p++;
            }

            let r = 1;
            while (r <= 1) {
                state.study_ids.push(state.AI_check_ids[r]);
                r++;
            }

            this.shuffle(state.labelling_ids);
            this.shuffle(state.study_ids);
        },
        decideStudyCondition(state) {
            state.study_condition = Math.random() < 0.5 ? 'with_explanation_highlights' : 'without_explanation_highlights';
        },
        /**
         * Shuffles array in place.
         */
        shuffle(arr) {
            arr.sort(() => Math.random() - 0.5);
            return arr;
        },
        saveLabels(state, answer, name, item) {
            state.bias['true_labels'].push(item['title']);
            state.bias['pred_labels'].push(state[answer][name]);
        },
        calcNumbCorrectAnswers(state){
            // The order of the arguments has to be (trueLabels, predictedLabels) !!!
            let confmatrix = ConfusionMatrix.fromLabels(state.bias['true_labels'], state.bias['pred_labels']);
            let acc = confmatrix.getAccuracy();
            acc = acc * 30;
            if (state.attentionCheck.attentionCheck01 === true) {
                acc--;
            }
            if (state.attentionCheck.attentionCheck01 === true) {
                acc--;
            }
            state.bias['acc'] = acc;
        },
        calculateBias(state) {
            // The order of the arguments has to be (trueLabels, predictedLabels) !!!
            let f_confmatrix = ConfusionMatrix.fromLabels(state.bias['f_true_labels'], state.bias['f_pred_labels']);
            let m_confmatrix = ConfusionMatrix.fromLabels(state.bias['m_true_labels'], state.bias['m_pred_labels']);

            let total_true_labels = state.bias['f_true_labels'].concat(state.bias['m_true_labels']);
            let total_pred_labels = state.bias['f_pred_labels'].concat(state.bias['m_pred_labels']);
            let total_confmatrix = ConfusionMatrix.fromLabels(total_true_labels, total_pred_labels);

            let f_acc = f_confmatrix.getAccuracy();
            let m_acc = m_confmatrix.getAccuracy();
            let total_acc = total_confmatrix.getAccuracy();

            state['bias']['acc'][0] = total_acc * 100;
            state['bias']['acc'][1] = f_acc * 100;
            state['bias']['acc'][2] = m_acc * 100;

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

            state.bias.acc_labinthewild[0] = data.total_acc / data.total_acc_usercount;
            state.bias.acc_labinthewild[1] = data.female_acc / data.female_acc_usercount;
            state.bias.acc_labinthewild[2] = data.male_acc / data.male_acc_usercount;

            // Add new bias to litw_bias document in db
            await updateDoc(docRef, {
                professor_score: this.updateLitwResult(state.bias.gap[0], data.professor_score),
                professor_usercount: this.updateLitwUsercount(state.bias.gap[0], data.professor_usercount),
                physician_score: this.updateLitwResult(state.bias.gap[1], data.physician_score),
                physician_usercount: this.updateLitwUsercount(state.bias.gap[1], data.physician_usercount),
                psychologist_score: this.updateLitwResult(state.bias.gap[2], data.psychologist_score),
                psychologist_usercount: this.updateLitwUsercount(state.bias.gap[2], data.psychologist_usercount),
                teacher_score: this.updateLitwResult(state.bias.gap[3], data.teacher_score),
                teacher_usercount: this.updateLitwUsercount(state.bias.gap[3], data.teacher_usercount),
                surgeon_score: this.updateLitwResult(state.bias.gap[4], data.surgeon_score),
                surgeon_usercount: this.updateLitwUsercount(state.bias.gap[4], data.surgeon_usercount),
                average_score: this.updateLitwResult(state.bias.gap[5], data.average_score),
                average_usercount: this.updateLitwUsercount(state.bias.gap[5], data.average_usercount),

                total_acc: this.updateLitwResult(state.bias.acc[0], data.total_acc),
                total_acc_usercount: this.updateLitwUsercount(state.bias.acc[0], data.total_acc_usercount),
                female_acc: this.updateLitwResult(state.bias.acc[1], data.female_acc),
                female_acc_usercount: this.updateLitwUsercount(state.bias.acc[1], data.female_acc_usercount),
                male_acc: this.updateLitwResult(state.bias.acc[2], data.male_acc),
                male_acc_usercount: this.updateLitwUsercount(state.bias.acc[2], data.male_acc_usercount),
            });


        },
        updateLitwResult(value, old_result) {
            let result;
            if (isFinite(value)) {
                return result = old_result + value;
            } else {
                return result = old_result;
            }
        },
        updateLitwUsercount(value, old_usercount) {
            let usercount;
            if (isFinite(value)) {
                return usercount = old_usercount + 1;
            } else {
                return usercount = old_usercount;
            }
        },
        getAIErrorSamplesIndicesOfStudyTrial(state) {
            let aiErrorSamplesIndices = [];
            state.AI_error_ids.forEach(function (element) {
                    if (state.study_ids.includes(element)) {
                        aiErrorSamplesIndices.push(state.study_ids.indexOf(element));
                    }
                }
            );
            aiErrorSamplesIndices.sort(function (a, b) {
                return a - b;
            });
            state.aiInsights.ai_error_sample_00.ai_error_id = state.study_ids[aiErrorSamplesIndices[0]];
            state.aiInsights.ai_error_sample_01.ai_error_id = state.study_ids[aiErrorSamplesIndices[1]];
            state.aiInsights.ai_error_sample_02.ai_error_id = state.study_ids[aiErrorSamplesIndices[2]];
            state.aiInsights.ai_error_sample_03.ai_error_id = state.study_ids[aiErrorSamplesIndices[3]];
            state.aiInsights.ai_error_sample_04.ai_error_id = state.study_ids[aiErrorSamplesIndices[4]];

            state.aiInsights.ai_error_sample_00.user_answer = Object.values(state.study_answers)[aiErrorSamplesIndices[0]]
            state.aiInsights.ai_error_sample_01.user_answer = Object.values(state.study_answers)[aiErrorSamplesIndices[1]]
            state.aiInsights.ai_error_sample_02.user_answer = Object.values(state.study_answers)[aiErrorSamplesIndices[2]]
            state.aiInsights.ai_error_sample_03.user_answer = Object.values(state.study_answers)[aiErrorSamplesIndices[3]]
            state.aiInsights.ai_error_sample_04.user_answer = Object.values(state.study_answers)[aiErrorSamplesIndices[4]]

            this.userSameAnswerAsPrediction(state, aiErrorSamplesIndices[0], 'ai_error_sample_00');
            this.userSameAnswerAsPrediction(state, aiErrorSamplesIndices[1], 'ai_error_sample_01');
            this.userSameAnswerAsPrediction(state, aiErrorSamplesIndices[2], 'ai_error_sample_02');
            this.userSameAnswerAsPrediction(state, aiErrorSamplesIndices[3], 'ai_error_sample_03');
            this.userSameAnswerAsPrediction(state, aiErrorSamplesIndices[4], 'ai_error_sample_04');

            return aiErrorSamplesIndices;
        },

        getLabellingPairs(state) {
            state.labelling_pairs.labelling_round0.id = state.labelling_ids[0];
            state.labelling_pairs.labelling_round1.id = state.labelling_ids[1];
            state.labelling_pairs.labelling_round2.id = state.labelling_ids[2];
            state.labelling_pairs.labelling_round3.id = state.labelling_ids[3];
            state.labelling_pairs.labelling_round4.id = state.labelling_ids[4];
            state.labelling_pairs.labelling_round5.id = state.labelling_ids[5];
            state.labelling_pairs.labelling_round6.id = state.labelling_ids[6];
            state.labelling_pairs.labelling_round7.id = state.labelling_ids[7];
            state.labelling_pairs.labelling_round8.id = state.labelling_ids[8];
            state.labelling_pairs.labelling_round9.id = state.labelling_ids[9];

            state.labelling_pairs.labelling_round0.user_answer = state.labelling_answers.labelling_answer0;
            state.labelling_pairs.labelling_round1.user_answer = state.labelling_answers.labelling_answer1;
            state.labelling_pairs.labelling_round2.user_answer = state.labelling_answers.labelling_answer2;
            state.labelling_pairs.labelling_round3.user_answer = state.labelling_answers.labelling_answer3;
            state.labelling_pairs.labelling_round4.user_answer = state.labelling_answers.labelling_answer4;
            state.labelling_pairs.labelling_round5.user_answer = state.labelling_answers.labelling_answer5;
            state.labelling_pairs.labelling_round6.user_answer = state.labelling_answers.labelling_answer6;
            state.labelling_pairs.labelling_round7.user_answer = state.labelling_answers.labelling_answer7;
            state.labelling_pairs.labelling_round8.user_answer = state.labelling_answers.labelling_answer8;
            state.labelling_pairs.labelling_round9.user_answer = state.labelling_answers.labelling_answer9;
        },

        getAttentionChecks(state) {
            let aiCheckIndicesFromLabelling;
            let aiCheckIndicesFromStudy;
            state.AI_check_ids.forEach(function (element) {
                if (state.labelling_ids.includes(element)) {
                    aiCheckIndicesFromLabelling = state.labelling_ids.indexOf(element);
                }
                if (state.study_ids.includes(element)) {
                    aiCheckIndicesFromStudy = state.study_ids.indexOf(element);
                }
            });

            state.attentionCheck.attentionCheck01 = state.labelling_items[aiCheckIndicesFromLabelling]['title'] === Object.values(state.labelling_answers)[aiCheckIndicesFromLabelling];
            state.attentionCheck.attentionCheck02 = state.study_items[aiCheckIndicesFromStudy]['title'] === Object.values(state.study_answers)[aiCheckIndicesFromStudy];
        },

        userSameAnswerAsPrediction(state, index, storeposition) {
            state.aiInsights[storeposition]['user_answer_same_as_ai'] = state.study_items[index]['prediction'] === Object.values(state.study_answers)[index];
        },
    },
})
