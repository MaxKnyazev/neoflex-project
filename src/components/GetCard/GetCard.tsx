import React from 'react';
import './GetCard.scss';

interface CardStep {
  number: number;
  text: string;
}

const cardSteps: CardStep[] = [
  {
    number: 1,
    text: "Fill out an online application - you do not need to visit the bank"
  },
  {
    number: 2,
    text: "Find out the bank's decision immediately after filling out the application"
  },
  {
    number: 3,
    text: "The bank will deliver the card free of charge, wherever convenient, to your city"
  }
];

export const GetCard: React.FC = () => {
  return (
    <section className="get-card">
      <h2 className="get-card__title">How to get a card</h2>

      <ul className="get-card__list">
        {cardSteps.map((step, index) => (
          <li key={index} className="get-card__item">
            <div className="get-card__order">
              <span className="get-card__number">{step.number}</span>
              <span className="get-card__underline"></span>
            </div>

            <p className="get-card__text">
              {step.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
