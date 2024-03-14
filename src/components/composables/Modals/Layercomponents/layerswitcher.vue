<template>
  <div class="column q-pa-none bg-white" style="min-width: fit-content">
    <q-list>
      <q-expansion-item
        dense
        header-class="bg-primary text-white"
        label="Layer Settings"
        default-opened
      >
        <datepicker/>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import Layerselection from "src/components/Analysis/Layerselection.vue";
import datepicker from "src/components/Analysis/dateselection.vue";



</script>
