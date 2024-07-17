<template>
  <div
    class="q-px-md q-pb-sm text-grey-9 fit row wrap justify-start q-gutter-y-md q-gutter-x-lg content-start"
  >
    <div
      v-for="(option, index) in options"
      :name="option.id"
      :key="option.id"
      class="column items-center"
    >
      <q-item
        clickable
        @click="setSelectedLayer(option.value, option.activeStatus)"
        class="column q-mx-sm items-center"
        style="max-width: 100px"
        :class="{ clicked: option.activeStatus }"
      >
        <q-item-section>
          <img
            :src="option.img"
            style="width: 100%; height: 70%; border-radius: 5px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span
              class="text-label"
              style="max-width: 100px; text-align: center"
              dense
              >{{ option.label }}
              <q-badge floating transparent color="primary">
                <q-icon
                  :name="option.icon"
                  size="xs"
                  color="white"
                  class="q-ml-xs"
                />
              </q-badge>
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import lulcImg from "src/assets/lulcThumb.png";
import mangroveImg from "src/assets/mangroveThumb.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const store = useRasterStore();
const layerSelected = ref("");

const group = ref(store.getLayerName);
const options = computed(()=>{return [
  {
    label: t("CoastalLanduse"),
    icon: "mdi-map-legend",
    value: "landcover",
    img: lulcImg,
    activeStatus: false,
  },
  {
    label: t("MangroveCover"),
    icon: "mdi-forest",
    value: "mangrove",
    img: mangroveImg,
    activeStatus: false,
  },
]});

const setSelectedLayer = (val) => {
  options.value.forEach((option) => {
    if (option.value === val) option.activeStatus = true;
    if (option.value !== val) option.activeStatus = false;
  });
  group.value = val;
};

watch(group, (val) => {
  store.setLayerName(val);
});

const layeName = computed(() => {
  store.getLayerName;
});

watch(
  layeName,
  () => {
    group.value = store.getLayerName;
  },
  { deep: true }
);
</script>

<style scoped>
.clicked {
  border: solid 2px indigo;
  border-radius: 5%;
}

.not-clicked {
  border: solid 1px indigo;
  border-radius: 5%;
}
</style>
