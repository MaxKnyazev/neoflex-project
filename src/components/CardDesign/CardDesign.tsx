import { Link } from 'react-router-dom';
import './CardDesign.scss';
import CardDesign1 from '@a/img/CardDesign1.png';
import CardDesign2 from '@a/img/CardDesign2.png';
import CardDesign3 from '@a/img/CardDesign3.png';
import CardDesign4 from '@a/img/CardDesign4.png';

export const CardDesign: React.FC = () => {
  return (
    <section className="card-design">
      <div className="card-design__main">
        <h2 className="card-design__title">Choose the design you like and apply for card right now</h2>
        <button className="card-design__button">Choose the card</button>
      </div>
      <ul className="card-design__list">
        <li className="card-design__item">
          <img src={CardDesign1} alt="CardDesign1" />
        </li>
        <li className="card-design__item">
          <img src={CardDesign2} alt="CardDesign2" />
        </li>
        <li className="card-design__item">
          <img src={CardDesign3} alt="CardDesign3" />
        </li>
        <li className="card-design__item">
          <img src={CardDesign4} alt="CardDesign4" />
        </li>
      </ul>
    </section>
  );
}
