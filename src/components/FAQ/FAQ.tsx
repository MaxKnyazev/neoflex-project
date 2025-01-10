import React, { useState } from 'react';
import './FAQ.scss';
import { FAQItem } from '@c/FAQItem';

interface DataFAQ {
  question: string;
  answer: string;
  category: string;
}

const dataFAQ: DataFAQ[] = [
  {
   question: 'How to get a card?',
   answer: 'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.' ,
   category: 'receiving'
  },
  {
   question: 'What documents are needed and how old should one be to get a card?',
   answer: 'Need a passport. You must be between 20 and 70 years old.',
   category: 'receiving'
  },
  {
   question: 'In what currency can I issue a card?',
   answer: 'In rubles, dollars or euro',
   category: 'receiving'
  },
  {
   question: 'How much income do I need to get a credit card?',
   answer: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.',
   category: 'receiving'
  },
  {
    question: 'How do I find out about the bank\'s decision on my application?',
    answer: 'After registration, you will receive an e-mail with a decision on your application.',
    category: 'receiving'
   },
   {
    question: 'What is an interest free credit card?',
    answer: 'A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.',
    category: 'using'
   },
   {
    question: 'How to activate a credit card',
    answer: 'You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.',
    category: 'using'
   },
   {
    question: 'What is a settlement date?',
    answer: 'The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.',
    category: 'using'
   },
   {
    question: 'What do I need to know about interest rates?',
    answer: 'For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.',
    category: 'using'
   },
 ];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  return (
   <div className='faq'>
    <h3 className="faq__title">Issuing and receiving a card</h3>
    {dataFAQ.filter(item => item.category === 'receiving').map((item, index) => (
    <FAQItem
      key={index}
      question={item.question}
      answer={item.answer}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
    />
    ))}

    <h3 className="faq__title">Using a credit card</h3>
    {dataFAQ.filter(item => item.category === 'using').map((item, index) => (
    <FAQItem
      key={index+5}
      question={item.question}
      answer={item.answer}
      isOpen={activeIndex === index+5}
      onClick={() => handleItemClick(index+5)}
    />
    ))}
   </div>
  )
};