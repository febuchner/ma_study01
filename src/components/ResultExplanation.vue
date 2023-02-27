<template>
  <div v-if="isNaN(this.data_you_profession)">
    We are sorry that your gender bias of the "{{this.profession}}" profession could not be calculated.
  </div>
  <div v-if="isFinite(this.data_you_profession)">
    Your gender bias score of the "{{this.profession}}" profession is {{this.data_you_profession}}.
  </div>

  <div v-if="isNaN(closer_to_zero)">
    So, we can't say whether you are more or less gender biased than our AI in the "{{this.profession}}" profession.
  </div>
  <div v-if="closer_to_zero === null">
    Since it is as far from zero as our AI's, <strong>you are just as gender biased as our AI is</strong> in the "{{this.profession}}" profession!
  </div>
  <div v-else-if="closer_to_zero">
    Since it is closer to zero than that of our AI, <strong>you are less gender biased than our AI</strong> in the "{{this.profession}}" profession!
  </div>
  <div v-else>
    Since it is further away from zero than that of our AI, <strong>you are more gender biased than our AI</strong> in the "{{this.profession}}" profession!
  </div>

  <div  v-if="isFinite(this.data_you_profession) && this.data_you_profession > this.data_AI_profession">
    You can correctly predict a female {{this.profession}} better and/or a male {{this.profession}} worse than our AI.
  </div>
  <div v-else-if="isFinite(this.data_you_profession) && this.data_you_profession === this.data_AI_profession">
    You are proportionally as good as our AI at predicting a female {{this.profession}} and a male {{this.profession}}.
  </div>
  <div v-else-if="isFinite(this.data_you_profession) && this.data_you_profession < this.data_AI_profession">
    You can correctly predict a female {{this.profession}} worse and/or a male {{this.profession}} better than our AI.
  </div>

  <div v-if="isFinite(this.data_you_profession) && this.data_you_profession > 0.0">
    You are better at predicting a female {{this.profession}} than a male {{this.profession}}.
  </div>
  <div v-else-if="isFinite(this.data_you_profession) && this.data_you_profession === 0.0">
    You can predict a female {{this.profession}} as well as a male {{this.profession}}.
  </div>
  <div v-else-if="isFinite(this.data_you_profession) && this.data_you_profession < 0.0">
    You are better at predicting a male {{this.profession}} than a female {{this.profession}}.
  </div>
</template>

<script>
export default {
  name: "ResultExplanation",
  props: [
    'data_you_profession',
    'data_AI_profession',
    'profession',
    'closer_to_zero'
  ],
}
</script>

<style scoped>

</style>