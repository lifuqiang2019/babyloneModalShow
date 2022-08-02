import React, {
  FC,
  useState,
  useEffect
} from "react";
import Panel from "@components/Panel";
import SwitchBoxs from "@components/Panel/components/SwitchBoxs"
import ChartView from "./chartView"
import DataView from "./DataView"
import activeBgGreen from "@assets/modelAssets/CabindetInformation/node.svg"

const chartDatas = {
  color: ['rgba(0, 175, 255, 1)', 'rgba(166, 118, 255, 1)', 'rgba(0, 212, 125, 1)', 'rgba(0, 212, 211, 1)', 'rgba(210, 174, 29, 1)'],
  all: '37' + "台",
  tlt: '总设备',
  allData: [{
    name: '交换机',
    num: "10"
  }, {
    name: '路由设备',
    num: "3"
  }, {
    name: '防火墙',
    num: "15"
  }, {
    name: '网络探针',
    num: "6"
  }, {
    name: '以太网测试模块',
    num: "3"
  }]
}

const PanelElement: FC<{}> = () => {

  const [allDatas, setAllDatas] = useState({
    color: [],
    all: '',
    tlt: '',
    allData: []
  })

  useEffect(() => {
    setAllDatas(chartDatas)
  }, [])

  return (
    <Panel title="节点统计" height="240px" imgSrc={activeBgGreen}>
      <div style={{display: 'flex'}}>
        {allDatas.all !== '' && <ChartView statusData={allDatas} />}
        {allDatas.all !== '' && <DataView statusData={allDatas} />}
      </div>
    </Panel>
  );
};
export default PanelElement;
