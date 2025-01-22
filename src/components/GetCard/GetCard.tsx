import React from 'react';
import './GetCard.scss';

interface CardStep {
  text: string;
}

const cardSteps: CardStep[] = [
  {
    text: "Fill out an online application - you do not need to visit the bank"
  },
  {
    text: "Find out the bank's decision immediately after filling out the application"
  },
  {
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
              <span className="get-card__number">{index + 1}</span>
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
