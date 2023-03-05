import { selector, atom } from "recoil";
import axios from "axios";
export const paramState = atom({
  key: "param-state",
  default: {
    q: "indonesia",
  },
});

export const fetchNews = selector({
  key: "fetch-news",
  get: async ({ get }) => {
    try {
      const res = await axios(`${import.meta.env.VITE_API_URL}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
        params: get(paramState),
      });
      return res.data.articles || {};
    } catch (error) {
      console.log(error);
    }
  },
});
