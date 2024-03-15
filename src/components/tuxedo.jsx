import { useState } from "react";

export default function Tuxedo({ setSelect, setStuds, setSedary }) {
  const TuxedoOptions = [
    { label: 'No Tuxedo', image: 'images/tuxedo1.svg', action: () => {setStuds(false)} },
    { label: 'Studs', image: 'images/tuxedo2.svg', action: () => {setStuds(true)} },
    { label: 'Studs with Pleats', image: 'images/tuxedo3.svg', action: () => setSedary(true) },
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
      <div id="popup5" className="fadeIn modal-box a5">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" className="js-modal-close close">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">Tuxedo</h3>
        </header>
        <div className="modal-body">
          <div className="content mCustomScrollbar" id="content-1">
            <div className="w-full my-2 text-center">
              <span className="w-full text-center text-black uppercase font-semibold text-sm">+ $25 </span>
            </div>
            {TuxedoOptions.map((option, i) => (
              <div className="fitx overflow-hidden" onClick={() => { setIndex(i); option.action(); }} key={i}>
                <div className="fit_lft flex justify-center items-center w-[90%]">
                  <img src={option.image} alt={`option-${i}`} />
                </div>
                <div style={{width:'110%'}} className="fit_rgt">{option.label}</div>
                <div className={`xdltick6 ${index === i ? "xdl" : ""}`}></div>
                <div className="clr"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
