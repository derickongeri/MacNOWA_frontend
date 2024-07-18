<template>
  <div class="row" style="width: 100%">
    <div class="col">
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
        <div class="row justify-center q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div>
    <div class="col">
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
    <div class="col">
      <div class="row" style="background-color: #de1d1380">Rough Days</div>
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
        <div class="row q-px-md">
          {{ row }}
        </div>
      </q-virtual-scroll>
    </div>
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
