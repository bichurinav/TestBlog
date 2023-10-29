<script setup lang="ts">
import { computed } from "vue";

interface Props {
  isAction?: boolean;
  theme?: string;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isAction: false,
  theme: "primary",
  to: "/",
});

const emit = defineEmits<{
  action: [];
}>();

const classes = computed(() => {
  const arClasses = [];

  if (props.theme === "secondary") {
    arClasses.push("button--secondary");
  }

  return arClasses;
});

const handleClick = (event: MouseEvent) => {
  event.preventDefault();
  emit("action");
};
</script>

<template lang="pug">
button(
  v-if="props.isAction"
  class="button"
  :class="classes"
  @click="handleClick"
  v-bind="$attrs"
)
  slot

button(
  v-else-if="$attrs.type === 'submit'"
  class="button"
  :class="classes"
  v-bind="$attrs"
)
  slot

NuxtLink(v-else class="button" :class="classes" :to="props.to")
  slot
</template>

<style lang="scss" scoped>
.button {
  border: 1px solid transparent;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  line-height: 26px;
  font-size: 18px;
  background: $primary;
  color: #fff;
  height: 46px;
  padding: 0 50px;
  cursor: pointer;
  transition: background 0.2s ease;

  @media (max-width: 1339px) {
    font-size: 16px;
  }

  &:hover {
    background: $secondary;
  }

  &--secondary {
    background: $secondary;

    &:hover {
      background: transparent;
      border-color: $secondary;
    }
  }
}
</style>
