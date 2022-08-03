import * as echarts from "echarts/lib/echarts";
console.log("echarts", echarts)

const getConfig = (chartData: any) => {
  const x = chartData.allData.xData;
  const y: any = [];
  const toplit: any = [];

  chartData.allData.yData.forEach((i: any, index: any) => {
    toplit.push(i.title);
    y.push({
      name: i.title,
      type: 'bar',
      // backgroundStyle: {
      // 	color: 'rgba(216, 229, 247, 0.55)',
      // 	borderRadius: [8, 8, 0, 0],
      // },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: i.backGround[1],
          },
          {
            offset: 1,
            color: i.backGround[0],
          },
          ]),
          // barBorderRadius: 11,
        },
      },
      barWidth: '10',
      // label: {
      // 	show: true,
      // 	color: '#42C3B9',
      // 	position: 'outside',
      // },
      data: i.data,
    });
  });

  return {
    backgroundColor: 'rgba(0,0,0,0)',
    // title: {
    //   text: this.chartData.allData.title,
    //   left: 'center',
    //   top: '8',
    //   textStyle: {
    //     color: '#E9F2FF',
    //     fontSize: 16,
    //     fontWeight: "bold"
    //   },
    // },
    grid: {
      top: '30',
      left: '0',
      right: '0',
      bottom: '0',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: toplit,
      top: "0",
      right: '0',
      textStyle: {
        color: '#E9F2FF',
      }
    },
    xAxis: {
      data: x,
      boundaryGap: true,
      axisLabel: {
        color: '#A9BBD1',
      },
      axisLine: { // 坐标轴线
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)',
        }

      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#202124',
        } //y轴坐标刻度颜色
      },
      splitArea: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      // interval: 7,
      axisLabel: {
        color: '#A9BBD1',
        formatter: (value: any) => {
          // console.log(value,"ccccccccccccc")
          if (value >= 1000) {
            if (value / 1000 >= 1000) {
              if (value / 1000 / 1000 >= 1000) {
                return (value / 1000 / 1000 / 1000).toFixed(1) + "G"
              } else {
                return (value / 1000 / 1000).toFixed(1) + "M"
              }
            } else {
              return (value / 1000).toFixed(1) + "K"
            }
          } else {
            if (value < 1 && value !== 0) {
              return value.toFixed(1)
            } else {
              return value.toFixed(0)
            }
          }

        }
      },
      axisLine: { // 坐标轴线
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)',
        } //y轴坐标刻度颜色
      },
      splitLine: { // 分隔线
        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)',
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#202124',
        } //y轴坐标刻度颜色
      },
      splitArea: {
        show: false
      }
    }],
    series: y
  };
};

export default getConfig;
