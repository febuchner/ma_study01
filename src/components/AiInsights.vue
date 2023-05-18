<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'ai-insights'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Your thoughts on our AI! </h1>
          <p>
            <span>
              Please let us know what you thought of our AI!<br>
              <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
            </span>
          </p>
        </div>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            Describe with only a few words how you used the support of our AI in your decision making!<span
              class="text-danger fw-bolder">*</span>
          </template>
          <b-form-textarea v-model="aiUsePrediction" rows="2"
                           placeholder="Please enter your thoughts."></b-form-textarea>
        </b-form-group>

        <h5 class="mt-5 mb-3">Well done! You can now go to the next page as the questions below are optional.
          <br>
          But if you want to help us even more with our experiment, we would be really happy if you could take a little
          time to answer the questions below.
          Thank you!
        </h5>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please answer all required fields of the form first.
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-3 mb-5">
          Next
          <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </button>

        <h5 class="mt-3">These are the optional questions.</h5>

        <div v-for="(n,index) in this.AIErrorSampleIds" class="pb-2">
          <div v-if="index === 0">
            <p class="mb-2">Please read the following short biography from the previous study part again and answer the
              questions.</p>
            <div class="card mb-4">
              <div class="col-12 bg-profession text-center mb-3 px-4 py-4">
                <div v-if="this.store.study_condition === 'with_explanation_highlights'">
                  <h2>
                    <div v-html="this.AIErrorSamples[n]['explanations_html']" class="quotation"></div>
                  </h2>
                </div>
                <div v-else>
                  <h2 class="quotation">{{ this.AIErrorSamples[n]['raw'] }}</h2>
                </div>
                <hr>
                <div class="ps-3 py-2 text-start">
                  <h5>Our AI's profession prediction: {{ this.AIErrorSamples[n]['pred_profession'] }}</h5>
                  <h5>Your profession prediction:
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 0">professor</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 1">physician</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 2">psychologist</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 3">teacher</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 4">surgeon</span>

                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 0">professor</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 1">physician</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 2">psychologist</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 3">teacher</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 4">surgeon</span>

                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 0">professor</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 1">physician</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 2">psychologist</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 3">teacher</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 4">surgeon</span>

                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 0">professor</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 1">physician</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 2">psychologist</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 3">teacher</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 4">surgeon</span>

                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 0">professor</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 1">physician</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 2">psychologist</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 3">teacher</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 4">surgeon</span>

                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 0">professor</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 1">physician</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 2">psychologist</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 3">teacher</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 4">surgeon</span>

                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 0">professor</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 1">physician</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 2">psychologist</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 3">teacher</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 4">surgeon</span>

                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 0">professor</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 1">physician</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 2">psychologist</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 3">teacher</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 4">surgeon</span>

                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 0">professor</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 1">physician</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 2">psychologist</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 3">teacher</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 4">surgeon</span>

                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 0">professor</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 1">physician</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 2">psychologist</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 3">teacher</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 4">surgeon</span>

                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 0">professor</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 1">physician</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 2">psychologist</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 3">teacher</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 4">surgeon</span>

                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 0">professor</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 1">physician</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 2">psychologist</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 3">teacher</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 4">surgeon</span>

                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 0">professor</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 1">physician</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 2">psychologist</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 3">teacher</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 4">surgeon</span>

                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 0">professor</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 1">physician</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 2">psychologist</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 3">teacher</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 4">surgeon</span>

                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 0">professor</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 1">physician</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 2">psychologist</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 3">teacher</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 4">surgeon</span>

                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 0">professor</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 1">physician</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 2">psychologist</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 3">teacher</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 4">surgeon</span>

                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 0">professor</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 1">physician</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 2">psychologist</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 3">teacher</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 4">surgeon</span>

                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 0">professor</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 1">physician</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 2">psychologist</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 3">teacher</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 4">surgeon</span>

                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 0">professor</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 1">physician</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 2">psychologist</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 3">teacher</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 4">surgeon</span>

                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 0">professor</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 1">physician</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 2">psychologist</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 3">teacher</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 4">surgeon</span>
                  </h5>
                </div>
              </div>

              <LikertScale question="How much did you consider this AI prediction in your decision making?"
                           likert_name="null_likert_AI_prediction"
                           :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                           ai_error_sample="ai_error_sample_00"
                           likert_level="ai_prediction_consideration"/>

              <div v-if="this.store.getUserAnswerSameAsAIAtAIErrorSample00">
                <LikertScale question="How much did you consider to choose a different answer than the AI prediction?"
                             likert_name="null_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_00"
                             likert_level="other_answer_consideration"/>
              </div>
              <div v-else>
                <LikertScale question="How much did you consider choosing the same answer as the AI prediction?"
                             likert_name="null_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_00"
                             likert_level="other_answer_consideration"/>
              </div>
              <b-form-group
                  class="no-mb"
                  label-class="font-weight-bold"
              >
                <template v-slot:label>
                  Describe with only a few words what made you finally choose your answer!
                </template>
                <b-form-textarea v-model="whyChooseAnswerAtAIErrorSample00" rows="2"
                                 placeholder="Please enter your thoughts.">

                </b-form-textarea>
              </b-form-group>

            </div>
          </div>

          <div v-if="index === 1">
            <p class="mb-2">Please read the following short biography from the previous study part again and answer the
              questions.</p>
            <div class="card mb-4">
              <div class="col-12 bg-profession text-center mb-3 px-4 py-4">
                <div v-if="this.store.study_condition === 'with_explanation_highlights'">
                  <h2>
                    <div v-html="this.AIErrorSamples[n]['explanations_html']" class="quotation"></div>
                  </h2>
                </div>
                <div v-else>
                  <h2 class="quotation">{{ this.AIErrorSamples[n]['raw'] }}</h2>
                </div>
                <hr>
                <div class="ps-3 py-2 text-start">
                  <h5>Our AI's profession prediction: {{ this.AIErrorSamples[n]['pred_profession'] }}</h5>
                  <h5>Your profession prediction:
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 0">professor</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 1">physician</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 2">psychologist</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 3">teacher</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 4">surgeon</span>

                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 0">professor</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 1">physician</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 2">psychologist</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 3">teacher</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 4">surgeon</span>

                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 0">professor</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 1">physician</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 2">psychologist</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 3">teacher</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 4">surgeon</span>

                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 0">professor</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 1">physician</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 2">psychologist</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 3">teacher</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 4">surgeon</span>

                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 0">professor</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 1">physician</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 2">psychologist</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 3">teacher</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 4">surgeon</span>

                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 0">professor</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 1">physician</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 2">psychologist</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 3">teacher</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 4">surgeon</span>

                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 0">professor</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 1">physician</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 2">psychologist</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 3">teacher</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 4">surgeon</span>

                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 0">professor</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 1">physician</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 2">psychologist</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 3">teacher</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 4">surgeon</span>

                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 0">professor</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 1">physician</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 2">psychologist</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 3">teacher</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 4">surgeon</span>

                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 0">professor</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 1">physician</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 2">psychologist</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 3">teacher</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 4">surgeon</span>

                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 0">professor</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 1">physician</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 2">psychologist</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 3">teacher</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 4">surgeon</span>

                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 0">professor</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 1">physician</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 2">psychologist</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 3">teacher</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 4">surgeon</span>

                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 0">professor</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 1">physician</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 2">psychologist</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 3">teacher</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 4">surgeon</span>

                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 0">professor</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 1">physician</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 2">psychologist</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 3">teacher</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 4">surgeon</span>

                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 0">professor</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 1">physician</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 2">psychologist</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 3">teacher</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 4">surgeon</span>

                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 0">professor</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 1">physician</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 2">psychologist</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 3">teacher</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 4">surgeon</span>

                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 0">professor</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 1">physician</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 2">psychologist</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 3">teacher</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 4">surgeon</span>

                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 0">professor</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 1">physician</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 2">psychologist</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 3">teacher</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 4">surgeon</span>

                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 0">professor</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 1">physician</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 2">psychologist</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 3">teacher</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 4">surgeon</span>

                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 0">professor</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 1">physician</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 2">psychologist</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 3">teacher</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 4">surgeon</span>
                  </h5>
                </div>
              </div>

              <LikertScale question="How much did you consider this AI prediction in your decision making?"
                           likert_name="first_likert_AI_prediction"
                           :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                           ai_error_sample="ai_error_sample_01"
                           likert_level="ai_prediction_consideration"/>

              <div v-if="this.store.getUserAnswerSameAsAIAtAIErrorSample01">
                <LikertScale question="How much did you consider to choose a different answer than the AI prediction?"
                             likert_name="first_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_01"
                             likert_level="other_answer_consideration"/>
              </div>
              <div v-else>
                <LikertScale question="How much did you consider choosing the same answer as the AI prediction?"
                             likert_name="first_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_01"
                             likert_level="other_answer_consideration"/>
              </div>
              <b-form-group
                  class="no-mb"
                  label-class="font-weight-bold"
              >
                <template v-slot:label>
                  Describe with only a few words what made you finally choose your answer!
                </template>
                <b-form-textarea v-model="whyChooseAnswerAtAIErrorSample01" rows="2"
                                 placeholder="Please enter your thoughts.">

                </b-form-textarea>
              </b-form-group>

            </div>
          </div>

          <div v-if="index === 2">
            <p class="mb-2">Please read the following short biography from the previous study part again and answer the
              questions.</p>
            <div class="card mb-4">
              <div class="col-12 bg-profession text-center mb-3 px-4 py-4">
                <div v-if="this.store.study_condition === 'with_explanation_highlights'">
                  <h2>
                    <div v-html="this.AIErrorSamples[n]['explanations_html']" class="quotation"></div>
                  </h2>
                </div>
                <div v-else>
                  <h2 class="quotation">{{ this.AIErrorSamples[n]['raw'] }}</h2>
                </div>
                <hr>
                <div class="ps-3 py-2 text-start">
                  <h5>Our AI's profession prediction: {{ this.AIErrorSamples[n]['pred_profession'] }}</h5>
                  <h5>Your profession prediction:
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 0">professor</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 1">physician</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 2">psychologist</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 3">teacher</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 4">surgeon</span>

                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 0">professor</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 1">physician</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 2">psychologist</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 3">teacher</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 4">surgeon</span>

                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 0">professor</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 1">physician</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 2">psychologist</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 3">teacher</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 4">surgeon</span>

                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 0">professor</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 1">physician</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 2">psychologist</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 3">teacher</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 4">surgeon</span>

                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 0">professor</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 1">physician</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 2">psychologist</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 3">teacher</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 4">surgeon</span>

                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 0">professor</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 1">physician</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 2">psychologist</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 3">teacher</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 4">surgeon</span>

                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 0">professor</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 1">physician</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 2">psychologist</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 3">teacher</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 4">surgeon</span>

                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 0">professor</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 1">physician</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 2">psychologist</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 3">teacher</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 4">surgeon</span>

                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 0">professor</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 1">physician</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 2">psychologist</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 3">teacher</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 4">surgeon</span>

                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 0">professor</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 1">physician</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 2">psychologist</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 3">teacher</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 4">surgeon</span>

                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 0">professor</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 1">physician</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 2">psychologist</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 3">teacher</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 4">surgeon</span>

                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 0">professor</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 1">physician</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 2">psychologist</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 3">teacher</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 4">surgeon</span>

                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 0">professor</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 1">physician</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 2">psychologist</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 3">teacher</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 4">surgeon</span>

                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 0">professor</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 1">physician</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 2">psychologist</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 3">teacher</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 4">surgeon</span>

                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 0">professor</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 1">physician</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 2">psychologist</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 3">teacher</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 4">surgeon</span>

                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 0">professor</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 1">physician</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 2">psychologist</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 3">teacher</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 4">surgeon</span>

                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 0">professor</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 1">physician</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 2">psychologist</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 3">teacher</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 4">surgeon</span>

                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 0">professor</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 1">physician</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 2">psychologist</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 3">teacher</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 4">surgeon</span>

                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 0">professor</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 1">physician</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 2">psychologist</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 3">teacher</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 4">surgeon</span>

                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 0">professor</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 1">physician</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 2">psychologist</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 3">teacher</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 4">surgeon</span>
                  </h5>
                </div>
              </div>

              <LikertScale question="How much did you consider this AI prediction in your decision making?"
                           likert_name="second_likert_AI_prediction"
                           :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                           ai_error_sample="ai_error_sample_02"
                           likert_level="ai_prediction_consideration"/>

              <div v-if="this.store.getUserAnswerSameAsAIAtAIErrorSample02">
                <LikertScale question="How much did you consider to choose a different answer than the AI prediction?"
                             likert_name="second_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_02"
                             likert_level="other_answer_consideration"/>
              </div>
              <div v-else>
                <LikertScale question="How much did you consider choosing the same answer as the AI prediction?"
                             likert_name="second_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_02"
                             likert_level="other_answer_consideration"/>
              </div>
              <b-form-group
                  class="no-mb"
                  label-class="font-weight-bold"
              >
                <template v-slot:label>
                  Describe with only a few words what made you finally choose your answer!
                </template>
                <b-form-textarea v-model="whyChooseAnswerAtAIErrorSample02" rows="2"
                                 placeholder="Please enter your thoughts.">

                </b-form-textarea>
              </b-form-group>

            </div>
          </div>

          <div v-if="index === 3">
            <p class="mb-2">Please read the following short biography from the previous study part again and answer the
              questions.</p>
            <div class="card mb-4">
              <div class="col-12 bg-profession text-center mb-3 px-4 py-4">
                <div v-if="this.store.study_condition === 'with_explanation_highlights'">
                  <h2>
                    <div v-html="this.AIErrorSamples[n]['explanations_html']" class="quotation"></div>
                  </h2>
                </div>
                <div v-else>
                  <h2 class="quotation">{{ this.AIErrorSamples[n]['raw'] }}</h2>
                </div>
                <hr>
                <div class="ps-3 py-2 text-start">
                  <h5>Our AI's profession prediction: {{ this.AIErrorSamples[n]['pred_profession'] }}</h5>
                  <h5>Your profession prediction:
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 0">professor</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 1">physician</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 2">psychologist</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 3">teacher</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 4">surgeon</span>

                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 0">professor</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 1">physician</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 2">psychologist</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 3">teacher</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 4">surgeon</span>

                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 0">professor</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 1">physician</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 2">psychologist</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 3">teacher</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 4">surgeon</span>

                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 0">professor</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 1">physician</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 2">psychologist</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 3">teacher</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 4">surgeon</span>

                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 0">professor</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 1">physician</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 2">psychologist</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 3">teacher</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 4">surgeon</span>

                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 0">professor</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 1">physician</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 2">psychologist</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 3">teacher</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 4">surgeon</span>

                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 0">professor</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 1">physician</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 2">psychologist</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 3">teacher</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 4">surgeon</span>

                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 0">professor</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 1">physician</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 2">psychologist</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 3">teacher</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 4">surgeon</span>

                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 0">professor</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 1">physician</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 2">psychologist</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 3">teacher</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 4">surgeon</span>

                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 0">professor</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 1">physician</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 2">psychologist</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 3">teacher</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 4">surgeon</span>

                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 0">professor</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 1">physician</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 2">psychologist</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 3">teacher</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 4">surgeon</span>

                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 0">professor</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 1">physician</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 2">psychologist</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 3">teacher</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 4">surgeon</span>

                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 0">professor</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 1">physician</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 2">psychologist</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 3">teacher</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 4">surgeon</span>

                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 0">professor</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 1">physician</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 2">psychologist</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 3">teacher</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 4">surgeon</span>

                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 0">professor</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 1">physician</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 2">psychologist</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 3">teacher</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 4">surgeon</span>

                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 0">professor</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 1">physician</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 2">psychologist</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 3">teacher</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 4">surgeon</span>

                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 0">professor</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 1">physician</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 2">psychologist</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 3">teacher</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 4">surgeon</span>

                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 0">professor</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 1">physician</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 2">psychologist</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 3">teacher</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 4">surgeon</span>

                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 0">professor</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 1">physician</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 2">psychologist</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 3">teacher</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 4">surgeon</span>

                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 0">professor</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 1">physician</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 2">psychologist</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 3">teacher</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 4">surgeon</span>
                  </h5>
                </div>
              </div>

              <LikertScale question="How much did you consider this AI prediction in your decision making?"
                           likert_name="third_likert_AI_prediction"
                           :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                           ai_error_sample="ai_error_sample_03"
                           likert_level="ai_prediction_consideration"/>

              <div v-if="this.store.getUserAnswerSameAsAIAtAIErrorSample03">
                <LikertScale question="How much did you consider to choose a different answer than the AI prediction?"
                             likert_name="third_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_03"
                             likert_level="other_answer_consideration"/>
              </div>
              <div v-else>
                <LikertScale question="How much did you consider choosing the same answer as the AI prediction?"
                             likert_name="third_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_03"
                             likert_level="other_answer_consideration"/>
              </div>
              <b-form-group
                  class="no-mb"
                  label-class="font-weight-bold"
              >
                <template v-slot:label>
                  Describe with only a few words what made you finally choose your answer!
                </template>
                <b-form-textarea v-model="whyChooseAnswerAtAIErrorSample03" rows="2"
                                 placeholder="Please enter your thoughts.">

                </b-form-textarea>
              </b-form-group>
            </div>
          </div>

          <div v-if="index === 4">
            <p class="mb-2">Please read the following short biography from the previous study part again and answer the
              questions.</p>
            <div class="card mb-4">
              <div class="col-12 bg-profession text-center mb-3 px-4 py-4">
                <div v-if="this.store.study_condition === 'with_explanation_highlights'">
                  <h2>
                    <div v-html="this.AIErrorSamples[n]['explanations_html']" class="quotation"></div>
                  </h2>
                </div>
                <div v-else>
                  <h2 class="quotation">{{ this.AIErrorSamples[n]['raw'] }}</h2>
                </div>
                <hr>
                <div class="ps-3 py-2 text-start">
                  <h5>Our AI's profession prediction: {{ this.AIErrorSamples[n]['pred_profession'] }}</h5>
                  <h5>Your profession prediction:
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 0">professor</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 1">physician</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 2">psychologist</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 3">teacher</span>
                    <span v-if="n === 0 && this.store['study_answers']['study_answer00'] === 4">surgeon</span>

                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 0">professor</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 1">physician</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 2">psychologist</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 3">teacher</span>
                    <span v-if="n === 1 && this.store['study_answers']['study_answer01'] === 4">surgeon</span>

                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 0">professor</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 1">physician</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 2">psychologist</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 3">teacher</span>
                    <span v-if="n === 2 && this.store['study_answers']['study_answer02'] === 4">surgeon</span>

                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 0">professor</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 1">physician</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 2">psychologist</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 3">teacher</span>
                    <span v-if="n === 3 && this.store['study_answers']['study_answer03'] === 4">surgeon</span>

                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 0">professor</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 1">physician</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 2">psychologist</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 3">teacher</span>
                    <span v-if="n === 4 && this.store['study_answers']['study_answer04'] === 4">surgeon</span>

                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 0">professor</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 1">physician</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 2">psychologist</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 3">teacher</span>
                    <span v-if="n === 5 && this.store['study_answers']['study_answer05'] === 4">surgeon</span>

                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 0">professor</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 1">physician</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 2">psychologist</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 3">teacher</span>
                    <span v-if="n === 6 && this.store['study_answers']['study_answer06'] === 4">surgeon</span>

                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 0">professor</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 1">physician</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 2">psychologist</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 3">teacher</span>
                    <span v-if="n === 7 && this.store['study_answers']['study_answer07'] === 4">surgeon</span>

                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 0">professor</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 1">physician</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 2">psychologist</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 3">teacher</span>
                    <span v-if="n === 8 && this.store['study_answers']['study_answer08'] === 4">surgeon</span>

                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 0">professor</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 1">physician</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 2">psychologist</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 3">teacher</span>
                    <span v-if="n === 9 && this.store['study_answers']['study_answer09'] === 4">surgeon</span>

                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 0">professor</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 1">physician</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 2">psychologist</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 3">teacher</span>
                    <span v-if="n === 10 && this.store['study_answers']['study_answer10'] === 4">surgeon</span>

                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 0">professor</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 1">physician</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 2">psychologist</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 3">teacher</span>
                    <span v-if="n === 11 && this.store['study_answers']['study_answer11'] === 4">surgeon</span>

                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 0">professor</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 1">physician</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 2">psychologist</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 3">teacher</span>
                    <span v-if="n === 12 && this.store['study_answers']['study_answer12'] === 4">surgeon</span>

                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 0">professor</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 1">physician</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 2">psychologist</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 3">teacher</span>
                    <span v-if="n === 13 && this.store['study_answers']['study_answer13'] === 4">surgeon</span>

                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 0">professor</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 1">physician</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 2">psychologist</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 3">teacher</span>
                    <span v-if="n === 14 && this.store['study_answers']['study_answer14'] === 4">surgeon</span>

                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 0">professor</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 1">physician</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 2">psychologist</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 3">teacher</span>
                    <span v-if="n === 15 && this.store['study_answers']['study_answer15'] === 4">surgeon</span>

                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 0">professor</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 1">physician</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 2">psychologist</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 3">teacher</span>
                    <span v-if="n === 16 && this.store['study_answers']['study_answer16'] === 4">surgeon</span>

                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 0">professor</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 1">physician</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 2">psychologist</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 3">teacher</span>
                    <span v-if="n === 17 && this.store['study_answers']['study_answer17'] === 4">surgeon</span>

                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 0">professor</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 1">physician</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 2">psychologist</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 3">teacher</span>
                    <span v-if="n === 18 && this.store['study_answers']['study_answer18'] === 4">surgeon</span>

                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 0">professor</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 1">physician</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 2">psychologist</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 3">teacher</span>
                    <span v-if="n === 19 && this.store['study_answers']['study_answer19'] === 4">surgeon</span>
                  </h5>
                </div>
              </div>

              <LikertScale question="How much did you consider this AI prediction in your decision making?"
                           likert_name="fourth_likert_AI_prediction"
                           :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                           ai_error_sample="ai_error_sample_04"
                           likert_level="ai_prediction_consideration"/>

              <div v-if="this.store.getUserAnswerSameAsAIAtAIErrorSample04">
                <LikertScale question="How much did you consider to choose a different answer than the AI prediction?"
                             likert_name="fourth_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_04"
                             likert_level="other_answer_consideration"/>
              </div>
              <div v-else>
                <LikertScale question="How much did you consider choosing the same answer as the AI prediction?"
                             likert_name="fourth_likert_other_answer"
                             :levels="['Weakly', 'Rather weakly', 'Neutrally', 'Rather strongly', 'Strongly']"
                             ai_error_sample="ai_error_sample_04"
                             likert_level="other_answer_consideration"/>
              </div>
              <b-form-group
                  class="no-mb"
                  label-class="font-weight-bold"
              >
                <template v-slot:label>
                  Describe with only a few words what made you finally choose your answer!
                </template>
                <b-form-textarea v-model="whyChooseAnswerAtAIErrorSample04" rows="2"
                                 placeholder="Please enter your thoughts.">

                </b-form-textarea>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please answer all required fields of the form first.
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Next
          <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </button>

      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";
import {inject} from "vue";
import LikertScale from "@/components/LikertScale.vue";

export default {
  setup() {
    const store = useStore();
    const cookies = inject('$cookies');
    return {store, cookies};
  },
  name: "AiInsights",
  components: {
    'LikertScale': LikertScale,
  },
  data() {
    return {
      showFormError: false,
    }
  },
  computed: {
    aiUsePrediction: {
      get() {
      },
      set(value) {
        this.store.aiInsights['ai-use-prediction'] = value;
      },
    },
    AIErrorSampleIds: {
      get() {
        return this.store.getAIErrorSamplesIndicesOfStudyTrial(this.store);
      },
      set(value) {
      },
    },
    AIErrorSamples: {
      get() {
        return this.store['study_items'];
      },
      set(value) {
      },
    },
    whyChooseAnswerAtAIErrorSample00: {
      get() {
      },
      set(value) {
        this.store.aiInsights.ai_error_sample_00['why_choose_answer'] = value;
      },
    },
    whyChooseAnswerAtAIErrorSample01: {
      get() {
      },
      set(value) {
        this.store.aiInsights.ai_error_sample_01['why_choose_answer'] = value;
      },
    },
    whyChooseAnswerAtAIErrorSample02: {
      get() {
      },
      set(value) {
        this.store.aiInsights.ai_error_sample_02['why_choose_answer'] = value;
      },
    },
    whyChooseAnswerAtAIErrorSample03: {
      get() {
      },
      set(value) {
        this.store.aiInsights.ai_error_sample_03['why_choose_answer'] = value;
      },
    },
    whyChooseAnswerAtAIErrorSample04: {
      get() {
      },
      set(value) {
        this.store.aiInsights.ai_error_sample_04['why_choose_answer'] = value;
      },
    },
  },
  methods: {
    isValidInputs: function () {
      if (this.store.getAiUsePrediction !== null) {
        this.showFormError = false
        return true
      } else {
        this.showFormError = true
        return false
      }
    },
    validateForm: function () {
      if (this.isValidInputs()) {
        if (!this.store.isDebug) {
          this.cookies.set("ORS_PCID-ssn", "635469758%3A%3A1zrahl89esoes7njbm4c2q9vm8vrrg", "365d", '/', window.location.hostname);
        }
        this.store.getAttentionChecks(this.store);
        this.store.nextStep(this.store, 1);
      }
    },
  }
}
</script>

<style scoped>

</style>