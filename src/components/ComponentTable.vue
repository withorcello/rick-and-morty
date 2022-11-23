<script setup>
import { ref, computed } from "vue";
import { vuetify } from "@/plugins/vuetify";
import Card from "@/components/ComponentCard.vue";

defineEmits(["firstPage", "prevPage", "nextPage", "lastPage"]);
defineProps({
  characters: {
    type: Array,
    required: true,
  },
  height: {
    type: [String, Number],
    default: "",
  },
  heightAuto: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Object,
    default: () => ({}),
  },
});

// Haigth Auto
const table = ref(null);
const heightAutoTable = computed(() => {
  if (!table.value) return "";
  const value = vuetify.display.height.value;
  const tableToTop = table.value.$el.getBoundingClientRect().top;

  return value - tableToTop;
});
</script>
<template>
  <v-card class="bg-foreground pa-0">
    <v-card-actions>
      <v-row class="px-2" justify="center">
        <v-btn
          :disabled="!pagination.prev"
          class="mx-2"
          color="white"
          size="small"
          variant="flat"
          @click="$emit('firstPage')"
        >
          <v-icon>mdi-chevron-double-left</v-icon>
        </v-btn>
        <v-btn
          :disabled="!pagination.prev"
          class="mx-2"
          color="white"
          prepend-icon="mdi-chevron-left"
          size="small"
          variant="flat"
          @click="$emit('prevPage')"
        >
          Prev
        </v-btn>
        <v-card class="mx-2" color="white" width="80">
          <v-card-text class="py-1 text-center">
            {{ pagination.current }} - {{ pagination.pages }}
          </v-card-text>
        </v-card>
        <v-btn
          :disabled="!pagination.next"
          class="mx-2"
          append-icon="mdi-chevron-right"
          color="white"
          size="small"
          variant="flat"
          @click="$emit('nextPage')"
        >
          Next
        </v-btn>
        <v-btn
          :disabled="!pagination.next"
          color="white"
          size="small"
          variant="flat"
          @click="$emit('lastPage')"
        >
          <v-icon>mdi-chevron-double-right</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
  <v-card
    ref="table"
    class="bg-foreground overflow-auto"
    :height="heightAuto ? heightAutoTable : height"
  >
    <v-card-text class="px-2 py-0">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="character of characters"
            :key="character.id"
            cols="12"
            xl="3"
            lg="4"
            md="6"
            sm="12"
          >
            <Card
              :image="character.image"
              :name="character.name"
              :status="character.status"
              :species="character.species"
              :location="character.location"
              :origin="character.origin"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
