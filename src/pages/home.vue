<template>
  <div class="row items-start jumbotron" id="hero" style="min-width: 100vw">
    <carouselContent>
      <!-- <div
      class="row q-pt-lg justify-center"
      style="z-index: 1000; min-width: 100vw; position: relative;bottom: -15%;"
    >
      <q-btn
        round
        color="primary"
        @click="scrollToProducts()"
        icon="mdi-chevron-down"
      />
    </div> -->
    </carouselContent>
  </div>

  <div
    class="bg-white"
    style="min-width: 100vw; margin: auto; position: relative"
    id="products-section"
  >
    <div
      class="row justify-center"
      style="min-width: 100vw; position: absolute; top: -2%; z-index: 1000"
    >
      <q-btn
        unelevated
        round
        color="primary"
        icon="mdi-chevron-down"
        @click="scrollToProducts()"
      />
    </div>
    <serviceContent />
  </div>

  <div
    v-if="matchMediaDesktop"
    class="my-font-2 bg-primary text-white text-center q-px-md q-py-xl"
    style="font-weight: 700; font-size: 30px; color: #25408f"
  >
    About the Project
  </div>

  <div
    v-if="matchMediaMobile"
    class="my-font-2 bg-grey-3 text-h6 text-Primary q-px-md q-pt-lg"
    style="font-weight: 700; color: #25408f"
  >
    About MarCNoWA
  </div>

  <div class="column bg-grey-3" v-if="matchMediaMobile">
    <div
      class="my-font-2 text-left text-grey-8 q-pa-md"
      style="
        margin: auto;
        font-weight: medium;
        font-size: medium;
        line-height: 1.75;
      "
    >
      <P>
        The MarCNoWA consortium is lead by the Regional Marine Centre of the
        University of Ghana. The objective of the Action is to provide
        decision-makers with EO information and tools that would support
        effective marine and coastal resources management in North and West
        Africa. This is being achieved through delivering EO services that will
        enhance the formulation of marine, fisheries and environmental policies
        to support decision-making at the national and regional level.
      </P>
    </div>
  </div>

  <div class="bg-grey-3" v-if="matchMediaMobile" style="min-width: 100vw">
    <div class="q-pa-md" style="border-radius: 15px">
      <q-video
        src="https://www.youtube.com/embed/8TA9UvQjzmc?si=MHGa14cmwQb026Pb"
        :ratio="16 / 9"
      />
    </div>
  </div>

  <div
    v-if="matchMediaDesktop"
    style="min-width: 10vw; min-height: 70vh"
    class="row items-center justify-center bg-primary q-px-none q-py-lg q-ma-none page-tint"
    id="about-section"
  >
    <div
      class="col q-pa-none q-ma-none"
      style="min-height: 70%; max-width: 70%"
    >
      <div class="row q-mb-lg">
        <div class="col q-mx-xl">
          <q-card
            flat
            class="my-card text-grey-9 my-font-2 text-justify"
            style="background-color: #f1b24a00; border-radius: 15px"
          >
            <q-card-section
              class="text-white"
              style="font-weight: 400; font-size: 18px"
            >
              <P>
                The MarCNoWA consortium is lead by the Regional Marine Centre of
                the University of Ghana. The objective of the Action is to
                provide decision-makers with EO information and tools that would
                support effective marine and coastal resources management in
                North and West Africa. This is being achieved through delivering
                EO services that will enhance the formulation of marine,
                fisheries and environmental policies to support decision-making
                at the national and regional level.
              </P>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-mx-xl" style="border-radius: 15px">
          <q-video
            src="https://www.youtube.com/embed/8TA9UvQjzmc?si=MHGa14cmwQb026Pb"
            :ratio="16 / 9"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="matchMediaMobile"
    style="min-width: 100%; background-color: #ffffff"
    class="row items-center justify-center q-pa-none q-ma-none"
  >
    <div
      class="column justify-center q-pa-none q-ma-none"
      style="min-height: 70%"
    >
      <div
        class="my-font-2 text-center text-h6 q-px-md q-py-md"
        style="font-weight: 700; color: #25408f"
      >
        Implementing Partners
      </div>
      <div class="row q-gutter-x-md q-my-lg">
        <div class="column">
          <img
            src="~/src/assets/GMES.png"
            style="position: relative; width: 100%; height: 35px"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/AU logo.png"
            style="position: relative; width: 100%; height: 35px; left: -1%"
          />
        </div>

        <div class="column q-pl-md">
          <img
            src="~/src/assets/EU logo.png"
            style="position: relative; width: 100%; height: 35px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/UG logo 23.png"
            style="position: relative; width: 100%; height: 50px; left: -1%"
          />
        </div>
      </div>
    </div>
  </div>

  <div
  v-if="matchMediaDesktop"
    style="min-width: 100%; min-height: 45vh; background-color: #ffffff"
    class="row items-center justify-center q-pa-none q-ma-none"
  >
    <div
      class="column justify-center q-pa-none q-ma-none"
      style="min-height: 70%; max-width: 90%"
    >
      <div
        class="my-font-2 text-center q-px-md q-py-md"
        style="font-weight: 700; font-size: 30px; color: #25408f"
      >
        Implementing Partners
      </div>
      <div class="row q-gutter-x-lg">
        <div class="column">
          <img
            src="~/src/assets/GMES.png"
            style="position: relative; width: 100%; height: 70px"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/AU logo.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>

        <div class="column q-pl-md">
          <img
            src="~/src/assets/EU logo.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/UG logo 23.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="matchMediaDesktop"
    style="min-width: 100%; min-height: 30vh; background-color: #9fa6aa"
    class="row justify-center q-pa-none q-ma-none"
  >
    <div
      class="column justify-center q-pa-none"
      style="max-width: 90vw; min-height: 100%"
    >
      <div class="row q-my-lg">
        <div class="col q-ma-md" style="min-width: 25vw">
          <div class="column items-center">
            <div class="column items-start q-gutter-none" style="">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-white" style="font-size: 21px"
                      >Regional Marine Centre</q-item-label
                    >
                    <q-item-label class="text-white" style="font-size: 21px"
                      >University of Ghana</q-item-label
                    >
                    <div
                      class="col q-my-none q-py-none text-blue-2"
                      style="font-size: 12px"
                      caption
                      lines="2"
                    >
                      C/o P.O.Box LG 99, Legon<br />Accra, GHANA<br />(+233)
                      244671350<br />rmc@ug.edu.gh
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
        <q-separator vertical color="grey-7" />
        <div class="col q-ma-md" style="min-width: 25vw">
          <div class="column items-center">
            <div
              class="q-my-none text-justify text-white"
              style="max-width: 25vw"
            >
              <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                Community
              </div>
              <div class="q-px-md q-pb-md">
                Stay informed about coastal wonders. Subscribe now for
              </div>
              <div class="row justify-left q-gutter-lg items-left">
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-facebook"
                />
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-linkedin"
                />
                <q-btn round flat color="grey-3" size="lg" icon="mdi-twitter" />
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-content-copy"
                />
              </div>
            </div>
          </div>
        </div>
        <q-separator vertical color="grey-7" />
        <div class="col items-center q-ma-md" style="min-width: 25vw">
          <div class="column items-center">
            <div
              class="q-my-none text-justify text-white"
              style="max-width: 15vw"
            >
              <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                Make your contribution
              </div>
              <div class="q-px-md q-pb-md">
                Stay informed about coastal wonders. Subscribe now for exclusive
                updates on geomorphology, shoreline change, and environmental
                conservation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="matchMediaMobile"
    style="min-width: 100%; min-height: 30vh; background-color: #9fa6aa"
    class="column justify-center q-pa-none q-ma-none"
  >
    <div class="row">
      <div class="column q-mx-md items-start q-gutter-none" style="">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label class="text-white" style="font-size: 21px"
                >Regional Marine Centre</q-item-label
              >
              <q-item-label class="text-white" style="font-size: 21px"
                >University of Ghana</q-item-label
              >
              <div
                class="col q-my-none q-py-none text-blue-2"
                style="font-size: 12px"
                caption
                lines="2"
              >
                C/o P.O.Box LG 99, Legon<br />Accra, GHANA<br />(+233)
                244671350<br />rmc@ug.edu.gh
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div class="row">
      <div class="col q-ma-md">
        <div
          class="row text-white q-ml-md"
          style="font-weight: 700; font-size: 21px"
        >
          Community
        </div>
        <div class="row justify-left q-gutter-lg items-left">
          <q-btn round flat color="grey-3" size="lg" icon="mdi-facebook" />
          <q-btn round flat color="grey-3" size="lg" icon="mdi-linkedin" />
          <q-btn round flat color="grey-3" size="lg" icon="mdi-twitter" />
          <q-btn round flat color="grey-3" size="lg" icon="mdi-content-copy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import carouselContent from "src/components/home/herosection.vue";
import serviceContent from "src/components/home/servicesection.vue";

const $q = useQuasar();
const router = { useRouter };
const { locale } = useI18n({ useScope: "global" });

const slide = ref(1);

const tab = ref("mails");

const localeOptions = ref([
  { value: "en-US", label: "English" },
  { value: "fr", label: "French" },
]);

const navigateTodashboard = () => {
  // Navigate to the individual post by pushing the route to the router
  router.push(`/dashboard`);
};

const scrollToProducts = () => {
  const element = document.getElementById("products-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const rightDrawerOpen = ref(false),
  matchMediaDesktop = ref(false),
  matchMediaMobile = ref(false);

onBeforeMount(() => {
  matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
  matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
/* *{
  box-sizing: border-box;
  outline: 3px solid limegreen !important;
} */
/* Hide the scrollbar but retain functionality */
::-webkit-scrollbar {
  width: 0em; /* Adjust as needed */
}

::-webkit-scrollbar-track {
  background: transparent; /* Set to the background color of your page */
}

::-webkit-scrollbar-thumb {
  background: transparent; /* Set to the background color of your page */
  border: none;
}

/* Optional: Hover styles for the thumb */
::-webkit-scrollbar-thumb:hover {
  background: transparent; /* Set to a different color for hover effect if desired */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

.page-tint {
  background-color: rgba(52, 64, 87, 0.301);
  background-blend-mode: multiply;
}

#hero {
  background-image: url("~/src/assets/DJI_00371.png");
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

#about-section {
  background-color: rgba(52, 64, 87, 0.753);
  background-blend-mode: multiply;
  background-image: url("~/src/assets/bg_image.jpg");
  background-attachment: fixed;
  background-size: 100%;
  /* Center and scale the image nicely */
  background-position: left;
  background-repeat: no-repeat;
  background-size: fit;
}

#products-section {
  /* background-color: rgba(52, 64, 87, 0.753); */
  background-image: url("~/src/assets/bg_vector.svg");
  background-color: #032135;
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-size: 100%;
  /* Center and scale the image nicely */
  background-position: left;
  background-repeat: no-repeat;
  background-size: fit;
}

#about {
  background-image: url("~/src/assets/login_bg.jpg");
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

#plugin {
  background-image: url("~/src/assets/hero2.jpg");
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

#blog {
  background-image: url("~/src/assets/comoros.png");
  background-size: 100%;
  /* Center and scale the image nicely */
  /*background-attachment: fixed;*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

.custom-caption {
  /* text-align: center; */
  max-width: 35vw;
  bottom: 5%;
  left: 5%;
  padding: 12px;
  border-radius: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-img {
  /* text-align: center; */
  max-width: 15vw;
  bottom: 5%;
  right: 0%;
  padding: 12px;
  border-radius: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

/* #pulse {
  animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5;
} */

@keyframes beat {
  from {
    background-size: cover;
  }
  to {
    background-size: 150%;
  }
}

.jumbotron {
  height: 100%;
  background-size: cover;
  /* background-color: rgb(51, 51, 51, 0.1);
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1); */
}

.content-card {
  height: 80vh;
  background-size: cover;
  background: #ffffff;
  box-shadow: 0 0 3rem 0 rgb(0 0 0 / 10%);
}

@media screen and (max-width: 768px) {
  .head-text {
    font-size: 28px;
  }
}

@media screen and (min-width: 768px) {
  .head-text {
    font-size: 48px;
  }
}
</style>
