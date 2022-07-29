import React, {
    FC,
    Suspense,
  } from "react";
  import "./index.css";
  import { useHistory, useLocation } from "react-router-dom";
  // import { ques } from "@api/index";
  import Loading from "@components/Loading/Loading";
  import { SceneBabylon } from "./testCom";
  
  const InterviewExperInfo: FC<{}> = () => {
    return (
      <>
        <Suspense fallback={Loading}>
          <div className="test-babylone-com">
            <SceneBabylon /> 
          </div>
        </Suspense>
      </>
    );
  };
  export default InterviewExperInfo;
  