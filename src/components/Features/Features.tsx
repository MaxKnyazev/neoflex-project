import './Features.scss';
import FeaturesImg from '@a/img/FeaturesImg.png';

export const Features: React.FC = () => {
  return (
    <section className="features">
      <img src={FeaturesImg} alt="FeaturesImg" className="features__img" />

      <div className="features__info">
        <h2 className="features__title">We Provide Many Features You Can Use</h2>

        <p className="features__text">You can explore the features that we provide with fun and have their own functions each feature</p>

        <ul className="features__list">
          <li className="features__item">
            <svg className="features__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z" fill="#2FAB73"/>
            </svg>
            Powerfull online protection.
          </li>

          <li className="features__item">
            <svg className="features__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z" fill="#2FAB73"/>
            </svg>
            Cashback without borders.
          </li>

          <li className="features__item">
            <svg className="features__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z" fill="#2FAB73"/>
            </svg>
            Personal design
          </li>

          <li className="features__item">
            <svg className="features__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.99545 11.4139C4.6047 11.024 4.60391 10.3912 4.99369 10.0003C5.38371 9.60918 6.01701 9.60846 6.40793 9.9987L7.999 11.587L12.586 7C12.9765 6.60953 13.6095 6.60953 14 7C14.3905 7.39047 14.3905 8.02353 14 8.414L8.001 14.413Z" fill="#2FAB73"/>
            </svg>
            Work anywhere in the world
          </li>
        </ul>
      </div>
    </section>
  );
}
