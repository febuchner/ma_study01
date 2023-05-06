<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-trial'">
      <div class="px-3">

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
                <ProfessionSelection inputanswer="labelling_answers" inputname="labelling_answer0" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 1">
                <ProfessionSelection inputanswer="labelling_answers" inputname="labelling_answer1" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 2">
                <ProfessionSelection inputanswer="labelling_answers" inputname="labelling_answer2" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 3">
                <ProfessionSelection inputanswer="labelling_answers" inputname="labelling_answer3" inputitems="labelling_items"/>
              </div>
              <div v-else-if="this.trial_index === 4">
                <ProfessionSelection inputanswer="labelling_answers" inputname="labelling_answer4" inputitems="labelling_items"/>
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