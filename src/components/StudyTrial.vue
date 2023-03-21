<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'study-trial'">
      <div class="px-3">

        <div v-for="(n,index) in this.studyItems">

          <div v-if="this.trial_index === index">
            <div class="mb-5 text-center">
              <h1>Round {{ this.trial_index + 1 }} / {{ this.studyItems.length }}</h1>
            </div>

            <div class="col-12 row ms-0 d-flex border-primary">
              <div class="col-12 d-flex justify-content-center">
                <img src="../assets/images/my_robot.png" class="img-fluid robot">
                <div class="h4 box sb2 ms-sm-3 my-3 my-md-5">My prediction is
                  <strong>{{ this.studyItems[this.trial_index]['pred_profession'] }}</strong>.
                </div>
              </div>
              <div v-if="this.studyCondition === 'with_explanation_highlights'" class="col-12 row my-2 mx-0 px-0">
                <div class="col-12 col-md-4 h4 d-flex justify-content-center justify-content-md-end">

                  not {{ this.studyItems[this.trial_index]['pred_profession'] }}
                </div>
                <div class="off-set-2 col-8 offset-2 offset-sm-4 col-sm-4 offset-sm-4 offset-md-0 col-md-4 offset-md-0 bg-legend">
                </div>
                <div class="col-12 col-md-4 h4 d-flex justify-content-center justify-content-md-start">
                  {{ this.studyItems[this.trial_index]['pred_profession'] }}
                </div>
              </div>
            </div>


            <div class="col-12 bg-profession text-center mt-3 px-3 py-4">
              <div v-if="this.studyCondition === 'with_explanation_highlights'">
                <h2>
                  <div v-html="this.studyItems[this.trial_index]['explanations_html']" class="quotation"></div>
                </h2>
              </div>
              <div v-else>
                <h2 class="quotation">{{ this.studyItems[this.trial_index]['raw'] }}</h2>
              </div>
            </div>

            <div class="mt-5">
              <div v-if="this.trial_index === 0">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer00" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 1">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer01" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 2">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer02" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 3">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer03" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 4">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer04" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 5">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer05" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 6">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer06" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 7">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer07" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 8">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer08" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 9">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer09" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 10">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer10" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 11">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer11" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 12">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer12" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 13">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer13" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 14">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer14" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 15">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer15" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 16">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer16" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 17">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer17" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 18">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer18" inputitems="study_items"/>
              </div>
              <div v-else-if="this.trial_index === 19">
                <ProfessionSelection inputanswer="study_answers" inputname="study_answer19" inputitems="study_items"/>
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