<template>
  <q-page padding>
    <div class="text-h5 q-mb-md">Dashboard</div>

    <!-- Layout de gráficos -->
    <q-row class="q-gutter-md">
      <!-- Gráfico 1 -->
      <q-col cols="12" sm="6" md="4">
        <DashbaordChart :data="chartData1" :chartType="'column'" title="Usuários por mês" />
      </q-col>

      <!-- Gráfico 2 -->
      <q-col cols="12" sm="6" md="4">
        <DashbaordChart :data="chartData2" title="Vendas por semana" />
      </q-col>

      <!-- Gráfico 3 -->
      <q-col cols="12" sm="6" md="4">
        <DashbaordChart :data="chartData3" :chartType="'bar'" title="Erros por hora" />
      </q-col>
    </q-row>
  </q-page>
</template>

<script>
import DashbaordChart from 'src/components/DashbaordChart.vue'

export default {
  name: 'DashboardPage',
  components: { DashbaordChart },
  data() {
    return {
      chartData1: [12, 15, 18, 10, 25],
      chartData2: [100, 200, 150, 175, 190],
      chartData3: [5, 10, 8, 12, 9],
    }
  },
}
</script>
