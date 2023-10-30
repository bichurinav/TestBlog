<script setup lang="ts">
interface IntroArticle {
  title: string;
  image: string;
  reading_time: number;
  views_count: number;
  short_description: string;
}

interface Props {
  data: IntroArticle;
}

const props = defineProps<Props>();
</script>

<template lang="pug">
section.article-intro
  NuxtImg(
    class="article-intro__image"
    :src="props.data.image"
    :alt="props.data.title"
    format="webp"
  )
  .article-intro-content
    h1.article-intro__title {{ props.data.title }}
    .article-intro-info
      .info-item
        img(class="info-item__icon" src="/img/article_intro_block/clock.svg")
        span.info-item__text {{ props.data.reading_time }} мин время чтения
      .info-item
        img(class="info-item__icon" src="/img/article_intro_block/watch.svg")
        span.info-item__text {{ props.data.views_count }} прочитали статью
    p.article-intro__desc {{ props.data.short_description }}
</template>

<style lang="scss">
.article-intro {
  display: flex;
  gap: 30px;

  @media (max-width: 1199px) {
    flex-direction: column;
  }

  &__image {
    width: 540px;
    height: 580px;
    border-radius: 2px 220px 2px 2px;

    @media (max-width: 1199px) {
      width: 320px;
      height: 360px;
      order: 2;
      margin: 0 auto;
      border-radius: 2px 2px 120px 120px;
    }

    @media (max-width: 374px) {
      width: 100%;
    }
  }

  &-content {
    margin-top: 90px;
    max-width: 768px;

    @media (max-width: 1199px) {
      max-width: 880px;
      margin: 0 auto;
      order: 1;
    }
  }

  &__title {
    font-size: 56px;
    line-height: 66px;

    @media (max-width: 1339px) {
      font-size: 42px;
    }

    @media (max-width: 1199px) {
      max-width: 600px;
    }

    @media (max-width: 767px) {
      text-align: center;
      font-size: 32px;
      line-height: 46px;
      max-width: 100%;
    }
  }

  &-info {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .info-item {
      display: flex;
      color: $gray;

      &__text {
        margin-left: 8px;
        line-height: 20px;
      }
    }
  }

  &__desc {
    margin-top: 50px;
    line-height: 26px;

    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }
}
</style>
