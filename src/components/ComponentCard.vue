<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  episode: {
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
</script>
<template>
  <v-card class="bg-white" rounded variant="outlined">
    <v-row dense justify="center">
      <v-col cols="auto">
        <v-img width="200" height="200" :src="image" />
      </v-col>
      <v-col align-self="center" class="px-2" cols="block">
        <div class="text-h6 text-xl-h5 font-weight-black">
          {{ name }}
        </div>
        <div class="text-body-2 text-xl-subtitle-2 font-weight-bold">
          <v-icon color="primary" size="x-smal"> mdi-circle </v-icon>
          {{ status }} - {{ species }}
        </div>
        <div
          class="text-body-2 text-xl-subtitle-2 text-grey-darken-3 font-weight-bold mt-4"
        >
          Last known location:
        </div>
        <div class="text-body-1 text-xl-subtitle-1">
          {{ location }}
        </div>
        <div
          class="text-body-2 text-xl-subtitle-2 text-grey-darken-3 font-weight-bold mt-4"
        >
          First seen in:
        </div>
        <div class="text-body-1 text-xl-subtitle-1">
          {{ episode }}
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
