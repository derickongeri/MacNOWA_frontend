<template>
  <q-card class="">
    <q-card-section class="">
      <div class="q-pa-none text-grey-9" style="">
        <q-list separator dense>
          <q-item>
            <div>
              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
                dense
                class="q-gutter-y-sm"
              />
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";

const store = useRasterStore();

const group = ref(store.getLayerName);
const options = ref([
  {
    label: "Ocean State",
    value: "UG_GMES_ocean_state_forecast",
  },
  {
    label: "Sea Surface Temperature (SST)",
    value: "SST",
  },
  {
    label: "Sea Surface Salinity (SSSal)",
    value: "SALT",
  },
  {
    label: "Sea Surface Currents (SSC)",
    value: "SSC",
  },
  {
    label: "Sea Surface Height (SSH)",
    value: "SSH",
  },
  {
    label: "Significant Wave Height (SWH)",
    value: "SWH",
  },
  {
    label: "Precipitation",
    value: "RAINFALL",
  },
]);

watch(group, (val)=>{
  store.setLayerName(val);
})

const layeName = computed(()=>{store.getLayerName})

watch(layeName, ()=>{
  group.value = store.getLayerName
}, {deep: true})

</script>
