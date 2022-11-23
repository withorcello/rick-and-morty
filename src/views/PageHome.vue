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
        append-inner-icon="mdi-magnify"
        variant="outlined"
        @click:append-inner="store.getCharacters()"
      />
    </v-col>
  </v-row>
  <Table
    :characters="store.characters"
    :pagination="store.pagination"
    height-auto
    @nextPage="store.getCharacters(store.pagination.next)"
    @prevPage="store.getCharacters(store.pagination.prev)"
    @firstPage="store.getCharacters(1)"
    @lastPage="store.getCharacters(store.pagination.pages)"
  />
</template>
