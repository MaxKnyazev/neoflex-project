import './WorldMap.scss';
import HugeGlobal from '@a/img/HugeGlobal.png';

export const WorldMap: React.FC = () => {
  return (
    <section className="world-map">
      <h2 className="world-map__title">You can use our services anywhere in the world</h2>
      <figure className="world-map__figure">
        <figcaption className="world-map__figcaption">Withdraw and transfer money online through our application</figcaption>
        <img className="world-map__img" src={HugeGlobal} alt="HugeGlobal"></img>
      </figure>
    </section>
  );
}
