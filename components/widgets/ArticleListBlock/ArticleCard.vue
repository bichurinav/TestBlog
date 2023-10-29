<script setup lang="ts">
import type { Article } from "./types";

const props = defineProps<Article>();
</script>

<template lang="pug">
article.article-card
  NuxtImg(
    class="article-card__image" 
    :src="props.image"
    format="webp"
    loading="lazy"
    placeholder
  )
  h3.article-card__title {{ props.title }}
  ButtonBase(class="article-card__link" :to="props.link") Читать
</template>

<style lang="scss" scoped>
.article-card {
  max-width: 427px;

  &__image {
    width: 100%;
    max-height: 320px;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 20px;
    max-height: 60px;
    color: $primary;
    font-size: 22px;
    font-weight: 800;
    line-height: 30px;

    @media (max-width: 1339px) {
      font-size: 18px;
    }

    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: 16px;
      line-height: 26px;
    }
  }

  &__link {
    margin-top: 30px;

    @media (max-width: 767px) {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
