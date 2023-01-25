<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-instruction'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Labelling instruction! </h1>
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Let's start!
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
  name: "LabellingInstruction",
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>