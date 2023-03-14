<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'debrief'">
      <div class="px-3">
        <!-- TODO: Remove before golive-->
        {{ this.store.debrief["user-comment"] }}
        {{ this.store.debrief["user-difficulties"] }}
        {{ this.store.debrief["user-difficulties-description"] }}
        {{ this.store.debrief["user-cheat"] }}
        {{ this.store.debrief["user-cheat-description"] }}


        <div class="mb-5">
          <h1> Thank you for participating! </h1>
          <p>
            <span>
              Before seeing your results, please let us know what you thought of the test! <br>
              <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
            </span>
          </p>
        </div>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            Do you have any feedback for the researcher? Any questions, suggestions, or concerns?
          </template>
          <b-form-textarea v-model="userComment" rows="3"
                           placeholder="Please enter your feedback, if you have any."></b-form-textarea>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold">
          <template v-slot:label>
            Did you encounter any technical difficulties during the study? <span class="text-danger fw-bolder">*</span>
          </template>

          <b-form-radio-group id="user-difficulties">
            <b-form-radio
                v-model="userDifficulties"
                name="userDifficulties"
                value="true"
                button
            >Yes
            </b-form-radio>
            <b-form-radio
                v-model="userDifficulties"
                name="userDifficulties"
                value="false"
                button
            >No
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <div v-if="this.userDifficulties === 'true'">
          <b-form-group
              class="mb-4"
              label-class="font-weight-bold"
          >
            <template v-slot:label>
              Please describe how you faced technical difficulties during the test, if you encountered any.
            </template>
            <b-form-textarea v-model="userDifficultiesDescription" placeholder="Enter your technical difficulties."
                             rows="3"></b-form-textarea>
          </b-form-group>
        </div>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold">
          <template v-slot:label>
            Did you in any way provide false information? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-radio-group id="user-cheat">
            <b-form-radio
                v-model="userCheat"
                name="userCheat"
                value="true"
                button
            >Yes
            </b-form-radio>
            <b-form-radio
                v-model="userCheat"
                name="userCheat"
                value="false"
                button
            >No
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <div v-if="this.userCheat === 'true'">
          <b-form-group
              class="mb-4"
              label-class="font-weight-bold"
          >
            <template v-slot:label>
              Please describe how you provided false information, if you did.
            </template>
            <b-form-textarea v-model="userCheatDescription" placeholder="Enter how you provided false information."
                             rows="3"></b-form-textarea>
          </b-form-group>
        </div>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please answer all required fields of the form first.
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Next
          <font-awesome-icon v-if="!this.loading" icon="fa-solid fa-arrow-right" />
          <font-awesome-icon v-if="this.loading" icon="fa-solid fa-circle-notch" spin />
        </button>

      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "ThanksForParticipating",
  data() {
    return {
      showFormError: false,
      loading: false,
    }
  },
  computed: {
    userComment: {
      get() {
      },
      set(value) {
        this.store.debrief['user-comment'] = value;
      },
    },
    userDifficulties: {
      get() {
        return this.store.getUserDifficulties;
      },
      set(value) {
        this.store.debrief['user-difficulties'] = value;
      },
    },
    userDifficultiesDescription: {
      get() {
      },
      set(value) {
        this.store.debrief['user-difficulties-description'] = value;
      },
    },
    userCheat: {
      get() {
        return this.store.debrief['user-cheat'];
      },
      set(value) {
        this.store.debrief['user-cheat'] = value;
      },
    },
    userCheatDescription: {
      get() {
      },
      set(value) {
        this.store.debrief['user-cheat-description'] = value;
      },
    },
  },
  methods: {
    isValidInputs: function () {
      if (this.store.getUserDifficulties !== null &&
          this.store.getUserCheat !== null
      ) {
        this.showFormError = false
        return true
      } else {
        this.showFormError = true
        return false
      }
    },
    validateForm: async function () {
      if (this.isValidInputs()) {
        this.loading = true;
        this.store.nextStep(this.store, 1);
        await this.store.updateDB(this.store);
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>
