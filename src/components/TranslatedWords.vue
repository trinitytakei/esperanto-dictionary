<template>
  <section id="bottom-wrapper">
    <div class="results-container">
      <div class="results-header">
        Translations
        <span v-if="word_to_translate !== ''">
          of <strong>{{ word_to_translate }}</strong>
        </span>
      </div>

      <div class="results-table">
        <div class="results-row">
          {{ translation_status }}
        </div>

        <div class="results-row">
          <div class="results-table-cell translation">
            <span v-if="this.exact_translations.length > 0">
              <strong>{{ word_to_translate }}</strong>
            </span>
          </div>
          <div
            class="results-table-cell meaning"
            v-for="tr in this.exact_translations"
            :key="tr"
          >
            {{ tr }}
          </div>
        </div>
      </div>

      <div class="results-header" v-if="word_to_translate !== ''">
        Terms containing
        <span>
          <strong>{{ word_to_translate }}</strong>
        </span>
      </div>

      <div class="results-table">
        <div class="results-row" v-for="translation of this.related_translations">
          <div class="results-table-cell translation">
            <strong>{{ translation[0] }}</strong>
          </div>
          <div class="results-table-cell meaning">
            {{ translation[1] }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  data: function() {
    return {
      word_to_translate: "",
      exact_translations: "",
      related_translations: ""
    };
  },
  computed: {
    translation_status: function() {
      if (this.word_to_translate === "") {
        return "Your translation will appear here!";
      }
      if (this.exact_translations.length === 0) {
        return "No exact matches found!";
      }
      return "";
    }
  },
  created() {
    eventBus.$on("translationReady", translation_data => {
      [
        this.exact_translations,
        this.related_translations,
        this.word_to_translate
      ] = translation_data;
    });
  }
};
</script>

<style></style>
