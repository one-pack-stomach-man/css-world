import React from 'react';
import './index.css';

function CssBattery() {
  return (
    <div style={{ display: 'flex', flexDirection: "column", paddingTop: "20px" }}>
      <div className="head"></div>
      <div className="box"><div className="water"></div><div className="wave"></div></div>
    </div>
  );
}

export default CssBattery;
