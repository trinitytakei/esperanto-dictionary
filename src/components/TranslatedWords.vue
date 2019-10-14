<template>
    <section id="bottom-wrapper">
      <div class="results-container">

        <div class="results-header">Translations of <strong>walnut</strong></div>

        <div class="results-table">

          <div class="results-table-cell translation"><strong>something super long</strong></div>
          <div class="results-table-cell meaning">{{ this.translatedWords }}</div>

          <div class="results-table-cell translation"><strong>nuez</strong></div>
          <div class="results-table-cell meaning">a blaack fox jumps over a big fox and this is something super long and this is something super long and this is something super long and this is something super long and this is something super long</div>

          <div class="results-table-cell translation"><strong>nuez</strong></div>
          <div class="results-table-cell meaning">a blaack fox jumps over a big fox</div>

          <div class="results-table-cell translation"><strong>nuez</strong></div>
          <div class="results-table-cell meaning">a blaack fox jumps over a big fox</div>
        </div>
      </div>

    </section>
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

<style>

</style>
