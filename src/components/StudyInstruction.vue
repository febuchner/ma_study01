<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'study-instruction'">
      <div class="px-3">
        <div class="mb-5">
          <h1>
            Instructions for the second part!
          </h1>
        </div>

        <div>
          <div>During this part you will be shown 20 different sentences.
            For each, again decide which of the five given professions the person to whom the resume belongs is most
            likely to have.
          </div>

          <div class="mt-4">
            These professions are:
            <ul>
              <li>professor - a teacher of the highest rank in a department of a British university, or a teacher of
                high rank in an American university or college
              </li>
              <li>physician - a medical doctor, especially one who has general skill and is not a surgeon</li>
              <li>psychologist - someone who studies the human mind and human emotions and behaviour, and how different
                situations have an effect on people
              </li>
              <li>teacher - someone whose job is to teach in a school or college</li>
              <li>surgeon - a doctor who is specially trained to perform medical operations</li>
            </ul>
          </div>

          <div class="mt-4">
            This time, our AI tells you the profession it predicts for the person of the resume to help you with your
            decision.
            <span v-if="this.store.study_condition === 'with_explanation_highlights'">
              <br>
               <strong>Also, the AI highlights words in the resume that led to its prediction.</strong>
              <br>
              <span style="background-color: rgb(255, 0, 82);">Red</span> means the highlighted word supports the prediction. The more red the highlighted word is the stronger it supports the prediction of our AI.
              <br>
              <span style="background-color: rgb(0, 139, 251);">Blue</span> means the highlighted word is against the prediction. The bluer the highlighted word is the stronger it is against the prediction of our AI.
          </span>
          </div>

          <div class="mt-4">
            Based on your given answers from the first and second part, we will present you your gender bias compared to
            that of our AI at the end of the study.
          </div>
        </div>

        <div class="mt-4">
          Below you will find a picture that shows you what the second part looks like with some instructions on how to
          do it:
        </div>

        <div class="px-0 px-sm-3 px-md-5 mt-3">
          <img v-if="this.store.study_condition === 'with_explanation_highlights'"
               src="../assets/images/studyintroduction_with_explanation_highlights_visualization.png"
               alt="Example of the second part of the study" class="img-fluid">
          <img v-if="this.store.study_condition === 'without_explanation_highlights'"
               src="../assets/images/studyintroduction_without_explanation_highlights_visualization.png"
               alt="Example of the second part of the study" class="img-fluid">
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Let's start!
        </button>

      </div>
    </div>
  </transition>

</template>

<script>
import {useStore} from "@/stores/store";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "StudyIntroduction",
  methods: {
    validateForm: function () {
      this.store.resetTrialStep(this.store);
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>