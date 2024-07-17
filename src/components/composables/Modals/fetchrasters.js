import { Notify } from "quasar";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { axios } from "src/boot/axios";

export default function setSelectedRaster() {
  const store = useRasterStore();

  const setRasterLayerSelected = async function () {
    let layerDate = store.getSelectedDate;
    let layerName = store.getLayerName;

    let layer = layerName + "_" + layerDate;

    const wmsURL = "http://197.255.126.45:8080/geoserver/marcnowa/wms";

    const selectedLayer = L.tileLayer.wms(wmsURL, {
      layers: `marcnowa:${layer}`,
      format: "image/png",
      transparent: "true",
      opacity: 1,
      //tilematrixSet: "EPSG:4326",
      styles: `marcnowa:${layerName}`,
      //crs: L.CRS.EPSG4326,
    });

    return selectedLayer;
  };

  const fetchLegend = async function () {
    let layerName = store.getLayerName;

    let layer = layerName + "_" + layerDate;
  };

  const getEarthEngineLayer = async function (val) {
    //await selectedVect()
    let eeLayer = null;
    let layerList = [];
    let response = null;

    switch (val) {
      case "landcover":
        response = await axios.get("http://197.255.126.45:3000/api/landcovermap");
        break;
      default:
        response = await axios.get("http://197.255.126.45:3000/api/mapid");
        break;
    }

    const mapidList = response.data.tileList.reverse();

    const createTileLayer = (mapidIndex, mapid) => {
      eeLayer = L.tileLayer(
        `https://earthengine.googleapis.com/v1alpha/${mapid}/tiles/{z}/{x}/{y}`,
        {
          //layers: `${mapid}`,
          transparent: true,
          crs: L.CRS.EPSG4326,
          format: "image/png",
          attribution: "google earth engine",
          zIndex: mapidIndex + 2,
        }
      );

      layerList.push(eeLayer);
    };

    for (let i = 0; i < mapidList.length; i++) {
      createTileLayer(i, mapidList[i]);
    }

    return layerList;
  };

  return {
    setRasterLayerSelected,
    getEarthEngineLayer,
  };
}
