;
<script setup lang="ts">
import { computed } from "vue";
import { usePageStore } from "~/stores/pageStore";

definePageMeta({
  middleware: "page",
});

const route = useRoute();

const store = usePageStore();

const path = route.path;

const meta = computed(() => store.$state.meta);
const body = computed(() => store.$state.body);

useSeoMeta({
  title: meta.value.title,
  ogTitle: meta.value.title,
  description: meta.value.description,
  ogDescription: meta.value.description,
});
</script>

<template lang="pug">
div.container
  component(
    v-for="(block, idx) in body"
    :key="idx + block.id"
    :id="idx + block.id"
    :is="getNameWidget(block.type)"
    :data="block.data"
    )
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  @media (max-width: 1199px) {
    row-gap: 60px;
  }
}
</style>
