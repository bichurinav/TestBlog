<template lang="pug">
section.not-found
  .container
    .not-found__inner 
      h1.not-found__title 404 NotFound
      ButtonBase(to="/") Вернуться на главную
</template>

<style lang="scss" scoped>
.not-found {
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }

  &__title {
    text-align: center;
    font-size: 60px;

    @media (max-width: 767px) {
      font-size: 48px;
    }
  }
}
</style>
