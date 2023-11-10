<template>
  <div class="row items-center q-pa-md">
    <div class=""><div class="q-pb-sm text-primary">Select Date</div></div>
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
const layer_name = ref("");
const date = ref("");
const layerSelected = ref("");

const selectedLayer = computed(() => {
  return store.getLayerName;
});

const selectedDate = computed(() => {
  return store.getSelectedDate;
});

watch(selectedDate, () => {
  date.value = `${store.selectedDate.slice(0, 4)}/${store.selectedDate.slice(
    4,
    6
  )}/${store.selectedDate.slice(6, 8)}`;
});

watch(selectedLayer, () => {
  // store.setSelectedLayerName();
  let val = store.getLayerName;

  switch (val) {
    case "landcover":
      layer_name.value = "ESA WorldCover 10m";
      break;
    case "mangrove":
      layer_name.value = "Mangrove Cover";
      break;
    case "SST":
      layer_name.value = "Sea Surface Temperature (SST)";
      break;
    case "SALT":
      layer_name.value = "Sea Surface Salinity (SSSal)";
      break;
    case "SSH":
      layer_name.value = "Sea Surface Height (SSH)";
      break;
    case "SWH":
      layer_name.value = "Significant Wave Height (SWH)";
      break;
    case "SSC":
      layer_name.value = "Sea Surface Currents (SSC)";
      break;
    default:
      layer_name.value = "Ocean State Forecast";
      break;
  }
});

onMounted(() => {
  // store.setSelectedLayerName();
  layer_name.value = "Ocean State Forecast";
  date.value = `${store.selectedDate.slice(0, 4)}/${store.selectedDate.slice(
    4,
    6
  )}/${store.selectedDate.slice(6, 8)}`;
  console.log(layer_name.value);
});
</script>
