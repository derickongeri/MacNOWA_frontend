<template>
  <div class="row items-center q-gutter-x-sm q-pa-none" style="width: 90%">
    <div class="col">
      <div class="column">
        <div class="row text-primary">Start Date:</div>
      </div>
      <div class="">
        <q-input
          dense
          outlined
          v-model="model.from"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                anchor="bottom right"
                self="top right"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="model.from" mask="YYYY/MM/DD" minimal>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="col-2 text-center">---</div>
    <div class="col">
      <div class="column">
        <div class="row text-primary">End Date:</div>
      </div>
      <div class="">
        <q-input
          dense
          outlined
          v-model="model.to"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                anchor="bottom right"
                self="top right"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="model.to" mask="YYYY/MM/DD" minimal>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useStatsStore } from "src/stores/statsStore";

const store = useStatsStore();

const date = ref("2019/02/01"),
  model = ref({ from: "", to: "" });

const selectedDates = computed(() => {
  return `${model.value.from} - ${model.value.to}`;
});

// Function to format date as YYYY/MM/DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

// Function to format date as YYYY-MM-DD
function transformDate(dateStr) {
  return dateStr.replace(/\//g, '-');
}

// Ensure correct initial dates when component is mounted
onMounted(() => {
  const today = new Date();

  // Calculate one week back and one week ahead
  const oneWeekBack = new Date();
  oneWeekBack.setDate(today.getDate() - 7);

  const oneWeekAhead = new Date();
  oneWeekAhead.setDate(today.getDate() + 7);

  // Set the initial values for from and to
  model.value.from = formatDate(oneWeekBack);
  model.value.to = formatDate(oneWeekAhead);
});

// Watch for changes to model.value.from and model.value.to
watch(
  () => model.value.from,
  (newFrom) => {
    const fromDate = new Date(newFrom);
    const toDate = new Date(model.value.to);

    // If the to date is earlier than the from date, adjust it
    if (toDate < fromDate) {
      model.value.to = model.value.from;
    }
  }
);

watch(
  () => model.value.to,
  (newTo) => {
    const fromDate = new Date(model.value.from);
    const toDate = new Date(newTo);

    // If the to date is earlier than the from date, adjust it
    if (toDate < fromDate) {
      model.value.to = model.value.from;
    }
  }
);

watch(
  selectedDates,
  () => {
    const start_date = transformDate(model.value.from);
    const end_date = transformDate(model.value.to);
    const dates = {
      start: start_date,
      end: end_date,
    };

    console.log("Updating store with dates:", dates);
    store.setFilterDates(dates);
  }
);
</script>
