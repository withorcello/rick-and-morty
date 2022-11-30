<script setup>
import { RouterView } from "vue-router";
import ComponentLoading from "./components/ComponentLoading.vue";
import { useAppStore } from "./stores/app";
const store = useAppStore();
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-background">
      <v-btn variant="plain" @click="$router.push('/')">
        <v-icon color="primary" size="x-large">
          mdi-atom
        </v-icon>
        <span class="mx-2 text-h5 font-weight-bold text-grey-lighten-2">
          Rick and Morty
        </span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <ComponentLoading v-model="store.loading" />
      <RouterView />
    </v-main>
  </v-app>
</template>

<style setup>
html {
  overflow-y: auto;
}
</style>
