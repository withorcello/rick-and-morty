<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "../stores/app";
import Table from "@/components/ComponentTable.vue";

const search = ref("");
const store = useAppStore();

onMounted(() => {
  store.getCharacters();
});
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
  <Table :characters="store.characters" height-auto />
</template>
