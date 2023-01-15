<template>
  <transition name="fade">
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

          <b-form-radio-group id="user-taken-test-before">
            <b-form-radio
                v-model="userTakenTestBefore"
                name="userTakenTestBefore"
                value="true"
                button
            >Yes
            </b-form-radio>
            <b-form-radio
                v-model="userTakenTestBefore"
                name="userTakenTestBefore"
                value="false"
                button
            >No
            </b-form-radio>
          </b-form-radio-group>
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
          <b-form-input v-model="userAge" type="number" min="1" max="100" @blur="isValidAge"></b-form-input>
          <div class="mx-3 text-danger" v-if="this.showAgeError">Please enter a valid age between 1 and 100.</div>
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
          <b-form-radio-group>
            <b-form-radio
                v-model="userCookieConsent"
                name="userCookieConsent"
                value="true"
                button
            >Yes
            </b-form-radio>
            <b-form-radio
                v-model="userCookieConsent"
                name="userCookieConsent"
                value="false"
                button
            >No
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please fill in all fields of the form first.</div>

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">Next
        </button>

        <div>State:
          <strong>{{ this.store.userInput["user-taken-test-before"] }} </strong>
          <strong>{{ this.store.userInput["user-origin-country"] }} </strong>
          <strong>{{ this.store.userInput["user-current-country"] }} </strong>
          <strong>{{ this.store.userInput["user-age"] }} </strong>
          <strong>{{ this.store.userInput["user-native-language"] }} </strong>
          <strong>{{ this.store.userInput["user-religion"] }} </strong>
          <strong>{{ this.store.userInput["user-education"] }} </strong>
          <strong>{{ this.store.userInput["user-gender"] }} </strong>
          <strong>{{ this.store.userInput["user-cookie-consent"] }} </strong>
        </div>

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
        {text: 'Roman Catholic', value: 'Roman Catholic'},
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
      get() {},
      set(value) {
        this.store.userInput['user-taken-test-before'] = value;
      },
    },
    userOriginCountry: {
      get() {},
      set(value) {
        this.store.userInput['user-origin-country'] = value;
      },
    },
    userCurrentCountry: {
      get() {},
      set(value) {
        this.store.userInput['user-current-country'] = value;
      },
    },
    userAge: {
      get() {},
      set(value) {
        this.store.userInput['user-age'] = value;
      },
    },
    userNativeLanguage: {
      get() {},
      set(value) {
        this.store.userInput['user-native-language'] = value;
      },
    },
    userReligion: {
      get() {},
      set(value) {
        this.store.userInput['user-religion'] = value;
      },
    },
    userEducation: {
      get() {},
      set(value) {
        this.store.userInput['user-education'] = value;
      },
    },
    userGender: {
      get() {},
      set(value) {
        this.store.userInput['user-gender'] = value;
      },
    },
    userCookieConsent: {
      get() {},
      set(value) {
        this.store.userInput['user-cookie-consent'] = value;
      },
    },

  },
  watch: {
    userAge(value) {
      console.log('watcher of userAge');
      // this.isValidAge(value);
    },
  },
  methods: {
    showDemoQuestionsAlert: function () {
      alert('Based on your data we will show you your personal results and data analysis. All of your answers will be anonymized. We take your privacy very seriously.');
    },
    isValidAge: function () {
      if (this.store.userInput['user-age'] < this.minAge || this.store.userInput['user-age'] > this.maxAge) {
        return this.showAgeError = true;
      } else {
        return this.showAgeError = false;
      }
    },
    showCookieAlert: function () {
      alert('We can store your personal demographics information if you are on a personal computer you use on your own. This will allow you to skip this form if you take this test again. If you\'d prefer not to have a saved copy, or if others are using this computer, press "No".');
    },
    isValidInputs: function () {
      let store = this.store.userInput
      if (store['user-taken-test-before'] !== null &&
          store['user-origin-country'] !== null &&
          store['user-current-country'] !== null &&
          store['user-age'] !== null &&
          store['user-age'] >= this.minAge &&
          store['user-age'] <= this.maxAge &&
          store['user-native-language'] !== null &&
          store['user-religion'] !== null &&
          store['user-education'] !== null &&
          store['user-gender'] !== null &&
          store['user-cookie-consent'] !== null
      ) {
        this.showFormError = false
        return true
      } else {
        if (store['user-age'] < this.minAge || store['user-age'] > this.maxAge
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
      this.cookies.set("LITW-"+key, value, "365d", '/', window.location.hostname);
    },

    // if form is valid, go to next step
    validateForm: function () {
      if (this.isValidInputs()) {
        this.setCookies("user-taken-test-before", this.store.userInput['user-taken-test-before']);
        this.setCookies("user-origin-country", this.store.userInput['user-origin-country']);
        this.setCookies("user-current-country", this.store.userInput['user-current-country']);
        this.setCookies("user-age", this.store.userInput['user-age']);
        this.setCookies("user-native-language", this.store.userInput['user-native-language']);
        this.setCookies("user-religion", this.store.userInput['user-religion']);
        this.setCookies("user-education", this.store.userInput['user-education']);
        this.setCookies("user-gender", this.store.userInput['user-gender']);
        this.setCookies("user-cookie-consent", this.store.userInput['user-cookie-consent']);
        this.store.nextStep(this.store, 1);
      }
    }
  },
}
</script>

<style scoped>

</style>