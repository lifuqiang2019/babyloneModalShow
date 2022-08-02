import React, { FC, useEffect, useState, useRef } from "react";
import { 
  FreeCamera, 
  ArcRotateCamera, 
  UniversalCamera, 
  Camera, 
  Vector3, 
  HemisphericLight, 
  MeshBuilder, 
  SceneLoader, 
  Scene,
  ActionManager,
  PointerEventTypes
} from "@babylonjs/core";
import SceneComponent from "@components/SceneBabylone"; // uses above component in same directory
import '@babylonjs/loaders'
// import '@babylonjs/inspector'
import gsap from 'gsap';


const SceneBabylon: FC<{}> = () => {
  const cameraRef = useRef(null)
  const sceneRef = useRef(null)
  const canvasRef = useRef(null)
  const shows: any = useRef({ 
    "jg_03": false, 
    "jg_04": false }).current

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
  const modelPick = (e: any) => {
    // 1: 异常监控器, 2: 正常监控器, 3: 未开启监控器
    const JF_SXT_STATUS_MAP: any = {
      Jf_Sxt_001: 1,
      Jf_Sxt_004: 2,
      Jf_Sxt_003: 3,
      Jf_Sxt_002: 3,
    }
    const mesh = e.pickInfo.pickedMesh
    const meshName = mesh.name

    if(JF_SXT_STATUS_MAP[meshName]) {

    }
    
    if(!mesh.parent.name) return
    console.log("meshName", mesh.parent.name)
    if(shows[mesh.parent.name] !== undefined) {
      const position = mesh.parent.position
      const z = position.z + (!shows[mesh.parent.name] ? 0.014 : -0.014)
      gsap.to(position, { duration: 1.3, ease: "power2.out", z: z });
      shows[mesh.parent.name] = !shows[mesh.parent.name]
    }
  }

  const loadModal = (modalName: string) => {
    SceneLoader.AppendAsync(
      "/static/jf_jg/ddjg_e/", 
      modalName, sceneRef.current).then(function (scene) {
        scene.activeCamera.alpha = Math.PI / 2;
        scene.activeCamera.beta = Math.PI / 3;
        scene.activeCamera.radius = 0.135;

        scene.meshes.forEach(mesh => {
          mesh.actionManager = new ActionManager(scene)
        })

        // 模型点击拾取
        scene.onPointerObservable.add(modelPick, PointerEventTypes.POINTERTAP)
    });
  }

  useEffect(()=>{ 
    loadModal("jf_jg_e.gltf")
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

export default SceneBabylon