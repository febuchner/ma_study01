<template>
  <div>

    <ul class='five-likert'>
      <li v-for="l in levels" :key="l">
        <input style="color: red;" :id="getId(l)" type="radio" :name="inputname" :value="formatValue(l)" v-model="lvalue">
        <label :for="getId(l)">{{ l }}</label>
      </li>
    </ul>

    <!-- {{ $store.state.answers[this.inputname] }} -->

  </div>
</template>

<script>
import {useStore} from '@/stores/store.js'
import {inject} from "vue";


export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: 'LikertScale',
  props: [
    'inputname',
    'levels'
  ],
  computed: {
    lvalue: {
      // TODO: adapt to my store
      get() { return this.store.state.answers[this.inputname] },
      set(value) { this.store.commit('setAnswer', { 'key': this.inputname, 'value': value }) }
    }
  },
  methods: {
    formatValue(value) {
      return value.toLowerCase().replace(' ', '-')
    },
    getId(value) {
      return this.inputname + '-' + this.formatValue(value)
    }
  }
}
</script>

<style>
.likert, .five-likert {
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
  display: block;
  border-bottom: 2px solid #efefef;
}

.likert:last-of-type, .five-likert:last-of-type {
  border-bottom: 0;
}

.likert:before {
  content: '';
  position: relative;
  top: 9px;
  left: 7.0%;
  display: block;
  background-color: #ced4da;
  height: 4px;
  width: 84%;
}

.five-likert:before {
  content: '';
  position: relative;
  top: 9px;
  left: 9.5%;
  display: block;
  background-color: #ced4da;
  height: 4px;
  width: 76%;
}

.likert li {
  display: inline-block;
  width: 14%;
  text-align: center;
  vertical-align: top;
}

.five-likert li {
  display: inline-block;
  width: 19%;
  text-align: center;
  vertical-align: top;
}

.likert li input[type=radio],
.five-likert li input[type=radio] {
  display: block;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: -6px;
}

.likert li label,
.five-likert li label {
  width: 100%;
  font-size: 80%;
  /* UX Hack to enlarge the click area around the inputs */
  padding-top: 15px;
  position: relative;
  top: -10px;
}
</style>
