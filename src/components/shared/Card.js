// 1. Importera React
import React from "react";

import './card.css';

// 2. Skapa komponenten
const Card = (props) => {
  return <section className="card">{props.children}</section>;
};

// 3. Exportera komponenten
export default Card;
