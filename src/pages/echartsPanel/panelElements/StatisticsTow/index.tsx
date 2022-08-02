import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import ChartView from "./chartView"
  import bluePointer from '@assets/modelAssets/CabindetInformation/Gjigui.svg'
  
  const chartDatas = {
    color: 'rgba(29, 174, 255, 0.8)',
    allData: {
        yData: [{
            title: '出流量',
            data: [1, 18, 10, 22, 3],
            topColor: 'rgba(29, 174, 255, 1)',
            backGround: ['rgba(29, 174, 255, 0.1)', 'rgba(29, 174, 255, 1)'],
        }, {
            title: '入流量',
            data: [10, 8, 15, 19, 3],
            topColor: 'rgba(210, 174, 29, 1)',
            backGround: ['rgba(210, 175, 29, 0.1)', 'rgba(210, 175, 29, 1)'],
        }],
        xData: ["00:00", "04:00", "08:00", "12:00", "16:00"]
    }

  }
  
  const PanelElement: FC<{}> = () => {
    const [allDatas, setAllDatas] = useState({
      color: '',
      allData: {
          yData: [{
              title: '',
              data: [],
              topColor: '',
              backGround: [],
          }],
          xData: []
      }
    })

    useEffect(() => {
      setAllDatas(chartDatas)
    }, [])

    return (
      <Panel title="各机柜实时流量统计" company="单位：bps" imgSrc={bluePointer}>
        {allDatas.color!==''&&<ChartView statusData={allDatas} />}
      </Panel>
    );
  };
  export default PanelElement;
  