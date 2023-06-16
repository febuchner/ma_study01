<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-0 px-sm-3">
        <div class="">
          <h1>Thank you for participating!</h1>
        </div>

        <div class="my-5 pb-3">
          <h2>This is your Completion Code for Prolific:</h2>
          <div class="bg-profession">
            <h3 v-if="!this.store.getAttentionCheck01 || !this.store.getAttentionCheck02 || this.store.getAttentionCheck03 !== 'true'" class="py-4 ps-3 text-center">C16I52IS</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 28" class="py-4 ps-3 text-center">CCV7PVTA</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 27" class="py-4 ps-3 text-center">C13WQDIO</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 26" class="py-4 ps-3 text-center">C69M9EFO</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 25" class="py-4 ps-3 text-center">CUC3SFYN</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 24" class="py-4 ps-3 text-center">CMOQ1GGC</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 23" class="py-4 ps-3 text-center">C194LYXT</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 22" class="py-4 ps-3 text-center">CID2NY1G</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 21" class="py-4 ps-3 text-center">C1K7MD9A</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 20" class="py-4 ps-3 text-center">C14Z8IUH</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 19" class="py-4 ps-3 text-center">CRNQNWRK</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 18" class="py-4 ps-3 text-center">C1J6ZXSJ</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 17" class="py-4 ps-3 text-center">C18RA2OV</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 16" class="py-4 ps-3 text-center">CF1P6KP1</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 15" class="py-4 ps-3 text-center">C12AMYJQ</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 14" class="py-4 ps-3 text-center">CF7GO3GK</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 13" class="py-4 ps-3 text-center">C1L6YXQO</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 12" class="py-4 ps-3 text-center">CDIFXQ31</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 11" class="py-4 ps-3 text-center">CREQIWTS</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 10" class="py-4 ps-3 text-center">C9LB1O4F</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 9" class="py-4 ps-3 text-center">CE68YGPW</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 8" class="py-4 ps-3 text-center">CYDZCGMT</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 7" class="py-4 ps-3 text-center">C5V2CIXG</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 6" class="py-4 ps-3 text-center">CRRBO5F8</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 5" class="py-4 ps-3 text-center">C14CKIUP</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 4" class="py-4 ps-3 text-center">CNX8S2M8</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 3" class="py-4 ps-3 text-center">C15KZ7M6</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 2" class="py-4 ps-3 text-center">CYAYFOFX</h3>
            <h3 v-else-if="this.store.getUserAccuracy === 1" class="py-4 ps-3 text-center">C1SD4BR3</h3>
            <h3 v-else class="py-4 ps-3 text-center">C1MGVBLH</h3>
          </div>
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