<script setup lang="ts">
interface Props {
  data: string;
}

const props = defineProps<Props>();
</script>

<template lang="pug">
section.text-block
  .text-block-content(v-html="props.data")
</template>

<style lang="scss">
.text-block {
  margin: 0 auto;

  &-content {
    max-width: 880px;

    h2,
    h3 {
      font-size: 34px;
      font-weight: 800;
      line-height: 46px;
      margin-bottom: 50px;

      @media (max-width: 1339px) {
        font-size: 28px;
      }

      @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 30px;
      }
    }

    P {
      line-height: 26px;

      &:not(:nth-child(1)) {
        margin-top: 20px;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 15px;
      margin-left: 115px;

      li {
        font-size: 18px;
        line-height: 26px;

        @media (max-width: 767px) {
          font-size: 14px;
        }
      }

      li::before {
        content: "";
        display: inline-flex;
        position: relative;
        bottom: 3px;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        border-radius: 1px;
        background: $primary;
        margin-right: 10px;
      }
    }

    blockquote {
      position: relative;
      margin-top: 40px;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        display: block;
        background-image: url("/img/text_block/quotes.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 80px;
        height: 64px;

        @media (max-width: 767px) {
          width: 60px;
          height: 34px;
        }
      }

      p {
        margin-top: 0 !important;
        max-width: 768px;
        font-weight: 300;
        font-style: italic;
      }

      p,
      footer {
        margin-left: 116px;

        @media (max-width: 767px) {
          margin-left: 60px;
        }
      }

      footer {
        margin-top: 15px;
        color: $gray;
        line-height: 20px;

        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
