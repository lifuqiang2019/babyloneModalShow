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
            </div>
          </div>
        </Suspense>
      </>
    );
  };
  export default InterviewExperInfo;
  