import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useRasterStore = defineStore({
  id: "fetchRasterStore",
  state: () => ({
    selectedDate: "20231105",
    layerName: "ocean_state_forecast",
    selectedRaster: "ocean_state_forecast",
    selectedLayerName: "",
    currentSelectedRaster: ""
  }),
  getters: {
    getSelectedDate: (state) => state.selectedDate,
    getLayerName: (state) => state.layerName,
    getselectedRaster: (state) => state.selectedRaster,
    getselectedLayerName: (state) => state.selectedLayerName,
  },
  actions: {

    setSelectedDate(date){
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();

      const formattedDay = selectedDay.toString().padStart(2, "0");
      const formattedMonth = selectedMonth.toString().padStart(2, "0");

      this.selectedDate = `${selectedYear}${formattedMonth}${formattedDay}`; //ocean_state_forecast_20231104
      console.log(this.selectedDate);
    },

    setLayerName(raster){
      this.layerName = raster
    },

    setSelectedLayerName(){
      let layer = this.layerName
      switch (layer) {
        case "Landcover":
          this.slectedLayerName = "ESA WorldCover 10m";
          break;
        case "Mangrove":
          this.slectedLayerName = "Mangrove Cover";
          break;
        case "SST":
          this.slectedLayerName = "Sea Surface Temperature (SST)";
          break;
        case "SALT":
          this.slectedLayerName = "Sea Surface Salinity (SSSal)";
          break;
        case "SSH":
          this.slectedLayerName = "Sea Surface Height (SSH)";
          break;
        case "SWH":
          this.slectedLayerName = "Significant Wave Height (SWH)";
          break;
        case "SSC":
          this.slectedLayerName = "Sea Surface Currents (SSC)";
          break;
        default:
          this.selectedLayerName = "Ocean State"
          break;
      }
    }
  },
});
