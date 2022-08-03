import React, {
    FC,
    Suspense,
  } from "react";
  import Loading from "@components/Loading/Loading";
  import Panel1 from "./panelElements/Panel1";
  import Panel2 from "./panelElements/Panel2";
  import Panel3 from "./panelElements/Panel3";
  import Panel4 from "./panelElements/Panel4";
  import Panel5 from "./panelElements/Panel5";
  import Panel6 from "./panelElements/Panel6";
  import Panel7 from "./panelElements/Panel7";
  import Monitor from "./panelElements/Monitor";
  import AccessControl from "./panelElements/AccessControl";
  import EquipmentDilog from "./panelElements/EquipmentDilog";
  import CabinetInformation from "./panelElements/CabinetInformation";
  import StatisticsOne from "./panelElements/StatisticsOne";
  import StatisticsTow from "./panelElements/StatisticsTow";
  import NetworkStatistics from "./panelElements/NetworkStatistics";
  
  
  
  const InterviewExperInfo: FC<{}> = () => {
    return (
      <>
        <Suspense fallback={Loading}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <Panel1 />
              <Panel2 />
              <Panel3 />
              <Panel4 />
              <Panel5 />
              <Panel6 />
              <Panel7 />
              <Monitor />
              <AccessControl />
              <EquipmentDilog />
              <CabinetInformation />
              <StatisticsOne />
              <StatisticsTow />
              <NetworkStatistics />
            </div>
          </div>
        </Suspense>
      </>
    );
  };
  export default InterviewExperInfo;
  