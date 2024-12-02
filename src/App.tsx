import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@r/index';
import './App.scss';

export const App: React.FC = () => {
  // const loadFromSessionStorage = useStoreOfProducts(state => state.loadFromSessionStorage);
  useEffect(() => {
    // loadFromSessionStorage();
  }, []);

  const element = useRoutes(routes);

  return (
    <div className="app">
      {element}
    </div>
  );
}