<template>
  <div class="column q-pa-none bg-white" style="min-width: fit-content">
    <q-list>
      <q-expansion-item
        dense
        header-class="bg-primary text-white"
        :label="layerName"
        default-opened
      >
        <datepicker v-if="dailyData" />
        <!-- <layerSelector v-if="!dailyData"/> -->
        <layerList v-if="!dailyData && currentLayer == 'mangrove'"/>
        <yearselection v-if="!dailyData && currentLayer == 'landcover'"/>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import datepicker from "src/components/Analysis/dateselection.vue";
import layerSelector from "src/components/Analysis/Layerselectors/coastalecolayers.vue";
import layerList from "src/components/Analysis/Layerselectors/mangroveSelector.vue";
import yearselection from "src/components/Analysis/yearselection.vue";

const store = useRasterStore();

const layerName = ref("");

const dailyData = computed(() => {
  return !["ESA WorldCover 10m", "Mangrove Cover"].includes(layerName.value);
});

const currentLayer = computed(() => {
  return store.layerName
})

const setLayerName = (layer) => {
  switch (layer) {
    case "landcover":
      layerName.value = "ESA WorldCover 10m";
      break;
    case "mangrove":
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
    setLayerName(val);
  },
  { deep: true }
);

onMounted(() => {
  setLayerName(store.getLayerName);
});
</script>


