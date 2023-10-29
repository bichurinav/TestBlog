<script lang="ts" setup></script>

<template>
  <div class="page">
    <TheHeader class="page__header" />
    <main class="page__main">
      <slot />
    </main>
    <TheFooter class="page__footer" />
  </div>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    flex: 0 1 auto;
  }

  &__main {
    flex: 1 1 auto;
    padding-top: 30px;
    padding-bottom: 200px;

    @media (max-width: 1339px) {
      padding-bottom: 100px;
    }
  }

  &__footer {
    flex: 0 1 auto;
  }
}
</style>
