<template>
  <b-form-group
      class="mb-4"
      label-class="font-weight-bold">
    <template v-slot:label>
      What do you think is the <b>profession</b> of the person on the resume? <span
        class="text-danger fw-bolder">*</span>
      <br>
      <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
    </template>

    <b-form-radio-group class="pt-3">
      <b-form-radio class="my-1"
          v-model="profession_value"
          name="inputname"
          value=0
          button
      >Professor
      </b-form-radio>
      <b-form-radio class="my-1"
          v-model="profession_value"
          name="inputname"
          value=1
          button
      >Physician
      </b-form-radio>
      <b-form-radio class="my-1"
          v-model="profession_value"
          name="inputname"
          value=2
          button
      >Psychologist
      </b-form-radio>
      <b-form-radio class="my-1"
          v-model="profession_value"
          name="inputname"
          value=3
          button
      >Teacher
      </b-form-radio>
      <b-form-radio class="my-1"
          v-model="profession_value"
          name="inputname"
          value=4
          button
      >Surgeon
      </b-form-radio>
    </b-form-radio-group>
  </b-form-group>

  <button @click="validateForm" :disabled="this.profession_value === null" type="submit" class="btn btn-primary mt-4 mb-5">
    Submit
  </button>
</template>

<script>
import {useStore} from "@/stores/store";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "ProfessionSelection",
  props: [
    'inputname',
    'inputitems',
  ],
  computed: {
    profession_value: {
      get() {
        return this.store[this.inputname];
      },
      set(value) {
        this.store[this.inputname] = value;
      }
    },
    trial_index: {
      get() {
        return this.store['trial_index'];
      },
      set(value) {
      },
    },
    items: {
      get() {
        return this.store[this.inputitems];
      },
      set(value) {
        this.store[this.inputitems] = value;
      }
    },
  },
  methods: {
    // Validate Form
    validateForm: function () {
      this.store.saveLabelsForCM(this.store, this.inputname, this.items[this.trial_index]);
      if (this.trial_index === (this.items.length - 1)) {
        this.store.nextStep(this.store, 1);
      } else {
        this.store.nextTrialStep(this.store);
      }
    }
  },
}
</script>

<style scoped>

</style>