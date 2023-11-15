<template>
  <q-page padding class="q-pa-none scrollbar-hidden" style="overflow: hidden">
    <div>
      <q-header
        reveal
        class="text-white q-py-md navigation-background-color bg-white"
        height-hint="98"
      >
        <q-toolbar>
          <q-toolbar-title style="margin-left: 5%">
            <div class="row">
              <!-- <div class="column q-pr-xl">
                <router-link to="/home">
                  <img
                    src="~/src/assets/MarCNoWA_blue.jpeg"
                    style="position: relative; width: 100%; height: 40px"
                  />
                </router-link>
              </div> -->
              <div class="column">
                <img
                  src="~/src/assets/GMES.png"
                  style="position: relative; width: 100%; height: 55px"
                />
              </div>
              <div class="column q-pl-md">
                <img
                  src="~/src/assets/AU logo.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 55px;
                    left: -1%;
                  "
                />
              </div>

              <div class="column q-pl-md">
                <img
                  src="~/src/assets/EU logo.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 55px;
                    left: -1%;
                  "
                />
              </div>
              <div class="column q-pl-md q-ml-xl">
                <img
                  src="~/src/assets/UG logo 23.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 55px;
                    left: -1%;
                  "
                />
              </div>
              <div class="column q-pr-xl">
                <router-link to="/home">
                  <img
                    src="~/src/assets/MarCNoWA_blue.jpeg"
                    style="position: relative; width: 100%; height: 50px"
                  />
                </router-link>
              </div>
            </div>
          </q-toolbar-title>
          <q-tabs
            align="left"
            no-caps
            dense
            inline-label
            class="text-black my-font-2"
            style="margin-right: auto"
          >
            <q-route-tab name="images" :label="$t(`home`)" to="/home" />
            <q-route-tab
              ripple="false"
              name="videos"
              :label="$t('dashboard')"
              to="/dashboard"
            />

            <!-- <q-btn-dropdown
              class="dash-nav3"
              color="primary"
              rounded
              no-caps
              auto-close
              stretch
              flat
              label="Services"
            >
              <q-list>
                <q-item clickable @click="tab = 'movies'">
                  <q-item-section>{{ $t("ocean_condition") }}</q-item-section>
                </q-item>
                <q-item clickable @click="tab = 'movies'">
                  <q-item-section>{{ $t("ocean_forecast") }}</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>{{
                    $t("potential_fishing_zones")
                  }}</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>{{
                    $t("oil_spill_monitoring")
                  }}</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>{{
                    $t("coastal_ecosystem_maping")
                  }}</q-item-section>
                </q-item>

                <q-item clickable @click="tab = 'photos'">
                  <q-item-section>{{
                    $t("coastal_vulnerability")
                  }}</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown> -->
            <q-btn
              v-if="user"
              class="my-font-2 q-mr-md"
              style="font-weight: 400"
              flat
              no-caps
              color="grey-9"
              icon="mdi-account"
              icon-right="mdi-menu-down"
              :label="'Hi, ' + user.user_metadata.firstName"
            >
              <q-menu fit>
                <q-list>
                  <q-item clickable v-close-popup to="/me">
                    <q-item-section>
                      <q-item-label>{{ $t("profile") }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="handleLogout">
                    <q-item-section>
                      <q-item-label>{{ $t("logout") }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              v-else
              class="my-font-2 q-mr-lg"
              style="font-weight: 700"
              flat
              no-caps
              color="grey-9"
              icon="mdi-account"
              :label="$t('login')"
              to="/login"
            />
          </q-tabs>

          <div class="my-font q-mr-sm" style="font-weight: 700">
            <q-select
              label-color="grey-9"
              v-model="locale"
              :options="localeOptions"
              dense
              borderless
              emit-value
              map-options
              style="
                font-weight: 700;
                font-size: 12px;
                font-color: rgb(41, 41, 41);
              "
            >
            </q-select>
          </div>
        </q-toolbar>
      </q-header>
    </div>

    <div class="row items-start jumbotron page-tint" id="hero" style="">
      <carouselContent/>
    </div>

    <div
      class="my-font-2 text-center q-px-md q-py-xl"
      style="font-weight: 700; font-size: 30px; color: #25408f"
    >
      About the Project
    </div>

    <div
      style="min-width: 10vw; min-height: 70vh"
      class="row items-center justify-center q-px-none q-py-lg q-ma-none page-tint bg-white"
      id="about-section"
    >
      <div
        class="col q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div class="row q-mb-lg">
          <div class="col q-mx-xl">
            <q-card
              flat
              class="my-card text-grey-9 my-font-2 text-justify"
              style="background-color: #0f1b24a00; border-radius: 15px"
            >
              <!-- <div
                class="my-font-2 text-center q-px-md q-py-md"
                style="font-weight: 700; font-size: 30px; color: #25408f"
              >
                About the Project
              </div> -->
              <q-card-section
                class=""
                style="font-weight: 400; font-size: 18px"
              >
                <P>
                  The MarCNoWA consortium is lead by the Regional Marine Centre
                  of the University of Ghana. The objective of the Action is to
                  provide decision-makers with EO information and tools that
                  would support effective marine and coastal resources
                  management in North and West Africa. This is being achieved
                  through delivering EO services that will enhance the
                  formulation of marine, fisheries and environmental policies to
                  support decision-making at the national and regional level.
                </P>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-xl" style="border-radius: 15px">
            <q-video
              src="https://www.youtube.com/embed/g-gz1ZiPXkI?si=5grVleFNA5xb6gr9"
              :ratio="16 / 9"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="column justify-around q-py-xl justify-around"
      style="min-width: 100vw"
      id="products-section"
    >
      <div
        class="my-font-2 text-center q-px-md q-py-xl"
        style="font-weight: 700; font-size: 30px; color: #ffffff"
      >
        MarCNoWA Services
      </div>
      <serviceContent/>
    </div>

    <div
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
                        >C/o P.O.Box LG 99, Legon<br/>Accra, GHANA<br />(+233) 244671350<br />rmc@ug.edu.gh</div
                      >
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
                  <q-btn
                    round
                    flat
                    color="grey-3"
                    size="lg"
                    icon="mdi-twitter"
                  />
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
                  Stay informed about coastal wonders. Subscribe now for
                  exclusive updates on geomorphology, shoreline change, and
                  environmental conservation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import carouselContent from "src/components/home/herosection.vue";
import serviceContent from "src/components/home/servicesection.vue";

const $q = useQuasar();
const router = { useRouter };
const { locale } = useI18n({ useScope: "global" });

const slide = ref(1)

const tab = ref("mails")

const localeOptions = ref ([
        { value: "en-US", label: "English" },
        { value: "fr", label: "French" },
      ])

const navigateTodashboard = () => {
        // Navigate to the individual post by pushing the route to the router
        router.push(`/dashboard`);
      }

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
  background-color: rgba(52, 64, 87, 0.753);
  background-blend-mode: multiply;
}

#hero {
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
