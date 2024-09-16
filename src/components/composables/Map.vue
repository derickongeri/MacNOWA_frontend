<template>
  <div>
    <burnedAreaLayout />
  </div>
  <div class="q-pa-xs map-pannel" id="mapid" style="overflow: hidden">
    <div
      v-if="matchMediaDesktop"
      class="layer-options overlay-div row q-py-sm"
      style="background-color: #002e6b00"
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <div class="">
        <q-btn
          @click="showLayerOptions = !showLayerOptions"
          padding="xs"
          color="primary"
          icon="mdi-chevron-right"
        />
      </div>
      <div v-if="showLayerOptions" class="col bg-white" style="">
        <layerOptions />
      </div>
    </div>
    <div
      v-if="datepicker && matchMediaDesktop"
      class="gradient-rect overlay-div q-pb-sm q-px-xl"
      style="background-color: #002f6b50; backdrop-filter: blur(10px)"
    >
      <dateslider class="" />
    </div>

    <q-scroll-area
      v-if="matchMediaMobile"
      ref="scrollAreaRef"
      class="absolute-bottom overlay-div text-white"
      visible
      style="
        z-index: 800;
        height: 10%;
        min-width: 100vw;
        background-color: #002f6b75;
        backdrop-filter: blur(10px);
      "
    >
      <div class="row q-py-sm no-wrap">
        <div v-if="datepicker" style="min-width: 300vw">
          <dateslider class="" />
        </div>
      </div>
    </q-scroll-area>

    <div
      v-if="matchMediaDesktop"
      class="legend-container overlay-div column"
      style="background-color: #002f6b00; backdrop-filter: blur(0px)"
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <div class="row q-mb-md justify-end">
        <legendItem />
      </div>

      <div class="row basemap-selection bg-white text-grey-9">
        <q-list class="row q-gutter-x-md" style="min-width: 100px">
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
              <div class="row justify-center" style="font-size: 0.75em">
                {{ $t(`Grey`) }}
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
              <div class="row justify-center" style="font-size: 0.75em">
                {{ $t(`Satellite`) }}
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
              <div class="row justify-center" style="font-size: 0.75em">
                {{ $t("Dark") }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div
      class="zoom-controls overlay-div q-gutter-xs q-py-sm"
      style="width: fit-content"
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <div v-if="matchMediaDesktop" class="q-pa-none q-gutter-sm">
        <q-btn
          size="sm"
          outline
          rounded
          no-caps
          align="between"
          class="bg-primary btn-fixed-width q-px-md"
          color="white"
          :label="$t('tour')"
          icon="mdi-human-male-board"
          @click="this.$tours['myTour'].start()"
        />
        <q-btn
          size="sm"
          outline
          rounded
          no-caps
          align="between"
          class="bg-white btn-fixed-width q-px-md"
          color="primary"
          :label="$t('sharePrint')"
          icon="mdi-share-variant"
        >
          <q-menu flat auto-close class="q-pa-sm menu-card" :offset="[240, 0]">
            <div class="">
              <div
                class="menu-content bg-grey-2 q-pa-sm q-ma-sm"
                style="border-radius: 5px"
              >
                <div class="arrow-up q-ma-xs" style="left: 45%"></div>
                <span class="text-primary q-mx-sm" style="font-size: 0.75em">{{
                  $t("copylink")
                }}</span>
                <q-separator />
                <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                  <div class="map-selection q-pa-xs" style="">
                    <span
                      class="row text-grey-9 q-mx-sm"
                      style="font-size: 0.75em"
                      >{{ $t("copylinktext") }}</span
                    >
                    <q-btn-group outlined rounded flat>
                      <q-btn
                        align="between"
                        class="btn-fixed-width"
                        no-caps
                        outline
                        color="primary"
                        ><span>http://geoportal.gmes.ug.gh</span></q-btn
                      >
                      <q-btn rounded color="primary" :label="$t('copy')" />
                    </q-btn-group>
                  </div>
                </div>
                <q-separator />
                <span class="text-primary q-mx-sm" style="font-size: 0.75em">{{
                  $t("printmap")
                }}</span>
                <span
                  class="row text-grey-9 q-mx-sm"
                  style="font-size: 0.75em"
                  >{{ $t("printmaptext") }}</span
                >
                <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                  <q-btn
                    color="primary"
                    :label="$t('print')"
                    @click="printLayer"
                  />
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>

      <div class="q-gutter-sm q-py-md" id="#v-step-1">
        <div class="row zoom-buttons justify-end">
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
        <!-- <div class="row">
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
        </div> -->
        <div class="row">
          <q-space />
          <q-btn
            class="bg-grey-1"
            size="sm"
            round
            outline
            color="primary"
            icon="mdi-select-drag"
            @click="toggleDrawingTools"
          />
        </div>
      </div>
    </div>
  </div>

  <Tour />
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  watch,
  computed,
  onBeforeMount,
  inject,
} from "vue";
import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import { axios } from "src/boot/axios";

//import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet.browser.print/dist/leaflet.browser.print";

import "./Modals/betterScale";

import "./Modals/leaflet-measure-ext/dist/leaflet-measure";

import baselayers from "./Modals/baselayers.js";
import "./Modals/smoothWheelZoom";
import datepicker from "../Analysis/datepicker.vue";
import layerswitcher from "src/components/composables/Modals/Layercomponents/layerswitcher.vue";
import legend from "src/components/composables/Modals/Layercomponents/Legend.vue";
import tour from "src/components/composables/Tour.vue";
import printLayout from "./Modals/printlayouts/burnedarea.vue";

import setSelectedRaster from "./Modals/fetchrasters";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { useStatsStore } from "src/stores/statsStore";
import { useQuasar, EventBus } from "quasar";
import useNotify from "src/composables/useNotify";

export default defineComponent({
  components: {
    dateslider: datepicker,
    layerOptions: layerswitcher,
    legendItem: legend,
    Tour: tour,
    burnedAreaLayout: printLayout,
  },
  setup() {
    const bus = new EventBus();
    const $q = useQuasar();
    const store = useRasterStore();
    const statsStore = useStatsStore();
    //const router = { useRouter };
    const { locale } = useI18n({ useScope: "global" });

    const { notifyError, notifySuccess, mapError } = useNotify();

    const { setRasterLayerSelected, getEarthEngineLayer } = setSelectedRaster();

    const position = ref(300);
    const scrollAreaRef = ref(null);

    const matchMediaDesktop = ref(false),
      matchMediaMobile = ref(false),
      map = ref(null),
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
      scaleBar = ref(null),
      showBaseMapList = ref(false),
      showLayer = ref(false),
      currentBaseLayer = ref(null),
      vectorLayer = ref(null),
      marker = ref(null);

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

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map.value);

      //L.control.layers(baseMaps.value).addTo(map.value);

      // current_top_base_layer.value = darkMap;
      // current_top_base_layer.value.addTo(map.value);

      map.value.scrollWheelZoom = true;

      L.control.layers(baseMaps.value).addTo(map.value);

      let layerControl = document.getElementsByClassName(
        "leaflet-control-layers"
      );
      layerControl[0].style.visibility = "hidden";

      var measureControl = new L.Control.Measure({ position: "topright" });
      measureControl.addTo(map.value);

      // measureControl.getContainer().classList.add('custom-control-position');

      // L.control
      //   .betterscale({
      //     position: "bottomright",
      //     metric: true,
      //   })
      //   .addTo(map.value);

      map.value.getContainer().classList.add("crosshair-cursor");
    };

    const zoom_in = function () {
      map.value.setZoom(map.value.getZoom() + 1);
    };

    const zoom_out = function () {
      map.value.setZoom(map.value.getZoom() - 1);
    };

    const toggleDrawingTools = function () {
      const box = document.getElementsByClassName(
        "leaflet-top leaflet-right"
      )[0];
      if (box.style.display === "none") {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
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

    const resetZoomLevel = async function () {
      const layers = [
        currentRasterLayer.value,
        mangrove_layer_2015.value,
        mangrove_layer_2020.value,
        change_layer_2015_2020.value,
        landcoverLayer.value,
      ];

      // map.value.eachLayer(function (layer) {
      //   //
      //   console.log(layer);
      // });

      layers.forEach((layer) => {
        if (currentRasterLayer.value || landcoverLayer.value) {
          // const bounds = layer.getBounds()
          console.log(layer);
          const southWest = L.latLng(-3.057970512549133, -24.192587749018344),
            northEast = L.latLng(36.86581397425627, 37.478968184546005),
            bounds = L.latLngBounds(southWest, northEast);

          map.value.flyToBounds(bounds);
        } else {
          const targetPoint = [13.254094739970756, -16.17314525052899]; // New center point
          const newZoomLevel = 9; // New zoom level

          map.value.setView(targetPoint, newZoomLevel);
        }
      });
    };

    const printLayer = async () => {
      await resetZoomLevel().then(() => {
        let clonedDiv = null;

        const targetDiv = document.querySelector(".target-div");
        const scaleBarElement = document.querySelector(
          ".leaflet-control-better-scale"
        );
        const overlayCanvas = document.querySelector(".leaflet-tile-loaded");

        if (!targetDiv) {
          console.error("targetDiv not found");
          return;
        }
        if (!scaleBarElement) {
          console.error("scaleBar element not found");
          return;
        }
        if (!overlayCanvas) {
          console.error("overlayCanvas not found");
          return;
        }

        console.log(scaleBarElement, "div scalebar");

        clonedDiv = scaleBarElement.cloneNode(true);

        clonedDiv.setAttribute("data-cloned", "true");

        // Check if the target div already contains the cloned div
        if (targetDiv.querySelector('[data-cloned="true"]')) {
          console.log("Cloned div already appended");
        } else {
          targetDiv.appendChild(clonedDiv);
        }
        targetDiv.appendChild(overlayCanvas);

        var options = {
          documentTitle: ``,
          closePopupsOnPrint: false,
          manualMode: false,
          //printLayer: vectorTileLayers.value
        };
        var browserPrint = L.browserPrint(
          map.value,
          /*scaleBar.value,*/ options
        );
        browserPrint.print(L.BrowserPrint.Mode.Landscape());
      });
    };

    const setVectorLayer = async (lat, lng) => {
      if (vectorLayer.value) {
        map.value.removeLayer(vectorLayer.value);
        vectorLayer.value = null;
      }
      if (marker.value) {
        map.value.removeLayer(marker.value);
      }
      // Construct WFS URL with CQL filter
      const wfsBaseURL = "https://geoportal.gmes.ug.edu.gh/geoserver/marcnowa/ows";
      const wfsParams = new URLSearchParams({
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        typeName: "marcnowa:Grids",
        outputFormat: "application/json",
        srsName: "EPSG:4326", // Specify the desired CRS here
        CQL_FILTER: `DWITHIN(the_geom, POINT(${lng} ${lat}), 0.000001, meters)`,
      });

      const wfsURL = `${wfsBaseURL}?${wfsParams.toString()}`;
      console.log(wfsURL);

      let response = await axios.get(wfsURL);
      let vectLayer = response.data;

      console.log("response", vectLayer.features);

      if (vectLayer.features.length === 0) {
        mapError("Click on the map layer for analysis!");
      } else {
        statsStore.setSelectedGrid(vectLayer.features[0].properties);
        // statsStore.setChartData(vectLayer.features[0].properties);

        vectorLayer.value = new L.geoJSON([vectLayer], {
          style: {
            fillOpacity: 0,
            fillColor: "#42424200",
            weight: 2,
            color: "#484c4d00",
          },
          // onEachFeature: function (feature, layer) {
          //   feature = layer.bindPopup(
          //     "<br><strong>" +
          //     feature.properties.UniqueID + "</br>" +
          //     feature.properties.majorid + "</br>" +
          //       feature.properties.minorid +
          //       "</strong><br><br> <button id='pop-up-selector' class='pop-up-btn'>Analyze</button>"
          //   );
          // },
        });

        console.log("vector", vectorLayer.value);

        const gridBounds = vectorLayer.value.getBounds();
        const centerPoint = gridBounds.getCenter();

        statsStore.setCenterPoint(`${centerPoint.lat},${centerPoint.lng}`);

        console.log("Centerpoint Coordinates:", centerPoint);

        const icon = L.divIcon({
          className: "custom-div-icon",
          html: "<div style='background-color:#0096FF;' class='marker-pin-selected'></div><i class='material-icons' style='font-size: 18px; color: #dfe8f5'>circle</i>",
          iconSize: [30, 42],
          iconAnchor: [15, 42],
        });

        marker.value = L.marker([lat, lng], {
          icon: icon,
        });

        map.value.setView([centerPoint.lat, centerPoint.lng], 9);
        marker.value.addTo(map.value);

        vectorLayer.value.addTo(map.value).bringToFront();
      }

      // map.value.fitBounds(vectorLayer.value.getBounds(), {
      //   // paddingBottomRight: [0, 0],
      //   setZoom: 2,
      // });
    };

    const setRasterLayer = async function () {
      try {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Loading map data...",
        });

        const layers = [
          currentRasterLayer.value,
          mangrove_layer_2015.value,
          mangrove_layer_2020.value,
          change_layer_2015_2020.value,
          landcoverLayer.value,
        ];

        // map.value.eachLayer(function (layer) {
        //   //
        //   console.log(layer);
        // });

        layers.forEach((layer) => {
          if (layer) {
            console.log(layer);
            map.value.removeLayer(layer);
          }
        });

        current_selected_layer.value = store.getLayerName;

        console.log(current_selected_layer.value);

        switch (current_selected_layer.value) {
          case "landcover":
            //clearMap();
            map.value.setView([18.678691, 4.329978], 4.7);
            let landcover = await getEarthEngineLayer("landcover");

            landcoverLayer.value = landcover[0];

            landcoverLayer.value.addTo(map.value).bringToFront();

            landcoverLayer.value.on("load", () => {
              Loading.hide();
            });
            break;
          case "mangrove":
            //clearMap();
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

              currentRasterLayer.value.on("load", () => {
                Loading.hide();
              });
            } catch (error) {
              Loading.hide();
            }

            break;
        }
      } catch (error) {
        Loading.hide();
      }
    };

    const mediaChange = computed(() => {
      return window.matchMedia("(max-width: 768px)").matches;
    });

    watch(mediaChange, () => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    });

    onBeforeMount(() => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    });

    onMounted(() => {
      setLeafletMap().then(() => {
        showLayer.value = !showLayer.value;

        L.control
          .betterscale({
            position: "bottomright",
            metric: true,
          })
          .addTo(map.value);


        map.value.on("click", function (e) {
          var coords = e.latlng;
          var lat = coords.lat;
          var lng = coords.lng;
          console.log(lat, lng);

          setVectorLayer(lat, lng);
        });

        //  setRasterLayer();
        // map.value.eachLayer(function (layer) {
        //   //
        //   console.log(layer);
        // });
      });

      // Select all elements with class 'overlay-div'
      var overlayDivs = document.querySelectorAll(".overlay-div");

      // Loop through each overlay div and disable click propagation
      overlayDivs.forEach(function (overlayDiv) {
        L.DomEvent.disableClickPropagation(overlayDiv);
      });
    });

    const selectedDate = computed(() => {
      return store.getSelectedDate;
    });

    const selectedLayer = computed(() => {
      return {
        layer: store.getLayerName,
        date: store.getSelectedDate,
        showLayer: showLayer.value,
      };
    });

    function animateScroll() {
      if (matchMediaMobile.value) {
        scrollAreaRef.value.setScrollPosition("horizontal", 415, 300);
        position.value = Math.floor(Math.random() * 1001) * 20;
      }
    }

    onMounted(() => {
      animateScroll();
    });

    watch(selectedDate, () => {
      animateScroll();
      // setRasterLayer();
    });

    watch(selectedLayer, () => {
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

    const startTour = () => {
      bus.emit("startTour");
    };

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
      matchMediaDesktop,
      matchMediaMobile,
      position,
      scrollAreaRef,
      startTour,
      resetZoomLevel,
      printLayer,
      scaleBar,
      toggleDrawingTools,
    };
  },
});
</script>

<style lang="scss">
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

.crosshair-cursor {
  cursor: crosshair;
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

.legend-container {
  max-width: 20%;
  z-index: 2000;
  /* background: none; */
  position: absolute;
  right: 2%;
  bottom: 5%;
  color: rgb(228, 228, 228);
  border-radius: 10px;
}

.layer-options {
  min-width: 25%;
  /* min-height: 10%; */
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

@media screen and (max-width: 768px) {
  .map-pannel {
    height: 100%;
    width: 100%;
    border-radius: 0px;
  }

  .zoom-controls {
    padding-right: 2%;
  }
}

@media screen and (min-width: 768px) {
  .map-pannel {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
}

.pop-up-btn {
  background: #dca257;
  color: white;
  text-align: center;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  border-width: 0px;
}

.pop-up-btn:hover {
  background-color: #dca2578a;
  /* Green */
  color: white;
}

.leaflet-popup-content-wrapper {
  background: #d2dcf3;
  color: #333;
  box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
  border-radius: 0%;
  min-width: 200px;
}

.leaflet-popup-tip {
  background: #d2dcf3;
}

.box {
  display: flex;
  flex-flow: row;
  height: 100%;
}

.box .row.map-selection {
  flex: 0 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
}

.box .row.map-content {
  flex: 1 1 auto;
}

.leaflet-right .leaflet-control {
  float: right;
}

.leaflet-left .leaflet-control {
  float: left;
}

.leaflet-control {
  position: relative;
  bottom: 50%;
  z-index: 800;
  pointer-events: visiblePainted;
  pointer-events: auto;
}

// overwrite the leaflet top control
.leaflet-top {
  display: none;
}

.leaflet-right {
  margin-top: 15vh;
  margin-right: 5px;
}

//
.custom-map-tools-section {
  position: absolute;
  right: 0;
  margin: 50px 20px 0px 0px;
  z-index: 500;
  border-radius: 10px;
  padding: 10px;
}

//custom draw button
.custom-tool {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  border-radius: 10px;
  padding: 7px;
  background-color: white;
  cursor: pointer;
}

.layer-control {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  padding: 10px;
}
.layer-control label {
  display: block;
  margin-bottom: 5px;
  z-index: 50000;
}
.layer-control input[type="radio"] {
  margin-right: 5px;
}
.map-container {
  height: 500px;
}

leaflet-browser-print-content {
  .leaflet-control-better-scale {
    position: absolute;
  }
}
</style>

<style>
.grid-print-container {
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  max-height: 680px;
  max-width: 99%;
  top: 2%;
}

.title {
  grid-row: 1;
  justify-self: center;
  text-align: center;
  color: grey;
  box-sizing: border-box;
  margin-top: 0;
}

.grid-map-print {
  grid-row: 1;
  max-height: 89%;
  max-width: 760px;
  top: 7%;
  left: 2%;
  border: 2px solid rgb(12, 12, 12);
}

.sub-content {
  position: relative;
  grid-row: 1;
  max-width: fit-content;
  /* padding-left: 10px; */
  box-sizing: border-box;
  top: 7%;
  left: 2%;
  height: 89%;
  /* margin: auto; */
  background-color: rgb(255, 255, 255);
}
</style>
<style>
[leaflet-browser-print-pages] {
  display: none;
}

.pages-print-container [leaflet-browser-print-pages] {
  display: block;
}
</style>
<style leaflet-browser-print-content>
.leaflet-control-better-scale {
  height: 15px;
  padding: 5px;
}
.leaflet-control-better-scale-upper-first-piece {
  top: 0%;
  left: 0%;
  width: 25%;
}
.leaflet-control-better-scale-upper-second-piece {
  top: 0%;
  left: 50%;
  width: 25%;
}
.leaflet-control-better-scale-lower-first-piece {
  top: 50%;
  left: 25%;
  width: 25%;
}
.leaflet-control-better-scale-lower-second-piece {
  top: 50%;
  left: 75%;
  width: 30%;
}
.leaflet-control-better-scale-ruler-block {
  overflow: hidden;
  position: absolute;
  height: 50%;
  background-color: #444444;
}
.leaflet-control-better-scale-ruler {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 7px;
  background-color: White;
  border: 1px solid #444444;
}
.leaflet-control-better-scale-label-div {
  position: relative;
  width: 100%;
}
.leaflet-control-better-scale-label {
  position: absolute;
  width: 10%;
  text-align: center;
  color: #fff;
  font: sans-serif;
  font-weight: bold;
  font-size: 12px;
  height: 5px;
  top: -1px;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}
.leaflet-control-better-scale-first-number {
  left: 45%;
}
.leaflet-control-better-scale-second-number {
  left: 95%;
}
</style>

<style lang="scss">
// leaflet-measure.scss

$color-divider: #ddd;
$color-button: #5e66cc;
$color-lightertext: #999;

$spacing-external: 12px;
$spacing-internal: 15px;

$max-width: 280px;

$button-icon-size: 12px;
$button-icon-spacing: 4px;

@mixin hoverbutton {
  color: $color-button;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    text-decoration: none;
  }
}

@mixin button($icon) {
  display: inline;
  width: auto;
  height: auto;
  padding-left: 20px;
  margin-right: $button-icon-spacing;
  line-height: 1.75em;
  border: 0;
  text-align: left;
  color: $color-button;
  &,
  &:hover {
    background-color: transparent;
  }
  background: {
    image: url("assets/#{ $icon }.png");
    repeat: no-repeat;
    position: 0% 50%;
    size: $button-icon-size $button-icon-size;
  }
  .leaflet-retina & {
    background-image: url("assets/#{ $icon }_@2X.png");
  }

  @include hoverbutton;
}

.leaflet-control-measure,
.leaflet-measure-resultpopup {
  h3 {
    margin: 0 0 $spacing-external 0;
    padding-bottom: $spacing-internal;
    border-bottom: solid 1px $color-divider;
    font-size: medium;
  }
  p {
    margin: $spacing-internal 0 0 0;
    line-height: 1.5em;
    &:first-child {
      margin-top: 0;
    }
  }
  .tasks {
    margin: $spacing-external 0 0 0;
    padding: $spacing-internal 0 0 0;
    border-top: solid 1px $color-divider;
    text-align: right;

    list-style: none;
    list-style-image: none;

    li {
      display: inline;
      margin: 0 $spacing-internal 0 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .coorddivider {
    color: $color-lightertext;
  }
}

.leaflet-control-measure {
  max-width: $max-width;
  background: #fff;

  .leaflet-control-measure-toggle,
  .leaflet-control-measure-toggle:hover {
    background: {
      size: 14px 14px;
      image: url(assets/rulers.png);
    }
    border: 0;
    border-radius: 4px;
    .leaflet-touch & {
      border-radius: 2px;
    }

    // Hide text
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;

    .leaflet-retina & {
      background-image: url(assets/rulers_@2X.png);
    }

    .leaflet-touch & {
      background-size: 16px 16px;
    }
  }

  // Special styling because start prompt has no content, just header and tasks
  .startprompt {
    h3 {
      margin-bottom: $spacing-internal;
    }
    .tasks {
      margin-top: 0;
      padding-top: 0;
      border-top: 0;
      text-align: left;
    }
  }

  .leaflet-control-measure-interaction {
    padding: $spacing-internal $spacing-external;
  }

  .results {
    .group {
      margin-top: $spacing-internal;
      padding-top: $spacing-internal;
      border-top: dotted 1px lighten($color-divider, 5);
      &:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
      }
    }
    .heading {
      margin-right: $spacing-internal * 0.5;
      color: $color-lightertext;
    }
  }

  a.start {
    @include button(start);
  }
  a.cancel {
    @include button(cancel);
  }
  a.finish {
    @include button(check);
  }
}

.leaflet-measure-resultpopup {
  a.zoomto {
    @include button(focus);
  }
  a.deletemarkup {
    @include button(trash);
  }
}
</style>
