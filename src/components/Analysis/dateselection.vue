<template>
  <div class="row items-center q-pa-md">
    <div class="">
      <div class="q-pb-sm text-primary">Select Date</div>
    </div>
    <div class="q-pb-sm q-px-md">
      <q-icon color="primary" size="xs" name="event" class="cursor-pointer">
        <q-popup-proxy
          anchor="bottom left"
          self="top left"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="date" mask="YYYY/MM/DD" minimal> </q-date>
        </q-popup-proxy>
      </q-icon>
    </div>
    <div class="col">
      <div class="q-pb-sm">
        <q-chip
          dense
          square
          text-color="grey-9"
          class="q-my-none q-ml-xs q-mr-none"
        >
          {{ date }}
          <q-popup-proxy
          anchor="bottom left"
          self="top left"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="date" mask="YYYY/MM/DD" minimal> </q-date>
        </q-popup-proxy>
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import { format } from "date-fns";

const store = useRasterStore();
const showDatePicker = ref(true);
const dateSelected = ref(new Date());
const date = ref(format(new Date(), "yyyy/MM/dd"));

const dateChange = computed(() => {
  return date.value;
});

const stringToDate = (dateString) => {
  console.log(dateString);
  const [year, month, day] = dateString.split("/").map(Number);

  return new Date(year, month - 1, day);
};

watch(dateChange, () => {
  console.log("date change", date.value);

  dateSelected.value = stringToDate(date.value);

  store.setSelectedDate(dateSelected.value);
});

watch(()=>store.getSelectedDate, () => {
  const dateString = store.getSelectedDate;

  // Extract year, month, and day from the input string
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  // Create a new Date object with the extracted values
  const date = new Date(`${year}-${month}-${day}`);

  // Format the date as "yyyy/MM/dd"
  const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`;

  date.value = formattedDate;
}, { deep: true });
</script>
