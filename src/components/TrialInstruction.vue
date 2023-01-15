<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'trial-instruction'">
      <div class="px-3">
        <div class="mb-5">
          <h1>
            Instructions
          </h1>
        </div>

        <div>
          <p>During the study you will be shown X different sentences. For each, rate whether you think X.
            <span class="text-danger">Then, you will see how an AI and other study participants responded to that scenario.</span>
            <br><br>
            <span class="text-danger">We'll compare your answers to those of an AI and other participants overall after you finished the study. </span><br><br>
          </p>
        </div>

        <div class="mb-3">
          <p>Below you will find a picture that shows you what the study looks like.</p>
        </div>

        <img src="https://toxicity-litw.apps.allenai.org/93a19e44bf64e2fd43b0e6d31a6c25e3.png"
             alt="Example of the experiment page" class="img-fluid">

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">Let's start!
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
  name: "TrialIntroduction",
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>