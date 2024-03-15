

const Buttonhole = ({setSelect,setMonogram})=>{


    return(<>
    <div id="popup10" class="modal-box a10 fadeIn">
            <header> <a onClick={()=>{setSelect(0)}} href="#" class="js-modal-close close"><img src="images/close.svg" /></a>
                <h3 className="overflow-hidden font-bold">Buttonhole Stitch</h3>
            </header>
            <div class="modal-body">
            <div class="content mCustomScrollbar" id="content-1">

            <div className="w-full my-2 text-center" >
                    <span className="w-full text-center text-black uppercase font-semibold text-sm">+ $10 </span>
            </div>  
            <div
                onClick={()=>{setMonogram("images/monogram-blue.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-blue.png" /><div class="xdltick11"></div> Blue</div>
            <div
                onClick={()=>{setMonogram("images/monogram-light-blue.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-light-blue.png" /><div class="xdltick11"></div>Light blue</div>
            <div
                onClick={()=>{setMonogram("images/monogram-brown.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-brown.png" /><div class="xdltick11"></div>Brown</div>
            <div
                onClick={()=>{setMonogram("images/monogram-gold.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-gold.png" /><div class="xdltick11"></div>Gold </div>
            <div
                onClick={()=>{setMonogram("images/monogram-white.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-white.png" /><div class="xdltick11"></div>White</div>
            <div
                onClick={()=>{setMonogram("images/monogram-gray.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-gray.png" /><div class="xdltick11"></div>Gray</div>
            <div
                onClick={()=>{setMonogram("images/monogram-black.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-black.png" /><div class="xdltick11"></div>Black</div>
            <div
                onClick={()=>{setMonogram("images/monogram-navy.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-navy.png" /><div class="xdltick11"></div> Navy Blue</div>
            <div
                onClick={()=>{setMonogram("images/monogram-green.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-green.png" /><div class="xdltick11"></div>Green</div>
            <div
                onClick={()=>{setMonogram("images/monogram-red.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-red.png" /><div class="xdltick11"></div>Red</div>
            <div
                onClick={()=>{setMonogram("images/monogram-dark-red.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-dark-red.png" /><div class="xdltick11"></div>Dark Red</div>
            <div
                onClick={()=>{setMonogram("images/monogram-lavender.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-lavender.png" /><div class="xdltick11"></div>Lavender</div>
            <div
                onClick={()=>{setMonogram("images/monogram-light-pink.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-light-pink.png" /><div class="xdltick11"></div>Light Pink</div>
            <div
                onClick={()=>{setMonogram("images/monogram-pink.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-pink.png" /><div class="xdltick11"></div>Pink</div>
            <div
                onClick={()=>{setMonogram("images/monogram-orange.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-orange.png" /><div class="xdltick11"></div>Orange</div>
            <div
                onClick={()=>{setMonogram("images/monogram-purple.png")}}
            class="bhs_item w-80 h-40 overflow-hidden"><img width={50} src="images/monogram-purple.png" /><div class="xdltick11"></div>Purple</div>
            </div>
            </div>
</div>
    
    </>)
}

export default Buttonhole