<template>
  <div class="row" style="width: 100%">
    <div class="col" v-if="visibleItems.calm.length !== 0">
      <div
        class="row items-center justify-center"
        style="background-color: #2bdc1080"
      >
        Calm Days
      </div>
      <q-virtual-scroll
        class="scroll-area q-pt-md"
        type="table"
        flat
        style="max-height: 100px"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="visibleItems.calm"
        v-slot="{ item: row, index }"
      >
        <div class="row items-center justify-center q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div>
    <div class="col" v-if="visibleItems.rough.length !== 0">
      <div
        class="row items-center justify-center"
        style="background-color: #efe44d80"
      >
        Rough Days
      </div>
      <q-virtual-scroll
        class="scroll-area q-pt-md"
        type="table"
        flat
        style="max-height: 100px"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="visibleItems.rough"
        v-slot="{ item: row, index }"
      >
        <div class="row items-center justify-center q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div>
    <div class="col" v-if="visibleItems.dangerous.length !== 0">
      <div
        class="row items-center justify-center"
        style="background-color: #de1d1380"
      >
        Dangerous Days
      </div>
      <q-virtual-scroll
        class="scroll-area q-pt-md"
        type="table"
        flat
        style="max-height: 100px"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="visibleItems.dangerous"
        v-slot="{ item: row, index }"
      >
        <div class="row items-center justify-center q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div>

     <!-- <div class="col" v-for="category in categories" :key="category.name" v-if="category.items.length !== 0">
      <div
        class="row items-center justify-center"
        :style="'background-color: ' + category.backgroundColor"
      >
        {{ category.name }}
      </div>
      <q-virtual-scroll
        class="scroll-area q-pt-md"
        type="table"
        flat
        style="max-height: 100px"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="category.items"
        v-slot="{ item: row, index }"
      >
        <div class="row items-center justify-center q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div> -->
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useStatsStore } from "src/stores/statsStore";

const store = useStatsStore();

const visibleItems = computed(() => {
  let calmdays = store.getOceanConditionList;
  console.log(calmdays.calm);
  return calmdays;
});

const categories = computed(() => {
  return [
    {
      name: "Calm Days",
      backgroundColor: "#2bdc1080",
      items: visibleItems.value.calm,
    },
    {
      name: "Rough Days",
      backgroundColor: "#efe44d80",
      items: visibleItems.value.rough,
    },
    {
      name: "Dangerous Days",
      backgroundColor: "#de1d1380",
      items: visibleItems.value.dangerous,
    },
  ];
});

const thumbStyle = ref({
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "#027be3",
  width: "5px",
  opacity: 0.75,
});

const barStyle = ref({
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "#027be3",
  width: "9px",
  opacity: 0.2,
});
</script>
