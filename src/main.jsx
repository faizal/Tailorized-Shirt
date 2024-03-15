import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { fabric } from 'fabric';
import CanvasImageUploader from './fabric';
import ApplyMaterial from './mainMaterial';



const createDynamicTexture = (color) => {
  const canvas = document.createElement('canvas');
  const fabricCanvas = new fabric.Canvas(canvas, {
    backgroundColor: `#${color}`
  });
  fabricCanvas.renderAll();
  const dataURL = canvas.toDataURL();
  return dataURL;
};

function App() {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  const [updateTexture, setTexture] = useState();
  const [sendFrontTexture, setSendFrontTextrue] = useState();
  const [sendBackTexture, setSendBackTextrue] = useState();
  const [side, setSide] = useState(true);
  useEffect(()=>{
    setTexture(createDynamicTexture(materials.lambert1.color.getHexString()))
  },[])
  const ApplyFrontMaterial = (data) => {
    setSendFrontTextrue(data)
  };
  const ApplyBackMaterial = (data) => {
    setSendBackTextrue(data)
  };
  const Test =(data)=>{
    setTexture(data)
  }
  const ToggleSide = (x)=>{
    setSide(x||!side)
  }
  return (
    <div className="App"style={{ display: 'flex', flexDirection: 'row-reverse',justifyContent:'center',justifyItems:'center',alignItems:'center' }} >
      <ApplyMaterial Front={sendFrontTexture} Back={sendBackTexture} color={materials.lambert1.color.getHexString()} x={800}y={800} apply onCanvasChange={Test} />
      <Canvas camera={{ position: [0, 0, 1.2], fov: 75 }} style={{ width: '100%', height: '100vh' }}>
        <ambientLight />
        <directionalLight position={[0, 0, -2]} />
        <directionalLight intensity={0.5} position={[0, 0, 2]} />
        <Suspense fallback={null}>
          <MyMesh nodes={nodes} updateTexture={updateTexture} materials={materials} />
        </Suspense>
        <OrbitControls />
        <Environment preset="city" />
        <color args={['white']} attach={'background'} />
      </Canvas>
      {/* <div style={{ background: 'transparent', position: 'absolute', left: 0, top: 0, width: '442px', height: '100vh', overflow: 'visible' }}> */}
       {/* <div style={{display:'flex',flexDirection:'column',justifyItems:'center',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}> */}
            <div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'center',gap:'20px'}}>
                  <button style={{background:side?'black':'white',color:!side?'black':'white',border:'1px black solid',padding:'5px'}} onClick={()=>ToggleSide(true)}>Front </button>
                  <button style={{background:!side?'black':'white',color:side?'black':'white',border:'1px black solid',padding:'5px'}} onClick={()=>ToggleSide(false)}>Back </button>
              </div>
              <div style={{display:side?'block':'none'}}>
                  <CanvasImageUploader color={materials.lambert1.color.getHexString()} type={'Front'} x={400} y={400} onCanvasChange={ApplyFrontMaterial} />
                </div>
                <div style={{display:!side?'block':'none'}}>
                <CanvasImageUploader color={materials.lambert1.color.getHexString()} type={'Back'} x={400} y={400} onCanvasChange={ApplyBackMaterial} />
                </div>
              </div>
       {/* </div> */}
      </div>
    // </div>
  );
}

function MyMesh({ nodes,updateTexture, materials }) {
    let texture = useLoader(THREE.TextureLoader, updateTexture);
    // console.log(updateTexture)
    // if(updateTexture)
    materials.lambert1.map = texture;
    // console.log()
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, -1);

    const material = new THREE.MeshStandardMaterial({
      map: texture,  // Assign the loaded texture to the material's map property
      transparent: true,  // Enable transparency
    });
  return <mesh position={[0, 0, 0]} castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1}></mesh>;
}

export default App;
