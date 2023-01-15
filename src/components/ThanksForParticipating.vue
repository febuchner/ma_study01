<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'thanks-for-participating'">
      <div class="px-3">
        <div class="mb-5">
          <h1> Thank you for participating! </h1>
          <p>
            <span>Before seeing your results, please let us know what you thought of the test!</span>
          </p>
        </div>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            Do you have any feedback for the researcher? Any questions, suggestions, or concerns? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-textarea v-model="userComment" rows="3" placeholder="Pleasae enter your feedback, if you have any."></b-form-textarea>
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

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">Next
        </button>

        <div>State:
          <strong>{{ this.store.debrief["user-comment"] }} </strong>
          <strong>{{ this.store.debrief["user-difficulties"] }} </strong>
          <strong>{{ this.store.debrief["user-cheat"] }} </strong>
        </div>

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
      },
      set(value) {
        this.store.debrief['user-difficulties'] = value;
      },
    },
    userCheat: {
      get() {
      },
      set(value) {
        this.store.debrief['user-cheat'] = value;
      },
    },
  },
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>
