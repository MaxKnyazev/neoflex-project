import React from 'react';
import './AboutCard.scss';

interface CardItem {
  svg: JSX.Element;
  title: string;
  text: string;
}

const cardItems: CardItem[] = [
  {
    svg: (
      <svg className="about-card__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14C5 12.1144 5 11.1716 5.58579 10.5858C6.17157 10 7.11438 10 9 10H31C32.8856 10 33.8284 10 34.4142 10.5858C35 11.1716 35 12.1144 35 14V26C35 27.8856 35 28.8284 34.4142 29.4142C33.8284 30 32.8856 30 31 30H9C7.11438 30 6.17157 30 5.58579 29.4142C5 28.8284 5 27.8856 5 26V14Z" fill="#2A4157" fillOpacity="0.24"/><ellipse cx="20.3333" cy="20.3333" rx="3.33333" ry="3.33333" fill="#222222"/><rect x="8" y="13" width="3" height="1" rx="0.5" fill="#222222"/><rect x="29" y="26" width="3" height="1" rx="0.5" fill="#222222"/>
      </svg>
    ),
    title: "Up to 50 000 ₽",
    text: "Cash and transfers without commission and percent"
  },
  {
    svg: (
      <svg className="about-card__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 6.96678C12.6667 6.82529 12.6667 6.75454 12.6227 6.7106C12.5787 6.66666 12.5079 6.66673 12.3662 6.66689C9.01367 6.67056 7.27559 6.73422 6.17157 7.83824C5 9.00981 5 10.8954 5 14.6667V25.3333C5 29.1046 5 30.9902 6.17157 32.1618C7.34315 33.3333 9.22876 33.3333 13 33.3333H27C30.7712 33.3333 32.6569 33.3333 33.8284 32.1618C35 30.9902 35 29.1046 35 25.3333V14.6667C35 10.8954 35 9.00981 33.8284 7.83824C32.7244 6.73422 30.9863 6.67056 27.6338 6.66689C27.4922 6.66673 27.4213 6.66666 27.3773 6.7106C27.3333 6.75454 27.3333 6.82529 27.3333 6.96678L27.3333 10.8333C27.3333 11.6618 26.6618 12.3333 25.8333 12.3333C25.0049 12.3333 24.3333 11.6618 24.3333 10.8333L24.3333 6.96666C24.3333 6.82524 24.3333 6.75453 24.2894 6.7106C24.2455 6.66666 24.1748 6.66666 24.0333 6.66666H15.9667C15.8252 6.66666 15.7545 6.66666 15.7106 6.7106C15.6667 6.75453 15.6667 6.82524 15.6667 6.96666L15.6667 10.8333C15.6667 11.6618 14.9951 12.3333 14.1667 12.3333C13.3382 12.3333 12.6667 11.6618 12.6667 10.8333L12.6667 6.96678Z" fill="#2A4157" fillOpacity="0.24"/><path d="M20 18.3333V23.3333" stroke="#222222" strokeLinecap="round"/><path d="M22.5 20.8333H17.5" stroke="#222222" strokeLinecap="round"/>
      </svg>
    ),
    title: "Up to 160 days",
    text: "Without percent on the loan"
  },
  {
    svg: (
      <svg className="about-card__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" fill="#2A4157" fillOpacity="0.24"/><path d="M8.33325 4.67308C6.81306 5.55076 5.55068 6.81314 4.673 8.33333" stroke="#222222" strokeLinecap="round"/><path d="M31.6667 4.67308C33.1869 5.55076 34.4493 6.81314 35.327 8.33333" stroke="#222222" strokeLinecap="round"/><path d="M20 10.8333V19.75C20 19.8881 20.1119 20 20.25 20H27.5" stroke="#222222" strokeLinecap="round"/>
      </svg>
    ),
    title: "Free delivery",
    text: "We will deliver your card by courier at a convenient place and time for you"
  },
  {
    svg: (
      <svg className="about-card__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.19137 15.18C8.25876 14.3039 8.29245 13.8659 8.58 13.5996C8.86754 13.3333 9.30685 13.3333 10.1855 13.3333H29.8147C30.6933 13.3333 31.1326 13.3333 31.4202 13.5996C31.7077 13.8659 31.7414 14.3039 31.8088 15.18L32.6708 26.3864C32.981 30.4192 33.1362 32.4356 31.9488 33.7178C30.7614 35 28.7391 35 24.6944 35H15.3058C11.2611 35 9.23873 35 8.05137 33.7178C6.86401 32.4356 7.01912 30.4192 7.32933 26.3864L8.19137 15.18Z" fill="#2A4157" fillOpacity="0.24"/><path d="M14.1667 13.3333L14.1667 10.8333C14.1667 7.61168 16.7784 5.00001 20.0001 5.00001V5.00001C23.2217 5.00001 25.8334 7.61168 25.8334 10.8333L25.8334 13.3333" stroke="#222222"/><path d="M13.6667 19.1667C13.6667 19.4428 13.8906 19.6667 14.1667 19.6667C14.4429 19.6667 14.6667 19.4428 14.6667 19.1667H13.6667ZM14.6667 19.1667V16.6667H13.6667V19.1667H14.6667Z" fill="#222222"/><path d="M25.3333 19.1667C25.3333 19.4428 25.5571 19.6667 25.8333 19.6667C26.1094 19.6667 26.3333 19.4428 26.3333 19.1667H25.3333ZM26.3333 19.1667V16.6667H25.3333V19.1667H26.3333Z" fill="#222222"/>
      </svg>
    ),
    title: "Up to 12 months",
    text: "No percent. For equipment, clothes and other purchases in installments"
  },
  {
    svg: (
      <svg className="about-card__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14C5 12.1144 5 11.1716 5.58579 10.5858C6.17157 10 7.11438 10 9 10H31C32.8856 10 33.8284 10 34.4142 10.5858C35 11.1716 35 12.1144 35 14V26C35 27.8856 35 28.8284 34.4142 29.4142C33.8284 30 32.8856 30 31 30H9C7.11438 30 6.17157 30 5.58579 29.4142C5 28.8284 5 27.8856 5 26V14Z" fill="#2A4157" fillOpacity="0.24"/><circle cx="9.99992" cy="25" r="1.66667" fill="#222222"/><rect x="5" y="15" width="30" height="3.33333" fill="#222222"/>
      </svg>
    ),
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
            {item.svg}
            <h3 className="about-card__title">{item.title}</h3>
            <p className="about-card__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}