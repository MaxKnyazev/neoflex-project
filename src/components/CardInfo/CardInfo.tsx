import './CardInfo.scss';
import CardDesign1 from '@a/img/CardDesign1.jpg';

export const CardInfo: React.FC = () => {

  return (
    <section className="card-info">
      <div className="card-info__wrapper">
        <h2 className="card-info__title">Platinum digital credit card</h2>
        <p className="card-info__explain">
          Our best credit card. Suitable for everyday spending and shopping. <br />
          Cash withdrawals and transfers without commission and interest.
        </p>

        <ul className="card-info__advantages">
          <li className="card-info__advantage">
            <span className="card-info__advantage-title">Up to 160 days</span>
            <span className="card-info__advantage-text">No percent</span>
          </li>

          <li className="card-info__advantage">
            <span className="card-info__advantage-title">Up to 600 000 &#8381;</span>
            <span className="card-info__advantage-text">Credit limit</span>
          </li>

          <li className="card-info__advantage">
            <span className="card-info__advantage-title">0 &#8381;</span>
            <span className="card-info__advantage-text">Card service is free</span>
          </li>
        </ul>

        <div>
          <button className="card-info__button">Apply for card</button>
        </div>
      </div>

      <img src={CardDesign1} alt="cardSample" className="card-info__img" />
    </section>
  );
}
