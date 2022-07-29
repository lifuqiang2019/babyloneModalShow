import React, {
    FC,
    Suspense,
  } from "react";
  import Loading from "@components/Loading/Loading";
  import Panel1 from "./panelElements/Panel1";
  import Panel2 from "./panelElements/Panel2";
  
  const InterviewExperInfo: FC<{}> = () => {
    return (
      <>
        <Suspense fallback={Loading}>
          <div className="ques-info">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Panel1 />
              <Panel2 />
            </div>  
          </div>
        </Suspense>
      </>
    );
  };
  export default InterviewExperInfo;
  