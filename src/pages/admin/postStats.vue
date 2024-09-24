<template>
  <div
    class="column items-center justify-center"
    style="min-width: 100vw; min-height: 60vh"
  >
    <div class="q-pa-md" style="width: 50%">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="row q-mb-lg q-pb-md items-center justify-between">
          <div class="h6 col-3">Select Ocean Variable</div>
          <div class="col">
            <q-select
              name="ocean_variable"
              v-model="preferred"
              :options="options"
              color="primary"
              filled
              clearable
              label="Ocean Variable"
            />
          </div>
        </div>

        <div class="row items-center justify-between">
          <div class="col-3 h6">Start Date</div>
          <div class="col">
            <q-input
              name="start_date"
              filled
              v-model="startDate"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="startDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>

        <div class="row items-center justify-between">
          <div class="col-3 h6">End Date</div>
          <div class="col">
            <q-input
              name="end_date"
              filled
              v-model="endDate"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="endDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>

      <q-card
        v-if="submitted"
        flat
        bordered
        class="q-mt-md"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
      >
        <template v-if="submitEmpty">
          <q-card-section>
            Submitted form contains empty formData.
          </q-card-section>
        </template>
        <template v-else>
          <q-card-section
            >Submitted form contains the following formData (key =
            value):</q-card-section
          >
          <q-separator />
          <q-card-section class="row q-gutter-sm items-center">
            <div
              v-for="(item, index) in submitResult"
              :key="index"
              class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
            >
              {{ item.name }} = {{ item.value }}
            </div>
          </q-card-section>
        </template>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { format, addDays } from "date-fns";
import { api } from "src/boot/axios";

export default {
  setup() {
    // Get today's date and four days from today
    const today = new Date();
    const fourDaysFromNow = addDays(today, 2);

    // Format dates to 'yyyy/MM/dd'
    const formatDate = (date) => format(date, "yyyy/MM/dd");

    // Initialize date values
    const startDate = ref(formatDate(today));
    const endDate = ref(formatDate(fourDaysFromNow));

    const submitted = ref(false);
    const submitEmpty = ref(false);
    const submitResult = ref([]);

    const preferred = ref("");
    // const startDate = ref("2024/09/01");
    // const endDate = ref("2024/09/05");
    const showStartDatePicker = ref(false);
    const showEndDatePicker = ref(false);

    const options = [
      { label: "Ocean State Forecast", value: "UG_GMES_ocean_state_forecast" },
      { label: "Sea Surface Temperature (SST)", value: "SST" },
      { label: "Sea Surface Currents (SSC)", value: "SSC" },
      { label: "Salinity (SALT)", value: "SALT" },
      { label: "Significant Wave Height (SWH)", value: "SWH" },
      { label: "Sea Surface Height (SSH)", value: "SSH" },
    ];

    // Function to format date from 'yyyy/MM/dd' to 'YYYYMMDD'
    const formatDateForSubmission = (dateStr) => dateStr.replace(/\//g, "");

    const onSubmit = async () => {
      try {
        // Create the data object for the POST request
        const data = {
          startdate: startDate.value.replace(/\//g, ""), // Convert date to YYYYMMDD format
          enddate: endDate.value.replace(/\//g, ""), // Convert date to YYYYMMDD format
          variable: preferred.value.value
        };

        console.log(data)

        // Send POST request to Flask API
        const response = await api.post("/run-compute-stats", data);

        // Handle successful response
        console.log("Success:", response.data);
        alert("Data submitted successfully.");
      } catch (error) {
        // Handle error
        console.error("Error:", error);
        alert("An error occurred while submitting the data.");
      }

      const formdata = [
        { name: "ocean_variable", value: preferred.value.value },
        { name: "start_date", value: formatDateForSubmission(startDate.value) },
        { name: "end_date", value: formatDateForSubmission(endDate.value) },
      ];

      submitted.value = true;
      submitResult.value = formdata;
      submitEmpty.value = formdata.every((item) => !item.value);
    };

    return {
      preferred,
      startDate,
      endDate,
      options,
      submitted,
      submitEmpty,
      submitResult,
      showStartDatePicker,
      showEndDatePicker,
      onSubmit,
    };
  },
};
</script>
