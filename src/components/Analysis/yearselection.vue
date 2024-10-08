<template>
  <div class="row items-center q-gutter-md q-py-md q-pl-md" style="max-width: 300px">
    <div class="">
      <div class="text-primary">{{ $t("selectYear") }}</div>
    </div>
    <div class="col-6">
      <q-select
        dense
        rounded
        outlined
        v-model="year"
        :options="options"
        emit-value
        map-options
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRasterStore } from "src/stores/rasterstore";

const store = useRasterStore()

const year = ref('100'),
  options = ref([
    {
      label: "2020",
      value: "100",
    },
    {
      label: "2021",
      value: "200",
    },
  ]);

const selectedYear = computed(() => {
  return year.value
})

watch(selectedYear, (val) => {
  console.log(val)
  store.setSelectedYear(val)
})
</script>
