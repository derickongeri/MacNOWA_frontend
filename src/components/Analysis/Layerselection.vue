<template>
  <div class="q-pa-none" style="min-width: 350px; overflow: hidden">
    <q-list>
      <q-expansion-item
        group="somegroup"
        icon="mdi-ferry"
        label="Ocean Conditions Forecast"
        default-opened
        header-class="text-primary text-h6"
      >
        <oceancondition/>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="mdi-fish"
        label="Potential Fishing zones"
        header-class="text-primary text-h6"
      >
        <pfzlayers/>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="mdi-liquid-spot"
        label="Oil Spill Monitoring"
        header-class="text-primary text-h6"
      >
        <oilSpilllayers/>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="mdi-sprout"
        label="Coastal Ecosystem Monitoring"
        header-class="text-primary text-h6"
      >
        <coastalecolayers/>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="mdi-home-flood"
        label="Coastal Vulnerability Mapping"
        header-class="text-primary text-h6"
        expand-icon-class="text-primary"
      >
        <coastalVulnerability/>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import oceancondition from "src/components/Analysis/Layerselectors/oceancondition.vue"
import pfzlayers from "src/components/Analysis/Layerselectors/pfzlayers.vue"
import oilSpilllayers from "src/components/Analysis/Layerselectors/oilspilllayers.vue"
import coastalecolayers from "src/components/Analysis/Layerselectors/coastalecolayers.vue"
import coastalVulnerability from "src/components/Analysis/Layerselectors/coastalVulnerability.vue"

// export default defineComponent({
//   setup() {
//     return {};
//   },
// });
</script>
