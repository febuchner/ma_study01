<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'demographic-questions'">
      <div class="px-3">
        <div class="mb-5">
          <h1>
            Please tell us a bit about yourself. <a href="#" @click="showDemoQuestionsAlert"> Why are you asking?</a>
          </h1>
          <p>
            <span><i><span class="text-danger fw-bold">*</span> marks a required field.</i></span>
          </p>
        </div>


        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            What is your Prolific ID? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-input v-model="userProlificID"></b-form-input>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            How old are you? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-input v-model="userAge" type="number" min="1" max="100" @blur="isValidAge"></b-form-input>
          <div class="mx-3 text-danger" v-if="this.showAgeError">Please enter a valid age between 1 and 100.</div>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            What is the highest level of education that you have received? <span
              class="text-danger fw-bolder">*</span>
          </template>
          <b-form-select
              v-model="userEducation"
              :options="educationLevels">
          </b-form-select>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            What is your gender? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-select
              v-model="userGender"
              :options="genders">
          </b-form-select>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            What knowledge of machine learning do you have? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-select
              v-model="userMLKnowledge"
              :options="mlKnowledge">
          </b-form-select>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            What attitude towards AI do you have? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-select
              v-model="userAIAttitude"
              :options="aiAttitude">
          </b-form-select>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold">
          <template v-slot:label>
            Can we store your demographics on your computer? <span class="text-danger fw-bolder">*</span>
            <br>
            <a href="#" @click="showCookieAlert"> Why are we asking?</a>
          </template>
            <b-form-radio class="my-1 me-2 d-inline-flex"
                v-model="userCookieConsent"
                name="userCookieConsent"
                value=true
                button
            >Yes
            </b-form-radio>
            <b-form-radio class="my-1 mx-2 d-inline-flex"
                v-model="userCookieConsent"
                name="userCookieConsent"
                value=false
                button
            >No
            </b-form-radio>
        </b-form-group>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please fill in all fields of the form first.</div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">
          Next
          <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </button>

      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from '@/stores/store.js'
import countries from '@/components/json/countries.json'
import languages from '@/components/json/languages.json'
import {inject} from "vue";

export default {
  setup() {
    const store = useStore();
    const cookies = inject('$cookies');
    return {store, cookies};
  },
  name: "DemographicQuestions",
  data() {
    return {
      showFormError: false,
      showAgeError: false,
      minAge: 1,
      maxAge: 100,
      educationLevels: [
        {text: "Undergraduate degree (e.g. BA/BSc)", value: "undergraduate"},
        {text: "Graduate degree (e.g. MA/MSc/MPhil)", value: "graduate"},
        {text: "Doctorate degree (e.g. PhD)", value: "doctorate"},
        {text: "Other", value: "other"},
      ],
      genders: [
        {text: "Male", value: "male"},
        {text: "Female", value: "female"},
        {text: "Divers", value: "divers"},
        {text: "Prefer not to say", value: "prefer_not_to_say"},
      ],
      mlKnowledge: [
        {text: "No experience (e.g. you have never studied machine learning)", value: "no_experience"},
        {text: "Basic experience (e.g. you have taken a course on machine learning)", value: "basic_experience"},
        {text: "Intermediate experience (e.g. you have implemented 1-2 small projects)", value: "intermediate_experience"},
        {text: "Advanced experience (e.g. you have implemented some more complex projects)", value: "advanced_experience"},
        {text: "Expert experience (e.g. you have several years of experience in machine learning)", value: "expert_experience"},
      ],
      aiAttitude: [
        {text: "Negative", value: "negative"},
        {text: "Rather negative", value: "rather_negative"},
        {text: "Neutral", value: "neutral"},
        {text: "Rather positive ", value: "rather_positive"},
        {text: "Positive", value: "positive"},
      ],
    }
  },
  computed: {
    userAge: {
      get() {
      },
      set(value) {
        this.store.userInput['user-age'] = value;
      },
    },
    userEducation: {
      get() {
      },
      set(value) {
        this.store.userInput['user-education'] = value;
      },
    },
    userGender: {
      get() {
      },
      set(value) {
        this.store.userInput['user-gender'] = value;
      },
    },
    userMLKnowledge: {
      get() {
      },
      set(value) {
        this.store.userInput['user-ml-knowledge'] = value;
      },
    },
    userAIAttitude: {
      get() {
      },
      set(value) {
        this.store.userInput['user-ai-attitude'] = value;
      },
    },
    userCookieConsent: {
      get() {
      },
      set(value) {
        this.store.userInput['user-cookie-consent'] = value;
      },
    },
    userProlificID: {
      get() {
      },
      set(value) {
        this.store.userInput['userProlificID'] = value;
      },
    },
  },
  watch: {
    userAge(value) {
      // console.log('watcher of userAge');
      // this.isValidAge(value);
    },
  },
  methods: {
    showDemoQuestionsAlert: function () {
      alert('Your demographic data will help us gain more insights into our research. But no need to worry, all of your answers will be anonymised. We take your privacy very seriously.');
    },
    isValidAge: function () {
      if (this.store.getUserAge < this.minAge || this.store.getUserAge > this.maxAge) {
        return this.showAgeError = true;
      } else {
        return this.showAgeError = false;
      }
    },
    showCookieAlert: function () {
      alert('We can store your personal demographics information if you are on a personal computer you use on your own. This will allow you to skip this form if you take this experiment again, e.g. if you had to abort the study but want to start it again. If you\'d prefer not to have a saved copy, or if others are using this computer, press "No".');
    },
    isValidInputs: function () {
      if (this.store.getUserAge !== null &&
          this.store.getUserAge >= this.minAge &&
          this.store.getUserAge <= this.maxAge &&
          this.store.getUserEducation !== null &&
          this.store.getUserGender !== null &&
          this.store.getUserMLKnowledge !== null &&
          this.store.getUserAIAttitude !== null &&
          this.store.getUserCookieConsent !== null &&
          this.store.getUserProlificID !== null
      ) {
        this.showFormError = false
        return true
      } else {
        if (this.store.getUserAge < this.minAge || this.store.getUserAge > this.maxAge
        ) {
          this.showAgeError = true
          return false
        } else {
          this.showFormError = true
          return false
        }
      }
    },
    setCookies: function (key, value) {
      this.cookies.set("LITW-" + key, value, "365d", '/', window.location.hostname);
    },
    // if form is valid, go to next step
    validateForm: function () {
      if (this.isValidInputs()) {
        if (this.store.getUserCookieConsent === "true") {
          this.setCookies("user-age", this.store.getUserAge);
          this.setCookies("user-education", this.store.getUserEducation);
          this.setCookies("user-gender", this.store.getUserGender);
          this.setCookies("user-ml-knowledge", this.store.getUserMLKnowledge);
          this.setCookies("user-ai-attitude", this.store.getUserAIAttitude);
          this.setCookies("user-cookie-consent", this.store.getUserCookieConsent);
          this.setCookies("userProlificID", this.store.getUserProlificID);
        }
        this.store.nextStep(this.store, 1);
      }
    }
  },
}
</script>

<style scoped>

</style>