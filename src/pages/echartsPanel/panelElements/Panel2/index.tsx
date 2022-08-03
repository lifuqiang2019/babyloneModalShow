import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import ChartView from "./chartView"
  import SwitchBoxs from "@components/Panel/components/SwitchBoxs"
  import activeBgGreen from "@assets/modelAssets/powerMonitoring/UPSSelect.svg"
  import unActiveBgGreen from "@assets/modelAssets/powerMonitoring/UPSUnchecked.svg"
  import bluePointer from '@assets/modelAssets/powerMonitoring/greenPointer.svg'

  interface DataItem {
    name: string;
    data: string;
  }

  const SDchartBtnData = [{
    name: '总负载',
    data: '12.19KM'
  }, {
    name: '电压',
    data: '199.2V'
  }, {
    name: '电流',
    data: '9.19A'
  }]

  const chartDatas = {
    color: '#3DD36E',backGround: ['rgba(61, 211, 110, 0)', 'rgba(61, 211, 110, 0.3)'],
    allData: {
        yData: [{
            data: [30, 20, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 100, 90, 80, 70, 90, 60, 70, 80, 90, 100, 110]
        }],
        xData: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "23:59"]
    }
    
  }
  
  const PanelElement: FC<{}> = () => {
    const [dataBtn, setDataBtn] = useState([])
    const [allDatas, setAllDatas] = useState({
      color: '',
      backGround: [],
      allData: {
          yData: [{
              data: []
          }],
          xData: []
      }
    })
    useEffect(() => {
      setDataBtn(SDchartBtnData)
      setAllDatas(chartDatas)
    }, [])

    const changeActive = (item: DataItem, index: number) => {
      console.log(item, index)
    }

    return (
      <Panel title="市总电负载">
        <SwitchBoxs 
          dataBtn={dataBtn} 
          onChange={changeActive}
          activeImgBg={activeBgGreen}
          unActiveImgBg={unActiveBgGreen}
          activeImgPointer={bluePointer}
          activeColor={"#3dd36e"}
          unActiveColor={"#a9bbd1"}
        />
        {allDatas.color!==''&&<ChartView statusData={allDatas} />}
      </Panel>
    );
  };
  export default PanelElement;
  