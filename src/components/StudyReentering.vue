<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'study-reentering'">
      <div>
        <h1>We are sorry!</h1>
      </div>
      <div class="mt-5">
        <h2>You seem to want to participate in the study again.
          <br>
          However, multiple participation is unfortunately not possible. Please close this browser window now.</h2>
      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from '@/stores/store.js'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "StudyReentering.vue"
}
</script>

<style scoped>

</style>