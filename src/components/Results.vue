<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-0 px-sm-3">
        <div class="">
          <h1>These are your results!</h1>
        </div>

        <div class="results">
          <h2 class="my-5">This graph shows you your personal gender bias compared to our AI and the average of all
            other LabintheWild users who have taken this test.</h2>
          <ResultBarChart chartlabel="General gender bias" :data_AI="this.data_AI_general"
                          :data_you="this.data_you_general"/>
          <div class="mt-3">
            <!--            Explain findings and its implications for daily life-->
            <p v-if="this.data_you_general > this.data_AI_general">
              Your personal general gender bias is greater than the general gender bias of our AI. This means that you
              can predict a <strong>woman's true profession better and/or a man's true profession worse</strong> than
              our AI.

            </p>
            <p v-else-if="this.data_you_general === this.data_AI_general">
              Your personal general gender bias is equal to the general gender bias of our AI. This means that you are
              proportionally <strong>as good as our AI in predicting the true profession of a woman and a man</strong>.

            </p>
            <p v-else>
              Your personal general gender bias is less than the general gender bias of our AI. This means that you can
              predict a <strong>woman's true profession worse and/or a man's true profession better</strong> than our
              AI.

            </p>

            <p v-if="this.data_you_general > 0.0">
              Because your personal general gender bias is greater than 0, this means that you are <strong>better at
              predicting
              a woman's profession than a man's</strong>.
            </p>
            <p v-else-if="this.data_you_general === 0.0">
              Because your personal general gender bias is equal to 0, this means that <strong>you can predict a woman's
              profession just as well as a man's</strong>.
            </p>
            <p v-else>
              Because your personal general gender bias is less than 0, this means that you are <strong>better at
              predicting a
              man's profession than a woman's</strong>.
            </p>

            <p> We calculate the gender bias by computing the true positive rate (TPR) gender gap, or more precisely,
              the difference in TPRs between genders for each of the five professions.
              The TPR here indicates the proportion of people with a specific gender and profession who are correctly
              predicted to have that profession.
              This quantification of gender bias was derived from De-Arteaga et al.'s study about semantic
              representation bias [1].
              <br>
              In the graph above you can see your average of the five TPR gender gaps as <strong>general gender
                bias</strong>.
            </p>
          </div>
          <div class="mt-5">
            <p>Below you find a breakdown of your gender bias for each of the five professions compared to our AI and
              the average of all other LabintheWild users who have taken this test.</p>
            <div class="my-5">
              <h3>Gender bias of profession "professor"</h3>
              <ResultBarChart chartlabel="Gender bias of profession professor" :data_AI="this.data_AI_professor"
                              :data_you="this.data_you_professor"/>
              <ResultExplanation :data_you_profession="this.data_you_professor"
                                 :data_AI_profession="this.data_AI_professor" profession="professor"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "physician"</h3>
              <ResultBarChart chartlabel="Gender bias of profession physician" :data_AI="this.data_AI_physician"
                              :data_you="this.data_you_physician"/>
              <ResultExplanation :data_you_profession="this.data_you_physician"
                                 :data_AI_profession="this.data_AI_physician" profession="physician"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "psychologist"</h3>
              <ResultBarChart chartlabel="Gender bias of profession psychologist" :data_AI="this.data_AI_psychologist"
                              :data_you="this.data_you_psychologist"/>
              <ResultExplanation :data_you_profession="this.data_you_psychologist"
                                 :data_AI_profession="this.data_AI_psychologist" profession="psychologist"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "teacher"</h3>
              <ResultBarChart chartlabel="Gender bias of profession teacher" :data_AI="this.data_AI_teacher"
                              :data_you="this.data_you_teacher"/>
              <ResultExplanation :data_you_profession="this.data_you_teacher" :data_AI_profession="this.data_AI_teacher"
                                 profession="teacher"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "surgeon"</h3>
              <ResultBarChart chartlabel="Gender bias of profession surgeon" :data_AI="this.data_AI_surgeon"
                              :data_you="this.data_you_surgeon"/>
              <ResultExplanation :data_you_profession="this.data_you_surgeon" :data_AI_profession="this.data_AI_surgeon"
                                 profession="surgeon"/>
            </div>
            <div class="mt-5">
              [1] De-Arteaga, M., Romanov, A., Wallach, H., Chayes, J., Borgs, C., Chouldechova, A., ... & Kalai, A. T.
              (2019, January). Bias in bios: A case study of semantic representation bias in a high-stakes setting. In
              proceedings of the Conference on Fairness, Accountability, and Transparency (pp. 120-128). <br>

            </div>
          </div>
        </div>

        <hr class="my-5"/>
        <div class="text-center">
          <div class="mb-5">
            <h2>Thank you for participating in our study! We hope you had fun.</h2>
            <p>
              Your results will help us gaining insights in two main areas. <br>
              First, we will be able to rate the difficulty of the different resumes based on the percentage of users
              who decided for the correct profession.
              Prior work suggested that reliance on AI-suggested assistance increases as the task's complexity rises [2].
              As shown in former studies, the existence of explanations can result in overreliance on AI
              [3, 4].
              Because of this, in the second part of the study, you were randomly assigned to one of two conditions
              regarding the level of AI explanations: only AI predictions or AI explanations with highlighted words.
              With this information, we will further explore what effect do task difficulty and AI explanations have on
              the overreliance effect when a user and an AI collaborate.
            </p>
            <p class="text-start pt-3">
              [2] Parkes, A. (2017). The effect of individual and task characteristics on decision aid reliance.
              Behaviour & Information Technology, 36(2), 165-177. <br>
              [3] Zhang, Y., Liao, Q. V., & Bellamy, R. K. (2020, January). Effect of confidence and explanation on
              accuracy and trust calibration in AI-assisted decision making. In Proceedings of the 2020 conference on
              fairness, accountability, and transparency (pp. 295-305) <br>
              [4] Lai, V., Liu, H., & Tan, C. (2020, April). " Why is' Chicago'deceptive?" Towards Building Model-Driven
              Tutorials for Humans. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (pp.
              1-13).
            </p>
          </div>
          <div class="mt-5">
            <h3 class="mb-3">Share the study with your friends so they can test themselves.</h3>
            <SocialMediaShare/>
          </div>
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
import ResultBarChart from "@/components/ResultBarChart.vue";
import ResultExplanation from "@/components/ResultExplanation.vue";

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "Results",
  components: {
    'SocialMediaShare': SocialMediaShare,
    'ResultBarChart': ResultBarChart,
    'ResultExplanation': ResultExplanation,
  },
  data() {
    return {
      data_AI_general: 0.04003457333379701,
      data_AI_professor: -0.0028828069265192102,
      data_AI_physician: 0.1206277309053605,
      data_AI_psychologist: 0.08625232589048382,
      data_AI_teacher: 0.07272617660061897,
      data_AI_surgeon: -0.0765505598009596,
    }
  },
  computed: {
    data_you_professor: {
      get() {
        return this.store.bias.gap[0];
      },
      set(value) {
      },
    },
    data_you_physician: {
      get() {
        return this.store.bias.gap[1];
      },
      set(value) {
      },
    },
    data_you_psychologist: {
      get() {
        return this.store.bias.gap[2];
      },
      set(value) {
      },
    },
    data_you_teacher: {
      get() {
        return this.store.bias.gap[3];
      },
      set(value) {
      },
    },
    data_you_surgeon: {
      get() {
        return this.store.bias.gap[4];
      },
      set(value) {
      },
    },
    data_you_general: {
      get() {
        return this.store.bias.gap[5];
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