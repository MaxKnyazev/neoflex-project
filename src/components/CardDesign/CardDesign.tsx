import './CardDesign.scss';
import CardDesign1 from '@a/img/CardDesign1.jpg';
import CardDesign2 from '@a/img/CardDesign2.jpg';
import CardDesign3 from '@a/img/CardDesign3.jpg';
import CardDesign4 from '@a/img/CardDesign4.jpg';

const cards = [
  { id: 1, src: CardDesign1, alt: 'CardDesign1'},
  { id: 2, src: CardDesign2, alt: 'CardDesign2'},
  { id: 3, src: CardDesign3, alt: 'CardDesign3'},
  { id: 4, src: CardDesign4, alt: 'CardDesign4'}
]

export const CardDesign: React.FC = () => {
  return (
    <section className="card-design">
      <div className="card-design__main">
        <h2 className="card-design__title">Choose the design you like and apply for card right now</h2>
        <button className="card-design__button">Choose the card</button>
      </div>
      <ul className="card-design__list">
        {cards.map(card => {
          return (
            <li key={card.id} className="card-design__item">
              <img src={card.src} alt={card.alt} />
            </li>
          )
        })}
      </ul>
    </section>
  );
}
