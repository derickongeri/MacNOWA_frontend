<template>
  <q-slider
    class=""
    v-model="selectedDate"
    :min="min"
    :max="max"
    ticks
    :ticks-count="9"
    snap
    @change="handleDateChange"
    :label-value="formattedLabel"
    label-always
    markers
    :marker-labels="markerLabels"
    switch-marker-labels-side
    track-color="white"
    track-size="2px"
    thumb-color="primary"
    inner-track-color="transparent"
    selection-color="transparent"
  />
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, computed, watch } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
import {
  add,
  sub,
  format,
  eachDayOfInterval,
  parse,
  getDayOfYear,
} from "date-fns";

const store = useRasterStore();
const $q = useQuasar();

const dateSelected = ref(new Date());
const min = ref(null);
const max = ref(null);
const markerLabels = ref([]);

const selectedDate = ref(getDayOfYear(dateSelected.value));

const setDateSlider = (val) => {
  // Use date-fns functions to calculate the date range
  let start_date = sub(val, { days: 4 });
  let end_date = add(val, { days: 4 });

  const datesList = eachDayOfInterval({ start: start_date, end: end_date });

  markerLabels.value = datesList.map((date) => ({
    value: getDayOfYear(date),
    label: format(date, "yyyy/MM/dd"),
  }));

  selectedDate.value = getDayOfYear(dateSelected.value);
  min.value = markerLabels.value[0].value;
  max.value = markerLabels.value[8].value;
};

const formattedLabel = computed(() => {
  const date = dateSelected.value;
  const selectedDay = date.getDate();
  const selectedMonth = date.getMonth() + 1;
  const selectedYear = date.getFullYear();

  const formattedDay = selectedDay.toString().padStart(2, "0");
  const formattedMonth = selectedMonth.toString().padStart(2, "0");

  return `${selectedYear}/${formattedMonth}/${formattedDay}`;
});

onMounted(() => {
  setDateSlider(dateSelected.value);
  store.setSelectedDate(dateSelected.value);
});

const stringToDate = (dateString) => {
  console.log(dateString);
  const [year, month, day] = dateString.split("/").map(Number);

  return new Date(year, month - 1, day);
};

const handleDateChange = (value) => {
  console.log(selectedDate.value);
  const dateObject = markerLabels.value.find((obj) => obj.value === value);

  dateSelected.value = stringToDate(dateObject.label);

  selectedDate.value = value;

  store.setSelectedDate(dateSelected.value);
  setDateSlider(dateSelected.value);
};

const dateChange = computed(() => {
  return store.getSelectedDate;
});

watch(dateChange, () => {
  console.log(store.getSelectedDate);

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

  console.log("formated date", formattedDate)

    dateSelected.value = stringToDate(formattedDate);

  //store.setSelectedDate(dateSelected.value);
  setDateSlider(dateSelected.value);
});
</script>

<style></style>
