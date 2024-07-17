<template>
  <div
    v-if="matchMediaDesktop"
    class="row q-mx-xl q-my-sm items-start jumbotron"
    id="hero"
  >
    <carouselContent />
  </div>

  <div
    v-if="matchMediaMobile"
    class="row q-mx-md q-my-sm items-start jumbotron"
    id="hero"
  >
    <carouselContent />
  </div>

  <div
    class="bg-white q-mx-md q-my-sm"
    style="margin: auto; position: relative"
    id="products-section"
  >
    <div
      v-if="matchMediaDesktop"
      class="my-font-2 text-Primary text-center q-px-md q-mt-lg"
      style="
        font-weight: 700;
        font-size: 30px;
        color: #25408f;

        margin-left: auto;
      "
    >
      <div
        class="row justify-center"
        style="
          min-width: 0vw;
          position: absolute;
          right: 50%;
          top: -7%;
          z-index: 1000;
        "
      >
        <q-btn
          class="bg-white"
          unelevated
          round
          outline
          color="white"
          text-color="primary"
          icon="mdi-chevron-down"
          @click="scrollToProducts()"
        />
      </div>
      <!-- <div style="margin-top: 5vh">MarCNoWA Services</div> -->
    </div>
    <serviceContent />
  </div>

  <div
    v-if="matchMediaMobile"
    class="my-font-2 bg-grey-3 text-h6 text-Primary q-px-md q-pt-lg"
    style="font-weight: 700; color: #25408f"
  >
    {{ $t("about_project") }}
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
        {{ $t("about_text") }}
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
    class="about-container q-mx-xl q-my-sm bg-primary"
  >
    <div
      class="row items-center justify-center my-font-2 text-white q-mt-lg"
      style="
        font-weight: 700;
        font-size: 30px;
        color: #25408f;

        min-height: 10vh;
        margin: auto;
      "
    >
      <div class="q-mx-lg">{{ $t("about_project") }}</div>
    </div>

    <div
      style="width: 90vw; min-height: 60vh; margin: auto"
      class="row items-center justify-center bg-primary q-px-none q-py-lg q-ma-none page-tint"
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
              style="background-color: #f1b24a00; border-radius: 15px"
            >
              <q-card-section
                class="text-white"
                style="font-weight: 400; font-size: 18px"
              >
                <P>
                  {{ $t("about_text") }}
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
      style="min-height: 60vh"
    >
      <div
        class="my-font-2 text-center q-px-md q-py-md q-mb-lg"
        style="font-weight: 700; font-size: 30px; color: #25408f"
      >
        {{ $t("partners") }}
      </div>
      <div class="row q-gutter-x-lg justify-center">
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
      <div
        class="my-font-2 text-center q-px-md q-py-md q-mb-lg"
        style="
          font-weight: 700;
          font-size: 30px;
          color: #25408f;
          margin-top: 5%;
        "
      >
        <!-- {{ $t("other partners") }} -->
      </div>
      <div class="row q-gutter-x-lg">
        <div class="column">
          <img
            src="~/src/assets/Partner_logos/cert.gif"
            style="position: relative; width: 100%; height: 70px"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/CRODT.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>

        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/CURAT_LOGO.jpg"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/Edenwaylogo.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/Ghana Met 2.jpg"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/Logo_IRHOB_New logo.png"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/LOGO-UCD.jpeg"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/NatureTodayLogo.jpg"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
        <div class="column q-pl-md">
          <img
            src="~/src/assets/Partner_logos/NIOMR.jpg"
            style="position: relative; width: 100%; height: 70px; left: -1%"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="matchMediaDesktop"
    class="footer-pc row q-mx-xl justify-center q-pa-none"
  >
    <div
      class="column justify-center q-pa-none"
      style="min-width: 90vw; min-height: 100%"
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
                {{ $t("community") }}
              </div>
              <div class="q-px-md q-pb-md">
                {{ $t("community_text") }}
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
                {{ $t("invite_title") }}
              </div>
              <div class="q-px-md q-pb-md">
                {{ $t("invite_text") }}
              </div>
              <div class="q-px-md q-pb-md row q-gutter-sm">
                <q-btn
                  unelevated
                  color="white"
                  text-color="grey-7"
                  :label="$t('signup')"
                />
                <q-btn outline color="white" :label="$t('login')" />
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
