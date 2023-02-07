<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-trial'">
      <div class="px-3">
        <div v-for="(n,index) in this.labellingItems">
          <div class="mb-5 text-center">
            {{ n }}, {{ index }} {{ this.labellingIds }}
            <h1>Round {{ index + 1 }}/ 10</h1>
          </div>

          <div class="col-12 bg-light text-center px-3 py-4">
            <h2>"{{this.labellingItems[index]['raw']}}"</h2>
          </div>

          <div class="mt-5">
            <b-form-group
                class="mb-4"
                label-class="font-weight-bold">
              <template v-slot:label>
                What do you think is the <b>profession</b> of the person on the resume? <span
                  class="text-danger fw-bolder">*</span>
                <br>
                <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
              </template>

              <b-form-radio-group id="professionSelection" class="pt-3">
                <b-form-radio

                    name="professor"
                    value=0
                    button
                >Professor
                </b-form-radio>
                <b-form-radio

                    name="physician"
                    value=1
                    button
                >Physician
                </b-form-radio>
                <b-form-radio

                    name="psychologist"
                    value=2
                    button
                >Psychologist
                </b-form-radio>
                <b-form-radio

                    name="teacher"
                    value=3
                    button
                >Teacher
                </b-form-radio>
                <b-form-radio

                    name="surgeon"
                    value=4
                    button
                >Surgeon
                </b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </div>

          <button @click="validateForm" type="submit" class="btn btn-primary my-5">
            Submit
          </button>
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
  name: "LabellingTrial",
  data() {
    return {
      trialRound: 1,
    }
  },
  computed: {
    labellingItems: {
      get() {
        return this.store['labelling_items'];
      },
      set(value) {},
    },
    labelling_answer0: {
      get() {},
      set(value) {
        this.store['labelling_answer0'] = value;
      },
    },
    labelling_answer1: {
      get() {},
      set(value) {
        this.store['labelling_answer1'] = value;
      },
    },
  },
  methods: {
    // Validate Form
    validateForm: function () {
      if (this.trialRound === this.labellingItems.length) {
        this.store.nextStep(this.store, 1);
      } else {
        this.trialRound ++;
      }
    }
  },
}
</script>

<style scoped>

</style>