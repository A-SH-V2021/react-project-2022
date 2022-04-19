import React from "react";

const Cross = () => {
  return (
    <svg height="120" width="120" viewBox="-50 -50 100 100">
     <line x1="-40" y1="40" x2="40" y2="-40" stroke="blue" strokeWidth="10" strokeLinecap="round"/> 
     <line x1="-40" y1="-40" x2="40" y2="40" stroke="blue" strokeWidth="10" strokeLinecap="round"/> 
    </svg>
  );
};

export default Cross;
