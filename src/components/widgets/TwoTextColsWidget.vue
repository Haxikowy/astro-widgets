<script setup lang="ts">
import type { TwoTextColsWidget } from "../../service/models";

defineProps<TwoTextColsWidget>();
</script>

<template>
  <section class="two-text-cols-widget">
    <div v-html="leftText" />
    <div v-html="rightText" />
  </section>
</template>

<style scoped>
.two-text-cols-widget {
  --columns: 1;

  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 50px;
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;

  @media (min-width: 768px) {
    --columns: 2;
  }
}
</style>
