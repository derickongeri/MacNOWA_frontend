<template>
  <q-slider
    class=""
    v-model="selectedDate"
    :min="startDate"
    :max="endDate"
    ticks
    :ticks-count="14"
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
import { ref, onMounted, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";
//import {format, addDays } from 'date-fns'

const store = useRasterStore();
const $q = useQuasar();
const startDate = ref(null);
const endDate = ref(null);

const currentDate = new Date();
const markerLabels = ref([]);
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const selectedDate = ref(currentDay > 14 ? 14 : currentDay); // default to the current date or maximum of 14

const setDateSlider = () => {
  // calculate the date range
  startDate.value = selectedDate.value - 7;
  endDate.value = selectedDate.value + 7;

  // Generate marker labels
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  for (let i = startDate.value; i < endDate.value; i++) {
    const nextDate = new Date(currentYear, currentMonth, i);

    if (i % 2 === 0) {
      markerLabels.value.push({ value: i, label: formatDate(nextDate) });
    }
  }
};

onMounted(() => {
  setDateSlider()
});


const formattedLabel = computed(() => {
  const selectedDay = selectedDate.value;
  const selectedMonth = currentMonth + 1; // Adding 1 since getMonth() returns 0-indexed month
  const selectedYear = currentYear;

  const formattedDay = selectedDay.toString().padStart(2, "0");
  const formattedMonth = selectedMonth.toString().padStart(2, "0");

  return `${selectedYear}/${formattedMonth}/${formattedDay}`;
});

const handleDateChange = (value) => {
  const selectedDay = value;
  const selectedMonth = currentMonth + 1; // Adding 1 since getMonth() returns 0-indexed month
  const selectedYear = currentYear;

  const formattedDay = selectedDay.toString().padStart(2, "0");
  const formattedMonth = selectedMonth.toString().padStart(2, "0");

  const formattedDate = `${selectedYear}${formattedMonth}${formattedDay}`; //ocean_state_forecast_20231104

  store.setSelectedDate(formattedDate);
  setDateSlider()
};
</script>

<style>
/* Add custom styles here */
</style>
