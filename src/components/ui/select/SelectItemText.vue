<script setup lang="ts">
import { SelectItemText } from "radix-vue";
</script>

<template>
  <SelectItemText>
    <slot />
  </SelectItemText>
</template>

<script lang="ts">
export default {
  name: "SelectItemText",
};
</script>
