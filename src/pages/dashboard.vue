<template>
  <q-page class="page-body">
    <Tour name="myTour" style="position: absolute; min-width: 25vw" />
    <div v-if="matchMediaDesktop" class="row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column q-ma-md" style="max-width: 65vw; flex: 1">
          <div style="width: 100%; height: 100%"><mappanel /></div>
        </div>
        <div
          class="column q-ma-none"
          style="max-width: 33vw; height: 100%; flex: 1"
        >
          <div><analysiltabs /></div>
        </div>
      </div>
    </div>
    <div v-if="matchMediaMobile" class="row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column" style="width: 100vw; flex: 1">
          <div style="width: 100%; height: 100%"><mappanel /></div>
          <!-- <div
            class="absolute q-pa-md"
            style="z-index: 1000; bottom: 10%; right: 0%"
          >
            <q-btn
              round
              icon="layers"
              color="primary"
              @click="open('bottom')"
            />
          </div> -->
        </div>
        <q-dialog seamless v-model="dialog" :position="position">
          <q-card style="max-height: 50vh">
            <q-card-section class="row items-center q-pb-">
              <div class="text-h6">Add Layer</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-scroll-area
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 40vh; min-width: 300px; overflow: hidden"
            >
              <layerselectpanel />
            </q-scroll-area>

            <q-card-section> </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog seamless v-model="analysisdialog" :position="position">
          <q-card style="max-height: 50vh">
            <q-card-section class="row items-center q-pb-">
              <div class="text-h6">Analysis</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-scroll-area
              :thumb-style="scrollBar.thumbStyle"
              :bar-style="scrollBar.barStyle"
              style="height: 40vh; min-width: 300px; overflow: hidden"
            >
              <layerAnalysis />
            </q-scroll-area>

            <q-card-section> </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog seamless v-model="settingsdialog" :position="position">
          <q-card style="max-height: 50vh">
            <q-card-section class="row items-center q-pb-">
              <div class="text-h6">Layer Settings</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
              <layerswitcher />
            </q-card-section>

            <q-card-section> </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog seamless v-model="metadialog" :position="position">
          <q-card style="max-height: 50vh">
            <q-card-section class="row items-center q-pb-">
              <div class="text-h6">About Layer</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section> </q-card-section>

            <q-card-section> </q-card-section>
          </q-card>
        </q-dialog>

        <!-- <div class="column bg-none q-ma-none" style="max-width: 33vw; flex: 1">
         <div> <analysiltabs/></div>
        </div> -->
      </div>
    </div>

    <q-footer v-if="matchMediaMobile">
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <div class="row justify-around items-center">
            <div class="col text-center">
              <q-btn
                flat
                stack
                size="sm"
                label="Layers"
                icon="layers"
                color="primary"
                @click="open('bottom')"
              />
            </div>
            <div class="col text-center">
              <q-btn
                flat
                stack
                size="sm"
                label="analysis"
                icon="mdi-poll"
                color="primary"
                @click="openanalysis('bottom')"
              />
            </div>
            <div class="col text-center">
              <q-btn
                flat
                stack
                size="sm"
                label="Settings"
                icon="mdi-cog"
                color="primary"
                @click="opensettings('bottom')"
              />
            </div>
            <div class="col text-center">
              <q-btn
                flat
                stack
                size="sm"
                label="Layer Info"
                icon="mdi-information"
                color="primary"
                @click="openmeta('bottom')"
              />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

import mappanel from "../components/composables/Map.vue";
import analysiltabs from "src/components/Analysis/analysispannel.vue";
import layerswitcher from "src/components/composables/Modals/Layercomponents/layerswitcher.vue";
import Tour from "src/components/composables/Tour.vue";
import layerselectpanel from "src/components/Analysis/Layerselection.vue";
import layerAnalysis from "src/components/Analysis/charts/oceanconditions.vue";

const dialog = ref(false),
  position = ref("right");

const analysisdialog = ref(false);
const settingsdialog = ref(false);
const metadialog = ref(false);

const matchMediaDesktop = ref(false),
  matchMediaMobile = ref(false);

const open = (pos) => {
  position.value = pos;
  dialog.value = true;
};

const openanalysis = (pos) => {
  position.value = pos;
  analysisdialog.value = true;
};

const opensettings = (pos) => {
  position.value = pos;
  settingsdialog.value = true;
};

const openmeta = (pos) => {
  position.value = pos;
  metadialog.value = true;
};

onBeforeMount(() => {
  matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
  matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
});

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

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  background: #f0f2f8; /* url("~/src/assets/3387682.jpg") no-repeat center; */
  background-size: cover;
  overflow: hidden;
}
.content {
  display: flex;
}
</style>
