import React, { FC, useEffect, useState, useRef } from "react";
import { FreeCamera, ArcRotateCamera, UniversalCamera, Camera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, Scene } from "@babylonjs/core";
import SceneComponent from "@components/SceneBabylone"; // uses above component in same directory
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import '@babylonjs/loaders'
// import '@babylonjs/inspector'


export const SceneBabylon: FC<{}> = () => {
  const cameraRef = useRef(null)
  const sceneRef = useRef(null)
  const canvasRef = useRef(null)

  const onSceneReady = (scene: Scene) => {
    // scene.debugLayer.show({
    //   embedMode: true,
    // });
    const canvas = scene.getEngine().getRenderingCanvas();
    const camera = new FreeCamera("FreeCamera", new Vector3(0, 0, -1), scene);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    light.intensity = 0.7;
    scene.createDefaultCamera(true, true, true);

    sceneRef.current = scene
    cameraRef.current = camera
    canvasRef.current = canvas
  };

  const onRender = (scene: any) => {};

  const loadModal = (modalName) => {
    SceneLoader.AppendAsync(
      "http://10.0.15.116:5500/src/pages/TestBabyloneCom/sceneGltfs/jifang/", 
      modalName, sceneRef.current).then(function (scene) {
        scene.activeCamera.alpha = Math.PI / 2;
        scene.activeCamera.beta = Math.PI / 6;
        scene.activeCamera.radius = 0.31;
    });
  }

  useEffect(()=>{ 
    loadModal("jifang_0520.gltf")
  }, []);

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
}