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
            What English skills do you have? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-select
              v-model="userEnglishProficiency"
              :options="englishProficiency">
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

        <button @click="validateForm" type="submit" class="btn btn-primary mt-5">
          Next <font-awesome-icon icon="fa-solid fa-arrow-right" />
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
      languages: languages,
      englishProficiency: [
        {text: 'Basic', value: 'basic'},
        {text: 'Upper-Intermediate', value: 'upper-intermediate'},
        {text: 'Intermediate', value: 'intermediate'},
        {text: 'Proficient', value: 'proficient'},
        {text: 'Mother tongue', value: 'motherTongue'},
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
      mlKnowledge: [
        {text: "No experience", value: "no-experience"},
        {text: "Some experience", value: "some-experience"},
        {text: "A lot of experience", value: "a lot of experience"},
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
    userEnglishProficiency: {
      get() {},
      set(value) {
        this.store.userInput['user-english-proficiency'] = value;
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
    userMLKnowledge: {
      get() {},
      set(value) {
        this.store.userInput['user-ml-knowledge'] = value;
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
      if (this.store.getUserAge < this.minAge || this.store.getUserAge > this.maxAge) {
        return this.showAgeError = true;
      } else {
        return this.showAgeError = false;
      }
    },
    showCookieAlert: function () {
      alert('We can store your personal demographics information if you are on a personal computer you use on your own. This will allow you to skip this form if you take this test again. If you\'d prefer not to have a saved copy, or if others are using this computer, press "No".');
    },
    isValidInputs: function () {
      if (this.store.getUserTakenTestBefore !== null &&
          this.store.getUserAge !== null &&
          this.store.getUserAge >= this.minAge &&
          this.store.getUserAge <= this.maxAge &&
          this.store.getUserNativeLanguage !== null &&
          this.store.getUserEnglishProficiency !== null &&
          this.store.getUserEducation !== null &&
          this.store.getUserGender !== null &&
          this.store.getUserMLKnowledge !== null &&
          this.store.getUserCookieConsent !== null
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
      this.cookies.set("LITW-"+key, value, "365d", '/', window.location.hostname);
    },
    // if form is valid, go to next step
    validateForm: function () {
      if (this.isValidInputs()) {
        console.log(this.store.getUserCookieConsent === true)
        if (this.store.getUserCookieConsent === true) // why the fuck false?????
        {
          this.setCookies("user-taken-test-before", this.store.getUserTakenTestBefore);
          this.setCookies("user-age", this.store.getUserAge);
          this.setCookies("user-native-language", this.store.getUserNativeLanguage);
          this.setCookies("user-english-proficiency", this.store.getUserEnglishProficiency);
          this.setCookies("user-education", this.store.getUserEducation);
          this.setCookies("user-gender", this.store.getUserGender);
          this.setCookies("user-ml-knowledge", this.store.getUserMLKnowledge);
          this.setCookies("user-cookie-consent", this.store.getUserCookieConsent);
        }
        this.store.nextStep(this.store, 1);
      }
    }
  },
}
</script>

<style scoped>

</style>