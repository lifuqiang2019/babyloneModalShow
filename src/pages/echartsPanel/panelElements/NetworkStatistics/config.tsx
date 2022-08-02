import * as echarts from "echarts/lib/echarts";

const getConfig = (chartData: any) => {
  const y: any = [];
  const n: any = [];
  const toplit: any = [];

  chartData.allData.forEach((i: any, index: any) => {
    toplit.push(i.title);
    var pieObj = {
      name: i.name,
      value: i.num,
      itemStyle: {
        color: chartData.color[index],
      },
    }
    n.push({
      name: i.name,
      value: i.num,
      itemStyle: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    })
    y.push(pieObj)



  });

  return {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [{
      text: chartData.all,
      x: 'center',
      top: 66,
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
    },
    {
      text: chartData.tlt,
      x: 'center',
      top: 90,
      textStyle: {
        fontSize: 14,
        color: '#fff',
      },
    },
    ],
    polar: {
      radius: ['16%', '90%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      axisLine: false,
      splitLine: false,
    },
    radiusAxis: {
      type: 'category',
      axisLine: false,
    },
    series: [{
      type: 'pie',
      hoverAnimation: false,
      // avoidLabelOverlap: false,
      radius: ['64%', '52%'],
      center: ['50%', '50%'],
      tooltip: {
        show: false
      },
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(0,0,0,0.1)',
          borderWidth: 2,
        },
      },
      data: n
    },
    {
      type: 'pie',
      hoverAnimation: false,
      // avoidLabelOverlap: false,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      tooltip: {
        show: false
      },
      // itemStyle: {
      // 	normal: {
      // 		borderColor: 'rgba(0,0,0,0.2)',
      // 		borderWidth: 4,
      // 	},
      // },
      label: {
        show: false,
        position: 'center'
      },
      data: y
    },
    ]
  };
};

export default getConfig;
