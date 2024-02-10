import React, { useState } from 'react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const faqData = [
    {
      question: 'What is the Maturity Date on the Convertible Note?',
      answer:
        'The Maturity Date is May 1, 2025, which is the date in which the Convertible Note matures, or becomes due.  In the event the Convertible Note remains outstanding on the Maturity Date, then the principal and unpaid accrued interest shall automatically convert into shares of the Issuer’s Common Stock (as defined in the offering documents). For how that is calculated, please review the offering documents.',
    },
    {
      question: 'What is the Discount?',
      answer:
        'The Discount is 20% and represents a discount to the price per share paid by Third-Party Investors (as defined in the offering documents) in the Qualified Financing (as defined in the offering documents).',
    },
    {
      question: 'What is the Valuation Cap?',
      answer:
        'The Valuation Cap is $120M and represents the maximum valuation or “ceiling” on the valuation of the Issuer for Convertible Note Holders at a subsequent equity financing.',
    },
    {
      question: 'What is the minimum and maximum investment to participate?',
      answer:
        'Holders could invest as little as $250 and as much as $123,500. The minimum investment amount for non-sole ownership entities is $5,000.',
    },
  ];

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <span
              className={`transform ${
                isOpen === index ? 'rotate-180' : 'rotate-0'
              } transition-transform`}
            >
              &#x2193;
            </span>
          </button>
          {isOpen === index && (
            <div className="p-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
