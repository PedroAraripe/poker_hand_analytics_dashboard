<script setup lang="ts">
import { SelectValue } from "radix-vue";
</script>

<template>
  <SelectValue>
    <slot />
  </SelectValue>
</template>

<script lang="ts">
export default {
  name: "SelectValue",
};
</script>
