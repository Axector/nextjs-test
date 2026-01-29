"use client"

import CardsListItem from "../CardsListItem";
import { useCards } from "@/store/CardsContext";

export const CardsList = () => {
  const { cards } = useCards();

  if (cards.length <= 0) {
    return null;
  }

  return (
    <ul>
      {cards.map((props, i) => <CardsListItem {...props} key={i} />)}
    </ul>
  );
};

export default CardsList;
