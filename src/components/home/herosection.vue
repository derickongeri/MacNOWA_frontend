<template>
  <div class="col" style="max-width: 100%">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="700px"
    >
      <q-carousel-slide :name="1" img-src="~/src/assets/DJI_05791.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Coastal Ecosystem monitoring</div>
          <div class="text-subtitle1"></div>
        </div>

        <!-- <div class="absolute hero-img">
          <img src="~/src/assets/screnshot.png"/>
        </div> -->
      </q-carousel-slide>

      <q-carousel-slide :name="2" img-src="~/src/assets/DJI_08781.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Potential Fishing Zones</div>
          <div class="text-subtitle1"></div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" img-src="~/src/assets/DJI_05791.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Coastal Vulnerability</div>
          <div class="text-subtitle1"></div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
