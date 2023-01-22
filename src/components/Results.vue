<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-3">
        <div class="">
          <h1>These are your results!</h1>
        </div>

        <div class="results">
          <p>Results: X</p>
        </div>

        <hr class="my-5"/>

        <div class="text-center">
          <div class="mb-5">
            <h2>Thank you for participating in our study! We hope you had fun.</h2>
            <p>
              Your results will help us <span class="text-danger">X</span>.
            </p>
          </div>
          <div>
            <h3 class="mb-3">Share the study with your friends so they can test themselves.</h3>
            <SocialMediaShare/>
          </div>
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

          <button type="button" class="btn btn-primary" @click="playAgain">Play again!</button>
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

      <div>
        <h2 class="text-center">Credits</h2>
        <p>
          Insert credits of pictures!
        </p>
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
import SocialMediaShare from "@/components/SocialMediaShare.vue";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "Results",
  components: {
    'SocialMediaShare': SocialMediaShare
  },
  data() {
    return {}
  },
  methods: {
    playAgain:function () {
      this.store.restartStudy(this.store);
    },
  },
}
</script>

<style scoped>

</style>