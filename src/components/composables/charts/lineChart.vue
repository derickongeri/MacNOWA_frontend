<template>
  <div style="height: 200px;"><Line :id="id" :data="chartData" :options="chartOptions" /></div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import zoomPlugin from "chartjs-plugin-zoom";
import 'chartjs-adapter-date-fns';
import {de} from 'date-fns/locale';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
)

export default {
  name: 'App',
  components: {
    Line
  },
  props: {
    id: {
      type: String,
      default: 'line-chart'
    },
    data: {
      type: Object,
      default: ()=> chartConfig.data
    },
    options: {
      type: Object,
      default: ()=> chartConfig.options
    }
  },

  computed: {
    chartData() {
      return this.data;
    },
    chartOptions() {
      return this.options;
    }
  },

  methods: {
    getChartData() {
      return this.data;
    }
  }
}
</script>
