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
    
    if(mesh.parent.name === "jg_03") {
      const position = mesh.parent.position
      const z = position.z + (!shows[mesh.parent.name] ? 0.014 : -0.014)
      gsap.to(position, { duration: 1.3, ease: "power2.out", z: z });
      shows[mesh.parent.name] = !shows[mesh.parent.name]
    }
  }

  const loadModal = (modalName: string) => {
    SceneLoader.AppendAsync(
      "/static/jf_jg/mhxxds_jz_001/", 
      modalName, sceneRef.current).then(function (scene) {
        scene.activeCamera.alpha = Math.PI / 2;
        scene.activeCamera.beta = Math.PI / 3;
        scene.activeCamera.radius = 10;

        scene.meshes.forEach(mesh => {
          mesh.actionManager = new ActionManager(scene)
        })

        // 模型点击拾取
        scene.onPointerObservable.add(modelPick, PointerEventTypes.POINTERTAP)
    });
  }

  useEffect(()=>{ 
    loadModal("mhxxds_jz_001.gltf");
    
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