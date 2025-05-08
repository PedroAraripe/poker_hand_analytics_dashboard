<template>
  <div
    class="p-10 space-y-10 w-screen h-screen flex items-center justify-center"
  >
    <Card class="w-[900px] max-w-full">
      <CardContent>
        <Tabs default-value="general" class="w-full pt-5">
          <TabsList>
            <TabsTrigger class="h-[3rem] rounded-none" value="general">
              Mãos gerais
            </TabsTrigger>
            <TabsTrigger class="h-[3rem] rounded-none" value="weaker">
              Mãos mais fortes
            </TabsTrigger>
            <TabsTrigger class="h-[3rem] rounded-none" value="stronger">
              Mãos mais fracas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="stronger">
            <BarChart v-bind="chartStronger" />
          </TabsContent>
          <TabsContent value="general">
            <BarChart v-bind="chartResume" />
            <!-- <DonutChart v-bind="chartResume" /> -->
          </TabsContent>
          <TabsContent value="weaker">
            <BarChart v-bind="chartWeaker" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { usePokerHandStatusStore } from "@/stores/pokerHand";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { pokerHands, type IPokerHand } from "@/types/handTypes";
import { DonutChart } from "@/components/ui/chart-donut";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatBigNumberShorter } from "@/helpers/formatters";

const formatBigNumberYTick = (num?: number) => formatBigNumberShorter(num || 0);

const baseLabel = "Possíveis combinações";

import BarChart from "@/components/ui/chart-bar/BarChart.vue";

const pokerHandStore = usePokerHandStatusStore();

const chartResume = computed(() => {
  const indexChart = "Qualidade da mão";

  const data = [
    {
      [indexChart]: "Mãos mais fracas",
      [baseLabel]: pokerHandStore.handStatus?.hands_stronger_total_count,
    },
    {
      [indexChart]: "Mãos da mesma categoria",
      [baseLabel]: pokerHandStore.handStatus?.hands_same_category_total_count,
    },
    {
      [indexChart]: "Mãos mais fortes",
      [baseLabel]: pokerHandStore.handStatus?.hands_weaker_total_count,
    },
  ];

  return {
    data,
    index: indexChart,
    categories: [baseLabel],
    "y-formatter": formatBigNumberYTick,
  };
});

const chartStronger = computed(() => {
  const data =
    pokerHandStore.handStatus?.hand_stronger_summary_sorted.map((c) => ({
      [baseLabel]: c.hand,
      "Categoria Carta": c.category,
    })) || [];

  return {
    data,
    index: "Categoria Carta",
    categories: [baseLabel],
    "y-formatter": formatBigNumberYTick,
  };
});

const chartWeaker = computed(() => {
  const data =
    pokerHandStore.handStatus?.hand_weaker_summary_sorted.map((c) => ({
      [baseLabel]: c.hand,
      "Categoria Carta": c.category,
    })) || [];

  return {
    data,
    index: "Categoria Carta",
    categories: [baseLabel],
    "y-formatter": formatBigNumberYTick,
  };
});

defineProps<{
  msg: string;
}>();

const pokerHandStatusStore = usePokerHandStatusStore();

const route = useRoute();
const router = useRouter();

watch(
  () => route.query?.player_hand,
  (val) => {
    if (!val) {
      router.push("/");
    }

    const pokerHand = val as IPokerHand;

    if (val && pokerHands.includes(pokerHand)) {
      pokerHandStatusStore.loadHandStatus(pokerHand);
    }
  },
  { immediate: true, deep: true }
);
</script>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

:root {
  /* ... */
  --vis-tooltip-background-color: none !important;
  --vis-tooltip-border-color: none !important;
  --vis-tooltip-text-color: none !important;
  --vis-tooltip-shadow-color: none !important;
  --vis-tooltip-backdrop-filter: none !important;
  --vis-tooltip-padding: none !important;

  --vis-primary-color: var(--primary);
  /* change to any hsl value you want */
  --vis-secondary-color: 160 81% 40%;
  --vis-text-color: var(--muted-foreground);
}
</style>
