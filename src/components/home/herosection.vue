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
      <q-carousel-slide :name="1" img-src="/src/assets/pictures/DJI_0035.JPG">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Coastal Ecosystem monitoring</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" img-src="/src/assets/pictures/DJI_0035.JPG">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent,ref } from "vue";

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
