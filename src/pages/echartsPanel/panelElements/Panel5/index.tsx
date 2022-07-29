import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import ChartView from "./chartView"
  
const PanelElement: FC<{}> = () => {
  return (
    <Panel title="24小时内人脸进出识别" width="320px" height="290px">
      <ChartView />
    </Panel>
  );
};

export default PanelElement;
  