import React, {
  FC,
  Suspense,
  useEffect,
  useState,
  useRef,
} from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./quesBank.css";
import * as Cesium from "cesium";
import "./widgets.css";
// import "cesium/Build/Cesium/Widgets/widgets.css";
// import "cesium/Source/Widgets/CesiumWidget/CesiumWidget.css";

import Loading from "@components/Loading/Loading";
const { Viewer, ScreenSpaceEventHandler, ScreenSpaceEventType, Cartographic, Math, Cartesian3 } = Cesium

const QuesBank: FC<{}> = () => {
  const history = useHistory();
  const location = useLocation();
  let viewer = useRef(null).current

  const fly2china = (viewer: any) => {
     // 定位到中国
     var camera = viewer.scene.camera;
     camera.flyTo({
         //镜头的经纬度、高度。镜头默认情况下，在指定经纬高度俯视（pitch=-90）地球  
        //  destination: Cartesian3.fromDegrees(115.25, 39.26, 7900000),
         destination: Cartesian3.fromDegrees(116.405285, 39.904989, 7900000),
         orientation: {
            //  heading: Cesium.Math.toRadians(-15),
             // pitch: Cesium.Math.toRadians(-90),
             // roll: Cesium.Math.toRadians(0)
         },
         duration: 9, //动画持续时间  
         complete: function(){ //飞行完毕后执行的动作  
   
         }
     });
  }

  useEffect(() => {
    viewer = new Viewer("cesium-container", {
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      vrButton: false,
      infoBox: false,
    })
    fly2china(viewer)

    viewer.entities.add({
      id: 111,
      name: "test",//地图显示的名称
      show: true,
      position: Cesium.Cartesian3.fromDegrees(116.405285, 39.904989),//实体位置（经纬度）
      description: "test", //将实体需要弹出的信息储存在这里
      label: {
        text: "北京",
        fillColor: Cesium.Color.WHITE,
        scale: 0.5,
        font: "normal 40px MicroSoft YaHei",
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, 30),
        outlineWidth: 20,
        outlineColor: Cesium.Color.BLACK,
      },
    });

    const handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (event) {
      let earthPosition  = viewer.camera.pickEllipsoid(event.position,viewer.scene.globe.ellipsoid);
      let cartographic = Cartographic.fromCartesian(earthPosition, viewer.scene.globe.ellipsoid, new Cartographic());
      let lat = Math.toDegrees(cartographic.latitude);  // 纬度
      let lng = Math.toDegrees(cartographic.longitude); // 经度
      let height = cartographic.height;

      // 中国经纬度范围  纬度：3.86至53.55，经度：73.66至135.05
      if(lat >= 3.86 && lat <= 53.55 && lng >= 73.66 && lng <= 135.02) {
        console.log("中国领土")
        history.push({
          pathname: "/testBabylone",
          state: {
            from: {
              pathname: location.pathname,
            },
          },
        });
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
    
    const bottomDom = document.querySelector(".cesium-viewer-bottom")
    console.log("bottomDom", bottomDom)
    bottomDom.style.display = "none";
  }, [])
  return (
    <>
      <Suspense fallback={Loading}>
        <div id={"cesium-container"} style={{height: "100vh"}}/>
      </Suspense>
    </>
  );
};
export default QuesBank;
