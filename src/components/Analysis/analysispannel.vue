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
        class="bg-primary text-grey-1 q-pa-none q-ma-none"
        active-color="grey-1"

        switch-indicator
        indicator-color="grey-1"
        align="justify"
      >
        <q-tab name="services" label="MarCNoWA Services" no-caps />
        <q-tab name="analysis" label="Analysis" no-caps />
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
              style="height: 70vh; min-width: 300px; overflow: hidden;"
            >
              <layerselectpanel />
              <div
              class="row justify-between items-center bg-white q-px-md"
              style="min-width: 100%; height: 70px; border-bottom: 10px"
            ></div>
            </q-scroll-area>
          </div>
        </q-tab-panel>

        <q-tab-panel name="analysis">
          <div class="text-h6"></div>
          <div class="row" style="height: 35vh"><linechart /></div>
        </q-tab-panel>
      </q-tab-panels>
      <!-- <div class="q-ma-md absolute-bottom">
        <q-scroll-area
          :thumb-style="scrollBar.thumbStyle"
          :bar-style="scrollBar.barStyle"
          style="height: 70vh; min-width: 300px"
        >
          <div class="q-px-md" style="min-height: 30vh"><linechart /></div>
          <div class="q-px-md" style="min-height: 30vh"><linechart /></div>
          <div class="q-px-md" style="min-height: 30vh"><linechart /></div>
        </q-scroll-area>
      </div> -->

      <div
        class="row shadow-up-1 justify-between items-center absolute-bottom bg-white q-px-md"
        style="min-width: 100%; height: 70px; border-bottom: 10px"
      >
        <div class="col">
          <img src="src/assets/GMES.png" style="width: 70%" />
        </div>
        <div class="col">
          <img src="src/assets/AUlogo.png" style="width: 70%" />
        </div>
        <div class="col">
          <img
            class="q-ml-lg"
            src="src/assets/EU logo.png"
            style="width: 40%"
          />
        </div>
        <div class="col">
          <img src="src/assets/UG_logo.png" style="width: 70%" />
        </div>
      </div>

      <!-- <q-card flat>
        <q-tabs
          v-model="tab"
          class="bg-grey-2 text-grey-7"
          active-color="primary"
          narrow-indicator
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="services" label="MacNOWA Services" no-caps />
          <q-tab name="analysis" label="Analysis" no-caps />

        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          class="text-grey-9"
          style="background-color: rgba(240, 248, 255, 0)"
        >
          <q-tab-panel name="services" style="min-height: 84vh;">

            <layerselectpanel />
            <div class="q-ma-md">
              <q-scroll-area
                :thumb-style="scrollBar.thumbStyle"
                :bar-style="scrollBar.barStyle"
                style="height: 600px; min-width: 300px"
              >
                <div class="row" style="min-height: 30vh"><linechart /></div>
                <div class="row" style="min-height: 30vh"><linechart /></div>
                <div class="row" style="min-height: 30vh"><linechart /></div>
              </q-scroll-area>
            </div>

          </q-tab-panel>

          <q-tab-panel name="analysis">
            <div class="text-h6"></div>
            <div class="row" style="height: 35vh"><linechart /></div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import layerselectpanel from "src/components/Analysis/Layerselection.vue";
import linechart from "src/components/composables/charts/lineChart.vue";

const tab = ref("services");

const scrollBar = ref({
  thumbStyle: {
    right: "-2px",
    borderRadius: "5px",
    backgroundColor: "#027be300",
    width: "5px",
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
