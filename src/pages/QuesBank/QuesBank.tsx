import React, {
  FC,
  Suspense,
  useEffect,
} from "react";
import "./quesBank.css";
import { Viewer } from "cesium";
// import "cesium/Build/Cesium/Widgets/widgets.css";

import Loading from "@components/Loading/Loading";

const QuesBank: FC<{}> = () => {
  useEffect(() => {
    new Viewer("cesium-container")
  }, [])
  return (
    <>
      <Suspense fallback={Loading}>
        <div id={"cesium-container"}/>
      </Suspense>
    </>
  );
};
export default QuesBank;
