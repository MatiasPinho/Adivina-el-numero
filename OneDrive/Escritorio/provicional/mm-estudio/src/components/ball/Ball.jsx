import React, { useState, useEffect } from "react";
import "./Ball.css";

export const Ball = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Simulamos la expansión después de 2 segundos
    setTimeout(() => {
      setExpanded(true);
    }, 2000);
  }, []);

  return (
    <div className="ball__container">
      <div className={`ball ${expanded ? "expanded" : ""}`}></div>
    </div>
  );
};
