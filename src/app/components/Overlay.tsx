import React from "react";

function Overlay({
  togglelight,
  changeColor,
  palette,
  selectedColorIndex,
}: any) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          fontSize: "13px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <a href="https://appinlay.com/">
          RS.45656200
          <br />
          APPINLAY
        </a>

        <div style={{ paddingRight: "60px", display: "flex", gap: "4px" }}>
          <button
            onClick={togglelight}
            style={{
              // padding: "10px 40px",
              // fontSize: "16px",
              padding: "8px",
              backgroundColor: "gold",
              color: "#000",
              letterSpacing: "1.2px",
              border: "none",
            }}
          >
            Light
          </button>

          {/* <button
            onClick={changeColor}
            style={{
              padding: "8px",

              // padding: "10px 40px",
            }}
          >
            Change Color
          </button> */}
          <select value={selectedColorIndex} onChange={changeColor}>
            <option value="">Select Color</option>
            {palette.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* <Logo style={{ position: "absolute", top: 40, left: 40, width: 30 }} /> */}
      {/* <div className="info">
        <h1>36</h1>
      </div> */}
    </>
  );
}

export default Overlay;
