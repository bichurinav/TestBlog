<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

import type { Articles } from "./types";

interface Props {
  data: Articles;
}

const props = defineProps<Props>();
</script>

<template lang="pug">
section.article-list

  h2(v-if="props.data.title" class="article-list__title").
    {{ props.data.title }}

  .article-list__list 
    ArticleCard(
      v-for="(card, idx) in props.data.articles" :key="idx"
      :title="card.title"
      :link="card.link"
      :image="card.image"
    )
</template>

<style lang="scss" scoped>
.article-list {
  &__title {
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: $primary;
    margin-bottom: 50px;

    @media (max-width: 1339px) {
      font-size: 28px;
      margin-bottom: 25px;
    }

    @media (max-width: 767px) {
      font-size: 24px;
      text-align: center;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 574px) {
      gap: 10px;
    }
  }
}
</style>
