import { defineStore } from 'pinia';
import { frontendUser } from 'src/api/users';
import { Food } from 'src/api/interfaces';

export const usefoodStore = defineStore('food', {
  state: () => ({
    selectedFood: null as string | null,
    foodData: null as Food[] | null,
  }),
  getters: {
    foodList: (state) => state.foodData?.map((f) => f.food),
    infoSelected: (state) =>
      state.foodData?.find((f) => f.food === state.selectedFood),
  },
  actions: {
    async fetchFood() {
      const data = await frontendUser.getFood({});
      console.log('fetching food');
      this.foodData = data;
    },
    selectFood(food: string) {
      this.selectedFood = food;
    },
  },
});
