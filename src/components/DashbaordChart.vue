<template>
  <q-card>
    <q-card-section>
      <div class="text-subtitle1">{{ title }}</div>
    </q-card-section>
    <q-card-section>
      <div ref="chartContainer" style="height: 300px"></div>
    </q-card-section>
  </q-card>
</template>

<script>
import Highcharts from 'highcharts'

export default {
  name: 'DashboardChart',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Gráfico',
    },
    chartType: {
      type: String,
      required: true,
      default: 'line',
    },
  },
  mounted() {
    this.renderChart()
  },
  watch: {
    data: {
      handler() {
        this.renderChart()
      },
      deep: true,
    },
  },
  methods: {
    renderChart() {
      Highcharts.chart(this.$refs.chartContainer, {
        chart: {
          type: this.chartType,
        },
        title: { text: this.title },
        xAxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        },
        series: [
          {
            name: this.title,
            data: this.data,
            color: '#26A69A',
          },
        ],
      })
    },
  },
}
</script>
