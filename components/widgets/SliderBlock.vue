<script setup lang="ts">
interface Props {
  id: string;
  data: string[];
}

const props = defineProps<Props>();
</script>

<template lang="pug">
section.slider-block
  Swiper(
    :id="props.id"
    :modules="[SwiperNavigation, SwiperPagination]"
    :centered-slides="true"
    :loop="true"
    :slides-per-view="1"
    :pagination={
      type: 'fraction'
    },
    :navigation={
      'nextEl': '.next-button',
      'prevEl': '.prev-button'
    }
  )
    img(class="slider-block__button prev-button" src="/img/slider_block/prev-button.svg" alt="")
    img(class="slider-block__button next-button" src="/img/slider_block/next-button.svg" alt="")

    SwiperSlide(
      class="slider-block__slide"
      v-for="(slideURL, idx) in props.data" :key="idx"
    )
      NuxtImg(
        class="slider-block__image"
        width="1120"
        :src="slideURL" 
        format="webp" 
        loading="lazy" 
        alt=""
      )
</template>

<style lang="scss" scoped>
.slider-block {
  position: relative;

  &__button {
    position: absolute;
    z-index: 777;
    top: calc(50% - 18.4px);
    transform: translateY(-50%);
    transition: opacity 0.2s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
    }
  }

  &__image {
    @media (max-width: 1119px) {
      width: 100%;
    }
  }

  .prev-button {
    left: 0;
  }

  .next-button {
    right: 0;
  }

  &__slide {
    display: flex;
    justify-content: center;
  }
}
</style>
