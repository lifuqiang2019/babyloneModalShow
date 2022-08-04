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
  const shows: any = useRef({ "jg_03": false }).current

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
    const mesh = e.pickInfo.pickedMesh
    const meshName = mesh.name
    
    if(!mesh.parent || !mesh.parent.name) return
    console.log("meshName", mesh.parent.name)
    if(shows[mesh.parent.name] !== undefined) {
      const position = mesh.parent.position
      const z = !shows[mesh.parent.name] ? position.z + 0.014 : 0
      gsap.to(position, { duration: 1.3, ease: "power2.out", z: z });
      shows[mesh.parent.name] = !shows[mesh.parent.name]
      otherModalInit(mesh.parent.name)
      activeMesh(mesh.parent.name)
    }
  }

  const activeMesh = (name: string) => {
    const meshStatus = shows[name]
    console.log("当前激活mesh", name, meshStatus)
  }

  const otherModalInit = (name: string) => {
    const scene = sceneRef.current
    Object.keys(shows).forEach(modalName => {
      if(name !== modalName && shows[modalName] == true) {
        const Nodes = scene.getNodes()
        Nodes.forEach(mesh => {
          if(mesh.name === modalName) {
            gsap.to(mesh.position, { duration: 1.3, ease: "power2.out", z: 0 });
          }
        })
        shows[modalName] = false
      } 
    })
  }

  const loadModal = (modalName: string) => {
    SceneLoader.AppendAsync(
      "/static/jf_jg/ddjg_c/", 
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
    loadModal("jf_jg_c.gltf")
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