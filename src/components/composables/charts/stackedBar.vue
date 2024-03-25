<template>
  <div
    class="q-my-none q-mt-none"
    style="
      max-width: 100%;
      max-height: 400px;
      border: 0px solid rgb(160, 160, 160);
      position: relative;
      margin: auto;
    "
  >
    <Bar
      id="bar-stacked"
      :data="chartData"
      :options="chartOptions"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  zoomPlugin
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartOptions: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 0,
            inflateAmount: 0,
            borderRadius: {
              topLeft: 0,
              topRight: 0,
              bottomLeft: 0,
              bottomRight: 0,
            },
            borderSkipped: false,
          },
        },
        scales: {
          x: {
            title: {
              display: false,
              text: "day",
              position: "left",
              color: "#",
            },
            stacked: true,
            ticks: {
              color: "",
            },
            grid: {
              color: "",
              opacity: 0.4,
              borderDash: [5, 2],
              drawBorder: true,
            },
          },
          y: {
            title: {
              display: true,
              text: "distribution of ocean state (%)",
              position: "left",
              color: "#",
            },
            stacked: true,
            ticks: {
              callback: function (value) {
                value = value.toFixed();
                return `${value}`;
              },
              color: "",
              tickLength: 0,
              tickWidth: 0,
            },
            grid: {
              color: "#9e9d2430",
              opacity: 0.1,
              borderDash: [1, 10],
              drawBorder: false,
              tickLength: 5,
              tickWidth: 2,
            },
          },
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: "xy",
            },
            limits: { y: { min: 0, max: 100 } },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },

              mode: "xy",
            },
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                fontColor: "#EEEEEE",
              },
            },
          },
          title: {
            display: true,
            text: "Ocean State as (%) of total mapped area",
            font: {
              weight: 700
            },
            position: "top",
            color: "#",
          },
        },
      },
    },
    chartData: {
      type: Object,
      default: {
        labels: [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
        ],
        datasets: [
          {
            backgroundColor: ["#2bdc10"],
            data: [20, 15, 21, 20, 30, 20, 20, 15, 21, 20, 30, 20],
            label: "Calm",
            barPercentage: 0.5,
            categoryPercentage: 0.75,
          },
          {
            backgroundColor: ["#efe44d"],
            data: [50, 70, 61, 57, 41, 45],
            label: "Rough",
            barPercentage: 0.5,
            categoryPercentage: 0.75,
          },
          {
            backgroundColor: ["#de1d13"],
            data: [30, 15, 18, 23, 29, 35],
            label: "Dangerous",
            barPercentage: 0.5,
            categoryPercentage: 0.75,
          },
        ],
      },
    },
    chartId: {
      type: String,
      default: "bar-stacked",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 350,
    },
    cssClasses: {
      default: "bar-stacked",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // chartOptions: {
      // },
    };
  },
};
</script>
