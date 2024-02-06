import React from "react";

function Overlay({ props }: any) {
  return (
    <>
      <a
        href="https://pmnd.rs/"
        style={{
          position: "absolute",
          bottom: 40,
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
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        06/02/2024
      </div>

      {/* <Logo style={{ position: "absolute", top: 40, left: 40, width: 30 }} /> */}
      {/* <div className="info">
        <h1>36</h1>
      </div> */}
    </>
  );
}

export default Overlay;
