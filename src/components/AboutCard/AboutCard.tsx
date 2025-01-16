import React from 'react';
import MoneySvg from '@a/svg/Money_duotone.svg';
import CalendarSvg from '@a/svg/Calendar_duotone.svg';
import ClockSvg from '@a/svg/Clock_duotone.svg';
import BagSvg from '@a/svg/Bag_duotone.svg';
import CreditCardSvg from '@a/svg/Credit card_duotone.svg';
import './AboutCard.scss';

interface CardItem {
  svg: string;
  title: string;
  text: string;
}

const cardItems: CardItem[] = [
  {
    svg: MoneySvg,
    title: "Up to 50 000 ₽",
    text: "Cash and transfers without commission and percent"
  },
  {
    svg: CalendarSvg,
    title: "Up to 160 days",
    text: "Without percent on the loan"
  },
  {
    svg: ClockSvg,
    title: "Free delivery",
    text: "We will deliver your card by courier at a convenient place and time for you"
  },
  {
    svg: BagSvg,
    title: "Up to 12 months",
    text: "No percent. For equipment, clothes and other purchases in installments"
  },
  {
    svg: CreditCardSvg,
    title: "Convenient deposit and withdrawal",
    text: "At any ATM. Top up your credit card for free with cash or transfer from other cards"
  }
];

export const AboutCard: React.FC = () => {
  return (
    <section className="about-card">
      <ul className="about-card__list">
        {cardItems.map((item, index) => (
          <li key={index} className="about-card__item">
            <img src={item.svg} className="about-card__svg" alt="" />
            <h3 className="about-card__title">{item.title}</h3>
            <p className="about-card__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}