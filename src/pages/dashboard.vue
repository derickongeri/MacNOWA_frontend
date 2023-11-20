<template>
  <q-page class="page-body">
    <div class="row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column q-ma-md" style="max-width: 65vw; flex: 1">
          <div style="width: 100%; height: 100%"><mappanel /></div>
        </div>
        <div class="column bg-none q-ma-none" style="max-width: 33vw; flex: 1">
         <div> <analysiltabs/></div>
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
