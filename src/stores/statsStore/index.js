import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useStatsStore = defineStore({
  id: "fetchStatsStore",
  state: () => ({
    selectedGrid: null,
    centerPoint: null,
    customPolygon: null,
    dates: null,
    oceanConditionList: {
      calm: null,
      rough: null,
      dangerous: null,
    },
    chartData: {
      ug_gmes_ocean_state_forecast: null,
      salt: null,
      sst: null,
      ssc: null,
      ssh: null,
      swh: null,
      mangrovecover: null,
      mangrovechange: null,
      landcover: null,
    },
  }),
  getters: {
    getSelectedGrid: (state) => state.selectedGrid,
    getCenterPoint: (state) => state.centerPoint,
    getChartData: (state) => (variable) => state.chartData[variable],
    getOceanConditionList: (state) => state.oceanConditionList,
    getfilterdates: (state) => state.dates,
    getCustomPolygon: (state) => state.customPolygon,
  },
  actions: {
    setSelectedGrid(val) {
      this.selectedGrid = val;
      console.log(this.selectedGrid);
    },
    setCustomPolygon(val) {
      this.customPolygon = val;
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
    updateOceanCondition(val) {
      this.oceanConditionList = {
        calm: val[0],
        rough: val[1],
        dangerous: val[2],
      };
    },
    setFilterDates(val) {
      console.log(val)
      this.dates = val
    }
  },
});
