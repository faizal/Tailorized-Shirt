import { useState } from "react";

export default function Placket({ setSelect, setPlancket, setWithButtons }) {
  const Options = [
    { label: "None", image: "images/no-placket.svg", action: () => setPlancket('state1') },
    { label: "PLACKET", image: "images/yes-placket.svg", action: () => setPlancket('state2') },
    { label: "HIDDEN PLACKET", image: "images/hidden-placket.svg", action: () => setPlancket('state3') },
  ];

  const [index, setIndex] = useState(1);

  return (
    <>
      <div id="popup2" class="fadeIn modal-box a2">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" class="js-modal-close close">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">Placket</h3>
        </header>
        <div class="content mCustomScrollbar" id="content-1">
          {Options.map((option, i) => (
            <div class="fitx overflow-hidden" onClick={() => { setIndex(i); option.action(); }} key={i}>
              <div class="fit_lft flex justify-center items-center w-[90%]">
                <img src={option.image} alt={`option-${i}`} />
              </div>
              <div style={{width:'110%'}} class="fit_rgt">{option.label}</div>
              <div class={`xdltick1 ${index === i ? "xdl" : ""}`}></div>
              <div class="clr"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
