import { useState } from "react";

export default function FrontPocket({ setSelect, setPocket }) {
  const PocketOptions = [
    { type: 'none', label: 'No Pocket', image: 'images/no-placket.svg' },
    { type: 'left', label: 'One Pocket', image: 'images/yes-pocket.svg' },
    { type: 'both', label: 'Two Pockets', image: 'images/pocket2.svg' },
  ];

  const [index, setIndex] = useState(1);

  return (
    <>
      <div id="popup6" className="fadeIn modal-box a6">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" className="js-modal-close close overflow-hidden">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">Pocket</h3>
        </header>
        <div className="modal-body">
          <div className="content mCustomScrollbar" id="content-1">
            <div className="w-full my-2 text-center">
              <span className="w-full text-center text-black uppercase font-semibold text-sm">+ $5 </span>
            </div>
            {PocketOptions.map((option, i) => (
              <div className="fitx overflow-hidden flex justify-center items-center" onClick={() => { setIndex(i); setPocket(option.type) }} key={i}>
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
