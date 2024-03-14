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
        <q-card class="my-card overlay bg-grey-2" flat style="max-width: 24%">
          <q-img :src="getPrevService(index).image" style="max-height: 250px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ getPrevService(index).title }}
            </div>
            <div class="text-caption text-grey-7">
              {{ getPrevService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn outline rounded color="primary" label="view on dashboard" />

            <q-space />
          </q-card-actions>
        </q-card>
        <q-card class="my-card bg-grey-2" flat style="max-width: 24%">
          <q-img :src="service.image" style="max-height: 250px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ service.title }}</div>
            <div class="text-caption text-grey-7">
              {{ service.description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn outline rounded color="primary" label="view on dashboard" />

            <q-space />
          </q-card-actions>
        </q-card>
        <q-card class="my-card bg-grey-2" flat style="max-width: 24%">
          <q-img :src="getNextService(index).image" style="max-height: 250px" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ getNextService(index).title }}
            </div>
            <div class="text-caption text-grey-7">
              {{ getNextService(index).description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn outline rounded color="primary" label="view on dashboard" />

            <q-space />
          </q-card-actions>
        </q-card>
        <q-card class="my-card overlay bg-grey-2" flat style="max-width: 24%">
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
            <q-btn outline rounded color="primary" label="view on dashboard" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control
        class=""
        style="position: absolute; margin: auto; left: 25%; bottom: 45%"
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
        style="position: absolute; margin: auto; right: 25%; bottom: 45%"
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
            <q-btn class="q-my-md" outline rounded color="primary" label="view on dashboard" />

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
import { defineComponent, ref, onBeforeMount } from "vue";
import myImage from "src/assets/DJI_00302.png";
import fishingImg from "src/assets/DJI_08781.png";
import oceanConditionsImg from "src/assets/DJI_00371.png";
import coastalVulnerabilityImg from "src/assets/DJI_05791.png";
import oilspillImg from "src/assets/oil-spill2023-05-0323-12-122023-05-0513-53-20_2023-05-08_15-40-07.jpg";

export default defineComponent({
  setup() {
    const services = ref([]),
      matchMediaDesktop = ref(false),
      matchMediaMobile = ref(false);

    services.value = [
      {
        id: 1,
        image: oceanConditionsImg,
        title: "Oceanographic Variables",
        description: `This service issues two monthly bulletins: one for fisheries managers and fishermen, highlighting local oceanographic processes' impact on fish distribution. The second bulletin explores local oceanographic conditions and their effects on fishing operations and coastal communities.`,
      },
      {
        id: 2,
        image: fishingImg,
        title: "Potential Fishing Zones (PFZS)",
        description: `Sea surface temperature and ocean colour products are useful for
            monitoring conditions that affect fish distribution. Ocean colour
            products including Chl-a data provides measurements of phytoplankton
            abundance. SST measurements are useful for identifying oceanographic
            features including upwelling and fronts. These features are
            associated with nutrient enrichment and areas of the ocean where
            fish aggregate to feed which can be analyzed to generate potential
            fishing zones.`,
      },
      {
        id: 3,
        image: myImage,
        title: "Ocean Condition Forecast",
        description: `Access to oceanic data on waves, currents, winds, and sea surface
            heights is vital for safe navigation, especially in ocean
            transportation, the primary mode of goods and services transport.
            "ROUGH," or "DANGEROUS," are disseminated through SMS texts by
            fisheries institutions. At local fishing communities we use
            color-coded flags—green for 'CALM,' yellow for 'ROUGH,' and red for
            'DANGEROUS'—to share this data, making it easily accessible.`,
      },
      {
        id: 4,
        image: coastalVulnerabilityImg,
        title: "Coastal Ecosystem/Habitats",
        description: `Assessing, monitoring, and mapping the coastal zone is crucial to safeguarding it from degradation caused by natural processes and human activities. The Coastal Zone Mapping service aims to create accurate maps of coastal resources, enabling the management of natural and human-induced impacts on coastal habitats, such as storm surges affecting flora and fauna distribution and mangrove ecosystems. These maps will also provide data on land-use and land-cover changes, helping coastal zone managers and planners understand the drivers and effects of these changes. `,
      },
      {
        id: 5,
        image: fishingImg,
        title: "Coastal Vulnerability Assesment",
        description: `The goal of Coastal Vulnerability service is to set up an efficient way of monitoring the coastal environment to address the issues related to coastal erosion in these critical areas. The morphological study of the beaches, with their characteristics and changes will provide relevant information for an efficient monitoring of the coastal areas and implement of sound beach-lagoon management practices. Inputs data will include raster and shapefiles of geomorphological, relief and natural habitats indicators. Winds, wave exposure and net sea level change products from models covering the West African region will be an essential input that will help estimate the effect of ocean and winds to the different types of coastal habitats.`,
      },
      {
        id: 6,
        image: oilspillImg,
        title: "Oil Spill Monitoring",
        description: `The Coastal Zone Mapping service aims to create accurate maps of
            coastal resources, enabling the management of natural and
            human-induced impacts on coastal habitats, such as storm surges
            affecting flora and fauna distribution and mangrove ecosystems.
            These maps will also provide data on land-use and land-cover
            changes, helping coastal zone managers and planners understand the
            drivers and effects of these changes.`,
      },
    ];
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
      slide: ref(2),
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
</style>
