<script setup lang="ts">
import { reactive } from "vue";

interface Props {
  data: string;
}

defineProps<Props>();

const fields = reactive({
  name: "",
  phone: "",
  email: "",
});

const formHandler = () => {
  console.log("cta-form-submit");
};
</script>

<template lang="pug">
section.cta-form-block
  NuxtImg(
    class="cta-form-block__image"
    width="600"
    format="webp"
    loading="lazy"
    src="/img/cta_form_block/1.png"
    alt="Участник проекта TestBlog"
  )
  form(
    class="cta-form-block__form cta-form"
    @submit.prevent="formHandler"
    action="#"
  )
    h2.cta-form__title Стань участником проекта
    .cta-form-fields
      InputBase(v-model="fields.name" placeholder="Имя")
      InputBase(v-model="fields.phone" placeholder="Телефон")
      InputBase(v-model="fields.email" placeholder="Email")
    
    ButtonBase(class="cta-form__submit" type="submit" theme="secondary")     Присоединиться
</template>

<style lang="scss" scoped>
.cta-form-block {
  min-height: 446px;
  padding: 60px;
  background: $primary;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 1339px) {
    padding: 30px;
    gap: 30px;
    min-height: 100%;
  }

  @media (max-width: 574px) {
    padding: 15px;
  }

  &__image {
    @media (max-width: 1339px) {
      width: 500px;
      height: 300px;
    }

    @media (max-width: 1029px) {
      margin: 0 auto;
      height: 100%;
    }

    @media (max-width: 599px) {
      width: 100%;
      height: 100%;
    }
  }

  .cta-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1339px) {
      row-gap: 30px;
    }

    @media (max-width: 1079px) {
      margin: 0 auto;
    }

    @media (max-width: 1029px) {
      .input {
        min-width: 100%;
      }
    }

    &__title {
      color: #fff;
      font-size: 34px;
      font-weight: 800;
      line-height: 46px;

      @media (max-width: 1339px) {
        font-size: 28px;
      }

      @media (max-width: 599px) {
        font-size: 20px;
      }
    }

    &-fields {
      display: flex;
      gap: 25px;
      flex-direction: column;
      align-items: flex-start;
    }

    &__submit {
      align-self: flex-start;

      @media (max-width: 1029px) {
        width: 100%;
      }
    }
  }
}
</style>
