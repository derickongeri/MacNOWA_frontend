<template>
  <div
    class="jumbotron"
    id="hero"
    :style="{ backgroundImage: `url(${imagePath})` }"
    style="min-width: 100vw; min-height: 95vh"
  >
    <div class="absolute-center q-pa-md bg-white login-card text-center">
      <div class="row text-h4 text-left justify-center text-primary" style="font-weight: 400">
        {{ $t("ResetPassword") }}
      </div>

      <div style="margin: auto; min-width: 25vw" class="q-pt-lg">
        <div style="font-weight: 400" class="text-left text-grey-7">
          {{$t('Emailaddress')}}
        </div>
        <div
          class="row q-pa-xs"
          style="min-width: 25vw;"
        >
          <q-input
            class="q-px-none full-width"
            v-model="form.email"
            color="grey-1"
            bg-color="grey-1"

            type="email"
            placeholder="email@example.com*"
          />
        </div>
      </div>



      <div class="row justify-center q-px-xl q-my-md">
        <q-btn
          class="full-width text-h6"
          rounded
          no-caps
          unelevated
          color="primary"
          :label="$t('ResetPassword')"
        />
      </div>

      <div
        class="row justify-center full-width q-px-xl text-grey-7"
        style="font-weight: 400; font-size: medium"
      >
        <q-btn
          class=""
          rounded
          no-caps
          unelevated
          color="white"
          text-color="grey-7"
          :label="$t('backtologin')"
          to="login"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onBeforeMount, computed } from "vue";
import imagePath from "src/assets/DJI_00371.png";

const form = ref({
  email: "",
  password: "",
});

const isValid = computed(()=> (form.value.password && form.value.password.length > 0) )

const rememberMe = ref(false);
const isPwd = ref(true);
</script>
