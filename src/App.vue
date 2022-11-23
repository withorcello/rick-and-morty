<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-background px-4">
      <v-icon color="primary" size="x-large" @click="$router.push('/')">
        mdi-atom
      </v-icon>
      <span
        class="mx-2 text-h5 font-weight-bold text-grey-lighten-2"
        @click="$router.push('/')"
      >
        Rick and Morty
      </span>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style setup>
html {
  overflow-y: auto;
}
</style>
