<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'ai-insights'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Your thoughts on our AI! </h1>
          <p>
            <span>
              Please let us know what you thought of our AI!<br>
              <i><span class="text-danger fw-bold">*</span> marks a required field.</i>
            </span>
          </p>
        </div>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            Describe how you included the AI support into your decisions! <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-textarea v-model="aiIncludedDecision" rows="3"
                           placeholder="Please enter your thoughts."></b-form-textarea>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label-class="font-weight-bold"
        >
          <template v-slot:label>
            How did you make use of the provided AI-generated answers? <span class="text-danger fw-bolder">*</span>
          </template>
          <b-form-textarea v-model="aiUsePrediction" rows="3"
                           placeholder="Please enter your thoughts."></b-form-textarea>
        </b-form-group>

        <div class="mx-3 text-danger" v-if="this.showFormError">Please answer all required fields of the form first.
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Next
          <font-awesome-icon icon="fa-solid fa-arrow-right"/>
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
  name: "AiInsights",
  data() {
    return {
      showFormError: false,
    }
  },
  computed: {
    aiIncludedDecision: {
      get() {
      },
      set(value) {
        this.store.aiInsights['ai-included-decision'] = value;
      },
    },
    aiUsePrediction: {
      get() {
      },
      set(value) {
        this.store.aiInsights['ai-use-prediction'] = value;
      },
    },
  },
  methods: {
    isValidInputs: function () {
      if (this.store.getAiIncludedDecision !== null &&
          this.store.getAiUsePrediction !== null
      ) {
        this.showFormError = false
        return true
      } else {
        this.showFormError = true
        return false
      }
    },
    validateForm: function () {
      if (this.isValidInputs()) {
        this.store.nextStep(this.store, 1);
      }
    }
  }
}
</script>

<style scoped>

</style>