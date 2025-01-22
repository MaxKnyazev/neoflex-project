import React from 'react';
import './Cashback.scss';

interface CardItem {
  title: string;
  text: string;
}

const cardItems: CardItem[] = [
  {
    title: "5%",
    text: "For food delivery, cafes and restaurants"
  },
  {
    title: "5%",
    text: "In supermarkets with our subscription"
  },
  {
    title: "2%",
    text: "In clothing stores and children's goods"
  },
  {
    title: "1%",
    text: "Other purchases and payment of services and fines"
  },
  {
    title: "up to 3%",
    text: "Shopping in online stores"
  },
  {
    title: "30%",
    text: "Purchases from our partners"
  }
];

export const Cashback: React.FC = () => {
  return (
    <section className="cashback">
      <ul className="cashback__list">
        {cardItems.map((item, index) => (
          <li key={index} className="cashback__item">
            <p className="cashback__text">{item.text}</p>
            <h3 className="cashback__title">{item.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}