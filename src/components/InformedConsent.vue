<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'informed-consent'">
      <div>
        <h1><i> Please read the following information carefully before proceeding. </i></h1>
      </div>
      <div class="mt-5">
        <p><b> Why we are doing this research: </b>
          The goal of this project is to collect data on the impact of an AI on a human, using profession identification
          via a short resume written in English.
        </p>
        <p><b> What you will have to do: </b>
          After filling out demographic information, we will provide you instructions on the first part of this study.
          In this you will decide which of the five given professions the person to whom the resume belongs is most likely to have.
          In total, you will be presented with 10 examples.
          After that, you will receive instructions for the second part of the study.
          Here you do the same as in the first part, except that now you are supported in your decision-making by our AI.
          The second part consists of 20 examples.
        </p>
        <p><b> What you will get out of it: </b>
          You will see how gender biased you are compared to our AI.
        </p>
        <p><b> Are there any risks: </b>
          We do not anticipate any risks. You can always choose to leave this study by
          closing the browser.
        </p>
        <p class="text-danger"><b> Privacy and data collection: </b>
          Your responses will be handled privately. We do not keep any data that
          could be used to establish your identity directly.
          We will store your demographic data securely in your browser only with your consent.
          We do securely store your previous session identifiers on your browser.
        </p>
        <p class="text-danger"><b> Expected duration: </b> X minutes
        </p>
        <p class="text-danger"><b> Contact information: </b> This study is conducted at the Ludwig-Maximilians-University Munich in
          cooperation
          with fortiss GmbH - Research Institute of the Free State of Bavaria for software-intensive systems.
          If you have questions about this research, you may contact
          Felicitas Buchner at Ludwig-Maximilians-University Munich by mailing at <a
              href="mailto:fe.buchner@campus.lmu.de">fe.buchner@campus.lmu.de</a>.
        </p>
      </div>
      <hr class="my-4"/>

      <div class="form-group">
        <b-form-checkbox
            id="consent-accepted"
            v-model="consentAccepted"
            name="consent-accepted"
            :value="true"
            :unchecked-value="false"
        >
          I agree to participate in this research. Participation in this research is voluntary, and I can stop at any
          time without penalty. I feel that I understand what I am getting into, and I know I am free to leave the
          experiment
          at any time by simply closing the web browser.
        </b-form-checkbox>

        <!--        <div>State: <strong>{{ this.stateConsentAccepted }}</strong></div>-->
      </div>

      <div class="mt-3 text-danger" v-if="this.showFormError">You must agree to the study
        participation in order to
        participate in the study.
      </div>

      <button @click="validateForm" type="submit" class="btn btn-primary mt-5">
        Next <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>

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
  name: "InformedConsent",
  data() {
    return {
      showFormError: false,
      COOKIE_PREFIX: "LITW-",
    }
  },
  computed: {
    consentAccepted: {
      get() {
      },
      set(value) {
        this.store.userInput['consent-accepted'] = value
      },
    },
    stateConsentAccepted() {
      return this.store.getConsentAccepted
    }
  },
  methods: {
    // if consent is valid, set from cookies if exist and go to next step, else showFormError
    validateForm: function () {
      const COOKIE_PREFIX = this.COOKIE_PREFIX;
      let store = this.store;
      let cookies = this.cookies

      let allCookies = this.cookies.keys();
      let litwCookies = [];
      allCookies.forEach(function (cookie) {
        if (cookie.startsWith(COOKIE_PREFIX) === true) {
          litwCookies.push(cookie);
        }
      });

      if (this.stateConsentAccepted) {
        if (litwCookies.length === 7) {
          litwCookies.forEach(function (cookie) {
            cookie = cookie.slice(COOKIE_PREFIX.length)
            store.userInput[cookie] = cookies.get(COOKIE_PREFIX+cookie)
          });
          this.store.userInput['user-taken-test-before'] = true;
          this.store.nextStep(this.store, 2);
        } else {
          this.store.nextStep(this.store, 1);
        }
      } else {
        this.showFormError = true;
      }
    }
  }
}
</script>

<style scoped>

</style>