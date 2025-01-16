import { useState } from 'react';
import SendSvg from '@a/svg/Send.svg';
import EmailSvg from '@a/svg/Email.svg';
import './SupportForm.scss';

export const SupportForm: React.FC = ({submitHandler}) => {
  const [email, setEmail] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form className="support-form">
      <div className="support-form__wrapper">
        <label className="support-form__email" htmlFor="support-email">
          <img src={EmailSvg} className="support-form__svg-email" alt="" />
        </label>
        <input id="support-email" type="email" placeholder="Your email" className="support-form__input" value={email} onChange={(e) => { emailHandler(e) }} />
      </div>

      <button className="support-form__button" onClick={e => {submitHandler(e, email)}}>
        <img src={SendSvg} className="support-form__svg-send" alt="" />
        <span className="support-form__button-text">
          Subscribe
        </span>
      </button>
    </form>
  );
}
