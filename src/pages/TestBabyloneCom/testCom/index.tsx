import React, { FC, useEffect } from "react";
import { FreeCamera, ArcRotateCamera, UniversalCamera, Camera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, Scene } from "@babylonjs/core";
import SceneComponent from "@components/SceneBabylone"; // uses above component in same directory
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import '@babylonjs/loaders'
// import '@babylonjs/inspector'

let box;

const onSceneReady = (scene: Scene) => {
  // scene.debugLayer.show({
  //   embedMode: true,
  // });
  console.log('onSceneReady', scene);
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 0, 10), scene);

  // This targets the camera to scene origin
  // camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  //相机观察的目标，在这里表示：相机放在(0,0,-10)，镜头对准观察 (0,0,0)
  camera.setTarget( new Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;
SceneLoader.AppendAsync("http://10.0.15.116:5500/src/pages/TestBabyloneCom/sceneGltfs/jifang/", "jifang_0520.gltf", scene).then(function (scene) {
    // Create a default arc rotate camera and light. 
    scene.createDefaultCameraOrLight(true, true, true);

    // The default camera looks at the back of the asset.
    // Rotate the camera by 180 degrees to the front of the asset.
    scene.activeCamera.alpha += Math.PI;
    console.log("scene", scene.activeCamera);
});

// https://models.babylonjs.com/boombox.glb
};


/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: any) => {
  // console.log("onRender", scene);
};

export const SceneBabylon: FC<{}> = () => {
  useEffect(()=>{
    return onSceneReady(new Scene());
  });
  return <>
    <SceneComponent
      onSceneReady={onSceneReady}
      onRender={onRender} 
      antialias={undefined} 
      engineOptions={undefined} 
      adaptToDeviceRatio={undefined} 
      sceneOptions={undefined} 
    />
  </>;
};