<template>
  <div
    class="col page-tint"
    id=""
    v-if="matchMediaDesktop"
    style="max-width: 100%"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
    <div
      class="row items-center"
      id="hero"
      style="min-height: 75vh; max-width: 90%; margin-left: auto"
    >
      <div
        class="column items-left"
        style="min-height: 70%; border-radius: 20px; max-width: 45%"
      >
        <div class="" style="border-radius: 20px; background-color: #03213500">
          <div class="column">
            <div class="col justify-left">
              <div
                class="my-font-2 tagline text-left text-grey-1 q-pa-none"
                style=""
              >
                {{ $t("tagline") }}
              </div>
            </div>
            <div class="row justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-px-none q-py-md"
                style="font-weight: 400; font-size: 21px"
              >
                {{ $t("subtag") }}
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-left">
          <!-- <div class="row justify-center text-white" style="font-weight:700; font-size:21px;width:100%">Choose an Application to Launch</div> -->
          <div class="text-left q-py-md" style="min-width: 60%">
            <!-- <q-btn
              class="my-font-2 text-bold"
              size="lg"
              icon-right="mdi-arrow-right"
              text-color="blue-9"
              style="background-color: #ffffff; border-radius: 12px"
              :label="$t('webgis')"
              to="/dashboard"
            /> -->
            <q-btn
              class="q-mx-none q-px-none"
              rounded
              color="white"
              text-color="primary"
              to="/dashboard"
            >
              <q-avatar
                class="q-mx-sm q-px-none"
                font-size="12px"
                size="md"
                color="indigo-12"
                text-color="white"
                icon="mdi-monitor-dashboard"
              />
              <div class="q-px-md my-font-2">{{ $t("webgis") }}</div>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="col items-center" style="min-height: 100%; min-width: 40%">
        <div
          class="column justify-center items-center"
          style="min-height: 100%"
        >
          <div class="" style="height: 100%; width: 80%">
            <div class="row">
              <q-img
                class="col"
                src="~/src/assets/mockup.png"
                style="
                  position: relative;
                  border-radius: 20px;
                  min-height: 100%;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="page-tint"
    v-if="matchMediaMobile"
    style="min-width: 100%"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
    <div
      class="my-font-2 q-px-sm text-left q-pt-xl text-grey-1 q-pa-none"
      style="
        max-width: 90vw;
        margin: auto;
        font-weight: 700;
        font-size: xx-large;
        line-height: 1.75;
      "
    >
      {{ $t("tagline") }}
    </div>
    <div
      class="my-font-2 q-px-sm q-pt-lg text-left text-grey-1 q-px-none q-pb-md"
      style="font-weight: 400; font-size: 21px; max-width: 90vw; margin: auto"
    >
      {{ $t("subtag") }}
    </div>
    <div class="row justify-left q-pb-lg q-ml-xs" style="max-width: 90vw">
      <div class="text-left q-py-md my-font-2" style="min-width: 100vw">
        <q-btn
          class="my-font-2 q-ml-md text-bold"
          size="md"
          text-color="blue-9"
          style="background-color: #ffffff; border-radius: 12px"
          :label="$t('webgis')"
          to="/dashboard"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onBeforeMount } from "vue";
import imagePath from "src/assets/DJI_00371.png";

const slide = ref(1),
  autoplay = ref(true),
  matchMediaDesktop = ref(false),
  matchMediaMobile = ref(false);

onBeforeMount(() => {
  matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
  matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
});
</script>

<style>
.page-tint {
  /* background-color: rgba(86, 102, 131, 0.945);
  background-blend-mode: multiply; */
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}
</style>
