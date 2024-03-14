<template>
  <div class="q-pa-none" style="min-width: 16vw; overflow: hidden">
    <q-list>
      <q-item
        clickable
        @click="expandItem(0)"
        class="row items-center q-ma-none q-pa-none"
      >
        <q-item-label class="col text-primary text-bold" header
          ><q-icon class="q-pr-lg" size="sm" color="primary" name="mdi-ferry" />
          Ocean Conditions Forecast</q-item-label
        >
        <q-space />
        <q-icon class="q-mr-lg" :name="chevron" size="sm"></q-icon>
      </q-item>
      <q-separator />
      <q-item v-if="expanded[0]">
        <q-item-section>
          <coastalThumbnails />
        </q-item-section>
      </q-item>

      <q-item
        clickable
        @click="expandItem(1)"
        class="row items-center q-ma-none q-pa-none"
      >
        <q-item-label class="col text-primary text-bold" header
          ><q-icon class="q-pr-lg" size="sm" color="primary" name="mdi-fish" />
          Potential Fishing zones</q-item-label
        >
        <q-space />
        <q-icon class="q-mr-lg" :name="chevron" size="sm"></q-icon>
      </q-item>
      <q-separator />
      <q-item class="" v-if="expanded[1]">
        <q-item-section class="">
          <pfzThumbnails />
        </q-item-section>
      </q-item>

      <q-item
        clickable
        @click="expandItem(2)"
        class="row items-center q-ma-none q-pa-none"
      >
        <q-item-label class="col text-primary text-bold" header
          ><q-icon class="q-pr-lg" size="sm" color="primary" name="mdi-sprout" />
          Coastal Ecosystem Monitoring</q-item-label
        >
        <q-space />
        <q-icon class="q-mr-lg" :name="chevron" size="sm"></q-icon>
      </q-item>
      <q-separator />
      <q-item class="" v-if="expanded[2]">
        <q-item-section class="">
          <coastalecolayers />
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </div>
</template>

<script setup>
import { defineComponent, ref, watch } from "vue";
import oceancondition from "src/components/Analysis/Layerselectors/oceancondition.vue";
import pfzlayers from "src/components/Analysis/Layerselectors/pfzlayers.vue";
import oilSpilllayers from "src/components/Analysis/Layerselectors/oilspilllayers.vue";
import coastalecolayers from "src/components/Analysis/LayersSelection/coastalecolayers.vue";
import coastalVulnerability from "src/components/Analysis/Layerselectors/coastalVulnerability.vue";
import coastalThumbnails from "src/components/Analysis/LayersSelection/oceancondition.vue";
import pfzThumbnails from "src/components/Analysis/LayersSelection/pfzlayers.vue";

const expanded = ref([true, true, true]);
const chevron = ref("mdi-chevron-up");

const expandItem = (index) => {
  expanded.value[index] = !expanded.value[index];
};

watch(
  () => {
    return expanded.value;
  },
  (val) => {
    val = expanded.value
    if (expanded.value) {
      chevron.value = "mdi-chevron-up";
    } else {
      chevron.value = "mdi-chevron-down";
    }
  }
);
</script>
