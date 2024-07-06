<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      class="mobile-view"
      v-model="rightDrawerOpen"
      side="right"
      style="z-index: 5000"
    >
      <div
        class="row"
        style="position: absolute; z-index: 5001; left: -5%; top: 2%"
      >
        <q-btn
          color="grey-1"
          text-color="indigo-10"
          round
          unelevated
          icon="mdi-chevron-right"
          size="md"
          @click="toggleRightDrawer"
        ></q-btn>
      </div>
      <div
        class="column justify-between bg-grey-1 text-lime-9"
        style="position: absolute; height: 100%; width: 100%; z-index: 5000"
      >
        <div class="row" style="width: 100%">
          <q-list
            padding
            class="rounded-borders text-indigo-10 my-font"
            style="width: 100%; font-size: 16px; font-weight: bold"
          >
            <q-item v-if="user" class="q-my-lg q-pt-lg">
              <q-item-section>
                <q-item-label
                  class="text-h6"
                  style="font-size: 21px; font-weight: bold"
                  >{{ user.user_metadata.firstName }}
                  {{ user.user_metadata.lastName }}</q-item-label
                >
                <q-item-label caption style="font-size: 12px">{{
                  user.email
                }}</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-avatar color="indigo-10" text-color="grey-1"
                  >{{ user.user_metadata.firstName.charAt(0)
                  }}{{ user.user_metadata.lastName.charAt(0) }}</q-avatar
                >
              </q-item-section>
            </q-item>

            <q-item v-else class="q-my-lg q-pt-lg" clickable to="/login">
              <q-item-section avatar>
                <q-icon size="" name="mdi-login-variant" />
              </q-item-section>
              <q-item-section>
                <q-item-label
                  class="text-h6"
                  style="font-size: 21px; font-weight: bold"
                  >{{ $t("login") }}</q-item-label
                >
                <q-item-label caption style="font-size: 12px"
                  >Login to access features</q-item-label
                >
              </q-item-section>

              <!-- <q-item-section avatar>
                <q-avatar color="indigo-10" text-color="grey-1"
                  ></q-avatar
                >
              </q-item-section> -->
            </q-item>

            <q-separator spaced />

            <q-item clickable v-if="isHomeRoute" v-ripple to="/dashboard">
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-view-dashboard" />
              </q-item-section>

              <q-item-section>{{ $t("dashboard") }}</q-item-section>
            </q-item>

            <q-item clickable v-else v-ripple to="/home">
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-home" />
              </q-item-section>

              <q-item-section>{{ $t("home") }}</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              @click="toggleSettings = !toggleSettings"
            >
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-cog" />
              </q-item-section>

              <q-item-section>{{ $t("settings") }}</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-list
              v-if="toggleSettings"
              class="q-mx-md"
              style="min-width: 100px"
            >
              <q-item clickable v-ripple to="me" v-if="user">
                <q-item-section avatar>
                  <q-icon size="xs" name="mdi-account-cog" />
                </q-item-section>

                <q-item-section>{{ $t("my_profile") }}</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon size="xs" name="mdi-translate" />
                </q-item-section>
                <q-item-section>
                  <q-select
                    label-color="grey-9"
                    v-model="locale"
                    :options="localeOptions"
                    :label="$t('select_language')"
                    dense
                    borderless
                    emit-value
                    map-options
                    options-dense
                    style="min-width: 150px"
                  >
                  </q-select>
                </q-item-section>

                <!-- <q-item-section>Language</q-item-section> -->
              </q-item>
            </q-list>
          </q-list>
        </div>

        <div class="row" v-if="user">
          <q-list
            padding
            class="rounded-borders text-indigo-10 my-font"
            style="width: 100%; font-size: 16px; font-weight: bold"
          >
            <q-separator spaced />
            <q-item
              clickable
              v-ripple
              :active="link === 'help'"
              @click="handleLogout"
            >
              <q-item-section avatar>
                <q-icon size="xs" name="logout" />
              </q-item-section>

              <q-item-section>{{ $t("logout") }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-header
      v-if="matchMediaDesktop"
      reveal
      class="text-white q-py-sm navigation-background-color bg-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title class="q-pa-none" style="margin-left: 2%">
          <div class="row items-center justify-between">
            <div>
              <router-link to="/home">
                <img
                  src="~/src/assets/marcnowa.jpeg"
                  style="width: 100%; height: 50px"
                />
              </router-link>
            </div>
            <div class="col">
              <div class="row items-center" style="margin-left: 10%">
                <div class="column">
                  <img
                    src="~/src/assets/GMES.png"
                    style="position: relative; width: 100%; height: 35px"
                  />
                </div>
                <div class="column q-pl-md">
                  <img
                    src="~/src/assets/AU logo.png"
                    style="
                      position: relative;
                      width: 100%;
                      height: 35px;
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
                      height: 35px;
                      left: -1%;
                    "
                  />
                </div>
                <div class="column q-pl-md">
                  <img
                    src="~/src/assets/UG logo 23.png"
                    style="
                      position: relative;
                      width: 100%;
                      height: 50px;
                      left: -1%;
                    "
                  />
                </div>
                <!-- <div class="column q-pr-xl">
                <router-link to="/home">
                  <img
                    src="~/src/assets/MarCNoWA_blue.jpeg"
                    style="position: relative; width: 100%; height: 30px"
                  />
                </router-link>
              </div> -->
              </div>
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
            to="login"
          />
        </q-tabs>

        <div class="my-font q-mr-md" style="font-weight: 700">
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
    <q-header
      v-if="matchMediaMobile"
      class="text-white q-py-none navigation-background-color"
      height-hint="98"
    >
      <div class="row justify-between q-mx-sm">
        <router-link to="/home">
          <img
            class="q-ml-none"
            src="~/src/assets/MarCNoWA_blue.jpeg"
            style="position: relative; width: 100%; height: 50px"
          />
        </router-link>
        <q-btn
          align="around"
          class="q-pa-none text-grey-9"
          flat
          label="MORE"
          icon-right="mdi-menu"
          @click="toggleRightDrawer"
        />
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, defineComponent, ref, onBeforeMount } from "vue";

// import userAuthUser from "src/composables/userAuthUser";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
const route = useRoute();
const router = useRouter();

const localeOptions = ref([
  { value: "en-US", label: "English" },
  { value: "fr", label: "Français" },
]);

const rightDrawerOpen = ref(false),
  toggleSettings = ref(false),
  matchMediaDesktop = ref(false),
  matchMediaMobile = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
  console.log(router.currentRoute.value.path);
};

onBeforeMount(() => {
  matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
  matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
});

const isHomeRoute = computed(
  () => route.path === "/home" || route.path === "/"
);
</script>

<style lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* Firefox */
}

.my-menu-link {
  color: white;
  background: #f2c037;
}

.navigation-background-color {
  // width: 100%;
  // height: 100%;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgb(255, 255, 255);
  // position: absolute;
  // top: 0%;
  // bottom: 0%;
  // left: 0%;
  // right: 0%;
}

@media screen and (max-width: 768px) {
  .web-view {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobile-view {
    display: none;
  }
}
</style>
