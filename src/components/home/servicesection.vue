<template>
  <div class="q-px-lg row q-gutter-lg q-my-md" style="margin-left: 5%">
    <q-card
      class="my-card"
      style="width: 30%"
      v-for="service in services"
      :key="service.id"
    >
      <q-img :src="service.image">
        <div class="absolute-bottom text-h6">{{ service.title }}</div>
      </q-img>

      <q-card-section class="">
        {{ service.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import myImage from 'src/assets/DJI_00302.png';
import fishingImg from 'src/assets/DJI_08781.png';
import oceanConditionsImg from 'src/assets/DJI_00371.png';
import coastalVulnerabilityImg from 'src/assets/DJI_05791.png';
import oilspillImg from 'src/assets/oil-spill2023-05-0323-12-122023-05-0513-53-20_2023-05-08_15-40-07.jpg';


export default defineComponent({
  setup() {
    const services = ref([]);

    services.value = [
      {
        id: 1,
        image: oceanConditionsImg,
        title: "Oceanographic Variables",
        description: `This service generates two monthly bulletins: one for fisheries managers
        and fishermen focusing on local oceanographic processes and their impact
        on fish distribution in the Guinea Current LME, and a second bulletin
        describing the evolution and dynamics of local oceanographic conditions
        and their potential effects on fishing operations and coastal
        communities.`,
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
        image: "src/assets/pictures/DJI_0037.JPG",
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
        image: myImage,
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
        id: 5,
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
    return {
      services,
    };
  },
});
</script>
