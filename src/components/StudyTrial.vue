<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'study-trial'">
      <div class="px-3">

        {{ "trial-index: " + this.trial_index }} <br>
        {{ "study_answer0: " + this.store['study_answer0'] }} <br>
        {{ "study_answer1: " + this.store['study_answer1'] }} <br>
        {{ "study_answer2: " + this.store['study_answer2'] }} <br>
        {{ "study_answer3: " + this.store['study_answer3'] }} <br>
        {{ "study_answer4: " + this.store['study_answer4'] }} <br>
        {{ "study_answer5: " + this.store['study_answer5'] }} <br>
        {{ "study_answer6: " + this.store['study_answer6'] }} <br>
        {{ "study_answer7: " + this.store['study_answer7'] }} <br>
        {{ "study_answer8: " + this.store['study_answer8'] }} <br>
        {{ "study_answer9: " + this.store['study_answer9'] }} <br>
        {{ "study_answer10: " + this.store['study_answer10'] }} <br>
        {{ "study_answer11: " + this.store['study_answer11'] }} <br>
        {{ "study_answer12: " + this.store['study_answer12'] }} <br>
        {{ "study_answer13: " + this.store['study_answer13'] }} <br>
        {{ "study_answer14: " + this.store['study_answer14'] }} <br>
        {{ "study_answer15: " + this.store['study_answer15'] }} <br>
        {{ "study_answer16: " + this.store['study_answer16'] }} <br>
        {{ "study_answer17: " + this.store['study_answer17'] }} <br>
        {{ "study_answer18: " + this.store['study_answer18'] }} <br>
        {{ "study_answer19: " + this.store['study_answer19'] }} <br>

        <div v-for="(n,index) in this.studyItems">

          <div v-if="this.trial_index === index">
            <div class="mb-5 text-center">
              <h1>Round {{ this.trial_index + 1 }} / {{ this.studyItems.length }}</h1>
            </div>

            {{this.studyItems[this.trial_index]['profession']}} <br>
            {{this.studyItems[this.trial_index]['pred_profession']}}

            <div class="col-12 bg-profession text-center px-3 py-4">
              <div v-if="this.studyCondition === 'with_explanation_highlights'">
                <h2><div v-html="this.studyItems[this.trial_index]['explanations_html']" class="quotation"></div></h2>
              </div>
              <div v-else>
                <h2 class="quotation">{{ this.studyItems[this.trial_index]['raw'] }}</h2>
              </div>
            </div>

            <div class="col-12 d-flex border-primary mt-3">
              <div class="col d-flex justify-content-center">
                <img src="../assets/images/my_robot.png" class="img-fluid robot">
                <div class="h5 box sb2 ms-sm-3 my-3 my-md-5">I think that this resume belongs to a <strong>{{ this.studyItems[this.trial_index]['pred_profession']}}</strong>.</div>
              </div>
            </div>

            <div class="mt-5">
              <div v-if="this.trial_index === 0">
                <ProfessionSelection inputname="study_answer0" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 1">
                <ProfessionSelection inputname="study_answer1" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 2">
                <ProfessionSelection inputname="study_answer2" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 3">
                <ProfessionSelection inputname="study_answer3" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 4">
                <ProfessionSelection inputname="study_answer4" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 5">
                <ProfessionSelection inputname="study_answer5" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 6">
                <ProfessionSelection inputname="study_answer6" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 7">
                <ProfessionSelection inputname="study_answer7" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 8">
                <ProfessionSelection inputname="study_answer8" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 9">
                <ProfessionSelection inputname="study_answer9" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 10">
                <ProfessionSelection inputname="study_answer10" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 11">
                <ProfessionSelection inputname="study_answer11" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 12">
                <ProfessionSelection inputname="study_answer12" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 13">
                <ProfessionSelection inputname="study_answer13" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 14">
                <ProfessionSelection inputname="study_answer14" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 15">
                <ProfessionSelection inputname="study_answer15" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 16">
                <ProfessionSelection inputname="study_answer16" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 17">
                <ProfessionSelection inputname="study_answer17" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 18">
                <ProfessionSelection inputname="study_answer18" inputitems="study_items"/>
              </div>
              <div v-else>
                <ProfessionSelection inputname="study_answer19" inputitems="study_items"/>
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
  name: "StudyTrial",
  computed: {
    trial_index: {
      get() {
        return this.store['trial_index'];
      },
      set(value) {
      },
    },
    studyItems: {
      get() {
        return this.store['study_items'];
      },
      set(value) {
      },
    },
    studyCondition: {
      get() {
        return this.store['study_condition'];
      },
      set(value) {
      },
    },
  },
  methods: {
    validateForm: function () {
      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>