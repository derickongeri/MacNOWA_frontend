<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    $q.lang.getLocale(); // returns a string
    onMounted(
      ()=>{
        console.log($q.lang.getLocale())
      }
    )
  },
})
</script>
