<script setup lang="ts">
import { cn } from "@/lib/utils";
import { SelectLabel } from "radix-vue";
import { type HTMLAttributes } from "vue";

defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <SelectLabel
    :class="cn('py-1.5 pl-8 pr-2 text-sm font-semibold', $props.class)"
  >
    <slot />
  </SelectLabel>
</template>

<script lang="ts">
export default {
  name: "SelectLabel",
};
</script>
