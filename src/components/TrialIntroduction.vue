<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'trial-introduction'">
      <div class="px-3">
        <p>Trial introduction</p>
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
  name: "TrialIntroduction"
}
</script>

<style scoped>

</style>