<template>
  <div style="height: 400px">
    <Bar :id="id" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "./chartConfigcopy.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import { de } from "date-fns/locale";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default {
  name: "App",
  components: {
    Bar,
  },
  props: {
    id: {
      type: String,
      default: "line-chart",
    },
    data: {
      type: Object,
      default: () => chartConfig.data,
    },
    options: {
      type: Object,
      default: () => chartConfig.options,
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
  // data() {
  //   return {
  //     data: {
  //       labels: ["January", "February", "March"],
  //       datasets: [{ data: [40, 20, 12] }],
  //     },
  //     options: {
  //       responsive: true,
  //     },
  //   };
  // },
};
</script>
