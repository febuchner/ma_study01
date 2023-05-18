<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-0 px-sm-3">
        <div class="">
          <h1>Thank you for participating!</h1>
        </div>

        <div class="my-5 pb-5">
          <h2>This is your Completion Code for Prolific:</h2>
          <div class="bg-profession">
            <h3 class="py-4 ps-3 text-center">C1MGVBLH</h3>
          </div>
        </div>

        <hr class="my-5"/>

        <div class=" text-center mt-3">
          <h3 class="mb-3">If you like this study, we would be happy if you share it with your friends.</h3>
          <SocialMediaShare/>
        </div>

        <hr class="my-5"/>

        <div class="text-center">
          <div class="mb-5">
            <h2>Thank you for participating in our study! We hope you had fun.</h2>
            <h2>You can close this browser window now.</h2>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";
import SocialMediaShare from "@/components/SocialMediaShare.vue";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "Results",
  components: {
    'SocialMediaShare': SocialMediaShare,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style scoped>

</style>