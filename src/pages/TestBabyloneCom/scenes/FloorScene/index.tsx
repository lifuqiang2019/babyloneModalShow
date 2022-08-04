import React, { FC, useEffect, useState, useRef } from "react";
import { 
  FreeCamera, 
  ArcRotateCamera, 
  UniversalCamera, 
  Camera, 
  Vector3, 
  HemisphericLight, // 后置灯光
  PointLight, // 点光源
  DirectionalLight, // 平行光
  Color3, // 颜色
  SpotLight, // 聚光灯
  Texture, // 纹理
  ShadowGenerator, // 阴影
  MeshBuilder, // 网格生成器
  Mesh, // 网格
  StandardMaterial, // 材质
  SceneLoader, 
  Scene,
  ActionManager,
  PointerEventTypes
} from "@babylonjs/core";
import SceneComponent from "@components/SceneBabylone"; // uses above component in same directory
import '@babylonjs/loaders';
// import '@babylonjs/inspector';
import gsap from 'gsap';

const FloorScene: FC<{}> = () => {
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
    "mhxxds_jz_001.gltf": modalMainRef.current, 
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
    const light = new HemisphericLight("Hemi0", new Vector3(0, 1, 0), scene);
    // const light0 = new DirectionalLight("DirectionalLight", new Vector3(0, -1, 0), scene);
    
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    light.intensity = 0.7;
    
    const light00 = new SpotLight("*spot00", new Vector3(-30, 20, -10), new Vector3(0, -1, 0.3), 1.2, 24, scene);
    const shadowGenerator = new ShadowGenerator(1024, light00);
    // // shadow
    // shadowGenerator.useVarianceShadowMap = true;
    shadowGenerator.getShadowMap().renderList.push(scene.getMeshByName("jg_03"));
    shadowGenerator.usePoissonSampling = true;
    // light0.diffuse = new Color3(0, 0, 0);
    // light0.specular = new Color3(0, 0, 0);
    scene.createDefaultCamera(true, true, true);

    sceneRef.current = scene
    cameraRef.current = camera
    canvasRef.current = canvas
  };

  const onRender = (scene: any) => {};
  const modelPick = (e: any) => {
    const mesh = e.pickInfo.pickedMesh
    const meshName = mesh.parent.parent.name
    // 下钻
    goNextScene(meshName)
  }

  const goNextScene = (meshName: string) => {
    const scene = sceneRef.current
    const cameraParams = scene.activeCamera
    console.log("all models", meshName)
    switch (meshName) {
      case 'mhxxds_jz_b_001':
          loadMap['mhxxds_jz_001.gltf'].removeAllFromScene()
          loadMap["mhxxds_nbfc_001.gltf"].addAllToScene()
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", alpha: Math.PI / 2 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", beta: Math.PI / 3 });
          gsap.to(cameraParams, { duration: 1.3, ease: "power2.out", radius: 3 });
        break;
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
      scene.activeCamera.radius = 10;

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

export default FloorScene;