import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("characters", () => {
  const characters = ref([]);

  async function getCharacters() {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");

      if (res.data && !(res instanceof Error)) {
        const { results, info } = res.data;
        characters.value = results.map((el) => ({
          id: el.id,
          episode: el.epsode,
          image: el.image,
          gender: el.gender,
          location: el.location.name,
          name: el.name,
          origin: el.origin.name,
          species: el.species,
          status: el.status,
        }));
      }
    } catch (error) {
      return error;
    }
  }

  return { characters, getCharacters };
});
