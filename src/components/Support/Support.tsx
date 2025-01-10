import { MouseEvent, useEffect, useState } from 'react';
import './Support.scss';

export const Support: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('neoProjectEmail')) {
      setIsActive(false);
    }
  }, [])

  const submitHandler = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('neoProjectEmail', email);
    setIsActive(false);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section className="support">
      <h2 className="support__title">Support</h2>
      <p className="support__text support__text--bold">Subscribe Newsletter & get</p>
      <p className="support__text support__text--light">Bank News</p>

      { isActive ? (
        <form className="support__form">
          <div className="support__wrapper">
            <label className="support__email" htmlFor="support-email">
              <svg className="support__svg-email" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7798 19.1104L28.1806 27.0882V10.7957L18.7798 19.1104Z" fill="#9092B0"/>
                <path d="M0.29538 10.7957V27.0882L9.69619 19.1104L0.29538 10.7957Z" fill="#9092B0"/>
                <path d="M26.4378 6.05127H2.0382C1.16853 6.05127 0.478368 6.92158 0.347656 8.04222L14.238 20.3272L28.1283 8.04222C27.9976 6.92158 27.3075 6.05127 26.4378 6.05127Z" fill="#9092B0"/>
                <path d="M17.1831 20.5236L14.717 22.704C14.5706 22.8327 14.4051 22.8959 14.2378 22.8959C14.0705 22.8959 13.9049 22.8327 13.7585 22.704L11.2924 20.5212L0.350922 29.8116C0.485119 30.9229 1.17179 31.7861 2.03798 31.7861H26.4376C27.3037 31.7861 27.9904 30.9229 28.1246 29.8116L17.1831 20.5236Z" fill="#9092B0"/>
              </svg>
            </label>
            <input id="support-email" type="email" placeholder="Your email" className="support__input" value={email} onChange={(e) => { emailHandler(e) }} />
          </div>

          <button className="support__button" onClick={e => {submitHandler(e)}}>
            <svg className="support__svg-send" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_93_3979)">
                <path d="M19.4114 9.82539L3.18914 19.2758C2.5057 19.6739 2.10525 20.5644 2.14396 21.5994C2.18274 22.6345 2.6529 23.6057 3.37098 24.1338L9.04222 28.3048L13.6627 21.2824C13.8753 20.9593 14.2679 20.9583 14.5396 21.2804C14.8112 21.6024 14.859 22.1255 14.6464 22.4487L10.0259 29.4711L13.8097 36.5105C14.2888 37.4019 15.0648 37.9083 15.8347 37.832C16.6062 37.7556 17.2138 37.1106 17.4234 36.1527L22.4058 13.3757C22.6327 12.3387 22.3588 11.2027 21.6912 10.4111C21.0236 9.61955 20.15 9.39503 19.4114 9.82539Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_93_3979">
                  <rect width="23.9072" height="26.0371" fill="white" transform="matrix(0.54966 -0.835388 0.64472 0.764419 0.156799 20.4309)"/>
                </clipPath>
              </defs>
            </svg>

            <span className="support__button-text">
              Subscribe
            </span>
          </button>
        </form>
      ) : (
        <h2>You are already subscribed to the bank's newsletter</h2>
      )}
    </section>
  );
}
