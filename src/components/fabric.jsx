import { useState } from "react"

export default function Fabric ({setSelect,setFabric}){
    const [active,setActive] = useState(0)
    const tabs = [
        "Included",
        "Premium",
        "Luxury",
        "Super Luxury",
    ]
    const fabrics = [
        { imagePath: "images/fabric/f1.jpg", onClick: () => setFabric("images/fabric/f1.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick xdl" },
        { imagePath: "images/fabric/f2.jpg", onClick: () => setFabric("images/fabric/f2.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f3.jpg", onClick: () => setFabric("images/fabric/f3.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f4.jpg", onClick: () => setFabric("images/fabric/f4.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f5.jpg", onClick: () => setFabric("images/fabric/f5.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f6.jpg", onClick: () => setFabric("images/fabric/f6.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f7.jpg", onClick: () => setFabric("images/fabric/f7.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f9.jpg", onClick: () => setFabric("images/fabric/f9.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f1.jpg", onClick: () => setFabric("images/fabric/f1.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f2.jpg", onClick: () => setFabric("images/fabric/f2.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f3.jpg", onClick: () => setFabric("images/fabric/f3.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f4.jpg", onClick: () => setFabric("images/fabric/f4.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f5.jpg", onClick: () => setFabric("images/fabric/f5.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f6.jpg", onClick: () => setFabric("images/fabric/f6.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f7.jpg", onClick: () => setFabric("images/fabric/f7.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f9.jpg", onClick: () => setFabric("images/fabric/f9.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" },
        { imagePath: "images/fabric/f8.jpg", onClick: () => setFabric("images/fabric/f8.jpg"), className: "tw_box overflow-hidden", tickClass: "xdltick" }
      ];
    return(<>
            <div id="popup1" style={{display:'block',overflow:"hidden",height:'100vh'}}  class="fadeIn modal-box a1">
                <header> <a onClick={()=>{setSelect(0)}} href="#" class="js-modal-close close"><img src="images/close.svg" /></a>
                <h3 className="overflow-hidden">fabric</h3>
                </header>
                <div class="modal-body">
                <div class="fab_box">
                                                
                <div id="tabs" class="fbtab">
                        <ul class="tbs_nav">
                                {
                                        tabs.map((e,i)=><li onClick={()=>setActive(i)} class={`tbs ${active === i?"ui-tabs-active":""}`}><a href={`#fragment-${i+1}`}>{e}</a></li>)
                                }
                        </ul>
                        <div id="fragment-1">
                        <div  class="fbc_box">
                                        {
                                        fabrics.map((e,i)=>{

                                               return <div onClick={e.onClick} class="tw_box overflow-hidden"><img src={e.imagePath} /><div class="xdltick"></div></div>
                                        })
                                        }
                                        
                                        </div>
                        </div>
                        <div id="fragment-2">
                        <div class="fbc_box">
                        <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick xdl"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f8.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f8.jpg" /><div class="xdltick"></div></div>
                                                </div> 
                        </div>
                        <div id="fragment-3">
                        <div class="fbc_box">
                        <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick xdl"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f8.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f8.jpg" /><div class="xdltick"></div></div>
                                                </div>   
                        </div>
                                <div id="fragment-4">
                        <div class="fbc_box">
                                                
                        <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick xdl"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f1.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f1.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f2.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f2.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f3.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f3.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f4.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f4.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f5.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f5.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f6.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f6.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f7.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f7.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f9.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f9.jpg" /><div class="xdltick"></div></div>
                                                <div onClick={()=>setFabric("images/fabric/f8.jpg")} class="tw_box overflow-hidden"><img src="images/fabric/f8.jpg" /><div class="xdltick"></div></div>
                                                </div> 
                        </div>
                </div>                              
                        
        </div>
</div>
</div>
    </>)
}