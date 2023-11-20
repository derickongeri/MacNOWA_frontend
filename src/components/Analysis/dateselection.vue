<template>
  <div v-if="showDatePicker" class="row items-center q-pa-md">
    <div class="">
      <div class="q-pb-sm text-primary">Select Date</div>
    </div>
    <div class="q-pb-sm q-px-md">
      <q-icon color="primary" size="xs" name="event" class="cursor-pointer">
        <q-popup-proxy
          anchor="bottom left"
          self="top left"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="date" mask="YYYY/MM/DD" minimal> </q-date>
        </q-popup-proxy>
      </q-icon>
    </div>
    <div class="col">
      <div class="q-pb-sm">
        <q-chip
          dense
          square
          text-color="grey-9"
          class="q-my-none q-ml-xs q-mr-none"
        >
          {{ date }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";

const store = useRasterStore();
const showDatePicker = ref(true);
const date = ref("");

const layer = computed(() => {
  return store.getLayerName;
});

watch(layer, () => {
  
});

watch(selectedDate, () => {
  date.value = `${store.selectedDate.slice(0, 4)}/${store.selectedDate.slice(
    4,
    6
  )}/${store.selectedDate.slice(6, 8)}`;
});

onMounted(() => {
  // store.setSelectedLayerName();
  layer_name.value = "Ocean State Forecast";
  date.value = `${store.selectedDate.slice(0, 4)}/${store.selectedDate.slice(
    4,
    6
  )}/${store.selectedDate.slice(6, 8)}`;
});
</script>
