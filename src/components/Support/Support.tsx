import { MouseEvent, useEffect, useState } from 'react';
import './Support.scss';
import { SupportForm } from '@c/SupportForm';

export const Support: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('neoProjectEmail')) {
      setIsActive(false);
    }
  }, [])

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>, email: string) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    if (email.match(emailRegex)) {
      e.preventDefault();
      localStorage.setItem('neoProjectEmail', email);
      setIsActive(false);
  
      try {
        const response = await fetch('/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const resetEmailHandler = () => {
    setIsActive(true);
    localStorage.removeItem('neoProjectEmail');
  }

  return (
    <section className="support">
      <h2 className="support__title">Support</h2>
      <p className="support__text support__text--bold">Subscribe Newsletter & get</p>
      <p className="support__text support__text--light">Bank News</p>

      { isActive ? (
        <SupportForm submitHandler={submitHandler}/>
      ) : (
        <>
          <h2>You are already subscribed to the bank's newsletter</h2>
          <button className="support__button" onClick={resetEmailHandler}>Use another email</button>
        </>
      )}
    </section>
  );
}
