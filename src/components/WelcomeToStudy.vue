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
                Welcome and thank you for your interest in our LabintheWild test.
              </p>
              <p class="h3 mt-5">
                Tell us what you think the persons whose resumes you are shown do for a profession, and we will show you how gender biased you are compared to our AI and other LabintheWild users.
              </p>
              <p class="h3 mt-5">
                <b> Normally, it takes 10 minutes to finish the test. </b>
              </p>
            </div>
            <div class="col-12 col-lg-4">
              <img src="@/assets/images/my_robot.png" class="img-fluid logo-robot">
            </div>
          </div>
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">
          Let's start!
          <font-awesome-icon v-if="!this.loading" icon="fa-solid fa-arrow-right" />
          <font-awesome-icon v-if="this.loading" icon="fa-solid fa-circle-notch" spin />
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
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    validateForm: async function () {
      this.loading = true;
      await this.store.initParticipant(this.store);
      this.store.nextStep(this.store, 1);
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>