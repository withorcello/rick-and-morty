<template>
  <v-container fluid class="h-100 d-flex align-center text-center">
    <v-row dense>
      <v-col class="justify-center" cols="12">
        <h1 class="text-h2 font-weight-bold white--text">
          Rick and Morty Characters
        </h1>
        <h2 class="text-h5 grey-lighten--text">
          Want to know a little more about the characters in the series?
        </h2>
        <v-btn
          class="ma-4 bg-primary"
          size="large"
          @click="$router.push('/home')"
        >
          Come with us!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
