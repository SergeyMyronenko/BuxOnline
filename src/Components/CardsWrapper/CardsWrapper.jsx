import { useState } from "react";
import "./CardsWrapper.scss";

/**
 * CardsWrapper component that displays a list of cards.
 * 
 * This component maintains a state of cards and renders them inside a div with a class of "cards-wrapper".
 * If there are no cards, it renders nothing.
 * 
 * @component
 * @example
 * // Example usage:
 * // <CardsWrapper />
 * 
 * @returns {JSX.Element|null} A div containing the list of cards or null if there are no cards.
 */
const CardsWrapper = () => {
  const [cards, setCards] = useState([]);

  return cards.length > 0 ? (
    <div className="cards-wrapper">{cards.map((item) => item)}</div>
  ) : null;
};

export default CardsWrapper;
