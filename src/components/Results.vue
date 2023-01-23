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
          <h2>Do you want to play another round?</h2>
          <p>
            <span>
            You can compare yourself in other scenarios with humans and the AI to learn new things about yourself.
            </span>
          </p>
          <button type="button" class="btn btn-primary" @click="playAgain">Play again!</button>
        </div>

        <div>
<!--          TODO Add image if section needed-->
        </div>
      </div>

      <hr class="my-5"/>

      <h2 class="text-center">These are other fun studies you can try if you liked ours! <br>
        Or you can return to <a href="https://www.labinthewild.org/">labinthewild.org</a>.</h2>

      <div class="row mt-5">
        <div class="col-sm-4">
          <div>
            <a href="https://www.labinthewild.org/studies/toxicity/?locale=en" target="_blank" rel="noreferrer"
               class="d-flex justify-content-center">
              <img class="img-fluid w-50" src="https://www.labinthewild.org/images/toxicity-icon.png">
            </a>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="header">
            <h3>
              <a
                  href="https://www.labinthewild.org/studies/toxicity/?locale=en" target="_blank" rel="noreferrer">Are
                you better than an AI in noticing hateful speech?
              </a>
            </h3>
          </div>
          <div>
            <p>Rate what speech is hateful and we'll show you how well you detect hateful speech compared to an AI and
              others.</p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-sm-4">
          <div>
            <a href="https://culturaldelphii.labinthewild.org/" target="_blank" rel="noreferrer"
               class="d-flex justify-content-center">
              <img class="img-fluid w-50" src="https://www.labinthewild.org/images/culturaldelphii-logo.png">
            </a>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="header">
            <h3>
              <a href="https://culturaldelphii.labinthewild.org/" target="_blank" rel="noreferrer">
                Could you live with an AI and its morals?
              </a>
            </h3>
          </div>
          <div>
            <p>Tell us your moral judgments on certain situations and we will show you how you compare to others' and an
              AI.</p>
          </div>
        </div>
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
    playAgain: function () {
      // will skip the cache and reload the page from the server
      window.location.reload(true);
    },
  },
}
</script>

<style scoped>

</style>