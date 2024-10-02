<template>
  <h6
    class="title text-grey-10 q-px-md q-py-sm"
    style="
      background-color: #00000000;
      text-decoration: underline;
      display: none;
      top: 2px;
      width: 98.5%;
      position: fixed;
      z-index: 10000;
    "
    leaflet-browser-print-content
  >
    {{ mapTitle }}
  </h6>
  <div
    class="north-arrow q-px-md"
    style="
      width: fit-content;
      height: fit-content;
      display: none;
      position: absolute;
      z-index: 100000;
      top: 10%;
      right: 250px;
    "
    leaflet-browser-print-content
  >
    <q-avatar square size="50px" class="q-ma-none">
      <img
        src="~/src/assets/northarrow2.png"
        style="position: relative; width: 100%; height: 100%; left: -1%"
      />
    </q-avatar>
  </div>
  <div
    class="target-div"
    style="
      width: fit-content;
      height: fit-content;
      display: none;
      position: absolute;
      display: none;
      bottom: 20%;
      left: 5%;
    "
    leaflet-browser-print-content
  ></div>
  <div
    class="my-font sub-content q-mr-md"
    style="display: none; max-width: 200px"
    leaflet-browser-print-content
  >
    <div
      class="column justify-between q-ma-none q-px-xs"
      style="position: relative; height: 100%"
    >
      <!-- <h6 class="q-mt-none"></h6> -->

      <div class="row">
        <div class="q-pa-xs" style="border: 1px solid grey; width: 100%">
          <div style="max-width: 85%">
            <Maplegend />
          </div>
        </div>
      </div>

      <div class="row q-mt-xs q-mb-xs">
        <div class="q-my-none q-pa-xs bg-grey-2">
          <!-- <div class="row items-start">
            <h6
              class="q-my-none q-pr-sm"
              style="font-size: 1em; font-weight: bold"
            >
              Data type:
            </h6>
            <p
              class="text-justify q-my-none"
              style="font-size: 1em; max-width: 200px"
            >
              Ocean Condition forecast
            </p>
          </div> -->

          <div class="row items-center">
            <h6
              class="q-my-none q-pr-sm"
              style="font-size: 1em; font-weight: bold"
            >
              Data Source:
            </h6>
            <p
              class="text-justify q-my-none"
              style="font-size: 1em; max-width: 200px"
            >
              <span>
                <a href="https://derickongeri.github.io">MarCNoWA geoportal</a>
              </span>
            </p>
          </div>

          <div class="row items-center">
            <h6
              class="q-my-none q-pr-sm"
              style="font-size: 1em; font-weight: bold"
            >
              Print Date:
            </h6>
            <p
              class="text-justify q-my-none"
              style="font-size: 1em; max-width: 200px"
            >
              {{ printDate }}
            </p>
          </div>

          <div class="row items-start">
            <p
              class="q-my-none q-pr-sm"
              style="font-size: 1em; font-weight: bold"
            >
              Credit:
            </p>
            <p
              class="text-justify q-my-none"
              style="font-size: 1em; max-width: 200px"
            >
              Regional Marine Centre, University of Ghana, C/o P.O.Box LG 99,
              Legon Accra, GHANA
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="row q-mt-xs q-mb-xs">
        <div class="q-my-none q-pa-xs">
          <h6 class="q-my-none" style="font-size: 1em; font-weight: bold">
            Note
          </h6>
          <p
            class="text-justify q-my-none"
            style="font-size: 0.75em; max-width: 200px"
          >
            This map is a product from the Marine and Coastal Areas Management
            in North and West Africa (MarCNoWA) geoportal which provides Earth
            Observation services to 18 coastal countries, supporting
            environmental sustainability and natural resource management as part
            of the GMES and Africa program.
          </p>
        </div>
      </div> -->

      <!-- <div
        class="row items-center q-mt-xs q-mb-xs"
        style="max-width: 100px; max-height: 100px"
      >
        <span
          class="my-font"
          style="min-width: 200px; font-weight: light; font-size: 0.75em"
          >{{$t('createdby')}}
          <a href="https://derickongeri.github.io">Derick Ongeri</a></span
        >
      </div> -->
    </div>
  </div>
  <div
    class="footer-content"
    style="
      text-decoration: underline;
      display: none;
      bottom: 0px;
      width: 98.5%;
      height: 12%;
      position: fixed;
      z-index: 10000;
    "
    leaflet-browser-print-content
  >
    <div
      class="row items-center q-pa-sm justify-between bg-white q-ma-xs"
      style="min-width: 98%; min-height: 98%"
    >
      <div class="column">
        <a href="http://gmes.africa-union.org" target="_blank" rel="noopener">
          <img
            src="~/src/assets/marcnowa.jpeg"
            style="position: relative; width: 100%; height: 55px"
        /></a>
      </div>

      <div class="column">
        <a href="http://gmes.africa-union.org" target="_blank" rel="noopener">
          <img
            src="~/src/assets/GMES.png"
            style="position: relative; width: 100%; height: 55px"
        /></a>
      </div>
      <div class="column q-pl-md">
        <a href="https://au.int/" target="_blank" rel="noopener">
          <img
            src="~/src/assets/AU logo.png"
            style="position: relative; width: 100%; height: 55px; left: -1%"
        /></a>
      </div>

      <div class="column q-pl-md">
        <a
          href="https://european-union.europa.eu"
          target="_blank"
          rel="noopener"
        >
          <img
            src="~/src/assets/EU logo.png"
            style="position: relative; width: 100%; height: 55px; left: -1%"
        /></a>
      </div>
      <div class="column q-pl-md">
        <a
          href="https://cbas.ug.edu.gh/news/cbas-launches-%E2%82%AC24-million-marcnowa-project-under-gmes-and-africa-programme"
          target="_blank"
          rel="noopener"
        >
          <img
            src="~/src/assets/UG logo 23.png"
            style="position: relative; width: 100%; height: 60px; left: -1%"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
  getCurrentInstance,
  onBeforeMount,
} from "vue";
// import { useVectorStore } from "../../../../stores/vector_store/index.js";
import { useRasterStore } from "src/stores/rasterstore";
import legend from "../Layercomponents/Legend.vue";

export default {
  components: {
    Maplegend: legend,
  },
  setup() {
    const store = useRasterStore();

    const printDate = ref(new Date());

    function formatDate(dateString) {
      // Extract year, month, and day from the input string
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);

      // Return the formatted date
      return `${day}-${month}-${year}`;
    }

    const mapTitle = computed(() => {
      let title;
      let layerName = store.getLayerName;
      let date = store.getSelectedDate;
      date = formatDate(date);
      if (layerName == "landcover" || layerName == "mangrove") {
        switch (layerName) {
          case "mangrove":
            title = "Mangrove Cover";
            break;
          default:
            title = "Land Cover";
            break;
        }
      } else {
        switch (layerName) {
          case "UG_GMES_ocean_state_forecast":
            title = `Ocean State ${date}`;
            break;
          case "SSC":
            title = `Sea Surface Currents ${date}`;
            break;
          case "SSH":
            title = `Sea Surface Height ${date}`;
            break;
          case "SST":
            title = `Sea Surface Temperature ${date}`;
            break;
          case "SALT":
            title = `Salintity ${date}`;
            break;
          case "SWH":
            title = `Significant Wave Height ${date}`;
            break;
          default:
            title = layerName + ` ${date}`;
            break;
        }
      }

      return title;
    });

    return {
      // selectedArea: ref(store.getselectedRegion),
      // fireDates: ref(store.getDatesSelected),
      mapTitle,
      printDate
    };
  },
};
</script>
