<template>
  <b-form-group
      class="mb-4"
      label-class="font-weight-bold">
    <template v-slot:label>
      What do you think is the <b>profession</b> of the person on the short biography? <span
        class="text-danger fw-bolder">*</span>
      <br>
      <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
    </template>

    <div class="pt-3">
      <b-form-radio class="my-1 me-2 d-inline-flex"
                    v-model="profession_value"
                    name="inputname"
                    value=0
                    button
      >Professor
      </b-form-radio>
      <b-form-radio class="my-1 mx-2 d-inline-flex"
                    v-model="profession_value"
                    name="inputname"
                    value=1
                    button
      >Physician
      </b-form-radio>
      <b-form-radio class="my-1 mx-2 d-inline-flex"
                    v-model="profession_value"
                    name="inputname"
                    value=2
                    button
      >Psychologist
      </b-form-radio>
      <b-form-radio class="my-1 mx-2 d-inline-flex"
                    v-model="profession_value"
                    name="inputname"
                    value=3
                    button
      >Teacher
      </b-form-radio>
      <b-form-radio class="my-1 mx-2 d-inline-flex"
                    v-model="profession_value"
                    name="inputname"
                    value=4
                    button
      >Surgeon
      </b-form-radio>
    </div>
  </b-form-group>

  <button @click="validateForm" :disabled="this.profession_value === null" type="submit"
          class="btn btn-primary submit-sample-btn mt-4 mb-5">
    <span v-if="!this.loading">Submit</span>
    <font-awesome-icon v-if="this.loading" icon="fa-solid fa-circle-notch" spin/>
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
  data() {
    return {
      loading: false,
    }
  },
  props: [
    'inputanswer',
    'inputname',
    'inputitems',
  ],
  computed: {
    profession_value: {
      get() {
        return this.store[this.inputanswer][this.inputname];
      },
      set(value) {
        this.store[this.inputanswer][this.inputname] = parseInt(value);
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
    study_items_length: {
      get() {
        return (this.store['study_items']).length;
      },
      set(value) {
      }
    },

  },
  methods: {
    // Validate Form
    validateForm: async function () {
      if (this.trial_index === (this.items.length - 1)) {
        this.loading = true;
        await this.store.updateDB(this.store);
        this.store.nextStep(this.store, 1);
        this.loading = false;
      } else {
        this.store.nextTrialStep(this.store);
      }
    }
  },
}
</script>

<style scoped>

</style>