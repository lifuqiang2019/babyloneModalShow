import React, {
    FC,
    Suspense,
    useState,
    useEffect,
  } from "react";
  import "./index.css";
  import { useHistory, useLocation } from "react-router-dom";
  // import { ques } from "@api/index";
  import Loading from "@components/Loading/Loading";
  import BtnBoxs from "@components/Panel/components/BtnChecks";
  import FloorScene from "./scenes/FloorScene";
  import FloorScene1 from "./scenes/FloorScene1";
  import FloorScene2 from "./scenes/FloorScene2";
  import ComputerRoom from "./scenes/ComputerRoom";
  import Cabinet from "./scenes/Cabinet";
  import AlarmScene from "./scenes/AlarmScene";
  import SafeScene from "./scenes/SafeScene";
  import A01Scene from "./scenes/A01Scene";
  import A02Scene from "./scenes/A02Scene";
  import A03Scene from "./scenes/A03Scene";
  import A04Scene from "./scenes/A04Scene";
  import A05Scene from "./scenes/A05Scene";

  const BtnData = [
    {
        name: "数据中心",
        flag: true,
        childrenStatus: true,
        children: [
            // {
            //     name: "楼层一",
            //     flag: false
            // },
            // {
            //     name: "楼层二",
            //     flag: false
            // }
        ]
    },
    {
        name: "机房",
        flag: true,
        childrenStatus: true,
        children: [
            // {
            //     name: "安防监测",
            //     flag: false
            // },
            // {
            //     name: "电力监测",
            //     flag: false
            // }
        ]
    },
    {
        name: "机柜",
        flag: true,
        childrenStatus: true,
        children: [
            {
                name: "C19",
                flag: false
            },
            {
                name: "C20",
                flag: false
            },
            // {
            //     name: "A-03",
            //     flag: false
            // },
            // {
            //     name: "A-04",
            //     flag: false
            // },
            // {
            //     name: "A-05",
            //     flag: false
            // }
        ]
    }
]

const btnMapCom = {
  "数据中心": <FloorScene />,
  "楼层一": <FloorScene1 />,
  "楼层二": <FloorScene2 />,
  "机房": <ComputerRoom />,
  "安防监测": <SafeScene />,
  "电力监测": <AlarmScene />,
  "机柜": <Cabinet />,
  "C19": <A01Scene />,
  "C20": <A02Scene />,
  "A-03": <A03Scene />,
  "A-04": <A04Scene />,
  "A-05": <A05Scene />
}
  
const SceneRender: FC<{}> = () => {
  const [sceneType, setSceneType] = useState("数据中心")
  const RenderScene = (sceneType: string) => {
    const Com = btnMapCom[sceneType]
    return Com
  }

  const btnSwitch = (name: string) => {
    setSceneType(name)
  }

  return (
    <>
      <Suspense fallback={Loading}>
        <div className="test-babylone-com">
          {RenderScene(sceneType)}
          <BtnBoxs 
            btnData={BtnData}
            onSwitch={btnSwitch}
          />
        </div>
      </Suspense>
    </>
  );
};
export default SceneRender;
  