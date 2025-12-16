import axios from "axios";

const BASE_URL = "https://vue-js-project-9795a-default-rtdb.firebaseio.com";

export default {
  namespaced: true,

  state() {
    return {
      recipes: [],
      recipeDetail: {},
    };
  },

  mutations: {
    setRecipeData(state, payload) {
      state.recipes = payload;
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload;
    },
  },

  actions: {
    async getRecipeData({ commit }) {
      try {
        const { data } = await axios.get(`${BASE_URL}/recipes.json`);

        if (!data) {
          commit("setRecipeData", []);
          return;
        }

        const arr = [];
        for (const key in data) {
          arr.push({ id: key, ...data[key] });
        }

        commit("setRecipeData", arr);
      } catch (err) {
        console.error(err);
      }
    },

    async getRecipeDetail({ commit }, id) {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/recipes/${id}.json`
        );
        commit("setRecipeDetail", data);
      } catch (err) {
        console.error(err);
      }
    },

    async addNewRecipe({ dispatch, rootState }, payload) {
      try {
        const newData = {
          ...payload,
          username: rootState.auth.userLogin.username,
          userId: rootState.auth.userLogin.userId,
          createdAt: Date.now(),
          likes: [],
        };

        await axios.post(
          `${BASE_URL}/recipes.json?auth=${rootState.auth.token}`,
          newData
        );

        await dispatch("getRecipeData");
      } catch (err) {
        console.error("Add recipe failed:", err.response?.data || err);
      }
    },

    async deleteRecipe({ dispatch, rootState }, recipeId) {
      try {
        await axios.delete(
          `${BASE_URL}/recipes/${recipeId}.json?auth=${rootState.auth.token}`
        );

        await dispatch("getRecipeData");
      } catch (err) {
        console.error("Delete recipe failed:", err.response?.data || err);
      }
    },

    async updateRecipe({ dispatch, rootState }, { id, newRecipe }) {
        try {
            const { data } = await axios.put(
                `${BASE_URL}/recipes/${id}.json?auth=${rootState.auth.token}`, newRecipe
            );

            await dispatch("getRecipeData")
        } catch (error) {
            console.log(error);
        }
    },
  },
};
