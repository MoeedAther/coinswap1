import React, { useState } from 'react';


const FAQBox = ({ handleScrollToSection }) => {

    const [activeHeading, setActiveHeading] = useState(null);

    const handleClick = (heading) => {
      setActiveHeading(heading);
      handleScrollToSection(heading);
    };

  return (
    <>
    <div className="faq-box">
        <h3 
            className={activeHeading === 'topic1' ? 'active' : ''}
            // onClick={() => handleScrollToSection('topic1')}
            onClick={() => handleClick('topic1')}
        >
            About
        </h3>
        <h3 
            // onClick={() => handleScrollToSection('topic2')}
            className={activeHeading === 'topic2' ? 'active' : ''}
            onClick={() => handleClick('topic2')}
        >
            Transactions
        </h3>
        <h3 
            // onClick={() => handleScrollToSection('topic3')}
            className={activeHeading === 'topic3' ? 'active' : ''}
            onClick={() => handleClick('topic3')}
        >
            Wallets
        </h3>
        <h3 
            // onClick={() => handleScrollToSection('topic4')}
            className={activeHeading === 'topic4' ? 'active' : ''}
            onClick={() => handleClick('topic4')}
        >
            Affiliate Program
        </h3>
    </div>
   </>
  );
};

export default FAQBox;
