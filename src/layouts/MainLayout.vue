<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="text-white q-py-md navigation-background-color bg-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title style="margin-left: 5%">
          <div class="row">
            <div class="column">
              <img src="~/src/assets/GMES.png" style="position: relative; width: 100%; height: 35px" />
            </div>
            <div class="column q-pl-md">
              <img src="~/src/assets/AU logo.png" style="position: relative; width: 100%; height: 35px; left: -1%" />
            </div>

            <div class="column q-pl-md">
              <img src="~/src/assets/EU logo.png" style="position: relative; width: 100%; height: 35px; left: -1%" />
            </div>
            <div class="column q-pl-md q-ml-xl">
              <img src="~/src/assets/UG logo 23.png" style="position: relative; width: 100%; height: 35px; left: -1%" />
            </div>
            <div class="column q-pr-xl">
              <router-link to="/home">
                <img src="~/src/assets/MarCNoWA_blue.jpeg" style="position: relative; width: 100%; height: 30px" />
              </router-link>
            </div>
          </div>
        </q-toolbar-title>
        <q-tabs align="left" no-caps dense inline-label class="text-black my-font-2" style="margin-right: auto">
          <q-route-tab name="images" :label="$t(`home`)" to="/home" />
          <q-route-tab ripple="false" name="videos" :label="$t('dashboard')" to="/dashboard" />

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
          <q-btn v-if="user" class="my-font-2 q-mr-md" style="font-weight: 400" flat no-caps color="grey-9"
            icon="mdi-account" icon-right="mdi-menu-down" :label="'Hi, ' + user.user_metadata.firstName">
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
          <q-btn v-else class="my-font-2 q-mr-lg" style="font-weight: 700" flat no-caps color="grey-9" icon="mdi-account"
            :label="$t('login')" to="/login" />
        </q-tabs>

        <div class="my-font q-mr-sm" style="font-weight: 700">
          <q-select label-color="grey-9" v-model="locale" :options="localeOptions" dense borderless emit-value map-options
            style="
              font-weight: 700;
              font-size: 12px;
              font-color: rgb(41, 41, 41);
            ">
          </q-select>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, defineComponent, ref } from "vue";

// import userAuthUser from "src/composables/userAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const localeOptions = ref([
  { value: "en-US", label: "English" },
  { value: "fr", label: "French" },
])
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
