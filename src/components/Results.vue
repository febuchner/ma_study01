<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-3">
        <div class="">
          <h1>These are your results!</h1>
          <button type="button" class="btn btn-primary" @click="SHAREMODAL = !SHAREMODAL">
            Share
          </button>

          <b-modal v-model="SHAREMODAL" title="Share the study!" hide-footer>
           Implement in own component
          </b-modal>
        </div>

        <div class="results">
          <p>Results: X</p>
        </div>

        <hr class="my-5"/>

        <div class="text-center">
          <h2>Thank you for participating in our study.</h2>
          <p>
            Your results will help us <span class="text-danger">X</span>.
          </p>
          <h3>Share the study with your friends:</h3>
          <span class="sc-dIUeWJ iGZahw"><a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftoxicity-litw.apps.allenai.org"
              target="_blank" rel="noreferrer"><span role="img" aria-label="facebook" class="anticon anticon-facebook"><svg
              viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em"
              fill="currentColor" aria-hidden="true"><path
              d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path></svg></span></a><a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftoxicity-litw.apps.allenai.org%2F&amp;text=Tell%20us%20what%20you%20believe%20about%20certain%20situations%20and%20we%20will%20show%20you%20how%20you%20compare%20to%20others%E2%80%99%20and%20an%20AI.%0A"
              target="_blank" rel="noreferrer">
            <span role="img" aria-label="twitter-square" class="anticon anticon-twitter-square"><svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="twitter-square"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"><path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path></svg></span></a><a
              href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Ftoxicity-litw.apps.allenai.org%2F&amp;title=Could%20you%20live%20with%20an%20AI%20and%20its%20morals%3F%0A&amp;summary=Tell%20us%20what%20you%20believe%20about%20certain%20situations%20and%20we%20will%20show%20you%20how%20you%20compare%20to%20others%E2%80%99%20and%20an%20AI.%0A"
              target="_blank noreferrer">
            <span role="img" aria-label="linkedin" class="anticon anticon-linkedin"><svg
                viewBox="64 64 896 896" focusable="false" data-icon="linkedin" width="1em" height="1em"
                fill="currentColor" aria-hidden="true"><path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></span></a></span>
        </div>
      </div>

      <hr class="my-5"/>

      <div>
        <div>
          <h2>Do you want to get more results?</h2>
          <p>
            <span>
            You can compare yourself in other scenarios with humans and the AI to learn new things about yourself.
            </span>
          </p>

          <button type="button" class="btn btn-primary">Play again!</button>
        </div>

        <div class="sc-eggMyH kVrrtY">
          <img width="180px"
                                           src="https://toxicity-litw.apps.allenai.org/22cb64f8c4f8b14f11d50610ae0cbd46.png"
                                           alt="A friendly-looking cartoon robot" class="sc-jcVcSv cKWPdQ">
          <div class="sc-eJMPIT jbxsHK"><span class="sc-hHfuMS gXIYtW"><span class="sc-dIUeWJ iGZahw">Play another round to see more results!</span></span>
          </div>
        </div>

      </div>

      <hr class="my-5"/>

      <h2 class="text-center">Try these studies if you liked ours!</h2>

      <div class="sc-cTkxnA igsPWQ">
        <img src="http://www.labinthewild.org/images/reading-assessment.jpg">
        <p><a href="https://www.labinthewild.org/images/culturaldelphii-logo.png" target="_blank" rel="noreferrer">Could
          you live with an AI and its morals?</a> <br>Tell us your moral judgments on certain situations and we will
          show you how you compare to others' and an AI.</p><img
            src="http://www.labinthewild.org/images/robot-puzzles-logo.png">
        <p><a href="https://delphi-litw.cs.ualberta.ca/" target="_blank" rel="noreferrer">Do you solve puzzles like
          a robot?</a> <br>Do you think you're a puzzle master? Do you think that you can do as well as a computer
          program? Try our puzzles to find out. They take about 10 minutes.</p>
      </div>
    </div>
  </transition>
</template>

<script>
import {useStore} from "@/stores/store";
import {ref} from 'vue';

export default {
  setup() {
    const store = useStore();
    const SHAREMODAL = ref(false);
    return {store, SHAREMODAL};
  },
  name: "Results",
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>