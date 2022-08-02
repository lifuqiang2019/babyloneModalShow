import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import SwitchBoxs from "@components/Panel/components/SwitchBoxs"
  import ChartView from "./chartView"
  import activeBgGreen from "@assets/modelAssets/CabindetInformation/node.svg"

  const chartDatas = {
    color: 'rgba(29, 174, 255, 0.8)',
    backGround: ['rgba(29, 174, 255, 0.2)', 'rgba(29, 174, 255, 0.3)'],
    allData: {
        yData: [{
            title: '节点数',
            data: [10, 8, 15, 19, 3]
        }],
        xData: ["00:00", "04:00", "08:00", "12:00", "16:00"]
    }
  }

  const PanelElement: FC<{}> = () => {
    
    const [allDatas, setAllDatas] = useState({
      color: '',
      backGround: [],
      allData: {
          yData: [{
              title: '',
              data: []
          }],
          xData: []
      }
    })

    useEffect(() => {
      setAllDatas(chartDatas)
    }, [])

    return (
      <Panel title="节点统计" imgSrc={activeBgGreen}>
        {allDatas.color!==''&&<ChartView statusData={allDatas} />}
      </Panel>
    );
  };
  export default PanelElement;
  