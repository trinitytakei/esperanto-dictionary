<template>
  <section id="top-wrapper" class="flex-vertical-center">
    <div id="languages-wrapper">
      <span id="from-language">English</span>
      <!-- <img viewBox="0 0 60 55" id="swap-languages" src="./src/assets/icons/exchange-arrows.svg" /> -->
      <span id="to-language">Esperanto</span>
    </div>
    <div class="textbox-container">
      <input class="word-to-translate" type="text" name="word-to-translate"  v-model="inputWord" @keyup="translateWord">
      <span class="word-to-translate"></span>
    </div>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  data: function() {
    return {
      inputWord: "Enter word here",
      translation: null,
      dictionary: {
        red: "rojo",
        green: "verde",
        blue: "azul",
        yellow: "amarillo",
        gray: "gris",
        black: "negro",
        pink: "rosa",
        white: "blanco",
        gold: "dorado"
      }
    };
  },
  methods: {
    translateWord() {
      if (this.inputWord.length <= 1) {
        this.translation = "";
      } else {
        this.translation = this.dictionary[this.inputWord];
      }

      eventBus.$emit("translationReady", this.translation);
    }
  }
};
</script>

<style>

</style>
