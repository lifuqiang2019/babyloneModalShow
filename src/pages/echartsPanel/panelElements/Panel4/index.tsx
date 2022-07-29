import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import ChartView from "./chartView"
  
const PanelElement: FC<{}> = () => {
  return (
    <Panel height="680px">
      <ChartView />
    </Panel>
  );
};

export default PanelElement;
  