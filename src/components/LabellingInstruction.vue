<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'labelling-instruction'">
      <div class="px-3">
        <div class="mb-5">
          <h1>Instructions for the first part! </h1>
        </div>

        <div>
          <div>During this part you will be shown 10 different short biographies.
            For each, choose the most suitable of five professions for the person on the short biography.
          </div>
          <div class="mt-4">
            These professions are:
            <ul>
              <li>professor - a teacher of high rank in a department of a university or college who is also dedicated to
                research
              </li>
              <li>teacher - a person who instructs or trains others, esp. in a school</li>
              <li>psychologist - someone who studies the human mind and human emotions and behaviour, and how different
                situations have an effect on people
              </li>
              <li>physician - a medical doctor, especially one who has general skill and is not a surgeon</li>
              <li>surgeon - a doctor who is specially trained to perform medical operations</li>
            </ul>
          </div>

          <div class="mt-4">
            Based on your given answers from the first and second part, we will present you your gender bias compared to
            that of our AI and other LabintheWild users at the end of the study.
          </div>
        </div>

        <div class="mt-4">
          Below you will find a picture that shows you what the first part looks like with some instructions on how to
          do it:
        </div>

        <div class="px-0 px-sm-3 px-md-5">
          <img src="../assets/images/trialinstruction_visualisation.png"
               alt="Example of the first part of the study" class="img-fluid">
        </div>

        <button @click="validateForm" type="submit" class="btn btn-primary my-5">
          Let's start!
          <font-awesome-icon v-if="!this.loading" icon="fa-solid fa-arrow-right"/>
          <font-awesome-icon v-if="this.loading" icon="fa-solid fa-circle-notch" spin/>
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
      loading: false,
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
    validateForm: async function () {
      this.loading = true;
      this.store.distributeIds(this.store);
      this.loadItemsByIndices(this.labellingIds, this.labellingItems);
      this.loadItemsByIndices(this.studyIds, this.studyItems);

      this.store.decideStudyCondition(this.store);
      await this.store.updateDB(this.store);
      this.store.nextStep(this.store, 1);
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>