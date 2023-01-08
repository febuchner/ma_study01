<template>
  <transition name="fade">
    <div>
<!--        :id="this.$options.name"-->
<!--         v-if="this.$store.getters.currentStep == this.$options.name">-->
      <p>
        <span class=""><i> Please read the following information carefully before proceeding. </i></span>
      </p>
      <p><b> Why we are doing this research: </b> The goal of this project is to collect data on the general public's
        impression of a profession based on a short resume in the English language.
      </p>
      <p><b> What you will have to do: </b> After filling out demographic information, we will provide X.
        IOn total, you will be presented with X examples. For each example, you will decide which of the five
        given professions the person to whom the resume belongs is most likely to have.
      </p>
      <p><b> What you will get out of it: </b> You will see X.
      </p>
      <p><b> Are there any risks: </b> We do not anticipate any risks. You can always choose to leave this study by
        closing
        the browser.
      </p>
      <p><b> Privacy and data collection: </b> Your responses will be handled privately. We do not keep any data that
        could
        be used to establish your identity directly.
        We will store your demographic data securely in your browser only with your consent.
        We do securely store your previous session identifiers on your browser.
      </p>
      <p><b> Expected duration: </b> X minutes
      </p>
      <p><b> Contact information: </b> This study is conducted at the Ludwig-Maximilians-University Munich in
        cooperation
        with fortiss GmbH - Research Institute of the Free State of Bavaria for software-intensive systems.
        If you have questions about this research, you may contact
        Felicitas Buchner at Ludwig-Maximilians-University Munich by mailing at <a
            href="mailto:fe.buchner@campus.lmu.de">fe.buchner@campus.lmu.de</a>.
      </p>

      <hr class="my-4"/>

      <div class="form-group">
        <b-form-checkbox
            id="consent-accepted"
            v-model="consentAccepted"
            name="consent-accepted"
            :value="true"
            :unchecked-value="false"
            :invalid-feedback="jndxcfgvj"
            :state="stateConsentAccepted">
          I agree to participate in this research. Participation in this research is voluntary, and I can stop at any
          time without penalty. I feel that I understand what I am getting into, and I know I am free to leave the experiment
          at any time by simply closing the web browser.

          <b-form-invalid-feedback :state="stateConsentAccepted">You must agree to the study participation in order to
            participate in the study.
          </b-form-invalid-feedback>

        </b-form-checkbox>
        <div>State: <strong>{{ this.consentAccepted }}</strong></div>
      </div>

      <b-form-invalid-feedback :state="stateConsentAccepted">You must agree to the study participation in order to
        participate in the study.
      </b-form-invalid-feedback>

      <button @click="validateForm" type="submit" class="btn btn-primary">Next
      </button>

    </div>
  </transition>
</template>

<script>
import { useStore } from '@/stores/store.js'
import {storeToRefs} from "pinia";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "InformedConsent",
  computed: {
    consentAccepted: {
      // return this.stateConsentAccepted,
      // get() { return this.store.userInput['consent-accepted'] },
      // set(value) { this.store.commit('setAnswer', { 'key': 'consent-accepted', 'value': value }) }
    },
    stateConsentAccepted() {
      console.log(this.consentAccepted);
      return this.consentAccepted
    }
  },
  methods: {
    validateForm: function () {
      // When consent is null force validation error
      if (this.stateConsentAccepted == null) {
        this.consentAccepted = false
      }

      if (this.stateConsentAccepted) {
        // then go to next step
        this.store.commit('nextStep')
      }
    }
  }
}
</script>

<style scoped>

</style>