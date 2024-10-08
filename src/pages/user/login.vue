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
        {{ $t("login") }}
      </div>

      <div style="margin: auto; min-width: 25vw" class="q-pt-lg">
        <div style="font-weight: 400" class="text-left text-grey-7">
          {{ $t("Emailaddress") }}
        </div>
        <div class="row q-pa-xs" style="min-width: 25vw">
          <q-input
            class="q-px-none full-width"
            v-model="form.email"
            color="grey-1"
            bg-color="grey-1"
            type="email"
            placeholder="email@example.com*"
          />
        </div>

        <div style="font-weight: 400" class="text-left text-grey-7 q-mt-md">
          {{ $t("Password") }}
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
            :rules="[(val) => (val && val.length > 0) || $t('required')]"
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
          :label="$t('ForgotPassword')"
          to="resetpassword"
        />
      </div>

      <div class="row justify-center q-px-xl q-my-md">
        <q-btn
          class="full-width text-h6"
          rounded
          no-caps
          unelevated
          color="primary"
          :label="$t('login')"
          @click="handleLogin"
        />
      </div>

      <div
        class="row justify-center items-center q-gutter-md full-width text-grey-7"
        style="font-weight: 400; font-size: medium"
      >
        <div>{{ $t("account") }}</div>

        <router-link to="signup"
          ><div class="">{{ $t("Register") }}</div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onBeforeMount, computed } from "vue";
import imagePath from "src/assets/DJI_00371.png";
import useSupabase from "src/boot/supabase";

import userAuthUser from "src/composables/userAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

const { supabase } = useSupabase();

const router = useRouter();
const { login, isLoggedIn, user } = userAuthUser();
const { notifyError, notifySuccess } = useNotify();

const form = ref({
  email: "",
  password: "",
});

const getUserProfileByEmail = async (email) => {
  try {
    const { data, error } = await supabase
      .from("user_analytics")
      .select("*")
      .eq("email", email) // Filter by email
      .single(); // We use .single() to get a single row

    if (error) {
      // console.error("Error fetching user profile:", error.message);
      router.push({
        name: "onboarding",
      });
      return null;
    }

    // console.log("User profile:", data);

    return data;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
};

//method to handle login and redirect to dashboard
const handleLogin = async () => {
  try {
    await login(form.value);
    notifySuccess("Login successfull!");
    getUserProfileByEmail(user.value.email);
    router.push({
      name: "dashboard",
    });
  } catch (error) {
    notifyError(error.message);
  }
};

const isValid = computed(
  () => form.value.password && form.value.password.length > 0
);

const rememberMe = ref(false);
const isPwd = ref(true);
</script>
