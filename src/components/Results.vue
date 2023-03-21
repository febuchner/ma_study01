<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'results'">
      <div class="px-0 px-sm-3">
        <div class="">
          <h1>This is your gender bias!</h1>
        </div>

        <div class="results">
          <h2 class="my-5">This graph shows you your personal gender bias compared to that of our AI and to the average of all
            other LabintheWild users who have taken this test.</h2>
          <ResultBarChart chartlabel="Average gender bias"
                          :data_AI="this.data_AI_average"
                          :data_you="this.data_you_average"
                          :data_litw="this.data_litw_average"/>
          <div class="mt-3">
            <div v-if="isNaN(this.data_you_average)">
              We are sorry that your personal average gender bias could not be calculated.
            </div>
            <div v-else>
              Your personal average gender bias score is <strong>{{ this.data_you_average }}</strong>.
            </div>

            <div v-if="isNaN(data_AI_you_avg_closer_to_zero)">
              So, we can't say whether you are on average more or less gender biased than our AI.
            </div>
            <div v-if="data_AI_you_avg_closer_to_zero === null">
              Since it is as far from zero as our AI's, <strong>you are on average just as gender biased as our AI
              is</strong>!
            </div>
            <div v-else-if="data_AI_you_avg_closer_to_zero">
              Since it is closer to zero than that of our AI, <strong>you are on average less gender biased than our
              AI</strong>!
            </div>
            <div v-else>
              Since it is further away from zero than that of our AI, <strong>you are on average more gender biased than
              our AI</strong>!
            </div>

            <div v-if="isNaN(data_litw_you_avg_closer_to_zero) || this.data_litw_average === null">
              We can't say whether you are on average more or less gender biased than the average of other LabintheWild users.
            </div>
            <div v-if="data_litw_you_avg_closer_to_zero === null && this.data_litw_average != null">
              Because your average gender bias score is just as far from zero as the average score of other LabintheWild
              users, <strong>you are on average just as gender biased as other LabintheWild users</strong>!
            </div>
            <div v-else-if="data_litw_you_avg_closer_to_zero === true && this.data_litw_average != null">
              Because your average gender bias score is closer to zero than the average of other LabintheWild users, <strong>you
              are on average less gender biased than the average of other LabintheWild users</strong>!
            </div>
            <div v-else-if="data_litw_you_avg_closer_to_zero === false && this.data_litw_average != null">
              Because your average gender bias score is further away from zero than the average of other LabintheWild users,
              <strong>you are on average more gender biased than the average of other LabintheWild users</strong>!
            </div>

            <div v-if="isFinite(this.data_you_average) && this.data_you_average > this.data_AI_average">
              Your personal average gender bias is greater than the average gender bias of our AI. This means that you
              can predict a <strong>woman's true profession better and/or a man's true profession worse</strong> than
              our AI.

            </div>
            <div v-else-if="isFinite(this.data_you_average) && this.data_you_average === this.data_AI_average">
              Your personal average gender bias is equal to the average gender bias of our AI. This means that you are
              proportionally as good as our AI in predicting the true profession of a woman and a man.

            </div>
            <div v-else-if="isFinite(this.data_you_average) && this.data_you_average < this.data_AI_average">
              Your personal average gender bias score is less than the average gender bias score of our AI. This means that you can
              predict a woman's true profession worse and/or a man's true profession better than our
              AI.
            </div>

            <div v-if="isFinite(this.data_you_average) && this.data_you_average > 0.0">
              Because your personal average gender bias is greater than zero, this means that you are better at
              predicting
              a woman's profession than a man's.
            </div>
            <div v-else-if="isFinite(this.data_you_average) && this.data_you_average === 0.0">
              Because your personal average gender bias is equal to zero, this means that you can predict a
              woman's
              profession just as well as a man's.
            </div>
            <div v-else-if="isFinite(this.data_you_average) && this.data_you_average < 0.0">
              Because your personal average gender bias is less than zero, this means that you are better at
              predicting a
              man's profession than a woman's.
            </div>

            <div class="mt-5"> We calculate the gender bias by computing the true positive rate (TPR) gender gap, or
              more precisely,
              the difference in TPRs between genders for each of the five professions and the average of these.
              The TPR here indicates the proportion of people with a specific gender and profession who are correctly
              predicted to have that profession.
              We derived this quantification of gender bias from De-Arteaga et al.'s study about semantic
              representation bias [1].
              <br>
            </div>
          </div>
          <div class="mt-5">
            In the graph above you can see your average of the five TPR gender gaps as <strong>average gender
            bias</strong>.
            <p>Below you find a breakdown of your gender bias for <strong>each of the five professions</strong> compared to our AI and
              the average of all other LabintheWild users who have taken this test.</p>
            <div class="my-5">
              <h3>Gender bias of profession "professor"</h3>
              <ResultBarChart chartlabel="Gender bias of profession professor"
                              :data_AI="this.data_AI_professor"
                              :data_you="this.data_you_professor"
                              :data_litw="this.data_litw_professor"/>
              <ResultExplanation :data_you_profession="this.data_you_professor"
                                 :data_AI_profession="this.data_AI_professor"
                                 :data_litw_profession="this.data_litw_professor"
                                 profession="professor"
                                 :closer_to_zero_AI="this.data_AI_you_professor_closer_to_zero"
                                 :closer_to_zero_litw="this.data_litw_you_professor_closer_to_zero"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "physician"</h3>
              <ResultBarChart chartlabel="Gender bias of profession physician"
                              :data_AI="this.data_AI_physician"
                              :data_you="this.data_you_physician"
                              :data_litw="this.data_litw_physician"/>
              <ResultExplanation :data_you_profession="this.data_you_physician"
                                 :data_AI_profession="this.data_AI_physician"
                                 :data_litw_profession="this.data_litw_physician"
                                 profession="physician"
                                 :closer_to_zero_AI="this.data_AI_you_physician_closer_to_zero"
                                 :closer_to_zero_litw="this.data_litw_you_physician_closer_to_zero"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "psychologist"</h3>
              <ResultBarChart chartlabel="Gender bias of profession psychologist"
                              :data_AI="this.data_AI_psychologist"
                              :data_you="this.data_you_psychologist"
                              :data_litw="this.data_litw_psychologist"/>
              <ResultExplanation :data_you_profession="this.data_you_psychologist"
                                 :data_AI_profession="this.data_AI_psychologist"
                                 :data_litw_profession="this.data_litw_psychologist"
                                 profession="psychologist"
                                 :closer_to_zero_AI="this.data_AI_you_psychologist_closer_to_zero"
                                 :closer_to_zero_litw="this.data_litw_you_psychologist_closer_to_zero"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "teacher"</h3>
              <ResultBarChart chartlabel="Gender bias of profession teacher"
                              :data_AI="this.data_AI_teacher"
                              :data_you="this.data_you_teacher"
                              :data_litw="this.data_litw_teacher"/>
              <ResultExplanation :data_you_profession="this.data_you_teacher"
                                 :data_AI_profession="this.data_AI_teacher"
                                 :data_litw_profession="this.data_litw_teacher"
                                 profession="teacher"
                                 :closer_to_zero_AI="this.data_AI_you_teacher_closer_to_zero"
                                 :closer_to_zero_litw="this.data_litw_you_teacher_closer_to_zero"/>
            </div>

            <div class="my-5">
              <h3>Gender bias of profession "surgeon"</h3>
              <ResultBarChart chartlabel="Gender bias of profession surgeon"
                              :data_AI="this.data_AI_surgeon"
                              :data_you="this.data_you_surgeon"
                              :data_litw="this.data_litw_surgeon"/>
              <ResultExplanation :data_you_profession="this.data_you_surgeon"
                                 :data_AI_profession="this.data_AI_surgeon"
                                 :data_litw_profession="this.data_litw_surgeon"
                                 profession="surgeon"
                                 :closer_to_zero_AI="this.data_AI_you_surgeon_closer_to_zero"
                                 :closer_to_zero_litw="this.data_litw_you_surgeon_closer_to_zero"/>
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
            <p class="mt-4">
              Your results will help us gaining insights in two main areas. <br>
              First, we will be able to rate the difficulty of the different resumes based on the percentage of users
              who decided for the correct profession.
              Prior work suggested that reliance on AI-suggested assistance increases as the task's complexity rises
              [2].
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
        You can also return to <a href="https://www.labinthewild.org/">labinthewild.org</a> or close this browser window.</h2>

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
      data_AI_average: 0.04003457333379701,
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
        return (this.store.bias.gap['0']);
      },
      set(value) {
      },
    },
    data_you_physician: {
      get() {
        return (this.store.bias.gap['1']);
      },
      set(value) {
      },
    },
    data_you_psychologist: {
      get() {
        return (this.store.bias.gap['2']);
      },
      set(value) {
      },
    },
    data_you_teacher: {
      get() {
        return (this.store.bias.gap['3']);
      },
      set(value) {
      },
    },
    data_you_surgeon: {
      get() {
        return (this.store.bias.gap['4']);
      },
      set(value) {
      },
    },
    data_you_average: {
      get() {
        return (this.store.bias.gap['5']);
      },
      set(value) {
      },
    },
    data_litw_professor: {
      get() {
        return (this.store.bias.gap_labinthewild[0]);
      },
      set(value) {
      },
    },
    data_litw_physician: {
      get() {
        return (this.store.bias.gap_labinthewild[1]);
      },
      set(value) {
      },
    },
    data_litw_psychologist: {
      get() {
        return (this.store.bias.gap_labinthewild[2]);
      },
      set(value) {
      },
    },
    data_litw_teacher: {
      get() {
        return (this.store.bias.gap_labinthewild[3]);
      },
      set(value) {
      },
    },
    data_litw_surgeon: {
      get() {
        return (this.store.bias.gap_labinthewild[4]);
      },
      set(value) {
      },
    },
    data_litw_average: {
      get() {
        return (this.store.bias.gap_labinthewild[5]);
      },
      set(value) {
      },
    },
    data_AI_you_avg_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_average, this.data_you_average);
      },
      set(value) {
      },
    },
    data_AI_you_professor_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_professor, this.data_you_professor);
      },
      set(value) {
      },
    },
    data_AI_you_physician_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_physician, this.data_you_physician);
      },
      set(value) {
      },
    },
    data_AI_you_psychologist_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_psychologist, this.data_you_psychologist);
      },
      set(value) {
      },
    },
    data_AI_you_teacher_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_teacher, this.data_you_teacher);
      },
      set(value) {
      },
    },
    data_AI_you_surgeon_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_AI_surgeon, this.data_you_surgeon);
      },
      set(value) {
      },
    },
    data_litw_you_avg_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_average, this.data_you_average);
      },
      set(value) {
      },
    },
    data_litw_you_professor_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_professor, this.data_you_professor);
      },
      set(value) {
      },
    },
    data_litw_you_physician_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_physician, this.data_you_physician);
      },
      set(value) {
      },
    },
    data_litw_you_psychologist_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_psychologist, this.data_you_psychologist);
      },
      set(value) {
      },
    },
    data_litw_you_teacher_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_teacher, this.data_you_teacher);
      },
      set(value) {
      },
    },
    data_litw_you_surgeon_closer_to_zero: {
      get() {
        return this.userCloserToZero(this.data_litw_surgeon, this.data_you_surgeon);
      },
      set(value) {
      },
    },
  },
  methods: {
    userCloserToZero: function (other, user) {
      if (isNaN(other) || isNaN(user)) {
        return NaN;
      }
      if (Math.abs(other) === Math.abs(user)) {
        return null;
      }
      return Math.abs(other) > Math.abs(user);
    }
  },
}
</script>

<style scoped>

</style>