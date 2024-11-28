import { Link } from 'react-router-dom';
// import { useStoreOfProducts } from '../../store';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
        <Link to='/'>
          <h1 className="header__title">NeoBank</h1>
        </Link>

        <nav>
          <ul className="header__list">
            <Link to='/'>
              <li className="header__item">
                Credit card
              </li>
            </Link>

            <Link to='/'>
              <li className="header__item">
                Product
              </li>
            </Link>

            <Link to='/'>
              <li className="header__item">
                Account 
              </li>
            </Link>

            <Link to='/'>
              <li className="header__item">
                Resources
              </li>
            </Link>
          </ul>
        </nav>

        <button className="header__button">
          Online bank
        </button>
    </header>
  );
}
