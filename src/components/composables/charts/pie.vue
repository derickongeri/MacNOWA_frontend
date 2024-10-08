<template>
  <div style="height: 400px">
    <Pie :id="id" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Pie } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import { de } from "date-fns/locale";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  Title, Tooltip, Legend, ArcElement, CategoryScale, ChartDataLabels
);

export default {
  name: "App",
  components: {
    Pie,
  },
  props: {
    id: {
      type: String,
      default: "pie-chart",
    },
    data: {
      type: Object,
      default: () => chartConfig.data,
    },
    options: {
      type: Object,
      default: () => chartConfig.pieOptions,
    },
  },

  computed: {
    chartData() {
      return this.data;
    },
    chartOptions() {
      return this.options;
    },
  },

  methods: {
    getChartData() {
      return this.data;
    },
  },
};
</script>
