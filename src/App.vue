<script setup>
import {RouterLink, RouterView} from 'vue-router'
import WelcomeToStudy from '@/components/WelcomeToStudy.vue';
import StudyReentering from "@/components/StudyReentering.vue";
import InformedConsent from './components/InformedConsent.vue'
import DemographicQuestions from '@/components/DemographicQuestions.vue';
import LabellingInstruction from '@/components/LabellingInstruction.vue';
import LabellingTrial from '@/components/LabellingTrial.vue';
import StudyIntroduction from '@/components/StudyInstruction.vue';
import StudyTrial from '@/components/StudyTrial.vue';
import AiInsights from '@/components/AiInsights.vue';
import Debrief from '@/components/Debrief.vue';
import Results from '@/components/Results.vue'
import SocialMediaShare from "@/components/SocialMediaShare.vue";
import {ref} from "vue";


const sharemodal = ref(false);
</script>

<template>
  <header class="row mb-5">
    <div class="col-12 mb-4">
    </div>

    <b-modal v-model="sharemodal" title="Share the study!" hide-footer>
      <div class="row">
        <div class="mb-sm-4 mb-5">
          If you like this study, we would be happy if you share it with your friends.
        </div>

        <SocialMediaShare class="mb-3"/>

      </div>
    </b-modal>


  </header>
  <main role="main" class="container">
    <WelcomeToStudy/>
    <StudyReentering/>
    <InformedConsent/>
    <DemographicQuestions/>
    <LabellingInstruction/>
    <LabellingTrial/>
    <StudyIntroduction/>
    <StudyTrial/>
    <AiInsights/>
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
  margin: 0 auto;
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
