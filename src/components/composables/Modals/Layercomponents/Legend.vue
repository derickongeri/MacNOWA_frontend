<template>
  <div class="legend-rect">
    <!-- <div class="column bg-red text-grey-9" style="min-height: 100%;min-width: 50%;">
      <q-badge square class="start" dense color="primary" text-color="white">
        18
      </q-badge>
      <q-badge square class="end" dense color="primary" text-color="white">
        100
      </q-badge>
    </div> -->
    <div class="column" style="max-width: 100%">
      <img
        :src="legendImg"
        style="width: 100%; height: 100%"
        alt=""
      />
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

import { onMounted, watch, ref } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { axios } from "src/boot/axios";

const store = useRasterStore();

const legendImg = ref(null);

const fetchLegend = async function () {
  let layerName = store.getLayerName;

  switch (layerName) {
    case "UG_GMES_ocean_state_forecast":
      legendImg.value = oceancondition;
      break;
    case "SSC":
      legendImg.value = scc;
      break;
    case "SSH":
      legendImg.value = ssh;
      break;
    case "SST":
      legendImg.value = sst;
      break;
    case "SALT":
      legendImg.value = salt;
      break;
    case "SWH":
      legendImg.value = swh;
      break;

    default:
      legendImg.value = oceancondition;
      break;
  }
};

onMounted(()=>{
  fetchLegend();
})

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
