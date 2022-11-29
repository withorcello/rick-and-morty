<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "../stores/app";
import Table from "@/components/ComponentTable.vue";

const name = ref("");
const store = useAppStore();

onMounted(() => {
  store.getCharacters();
});

async function listCharacters(page) {
  store.loading = true;

  await store.getCharacters({
    name: name.value || undefined,
    page: page || undefined,
  })

  store.loading = false;
}
</script>
<template>
  <v-row class="my-4" justify="center">
    <v-col cols="6">
      <v-text-field
        v-model="name"
        class="bg-foreground"
        density="comfortable"
        placeholder="Character"
        hide-details
        append-inner-icon="mdi-magnify"
        variant="outlined"
        @click:append-inner="listCharacters()"
        @keyup.enter="listCharacters()"
      />
    </v-col>
  </v-row>
  <Table
    :characters="store.characters"
    :pagination="store.pagination"
    height-auto
    @nextPage="listCharacters(store.pagination.next)"
    @prevPage="listCharacters(store.pagination.prev)"
    @firstPage="listCharacters(1)"
    @lastPage="listCharacters(store.pagination.pages)"
  />
</template>
