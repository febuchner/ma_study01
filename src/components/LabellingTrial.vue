<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-trial'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Labelling trial! </h1>
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

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "LabellingTrial",
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>