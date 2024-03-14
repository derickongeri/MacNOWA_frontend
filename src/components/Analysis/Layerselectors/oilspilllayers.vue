<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-none text-grey-9" style="">
        <q-list separator dense>
          <q-item>
            <div>
              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
                dense
                class="q-gutter-y-sm"
              />
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, watch, onBeforeMount, computed } from "vue";
import { useRasterStore } from "src/stores/rasterstore/index.js";

const store = useRasterStore();
const layerSelected = ref("");

const group = ref(store.getLayerName);
const options = ref([
  {
    label: "Oil Spill",
    value: "Oil_Spill",
  },
]);


watch(group, (val)=>{
  store.setLayerName(val);
})

const layeName = computed(()=>{store.getLayerName})

watch(layeName, ()=>{
  group.value = store.getLayerName
}, {deep: true})

</script>
