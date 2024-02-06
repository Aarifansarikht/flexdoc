import React from "react";

function Overlay({ togglelight }: any) {
  return (
    <>
      <a
        href="https://pmnd.rs/"
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          fontSize: "13px",
        }}
      >
        RS.45656200
        <br />
        APPINLAY
      </a>
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        <button
          onClick={togglelight}
          style={{
            padding: "16px 40px",
            fontSize: "16px",
            fontWeight: 700,
            backgroundColor: "gold",
            color: "#000",
            letterSpacing: "1.2px",
          }}
        >
          Light
        </button>
      </div>

      {/* <Logo style={{ position: "absolute", top: 40, left: 40, width: 30 }} /> */}
      {/* <div className="info">
        <h1>36</h1>
      </div> */}
    </>
  );
}

export default Overlay;
