<template>
  <div class="column q-pa-none bg-white" style="min-width: fit-content">
    <q-list>
      <q-expansion-item
        dense
        header-class="bg-primary text-white"
        :label="layerName"
        default-opened
      >
        <datepicker />
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import datepicker from "src/components/Analysis/dateselection.vue";

const store = useRasterStore();

const layerName = ref("");

const setLayerName = (layer) => {
  switch (layer) {
    case "Landcover":
      layerName.value = "ESA WorldCover 10m";
      break;
    case "Mangrove":
      layerName.value = "Mangrove Cover";
      break;
    case "SST":
      layerName.value = "Sea Surface Temperature (SST)";
      break;
    case "SALT":
      layerName.value = "Sea Surface Salinity (SSSal)";
      break;
    case "SSH":
      layerName.value = "Sea Surface Height (SSH)";
      break;
    case "SWH":
      layerName.value = "Significant Wave Height (SWH)";
      break;
    case "SSC":
      layerName.value = "Sea Surface Currents (SSC)";
      break;
    default:
      layerName.value = "Ocean State";
      break;
  }
};

watch(
  () => store.getLayerName,
  (val) => {
    setLayerName(val)
  },
  {deep: true}
)

onMounted(
  ()=>{
    setLayerName(store.getLayerName)
  }
)
</script>
