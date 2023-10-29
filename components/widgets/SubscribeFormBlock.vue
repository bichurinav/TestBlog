<script setup lang="ts">
import { ref } from "vue";

interface Props {
  data?: string;
}

defineProps<Props>();

const inputEmail = ref("");

const formHandler = () => {
  console.log("form-submit");
};
</script>

<template lang="pug">
.section.subscribe-form-block
  h3.subscribe-form-block__title Подпишись на рассылку
  form(
    @submit.prevent="formHandler"
    action="#"
    class="subscribe-form-block__form"
  )
    InputBase(class="subscribe-form-block__input" v-model="inputEmail" placeholder="Email")
    ButtonBase(class="subscribe-form-block__button" type="submit" theme="secondary") Подписаться
</template>

<style lang="scss" scoped>
.subscribe-form-block {
  min-height: 100px;
  padding: 0 30px;
  background: $primary;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 852px) {
    padding: 30px;
  }

  @media (max-width: 574px) {
    padding: 20px;
  }

  &__title {
    font-size: 22px;
    margin-right: 10px;
    font-weight: 800;
    line-height: 30px;
    color: #fff;

    @media (max-width: 1339px) {
      font-size: 18px;
    }
  }

  &__form {
    display: flex;
    align-items: flex-end;
    gap: 36px;

    @media (max-width: 852px) {
      width: 100%;
    }

    @media (max-width: 574px) {
      margin-top: 30px;
      flex-wrap: wrap;
    }
  }

  &__input {
    @media (max-width: 999px) {
      min-width: 200px;
    }

    @media (max-width: 852px) {
      min-width: unset;
      width: 100%;
    }
  }

  &__button {
    @media (max-width: 574px) {
      width: 100%;
    }
  }
}
</style>
