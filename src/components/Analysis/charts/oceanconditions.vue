<template>
  <q-card
    bordered
    flat
    class="q-pa-md q-my-md chart-container"
    style="min-height: 300px; width: 100%"
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
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData" class="row">
            <polarArea :data="getChartData(service.variableKey)" />
          </div>
        </transition>

        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div
            v-show="showSimulatedReturnData"
            class="q-pa-sm"
            style="border: solid 1px #002f6b50; border-radius: 5px"
          >
            <div class="row items-start">
              <div class="justify-center q-px-sm">
                <q-icon name="info" size="xs" color="primary"></q-icon>
              </div>
              <div class="col">
                The chart above represents the number of days the
                ocean conditions was experienced. To see the list of the dates and ocean conditions
                <span
                  ><q-btn
                    class="q-pa-none"
                    flat
                    no-caps
                    ripple="false"
                    size=""
                    rounded
                    color="primary"
                    label="Click here"
                    @click="showList = !showList"
                /></span>
              </div>
            </div>

            <conditionList v-if="showList" />
          </div>
        </transition>

        <!-- <div class="row bg-red" style="width: 100%; height: 200px;"></div> -->
      </div>
    </div>

    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      ><div
        v-show="showSimulatedReturnData"
        v-if="service.name !== 'Ocean State'"
        class="q-my-md"
      >
        <linechart :data="getChartData(service.variableKey)" /></div
    ></transition>

    <div v-if="visible" style="min-width: 200px; min-height: 250px">
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </div>
  </q-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

import linechart from "src/components/composables/charts/lineChart.vue";
import stacked from "src/components/composables/charts/stackedBar.vue";
import polarArea from "src/components/composables/charts/polarArea.vue";
import conditionList from "src/components/Analysis/charts/datelist.vue";

import { useStatsStore } from "src/stores/statsStore";
import setSelectedPixelData from "src/components/Analysis/charts/setCharts.js";

const store = useStatsStore();
const { setLineChart } = setSelectedPixelData();

const model = ref("latlong");
const visible = ref(false);
const showSimulatedReturnData = ref(false);
const showList = ref(false);

const services = ref([
  {
    name: "Ocean State",
    chart: polarArea,
    variableKey: "oceanstate",
  },
  {
    name: "Sea Surface Temperature (SST)",
    chart: linechart,
    variableKey: "sst",
  },
  {
    name: "Salinity (Salt)",
    chart: linechart,
    variableKey: "salt",
  },
  {
    name: "Sea Surface Currents",
    chart: linechart,
    variableKey: "ssc",
  },
  {
    name: "Sea Surface Height",
    chart: linechart,
    variableKey: "ssh",
  },
  {
    name: "Significant Wave Height",
    chart: linechart,
    variableKey: "swh",
  },
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
  visible.value = true;
  showSimulatedReturnData.value = false;
  await setLineChart().then(() => {
    visible.value = false;
    showSimulatedReturnData.value = true;
  });
});

watch(
  () => store.selectedGrid,
  async () => {
    visible.value = true;
    showSimulatedReturnData.value = false;

    await setLineChart().then(() => {
      visible.value = false;
      showSimulatedReturnData.value = true;
    });
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
