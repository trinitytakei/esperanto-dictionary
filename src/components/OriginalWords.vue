<template>
  <div>
    <input type="text" v-model="inputWord" @keyup="translateWord" />
  </div>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  data: function() {
    return {
      inputWord: "Test",
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

<style></style>
