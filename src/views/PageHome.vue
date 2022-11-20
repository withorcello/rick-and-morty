<script setup>
import { ref } from "vue";
import Table from "@/components/ComponentTable.vue";

const array = ref([
  {
    name: "Mrs. Pancakes",
    status: "Alive",
    species: "Human",
    location: "Mr. Goldenfold's dream",
    episode: "Lawnmower Dog",
    image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
  },
  {
    name: "Mrs. Pancakes",
    status: "Alive",
    species: "Human",
    location: "Mr. Goldenfold's dream",
    episode: "Lawnmower Dog",
    image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
  },
  {
    name: "Mrs. Pancakes",
    status: "Alive",
    species: "Human",
    location: "Mr. Goldenfold's dream",
    episode: "Lawnmower Dog",
    image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
  },
  {
    name: "Mrs. Pancakes",
    status: "Alive",
    species: "Human",
    location: "Mr. Goldenfold's dream",
    episode: "Lawnmower Dog",
    image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
  },
  {
    name: "Mrs. Pancakes",
    status: "Alive",
    species: "Human",
    location: "Mr. Goldenfold's dream",
    episode: "Lawnmower Dog",
    image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
  },
]);
const search = ref("");
</script>
<template>
  <v-row class="my-4" justify="center">
    <v-col cols="6">
      <v-text-field
        v-model="search"
        class="bg-foreground"
        density="comfortable"
        placeholder="Character"
        hide-details
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
      />
    </v-col>
  </v-row>
  <Table :characters="array" height-auto />
</template>
