<template>
  <div class="q-pa-md" style="width:100%; max-height:90vh">
    <div class="q-gutter-y-md" style="min-width: 100%">
      <q-card flat>
        <q-tabs
          v-model="tab"
          class="bg-grey-2 text-grey-7"
          active-color="primary"
          narrow-indicator
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="mails" label="MacNOWA Services" no-caps/>
          <q-tab name="alarms" label="Analysis" no-caps />
          <!-- <q-tab name="movies" label="Movies" /> -->
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="text-grey-9" style="background-color: rgba(240, 248, 255, 0);">
          <q-tab-panel name="mails">
            <!-- <div class="text-h6 q-px-sm">Services</div> -->
            <layerselectpanel/>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6"></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import layerselectpanel from "src/components/Analysis/Layerselection.vue"

const tab = ref('mails')


</script>
