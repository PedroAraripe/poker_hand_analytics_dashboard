<script setup lang="ts">
import { SelectGroup } from "radix-vue";
</script>

<template>
  <SelectGroup>
    <slot />
  </SelectGroup>
</template>

<script lang="ts">
export default {
  name: "SelectGroup",
};
</script>
