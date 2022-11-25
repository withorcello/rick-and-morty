<script setup>
import { computed } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const statusColor = computed(() => {
  if (props.status === "Alive") return "primary";
  else if (props.status === "Dead") return "error";
  else return "grey";
});
</script>
<template>
  <v-card class="bg-white rounded-lg" variant="outlined">
    <v-row dense justify="center">
      <v-col cols="auto">
        <v-img width="200" height="200" :src="image" />
      </v-col>
      <v-col class="px-2 d-flex flex-column justify-space-around" cols="block">
        <div>
          <div class="text-h6 text-xl-h5 font-weight-black">
            {{ name }}
          </div>
          <div class="text-body-2 text-xl-subtitle-2 font-weight-bold">
            <v-icon :color="statusColor" size="x-smal"> mdi-circle </v-icon>
            {{ status }} - {{ species }}
          </div>
        </div>
        <div>
          <div
            class="text-body-2 text-xl-subtitle-2 text-grey-darken-3 font-weight-bold"
          >
            Last known location:
          </div>
          <div class="text-subtitle-2">
            {{ location }}
          </div>
        </div>
        <div>
          <div
            class="text-body-2 text-xl-subtitle-2 text-grey-darken-3 font-weight-bold"
          >
            First seen in:
          </div>
          <div class="text-subtitle-2">
            {{ origin }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
