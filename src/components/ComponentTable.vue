<script setup>
import { ref } from "vue";
import { vuetify } from "@/plugins/vuetify";
import Card from "@/components/ComponentCard.vue";
import { computed } from "vue";

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
});

const table = ref(null);
const heightAutoTable = computed(() => {
  if (!table.value) return "";
  const value = vuetify.display.height.value;
  const tableToTop = table.value.$el.getBoundingClientRect().top;

  return value - tableToTop - 52;
});
</script>
<template>
  <v-card
    ref="table"
    class="bg-foreground"
    :height="heightAuto ? heightAutoTable : height"
  >
    <v-card-text>
      <v-container fluid>
        <v-row dense>
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
              :episode="character.episode"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card class="bg-foreground pa-0">
    <v-card-actions>
      <v-row class="px-2" dense justify="end">
        <v-btn
          color="white"
          prepend-icon="mdi-chevron-left"
          size="small"
          variant="flat"
          @click="$emit('previousPage')"
        >
          Previous
        </v-btn>
        <v-btn
          append-icon="mdi-chevron-right"
          color="white"
          size="small"
          variant="flat"
          @click="$emit('nextPage')"
        >
          Next
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
