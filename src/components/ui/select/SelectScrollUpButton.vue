<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "@radix-icons/vue";
import { SelectScrollUpButton } from "radix-vue";
import { type HTMLAttributes } from "vue";

defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <SelectScrollUpButton
    :class="
      cn('flex cursor-default items-center justify-center py-1', $props.class)
    "
  >
    <ChevronUpIcon class="h-4 w-4" />
  </SelectScrollUpButton>
</template>

<script lang="ts">
export default {
  name: "SelectScrollUpButton",
};
</script>
