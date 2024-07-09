<template>
  <v-tour
    class="site-tour q-pa-none q-ma-none"
    name="myTour"
    :steps="steps"
    :options="{ highlight: true }"
  ></v-tour>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'vue3-tour/dist/vue3-tour.css';

const iconHtml = '<i class="fa fa-check"></i>';

const steps = ref([
  {
    target: '.layer-options',
    content: `Change the layer date ${iconHtml} or years for the layer displayed on the map.`,
  },
  {
    target: '.zoom-buttons',
    content: 'Use the <strong>zoomin and zoomout</strong> to set the zoom level of the map. You can reset the zoom by clicking on the reset zoom button between the zoom-in and zoom-out buttons.',
  },
  {
    target: '.gradient-rect',
    content: 'The date slider allows you to quickly select a date for the layer to be added to the map.',
  },
  {
    target: '.basemap-selection',
    content: 'Use the date slider to quickly select a date for the layer loaded on the map.',
  },
  {
    target: '.tab-item',
    content: 'Use this to switch bettween the Services (Layers) and Analysis (Statistics) tab',
  },
]);

onMounted(() => {
  // Access the tour instance and start it if needed
  // this.$tours["myTour"].start();
});
</script>

<style>
.stie-tour {
  /* position: absolute; */
  z-index: 40000;
  padding: 0px;
  margin: auto;
}
.v-tour__target--highlighted {
  position: absolute;
  padding: 0px;
  margin: 0px;
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.596);
  z-index: 4200;
}
</style>
