<template>
  <section id="top-wrapper" class="flex-vertical-center">
    <div id="languages-wrapper">
      <span id="from-language">English</span>
      <language-swapper id="swap-languages"></language-swapper>
      <span id="to-language">Esperanto</span>
    </div>
    <div class="textbox-container">
      <input
        class="word-to-translate"
        type="text"
        name="word-to-translate"
        v-model="inputWord"
        @keyup="translateWord"
        @focus="inputWord = ''"
      />
      <span class="word-to-translate"></span>
    </div>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";
import dictionary from "../esperanto_english_dict.js";
import LanguageSwapper from "./LanguageSwapper";

export default {
  components: {
    LanguageSwapper
  },
  data: function() {
    return {
      inputWord: "Enter word here",
      exact_translations: null,
      related_translations: null,
      dictionary: dictionary
    };
  },
  methods: {
    translateWord() {
      if (this.inputWord.length <= 1) {
        this.exact_translations = "";
      } else {
        this.exact_translations = dictionary
          .filter(pair => pair[0] == this.inputWord.toLowerCase())
          .map(pair => pair[1]);
        this.related_translations = dictionary
          .filter(
            pair =>
              pair[0] !== this.inputWord.toLowerCase() &&
              pair[0].includes(this.inputWord.toLowerCase())
          )
          .map(pair => [pair[0], pair[1]]);
      }

      eventBus.$emit("translationReady", [
        this.exact_translations.slice(0, 50),
        this.related_translations.slice(0, 50),
        this.inputWord
      ]);
    }
  }
};
</script>

<style></style>
