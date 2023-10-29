<script lang="ts" setup></script>

<template lang="pug">
header.header
    Logotype()
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;

  @media (max-width: 767px) {
    height: 60px;
  }
}
</style>
