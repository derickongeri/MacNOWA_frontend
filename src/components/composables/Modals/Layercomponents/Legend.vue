<template>
  <div v-if="geeLayer" class="lengend-rect-gee">
    <div
      class="col q-pa-sm q-ma-none q-gutter-none bg-white text-grey-10"
      style="max-width: fit"
    >
      <div class="h6 q-pa-sm text-bold">{{ legendTitle }}</div>

      <div
        class="q-gutter-xs q-pa-xs"
        v-for="(landcover, key) in legendData"
        :key="key"
        style="min-width: 12vw"
      >
        <i
          :style="`background:` + landcover.color"
          class="q-px-sm q-my-xs"
          style="
            font-size: 0.75em;
            border: 0px outset black;
            border-radius: 12px;
          "
        ></i>
        <span
          class="my-font q-px-sm q-my-sm"
          style="font-size: 0.75rem; font-weight: normal"
          >{{ landcover.landcover }}</span
        >
        <br />
      </div>
    </div>
  </div>
  <div v-else class="legend-rect bg-white text-grey-9">
    <!-- <div class="column bg-red text-grey-9" style="min-height: 100%;min-width: 50%;">
      <q-badge square class="start" dense color="primary" text-color="white">
        18
      </q-badge>
      <q-badge square class="end" dense color="primary" text-color="white">
        100
      </q-badge>
    </div> -->
    <div class="h6 q-pa-xs text-bold">{{ legendTitle }}</div>

    <div class="column" style="max-width: 100%">
      <img :src="legendImg" style="width: 80%" alt="" />
    </div>
  </div>
</template>

<script setup>
import scc from "src/assets/scclegend.png";
import ssh from "src/assets/sshlegend.png";
import swh from "src/assets/swhlegend.png";
import sst from "src/assets/sstlegend.png";
import salt from "src/assets/saltLegend.png";
import oceancondition from "src/assets/ocean_condition.png";
import createLegend from "./setLegend.js";

import { onMounted, watch, ref } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { axios } from "src/boot/axios";

const store = useRasterStore();
const { setLegendColors } = createLegend();
const legendData = ref([]);
const geeLayer = ref(false);
const legendTitle = ref("");

// const setLegendData = function () {
//   legendData.value = setLegendColors("burnedArea");
// };

const legendImg = ref(null);

const fetchLegend = async function () {
  let layerName = store.getLayerName;

  if (layerName == "landcover" || layerName == "mangrove") {
    geeLayer.value = true;
    switch (layerName) {
      case "mangrove":
        legendTitle.value = "Mangrove Cover";
        break;
      default:
        legendTitle.value = "Land Cover";
        break;
    }
    legendData.value = setLegendColors(layerName);
  } else {
    geeLayer.value = false;

    switch (layerName) {
      case "UG_GMES_ocean_state_forecast":
        legendImg.value = oceancondition;
        legendTitle.value = "Ocean State";
        break;
      case "SSC":
        legendImg.value = scc;
        legendTitle.value = "Surface Currents";
        break;
      case "SSH":
        legendImg.value = ssh;
        legendTitle.value = "Surface Height";
        break;
      case "SST":
        legendImg.value = sst;
        legendTitle.value = "Temperature";
        break;
      case "SALT":
        legendImg.value = salt;
        legendTitle.value = "Salintity";
        break;
      case "SWH":
        legendImg.value = swh;
        legendTitle.value = "Wave Height";
        break;
      default:
        legendImg.value = oceancondition;
        legendTitle.value = "Ocean State";
        break;
    }
  }
};

onMounted(() => {
  // setLegendData();
  fetchLegend();
});

watch(
  () => store.getLayerName,
  () => {
    fetchLegend();
  },
  { deep: true }
);
</script>

<style>
.legend-rect {
  min-width: 25px;
  min-height: 20%;
  line-height: 40px;
  font-size: 16px;
  border-radius: 5px;
}

.legend-rect-gee {
  min-width: 25px;
  min-height: 20%;
  line-height: 40px;
  font-size: 16px;
  border-radius: 5px;
}
/* .start {
  position: absolute;
  right: 115%;
  bottom: 0%;
}
.end {
  position: absolute;
  top: 0%;
  right: 115%;
} */
</style>
