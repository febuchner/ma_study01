<template>
  <!--  <transition name="fade">-->
  <div v-if="this.store.getCurrentStep === 'demographic-questions'">
    <div class="px-3">
      <div class="mb-5">
        <h1>
          Please tell us a bit about yourself. <a href="#" @click="showDemoQuestionsAlert"> Why are you asking?</a>
        </h1>
        <p>
          <span><i><span class="text-danger fw-bold">*</span> marks a required field. The more information you enter, the more detailed results we can show you!</i></span>
        </p>
      </div>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold">
        <template v-slot:label>
          Have you taken this test before? <span class="text-danger fw-bolder">*</span>
        </template>
        <b-form-radio-group
            id="user-taken-test-before"
            v-model="userTakenTestBefore"
            :options="[
                { text: 'Yes', value: 'true' },
                { text: 'No', value: 'false' },
              ]"
            name="user-taken-test-before"
            buttons
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          Which country did you live in the longest growing up? <span class="text-danger fw-bolder">*</span>
        </template>
        <b-form-select
            v-model="userOriginCountry"
            :options="this.countries">
        </b-form-select>
      </b-form-group>
      <div>State: <strong>{{ this.store.userInput["user-origin-country"] }}</strong></div>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          Which country do you currently live in? <span class="text-danger fw-bolder">*</span>
        </template>
        <b-form-select
            v-model="userCurrentCountry"
            :options="countries">
        </b-form-select>
      </b-form-group>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          How old are you? <span class="text-danger fw-bolder">*</span>
        </template>
        <b-form-input v-model="userAge" type="number" min="0" max="100"></b-form-input>
      </b-form-group>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          What is your native language? (if multiple, pick the one you speak in most often) <span
            class="text-danger fw-bolder">*</span>
        </template>
        <b-form-select
            v-model="userNativeLanguage"
            :options="languages">
        </b-form-select>
      </b-form-group>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          What religion or religious denomination do you belong to? <span class="text-danger fw-bolder">*</span>
        </template>
        <b-form-select
            v-model="userReligion"
            :options="religions">
        </b-form-select>
      </b-form-group>

      <b-form-group
          class="mb-4"
          label-class="font-weight-bold"
      >
        <template v-slot:label>
          What is the highest level of education that you have received or are pursuing? <span
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
          label-class="font-weight-bold">
        <template v-slot:label>
          Can we store your demographics on your computer? <span class="text-danger fw-bolder">*</span>
          <br>
          <a href="#" @click="showCookieAlert"> Why are we asking?</a>
        </template>
        <b-form-radio-group
            v-model="userCookieConsent"
            :options="[
                { text: 'Yes', value: 'true' },
                { text: 'No', value: 'false' },
              ]"
            buttons
        ></b-form-radio-group>
      </b-form-group>

      <div class="mx-3 text-danger" v-if="this.showFormError">Please fill in all fields of the form first.</div>

      <button @click="validateForm" type="submit" class="btn btn-primary mt-5">Next
      </button>

    </div>
  </div>
  <!--  </transition>-->
</template>

<script>
import {useStore} from '@/stores/store.js'
import countries from '@/components/json/countries.json'
import languages from '@/components/json/languages.json'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "DemographicQuestions",
  data() {
    return {
      showFormError: false,
      countries: countries,
      languages: languages,
      religions: [
        {text: 'I do not belong to a religion or religious denomination', value: 'Atheist'},
        {text: 'Buddhist', value: 'Buddhist'},
        {text: 'Hindu', value: 'Hindu'},
        {text: 'Jew', value: 'Jew'},
        {text: 'Muslim', value: 'Muslim'},
        {text: 'Orthodox (Russian/Greek/etc.)', value: 'Orthodox'},
        {text: 'Protestant', value: 'Protestant'},
        {text: 'Other', value: 'other'},
      ],
      educationLevels: [
        {text: "pre-high school", value: "pre-high school"},
        {text: "high school", value: "high school"},
        {text: "college", value: "college"},
        {text: "graduate school", value: "graduate school"},
        {text: "professional school", value: "professional school"},
        {text: "PhD", value: "PhD"},
        {text: "postdoctoral", value: "postdoctoral"}
      ],
      genders: [
        {text: "Male", value: "male"},
        {text: "Female", value: "female"},
        {text: "Divers", value: "divers"},
        {text: "Other", value: "other"},
      ],
    }
  },
  computed: {
    userTakenTestBefore: {
      set(value) {
        this.store.userInput['user-taken-test-before'] = value
      },
    },
    userOriginCountry: {
      set(value) {
        this.store.userInput['user-origin-country'] = value
      },
    },
    userCurrentCountry: {
      set(value) {
        this.store.userInput['user-current-country'] = value
      },
    },
    userAge: {
      set(value) {
        this.store.userInput['user-age'] = value
      },
    },
    userNativeLanguage: {
      set(value) {
        this.store.userInput['user-native-language'] = value
      },
    },
    userReligion: {
      set(value) {
        this.store.userInput['user-religion'] = value
      },
    },
    userEducation: {
      set(value) {
        this.store.userInput['user-education'] = value
      },
    },
    userGender: {
      set(value) {
        this.store.userInput['user-gender'] = value
      },
    },
    userCookieConsent: {
      set(value) {
        this.store.userInput['user-cookie-consent'] = value
      },
    },

  },
  methods: {
    showCookieAlert: function () {
      alert('We can store your demographics information if you are on a personal computer. This will allow you to skip this form if you take this test again. If you\'d prefer not to have a saved copy, press for "No".');
    },
    showDemoQuestionsAlert: function () {
      alert('Based on your data we will show you your personal results and data analysis. All of your answers will be anonymized. We take your privacy very seriously.');
    },
    isValidInputs: function () {
      let store = this.store.userInput
      if (store['user-taken-test-before'] !== null &&
          store['user-origin-country'] !== null &&
          store['user-current-country'] !== null &&
          store['user-age'] !== null &&
          store['user-native-language'] !== null &&
          store['user-religion'] !== null &&
          store['user-education'] !== null &&
          store['user-gender'] !== null
      ) {
        this.showFormError = false
        return true
      } else {
        this.showFormError = true
        return false
      }
    },

    // if form is valid, go to next step
    validateForm: function () {
      if (this.isValidInputs()) {
        this.store.nextStep(this.store);
      }
    }
  },
}
</script>

<style scoped>

</style>