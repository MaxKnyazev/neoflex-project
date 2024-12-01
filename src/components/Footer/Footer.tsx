import { Link } from 'react-router-dom';
import './Footer.scss';
import NeoflexLogo from '@a/img/NeoflexLogo.png';

const links = [
  { id: 1, to: '/', text: 'About bank' },
  { id: 2, to: '/', text: 'Ask a Question' },
  { id: 3, to: '/', text: 'Quality of service' },
  { id: 4, to: '/', text: 'Requisites' },
  { id: 5, to: '/', text: 'Press center' },
  { id: 6, to: '/', text: 'Bank career' },
  { id: 7, to: '/', text: 'Investors' },
  { id: 8, to: '/', text: 'Analytics' },
  { id: 9, to: '/', text: 'Business and processes' },
  { id: 10, to: '/', text: 'Compliance and business ethics' },
]

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
            {links.map(link => (
              <Link key={link.id} to={link.to}>
                <li className="footer__item">{link.text}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="footer__underline"></div>

        <p className="footer__terms">We use cookies to personalize our services and improve the user experience of our website. Cookies are small files containing information about previous visits to a website. If you do not want to use cookies, please change your browser settings</p>
      </div>
    </footer>
  );
}
