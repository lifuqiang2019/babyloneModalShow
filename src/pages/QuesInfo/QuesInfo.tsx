import React, {
    FC,
    Suspense,
  } from "react";
  import "./quesInfo.css";
  import { useHistory, useLocation } from "react-router-dom";
  // import { ques } from "@api/index";
  import Loading from "@components/Loading/Loading";
  // 字体加密
  import {
    quesListSelect,
    quesSelect,
  } from "@recoil/selectors/quesListSelectors";
  
  const InterviewExperInfo: FC<{}> = () => {
    return (
      <>
        <Suspense fallback={Loading}>
          <div className="ques-info">Page3_</div>
        </Suspense>
      </>
    );
  };
  export default InterviewExperInfo;
  