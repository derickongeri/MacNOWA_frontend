<template>
  <div
    class="jumbotron"
    id="hero"
    :style="{ backgroundImage: `url(${imagePath})` }"
    style="min-width: 100vw; min-height: 95vh"
  >
    <div class="absolute-center q-pa-md bg-white login-card text-center">
      <div
        class="row text-h4 text-left justify-center text-primary"
        style="font-weight: 400"
      >
        {{ $t("Sing Up") }}
      </div>

      <div style="margin: auto; min-width: 25vw" class="q-pt-lg">
        <div style="font-weight: 400" class="text-left text-grey-7">
          {{$t('Yourname')}}
        </div>
        <div class="row q-gutter-md q-pa-xs q-mb-md">
          <div class="col">
            <q-input
              class="q-px-none full-width"
              v-model="form.firstName"
              color="grey-1"
              bg-color="grey-1"
              type="email"
              placeholder="Firstname"
            />
          </div>
          <div class="col">
            <q-input
              class="q-px-none full-width"
              v-model="form.lastName"
              color="grey-1"
              bg-color="grey-1"
              type="email"
              placeholder="Lastname"
            />
          </div>
        </div>

        <div style="font-weight: 400" class="text-left text-grey-7">
          {{$t('Emailaddress')}}
        </div>
        <div class="row q-pa-xs" style="min-width: 25vw">
          <q-input
            class="q-px-none full-width"
            v-model="form.email"
            color="grey-1"
            bg-color="grey-1"
            type="email"
            placeholder="example@mail.com*"
          />
        </div>

        <div style="font-weight: 400" class="text-left text-grey-7 q-mt-md">
          {{$t('Password')}}
        </div>
        <div class="row q-pa-xs" style="min-width: 25vw">
          <q-input
            class="full-width"
            :type="isPwd ? 'password' : 'text'"
            v-model="form.password"
            type="password"
            lazy-rules
            color="grey-1"
            bg-color="grey-1"
            :rules="[(val) => (val && val.length > 0) || $t('Field is required *')]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>

        <div style="font-weight: 400" class="text-left text-grey-7 q-mt-md">
          {{$t('Confirmpassword')}}
        </div>
        <div class="row q-pa-xs" style="min-width: 25vw">
          <q-input
            class="full-width"
            :type="isPwd ? 'password' : 'text'"
            v-model="form.password"
            type="password"
            lazy-rules
            color="grey-1"
            bg-color="grey-1"
            :rules="[(val) => (val && val.length > 0) || 'Field is required *']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center q-px-xl q-my-md">
        <q-btn

          class="full-width text-h6"
          rounded
          no-caps
          unelevated
          color="primary"
          :label="$t('Register')"
        />
      </div>

      <div
        class="row justify-center items-center q-gutter-md full-width text-grey-7"
        style="font-weight: 400; font-size: medium"
      >
        <div>{{$t('haveAccount')}}</div>

        <router-link to="login"><div class="">{{$t('login')}}</div></router-link>
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
  firstName: "",
  lastName: "",
  Country: "",
  Institution: "",
});

const isValid = computed(
  () => form.value.password && form.value.password.length > 0
);

const rememberMe = ref(false);
const isPwd = ref(true);
</script>
