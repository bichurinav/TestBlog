<template lang="pug">
NuxtLink(
  to="/"
  class="logotype"
)
  img(
    class="logotype__image"
    src="/img/logo.svg"
    alt="logotype TestBlog"
  )
</template>

<style lang="scss" scoped>
.logotype {
  height: 32px;
  &__image {
    height: inherit;
  }
}
</style>
