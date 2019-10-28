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
        <div class="results-table-cell translation">
          <span v-if="word_to_translate === ''">
            Your search results will appear here.
          </span>
          <span v-else>
            <span v-if="this.exact_translations.length > 0">
              <strong>{{ word_to_translate }}</strong>
            </span>
            <span v-else>
              No Matches found!
            </span>
          </span>
        </div>
        <div
          class="results-table-cell meaning"
          v-for="tr in this.exact_translations"
          :key="tr"
        >
          {{ tr }}
        </div>

        <div
          class="results-table-cell meaning"
          v-for="tr in this.related_translations"
          :key="tr"
        >
          {{ tr }}
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
