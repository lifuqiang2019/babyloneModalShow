// useECharts.js

import React, { useEffect } from 'react'
import * as echarts from 'echarts/lib/echarts' 
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/theme/macarons'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';

function useECharts(chartRef, config) {
  echarts.use([GridComponent, TooltipComponent, LegendComponent, LineChart]);
  let chartInstance = null

  function renderChart() {
    const renderedInstance = echarts.getInstanceByDom(chartRef.current)
    if (renderedInstance) {
      chartInstance = renderedInstance
    } else {
      chartInstance = echarts.init(chartRef.current, 'macarons')
    }
    chartInstance.setOption(config)
  }

  useEffect(() => {
    renderChart()
  }, [config])

  useEffect(() => {
    return () => {
      chartInstance && chartInstance.dispose()
    }
  }, [])

  return 
}

export default useECharts