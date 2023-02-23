<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-instruction'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Instructions for the first part! </h1>
        </div>

        <div>
          <p>During this part you will be shown 10 different sentences.
            For each, decide which of the five given professions the person to whom the resume belongs is most likely to
            have.
            <br><br>
            <span>Based on your given answers from the first and second part, we will present you your gender bias compared to that of our AI at the end of the study.</span><br><br>
          </p>
        </div>

        <div class="mb-3">
          <p>Below you will find a picture that shows you what the first part looks like with some instructions on how to do it:</p>
        </div>

        <div class="px-0 px-sm-3 px-md-5">
          <img src="../assets/images/trialinstruction_visualisation.png"
               alt="Example of the first part of the study" class="img-fluid">
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
import JSONDATA from '@/components/json/test_data_five_professions_gender.json'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "LabellingInstruction",
  data() {
    return {
      JSON: JSONDATA,
      items: [],
    }
  },
  computed: {
    labellingIds: {
      get() {
        return this.store['labelling_ids'];
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
    studyIds: {
      get() {
        return this.store['study_ids'];
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
  },
  methods: {
    // Load items from JSON by passed indices
    loadItemsByIndices(ids, items) {
      ids.forEach(function (id) {
        items.push(this.JSON[id]);
      }, this);
    },
    validateForm: function () {
      this.store.distributeIds(this.store);
      this.loadItemsByIndices(this.labellingIds, this.labellingItems);
      this.loadItemsByIndices(this.studyIds, this.studyItems);

      // this.store.decideStudyCondition(this.store);
      // TODO: Remove before golive
      this.store['study_condition'] = 'with_explanation_highlights'
      // this.store['study_condition'] = 'without_explanation_highlights'

      this.store.nextStep(this.store, 1);
    }
  }
}
</script>

<style scoped>

</style>