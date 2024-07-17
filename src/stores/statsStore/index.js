import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useStatsStore = defineStore({
  id: "fetchStatsStore",
  state: () => ({
    selectedGrid: null,
    centerPoint: null,
    chartData: {
      oceanState: null,
      SST: null,
      salt: null,
      currents: null,
      height: null,
      waveHeight: null,
    },
  }),
  getters: {
    getSelectedGrid: (state) => state.selectedGrid,
    getCenterPoint: (state) => state.centerPoint,
    getChartData: (state) => (variable) => state.chartData[variable],
  },
  actions: {
    setSelectedGrid(val) {
      this.selectedGrid = val;
      console.log(this.selectedGrid);
    },
    setCenterPoint(val) {
      this.centerPoint = val;
    },
    updateChartData(variable, data) {
      if (this.chartData.hasOwnProperty(variable)) {
        this.chartData[variable] = data;
      } else {
        console.error(`Unknown variable: ${variable}`);
      }
    },
  },
});
