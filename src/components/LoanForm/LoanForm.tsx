import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoanForm.scss';
import { Loader } from '@c/Loader';

export const LoanForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [amount, setAmount] = useState(50000);
  const [isLoading, setIsLoading] = useState(false);

  interface FormData {
    amount: number;
    lastName: string;
    firstName: string;
    patronymic?: string;
    term: string;
    email: string;
    dateOfBirth: string;
    passportSeries: string;
    passportNumber: string;
  }

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    fetch('/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then( 
      data => {
        console.log(data)
        setIsLoading(false);
      }
    )
    .catch(error => {
      console.error(error)
      setIsLoading(false);
    });
  };

  const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  }

  const validateDate = (value: string) => {
    const dateValue = new Date(value);
    console.log(12312312312)
    console.log(dateValue);
    if (!dateValue) {
      return "Incorrect date of birth";
    }

    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    if (dateValue > eighteenYearsAgo) {
      return "Incorrect date of birth";
    }

    return true;
  };

  return (
    <>
      { isLoading && (<Loader />) }

      <form className="loan-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="loan-form__wrapper">
          <div className="loan-form__customize">
            <div className="loan-form__customize-wrapper">
              <div className="loan-form__header">
                <h2 className="loan-form__customize-title">Customize your card</h2>
                <span className="loan-form__step">Step 1 of 5</span>
              </div>

              <div className="loan-form__select">
                <h3 className="loan-form__select-text">Select amount</h3>
                <span className="loan-form__select-text">{amount}</span>
                <input 
                  className="loan-form__select-range" 
                  type="range" 
                  min={15000} 
                  max={600000} 
                  step={5000}
                  value={amount}
                  {...register("amount", {required: true})}
                  onChange={(event) => amountHandler(event)}
                />

                <div className="loan-form__select-limits">
                  <span className="loan-form__select-limit">15 000</span>
                  <span className="loan-form__select-limit">600 000</span>
                </div>
              </div>
            </div>

            <div className="loan-form__amount">
              <h3 className="loan-form__amount-title">You have chosen the amount</h3>
              <span className="loan-form__amount-number">{amount} ₽</span>
              <div className="loan-form__amount-underline"></div>
            </div>
          </div>

          <div className="loan-form__contact">
            <h3 className="loan-form__contact-title">Contact information</h3>

            <div className="loan-form__contact-wrapper">
              <label htmlFor="loan-form-last-name"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your last name <span className="loan-form__contact-required">*</span>
                </div>

                <div className="loan-form__contact-field">
                  <input 
                    id="loan-form-last-name" 
                    type="text" 
                    className={errors.lastName?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"} 
                    placeholder="For Example Doe" 
                    {...register("lastName", {
                      required: {
                        value: true, 
                        message: 'Enter your last name'
                      }, 
                      minLength: 1
                    })}
                  />

                  {errors.lastName?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>
                
                {errors.lastName?.message && (
                  <span className="loan-form__contact-error">{errors.lastName?.message}</span>
                )}
              </label>

              <label htmlFor="loan-form-first-name"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your first name <span className="loan-form__contact-required">*</span>
                </div>

                <div className="loan-form__contact-field">
                  <input 
                    id="loan-form-first-name" 
                    type="text" 
                    className={errors.firstName?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"} 
                    placeholder="For Example Jhon"
                    {...register("firstName", {required: {value: true, message: 'Enter your first name'}, minLength: 1})}
                  />

                  {errors.firstName?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>

                {errors.firstName?.message && (
                  <span className="loan-form__contact-error">{errors.firstName?.message}</span>
                )}
              </label>

              <label htmlFor="loan-form-last-patronymic"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your patronymic
                </div>
                <input 
                  id="loan-form-last-patronymic" 
                  type="text" 
                  className="loan-form__contact-input" 
                  placeholder="For Example Victorovich"
                  {...register("patronymic", {required: false, minLength: 1})}
                />
              </label>

              <label className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                Select term <span className="loan-form__contact-required">*</span>
                </div>
                <select 
                  className="loan-form__contact-input" 
                  defaultValue="6 month"
                  {...register("term", {required: true})}
                >
                  <option value="6 month">6 month</option>
                  <option value="12 month">12 month</option>
                  <option value="18 month">18 month</option>
                  <option value="24 month">24 month</option>
                </select>
              </label>
            </div>

            <div className="loan-form__contact-wrapper">
              <label htmlFor="loan-form-email"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your email <span className="loan-form__contact-required">*</span>
                </div>
                <div className="loan-form__contact-field">
                  <input 
                    id="loan-form-email" 
                    type="email" 
                    className={errors.email?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"} 
                    placeholder="test@gmail.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required"
                      }, 
                      pattern: { 
                        value: /^\S+@\S+$/i, 
                        message: "Incorrect email address"
                      }
                    })}
                  />

                  {errors.email?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>

                {errors.email?.message && (
                  <span className="loan-form__contact-error">{errors.email?.message}</span>
                )}
              </label>

              <label htmlFor="loan-form-last-date"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your date of birth <span className="loan-form__contact-required">*</span>
                </div>

                <div className="loan-form__contact-field">
                  <input
                    id="loan-form-last-date" 
                    type="date"
                    className={errors.dateOfBirth?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"} 
                    placeholder="Select Date and Time"
                    {...register("dateOfBirth", {
                      required: {
                        value: true,
                        message: "Date of Birth is required"
                      },
                      validate: ((date) => validateDate(date))
                    })}
                  />

                  {errors.dateOfBirth?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>

                {errors.dateOfBirth?.message && (
                  <span className="loan-form__contact-error">{errors.dateOfBirth?.message}</span>
                )}
              </label>

              <label htmlFor="loan-form-passport-series"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your passport series <span className="loan-form__contact-required">*</span>
                </div>

                <div className="loan-form__contact-field">
                  <input 
                    id="loan-form-passport-series" 
                    type="number" 
                    className={errors.passportSeries?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"}  
                    placeholder="0000" 
                    {...register("passportSeries", {
                      required: {
                        value: true,
                        message: "Passport series is required"
                      },
                      pattern: {
                        value: /^\d{4}$/,
                        message: "The series must be 4 digits"
                      }
                    })}
                  />

                  {errors.passportSeries?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>

                {errors.passportSeries?.message && (
                  <span className="loan-form__contact-error">{errors.passportSeries?.message}</span>
                )}
              </label>

              <label htmlFor="loan-form-passport-number"  className="loan-form__contact-label">
                <div className="loan-form__contact-text">
                  Your passport number <span className="loan-form__contact-required">*</span>
                </div>

                <div className="loan-form__contact-field">
                  <input 
                    id="loan-form-passport-number" 
                    type="number" 
                    className={errors.passportNumber?.message ? "loan-form__contact-input loan-form__contact-input--incorrect" : "loan-form__contact-input"}  
                    placeholder="000000" 
                    {...register("passportNumber", {
                      required: {
                        value: true,
                        message: "Passport number is required"
                      },
                      pattern: {
                        value: /^\d{6}$/,
                        message: "The number must be 6 digits"
                      }
                    })}
                  />

                  {errors.passportNumber?.message && (
                    <svg className="loan-form__contact-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#DADADA"/><g id="Prescoring (error input)"><g id="Group 1325"><g id="Rectangle 335" filter="url(#filter0_dd_0_1)"><rect x="-289" y="-368" width="1300" height="620" rx="28" fill="white"/></g><g id="Group 1328"><rect id="Rectangle 4139" x="-256" y="-7" width="295" height="38" rx="5" fill="#F9F5E3" stroke="#FF5631" strokeWidth="2"/><g id="Close_round_fill"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z" fill="#FF5631"/></g></g></g></g><defs><filter id="filter0_dd_0_1" x="-297" y="-376" width="1316" height="636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/></filter></defs>
                    </svg>
                  )}
                </div>

                {errors.passportNumber?.message && (
                  <span className="loan-form__contact-error">{errors.passportNumber?.message}</span>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="loan-form__submit">
          <button className="loan-form__button">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}