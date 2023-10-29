<script setup lang="ts">
interface ImageData {
  src: string;
  caption?: string;
}

interface Props {
  data: ImageData;
}

const props = defineProps<Props>();
</script>

<template lang="pug">
section.image-block
  .image-block__image.image-cover(
    :style="`background: url(${props.data.src})`"
  )
  p.image-block__caption {{ props.data.caption }}
</template>

<style lang="scss" scoped>
.image-block {
  display: flex;
  flex-direction: column;

  &__image {
    width: 100%;
    height: 550px;
    border-radius: 2px 220px 2px 2px;

    @media (max-width: 991px) {
      background-position: center !important;
      height: 400px;
    }

    @media (max-width: 767px) {
      border-radius: 2px 120px 2px 2px;
      height: 320px;
    }
  }

  &__caption {
    margin-top: 15px;
    align-self: flex-end;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: $gray;
  }
}
</style>
