<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-trial'">
      <div class="px-3">
        <!-- TODO: Remove before golive-->
        {{ "trial-index: " + this.trial_index }} <br>
        {{ "labelling_answer0: " + this.store['labelling_answer0'] }} <br>
        {{ "labelling_answer1: " + this.store['labelling_answer1'] }} <br>
        {{ "labelling_answer2: " + this.store['labelling_answer2'] }} <br>
        {{ "labelling_answer3: " + this.store['labelling_answer3'] }} <br>
        {{ "labelling_answer4: " + this.store['labelling_answer4'] }} <br>
        {{ "labelling_answer5: " + this.store['labelling_answer5'] }} <br>
        {{ "labelling_answer6: " + this.store['labelling_answer6'] }} <br>
        {{ "labelling_answer7: " + this.store['labelling_answer7'] }} <br>
        {{ "labelling_answer8: " + this.store['labelling_answer8'] }} <br>
        {{ "labelling_answer9: " + this.store['labelling_answer9'] }} <br>

        <div v-for="(n,index) in this.labellingItems">

          <div v-if="this.trial_index === index">
            <div class="mb-5 text-center">
              <h1>Round {{ this.trial_index + 1 }} / {{ this.labellingItems.length }}</h1>
            </div>

            <div class="col-12 bg-profession text-center px-3 py-4">
              <h2 class="quotation">{{ this.labellingItems[this.trial_index]['raw'] }}</h2>
            </div>

            <div class="mt-5">
              <div v-if="this.trial_index === 0">
                <ProfessionSelection inputname="labelling_answer0" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 1">
                <ProfessionSelection inputname="labelling_answer1" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 2">
                <ProfessionSelection inputname="labelling_answer2" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 3">
                <ProfessionSelection inputname="labelling_answer3" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 4">
                <ProfessionSelection inputname="labelling_answer4" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 5">
                <ProfessionSelection inputname="labelling_answer5" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 6">
                <ProfessionSelection inputname="labelling_answer6" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 7">
                <ProfessionSelection inputname="labelling_answer7" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 8">
                <ProfessionSelection inputname="labelling_answer8" inputitems="labelling_items"/>
              </div>
              <div v-else>
                <ProfessionSelection inputname="labelling_answer9" inputitems="labelling_items"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";
import ProfessionSelection from "@/components/ProfessionSelection.vue";

export default {
  components: {ProfessionSelection},
  setup() {
    const store = useStore();
    return {store};
  },
  name: "LabellingTrial",
  data() {
    return {}
  },
  computed: {
    trial_index: {
      get() {
        return this.store['trial_index'];
      },
      set(value) {
      },
    },
    labellingItems: {
      get() {
        return this.store['labelling_items'];
      },
      set(value) {
      },
    },
  },
  methods: {},
}
</script>

<style scoped>

</style>