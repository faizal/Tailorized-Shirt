import { useEffect, useState } from "react"


export default function Monogram ({setSelect,setTheModel}){
  const [l1,setL1] = useState()
  const [l2,setL2] = useState()
  const [l3,setL3] = useState()
  const [location,setLocation] = useState('collar')
  const [texture,setTexture] = useState('images/monogram-black.png')
  let object = {}
  object.texture = texture
  object.location = location
  useEffect(()=>{
  
    if(l1)
    object.l1 = l1
    if(l2)
    object.l2 = l2
    if(l3)
    object.l3 = l3
    
    object.texture = texture
    object.location = location

    setTheModel(object,'mono')
  },[l1,l2,l3,texture,location])
    return(<>
      <div id="popup11" style={{display:'block',overflow:"hidden",height:'100vh'}}   class="fadeIn modal-box a11">
  <header> <a onClick={()=>{setSelect(0)}} href="#" class="js-modal-close close"><img src="images/close.svg" /></a>
    <h3 className="overflow-hidden">Monogram</h3>
  </header>
  <div class="modal-body">
  <div class="content mCustomScrollbar" id="content-1">
<div class="mon_box" >
<div class="mono_hed">Monogram Text</div>
<div class="mono_itm"><input onChange={(e)=>setL1(e.target.value)} maxLength={1} class="fld_stl" name="" type="text" /></div>
<div class="mono_itms"><input onChange={(e)=>setL2(e.target.value)} maxLength={1} class="fld_stl" name="" type="text" /></div>
<div class="mono_itm"><input onChange={(e)=>setL3(e.target.value)} maxLength={1} class="fld_stl" name="" type="text" /></div>
<div class="clr"></div>
</div>

<div class="mon_box" >
<div class="mono_hed">Locations</div>
<div class="select">
    <select onChange={(e)=>setLocation(e.target.value)} name="slct" id="slct">
      <option >Choose an Locations</option>
        <option value="cuff">Cuff</option>
        <option value="body">Body</option>
        <option value="pocket">Pocket / Chest</option>
        <option value="placket">Bottom Placket</option>
        <option value="collar">Inner Collar</option>
        <option value="outcollar">Outer Collar</option>
    </select>
  </div>
{/* </div> */}
{/* <div class="clr"></div> */}
</div>

{/* <div class="mon_box">
<div class="mono_hed">Monogram Style</div>
<div class="mono_itm overflow-hidden"><img src="images/monostl1.png" /><div class="xdltick13"></div></div>
<div class="mono_itms overflow-hidden"><img src="images/monostl2.png" /><div class="xdltick13"></div></div>
<div class="mono_itm overflow-hidden"><img src="images/monostl3.png" /><div class="xdltick13"></div></div>
<div class="clr"></div>
</div> */}

<div class="mon_box">
<div class="mono_hed">Monogram Color</div>
<div onClick={()=>{
  setTexture("images/monogram-blue.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-blue.png" /><div class="xdltick11"></div> Blue</div>
<div onClick={()=>{
  setTexture("images/monogram-light-blue.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-light-blue.png" /><div class="xdltick11"></div>Light blue</div>
<div onClick={()=>{
  setTexture("images/monogram-brown.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-brown.png" /><div class="xdltick11"></div>Brown</div>
<div onClick={()=>{
  setTexture("images/monogram-gold.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-gold.png" /><div class="xdltick11"></div>Gold </div>
<div onClick={()=>{
  setTexture("images/monogram-white.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-white.png" /><div class="xdltick11"></div>White</div>
<div onClick={()=>{
  setTexture("images/monogram-gray.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-gray.png" /><div class="xdltick11"></div>Gray</div>
<div onClick={()=>{
  setTexture("images/monogram-black.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-black.png" /><div class="xdltick11"></div>Black</div>
<div onClick={()=>{
  setTexture("images/monogram-navy.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-navy.png" /><div class="xdltick11"></div> Navy Blue</div>
<div onClick={()=>{
  setTexture("images/monogram-green.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-green.png" /><div class="xdltick11"></div>Green</div>
<div onClick={()=>{
  setTexture("images/monogram-red.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-red.png" /><div class="xdltick11"></div>Red</div>
<div onClick={()=>{
  setTexture("images/monogram-dark-red.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-dark-red.png" /><div class="xdltick11"></div>Dark Red</div>
<div onClick={()=>{
  setTexture("images/monogram-lavender.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-lavender.png" /><div class="xdltick11"></div>Lavender</div>
<div onClick={()=>{
  setTexture("images/monogram-light-pink.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-light-pink.png" /><div class="xdltick11"></div>Light Pink</div>
<div onClick={()=>{
  setTexture("images/monogram-pink.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-pink.png" /><div class="xdltick11"></div>Pink</div>
<div onClick={()=>{
  setTexture("images/monogram-orange.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-orange.png" /><div class="xdltick11"></div>Orange</div>
<div onClick={()=>{
  setTexture("images/monogram-purple.png")
}} class="bhs_item overflow-hidden"><img src="images/monogram-purple.png" /><div class="xdltick11"></div>Purple</div>



</div>
</div>
  </div>
</div>
    </>)
}