<template>
  <div
    class="q-px-sm q-py-md"
    style="position: absolute; width: 100%; min-height: 100%"
  >
    <div
      class="q-mx-xs bg-white q-mx-auto"
      style="
        position: absolute;
        width: 32.5vw;
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
          <div class="">
            <div class="row q-mx-none q-mb-lg items-center">
              <div class="col">
                <q-select
                  readonly
                  outlined
                  v-model="model"
                  :options="options"
                  :label="centerPoint"
                />
              </div>
              <q-btn
                class="q-mx-md"
                flat
                round
                color="primary"
                icon="mdi-share-variant-outline"
              />
            </div>
            <q-scroll-area
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 65vh; min-width: 300px; overflow: hidden"
            >
              <layerAnalysis v-if="centerPoint" />
              <div v-else class="absolute-center">
                Click on map for analysis
              </div>
            </q-scroll-area>
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
import { useStatsStore } from "src/stores/statsStore";

const statsStore = useStatsStore();

const tab = ref("services");

const analysisState = computed(() => {
  return statsStore.getSelectedGrid;
});

const centerPoint = computed(() => {
  return statsStore.getCenterPoint;
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
