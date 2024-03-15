import { Environment, Gltf, OrbitControls, PerspectiveCamera, PresentationControls, Sphere, Text3D } from "@react-three/drei"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import { useEffect, useState } from "react";
const monogramPlaces = {
    outcollar:{
        position:[0.5,38.5,-9.02],
        rotation:[0.4,Math.PI,0],
    },
    collar:{
        position:[-2,37.5,-8.52],
        rotation:[0.3,0,0],
    },
    body:{
        position:[5,0,7.9] ,
        rotation:[-0,0.5,0]
    },
    cuff:{
        position:[12,-13.2,17],
        rotation:[-Math.PI/2+0.4,-0.3,1.05], 
    },
    pocket:{
        position:[-15,12,5.2],
         rotation:[0.65,-0.5,0.4],
    },
    placket:{
        position:[-2.6,-32,9.4],
         rotation:[0,0,0]
    },
    
}

const NewApp =({canvas,fabric, mono,cuff,withButtons, collar, monogram, pocket,whiteCuff,whiteCollar,studs,sedary,planket})=>{

    return(<>
        <Canvas gl={{preserveDrawingBuffer:true,antialias:true}} ref={canvas} style={{width:'100%',height:"100%"}}>
                <color args={['white']} attach={'background'}/>
                {/* <PresentationControls  maxPolarAngle={Math.PI/2} snap={false}> */}
                    <Model position={[0,0,0]} Lmono={mono} withButtons={withButtons} LwhiteCuff={whiteCuff} Lstuds={studs} Lplanket={planket} Lsedary={sedary} LwhiteCollar={whiteCollar} Lpocket={pocket} Lfabric={fabric} Lcuff={cuff} Lcollar={collar} Lmonogram={monogram}/>\
                {/* </PresentationControls> */}
                <OrbitControls enableZoom={true} enablePan={false} maxZoom={0.1} minZoom={0.2}/>
                <PerspectiveCamera makeDefault position={[0,0,120]} />
                <directionalLight castShadow position={[0,0,10]} intensity={0.5}/>
                {!fabric&&<Environment preset="city"/>}
                <mesh rotation={[-Math.PI/2,0,0]} position={[0,-35,0]} scale={80}>
                    <planeGeometry/>
                    <shadowMaterial transparent/>
                    {/* <meshBasicMaterial color={'red'}/> */}
                </mesh>
                <directionalLight position={[0,10,-10]} intensity={0.5}/>
                <directionalLight position={[20,-10,-10]} intensity={0.2}/>
                <directionalLight position={[-20,-10,-10]} intensity={0.2}/>
        </Canvas>
    </>)
}


const Model = ({Lstuds,Lmono,Lplanket,Lsedary,withButtons,LwhiteCuff,LwhiteCollar,Lfabric,Lpocket = 'left', Lcuff = ['ConvertibleSquared'], Lcollar = "Normal-3", Lmonogram = '',position})=>{
    let {scene,camera} = useThree()
    const [rightHand,setRightHand] = useState('ConvertibleSquaredRight')
    const [leftHand,setLeftHand] = useState('ConvertibleSquaredLeft')
    const [collar,setCollar] = useState('Normal-3')
    const hands = useGLTF('/models/hands.glb');
    const body = useGLTF('/models/body.glb');
    const collars = useGLTF('/models/Collars.glb');
    const button = useGLTF('/models/buttons.glb');
    const sedary = useGLTF('/models/sedary.glb');
    const middlePart = useGLTF('/models/middlePart.glb');
    const handsAssets = useGLTF('/models/handsAssets.glb');
    const qomash = useGLTF('/models/qomash2.glb');
    const pockectLeft = useGLTF('/models/pockectLeft.glb');
    const pockectRight = useGLTF('/models/pockectRight.glb');
    const wide = useGLTF('/models/collar_spread.glb');
    const semiWide = useGLTF("/models/collar_semi_spread.glb")
    const buttonLon = useGLTF('/models/buttonLon2.glb')
    const buttonTwo = useGLTF('/models/buttonTwo2.glb')
    const collarButton = useGLTF('/models/collarButton.glb')
    console.log(buttonTwo,'two')
    // console.log(hands,'hands')
    function getObjectsByNamePrefix(prefix,material2) {
        var matchingObjects = [];
    
        // Iterate through scene children
        scene.traverse(function (child) {
            if (child.name && child.name.startsWith(prefix)) {
                console.log(child.name)
                matchingObjects.push(child.name)
                child.material = material2
                // matchingObjects.push(child);
            }
        });
    
        return matchingObjects;
    }
    // console.log(getObjectsByNamePrefix("qomash"),'this is it')
    function ApplyMaterial (objects,material){
        console.log(objects)
        material.needsUpdate = true;
        material.side = THREE.DoubleSide;
       for(let element of objects){
        // console.log(element,'here')
        if(typeof element === 'string'){
            let mesh = scene.getObjectByName(element)
            console.log(mesh,element,'element')
            if(mesh)
            for(let data of mesh.children){
                let other = scene.getObjectByName(data.name)
                other.material = material
            }
        }else{
                if(element?.children)
                for(let child of element.children){
                    child.material = material
                    for(let element of child.children){
                        element.material = material
                    }
                }
            }
       }

    }   
    useEffect(()=>{
        // console.log(hands.nodes[`${Lcuff}Right`].material)
        camera.position.z = 120
    },[])

    let texture,texture2,texture3
    if(Lfabric){
        texture = useLoader(THREE.TextureLoader,Lfabric);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1.5, 1.5);
    }
    const material = new THREE.MeshPhongMaterial({
            map: Lfabric?texture:"", 
            transparent: true,
        });
    
    if(Lmonogram){
        console.log(Lmonogram)
        texture2 = useLoader(THREE.TextureLoader,Lmonogram);
        // texture2.wrapS = THREE.RepeatWrapping;
        // texture2.wrapT = THREE.RepeatWrapping;
        // texture2.repeat.set(0, 0);
    }
    const material2 = new THREE.MeshPhongMaterial({
            map: Lmonogram?texture2:"", 
            transparent: true,
        });

if(Lmono?.texture){
    console.log(Lmono?.texture)
    texture3 = useLoader(THREE.TextureLoader,Lmono?.texture);
    texture3.wrapS = THREE.RepeatWrapping;
    texture3.wrapT = THREE.RepeatWrapping;
    texture3.repeat.set(100, 100);
}
const material3 = new THREE.MeshPhongMaterial({
        map: Lmono?.texture?texture3:"", 
        transparent: true,
    });
        

    useEffect(()=>{
        getObjectsByNamePrefix(`button`,new THREE.MeshPhongMaterial({color:'white'}))
        if(!Lfabric)
        return
        // console.log(Lpocket,'lpocket')
        ApplyMaterial(["bodyBack","backsection","bodyFront","leftHand","rightHand",middlePart.scene,wide.scene,semiWide.scene],material)
        ApplyMaterial([button.scene,buttonTwo.scene,buttonLon.scene],new THREE.MeshPhongMaterial({color:'white'}))
        ApplyMaterial([handsAssets.scene],material)
        // ApplyMaterial([`${Lcuff[0]}Right`,`${Lcuff[0]}Left`],material)
        // ApplyMaterial([qomash.scene],new THREE.MeshPhongMaterial({color:'red'}))

        if(Lcuff)
        ApplyMaterial([`${Lcuff[0]}Right`,`${Lcuff[0]}Left`],material)
        
        if(Lcollar !== 'SemiWide' || Lcollar !== 'Wide')
        ApplyMaterial([Lcollar],material)
        if(Lcollar)
        ApplyMaterial(['wing'],material)

        if(Lpocket === 'left')
        ApplyMaterial([pockectLeft.scene],material)
        else if(Lpocket === 'both')
        ApplyMaterial([pockectLeft.scene,pockectRight.scene],material)

    
            if(Lsedary)
            ApplyMaterial([sedary.scene],material)

        if(LwhiteCollar)
        ApplyMaterial([Lcollar,'Normal-3','wing',wide.scene,semiWide.scene],new THREE.MeshPhongMaterial({color:'white',side:THREE.DoubleSide}))

        if(LwhiteCuff)
        ApplyMaterial([`${Lcuff[0]}Right`,`${Lcuff[0]}Left`],new THREE.MeshPhongMaterial({color:'white'}))
    },[Lfabric,Lcollar,Lcuff,Lmonogram,LwhiteCollar,LwhiteCuff,Lsedary,Lstuds])
    useEffect(()=>{
        // ApplyMaterial([qomash.scene],material2)
        // ApplyMaterial(['qomash23'],material2)
        getObjectsByNamePrefix("qomash",material2)
        console.log('wors',material2)
    },[Lmonogram,Lcuff])
    const Frensh = ["FrenchSquaredRight",'FrenchCurvedRight','FrenchAngledRight','ConvertibleSquaredRight']
    const Convertible = ["ConvertibleCurvedRight",'ConvertibleAngledRight','ConvertibleSquaredRight','oneButtonAngledRight',"oneButtonCurvedRight","oneButtonSquareRight"]
    const OneButton = ['oneButtonAngledRight',"oneButtonCurvedRight","oneButtonSquareRight"]
    useEffect(()=>{
        console.log(Lcuff,'ssss')
    },[Lcuff])
    useEffect(()=>{
        console.log(Lcollar,'LCOLLAR')
    },[Lcollar])
    useEffect(()=>{
        console.log('lstud',Lstuds)
            Array(4).fill(0).map((e,i)=>{
                if(Lstuds)
                getObjectsByNamePrefix(`button${i+2}`,new THREE.MeshPhongMaterial({color:'black'}))
                else
                getObjectsByNamePrefix(`button${i+2}`,new THREE.MeshPhongMaterial({color:'white'}))
            })
    },[Lstuds])
    // return
    return(<>   
            <group position={position}>
                
                <mesh castShadow receiveShadow><primitive object={body.scene}/></mesh>
                {Lcuff&&<mesh castShadow receiveShadow><primitive object={hands.nodes[`${Lcuff[0]}Right`]}/></mesh>}
                {Lcuff&&<mesh castShadow receiveShadow><primitive object={hands.nodes[`${Lcuff[0]}Left`]}/></mesh>}
                <mesh castShadow receiveShadow><primitive object={collars.nodes[`wing`]}/></mesh>
                {
                    Array(8).fill(0).map((e,i)=>{
                        if(Lplanket !== 'state3')
                        return <mesh castShadow receiveShadow><primitive object={button.nodes[`button${i}`]}/></mesh>
                    })
                }
                {Frensh.includes(`${Lcuff&&Lcuff[1] === "none"?Lcuff[0]:""}Right`)&&<>
                    <mesh castShadow receiveShadow><primitive object={button.nodes[`frenshButton3`]}/></mesh>
                    <mesh castShadow receiveShadow><primitive object={button.nodes[`frenshButton4`]}/></mesh>
                    <mesh castShadow receiveShadow><primitive object={button.nodes[`frenshButton1`]}/></mesh>
                    <mesh castShadow receiveShadow><primitive object={button.nodes[`frenshButton2`]}/></mesh>
                </>}
                {Convertible.includes(`${Lcuff&&Lcuff[1] === "none"?Lcuff[0]:""}Right`)&&<>
                    <mesh castShadow receiveShadow><primitive object={buttonLon.scene}/></mesh>
                    {/* <mesh castShadow receiveShadow><primitive object={button.nodes[`frenshButton4`]}/></mesh> */}
                </>}
                {OneButton.includes(`${Lcuff&&Lcuff[1] === "two"?Lcuff[0]:""}Right`)&&<>
                    <mesh castShadow receiveShadow><primitive object={buttonTwo.scene}/></mesh>
                </>}
                {Lplanket === 'state2' || Lplanket === 'state3'?<mesh castShadow receiveShadow><primitive object={middlePart.scene}/></mesh>:null}
                <mesh castShadow receiveShadow><primitive object={handsAssets.scene}/></mesh>
                <mesh castShadow receiveShadow><primitive object={handsAssets.scene}/></mesh>
                {Lsedary&&<mesh castShadow receiveShadow><primitive object={sedary.scene}/></mesh>}
                {Lplanket !== 'state3'&&<mesh castShadow receiveShadow><primitive object={qomash.scene}/></mesh>}
                {
                    Lpocket === 'both'?<>
                    <mesh castShadow receiveShadow><primitive object={pockectLeft.scene}/></mesh>
                    <mesh castShadow receiveShadow><primitive object={pockectRight.scene}/></mesh>
                    </>:
                    Lpocket === 'left'?<mesh castShadow receiveShadow><primitive object={pockectLeft.scene}/></mesh>
                    :null
                }
                {
                    Lcollar === 'SemiWide'?<mesh scale={100} castShadow receiveShadow><primitive object={semiWide.scene}/></mesh>:
                    Lcollar === 'Wide'?<mesh scale={100} castShadow receiveShadow><primitive object={wide.scene}/></mesh>:
                    Lcollar === 'HiddenButtonDown'?  <mesh scale={1} castShadow receiveShadow><primitive object={collars.nodes["HiddenButtonDown"]}/></mesh>:
                    Lcollar === 'Mandarin'?  <mesh scale={1} castShadow receiveShadow><primitive object={collars.nodes["Mandarin"]}/></mesh>:
                    Lcollar === 'SemiWide-3'?  <mesh scale={1} castShadow receiveShadow><primitive object={collars.nodes["Normal-3"]}/></mesh>:
                    Lcollar === 'Normal-3'?  <mesh scale={1} castShadow receiveShadow><primitive object={collars.nodes["Normal-3"]}/></mesh>:null
                }
                {Lcollar === 'SemiWide-3'&&<mesh castShadow receiveShadow><primitive object={collarButton.scene}/></mesh>}
            </group>
            
            {Lmono&&<group scale={Lmono?.location !== 'placket'?1:0.5} position={monogramPlaces[Lmono?.location || 'collar'].position} rotation={monogramPlaces[Lmono?.location || 'collar'].rotation}>
               {Lmono?.l1&&<Text3D material={material3} position={[0,0,0]} scale={[1,1,1]} font="/helvetiker_regular.typeface.json">
                    {Lmono.l1.toUpperCase()}
                </Text3D>}
                {Lmono?.l2&&<Text3D  material={material3} position={[1,0,0]} scale={[1,1,1]} font="/helvetiker_regular.typeface.json">
                    {Lmono.l2.toUpperCase()}
                    
                </Text3D>}
                {Lmono?.l3&&<Text3D material={material3} position={[2,0,0]} scale={[1,1,1]} font="/helvetiker_regular.typeface.json">
                    {Lmono.l3.toUpperCase()}
                </Text3D>}
            </group>}
    </>)
}


export default NewApp