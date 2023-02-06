<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-trial'">
      <div class="px-3">
        <div class="mb-5 text-center">
          <h1>Round / 10</h1>
        </div>

        <div class="col-12 bg-light text-center py-4">
          <h2>" "</h2>
        </div>

        <div class="mt-5">
          <b-form-group
              class="mb-4"
              label-class="font-weight-bold">
            <template v-slot:label>
              What profession do you think the related person has? <span class="text-danger fw-bolder">*</span>
              <br>
              <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
            </template>

            <b-form-radio-group id="" class="pt-3">
              <b-form-radio

                  name=""
                  value=0
                  button
              >Professor
              </b-form-radio>
              <b-form-radio

                  name=""
                  value=1
                  button
              >Physician
              </b-form-radio>
              <b-form-radio

                  name=""
                  value=2
                  button
              >Psychologist
              </b-form-radio>
              <b-form-radio

                  name=""
                  value=3
                  button
              >Teacher
              </b-form-radio>
              <b-form-radio

                  name=""
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
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";
import JSONDATA from '@/components/json/test_data_five_professions_gender.json'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "LabellingTrial",
  data() {
    return {
      JSON: JSONDATA,
    }
  },
  computed: {
    labelling: {
      get() {
        this.store.getLabellingIds(this.state);
      },
      set(value) {
      },
    },
    labelling_answer0: {
      get() {},
      set(value) {
        this.store['labelling_answer0'] = value;
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