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
              icon="mdi-map-plus"
              @click="setSelectedLayer(service.value)"
            >
              <q-tooltip class="bg-primary">show on map</q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-tray-arrow-down"
              @click="
                downloadCSV({
                  filename: service.name,
                  chart: getChartData(service.variableKey),
                  variableName: service.variableKey
                })
              "
            >
              <q-tooltip class="bg-primary">download CSV</q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-image-outline"
              @click="exportChart(service.name)"
            >
              <q-tooltip class="bg-primary">download image</q-tooltip>
            </q-btn>
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
                The chart above represents the number of days the ocean
                conditions was experienced. To see the list of the dates and
                ocean conditions
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
import { useRasterStore } from "src/stores/rasterstore/index.js";
import setSelectedPixelData from "src/components/Analysis/charts/setCharts.js";

const store = useStatsStore();
const rasterstore = useRasterStore();
const { setLineChart } = setSelectedPixelData();

const model = ref("latlong");
const visible = ref(false);
const showSimulatedReturnData = ref(false);
const showList = ref(false);
const group = ref(rasterstore.getLayerName);

const services = ref([
  {
    name: "Ocean State",
    chart: polarArea,
    variableKey: "oceanstate",
    value: "UG_GMES_ocean_state_forecast",
  },
  {
    name: "Sea Surface Temperature (SST)",
    chart: linechart,
    variableKey: "sst",
    value: "SST",
  },
  {
    name: "Salinity (Salt)",
    chart: linechart,
    variableKey: "salt",
    value: "SALT",
  },
  {
    name: "Sea Surface Currents",
    chart: linechart,
    variableKey: "ssc",
    value: "SSC",
  },
  {
    name: "Sea Surface Height",
    chart: linechart,
    variableKey: "ssh",
    value: "SSH",
  },
  {
    name: "Significant Wave Height",
    chart: linechart,
    variableKey: "swh",
    value: "SWH",
  },
]);

const exportChart = (val) => {
  let elementIdname = "line-chart";
  let chart = document.getElementById(elementIdname).toDataURL("image/png");
  let a = document.createElement("a");
  a.href = chart;
  a.download = val;
  a.click();
  a = null;
};

function convertChartDataToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }

  columnDelimiter = args.columnDelimiter || ",";
  lineDelimiter = args.lineDelimiter || "\n";

  keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function (item) {
    ctr = 0;
    keys.forEach(function (key) {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });
  return result;
}

function createDataObjects(chartData,variableName) {
  const { labels, datasets } = chartData;

  if (!labels || !datasets || datasets.length === 0) {
    throw new Error("Invalid chart data");
  }

  const data = datasets[0].data;

  if (labels.length !== data.length) {
    throw new Error("Labels and data array lengths do not match");
  }

  const result = labels.map((label, index) => ({
    date: label,
    [variableName]: data[index],
  }));

  return result;
}

const downloadCSV = (args) => {
  let chartData;
  const datapoints = createDataObjects(args.chart, args.variableName);
  chartData = [
    {
      dataPoints: datapoints,
      type: "column",
    },
  ];
  console.log(chartData);
  var data, filename, link;
  var csv = "";
  for (var i = 0; i < chartData.length; i++) {
    csv += convertChartDataToCSV({
      data: chartData[i].dataPoints,
    });
  }
  if (csv == null) return;

  filename = args.filename || "chart-data.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = "data:text/csv;charset=utf-8," + csv;
  }

  data = encodeURI(csv);
  link = document.createElement("a");
  link.setAttribute("href", data);
  link.setAttribute("download", filename);
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link);
};

const setSelectedLayer = (val) => {
  group.value = val;
};

watch(group, (val) => {
  rasterstore.setLayerName(val);
});

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
