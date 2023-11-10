<template>
  <q-page class="page-body">
    <div class="row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column">
          <div>
            <q-header
              reveal
              class="text-white q-py-md navigation-background-color bg-white"
              height-hint="98"
            >
              <q-toolbar>
                <q-toolbar-title style="margin-left: 5%">
                  <div class="row">
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
                          style="position: relative; width: 100%; height: 40px"
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

                  <q-btn-dropdown
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
                        <q-item-section>{{
                          $t("ocean_condition")
                        }}</q-item-section>
                      </q-item>
                      <q-item clickable @click="tab = 'movies'">
                        <q-item-section>{{
                          $t("ocean_forecast")
                        }}</q-item-section>
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
                  </q-btn-dropdown>
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
        </div>
        <div class="column bg-white q-ma-md" style="max-width: 65vw; flex: 1">
          <div class="row" style="width: 100%; height: 100%"><mappanel /></div>
          <div class="row q-mr-md" style="width: 50%; height: 100%">
            <analysiltabs />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";

import mappanel from "../components/composables/Map.vue";
import analysiltabs from "src/components/Analysis/analysispannel.vue";

</script>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  /*height: 100vh; /* Set the height of the page to the full viewport height */
  background: #f0f2f8; /* url("~/src/assets/3387682.jpg") no-repeat center; */
  background-size: cover;
  overflow: hidden;
}
.content {
  display: flex;
}
</style>
