import { Link } from 'react-router-dom';
import './Footer.scss';
import NeoflexLogo from '@a/img/NeoflexLogo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__info">
          <img src={NeoflexLogo} alt="NeoflexLogo" className="footer__logo" />

          <div className="footer__contacts">
            <span className="footer__phone">+7 (495) 984 25 13</span>
            <span className="footer__mail">info@neoflex.ru</span>
          </div>
        </div>

        <nav className="footer__nav">
          <ul className="footer__list">
            <Link to='/'>
              <li className="footer__item">About bank</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Ask a Question</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Quality of service</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Requisites</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Press center</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Bank career</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Investors</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Analytics</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Business and processes</li>
            </Link>

            <Link to='/'>
              <li className="footer__item">Compliance and business ethics</li>
            </Link>
          </ul>
        </nav>

        <div className="footer__underline"></div>

        <p className="footer__terms">We use cookies to personalize our services and improve the user experience of our website. Cookies are small files containing information about previous visits to a website. If you do not want to use cookies, please change your browser settings</p>
      </div>
    </footer>
  );
}
