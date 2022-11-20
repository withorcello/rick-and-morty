<script setup>
import { RouterView } from "vue-router";
import icon from "./assets/app-bar-icon.svg";

const ico = icon;
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-background text-h5">
      <v-icon color="red"> {{ ico }}</v-icon>
      Rick and Morty
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
