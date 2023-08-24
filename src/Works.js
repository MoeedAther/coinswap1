import React from 'react';
import step1 from './images/Picture1.png';
import step2 from './images/Picture2.png';
import step3 from './images/Picture3.png';
import step4 from './images/Picture4.png';
import step5 from './images/Picture5.png';
import StepOne from './Work-Component/StepOne';

function Works() {
    const parentStyles = {
        paddingTop: '80px'
      };
      
    return(
        <>

        <div className='container'>
            <div className='row pt-5 pb-5' >
                <h1 className='ms-2' style={{color:"#fff",fontSize:"34px"}}>How does Coinoswap work?</h1>
                
                <div className='col-lg-12 col-xs-12 col-sm-12 col-md-12 d-flex'>
               
                <StepOne 
                sno="Step 1"
                head="Select pair and amount."
                heading="There are 5 simple steps"
                imgsrc={step1}
                para="Pick the currencies you want to trade from the coin drop down list and enter the amount you want to exchange. For example, you can choose BTC in the 'You Send' box and select ETH in the 'You Get' box. The system will automatically calculate the amounts based on the current best rate. Then click on “View Offers” button."
                />
                </div>

                <StepOne 
                sno="Step 2"
                head="Select exchange service."
                imgsrc={step2}
                styles={parentStyles}
                para="Select the exchange you want to trade from the available options. You'll find choices like 'Best Rate,' 'Fastest Swap,' and 'Best Rated.' If you choose 'Best Rate,' the exchanges with the highest rates will be listed first. 'Fastest Swap' shows exchanges that offer the quickest transaction times, and 'Best Rating' displays the highest-rated sites based on user reviews. Additionally, you can click the lock symbol within the exchange box to choose between 'Floating rates' and 'Fixed rates.'"
                />

                <StepOne 
                sno="Step 3"
                head="Confirm wallet address."
                imgsrc={step3}
                styles={parentStyles}
                para='In the "Recipient wallet address" field, enter the Bitcoin address where you want to receive your coins after the exchange. Also, provide the refund address. Optionally, you may also fill in your email address to receive a notification once the exchange is complete.'
                />

                <StepOne 
                sno="Step 4"
                head="Awaiting payment."
                imgsrc={step4}
                styles={parentStyles}
                para='To complete the transaction, send your Bitcoin (BTC) to the address shown on the screen. For convenience, you can also scan the QR code provided on the page.'
                />

                <StepOne 
                sno="Step 5"
                head="Processing swap."
                imgsrc={step5}
                styles={parentStyles}
                para='Please wait until the exchange is fully processed and the coins appear in your wallet. You can also enter your order ID  in the Order Tracker to keep track of your exchange progress as well.'
                />
            </div>
        </div>

        </>
    )
};


export default Works;
