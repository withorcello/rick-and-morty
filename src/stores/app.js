import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("characters", () => {
  const loading = ref(false);
  const characters = ref([]);
  const pagination = ref({
    current: null,
    next: null,
    pages: null,
    prev: null,
  });

  async function getCharacters(page) {
    try {
      loading.value = true;

      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/",
        {
          params: { page },
        }
      );

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

        const next = info.next?.replace(/\D/g, "");
        const prev = info.prev?.replace(/\D/g, "");
        pagination.value = {
          current: (prev && +prev + 1) || (next && +next - 1),
          pages: info.pages,
          next,
          prev,
        };
      }

      loading.value = false;
    } catch (error) {
      return error;
    }
  }

  return { characters, getCharacters, pagination, loading };
});
