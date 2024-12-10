<template>
  <div class="mobile-analysis" style="min-width: 100%;">
    <div v-if="dailyData">
      <div>
        <div class="row q-mx-none q-mb-lg items-center">
          <div class="col">
            <q-input
              readonly
              outlined
              v-model="centerPoint"
              :options="options"
              label="Lat,Lon"
            >
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="text = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <q-btn
            class="q-mx-md"
            flat
            round
            color="primary"
            icon="mdi-share-variant-outline"
          />
        </div>
        <div class="row q-mx-none q-mb-lg items-center">
          <div class="col">
            <dateFilter />
          </div>
        </div>
        <div class="analysis-scroll-area">
          <q-scroll-area
            class="analysis-scroll-area"
            :thumb-style="scrollBar.thumbStyle"
            :bar-style="scrollBar.barStyle"
            style=""
          >
            <layerAnalysis />
          </q-scroll-area>
        </div>
      </div>
    </div>
    <div
      v-else-if="showMangroveStats"
      class="analysis-scroll-area"
      style="height: 75vh"
    >
      <q-scroll-area
        class="analysis-scroll-area"
        :thumb-style="scrollBar.thumbStyle"
        :bar-style="scrollBar.barStyle"
        style="height: 100%"
      >
        <mangroveAnalysis />
      </q-scroll-area>
    </div>
    <div
      v-else-if="showLandcoverStats"
      class="analysis-scroll-area"
      style="height: 75vh"
    >
      <q-scroll-area
        class="analysis-scroll-area"
        :thumb-style="scrollBar.thumbStyle"
        :bar-style="scrollBar.barStyle"
        style="height: 100%"
      >
        <landcoverAnalysis />
      </q-scroll-area>
    </div>
    <div v-else class="absolute-center">
      click on map or draw polygon for analysis
    </div>
  </div>

  <div
    class="q-px-sm q-py-md desktop-analysis"
    style="position: absolute; width: 100%; min-height: 100%"
  >
    <div
      class="q-mx-xs bg-white q-mx-auto"
      style="
        position: absolute;
        width: 34vw;
        max-height: 96%;
        border-radius: 10px;
      "
    >
      <q-tabs
        v-model="tab"
        class="tab-item text-grey-9 q-pa-none q-ma-md"
        active-class="active-tab"
        switch-indicator
        indicator-color="transparent"
        align="justify"
      >
        <q-tab name="services" :label="$t('serviceTab')" no-caps />
        <q-tab name="analysis" :label="$t('analysisTab')" no-caps />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        animated
        class="text-grey-9"
        style="background-color: rgba(240, 248, 255, 0)"
      >
        <q-tab-panel name="services" style="min-height: 85vh">
          <div class="q-ma-xs">
            <q-scroll-area
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 70vh; min-width: 300px; overflow: hidden"
            >
              <layerselectpanel />
              <div
                class="row justify-between items-center bg-white q-px-md"
                style="min-width: 100%; height: 70px; border-bottom: 10px"
              ></div>
            </q-scroll-area>
          </div>
        </q-tab-panel>

        <q-tab-panel name="analysis" style="min-height: 85vh">
          <div v-if="dailyData">
            <div>
              <div class="row q-mx-none q-mb-lg items-center">
                <div class="col">
                  <q-input
                    readonly
                    outlined
                    v-model="centerPoint"
                    :options="options"
                    label="Lat,Lon"
                  >
                    <template v-slot:prepend>
                      <q-icon name="place" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        name="close"
                        @click="text = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
                <q-btn
                  class="q-mx-md"
                  flat
                  round
                  color="primary"
                  icon="mdi-share-variant-outline"
                />
              </div>
              <div class="row q-mx-none q-mb-lg items-center">
                <div class="col">
                  <dateFilter />
                </div>
              </div>
              <div class="analysis-scroll-area">
                <q-scroll-area
                  class="analysis-scroll-area"
                  :thumb-style="scrollBar.thumbStyle"
                  :bar-style="scrollBar.barStyle"
                  style=""
                >
                  <layerAnalysis />
                </q-scroll-area>
              </div>
            </div>
          </div>
          <div
            v-else-if="showMangroveStats"
            class="analysis-scroll-area"
            style="height: 75vh"
          >
            <q-scroll-area
              class="analysis-scroll-area"
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 100%"
            >
              <mangroveAnalysis />
            </q-scroll-area>
          </div>
          <div
            v-else-if="showLandcoverStats"
            class="analysis-scroll-area"
            style="height: 75vh"
          >
            <q-scroll-area
              class="analysis-scroll-area"
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 100%"
            >
              <landcoverAnalysis />
            </q-scroll-area>
          </div>
          <div v-else class="absolute-center">
            click on map or draw polygon for analysis
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import layerselectpanel from "src/components/Analysis/Layerselection.vue";
import layerAnalysis from "src/components/Analysis/charts/oceanconditions.vue";
import mangroveAnalysis from "src/components/Analysis/charts/mangrove.vue";
import landcoverAnalysis from "src/components/Analysis/charts/landcover.vue";
import dateFilter from "src/components/Analysis/deteFilter.vue";
import { useStatsStore } from "src/stores/statsStore";
import { useRasterStore } from "src/stores/rasterstore";

const statsStore = useStatsStore();
const store = useRasterStore();

const tab = ref("services");

const analysisState = computed(() => {
  return statsStore.getSelectedGrid;
});

const centerPoint = computed(() => {
  return statsStore.getCenterPoint;
});

const dailyData = computed(() => {
  return (
    statsStore.getCenterPoint &&
    !["landcover", "mangrove"].includes(store.layerName)
  );
});

const showMangroveStats = computed(() => {
  return statsStore.customPolygon && store.layerName == "mangrove";
});

const showLandcoverStats = computed(() => {
  return statsStore.customPolygon && store.layerName == "landcover";
});

watch(analysisState, (val) => {
  if (val) {
    tab.value = "analysis";
  }
});

const scrollBar = ref({
  thumbStyle: {
    right: "2px",
    borderRadius: "5px",
    backgroundColor: "#002F6B",
    width: "10px",
    height: "100px",
    opacity: 0.75,
  },

  barStyle: {
    right: "-6px",
    borderRadius: "9px",
    backgroundColor: "#027be3",
    width: "4px",
    opacity: 0.2,
  },
});
</script>

<style>
.active-tab {
  background-color: #002e6b2d;
  color: #002f6b;
  border-radius: 10px;
  margin: 5px;
}

.tab-item:hover {
  background-color: white;
}
</style>
