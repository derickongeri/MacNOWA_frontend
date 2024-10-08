<template>
  <div class="q-pa-sm text-grey-9" style="">
    <q-list separator dense>
      <q-item>
        <div v-if="layerName == 'mangrove'">
          <q-option-group
            dense
            v-model="group"
            :options="options"
            color="primary"
            type="checkbox"
          />
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount, computed, onMounted } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const store = useRasterStore();
const group = ref(["mangrove2020"]);
const options = ref([
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
]);

watch(group, (val) => {
  store.updateLayerList(val);
});

const layerName = computed(() => {
  return store.getLayerName;
});
// watch(groupOption, (val) => {
//   group.value = val;
// });

onMounted(() => {
  group.value = store.getLayerList;
});

// watch(group, (val) => {
//   let layer = store.layerName;
//   store.setEcosystemLayerName(layer, val);
// });
</script>
