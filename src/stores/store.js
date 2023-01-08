import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store',  {
  state: () => {
    return {
      stepIndex: 0,
      steps: [
        'informed-consent',
        'demografic-questions',
        'study-introduction',
      ],
      userInput: {
        userID: null,
        "created-on": null,
        "consent-accepted": null,
      },
      street: "Baker Street",
      housenumber: "221b",
      city: "London",
    };
  },
  getters: {
    getCurrentStep(state) {
      var currentStep = state.steps[state.stepIndex]
      // console.log(currentStep)
      return currentStep;
    },
    getConsentAccepted(state) {
      return state.userInput['consent-accepted'];
    },
    getFormattedStreet(state) {
      return state.street + " " + state.housenumber;
    },
    getNameAndCity(){
      return this.firstName + " is from " + this.city;
    },
  },
  actions: {
    // Restarts the study
    restartStudy(state) {
      state.stepIndex = 0
    },

    // Goes to next component
    nextStep(state) {
      // Scroll to top
      window.scrollTo(0,0)

      // Update screen
      state.stepIndex++

      // Log Timestamp
      // var step = state.stepIndex + '-' + state.steps[state.stepIndex]
      // var timestamp = state.answers.timestamps
      // timestamp[step] = new Date(Date.now()).toLocaleString("de-DE")

      // Update
      // var id = state.answers["participantId"]
      // var collectionName = state.isDebug ? 'debug' : 'prod'
      // var db = firebase.firestore()
      // db
      //     .collection(collectionName)
      //     .doc(id)
      //     .set(state.answers)
      //     .then( () => {
      //       // console.log("Updated")
      //     })
    },
  },
})
