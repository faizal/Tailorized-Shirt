import { useState } from "react";

export default function Cuff({ setSelect, setTheModel }) {
  const TabOptions = [
    { label: 'STANDARD', id: 'fragment-1' },
    { label: 'FRENCH', id: 'fragment-2' },
  ];
  
  const CuffOptions = [
    { type: 'oneButtonSquare', buttons: 'none', image: 'images/cuff-1.svg', label: '1 BUTTON SQUARE' },
    { type: 'oneButtonCurved', buttons: 'none', image: 'images/cuff-2.svg', label: '1 BUTTON CURVED' },
    { type: 'oneButtonAngled', buttons: 'none', image: 'images/cuff-3.svg', label: '1 BUTTON ANGLED' },
    { type: 'oneButtonSquare', buttons: 'two', image: 'images/cuff-4.svg', label: '2 BUTTONS SQUARE' },
    { type: 'oneButtonCurved', buttons: 'two', image: 'images/cuff-5.svg', label: '2 BUTTONS CURVED' },
    { type: 'oneButtonAngled', buttons: 'two', image: 'images/cuff-13.svg', label: '2 BUTTONS ANGLED' },
  ];
  
  const FrenchCuffOptions = [
    { type: 'FrenchSquared', buttons: 'none', image: 'images/cuff-7.svg', label: 'FRENCH SQUARED' },
    { type: 'FrenchCurved', buttons: 'none', image: 'images/cuff-8.svg', label: 'FRENCH CURVED' },
    { type: 'FrenchAngled', buttons: 'none', image: 'images/cuff-9.svg', label: 'FRENCH ANGLED' },
  ];
  
  const [currentArray,setCurrentArray] = useState([...CuffOptions])
  const [activeTab, setActiveTab] = useState(TabOptions[0].id);
  const [index, setIndex] = useState(0);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentArray(tabId === 'fragment-1'?[...CuffOptions]:[...FrenchCuffOptions])
    setIndex(0); // Reset the index when switching tabs
  };

  const handleCuffOptionClick = (type, buttons) => {
    setTheModel([type, buttons], 'cuff');
    // Additional actions if needed
  };

  return (
    <>
      <div id="popup4" style={{ display: 'block', overflow: "hidden", height: '100vh' }} class="fadeIn modal-box a4">
        <header>
          <a onClick={() => { setSelect(0) }} href="#" class="js-modal-close close">
            <img src="images/close.svg" alt="close-icon" />
          </a>
          <h3 className="overflow-hidden">CUFF</h3>
        </header>
        <div class="modal-body">
          <div class="fab_box">

            <div id="tabs" class="fbtab">
              <ul class="tbs_nav">
                {TabOptions.map((tab) => (
                  <li style={{
                    background:`${activeTab === tab.id?"orange":""}`,
                    color:`${activeTab === tab.id?"white":""}`,
                    }} className={`tbs`}  key={tab.id}>
                    <a onClick={() => handleTabChange(tab.id)}>
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div id={TabOptions[0].id}>
                <div class="fbc_box fadeIn">
                  {currentArray.map((option, i) => (
                    <div
                      onClick={() => { setIndex(i); handleCuffOptionClick(option.type, option.buttons) }}
                      className="fitxcuff overflow-hidden fadeIn"
                      key={i}
                    >
                      <div class="fit_lft_cuff flex justify-center items-center w-[90%]">
                        <img src={option.image} alt={`option-${i}`} />
                      </div>
                      <div class="fit_rgt overflow-hidden">{option.label}</div>
                      <div class={`xdltick4 ${index === i ? "xdl" : ""}`}></div>
                      <div class="clr"></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div id={TabOptions[1].id}>
                <div class="fbc_box">
                  {FrenchCuffOptions.map((option, i) => (
                    <div
                      onClick={() => { setIndex(i); handleCuffOptionClick(option.type, option.buttons) }}
                      class="fitxcuff overflow-hidden"
                      key={i}
                    >
                      <div class="fit_lft_cuff flex justify-center items-center w-[90%]">
                        <img src={option.image} alt={`option-${i}`} />
                      </div>
                      <div class="fit_rgt overflow-hidden">{option.label}</div>
                      <div class={`xdltick4 ${index === i ? "xdl" : ""}`}></div>
                      <div class="clr"></div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
