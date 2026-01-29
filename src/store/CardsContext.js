"use client"

import DataBaseController from '@/lib/firebase';
import { createContext, useContext, useEffect, useState } from 'react';

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const storageName = process.env.NEXT_PUBLIC_FIREBASE_CARDS_STORAGE_NAME;

  const getCards = async () => {
    const cardsObj = await DataBaseController.read(storageName);
    const newCards = Object.entries(cardsObj).map(([code, value]) => {
      const { stringValue: price = 0 } = value;
      return { code, price };
    })

    setCards(newCards);
  };

  const getCardsObj = () => {
    const data = {};
    cards.forEach((card) => {
      const { code, price } = card;
      data[code] = price;
    });

    return data;
  }

  const updateCards = (data) => {
    const newCards = Object.entries(data).map(([code, price]) => ({ code, price }))
    setCards(newCards);
  }

  const updateDataBase = async (data) => {
    updateCards(data);
    await DataBaseController.update(data, storageName);
  }

  const addCard = async (code, price) => {
    const data = getCardsObj();
    data[code] = price;

    updateDataBase(data);
  }

  const updateCard = async (code, newPrice) => {
    await addCard(code, newPrice);
  }

  const removeCard = async (code) => {
    const data = getCardsObj();
    delete data[code];

    updateDataBase(data);
  }

  useEffect(() => {
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardsContext.Provider value={{ cards, addCard, updateCard, removeCard }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);