<script setup>
import {RouterLink, RouterView} from 'vue-router'
import InformedConsent from './components/InformedConsent.vue'
import DemographicQuestions from '@/components/DemographicQuestions.vue';
import WelcomeToStudy from '@/components/WelcomeToStudy.vue';
import TrialIntroduction from '@/components/TrialInstruction.vue';
import StudyTrial from '@/components/StudyTrial.vue';
import Debrief from '@/components/Debrief.vue';
import Results from '@/components/Results.vue'
import {ref} from "vue";

const sharemodal = ref(false);
</script>

<template>
  <header class="row mb-5">
    <div class="col-12 col-sm-6 d-flex justify-content-start">
      <img alt="labintheWild logo" class="logo d-inline-flex" src="@/assets/labintheWild-logo.png" width="150"/>
    </div>
    <div class="col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end">
      <button type="button" class="btn btn-primary" @click="sharemodal = !sharemodal">
        Share
      </button>
    </div>

    <b-modal v-model="sharemodal" title="Share the study!" hide-footer>
      Implement in own component
    </b-modal>
  </header>
  <main role="main" class="container">
    <WelcomeToStudy/>
    <InformedConsent/>
    <DemographicQuestions/>
    <TrialIntroduction/>
    <StudyTrial/>
    <Debrief/>
    <Results/>

  </main>

  <!--  <RouterView />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
