<template>
  <transition name="fade">
    <div v-if="this.store.getCurrentStep === 'demographic-questions'">
      <div class="px-3">
        <p>
          <span>Please tell us a bit about yourself. <b>Why?</b></span>
        </p>
        <p>
          <span><i><span class="text-danger fw-bold">*</span> marks a required field. The more information you enter, the more detailed results we can show you!</i></span>
        </p>

        <b-form-group
            class="mb-4"
            label="Have you taken this test before?"
            label-for="demographics_hasTakenTest"
            label-class="font-weight-bold">
          <b-form-radio-group
              id="btn-radios"
              v-model="userTakenTestBefore"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="radios-btn-default"
              buttons
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group
            class="mb-4"
            label="Which country did you live in the longest growing up?"
            label-for="demographics_countryLivedInLongest"
            label-class="font-weight-bold"
        >
          <b-form-select v-model="selfAge" :options="[
            '18-24 Jahre',
            '25-34 Jahre',
            '35-44 Jahre',
            '45-54 Jahre',
            '55-64 Jahre',
            '65+ Jahre'
          ]"></b-form-select>
        </b-form-group>


        <form id="demographics" class="ant-form ant-form-horizontal sc-lcuiOb jjBWgU">
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_hasTakenTest"
                                                                       class="ant-form-item-required"
                                                                       title="Have you taken this test before?">Have
              you taken this test before?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-radio-group ant-radio-group-solid sc-fbkiRW bnJbWE"
                       id="demographics_hasTakenTest"><label class="ant-radio-button-wrapper"><span
                      class="ant-radio-button"><input type="radio" class="ant-radio-button-input"
                                                      value="yes"><span
                      class="ant-radio-button-inner"></span></span><span>Yes</span></label><label
                      class="ant-radio-button-wrapper"><span class="ant-radio-button"><input
                      type="radio" class="ant-radio-button-input" value="no"><span
                      class="ant-radio-button-inner"></span></span><span>No</span></label></div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_countryLivedInLongest"
                                                                       class="ant-form-item-required"
                                                                       title="Which country did you live in the longest growing up?">Which
              country did you live in the longest growing up?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        autocomplete="off" type="search" class="ant-select-selection-search-input"
                        role="combobox" aria-haspopup="listbox" aria-owns="rc_select_0_list"
                        aria-autocomplete="list" aria-controls="rc_select_0_list"
                        aria-activedescendant="rc_select_0_list_0" value="" id="rc_select_0"></span><span
                        class="ant-select-selection-placeholder">Select a country</span></div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_countryOfResidence"
                                                                       class=""
                                                                       title="Which country do you currently live in?">Which
              country do you currently live in?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        autocomplete="off" type="search" class="ant-select-selection-search-input"
                        role="combobox" aria-haspopup="listbox" aria-owns="rc_select_1_list"
                        aria-autocomplete="list" aria-controls="rc_select_1_list"
                        aria-activedescendant="rc_select_1_list_0" value="" id="rc_select_1"></span><span
                        class="ant-select-selection-placeholder">Select a country</span></div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_age" class=""
                                                                       title="How old are you?">How old are
              you?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-input-number">
                    <div class="ant-input-number-handler-wrap"><span unselectable="on" role="button"
                                                                     aria-label="Increase Value"
                                                                     aria-disabled="false"
                                                                     class="ant-input-number-handler ant-input-number-handler-up"><span
                        role="img" aria-label="up"
                        class="anticon anticon-up ant-input-number-handler-up-inner"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></span><span
                        unselectable="on" role="button" aria-label="Decrease Value"
                        aria-disabled="false"
                        class="ant-input-number-handler ant-input-number-handler-down"><span
                        role="img" aria-label="down"
                        class="anticon anticon-down ant-input-number-handler-down-inner"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                    </div>
                    <div class="ant-input-number-input-wrap"><input autocomplete="off" role="spinbutton"
                                                                    step="1" id="demographics_age"
                                                                    class="ant-input-number-input"
                                                                    value=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_nativeLanguage"
                                                                       class=""
                                                                       title="What is your native language? (if multiple, pick the one you speak in most often)">What
              is your native language? (if multiple, pick the one you speak in most often)</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        id="demographics_nativeLanguage" autocomplete="off" type="search"
                        class="ant-select-selection-search-input" role="combobox"
                        aria-haspopup="listbox" aria-owns="demographics_nativeLanguage_list"
                        aria-autocomplete="list" aria-controls="demographics_nativeLanguage_list"
                        aria-activedescendant="demographics_nativeLanguage_list_0"
                        value=""></span><span class="ant-select-selection-placeholder">Enter your native language</span>
                    </div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_religion" class=""
                                                                       title="What religion or religious denomination do you belong to?">What
              religion or religious denomination do you belong to?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        id="demographics_religion" autocomplete="off" type="search"
                        class="ant-select-selection-search-input" role="combobox"
                        aria-haspopup="listbox" aria-owns="demographics_religion_list"
                        aria-autocomplete="list" aria-controls="demographics_religion_list"
                        aria-activedescendant="demographics_religion_list_0" readonly=""
                        unselectable="on" value="" style="opacity: 0;"></span><span
                        class="ant-select-selection-placeholder">Select a religion or religious denomination</span>
                    </div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_educationLevel"
                                                                       class=""
                                                                       title="What is the highest level of education that you have received or are pursuing?">What
              is the highest level of education that you have received or are pursuing?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        id="demographics_educationLevel" autocomplete="off" type="search"
                        class="ant-select-selection-search-input" role="combobox"
                        aria-haspopup="listbox" aria-owns="demographics_educationLevel_list"
                        aria-autocomplete="list" aria-controls="demographics_educationLevel_list"
                        aria-activedescendant="demographics_educationLevel_list_0" readonly=""
                        unselectable="on" value="" style="opacity: 0;"></span><span
                        class="ant-select-selection-placeholder">Select an education level</span>
                    </div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_gender" class=""
                                                                       title="What is your gender?">What is your
              gender?</label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow">
                    <div class="ant-select-selector"><span class="ant-select-selection-search"><input
                        id="demographics_gender" autocomplete="off" type="search"
                        class="ant-select-selection-search-input" role="combobox"
                        aria-haspopup="listbox" aria-owns="demographics_gender_list"
                        aria-autocomplete="list" aria-controls="demographics_gender_list"
                        aria-activedescendant="demographics_gender_list_0" readonly=""
                        unselectable="on" value="" style="opacity: 0;"></span><span
                        class="ant-select-selection-placeholder">Select a gender</span></div>
                    <span class="ant-select-arrow" unselectable="on" aria-hidden="true"
                          style="user-select: none;"><span role="img" aria-label="down"
                                                           class="anticon anticon-down ant-select-suffix"><svg
                        viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true"><path
                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="row-gap: 0px;">
            <div class="ant-col ant-col-12 ant-form-item-label"><label for="demographics_isPersonalComputer"
                                                                       class="" title=""><span>Can we store your demographics on your computer? <b
                class="sc-ezredP dXrdzt">Why?</b></span></label></div>
            <div class="ant-col ant-col-12 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <div class="ant-radio-group ant-radio-group-solid sc-fbkiRW bnJbWE"
                       id="demographics_isPersonalComputer"><label class="ant-radio-button-wrapper"><span
                      class="ant-radio-button"><input type="radio" class="ant-radio-button-input"
                                                      value="yes"><span
                      class="ant-radio-button-inner"></span></span><span>Yes</span></label><label
                      class="ant-radio-button-wrapper"><span class="ant-radio-button"><input
                      type="radio" class="ant-radio-button-input" value="no"><span
                      class="ant-radio-button-inner"></span></span><span>No</span></label></div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button disabled="" type="button" class="ant-btn ant-btn-primary ant-btn-lg sc-iBaQBe jzwDVq">
                <span>Next <span role="img" aria-label="arrow-right" class="anticon anticon-arrow-right"><svg
                    viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em"
                    fill="currentColor" aria-hidden="true"><path
                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg></span></span>
        </button>
      </div>




      <div class="card-header">
        Informationen zu Ihrer Person
      </div>
      <div class="card-body">
        <p>
          Die folgenden Informationen helfen uns, Ihre Studienergebnisse im Anschluss besser einordnen zu können.
        </p>

        <div style="">
          <b-form-group
              class="mb-4"
              label="Mein Altersgruppe in Jahren *"
              label-for="self-age"
              label-class="font-weight-bold"
          >
            <!-- <b-form-input v-model="selfAge" id="self-age" type="number" trim></b-form-input> -->
            <b-form-select v-model="selfAge" :options="[
            '18-24 Jahre',
            '25-34 Jahre',
            '35-44 Jahre',
            '45-54 Jahre',
            '55-64 Jahre',
            '65+ Jahre'
          ]"></b-form-select>
          </b-form-group>

          <b-form-group
              class="mb-4"
              label="Mit diesem Geschlecht identifiziere ich mich bevorzugt *"
              label-for="self-gender"
              label-class="font-weight-bold"
          >
            <b-form-select v-model="selfGender" :options="['Weiblich', 'Männlich', 'Divers']"></b-form-select>
          </b-form-group>

          <b-form-group
              class="mb-4"
              label="Mein höchster Bildungsabschluss lässt sich am ehesten beschreiben mit *"
              label-for="self-education"
              label-class="font-weight-bold"
          >
            <b-form-select v-model="selfEducation" :options="[
            'Kein Schulabschluss',
            'Grund-/Hauptschulabschluss',
            'Realschule (Mittlere Reife)',
            'Gymnasium (Abitur)',
            'Abgeschlossene Ausbildung',
            'Fachhochschulabschluss',
            'Bachelorabschluss',
            'Masterabschluss',
            'Promotion',
            'Andere'
          ]"></b-form-select>
          </b-form-group>
        </div>

        <label class="font-weight-bold mb-0">
          So häufig nutze ich Tabellenkalkulationsprogramme *
          <br/>
          <small>
            (z.B. Microsoft Excel, Apple Numbers oder Google Spreadsheets)
          </small>
        </label>
        <scale-likert
            inputname="self-spreadsheet"
            :levels="['Nie', 'Weniger als Monatlich', 'Monatlich', 'Wöchentlich', 'Täglich']"
        />

        <label class="font-weight-bold mb-0">
          In meinem Alltag erkläre ich anderen Personen regelmäßig Dinge *
          <br/>
          <small>
            (z.B. Seminarinhalte an Kommilitonen/Studierende, Smartphone-Funktionen an Freunde)
          </small>
        </label>
        <scale-likert
            inputname="self-experience-ml"
            :levels="['Stimme gar nicht zu', 'Stimme eher nicht zu', 'Unentschieden', 'Stimme eher zu', 'Stimme völlig zu']"
        />

        <label class="font-weight-bold mb-0">
          Ich verfüge über praktische Erfahrungen im Bereich der Künstlichen Intelligenz (KI) *
          <br/>
          <small>
            (z.B. Anwendung statistischer Lernverfahren oder Trainieren von Modellen des Maschinellen Lernens)
          </small>
        </label>
        <scale-likert
            inputname="self-experience-explaining"
            :levels="['Stimme gar nicht zu', 'Stimme eher nicht zu', 'Unentschieden', 'Stimme eher zu', 'Stimme völlig zu']"
        />

        <button @click="validateForm" type="submit" class="btn btn-primary">Weiter</button>

        <span class="mx-3 small text-danger" v-if="this.showFormError">Bitte füllen Sie zuerst alle Felder aus.</span>

      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from '@/stores/store.js'

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "DemographicQuestions",
  data() {
    return {
      showFormError: false
    }
  },
  computed: {
    userTakenTestBefore: {
      get() {  return { getUserTakenTestBefore: this.store.getUserTakenTestBefore } },
      set(value) { this.store.userInput['user-taken-test-before'] = value},
    },
    userOriginCountry: {
      get() {  return { getUserOriginCountry: this.store.getUserOriginCountry } },
      set(value) { this.store.userInput['user-origin-country'] = value},
    },
    userCurrentCountry: {
      get() {  return { getUserCurrentCountry: this.store.getUserCurrentCountry } },
      set(value) { this.store.userInput['user-current-country'] = value},
    },
    userAge: {
      get() {  return { getUserAge: this.store.getUserAge } },
      set(value) { this.store.userInput['user-age'] = value},
    },
    userReligion: {
      get() {  return { getUserReligion: this.store.getUserReligion } },
      set(value) { this.store.userInput['user-religion'] = value},
    },
    userEducation: {
      get() {  return { getUserEducation: this.store.getUserEducation } },
      set(value) { this.store.userInput['user-education'] = value},
    },
    userGender: {
      get() {  return { getUserGender: this.store.getUserGender} },
      set(value) { this.store.userInput['user-gender'] = value},
    },
    userCookieConsent: {
      get() {  return { getUserCookieConsent: this.store.getUserCookieConsent } },
      set(value) { this.store.userInput['user-cookie-consent'] = value},
    },

  },
  methods: {
    isValidInputs: function() {
      let store = this.store.userInput
      if ( store['user-taken-test-before'] !== null &&
          store['user-origin-country'] !== null &&
          store['user-current-country'] !== null &&
          store['user-age'] !== null &&
          store['user-religion'] !== null &&
          store['user-education'] !== null &&
          store['user-gender'] !== null
      ) {
        this.showFormError = false
        return true
      } else {
        this.showFormError = true
        return false
      }
    },

    // if form is valid, go to next step
    validateForm: function() {
      if( this.isValidInputs() ) {
        this.store.nextStep(this.store);
      }
    }
  },
}
</script>

<style scoped>

</style>