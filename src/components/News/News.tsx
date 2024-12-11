import { useState, useEffect } from 'react';
import axios from 'axios';
import './News.scss';

export const News: React.FC = () => {
  const [cards, setCards] = useState<Array<{ id: number; url: string; title: string }>>([]);
  const [prevButtonClasses, setPrevButtonClasses] = useState('news__button news__button--inactive');
  const [nextButtonClasses, setNextButtonClasses] = useState('news__button');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);

  const CARD_SIZE = 400;
  const LIMIT = 10;
  let MAX_POSITION = (LIMIT - 3) * CARD_SIZE;
  if (windowWidth <= 1160) {
    MAX_POSITION = (LIMIT - 2) * CARD_SIZE;
  }
  if (windowWidth <= 760) {
    MAX_POSITION = (LIMIT - 1) * CARD_SIZE;
  }
  const URL = `https://jsonplaceholder.typicode.com/photos?_limit=${LIMIT}`;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const getData = async () => {
      try {
        const response = await axios.get(URL);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    const fetchData = async () => {
      const data = await getData();
      setCards(data);
    }
    fetchData();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const nextButtonClickHandler = async () => {
    setPosition(position + CARD_SIZE);
    setPrevButtonClasses('news__button');
    if (position >= MAX_POSITION - CARD_SIZE) {
      setNextButtonClasses('news__button news__button--inactive');
    }
    if (position >= MAX_POSITION) {
      setPosition(MAX_POSITION);
    }
  }

  const prevButtonClickHandler = () => {
    setPosition(position - CARD_SIZE);
    setNextButtonClasses('news__button');
    if (position <= CARD_SIZE) {
      setPrevButtonClasses('news__button news__button--inactive');
    }

    if (position <= 0) {
      setPosition(0);
    }
  }

  return (
    <section className="news">
        <ul className="news__list" style={{
          right: position
        }}>
          {cards.map(card => (
            <li key={card.id} className="news__item">
              <img src={card.url} alt="Card" className="news__img" />
              <h3 className="news__title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
              <p className="news__text">{card.title}</p>
            </li>
          ))}
        </ul>       

      <div className="news__control">
        <button className={prevButtonClasses} onClick={prevButtonClickHandler}>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="news__svg" d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25" stroke="#222222"/>
          </svg>            
        </button>

        <button className={nextButtonClasses} onClick={nextButtonClickHandler}>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="news__svg" d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0" stroke="white"/>
          </svg>            
        </button>
      </div>
    </section>
  );
}


