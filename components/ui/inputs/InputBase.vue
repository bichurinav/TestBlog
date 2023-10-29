<script setup lang="ts">
interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const handleInput = (event: Event) => {
  const target = <HTMLInputElement>event.target;
  emit("update:modelValue", target.value);
};
</script>

<template lang="pug">
input(
  type="text"
  class="input"
  @input="handleInput"
  :value="props.modelValue"
  v-bind="$attrs"
)
</template>

<style lang="scss" scoped>
.input {
  border: none;
  background: transparent;
  min-width: 353px;
  height: 28px;
  color: $gray;
  font-size: 18px;
  padding-bottom: 2px;
  padding-left: 8px;
  border-bottom: 1px solid $gray;

  @media (max-width: 757px) {
    min-width: 100%;
  }

  &:focus {
    border-bottom: 1px solid $secondary;
    outline: unset;

    &::placeholder {
      color: transparent;
    }
  }
}
</style>
