<template>
  <div id="app">
    <original-words />
    <hr />
    <translated-words />
  </div>
</template>

<script>
import TranslatedWords from "./components/TranslatedWords.vue";
import OriginalWords from "./components/OriginalWords.vue";

export default {
  components: {
    TranslatedWords,
    OriginalWords
  }
};
</script>

<style></style>
