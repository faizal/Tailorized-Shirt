
import { useEffect, useRef, useState } from "react"
import Collar from "./components/collar"
import Cuff from "./components/cuff"
import Fabric from "./components/fabric"
import Monogram from "./components/monogram"
import Pocket from "./components/pocket"
import WhiteAndCuff from "./components/whiteAndCuff"
import Buttonhole from "./components/buttonhole"
import Tuxedo from "./components/tuxedo"
import NewApp from "./newApp"
import Placket from "./components/placket"
import { motion } from "framer-motion"
import Loader from "./components/loading"
import useFetch from "./components/useFetch"
import axios from "axios"
export default function UI (){

        axios.get("https://tailorized.ai/3d/cfc/app.cfc?wsdl&method=populateShirtingFabricsPath&categoryName=Luxury", {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded','Cookie': 'CFID=1399596; CFTOKEN=83115218' }
            })
            .then((response) => {
                console.log(JSON.stringify(response.data), 'data');
            })
            .catch((error) => {
                console.log(error, 'error');
            });
            

        let canvas = useRef()
       const [price,setPrice] = useState(99)
        const setTotalPrice = (money)=>{
                setPrice(money+price)
        }
        const [imgs,setImgs] = useState(null) 
        const [addition,setAddition] = useState(false)
        const [select,setSelect] =  useState(0)
        const [fabric,setFabric] = useState()
        const [collar,setCollar] = useState()
        const [cuff,setCuff] = useState()
        const [whiteCuff,setWhiteCuff] = useState(false)
        const [whiteCollar,setWhiteCollar] = useState(false)
        const [studs,setStuds] = useState(false)
        const [sedary,setSedary] = useState(false)
        const [planket,setPlancket] = useState('state2')
        const [withButtons,setWithButtons] = useState(true)
        const [mono,setMono] = useState({location:'collar',texture:'images/monogram-black.png'})
        useEffect(()=>{console.log(planket,'planket')},[planket])
        const [pocket,setPocket] = useState('left')
        
        const setTheModel = (text,type)=>{
                let func = ()=>{}
                switch (type) {
                        case 'collar':
                                func = setCollar
                                break;
                                case 'cuff':
                                func = setCuff
                                break;
                                case 'mono':
                                func = setMono
                                break;
                        }
                        
                        func(null)
                        console.log(text,'here')
                        setTimeout(() => {
                                func(text)  
                        }, 100);
                }
                
                const [monogram,setMonogram] = useState()
        useEffect(()=>{
                // let img1 = 'images/shirt-folded.png'
                let img1 = fabric
                let img2
                setTimeout(() => {
                if(canvas.current)
                 img2 = canvas.current.toDataURL()
                 setImgs([img1,img2])
                }, 200);
        },[fabric,collar,cuff,whiteCollar,whiteCuff,studs,planket,sedary])
    


    return(<>
    <div className="h-screen w-screen overflow-hidden fadeIn">
                <motion.div className=" h-full w-full bg-transparent absolute left-0 top-1 " >
                        {
                                select ===1?<Fabric setTotalPrice={setTotalPrice} setFabric={setFabric} setSelect={setSelect}/>:
                                select === 2?<Collar setTotalPrice={setTotalPrice} setTheModel={setTheModel}  setSelect={setSelect}/>:
                                select === 3?<Cuff setTotalPrice={setTotalPrice} setTheModel={setTheModel}  setSelect={setSelect}/>:
                                select === 4?<Monogram setTotalPrice={setTotalPrice} setTheModel={setTheModel} setSelect={setSelect}/>:
                                select === 5?<Pocket setTotalPrice={setTotalPrice} setPocket={setPocket} setSelect={setSelect}/>:
                                select === 6?<WhiteAndCuff setTotalPrice={setTotalPrice} setWhiteCuff={setWhiteCuff} setWhiteCollar={setWhiteCollar} setSelect={setSelect}/>:
                                select === 7?<Buttonhole setTotalPrice={setTotalPrice} setMonogram={setMonogram} setSelect={setSelect}/>:
                                select === 8?<Tuxedo setTotalPrice={setTotalPrice} setStuds={setStuds} setSedary={setSedary} setSelect={setSelect}/>:
                                select === 9?<Placket setWithButtons={setWithButtons} setTotalPrice={setTotalPrice} setPlancket={setPlancket} setSelect={setSelect}/>:
                                null
                        }
                </motion.div>
                <div className="bg-white w-screen h-screen overflow-hidden">
                        <div class="sh_img_box_logo"><div class="logo" style={{width:'352px'}}><a href="index.html"><img src="images/tailorzed_logo.svg"  /></a></div></div>
                        <div className="list_wrap content mCustomScrollbar pb-32" >
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(1)} href="#" data-modal-id="popup1" style={{display:'flex'}} className="mlink js-open-modal b1"><img style={{width:'60px'}} src="images/fabric-main.svg"  /><span className="font-semibold text-[0.8rem] overflow-hidden">Fabric</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(2)} href="#" data-modal-id="popup3" style={{display:'flex'}} className="mlink js-open-modal b3"><img style={{width:'75px'}} src="images/collar-main.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Collar</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(3)} href="#" data-modal-id="popup4" style={{display:'flex'}} className="mlink js-open-modal b4"><img style={{width:'75px'}} src="images/cuff-main.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Cuff</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(4)} href="#" data-modal-id="popup11" style={{display:'flex'}} className="mlink js-open-modal b11"><img style={{width:'60px'}} src="images/monogram-circle.jpg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Monogram</span></a></div>
                                <div onClick={()=>setAddition(!addition)} className="lst_box fadeIn showBtn"><a href="#" style={{display:'flex'}}  className="mlink js-open-modal b10"><img style={{width:'60px'}} src={!addition?"images/shirt-main-1.svg":"images/shirt-main-1-svg.png"}/><span>ADDITIONAL OPTIONS</span></a></div>}
                                {addition&&<div className="">
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(5)} href="#" data-modal-id="popup8" style={{display:'flex'}} className="mlink js-open-modal b8"><img style={{width:'60px'}} src="images/yes-pocket.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Pocket</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(6)} href="#" data-modal-id="popup12" style={{display:'flex'}} className="mlink js-open-modal b12"><img style={{width:'60px'}} src="images/white-collar-cuff.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">White collar & cuff</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(7)}href="#" data-modal-id="popup10" style={{display:'flex'}} className="mlink js-open-modal b10"><img style={{width:'60px'}} src="images/thread-main.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Buttonhole Stitch</span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(8)} href="#" data-modal-id="popup5" style={{display:'flex'}} className="mlink js-open-modal b5"><img style={{width:'60px'}} src="images/tuxedo3.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Tuxedo </span></a></div>
                                <div className="lst_box fadeIn"><a onClick={()=>setSelect(9)} href="#" data-modal-id="popup2" style={{display:'flex'}} className="mlink js-open-modal b2"><img style={{width:'60px'}} src="images/placket-main.svg" /><span className="font-semibold text-[0.8rem] overflow-hidden">Placket</span></a></div>
                                        {/* <div className="lst_box"><a href="#" data-modal-id="popup7" style={{display:'flex'}} className="mlink js-open-modal b7"><img src="images/yes-back-vent.svg" /><span>back Pleats</span></a></div> */}
                                </div>}
     
                        </div>
                        <div className="bg-white w-[50vw] h-full float-left overflow-hidden lg:ml-32">
                                <NewApp mono={mono} withButtons={withButtons} canvas={canvas} planket={planket} studs={studs} sedary={sedary} whiteCuff={whiteCuff} whiteCollar={whiteCollar} pocket={pocket} fabric={fabric} cuff={cuff} collar={collar} monogram={monogram} />
                        </div>
                        <div class="sh_txt_box overflow-hidden">
                                <div class="sh_txt_box_hed_mdm">Dress Shirts</div>
                                <div class="sh_txt_box_hed overflow-hidden">${price}</div>
                                <div class="sh_txt_box_btn" ><i class="fa fa-shopping-cart"></i>Add to Cart</div>
{/* <div class="more-product"> <img src={imgs[0]}/></div> */}
                                {imgs&&<> 
                                <div class="more-product"> <img src={imgs[0]} /> </div>
                                <div class="more-product"> <img src={imgs[1]} /> </div></>}

                                {/* <a href="" class="zoom_btn"><img src="images/zoom-in.png" /></a> */}
                                <div class="clr"></div>
                        </div>
                </div> 
        </div>
        </>)
}