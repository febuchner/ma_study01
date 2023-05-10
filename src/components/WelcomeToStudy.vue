<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'welcome-to-study'">
      <div>
        <h1>
          Are you more biased than an AI? Let's find out!
        </h1>
        <div class="col-12 mt-5">
          <div class="row">
            <div class="col-12 col-lg-8">
              <p class="h3">
                Welcome and thank you for your interest in our experiment.
              </p>
              <p class="h3 mt-5">
                We will show you some short biographies.
                Tell us what you think the person in each short biography has for a profession.
                At the end of the study, you will receive a <strong>Mechanical Turk Code</strong> that you can enter to
                get your reward.
                Additionally, we will show you your performance and how gender biased you are compared to our AI and
                other users.
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