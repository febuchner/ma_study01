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
            But this time, our AI tells you the profession it predicts for the person of the resume for you to consider.
            <span v-if="this.store.study_condition === 'with_explanation_highlights'">
            Also, the AI shows you highlighted words in the resume that led to its prediction.
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

        <img src="https://toxicity-litw.apps.allenai.org/93a19e44bf64e2fd43b0e6d31a6c25e3.png"
             alt="Example of the experiment page" class="img-fluid">

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