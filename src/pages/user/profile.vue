<template>
  <div id="onboarding" style="min-width: 100vw; min-height: 100vh">
    <div
      v-if="user"
      class="q-pa-md"
      style="max-width: 60%; position: relative; margin: auto"
    >
      <!-- <p>Hello {{ user.user_metadata.firstName }}</p>
      <p>Hello {{ user.email }}</p> -->
      <q-card
        class="my-card q-my-md"
        flat
        style="min-width: 100%; border-radius: 20px"
      >
        <div class="bg-grey-4" style="height: 20vh"></div>

        <q-card-section class="q-py-md">
          <q-avatar
            size="150px"
            font-size="120px"
            color="primary"
            text-color="white"
            icon="mdi-account"
            class="absolute"
            style="
              top: 0;
              right: 28px;
              transform: translateY(-50%);
              border: 2px solid white;
            "
          />

          <!-- <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" /> -->
        </q-card-section>

        <q-card-section class="q-mt-md q-mx-lg">
          <div class="text-subtitle1" style="font-size: 1.75em">
            {{ form.firstName }} {{ form.lastName }}
          </div>
          <div class="text-caption text-grey-9" style="font-size: 1em">
            {{ form.email }}
          </div>
          <div class="text-grey-9">
            <!-- {{ user.user_metadata.role }} | {{ user.user_metadata.organization }} -->
          </div>
        </q-card-section>

        <q-card-section>
          <div
            class="q-pa-md bg-white"
            style="position: relative; margin: auto"
          >
            <div class="column items-">
              <div style="min-width: 25vw" class="q-pt-lg q-mx-md">
                <!-- <div
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
                      readonly
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
                      readonly
                    />
                  </div>
                </div>

                <div
                  style="font-weight: 700; font-size: 0.85em"
                  class="text-left text-grey-9"
                >
                  {{ $t("EMAIL") }}
                </div>
                <div
                  class="row q-gutter-md q-pa-xs q-mb-md"
                  style="min-width: 25vw"
                >
                  <div class="col-8">
                    <q-input
                      class="q-px-none full-width"
                      v-model="form.email"
                      color="grey-1"
                      bg-color="grey-1"
                      type="email"
                      placeholder="example@mail.com*"
                      readonly
                    />
                  </div>
                </div> -->

                <div
                  style="font-weight: 700; font-size: 0.85em"
                  class="text-left text-grey-9"
                >
                  {{ $t("SECTOR") }}
                </div>
                <div class="row q-pa-xs q-mb-md" style="min-width: 25vw">
                  <div class="col">
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
                          (val) =>
                            (val && val.length > 0) || 'Field is required *',
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
                  <div class="col">
                    <div>
                      <!-- <q-label class="q-ma-md">Your Email *</q-label> -->
                      <q-input
                        dense
                        v-model="form.organization"
                        label="Company / Organization / Agency Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Field is required *',
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
                  <div class="col">
                    <div>
                      <!-- <q-label class="q-ma-md">Your Email *</q-label> -->
                      <q-select
                        dense
                        v-model="form.Country"
                        use-input
                        input-debounce="0"
                        :options="countries"
                        @filter="filterFn"
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
                  :label="$t('Update')"
                  @click="updateProfile"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div v-else>Not logged in</div>
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

const filterFn = (val, update) => {
  if (val === "") {
    update(() => {
      countries.value = getCountryNames(rolesData);
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    countries.value = getCountryNames(rolesData).filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
const getUserProfileByEmail = async (email) => {
  const { data, error } = await supabase
    .from("user_analytics")
    .select("*")
    .eq("email", email)
    .single(); // Use .single() to get a single row

  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }

  return data;
};

const getUserMeta = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error fetching user data:", error.message); // Log the error if any
    return null; // Return null if an error occurred
  }
  console.log(data.session.user); // Log the user data
  form.value.firstName = data.session.user.user_metadata.firstName;
  form.value.lastName = data.session.user.user_metadata.lastName;
  form.value.email = data.session.user.email;

  getUserProfileByEmail(form.value.email).then((profile) => {
    if (profile) {
      form.value.Country = profile.country;
      form.value.organization = profile.organization;
      form.value.role = profile.role;
      form.value.sector = profile.sector;
    } else {
      console.log("No profile found for this email.");
    }
  });
  return data.session.user; // Return the user data
};

const user = computed(() => {
  const user = getUserMeta();
  return user;
});

onMounted(() => {
  sectors.value = getSectorsFromJsonData(rolesData);
  countries.value = getCountryNames(rolesData);
  console.log(user.value);
  getUserMeta();
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
        .update({
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          country: form.value.Country,
          organization: form.value.organization,
          role: form.value.role,
          sector: form.value.sector,
        })
        .eq("email", form.value.email);

      notifySuccess("User Profile Updated");
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
