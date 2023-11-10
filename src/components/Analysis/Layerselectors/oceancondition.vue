<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-md" style="min-width: 350px">
        <q-list separator dense>
          <q-item clickable v-ripple @click="setRasterName('ocean_state_forecast')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm">Ocean State</q-item-label>
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable @click="setRasterName('SST')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm"
                >Sea Surface Temperature (SST)</q-item-label
              >
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable @click="setRasterName('SALT')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm"
                >Sea Surface Salinity (SSSal)</q-item-label
              >
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable @click="setRasterName('SSC')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm"
                >Sea Surface Carrents (SSC)</q-item-label
              >
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable @click="setRasterName('SSH')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm">Sea Surface Height (SSH)</q-item-label>
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable @click="setRasterName('SWH')" style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm"
                >Significant Wave Height (SWH)</q-item-label
              >
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-item style="font-weight: 400; font-size: small">
            <q-item-section top class="col-1 gt-sm">
              <q-btn size="12px" flat dense round icon="more_vert" />
            </q-item-section>

            <q-item-section top class="col gt-sm">
              <q-item-label class="q-mt-sm">Precipitation</q-item-label>
            </q-item-section>

            <q-space />

            <q-item-section side>
              <div class="text-grey-1 q-gutter-xs">
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="map"
                  text-color="primary"
                />
                <q-btn
                  class="gt-xs"
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-opacity"
                  text-color="primary"
                />
                <q-btn
                  size="8px"
                  flat
                  dense
                  round
                  icon="mdi-information-variant"
                  text-color="primary"
                />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
//import { store } from "quasar/wrappers";
import {ref} from "vue"
import { useRasterStore } from "src/stores/rasterstore/index.js";

const store = useRasterStore();
const layerSelected = ref("")

const setRasterName = (val) => {
  console.log(val)
  store.setLayerName(val)
}

</script>
