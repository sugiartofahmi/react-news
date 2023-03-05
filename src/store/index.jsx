import { selector, atom } from "recoil";
import axios from "axios";
export const paramState = atom({
  key: "param-state",
  default: {
    apiKey: import.meta.env.VITE_API_KEY,
    country: "id",
  },
});

export const fetchNews = selector({
  key: "fetch-news",
  get: async ({ get }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}top-headlines`,
        {
          params: get(paramState),
        }
      );
      return res.data || {};
    } catch (error) {
      console.log(error);
    }
  },
});
