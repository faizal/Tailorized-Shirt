import { useState } from "react";

export default function WhiteAndCuff({ setSelect, setWhiteCuff, setWhiteCollar }) {
  const [v1,setV1] = useState(false)
  const [v2,setV2] = useState(false)
  let Options = [
    { label: 'White Collar', image: 'images/white-collar.svg', stateUpdater: setWhiteCollar,value:v1 },
    { label: 'White Cuff', image: 'images/white-cuff.svg', stateUpdater: setWhiteCuff,value:v2 },
  ];

  const [index, setIndex] = useState(10);

  return (
    <>
      <div id="popup12" class="fadeIn modal-box a12">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" class="js-modal-close close">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">Contrast Fabric</h3>
        </header>
        <div class="modal-body">
          <div class="content mCustomScrollbar" id="content-1">
            <div className="w-full my-2 text-center">
              <span className="w-full text-center text-black uppercase font-semibold text-sm">+ $10 </span>
            </div>
            {Options.map((option, i) => (
              <div
                onClick={() => { 
                  setIndex(i); 
                  if(index === 0){
                    setV1(!v1)
                    option.stateUpdater(v1) 
                  }else{
                    setV2(!v2)
                    option.stateUpdater(v2) 
                  }
                }}
                class="fitx overflow-hidden flex justify-center items-center"
                key={i}
              >
                <div class="fit_lft flex justify-center items-center w-[90%]">
                  <img src={option.image} alt={`option-${i}`} />
                </div>
                <div style={{width:'110%'}} class="fit_rgt">{option.label}</div>
                <div class={`xdltick${17 + i} ${index === i? "xdl" : ""}`}></div>
                <div class="clr"></div>
              </div>
            ))}
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </>
  );
}
