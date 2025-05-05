<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-icons/vue";
import { SelectScrollDownButton } from "radix-vue";
import { type HTMLAttributes } from "vue";

defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <SelectScrollDownButton
    :class="
      cn('flex cursor-default items-center justify-center py-1', $props.class)
    "
  >
    <ChevronDownIcon class="h-4 w-4" />
  </SelectScrollDownButton>
</template>

<script lang="ts">
export default {
  name: "SelectScrollDownButton",
};
</script>
