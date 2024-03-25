<template>
  <q-card
    bordered
    flat
    class="q-pa-md q-my-md chart-container"
    style="min-height: 400px; width: 100%"
    v-for="(service, index) in services"
    :key = "service.id"
  >
    <q-card-section class="q-px-none">
      <div class="row items-center">
        <div class="col text-primary text-subtitle1 text-weight-light">{{ service.name }}</div>
        <q-space />
        <div class="row q-gutter-x-sm items">
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-tray-arrow-down"
              @click="exportChart"
            />
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-image-outline"
            />
          </div>
          <div class="col">
            <q-btn
              dense
              size="sm"
              flat
              round
              color="primary"
              icon="mdi-information-outline"
            />
          </div>
        </div>
      </div>
    </q-card-section>
    <div v-if="service.name === 'Ocean State'" class="q-py-md"><stacked/></div>
    <div v-if="service.name !== 'Ocean State'" class="q-my-md"><linechart/></div>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

import linechart from "src/components/composables/charts/lineChart.vue";
import stacked from "src/components/composables/charts/stackedBar.vue"

const model = ref("latlong");
const services = ref([
  {
    name: 'Ocean State',
    chart: linechart,
  },
  {
    name: 'Sea Surface Temperature (SST)',
    chart: linechart,
  },
  {
    name: 'Salinity (Salt)',
    chart: linechart,
  },
  {
    name: 'Sea Surface Currents',
    chart: linechart,
  },
  {
    name: 'Sea Surface Height',
    chart: linechart,
  },
  {
    name: 'Significant Wave Height',
    chart: linechart,
  },


])

   const exportChart = (val) => {
      let elementIdname = "bar-stacked";
      let chart = document.getElementById(elementIdname).toDataURL("image/png");
      let a = document.createElement("a");
      a.href = chart;
      a.download = "image-export.png";
      a.click();
      a = null;
    };
</script>
