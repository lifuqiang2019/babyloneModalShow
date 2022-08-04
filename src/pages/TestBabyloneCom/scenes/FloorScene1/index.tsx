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
import '@babylonjs/loaders';
// import '@babylonjs/inspector'
import gsap from 'gsap';


const FloorScene1: FC<{}> = () => {
  const cameraRef = useRef(null)
  const sceneRef = useRef(null)
  const canvasRef = useRef(null)
  const shows: any = useRef({ "jg_03": false }).current
  const modalMainRef = useRef(null)
  const modalFloorOneRef = useRef(null)
  const modalFloorTwoRef = useRef(null)
  const modalcabinetOneRef = useRef(null)
  const modalcabinetTwoRef = useRef(null)
  const modalcabinetThreeRef = useRef(null)
  const modalcabinetFourRef = useRef(null)
  const modalcabinetFiveRef = useRef(null)
  const loadMap: any = {
    // "mhxxds_jz_001.gltf": modalMainRef.current, 
    "mhxxds_nbfc_001.gltf": modalFloorOneRef.current, 
    "mhxxds_jgq_001.gltf": modalFloorTwoRef.current,
    "jf_jg_a.gltf": modalcabinetOneRef.current,
    "jf_jg_b.gltf": modalcabinetTwoRef.current,
    "jf_jg_c.gltf": modalcabinetThreeRef.current,
    "jf_jg_d.gltf": modalcabinetFourRef.current,
    "jf_jg_e.gltf": modalcabinetFiveRef.current
  }
  const pathMap: any = {
    "jf_jg_a.gltf": "ddjg_a",
    "jf_jg_b.gltf": "ddjg_b",
    "jf_jg_c.gltf": "ddjg_c",
    "jf_jg_d.gltf": "ddjg_d",
    "jf_jg_e.gltf": "ddjg_e",
    "mhxxds_jz_001.gltf": "mhxxds_jz_001",
    "mhxxds_nbfc_001.gltf": "mhxxds_nbfc_001", 
    "mhxxds_jgq_001.gltf": "mhxxds_jgq_001",
  }

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
    const meshName = mesh.parent.parent.name
    
    if(mesh.parent.name === "jg_03") {
      const position = mesh.parent.position
      const z = position.z + (!shows[mesh.parent.name] ? 0.014 : -0.014)
      gsap.to(position, { duration: 1.3, ease: "power2.out", z: z });
      shows[mesh.parent.name] = !shows[mesh.parent.name]
    }
    // console.log("meshName", meshName, mesh)
    // goNextScene(meshName)
  }

  const goNextScene = (meshName: string) => {
    const scene = sceneRef.current
    const cameraParams = scene.activeCamera
    console.log("all models", meshName)
    switch (meshName) {
      case 'mhxxds_nb_jg_001':
          loadMap["mhxxds_nbfc_001.gltf"].removeAllFromScene()
          loadMap["mhxxds_jgq_001.gltf"].addAllToScene()
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", alpha: Math.PI / 2 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", beta: Math.PI / 3 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", radius: 2 });
          break;
      case 'mhxxds_jgq_jg_001':
          loadMap["mhxxds_jgq_001.gltf"].removeAllFromScene()
          loadMap["jf_jg_a.gltf"].addAllToScene()
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", alpha: Math.PI / 2 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", beta: Math.PI / 3 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", radius: 0.135 });
          break;
      default:
        break;
    }
  }

  const colllectionModal = (modal: any, name: string) => {
    loadMap[name] = modal
    if(name == "mhxxds_jz_001.gltf") {
      modal.addAllToScene()
    }
  }

  const loadAssetsModal = (modalName: string) => {
    SceneLoader.LoadAssetContainer(`/static/jf_jg/${pathMap[modalName]}/`, modalName, sceneRef.current, function (container) {
      const scene = sceneRef.current
      scene.activeCamera.alpha = Math.PI / 2;
      scene.activeCamera.beta = Math.PI / 3;
      scene.activeCamera.radius = 2;

      const meshes = container.meshes;
      const materials = container.materials;
      scene.meshes.forEach((mesh: any) => {
        mesh.actionManager = new ActionManager(scene)
      })

      // 模型点击拾取
      scene.onPointerObservable.add(modelPick, PointerEventTypes.POINTERTAP)
      colllectionModal(container, modalName)
    })
  }

  const loadModal = (modalName: string) => {
    SceneLoader.AppendAsync(
      "/static/jf_jg/mhxxds_nbfc_001/", 
      modalName, sceneRef.current).then(function (scene) {
        scene.activeCamera.alpha = Math.PI / 2;
        scene.activeCamera.beta = Math.PI / 3;
        scene.activeCamera.radius = 2;

        scene.meshes.forEach(mesh => {
          mesh.actionManager = new ActionManager(scene)
        })

        // 模型点击拾取
        scene.onPointerObservable.add(modelPick, PointerEventTypes.POINTERTAP)
    });
  }

  useEffect(()=>{ 
    loadModal("mhxxds_nbfc_001.gltf");
    
  }, []);

  useEffect(()=>{
    Object.keys(loadMap).forEach(map => {
      loadAssetsModal(map)
    })
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

export default FloorScene1;