import React, {
    FC,
    useState,
    useEffect
  } from "react";
import Panel from "@components/Panel";
import SwitchBoxs from "@components/Panel/components/SwitchBoxs"
import ChartView from "./chartView"
import monitorSelect from '@assets/modelAssets/SecurityMonitoring/monitorSelect.svg'
import monitorUnchecked from '@assets/modelAssets/SecurityMonitoring/monitorUnchecked.svg'
import bluePointer from '@assets/modelAssets/powerMonitoring/bluePointer.svg'

const monitoringData = [
  {
    data: '',
    status: '0',
    info: '',
    time: '00:00:00'
  }, {
    data: '',
    status: '1',
    info: '该设备已离线',
    time: '00:00:00'
  }, {
    data: '',
    status: '1',
    info: '该设备已离线',
    time: '00:00:00'
  }, {
    data: '',
    status: '2',
    info: '无法找到视频流，请联系相关人员维修',
    time: '00:00:00'
  }
]

const SDchartBtnData = [{
  data: '机柜区',
}, {
  data: '动力间',
}, {
  data: '冷却区',
}, {
  data: '运维区',
}]

interface DataItem {
  name: string;
  data: string;
}


  
const PanelElement: FC<{}> = () => {
  const [dataBtn, setDataBtn] = useState([])
  const [status, setStatus] = useState(0)

  useEffect(() => {
    setDataBtn(SDchartBtnData)
  }, [])

  const changeActive = (item: DataItem, index: number) => {
    console.log(item, index)
    setStatus(index)
  }

  return (
    <Panel title="24小时内人脸进出识别" width="320px" height="330px">
      <SwitchBoxs 
        dataBtn={dataBtn}
        onChange={changeActive}
        activeImgBg={monitorSelect}
        unActiveImgBg={monitorUnchecked}
        activeImgPointer={bluePointer}
        activeColor={"#00afff"}
        unActiveColor={"#a9bbd1"}
        type={2}
      />
      <ChartView SDStatus={status}/>
    </Panel>
  );
};

export default PanelElement;
  