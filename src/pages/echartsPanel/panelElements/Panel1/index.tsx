import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import SwitchBoxs from "@components/Panel/components/SwitchBoxs"
  import ChartView from "./chartView"
  import activeBgGreen from "@assets/modelAssets/powerMonitoring/SDSelect.svg"
  import unActiveBgGreen from "@assets/modelAssets/powerMonitoring/SDUnchecked.svg"
  import bluePointer from '@assets/modelAssets/powerMonitoring/bluePointer.svg'

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
  
  const PanelElement: FC<{}> = () => {
    const [dataBtn, setDataBtn] = useState([])
    useEffect(() => {
      setDataBtn(SDchartBtnData)
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
          activeColor={"#00afff"}
          unActiveColor={"#a9bbd1"}
        />
        <ChartView />
      </Panel>
    );
  };
  export default PanelElement;
  