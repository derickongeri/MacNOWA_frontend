<template>
  <div
    class="q-pa-xs"
    id="mapid"
    style="height: 100%; width: 100%; border-radius: 10px"
  >
    <div
      class="layer-options row q-py-sm"
      style="background-color: #002e6b00;"
    >
      <div class=""><q-btn @click="showLayerOptions = !showLayerOptions" padding="xs" color="primary" icon="mdi-chevron-right"/></div>
      <div v-if="showLayerOptions" class="col bg-white" style="">
        <layerOptions/>
      </div>
    </div>
    <div
      v-if="datepicker"
      class="gradient-rect q-pb-sm q-px-md"
      style="background-color: #002f6b50; backdrop-filter: blur(10px)"
    >
      <dateslider />
    </div>

    <div
      class="legend-container"
      style="background-color: #002f6b05; backdrop-filter: blur(10px)"
    >
      <div class="" style="min-width: 150px">
        <div class="map-selection" style="">
          <q-list class="row justify-around" style="min-width: 100px">
            <q-item
              class="column justify-center q-px-none"
              clickable
              v-ripple
              @click="change_base_map('OSM')"
            >
              <q-item-section class="row q-px-sm">
                <q-avatar rounded>
                  <img
                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099828/Screenshot_from_2022-04-04_22-14-36_z8raar.png"
                  />
                </q-avatar>
                <!-- <div class="row justify-center" style="font-size: 0.75em">
                  Mapbox
                </div> -->
              </q-item-section>
            </q-item>
            <q-item
              class="column justify-center q-px-none"
              clickable
              @click="change_base_map('satellite')"
            >
              <q-item-section class="q-px-sm">
                <q-avatar rounded>
                  <img
                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099830/Screenshot_from_2022-04-04_22-14-04_tnx5m7.png"
                  />
                </q-avatar>
                <!-- <div class="row justify-center" style="font-size: 0.75em">
                  Satellite
                </div> -->
              </q-item-section>
            </q-item>
            <q-item
              class="column justify-center q-px-none"
              clickable
              @click="change_base_map('darkMap')"
            >
              <q-item-section class="q-px-sm">
                <q-avatar rounded>
                  <img
                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099827/Screenshot_from_2022-04-04_22-16-08_mu5dfk.png"
                  />
                </q-avatar>
                <!-- <div class="row justify-center" style="font-size: 0.75em">
                  dark
                </div> -->
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <div class="zoom-controls q-gutter-xs q-py-sm" style="width: fit-content">
      <div class="q-pa-none q-gutter-sm">
        <q-btn
          size="sm"
          outline
          rounded
          no-caps
          align="between"
          class="bg-primary btn-fixed-width q-px-md"
          color="white"
          label="Take a Tour"
          icon="mdi-human-male-board"
        />
        <q-btn
          size="sm"
          outline
          rounded
          no-caps
          align="between"
          class="bg-white btn-fixed-width q-px-md"
          color="primary"
          label="Share/Print"
          icon="mdi-share-variant"
        >
          <q-menu flat auto-close class="q-pa-sm menu-card" :offset="[120, 0]">
            <div class="">
              <div
                class="menu-content bg-grey-2 q-pa-sm q-ma-sm"
                style="border-radius: 5px"
              >
                <div class="arrow-up q-ma-xs" style="left: 45%"></div>
                <span class="text-white q-mx-sm" style="font-size: 0.75em"
                  >Copy Link</span
                >
                <q-separator />
                <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                  <div class="map-selection q-pa-xs" style="">
                    <span
                      class="row text-grey-9 q-mx-sm"
                      style="font-size: 0.75em"
                      >Anyone with this URL will be able to access this
                      map.</span
                    >
                    <q-btn-group outlined rounded flat>
                      <q-btn
                        align="between"
                        class="btn-fixed-width"
                        no-caps
                        outline
                        color="white"
                        ><span>http://78.141.234.158/spa/#/</span></q-btn
                      >
                      <q-btn rounded color="white" label="Copy" />
                    </q-btn-group>
                  </div>
                </div>
                <q-separator />
                <span class="text-white q-mx-sm" style="font-size: 0.75em"
                  >Print Map</span
                >
                <span class="row text-grey-9 q-mx-sm" style="font-size: 0.75em"
                  >Open a print version of this map</span
                >
                <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                  <q-btn color="white" label="Print" />
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>

      <div class="q-gutter-sm q-py-md" id="#v-step-1">
        <div class="row">
          <q-space />
          <div
            class="bg-grey-1 q-pa-none q-ma-none"
            style="border-radius: 20px; border: 1px solid #002f6b"
          >
            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="primary"
                icon="add"
                @click="zoom_in"
              />
            </div>

            <q-separator />
            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="primary"
                icon="mdi-refresh"
                @click="resetZoomLevel"
              />
            </div>
            <q-separator />

            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="primary"
                icon="remove"
                @click="zoom_out"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <q-space />
          <q-btn
            class="bg-grey-1"
            size="sm"
            round
            outline
            color="primary"
            icon="mdi-map"
            @click="toggleDrawingTools"
          >
            <q-menu
              flat
              auto-close
              class="q-pa-none menu-card"
              :offset="[250, -30]"
              style="background-color: #ffffff"
            >
              <div class="">
                <div
                  class="menu-content bg-grey-2 q-pa-sm q-ma-none"
                  style="border-radius: 5px"
                >
                  <div class="arrow-up q-ma-xs" style="left: 10%"></div>
                  <span
                    class="q-mx-sm"
                    style="font-size: 0.75em; font-color: #838c48"
                    >Select Base Map</span
                  >
                  <q-separator />
                  <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                    <div class="map-selection q-pa-xs" style="">
                      <q-list class="row" style="min-width: 100px">
                        <q-item
                          class="col q-px-none"
                          clickable
                          v-ripple
                          @click="change_base_map('OSM')"
                        >
                          <q-item-section class="row q-px-sm">
                            <q-avatar rounded>
                              <img
                                src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099828/Screenshot_from_2022-04-04_22-14-36_z8raar.png"
                              />
                            </q-avatar>
                            <div
                              class="row justify-center"
                              style="font-size: 0.75em"
                            >
                              Mapbox
                            </div>
                          </q-item-section>
                        </q-item>
                        <q-item
                          class="col q-px-none"
                          clickable
                          @click="change_base_map('satellite')"
                        >
                          <q-item-section class="q-px-sm">
                            <q-avatar rounded>
                              <img
                                src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099830/Screenshot_from_2022-04-04_22-14-04_tnx5m7.png"
                              />
                            </q-avatar>
                            <div
                              class="row justify-center"
                              style="font-size: 0.75em"
                            >
                              Satellite
                            </div>
                          </q-item-section>
                        </q-item>
                        <q-item
                          class="col q-px-none"
                          clickable
                          @click="change_base_map('darkMap')"
                        >
                          <q-item-section class="q-px-sm">
                            <q-avatar rounded>
                              <img
                                src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099827/Screenshot_from_2022-04-04_22-16-08_mu5dfk.png"
                              />
                            </q-avatar>
                            <div
                              class="row justify-center"
                              style="font-size: 0.75em"
                            >
                              dark
                            </div>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </div>
                  </div>
                  <q-separator />
                  <span class="text-grey-9 q-mx-sm" style="font-size: 0.75em"
                    >Map Labels</span
                  >
                  <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                    <q-toggle
                      dense
                      size="sm"
                      v-model="setLabels"
                      color="white"
                      label="Show Map Labels"
                      left-label
                    />
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
        <div class="row">
          <q-space />
          <q-btn
            class="bg-grey-1"
            size="sm"
            round
            outline
            color="primary"
            icon="mdi-select-drag"
            @click="openCloseStats"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import { axios } from "src/boot/axios";

//import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import baselayers from "./Modals/baselayers.js";
import "./Modals/smoothWheelZoom";
// import counties_2021 from './Modals/counties_2021.js'
import datepicker from "../Analysis/datepicker.vue";
import layerswitcher from "src/components/composables/Modals/Layercomponents/layerswitcher.vue"

import logos from "./Modals/logos.vue";

import setSelectedRaster from "./Modals/fetchrasters";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { useQuasar } from "quasar";

export default defineComponent({
  components: {
    dateslider: datepicker,
    layerOptions: layerswitcher,
  },
  setup() {
    const $q = useQuasar();
    const store = useRasterStore();
    //const router = { useRouter };
    const { locale } = useI18n({ useScope: "global" });

    const { setRasterLayerSelected, getEarthEngineLayer } = setSelectedRaster();

    const map = ref(null),
      current_selected_layer = ref(null),
      datepicker = ref(true),
      currentRasterLayer = ref(null),
      mangrove_layer_2015 = ref(null),
      mangrove_layer_2020 = ref(null),
      change_layer_2015_2020 = ref(null),
      landcoverLayer = ref(null),
      center = ref([18.678691, 4.329978]),
      current_top_base_layer = ref(null),
      baseMaps = ref([]),
      showBaseMapList = ref(false),
      currentBaseLayer = ref(null);

    const setLeafletMap = async function () {
      const { osmTiles, darkMap, satellite } = baselayers;

      // const counties = counties_2021

      baseMaps.value = {
        OSM: osmTiles,
        satellite: satellite,
        darkMap: darkMap,
      };

      const southWest = L.latLng(2.615021, -19.530914),
        northEast = L.latLng(21.438683, 29.435631),
        bounds = L.latLngBounds(southWest, northEast);

      map.value = L.map("mapid", {
        zoomControl: false,
        layersControl: true,
        attributionControl: false,
        center: center.value,
        //maxBounds: bounds,
        zoom: 4.7,
        maxZoom: 17,
        zoomSnap: 0.1,
        zoomAnimation: true,
        fadeAnimation: true,
        scrollWheelZoom: false,
        smoothWheelZoom: true,
        smoothSenesitivity: 0.5,
        // layers: [darkMap, osm, mapbox, mapboxSatellite]
        //layers: [satellite],
      });

      // L.tileLayer(
      //   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",
      //   {
      //     attribution:
      //       'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

      //     id: "mapbox/satellite-v9",
      //     accessToken:
      //       "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
      //   }
      // ).addTo(map.value);

      //L.control.layers(baseMaps.value).addTo(map.value);

      current_top_base_layer.value = darkMap;
      current_top_base_layer.value.addTo(map.value);

      map.value.scrollWheelZoom = true;

      L.control.layers(baseMaps.value).addTo(map.value);

      let layerControl = document.getElementsByClassName(
        "leaflet-control-layers"
      );
      layerControl[0].style.visibility = "hidden";
    };

    const zoom_in = function () {
      map.value.setZoom(map.value.getZoom() + 1);
    };

    const zoom_out = function () {
      map.value.setZoom(map.value.getZoom() - 1);
    };

    const showListofBaseMaps = function () {
      return (showBaseMapList.value = !showBaseMapList.value);
    };

    const handle_base_layers = function () {
      setTimeout(() => {
        if (base_map_ctrl_cliked.value === false) showBaseMapList.value = false;
      }, 3000);
    };

    //get the base map object of leaflet according to the selection clicked
    const change_base_map = function (basemap) {
      const selected_base_map = baseMaps.value[basemap];
      map.value.addLayer(selected_base_map);
      selected_base_map.bringToFront();
      switch (store.layerName) {
        case "landcover":
          landcoverLayer.value.bringToFront();
          break;

        case "mangrove":
          mangrove_layer_2015.value.bringToFront();
          mangrove_layer_2020.value.bringToFront();
          change_layer_2015_2020.value.bringToFront();
          break;

        default:
          currentRasterLayer.value.bringToFront();
          break;
      }
    };

    const setRasterLayer = async function () {
      try {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Loading map data...",
        });

        if (currentRasterLayer.value) {
          map.value.removeLayer(currentRasterLayer.value);
        }
        if (mangrove_layer_2015.value) {
          map.value.removeLayer(mangrove_layer_2015.value);
        }
        if (mangrove_layer_2020.value) {
          map.value.removeLayer(mangrove_layer_2020.value);
        }
        if (change_layer_2015_2020.value) {
          map.value.removeLayer(change_layer_2015_2020.value);
        }
        if (landcoverLayer.value) {
          map.value.removeLayer(landcoverLayer.value);
        }

        current_selected_layer.value = store.getLayerName;

        console.log(current_selected_layer.value);

        switch (current_selected_layer.value) {
          case "landcover":
            map.value.setView([18.678691, 4.329978], 4.7);
            let landcover = await getEarthEngineLayer("landcover");

            landcoverLayer.value = landcover[0];

            landcoverLayer.value.addTo(map.value).bringToFront();

            landcoverLayer.value.on("load", () => {
              Loading.hide();
            });
            break;
          case "mangrove":
            const targetPoint = [13.254094739970756, -16.17314525052899]; // New center point
            const newZoomLevel = 9; // New zoom level

            map.value.setView(targetPoint, newZoomLevel);

            let geeLayers = await getEarthEngineLayer("mangrove");

            mangrove_layer_2015.value = geeLayers[1];
            mangrove_layer_2020.value = geeLayers[2];
            change_layer_2015_2020.value = geeLayers[0];

            mangrove_layer_2015.value.addTo(map.value);
            mangrove_layer_2020.value.addTo(map.value);
            change_layer_2015_2020.value.addTo(map.value).bringToFront();

            change_layer_2015_2020.value.on("load", () => {
              Loading.hide();
            });

            break;

          default:
            try {
              currentRasterLayer.value = await setRasterLayerSelected();

              currentRasterLayer.value.addTo(map.value).bringToFront();
              //current_gee_layer.value.addTo(map.value).bringToFront();

              console.log(currentRasterLayer.value);

              currentRasterLayer.value.on("load", () => {
                Loading.hide();
                // if (currentRasterLayer.value.includes("vdn.ogc.se_xml")) {
                //   // Response type is vdn.ogc.se_xml
                //   $q.notify({
                //     type: "negative",
                //     message: `Could Not find data for the selected date!`,
                //     color: "red",
                //     classes: "notification",
                //   });
                // } else {
                //   Loading.hide();
                // }
              });

              if (map.value.hasLayer(currentRasterLayer.value)) {
                console.log("loaded layer");
              } else {
                console.log("no layer added");
              }
            } catch (error) {
              Loading.hide();
            }

            break;
        }
      } catch (error) {
        //$q.notify(error);
        Loading.hide();
      }
    };

    onMounted(() => {
      setLeafletMap().then(() => {
        setRasterLayer();
      });
    });

    const selectedDate = computed(() => {
      return store.getSelectedDate;
    });

    const selectedLayer = computed(() => {
      return store.getLayerName;
    });

    watch(selectedDate, () => {
      console.log("changing dates");
      setRasterLayer();
    });

    watch(selectedLayer, () => {
      // console.log("changing Layer")
      setRasterLayer();
    });

    watch(selectedLayer, () => {
      switch (store.layerName) {
        case "mangrove":
          datepicker.value = false;
          break;

        case "landcover":
          datepicker.value = false;
          break;

        default:
          datepicker.value = true;
          break;
      }
    });

    return {
      map,
      showLayerOptions: ref(true),
      showBaseMapList,
      zoom_in,
      zoom_out,
      showListofBaseMaps,
      handle_base_layers,
      change_base_map,
      baseMaps,
      currentBaseLayer,
      current_selected_layer,
      model: ref(2),
      datepicker,
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "fr", label: "French" },
      ],
    };
  },
});
</script>

<style scoped>
#mapid {
  /* position: relative;
  top: 0%;
  left: 0%; */
  /* width: 80%;
  height: 70vh; */
  bottom: 0%;
  border-width: 1px;
  /* border-radius: 20px; */
  border-color: rgb(19, 19, 19);
  background: none;
}
#chart-area {
  background: none;
  border-radius: 20px;
  position: absolute;
  width: 45vw;
  z-index: 5000;
  right: 0;
}

#chart-card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

#selection-container {
  position: absolute;
  background-color: rgba(117, 117, 117, 0.822);
  top: 2%;
  left: 1%;
  border-radius: 20px;
}

.logo-section {
  z-index: 2000;
  background: none;
  position: absolute;
  left: 1%;
  top: 2%;
  color: white;
  /* text-align: center;
  line-height: 40px;
  font-size: 16px; */
}

.layer-switcher {
  z-index: 2000;
  background: none;
  position: absolute;
  right: 1%;
  top: 15%;
  color: white;
}

.chips {
  z-index: 2000;
  background: none;
  position: absolute;
  right: 1%;
  top: 1%;
  color: white;
}

.zoom-controls {
  position: absolute;
  /* // background: rgb(153, 150, 150); */
  z-index: 2000;
  /* //width: 300px;
  // height: 20px; */
  right: 1vw;
  top: 2vh;
  width: fit-content;
}

.gradient-rect {
  width: 70%;
  min-height: 20px;
  z-index: 2000;
  /* background: none; */
  position: absolute;
  left: 0%;
  bottom: 0%;
  color: rgb(228, 228, 228);
  border-radius: 10px;
  /* text-align: center;
  line-height: 40px;
  font-size: 16px; */
}

.legend-container {
  width: 20%;
  min-height: 20px;
  z-index: 2000;
  /* background: none; */
  position: absolute;
  right: 0%;
  bottom: 0%;
  color: rgb(228, 228, 228);
  border-radius: 10px;
}

.layer-options {
  width: 25%;
  min-height: 10%;
  z-index: 2000;
  /* background: none; */
  position: absolute;
  left: 1%;
  top: 2%;
  color: rgb(228, 228, 228);
  border-radius: 10px;
  /* text-align: center;
  line-height: 40px;
  font-size: 16px; */
}
.start {
  position: absolute;
  bottom: 0;
}
.end {
  position: absolute;
  top: 0;
}

.notification {
  z-index: 10000;
}
</style>
