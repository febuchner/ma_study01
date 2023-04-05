<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'informed-consent'">
      <div>
        <h1><i> Please read the following information carefully before proceeding. </i></h1>
      </div>
      <div class="mt-5">
        <p><strong> Why we are doing this research: </strong>
          The goal of this project is to collect data on the impact of an AI on human decision-making, using profession
          identification
          via a short resume written in English.
        </p>
        <p><strong> What you will have to do: </strong>
          After filling out demographic information, we will provide you instructions on the first part of this study.
          In this, you will decide which of the five given professions the person to whom the resume belongs is most
          likely to have.
          In total, you will be presented with 10 examples.
          After that, you will receive instructions for the second part of the study.
          Here you do the same as in the first part, except that now you are supported in your decision-making by our
          AI.
          The second part consists of 20 examples.
        </p>
        <p><strong> What you will get out of it: </strong>
          You will see how you perform and how gender biased you are compared to our AI and other LabintheWild users.
        </p>
        <p><strong> Are there any risks: </strong>
          We do not anticipate any risks. You can always choose to leave this study by
          closing the browser.
        </p>
        <p><strong> Privacy and data collection: </strong>
          Your responses will be handled privately and all your collected data will be processed anonymously.
          We do not keep any data that could be used to establish your identity directly or to contact you.
          We will store your demographic data securely in your browser only with your consent.
          Your anonymized data will be collected, processed in compliance with the General Data Protection Regulation
          (on the basis of Act 6 para. 1 a, Act 7, Act 9 para. 2 a, Act 89, Act 156 and Act 159 GDPR and
          Act 25 BayDSG), used and stored only by Ludwig-Maximilians-University Munich and
          fortiss GmbH for research and development of a scientific publication.
          <br>
          <br>
          Your personal data will be deleted in accordance with the Principles of Research on Humans of the German
          Research Foundation (DFG) as soon as they
          are no longer needed for the recruitment of the subjects or for follow-up enquiries.
          The remaining data collected will be anonymized after closing this study. The raw data will be deleted at this
          time, the anonymized data will not be deleted and stored for an indefinite period of time.
          <br>
          <br>
          According to the General Data Protection Regulation, you have the following rights: If your personal data are
          processed, you have the right to obtain information on the data stored about you (Act 15 GDPR).
          If incorrect personal data are processed, you are entitled to a correction (Act 16 GDPR).
          If the legal prerequisites exist, you can request the deletion or limitation of the processing and appeal
          against the processing (Acts 17, 18 and 21 GDPR).
          If you have consented to the data processing or to a data-processing contract and the data processing is
          carried out automatically, you may be entitled to data transferability (Act 20 GDPR).
          If you make use of your rights mentioned above, the public office checks whether the legal requirements for
          these are met. Furthermore, there is a right of appeal to the Bavarian State Commissioner for Data Protection.
          You can contact by Bavarian State Office for Data Protection Supervision (BayLDA), Promenade 27, 91522 Ansbach,
          <span class="text-nowrap">+49 (0) 981 53 1300</span>, <a
              href="mailto:poststelle@lda.bayern.de">poststelle@lda.bayern.de</a>, online complaint form for data
          protection violations: <a href="https://www.lda.bayern.de/de/beschwerde.html" target="_blank">www.lda.bayern.de/de/beschwerde</a>.
          <br>
          <br>
          Your randomly generated personal studyID is <code>{{ this.userID }}</code>. Please note it down and keep it
          safe in case you want to contact us about your data. You can revoke your consent to the processing of your data by a short
          statement and naming your studyID at any time in the future.
          The legality of the data processing carried out on the basis of the consent until revocation remains
          unaffected by this.

        </p>
        <p><strong> Expected duration: </strong> 15 minutes
        </p>
        <p><strong> Contact information: </strong> This study is conducted at the Ludwig-Maximilians-University Munich
          in
          cooperation
          with fortiss GmbH - Research Institute of the Free State of Bavaria for software-intensive systems.
          If you have questions about this research, you may contact
          Felicitas Buchner at Ludwig-Maximilians-University Munich by mailing at <a
              href="mailto:fe.buchner@campus.lmu.de">fe.buchner@campus.lmu.de</a> or Tony Zhang at fortiss GmbH by
          mailing at <a
              href="mailto:zhang@fortiss.org">zhang@fortiss.org</a> or by writing to Tony Zhang, fortiss GmbH,
          Guerickestraße 25, 80805 Munich.
        </p>
        <p>
          If you wish to obtain information about data protection from someone other than the researchers, please
          contact Dr. Rolf Gemmeke, Ludwig-Maximilians-University Munich, Official Data Protection Officer, <a
            href="mailto:Datenschutz@Verwaltung.Uni-Muenchen.de">Datenschutz@Verwaltung.Uni-Muenchen.de</a>,
          Geschwister-Scholl-Platz 1, 80539 Munich.
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
          I agree to participate in this research and to the anonymous processing of my data by the
          Ludwig-Maximilians-University
          Munich and fortiss GmbH for a scientific publication. Participation in this research is voluntary. I can
          withdraw my consent at any time in
          the future by contacting the researchers without giving any reasons. In the event of cancellation, all data
          recorded of me will be
          irrevocably deleted. I have understood that at some point my data will be completely anonymized and thus can
          no longer be deleted. I have been informed that my data will be processed in compliance with the General Data
          Protection (GDPR and BayDSG). I am aware that, according to the General Data Protection Regulation (GDPR), I
          have a right to information about my personal data stored by Ludwig-Maximilians-University Munich and
          fortiss GmbH.
          I feel that I understand what I am getting into and what my rights are. I know I am free
          to leave the
          experiment at any time by simply closing the web browser without mentioning reasons and penalty.
        </b-form-checkbox>

      </div>

      <div class="mt-3 text-danger" v-if="this.showFormError">You must agree to the study
        participation in order to
        participate in the study.
      </div>

      <button @click="validateForm" :disabled="!this.consentAccepted === true" type="submit"
              class="btn btn-primary mt-5">
        Next
        <font-awesome-icon icon="fa-solid fa-arrow-right"/>
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
    userID: {
      get() {
        return this.store.userInput['userID'];
      },
      set(value) {
      },
    },
    consentAccepted: {
      get() {
        return this.store.userInput['consent-accepted'];
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
            store.userInput[cookie] = cookies.get(COOKIE_PREFIX + cookie)
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