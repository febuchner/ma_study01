<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'ai-insights'">
      <div class="px-3">
        <div class="mb-5">
          <h1>AI insights! </h1>
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Next <font-awesome-icon icon="fa-solid fa-arrow-right" />
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
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>