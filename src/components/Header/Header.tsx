import { Link } from 'react-router-dom';
import './Header.scss';

const links = [
  { id: 1, to: '/', text: 'Credit card' },
  { id: 2, to: '/', text: 'Product' },
  { id: 3, to: '/', text: 'Account' },
  { id: 4, to: '/', text: 'Resources' },
]

export const Header: React.FC = () => {
  return (
    <header className="header">
        <Link to='/'>
          <h1 className="header__title">NeoBank</h1>
        </Link>

        <nav>
          <ul className="header__list">
            {links.map(link => (
              <Link key={link.id} to={link.to}>
                <li className="header__item">
                  {link.text}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <button className="header__button">
          Online bank
        </button>
    </header>
  );
}
