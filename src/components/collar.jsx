import { useState } from "react";

export default function Collar({ setSelect, setTheModel }) {
  const CollarOptions = [
    { type: 'Normal-3', label: 'NORMAL', image: 'images/normal-collar.svg' },
    { type: 'SemiWide', label: 'SEMI WIDE', image: 'images/semi-wide-collar.svg', width: '90px' },
    { type: 'Wide', label: 'WIDE', image: 'images/wide-collar.svg', width: '90px' },
    { type: 'SemiWide-3', label: 'BUTTON DOWN', image: 'images/button-down-collar.svg' },
    { type: 'HiddenButtonDown', label: 'HIDDEN BUTTON DOWN', image: 'images/hidden-button-down-collar.svg' },
    { type: 'Mandarin', label: 'WING COLLAR', image: 'images/wing-collar.svg' },
    { type: 'wing', label: 'MANDARIN', image: 'images/mandarin-collar.svg' },
  ];

  const [index, setIndex] = useState(0);

  const handleCollarOptionClick = (type) => {
    setTheModel(type, 'collar');
    // Additional actions if needed
  };

  return (
    <>
      <div id="popup3 fadeIn" style={{ display: 'block', overflow: "hidden", height: '100vh' }} class="modal-box a3">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" class="js-modal-close close">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">Collar</h3>
        </header>
        <div class="modal-body">
          <div class="content mCustomScrollbar" id="content-1">
            {/* <div>
              <span>Collar Height</span>
            </div>
            <div>
              <input type="radio" id="cat" name="animal" value="" />
              <label for="cat">2.5</label>

              <input type="radio" id="dog" name="animal" value="" />
              <label for="dog">3</label>
            </div> */}
            {CollarOptions.map((option, i) => (
              <div
                onClick={() => { setIndex(i); handleCollarOptionClick(option.type) }}
                class="fitx overflow-hidden"
                key={i}
              >
                <div class="fit_lft flex justify-center items-center w-[90%]">
                  <img src={option.image} alt={`option-${i}`} width={option.width} />
                </div>
                <div style={{width:'110%'}} class="fit_rgt">{option.label}</div>
                <div class={`xdltick3 ${index === i ? "xdl" : ""}`}></div>
                <div class="clr"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
