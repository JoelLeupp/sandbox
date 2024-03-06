<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      :active="false"
      :todos="todos"
      :meta="meta"
    ></example-component>
    <pre>{{ foodStore.foodData }}</pre>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { usefoodStore } from 'src/stores/food-store';
import { watch, ref, computed, onMounted, onUnmounted, onActivated } from 'vue';

const foodStore = usefoodStore();

onMounted(() => foodStore.fetchFood());

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct5',
  },
  {
    id: 5,
    content: 'ct11',
  },
]);
const meta = ref<Meta>({
  totalCount: 10,
});
</script>
