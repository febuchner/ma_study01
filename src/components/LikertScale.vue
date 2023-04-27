<template xmlns="http://www.w3.org/1999/html">
  <div class="px-3">
    <p class="mb-0">{{ this.question }}</p>

    <b-form-group class="five-likert">
      <b-form-radio class="my-1 d-inline-flex"
                    v-model="lvalue"
                    :name="likert_name"
                    :value=formatValue(this.levels[0])
      >{{ this.levels[0] }}
      </b-form-radio>
      <b-form-radio class="my-1 d-inline-flex"
                    v-model="lvalue"
                    :name="likert_name"
                    :value=formatValue(this.levels[1])
      >{{ this.levels[1] }}
      </b-form-radio>
      <b-form-radio class="my-1 d-inline-flex"
                    v-model="lvalue"
                    :name="likert_name"
                    :value=formatValue(this.levels[2])
      >{{ this.levels[2] }}
      </b-form-radio>
      <b-form-radio class="my-1 d-inline-flex"
                    v-model="lvalue"
                    :name="likert_name"
                    :value=formatValue(this.levels[3])
      >{{ this.levels[3] }}
      </b-form-radio>
      <b-form-radio class="my-1 d-inline-flex"
                    v-model="lvalue"
                    :name="likert_name"
                    :value=formatValue(this.levels[4])
      >{{ this.levels[4] }}
      </b-form-radio>
    </b-form-group>
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
    'question',
    'likert_name',
    'levels',
    'ai_error_sample',
    'likert_level',
  ],
  data() {
    return {
      question: this.question,
    }
  },
  computed: {
    lvalue: {
      get() {
        return this.store.aiInsights[this.ai_error_sample][this.likert_level];
      },
      set(value) {
        this.store.aiInsights[this.ai_error_sample][this.likert_level] = value;
      }
    }
  },
  methods: {
    formatValue(value) {
      return value.toLowerCase().replace(' ', '-')
    },
  }
}
</script>

<style>
.five-likert {
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
  display: block;
  border-bottom: 2px solid #efefef;
}

.five-likert:last-of-type {
  border-bottom: 0;
}

.five-likert:before {
  content: '';
  position: relative;
  top: 18px;
  left: 9.5%;
  display: block;
  background-color: #dfe0e1;
  height: 4px;
  width: 73%;
}

.five-likert .form-check {
  display: inline-block;
  width: 18%;
  text-align: center;
  vertical-align: top;
}

.five-likert .form-check input[type=radio] {
  display: block;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: -6px;
}

.five-likert .form-check label {
  width: 100%;
  /* UX Hack to enlarge the click area around the inputs */
  padding-top: 30px;
  position: relative;
  top: -10px;
}
</style>
