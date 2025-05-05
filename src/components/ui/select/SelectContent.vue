<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  SelectContent,
  SelectPortal,
  SelectViewport,
  type SelectContentProps,
  useForwardProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import SelectScrollDownButton from "./SelectScrollDownButton.vue";
import SelectScrollUpButton from "./SelectScrollUpButton.vue";

const props = defineProps<
  SelectContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="forwardedProps"
      :class="
        cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class
        )
      "
    >
      <SelectScrollUpButton />
      <SelectViewport :class="cn('p-1', props.class)">
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>

<script lang="ts">
export default {
  name: "SelectContent",
};
</script>
