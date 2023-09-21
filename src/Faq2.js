import React, { useState, useRef } from 'react';
import pic from './images/transfer.png';
import pic2 from './images/about.png';
import pic3 from './images/group.png';
import pic4 from './images/wallet.png';
import { NavLink } from 'react-router-dom';
import FAQBox from './TestFaqBox';

function FAQPage() {

  const topic1Ref = useRef(null);
  const topic2Ref = useRef(null);
  const topic3Ref = useRef(null);
  const topic4Ref = useRef(null);

  const handleScrollToSection = (section) => {
      switch (section) {
        case 'topic1':
          topic1Ref.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'topic2':
          topic2Ref.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'topic3':
          topic3Ref.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'topic4':
          topic4Ref.current.scrollIntoView({ behavior: 'smooth' }); 
          break;
        default:
          break;
      }
    };
  const [answersVisible, setAnswersVisible] = useState([]);

  const handleQuestionClick = (index) => {
    setAnswersVisible((prevAnswersVisible) => {
      const updatedAnswersVisible = [...prevAnswersVisible];
      updatedAnswersVisible[index] = !updatedAnswersVisible[index];
      return updatedAnswersVisible;
    });
  };

  return (
    <div className="container">

      <h1 className='mt-5' style={{color:"#fff",fontSize:"32px"}}>Frequently Asked Questions</h1>
     
      <div className='row pt-5 pb-5 faq' style={{borderRadius:"0px",background:"transparent"}}>
      <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5' ref={topic1Ref} style={{borderRadius:"0px",background:"transparent"}}>

          <div className='d-flex'>
            <img src={pic2} alt='' style={{width:"40px",height:"40px"}} />
            <h1 className='mb-3 ms-3' style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>About CoinoSwap</h1>
          </div>
        

          <div className="card1" style={{borderRadius:"0px",background:"transparent"}}>
            <div className="card-header pt-3 pb-4" style={{borderRadius:"0px",background:"transparent",borderTop: "1px solid #4e4a4a"}}>
              <h5 className="mb-0 question" onClick={() => handleQuestionClick(0)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
                What is CoinoSwap?
                <span className="arrow">
                {/* {answersVisible[0] ? '\u25B2' : '\u25BC'} */}
                {answersVisible[0] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </span>
              </h5>
            </div>
            <div className={`card-body answer${answersVisible[0] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
              <p>Coinoswap is a cryptocurrency exchange aggregator that allows the exchange of over 1000 cryptocurrencies at both fixed and floating rates.
                It operates without any restrictions, registration obligations, or extra charges.
              </p>
            </div>
          </div>

          <div className="card1">
            <div className="card-header pt-4 pb-4">
              <h5 className="mb-0 question" onClick={() => handleQuestionClick(1)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
                What makes CoinoSwap different from other Swap Exchanges?
                <span className="arrow">
                  {/* {answersVisible[1] ? '\u25B2' : '\u25BC'} */}
                  {answersVisible[1] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </span>
              </h5>
            </div>
            <div className={`card-body answer${answersVisible[1] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
              <p>
                CoinoSwap constantly tracks optimal exchange rates from multiple cryptocurrency exchange providers, 
                giving users the ability to select the most profitable choice without having to browse through numerous crypto exchanges. 
                The exchange process has been optimized for speed and simplicity without any additional fees. 
              </p>
            </div>
          </div>


          <div className="card1">
            <div className="card-header pt-4 pb-4">
              <h5 className="mb-0 question" onClick={() => handleQuestionClick(2)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
                What makes CoinoSwap trustworthy?
                <span className="arrow">
                  {/* {answersVisible[2] ? '\u25B2' : '\u25BC'} */}
                  {answersVisible[2] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </span>
              </h5>
            </div>
            <div className={`card-body answer${answersVisible[2] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
              <p>As a non-custodial exchange, we eliminate any risks related to custody in our transactions since your funds are not stored on our platform.</p>
            </div>
          </div>

          <div className="card1">
            <div className="card-header pt-4 pb-4">
              <h5 className="mb-0 question" onClick={() => handleQuestionClick(3)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
                Is registration required to use CoinoSwap?
                <span className="arrow">
                {/* {answersVisible[3] ? '\u25B2' : '\u25BC'} */}
                {answersVisible[3] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                </span>
              </h5>
            </div>
            <div className={`card-body answer${answersVisible[3] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
              <p>
                You can easily perform a swap without the need for registration or disclosing any personal details.
              </p>
            </div>
          </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(4)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            Can I use CoinoSwap to purchase cryptocurrency with fiat?
            <span className="arrow">
              {/* {answersVisible[4] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[4] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[4] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>Currently, the option to buy cryptocurrency with fiat is not available. However, we will soon announce the introduction of this feature in the near future.</p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(5)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            How much does CoinoSwap charge?
            <span className="arrow">
              {/* {answersVisible[5] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[5] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[5] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            <p>
                CoinoSwap shares the commissions with the exchange providers instead of adding additional fees for users. 
                This means that you won't have to pay more than what you would normally pay when dealing directly with the integrated exchanges. 
                The conversion rate already includes all the exchange costs, with the exception of the network fees charged by miners.
            </p>
        </div>
      </div>
      
    </div>
    

    
    


{/*...................... second Row .......................*/}


    
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5' ref={topic2Ref} style={{borderRadius:"0px",background:"transparent"}}>
        <div className='d-flex'>
          <img src={pic} alt='' style={{width:"50px",height:"50px"}} />
          <h1 className='mb-3 ms-3' style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>Transactions</h1>
        </div>
    

      <div className="card1" style={{borderRadius:"0px",background:"transparent"}}>
        <div className="card-header pt-3 pb-4" style={{borderRadius:"0px",background:"transparent",borderTop: "1px solid #4e4a4a"}}>
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(6)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What is the minimum and maximum exchange amounts on CoinoSwap?
            <span className="arrow">
              {/* {answersVisible[6] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[6] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[6] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>There is no maximum limit, but please be aware that there are minimum restrictions in place for each coin. These restrictions range from $1 to $20, depending on the specific coin.</p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(7)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            How soon can your order be processed?
            <span className="arrow">
              {/* {answersVisible[7] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[7] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[7] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>The time it takes for your exchange order to complete usually varies between 3 to 50 minutes. This timeframe depends on how fast the network confirms the transaction and generates a new block in the blockchain network. Keep in mind that different coins have different confirmation requirements. The specific exchange times for each coin are also shown on the selected crypto exchange platform where you initiate the exchange.</p>
        </div>
      </div>


      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(8)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What happens if I deposit a coin or token that isn't supported?
            <span className="arrow">
              {/* {answersVisible[8] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[8] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[8] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>We cannot guarantee a refund if you send an asset that CoinoSwap does not support. 
            Please keep this in mind to ensure the security of your funds at all times. You can find a complete list of supported assets here.</p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(9)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What is the expected floating exchange rate?
            <span className="arrow">
              {/* {answersVisible[9] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[9] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[9] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>The floating rate is the rate at this exact moment. 
            Please be aware that it takes time to send the deposit and confirm the transaction, so given the market's volatility, you can receive somewhat less or substantially more than you anticipated.
           </p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(10)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
             Why are the amounts received different from the original estimate?
            <span className="arrow">
              {/* {answersVisible[10] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[10] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[10] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>The swap takes some time to complete. Due to the high volatility of cryptocurrencies, the rate may change while your exchange is still running. 
           As a result, the amount you receive can differ slightly from what you previously anticipated.</p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(11)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            How can I cancel a transaction?
            <span className="arrow">
              {/* {answersVisible[11] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[11] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[11] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            <p>Blockchain transactions cannot be undone or otherwise are irreversible. The transaction cannot be stopped once the funds has been sent. 
                Before sending funds, please double-check all the payment information.
            </p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(12)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What is a transaction hash?
            <span className="arrow">
              {/* {answersVisible[12] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[12] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[12] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>In the blockchain, every transaction is recorded with a unique identification code known as a transaction hash, often referred to as "TX." 
            You can use this TX code to track and verify the status of your transaction within the blockchain.</p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(13)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            Will i need to KYC?
            <span className="arrow">
              {/* {answersVisible[13] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[13] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[13] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>There is no required pre-KYC processes at CoinoSwap. 
            However please note our crypto exchange partners may demand it and are required to execute the AML/KYC procedures based on rules and regulations that apply to the cryptocurrency industry. 
            Our partners' risk management systems may also demand a selective KYC check if they notice a red flag.</p>
        </div>
      </div>

      
    

    </div>


{/*................................. Third Row ...............................*/}



    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5' ref={topic3Ref} style={{borderRadius:"0px",background:"transparent"}}>

      <div className='d-flex'>
        <img src={pic4} alt='' style={{width:"40px",height:"40px"}} />
        <h1 className='mb-3 ms-3' style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>Wallets</h1>
      </div>


      <div className="card1" style={{borderRadius:"0px",background:"transparent"}}>
        <div className="card-header pt-3 pb-4" style={{borderRadius:"0px",background:"transparent",borderTop: "1px solid #4e4a4a"}}>
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(14)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What is wallet address?
            <span className="arrow">
              {/* {answersVisible[14] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[14] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[14] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>A cryptocurrency wallet address is a distinctive string of letters and numbers that is between 26 and 35 characters long. 
             Typically, it appears along the lines of: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
           </p>
        </div>
      </div>

      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(15)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            Where do I get a cryptocurrency wallet address?
            <span className="arrow">
              {/* {answersVisible[15] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[15] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[15] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>
            When you've chosen the cryptocurrency coin you want to buy, look for a trustworthy wallet. There is usually an official wallet for each cryptocurrency.
          </p>
        </div>
      </div>


      <div className="card1">
        <div className="card-header pt-4 pb-4">
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(16)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            What is a recipient address?
            <span className="arrow">
              {/* {answersVisible[16] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[16] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[16] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>When you purchase cryptocurrency, you must have it delivered to a specific crypto wallet. Every coin has its own unique wallet. 
            Your wallet is the destination or recipient address, where your cryptocurrency will be sent following the exchange.
            For example you should enter a Bitcoin or BTC wallet address in the recipient field when purchasing Bitcoin (BTC).
            Once the transaction is done, the exchange will transfer the coins to this address.</p>
        </div>
      </div>
    </div>




{/*................................ Fourth Row ....................................*/}


      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5' ref={topic4Ref} id='affiliate' style={{borderRadius:"0px",background:"transparent"}}>

      <div className='d-flex'>
        <img src={pic3} alt='' style={{width:"40px",height:"40px"}} />
        <h1 className='mb-3 ms-3' style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>Affiliate Program</h1>
      </div>
      {/* <h1 className='mb-3 ms-3' style={{borderRadius:"0px",background:"transparent",color:"#fff",fontSize:"32px"}}>Affiliate Program</h1> */}

      <div className="card1" style={{borderRadius:"0px",background:"transparent"}}>
        <div className="card-header pt-3 pb-4" style={{borderRadius:"0px",background:"transparent",borderTop: "1px solid #4e4a4a"}}>
          <h5 className="mb-0 question" onClick={() => handleQuestionClick(17)} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
            How can I join the affiliate program?
            <span className="arrow">
              {/* {answersVisible[17] ? '\u25B2' : '\u25BC'} */}
              {answersVisible[17] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </span>
          </h5>
        </div>
        <div className={`card-body answer${answersVisible[17] ? ' show' : ''}`} style={{borderRadius:"0px",background:"transparent",color:"#fff"}}>
          <p>
            It's easy to sign up as a CoinoSwap affiliate. You only need to click the "Affiliate program" button on the home page and register and select the affiliate tools that are most effective for you.
           </p>
        </div>
      </div>


    </div>

    </div>


    <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12 d-md-block d-lg-block d-none'>
      <FAQBox handleScrollToSection={handleScrollToSection} />
    </div>


    </div>

    </div>
  );
}

export default FAQPage;
