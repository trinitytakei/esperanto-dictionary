<template>
  <p>{{ this.translatedWords }}</p>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  data: function() {
    return {
      translatedWords: ""
    };
  },
  created() {
    eventBus.$on("translationReady", translatedWords => {
      this.translatedWords = translatedWords;
    });
  }
};
</script>

<style></style>
