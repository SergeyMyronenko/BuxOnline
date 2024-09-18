import { useState } from "react";
import "./CardsWrapper.scss";

const CardsWrapper = () => {
  const [cards, setCards] = useState([]);

  return cards.length > 0 ? (
    <div className="cards-wrapper">{cards.map((item) => item)}</div>
  ) : null;
};

export default CardsWrapper;
