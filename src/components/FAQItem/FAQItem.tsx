import React, { useRef, useState } from 'react';
import './FAQItem.scss';

export const FAQItem: React.FC = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef()
  return(
    <div className="faq-item" >
      <button className={`faq-item__question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
      <p className='faq-item__question-content'>{question}</p>
      <svg className={`faq-item__arrow ${isOpen ? 'faq-item__arrow--active' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="#33363F" strokeWidth="2"/>
        </svg>
      </button>

     <div ref={contentHeight} className="faq-item__answer-container" style={
          isOpen
          ? { height: contentHeight.current.scrollHeight }
          : { height: "0px" }
         }>
      <p className="faq-item__answer-content">{answer}</p>
     </div>
   </div>
  )
};