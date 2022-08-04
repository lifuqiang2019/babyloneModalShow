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
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import '@babylonjs/loaders'
// import '@babylonjs/inspector'


const SceneBabylon: FC<{}> = () => {
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
    
    console.log("meshName", meshName, mesh)
  }

  const loadModal = (modalName: string) => {
    SceneLoader.AppendAsync(
      "/static/jf_jg/jifang/", 
      modalName, sceneRef.current).then(function (scene) {
        scene.activeCamera.alpha = Math.PI / 2;
        scene.activeCamera.beta = Math.PI / 6;
        scene.activeCamera.radius = 0.31;

        // 初始化遍历模型
        const clearMeshObj: any = {}
        const clearMeshArr = ["jgq_002", "jgq_001", "dlj_002", "dlj_001", "lqq_002", "lqq_001", "bgq_002", "bgq_001", "JF_Txmx_DianLi_Pipeline_002", "JF_Txmx_DianLi_Pipeline_001", "Jf_Jg_fqpz_005", "rk_002", "rk_001", "JG_Txmx_Xk_Rk_001", "JG_Txmx_Xk_bgq_001", "JG_Txmx_Xk_jgq_001", "JG_Txmx_Xk_Lqq_001", "JG_Txmx_Xk_dlj_001", "Jf_Jg_fqpz_003", "Jf_Jg_fqpz_001", "Jf_Jg_fqpz_002", "Jf_Jg_fqpz_004"]
        clearMeshArr.forEach(clearMesh => clearMeshObj[clearMesh] = clearMesh)
        scene.meshes.forEach(mesh => {
          mesh.actionManager = new ActionManager(scene)
          if(clearMeshObj[mesh.id]) mesh.isVisible = false
        })

        // 模型点击拾取
        scene.onPointerObservable.add(modelPick, PointerEventTypes.POINTERTAP)
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

export default SceneBabylon