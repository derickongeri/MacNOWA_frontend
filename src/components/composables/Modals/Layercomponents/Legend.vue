<template>
  <div class="legend-rect">
    <div class="column bg-red text-grey-9" style="min-height: 100%;min-width: 50%;">
      <q-badge square class="start" dense color="primary" text-color="white">
        18
      </q-badge>
      <q-badge square class="end" dense color="primary" text-color="white">
        100
      </q-badge>
    </div>
    <div class="column" style="max-width: 100%;">
      <img
        src="~/src/assets/saltlegend.png"
        style="width: 100%; height: 250px"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { axios } from "src/boot/axios";

const store = useRasterStore();

const img = ref(null);

const fetchLegend = async function () {
  let layerName = store.getLayerName;

  let layer = layerName + "_" + layerDate;

  axios
    .get(
      `http://197.255.126.45:8080/geoserver/marcnowa/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=${layer}`
    )
    .then((response) => response.blob())
    .then((blob) => {
      // Use the blob data to display or save the image
      // Example: create an img element and append it to the document
      img.value = document.createElement("img");
      img.value.src = URL.createObjectURL(blob);
      document.body.appendChild(img.value);
    });
};

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
.start {
  position: absolute;
  right: 115%;
  bottom: 0%;
}
.end {
  position: absolute;
  top: 0%;
  right: 115%;
}
</style>
