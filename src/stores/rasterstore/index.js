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
      this.selectedDate = date
      console.log(this.selectedDate)
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
