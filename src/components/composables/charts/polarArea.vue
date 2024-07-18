<template>

    <PolarArea :data="chartData" :options="chartOptions" />
 

</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "vue-chartjs";
import * as chartConfig from "./chartConfigPolarArea.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    PolarArea,
  },

  props: {
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
    }
  }
};
</script>
