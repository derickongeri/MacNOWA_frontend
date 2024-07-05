<template>
  <q-carousel
    v-if="matchMediaDesktop"
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    navigation
    control-color="grey-7"
    height="650px"
    style="background-color: #00000000"
    class="rounded-borders"
    ref="carousel"
  >
    <q-carousel-slide
      v-for="(service, index) in services"
      :name="service.id"
      :key="service.id"
      class="column no-wrap"
    >
      <div
        class="row fit justify-around items-center q-mx-auto q-col-gutter no-wrap"
        style="max-height: 600vh"
      >
        <q-card
          v-if="service.id !== 1"
          class="my-card overlay bg-grey-2"
          flat
          style="max-width: 24%"
        >
          <q-img :src="getPrevService(index).image" style="max-height: 200px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-subtitle1 q-mt-sm q-mb-xs">
              {{ getPrevService(index).title }}
            </div>
            <div class="text-caption text-grey-7 service-desc">
              {{ getPrevService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn
              to="/dashboard"
              outline
              rounded
              color="primary"
              :label="$t('view_dashboard')"
            />

            <q-space />
          </q-card-actions>
        </q-card>
        <q-card
          v-else
          class="my-card overlay bg-grey-2"
          flat
          style="max-width: 24%"
        >
          <q-img class="bg-white" style="height: 250px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs text-white">
              {{ getPrevService(index).title }}
            </div>
            <div class="text-caption text-white service-desc">
              {{ getPrevService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <!-- <q-btn
              to="/dashboard"
              outline
              rounded
              color="primary"
              :label="$t('view_dashboard')"
            />

            <q-space /> -->
          </q-card-actions>
        </q-card>
        <q-card class="my-card bg-" flat style="max-width: 30%">
          <q-card-section
            ><div
              class="text-h5 text-primary q-mt-sm q-mb-xs"
              style="font-weight: 700"
            >
              {{ service.title }}
            </div></q-card-section
          >
          <q-img
            :src="service.image"
            style="max-height: 300px; border-radius: 10px"
          />

          <q-card-section style="min-height: 15vh">
            <div class="text-overline text-orange-9"></div>
            <!-- <div class="text-h5 q-mt-sm q-mb-xs">{{ service.title }}</div> -->
            <div class="text text-grey-7 service-desc">
              {{ service.description }}
            </div>

            <q-dialog v-model="alert">
              <q-card style="border-radius: 20px;max-width: 40vw;min-height: 50vh;">
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">{{ service.title }}</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section horizontal class="q-pa-md" style="min-height: 48vh;">
                  <q-card-section class="q-pt-none column text-justify">
                    {{ service.description }}
                  </q-card-section>

                  <q-img class="col-5" :src="service.image" />
                </q-card-section>

                <!-- <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions> -->
              </q-card>
            </q-dialog>
          </q-card-section>

          <q-card-actions class="q-mb-xl">
            <div class="row q-gutter-md">
              <q-btn
                no-caps
                flat
                :label="$t('read_more')"
                color="primary"
                @click="alert = true"
              />
              <q-btn
                to="/dashboard"
                outline
                rounded
                color="primary"
                :label="$t('view_dashboard')"
              />
            </div>
            <q-space />
          </q-card-actions>
        </q-card>
        <q-card
          v-if="service.id !== 6"
          class="my-card overlay bg-grey-2"
          flat
          style="max-width: 24%"
        >
          <q-img :src="getNextService(index).image" style="max-height: 200px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-subtitle1 q-mt-sm q-mb-xs">
              {{ getNextService(index).title }}
            </div>
            <div class="text-caption text-grey-7 service-desc">
              {{ getNextService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn
              to="/dashboard"
              outline
              rounded
              color="primary"
              :label="$t('view_dashboard')"
            />

            <q-space />
          </q-card-actions>
        </q-card>
        <q-card
          v-else
          class="my-card overlay bg-grey-2"
          flat
          style="max-width: 24%"
        >
          <q-img class="bg-white" style="height: 250px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs text-white">
              {{ getPrevService(index).title }}
            </div>
            <div class="text-caption text-white service-desc">
              {{ getPrevService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <!-- <q-btn
              to="/dashboard"
              outline
              rounded
              color="primary"
              :label="$t('view_dashboard')"
            />

            <q-space /> -->
          </q-card-actions>
        </q-card>
        <!-- <q-card v-if="getNextService(index).id !== 6" class="my-card overlay bg-grey-2" flat style="max-width: 24%">
          <q-img
            :src="getNextService(index + 1).image"
            style="max-height: 250px"
          />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ getNextService(index + 1).title }}
            </div>
            <div class="text-caption text-grey-7">
              {{ getNextService(index + 1).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn to="/dashboard" outline rounded color="primary" :label="$t('view_dashboard')" />

            <q-space />
          </q-card-actions>
        </q-card> -->
      </div>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control class="carousel-control" style="left: 30%">
        <q-btn
          v-if="slide !== 1"
          outline
          round
          dense
          color="primary"
          text-color="primary"
          icon="arrow_left"
          @click="$refs.carousel.previous()"
        />
      </q-carousel-control>
      <q-carousel-control class="carousel-control" style="right: 30%">
        <q-btn
          v-if="slide !== 6"
          outline
          round
          dense
          color="primary"
          text-color="primary"
          icon="arrow_right"
          @click="$refs.carousel.next()"
        />
      </q-carousel-control>
    </template>
  </q-carousel>

  <q-carousel
    v-if="matchMediaMobile"
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    navigation
    control-color="grey-7"
    height="750px"
    style="background-color: #00000000"
    class="rounded-borders"
    ref="carousel"
  >
    <q-carousel-slide
      v-for="(service, index) in services"
      :name="service.id"
      :key="service.id"
      class="column no-wrap"
    >
      <div
        class="row fit justify-around items-center q-mx-auto q-col-gutter no-wrap"
        style="max-height: 600vh"
      >
        <q-card class="my-card bg-grey-2" flat style="max-width: 90%">
          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h6 q-mt-sm q-mb-xs">{{ service.title }}</div>
            <div class="text-caption text-grey-8">
              {{ service.description }}
            </div>
          </q-card-section>

          <q-img :src="service.image" style="max-height: 250px" />

          <q-card-actions>
            <q-btn
              to="/dashboard"
              class="q-my-md"
              outline
              rounded
              color="primary"
              :label="$t('view_dashboard')"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control
        class=""
        style="position: absolute; margin: auto; left: 4%; bottom: 45%"
      >
        <q-btn
          round
          dense
          color="primary"
          text-color="white"
          icon="arrow_left"
          @click="$refs.carousel.previous()"
        />
      </q-carousel-control>
      <q-carousel-control
        class=""
        style="position: absolute; margin: auto; right: 4%; bottom: 45%"
      >
        <q-btn
          round
          dense
          color="primary"
          text-color="white"
          icon="arrow_right"
          @click="$refs.carousel.next()"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { defineComponent, ref, onBeforeMount, computed, reactive } from "vue";
import myImage from "src/assets/DJI_00302.png";
import fishingImg from "src/assets/DJI_08781.png";
import oceanConditionsImg from "src/assets/DJI_00371.png";
import coastalVulnerabilityImg from "src/assets/DJI_05791.png";
import oilspillImg from "src/assets/oil-spill2023-05-0323-12-122023-05-0513-53-20_2023-05-08_15-40-07.jpg";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const services_ = ref([]),
      matchMediaDesktop = ref(false),
      matchMediaMobile = ref(false);

    const title1 = reactive(t("ocean_condition"));

    const services = computed(() => {
      return [
        {
          id: 1,
          image: oceanConditionsImg,
          title: t("ocean_condition"),
          description: t('Oceanographic_Variables_desc')
        },
        {
          id: 2,
          image: fishingImg,
          title: t("potential_fishing_zones"),
          description: t('pfz_desc')
        },
        {
          id: 3,
          image: myImage,
          title: t("ocean_condition"),
          description: t('ocean_condition_desc')
        },
        {
          id: 4,
          image: coastalVulnerabilityImg,
          title: t("coastal_ecosystem_maping"),
          description: t('Coastal_Ecosystem_desc')
        },
        {
          id: 5,
          image: fishingImg,
          title: t("coastal_vulnerability"),
          description: t('cva_desc')
        },
        {
          id: 6,
          image: oilspillImg,
          title: t("oil_spill_monitoring"),
          description: t('oil_spill_desc')
        },
      ];
    });

    const getNextService = (currentIndex) => {
      const nextIndex = (currentIndex + 1) % services.value.length;
      return services.value[nextIndex];
    };

    const getPrevService = (currentIndex) => {
      if (currentIndex > 0) {
        const nextIndex = (currentIndex - 1) % services.value.length;
        return services.value[nextIndex];
      } else {
        return services.value[0];
      }
    };

    onBeforeMount(() => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    });
    return {
      services,
      slide: ref(3),
      alert: ref(false),
      getNextService,
      getPrevService,
      matchMediaDesktop,
      matchMediaMobile,
    };
  },
});
</script>

<style>
.overlay {
  position: relative;
}

.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.781
  ); /* Gray color with 50% opacity */
  z-index: 1;
}

/* Your other styles for the div go here */

.service-desc {
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
