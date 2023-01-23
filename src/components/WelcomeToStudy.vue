<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'welcome-to-study'">
      <div>
        <h1>
          Are you as biased as an AI? Let's find out!
        </h1>
        <div class="col-12 mt-5">
          <div class="row">
            <div class="col-12 col-lg-8">
              <p class="h3">
                Welcome and thank you for your interest in our LabInTheWild test.
              </p>
              <p class="h3 mt-5">
                What you have to do and what we'll show you compared to our AI and others.
              </p>
              <p class="h3 mt-5">
                <b> Normally, it takes X minutes to finish the test. </b>
              </p>
            </div>
            <div class="col-12 col-lg-4">
<!--              TODO place new image in src @/assets/images/-->
              <img src="" class="img-fluid">
            </div>
          </div>
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">Let's start!
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from '@/stores/store.js'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "WelcomeToStudy",
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>