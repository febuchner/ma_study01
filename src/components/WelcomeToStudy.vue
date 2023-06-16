<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'welcome-to-study'">
      <div>
        <h1>
          Can you navigate the profession maze with the help of our AI? Let's find out!
        </h1>
        <div class="col-12 mt-5">
          <div class="row">
            <div class="col-12 col-lg-8">
              <p class="h3">
                Welcome and thank you for your interest in our experiment.
              </p>
              <p class="h3 mt-5">
                Tell us what you think the person in each short biography has for a profession.
                At the end of the study, you will receive your <strong>Prolific Completion Code</strong>.
                <br>
                Your reward is a base pay of <strong>£2.00</strong> plus <strong>£0.01 for each correct
                prediction</strong>.
              </p>
              <p class="h3 mt-5">
                Please do not use the back and forward buttons of your browser to navigate, but only the buttons
                provided by us on the website.
              </p>
            </div>
            <div class="col-12 col-lg-4">
              <img src="@/assets/images/my_robot.png" class="img-fluid logo-robot">
            </div>
          </div>
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">
          Let's start!
          <font-awesome-icon v-if="!this.loading" icon="fa-solid fa-arrow-right"/>
          <font-awesome-icon v-if="this.loading" icon="fa-solid fa-circle-notch" spin/>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from '@/stores/store.js'
import {inject} from "vue";

export default {
  setup() {
    const store = useStore();
    const cookies = inject('$cookies');
    return {store, cookies};
  },
  name: "WelcomeToStudy",
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    validateForm: async function () {
      if (!this.store.isDebug && this.cookies.isKey('ORS_PCID-ssn')) {
        this.store.nextStep(this.store, 1);
      } else {
        this.loading = true;
        await this.store.initParticipant(this.store);
        this.store.nextStep(this.store, 2);
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>