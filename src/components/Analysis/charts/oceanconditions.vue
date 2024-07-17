<template>
  <q-card
    bordered
    flat
    class="q-pa-md q-my-md chart-container"
    style="min-height: 400px; width: 100%"
    v-for="(service, index) in services"
    :key="service.id"
  >
    <q-card-section class="q-px-none">
      <div class="row items-center">
        <div class="col text-primary text-subtitle1 text-weight-light">
          {{ service.name }}
        </div>
        <q-space />
        <div class="row q-gutter-x-sm items">
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-tray-arrow-down"
              @click="exportChart"
            />
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-image-outline"
            />
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-information-outline"
            />
          </div>
        </div>
      </div>
    </q-card-section>
    <div v-if="service.name === 'Ocean State'" class="q-py-md">
      <div class="column">
        <div class="row"><polarArea :data="getChartData(service.variableKey)"/></div>
        <!-- <div class="row bg-red" style="width: 100%; height: 200px;"></div> -->
      </div>

    </div>
    <div v-if="service.name !== 'Ocean State'" class="q-my-md">
      <linechart :data="getChartData(service.variableKey)"/>
    </div>
  </q-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

import linechart from "src/components/composables/charts/lineChart.vue";
import stacked from "src/components/composables/charts/stackedBar.vue";
import polarArea from "src/components/composables/charts/polarArea.vue";

import { useStatsStore } from "src/stores/statsStore";
import setSelectedPixelData from "src/components/Analysis/charts/setCharts.js"

const store = useStatsStore();
const { setLineChart } = setSelectedPixelData();

const model = ref("latlong");
const services = ref([
  {
    name: "Ocean State",
    chart: polarArea,
    variableKey: "oceanState"
  },
  {
    name: "Sea Surface Temperature (SST)",
    chart: linechart,
    variableKey: "SST"
  },
  {
    name: "Salinity (Salt)",
    chart: linechart,
    variableKey: "salt"
  },
  {
    name: "Sea Surface Currents",
    chart: linechart,
    variableKey: "currents"
  },
  {
    name: "Sea Surface Height",
    chart: linechart,
    variableKey: "height"
  },
  {
    name: "Significant Wave Height",
    chart: linechart,
    variableKey: "waveHeight"
  }
]);

const exportChart = (val) => {
  let elementIdname = "bar-stacked";
  let chart = document.getElementById(elementIdname).toDataURL("image/png");
  let a = document.createElement("a");
  a.href = chart;
  a.download = "image-export.png";
  a.click();
  a = null;
};

onMounted(async () => {
  await setLineChart();
});

watch(
  () => store.selectedGrid,
  async () => {
    await setLineChart();
  },
  { deep: true }
);

const getChartData = (variableKey) => {
  const chartData = store.getChartData(variableKey);
  if (!chartData || !chartData.labels) {
    return {
      labels: [],
      datasets: [
        {
          label: "Loading...",
          backgroundColor: "#f87979",
          data: [],
        },
      ],
    };
  }
  return chartData;
};
</script>
