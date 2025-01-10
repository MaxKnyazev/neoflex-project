import { useState } from 'react';
import './LoanTabs.scss';
import { AboutCard } from '@c/AboutCard';
import { Rates } from '@c/Rates';
import { Cashback } from '@c/Cashback';
import { FAQ } from '@c/FAQ';

export const LoanTabs: React.FC = () => {
  const tabHandler = (id) => {
    const tempTabs = [];
    tabs.forEach(tab => {
      if (tab.id === id) {
        tempTabs.push({...tab, styles: 'loan-tabs__button loan-tabs__button--active', active: true});
      } else {
        tempTabs.push({...tab, styles: 'loan-tabs__button', active: false});
      }
    })
    setTabs(tempTabs);
  }

  const [ tabs, setTabs ] = useState([
    { id: 1, text: 'About card',styles: 'loan-tabs__button loan-tabs__button--active', active: true },
    { id: 2, text: 'Rates and conditions', styles: 'loan-tabs__button', active: false},
    { id: 3, text: 'Cashback', styles: 'loan-tabs__button', active: false},
    { id: 4, text: 'FAQ', styles: 'loan-tabs__button', active: false}
  ])

  return (
    <>
      <section className="loan-tabs">
        <ul className="loan-tabs__list">
          {tabs.map(tab => (
            <li key={tab.id} className="loan-tabs__item">
              <button 
                className={tab.styles}
                onClick={() => {tabHandler(tab.id)}}
              >{tab.text}</button>
            </li>
          ))}
        </ul>

        <div className="loan-tabs__underline"></div>
      </section>

      { tabs[0]?.active && <AboutCard /> }
      { tabs[1]?.active && <Rates /> }
      { tabs[2]?.active && <Cashback /> }
      { tabs[3]?.active && <FAQ /> }
    </>
  );
}
