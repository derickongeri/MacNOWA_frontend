<template>
  <q-card flat class="">
    <q-card-section>
      <div
        class="q-pa-none text-grey-9 fit row wrap justify-start q-gutter-y-md q-gutter-x-lg content-start"
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
                    <q-icon :name="option.icon" size="xs" color="white" class="q-ml-xs" />
                  </q-badge>
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import oceanstateImg from "src/assets/oceanstatethumb.png";
import sstImg from "src/assets/sstthumb.png";
import saltImg from "src/assets/saltThumb.png";
import currentsImg from "src/assets/currentsThumb.png";
import sshImg from "src/assets/sshThumb.png";
import swhImg from "src/assets/swhThumb.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const store = useRasterStore();

const group = ref(store.getLayerName);
const options = computed(()=>{return [
  {
    label: t("OceanState"),
    icon: "mdi-alert",
    value: "UG_GMES_ocean_state_forecast",
    img: oceanstateImg,
    activeStatus: false,
  },
  {
    label: t("Temperature"),
    icon: "mdi-thermometer-water",
    value: "SST",
    img: sstImg,
    activeStatus: false,
  },
  {
    label: t("Salinity"),
    icon: "mdi-grain",
    value: "SALT",
    img: saltImg,
    activeStatus: false,
  },
  {
    label: t("Currents"),
    icon: "mdi-weather-windy",
    value: "SSC",
    img: currentsImg,
    activeStatus: false,
  },
  {
    label: t("SurfaceHeight"),
    icon: "mdi-waves-arrow-up",
    value: "SSH",
    img: sshImg,
    activeStatus: false,
  },
  {
    label: t("WaveHeight"),
    icon: "mdi-surfing",
    value: "SWH",
    img: swhImg,
    activeStatus: false,
  },
  // {
  //   label: "Precipitation",
  //   value: "RAINFALL",
  //   img: oceanstateImg
  // },
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
  ()=>store.getLayerName,
  (val) => {
    group.value = store.getLayerName;

    (option) => {
      if (option.value === val) option.activeStatus = true;
      if (option.value !== val) option.activeStatus = false;
    };
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
