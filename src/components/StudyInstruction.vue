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
          <p>During this part you will be shown 20 different sentences.
            For each, again decide which of the five given professions the person to whom the resume belongs is most likely to have.
            But this time, our AI will tell you their opinion about the profession, which you can consider or not.
            <br><br>
            <span>Based on your given answers from the first and second part, we will present you your gender bias compared to that of our AI at the end of the study.</span><br><br>
          </p>
        </div>

        <div class="mb-3">
          <p>Below you will find a picture that shows you what the study looks like.</p>
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