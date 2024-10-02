<template>
  <div id="onboarding" style="min-width: 100vw; min-height: 100vh">
    <div class="q-pa-md"></div>
    <div
      class="q-pa-md bg-white onboarding-card"
      style="position: relative; margin: auto"
    >
      <div class="column items-center">
        <div
          class="row q-ma-md text-h4 text-left text-primary"
          style="font-weight: 400; width: 80%"
        >
          Profile Infromation
        </div>

        <div class="row text-left q-ma-md" style="font-weight: 400; width: 80%">
          We use this information to make MarCNoWA geoportal more useful for
          you. Your privacy is important to us and we'll never share your
          personal information without your consent.
        </div>

        <div style="min-width: 25vw" class="q-pt-lg q-mx-md">
          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("FIRST NAME") }}
          </div>
          <div class="row q-gutter-md q-pa-xs q-mb-md">
            <div class="col-8">
              <q-input
                class="q-px-none full-width"
                v-model="form.firstName"
                color="grey-1"
                bg-color="grey-1"
                type="email"
                placeholder="Firstname"
              />
            </div>
          </div>

          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("LAST NAME/ SURNAME") }}
          </div>
          <div class="row q-gutter-md q-pa-xs q-mb-md">
            <div class="col-8">
              <q-input
                class="q-px-none full-width"
                v-model="form.lastName"
                color="grey-1"
                bg-color="grey-1"
                type="email"
                placeholder="Lastname"
              />
            </div>
          </div>

          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("EMAIL") }}
          </div>
          <div class="row q-gutter-md q-pa-xs q-mb-md" style="min-width: 25vw">
            <div class="col-8">
              <q-input
                class="q-px-none full-width"
                v-model="form.email"
                color="grey-1"
                bg-color="grey-1"
                type="email"
                placeholder="example@mail.com*"
              />
            </div>
          </div>

          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("SECTOR") }}
          </div>
          <div class="row q-pa-xs q-mb-md" style="min-width: 25vw">
            <div class="col-8">
              <div>
                <!-- <q-label class="q-ma-md">Your Email *</q-label> -->
                <q-select
                  dense
                  v-model="form.sector"
                  :options="sectors"
                  emit-value
                  map-options
                  @update:model-value="onSectorChange"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Field is required *',
                  ]"
                />
              </div>
              <div v-if="selectedSector" class="q-px-lg">
                <div>Role*</div>
                <div v-for="role in selectedSector.roles" :key="role">
                  <q-radio
                    v-model="form.role"
                    :label="role"
                    :val="role"
                  ></q-radio>
                </div>
                <q-radio v-model="form.role" val="Other" label="Other" />
                <q-input
                  v-if="form.role === 'Other'"
                  dense
                  v-model="form.otherRoles"
                  label="Describe your role/work"
                />
              </div>
            </div>
          </div>

          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("COMPANY / ORGANIZATION") }}
          </div>
          <div class="row q-pa-xs q-mb-md" style="min-width: 25vw">
            <div class="col-8">
              <div>
                <!-- <q-label class="q-ma-md">Your Email *</q-label> -->
                <q-input
                  dense
                  v-model="form.organization"
                  label="Company / Organization / Agency Name"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Field is required *',
                  ]"
                />
              </div>
            </div>
          </div>

          <div
            style="font-weight: 700; font-size: 0.85em"
            class="text-left text-grey-9"
          >
            {{ $t("COUNTRY") }}
          </div>
          <div class="row q-pa-xs q-mb-md" style="min-width: 25vw">
            <div class="col-8">
              <div>
                <!-- <q-label class="q-ma-md">Your Email *</q-label> -->
                <q-select
                  dense
                  v-model="form.Country"
                  :options="countries"
                  emit-value
                  map-options
                  @update:model-value="onSectorChange"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Field is required *',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-center q-px-xl q-my-md">
        <div class="col"></div>
        <div class="col-4">
          <q-btn
            class="full-width text-h6"
            rounded
            dense
            no-caps
            unelevated
            color="primary"
            :label="$t('Save')"
            @click="updateProfile"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  ref,
  onBeforeMount,
  computed,
  onMounted,
  watch,
} from "vue";
import useSupabase from "src/boot/supabase";
import imagePath from "src/assets/DJI_00371.png";
import userAuthUser from "src/composables/userAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";
import rolesData from "src/composables/institutions.json";

const router = useRouter();
const { supabase } = useSupabase();
const { register } = userAuthUser();
const { notifyError, notifySuccess } = useNotify();

const confirmedpassword = ref("");

const form = ref({
  email: "",
  firstName: "",
  lastName: "",
  Country: "",
  organization: "",
  role: "",
  sector: "",
});

const sectors = ref([]),
  countries = ref([]),
  selectedSector = ref(null),
  selectedRole = ref(null);

function getSectorsFromJsonData(rolesData) {
  return rolesData.sectors.map((sector) => sector.sector);
}

const getCountryNames = (data) => {
  return data.countries.map((country) => country.name);
};

onMounted(() => {
  sectors.value = getSectorsFromJsonData(rolesData);
  countries.value = getCountryNames(rolesData);
});

const isValid = computed(
  () => form.value.password && form.value.password.length > 0
);

//method to handle login and redirect to dashboard
const updateProfile = async () => {
  if (form.value.email && form.value.Country) {
    try {
      const { data, error } = await supabase
        .from("user_analytics") // replace with your table name
        .insert([
          {
            email: form.value.email,
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            country: form.value.Country,
            organization: form.value.organization,
            role: form.value.role,
            sector: form.value.sector,
          },
        ]);

      notifySuccess("User Profile Created");
      router.push({
        name: "home",
        // path: "/dashboard"
      });
    } catch (error) {
      notifyError(error.message);
    }
  } else {
    notifyError(`Please fill in the required fields`);
  }
};

const rememberMe = ref(false);
const isPwd = ref(true);

watch(form.value.sector, () => {
  selectedSector.value = rolesData.sectors.find(
    (sector) => sector.sector === form.value.sector
  );
  console.log(selectedSector);
});

const onSectorChange = () => {
  selectedSector.value = rolesData.sectors.find(
    (sector) => sector.sector === form.value.sector
  );
  console.log(selectedSector);
  selectedRole.value = null;
};
</script>
