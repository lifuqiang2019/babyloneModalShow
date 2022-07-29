import React, {
    FC,
    useState,
    useEffect
  } from "react";
  import Panel from "@components/Panel";
  import ChartView from "./chartView"
  
  const PanelElement: FC<{}> = () => {
    return (
      <Panel title="市总电负载">

        <ChartView />
      </Panel>
    );
  };
  export default PanelElement;
  