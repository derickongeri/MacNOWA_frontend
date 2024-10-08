<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-none text-grey-9" style="">
        <q-list separator dense>
          <q-item>
            <div>
              <q-option-group
                v-model="group"
                :options="options"
                color="grey-9"
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
import { ref, watch, onBeforeMount, computed, onMounted } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const store = useRasterStore();
const layerSelected = ref("");

const group = ref(null);

const groupOption = computed(() => {
  const layer = store.getLayerName;
  return store.getecosystemLayers[layer];
});

const selected = ref();

const options = computed(() => {
  if (store.layerName == "mangrove") {
    return [
      {
        label: `${t("MangroveCover")} 2020`,
        value: "mangrove2020",
      },
      {
        label: `${t("MangroveCover")} 2015`,
        value: "mangrove2015",
      },
      {
        label: `${t("MangroveChange")} 2015 - 2020`,
        value: "mangroveChange",
      },
    ];
  } else {
    return [
      {
        label: `${t("Landcover")} 2020`,
        value: "landcover2020",
      },
    ];
  }
});

// const layeName = computed(() => {
//   store.getecosystemLayers.mangrove;
// });
watch(groupOption, (val) => {
  group.value = val;
});

onMounted(() => {
  const layer = store.getLayerName;
  group.value = store.getecosystemLayers[layer];
});

watch(group, (val) => {
  let layer = store.layerName;
  console.log(`watching:`, layer, val);
  store.setEcosystemLayerName(layer, val);
});
</script>
