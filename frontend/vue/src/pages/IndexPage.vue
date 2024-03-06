<template>
  <q-page class="column q-py-xl">
    <example-component
      title="Example component"
      :active="false"
      :todos="todos"
      :meta="meta"
    ></example-component>
    <div class="q-mb-md row q-gutter-x-md">
      <div class="col-3">
        <label class="q-field-label-outside">Select Food</label>
        <q-select
          v-model="foodStore.selectedFood"
          outlined
          :options="foodStore.foodList"
          behavior="menu"
        />
      </div>
    </div>
    <PlotlyGraph
      v-if="foodStore.selectedFood"
      :data="chart.data"
      :layout="chart.layout"
      :config="chart.config"
    />
    <!-- <pre style="font-size: 0.7rem" class="bg-bright q-pa-md">{{
      foodStore.infoSelected
    }}</pre> -->
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { usefoodStore } from 'src/stores/food-store';
import { watch, ref, computed, onMounted, onUnmounted, onActivated } from 'vue';
import PlotlyGraph from 'src/components/viz/PlotlyGraph.vue';

const foodStore = usefoodStore();

onMounted(() => foodStore.fetchFood());

interface Info {
  labels: string[];
  values: number[];
}

const nutritionInfo = computed(() => {
  const nutrition: string[] = [
    'fat',
    'carbs',
    'protein',
    'sodium',
    'calcium',
    'iron',
  ];

  var info: Info = { labels: [], values: [] };
  if (foodStore.infoSelected) {
    info['labels'] = nutrition;
    info['values'] = nutrition.map(
      (x) =>
        foodStore.infoSelected?.[
          x as 'fat' | 'carbs' | 'protein' | 'sodium' | 'calcium' | 'iron'
        ] ?? 0
    );
  }
  return info;
});

const chart = computed(() => {
  return {
    data: [
      {
        name: 'Nutrition ',
        x: nutritionInfo.value['labels'],
        y: nutritionInfo.value['values'],
        type: 'bar',
        marker: {
          color: '#373a36',
        },
        hovertemplate: '%{label}: %{value:.0f}',
        cliponaxis: false,
      },
    ],
    layout: {
      title: {
        text: `<b>${foodStore.infoSelected?.food}</b><br><span style="font-size:.85em">Calories: ${foodStore.infoSelected?.calories}</span>`,
        font: {
          size: 18,
          color: '#373a36',
        },
        yref: 'container',
        xanchor: 'left',
        yanchor: 'top',
        x: 0,
        y: 0.9,
      },
      font: {
        family: "'Vontobel Sans', sans-serif",
        color: '#373a36',
        size: 14,
      },
      xaxis: {
        tickcolor: '#373a36',
        tickwidth: 1,
      },
      yaxis: {
        showgrid: true,
        zerolinewidth: 2,
        ticksuffix: '  ',
      },
      barmode: 'group',
      bargap: 0.33,
      margin: {
        t: 125,
        b: 95,
        l: 55,
        r: 30,
      },
      legend: {
        orientation: 'h',
        y: -0.18,
      },
    },
    config: {
      displayModeBar: false,
    },
  };
});

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
