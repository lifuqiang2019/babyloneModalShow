import React, {
  FC,
  useState,
  useEffect
} from "react";
import Panel from "@components/Panel";
import ChartView from "./chartView"

const allData = [{
  title: '功率',
  data: 2468,
  max: 10000,
  company: 'W'
}, {
  title: '直流',
  data: 2,
  max: 8,
  company: 'A'

}, {
  title: '交流',
  data: 10,
  max: 40,
  company: 'A'
}]




const PanelElement: FC<{}> = () => {

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(allData)
  }, [])




  return (
    <Panel title="市总电负载" height="240px">
      <ChartView statusData={chartData} />
    </Panel>
  );
};
export default PanelElement;
