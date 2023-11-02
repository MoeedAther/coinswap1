import React from 'react';
import Common from './Common1';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUnlock } from "@fortawesome/free-solid-svg-icons";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import image1 from './bitcoin.png';
import image2 from './eth.png';
import star from './star.png';

import ClipLoader from "react-spinners/ClipLoader";

const URL=process.env.REACT_APP_URL


function ProcessingSwap(){



    // State to control the modal visibility
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const [exchanging, setExchanging] = useState(false);
    const [sending, setSending] = useState(false);
    const [finished, setFinished] = useState(false);
    const [failed, setFailed] = useState(false);
    const [refunded, setRefunded] = useState(false);
    const [processComplete, setProcessComplete] = useState(true);


    const handleShowModal = () =>{
      setShowErrorModal(true);
    }

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [image1,setImage1]=useState()
    const [image2,setImage2]=useState()
    const [sell,setSell]=useState()
    const [get,setGet]=useState()
    const [awating_payment,setAwating_payment]=useState(false)
    const [processing,setProcessing]=useState(false)
    const [remainingTime, setRemainingTime] = useState();

    const [processing_swap, setProcessing_swap] = useState(true);

    const selcur = useSelector(state => state.offer.selcur);
    const getcur = useSelector(state => state.offer.getcur);
    const amountcur = useSelector(state => state.offer.amountcur);
    const amount_to = useSelector(state => state.offer.amount_to);
    const sendindex = useSelector((state) => state.offer.sendindex);
    const getindex = useSelector((state) => state.offer.getindex);
    const transaction_id = useSelector(state => state.offer.transaction_id);
    const exchangename = useSelector(state => state.offer.exchangename);
    const sending_wallet_address = useSelector(state => state.offer.sending_wallet_address);
    const recipient_wallet_address = useSelector(state => state.offer.recipient_wallet_address);

    useEffect(()=>{
        console.log('selcur : ',selcur);
        console.log('getcur : ',getcur);
        console.log('amountcur : ',amountcur);
        console.log('amount_to :',amount_to);
        console.log('sendindex : ',sendindex);
        console.log('getindex : ',getindex);
        console.log('transaction_id : ',transaction_id);
        console.log('exchangename :',exchangename);
    },[]);

    console.log("This is",exchangename)


      const [copied, setCopied] = useState(false);
      const textToCopy = transaction_id;

      const [copied2, setCopied2] = useState(false);
      const textToCopy2 = '0xcb0d8e51A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa0ed2';
    
      const handleCopy = () => {
        console.log("copied :", copied);
        setTimeout(() => setCopied(false), 3000); 
      };

      const handleCopy2 = () => {
        console.log("copied :", copied2);
        setTimeout(() => setCopied2(false), 3000); 
      };


      useEffect(()=>{
        const symbolapifunction=async()=>{
          const url="https://api.changenow.io/v1/currencies?active=true";
          const options={
            method:"GET",
            headers: {
              'Content-Type': 'application/json'
            }
          }
    
          // Api responsible for crypto icons
          const response=await fetch(url,options)
          const result=await response.json()
  
          result.forEach((coin,index) => {
            if(index==sendindex){
              setImage1(coin.image)
              console.log(coin)
              setSell(coin.ticker.toUpperCase())
            }
          });
  
          result.forEach((coin,index) => {
            if(index==getindex){
              setImage2(coin.image)
              setGet(coin.ticker.toUpperCase())
            }
          });
        }
        symbolapifunction()
  
          switch (exchangename) {
            case "Changelly":
              setName("Changelly")
              setType("Floating")
                
            break;
    
            case "Changelly_fixed":
              setName("Changelly")
              setType("Fixed")
    
            break;
    
            case "ChangeHero":
              setName("Changehero")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Changehero`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.result);
                if(result.result=="confirming" || result.result=="exchanging" || result.result=="sending"){
                  setAwating_payment(true)
                }else if(result.result=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute                 
            break;
    
            case "Changehero_fixed":
              setName("Changehero")
              setType("Fixed")
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Changehero`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.result);
                if(result.result=="confirming" || result.result=="exchanging" || result.result=="sending"){
                  setAwating_payment(true)
                }else if(result.result=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
  
  //               waiting	
  // Transaction is waiting for an incoming payment.
  
  // confirming	
  // We have received payin and are waiting for a certain amount of confirmations depending on incoming currency.
  
  // exchanging	
  // Payment was confirmed and is being exchanged.
  
  // sending	
  // Coins are being sent to the recipient address.
  
  // finished	
  // Coins were successfully sent to the recipient address.
  
  // failed	
  // Transaction has failed. In most cases, the amount was less than the minimum. Please contact support and provide a transaction id.
  
  // refunded	
  // Exchange failed and coins were refunded to user's wallet. The wallet address should be provided by user.
  
  // hold	
  // Due to AML/KYC procedure, exchange may be delayed.
  
  // expired	
  // Incoming payment was not sent within the indicated timeframe; incoming funds were not confirmed within the time frame; expected amount and received amount are different.
              }, 30000); // Execute 
    
            break;
    
            case "Stealthex":
              setName("Stealthex")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/StealthEX`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming"|| result.status=="exchanging"|| result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute 
    
            break;
    
            case "Stealthio_fixed":
              setName("Stealthex")
              setType("Fixed")
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/StealthEX`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming"|| result.status=="exchanging"|| result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
                // waiting,
                // confirming, 
                // exchanging, 
                // sending, 
                // finished, 
                // failed, 
                // refunded, 
                // verifying
              }, 30000); // Execute           
            break;
    
            case "Changenow":
              setName("Changenow")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Changenow`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming" ||result.status=="exchanging" ||result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute 
    
            break;
    
            case "Changenow_fixed":
              setName("Changenow")
              setType("Fixed")
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Changenow`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming" ||result.status=="exchanging" ||result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
                // Transaction status:
                // new,
                // waiting,
                // confirming,
                // exchanging,
                // sending,
                // finished,
                // failed,
                // refunded,
                // verifying              
              }, 30000); // Execute 
            
            break;
    
            case "Exolix":
              setName("Exolix")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Exolix`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirmation" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="success"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
  
                // Transaction status:
                // wait
                // confirmation
                // confirmed
                // exchanging
                // sending
                // success
                // overdue
                // refunded
            
              }, 5000); // Execute 
            break;
    
            case "Exolix_fixed":
              setName("Exolix")
              setType("Fixed")
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Exolix`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirmation" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(false)
                }else if(result.status=="success"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute   
            break;
    
            case "Godex":
              setName("Godex")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Godex`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log("Interval code executed!");
                console.log(result.status);
                if(result.status=="confirmation" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="success"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
  
                // wait	The exchange has just been created and it’s waiting for coins to reach the deposit wallet
                // confirmation	The transaction appears in mempool and now it is waiting for necessary network confirmations to start.
                // confirmed	User’s payment is confirmed, the exchange process is about to start.
                // exchanging	The exchange process is running.
                // sending	Currency is being sent to the recipient address.
                // sending_confirmation	Outgoing transaction is waiting for network confirmations.
                // success	The exchange is completed and currency is successfully sent to the recipient address.
                // overdue	Deposit receiving time for this transaction has expired.
                // error	Transaction has failed. In most cases, the amount was sent differs from specified one when creating the transaction.
                // refunded	Exchange was failed and coins were refunded to user's wallet.
              }, 30000); // Execute           
            break;
    
            case "Letsexchange":
              setName("Letsexchange")
              setType("Floating")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Letsexchange`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirmation" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="success"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
  
                // wait	The exchange has just been created and it’s waiting for coins to reach the deposit wallet
                // confirmation	The transaction appears in mempool and now it is waiting for necessary network confirmations to start.
                // confirmed	The user’s payment is confirmed, the exchange process is about to start.
                // exchanging	The exchange process is running.
                // sending	Funds are being sent to the recipient`s address.
                // sending_confirmation	The outgoing transaction is waiting for network confirmations.
                // success	The exchange is completed and the funds are successfully sent to the recipient’s address.
                // aml_check_failed	The deposit was marked as risky by AML check service.
                // overdue	The deposit receiving time for this transaction has expired.
                // error	The transaction has failed. In most cases, the amount that was sent differs from the amount that was specified when creating the transaction.
                // refunded	The exchange failed and the coins were refunded to the user's wallet.
  
              }, 30000); // Execute 
            break;
    
            case "Letsexchange_fixed":
              setName("Letsexchange")
              setType("Fixed")
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Letsexchange`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirmation" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="success"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute
            break;
    
            case "Simpleswap":
              setName("Simpleswap")
              setType("Floating")
              // setType("Fixed")
              setRemainingTime(60*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Simpleswap`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute  
            break;

            // ‘waiting’
            // ‘confirming’
            // `exchanging’, 
            // ‘sending’,
            // ‘finished’,
            // ‘failed’, 
            // ‘refunded’,
            // ‘expired’,
            // ‘verifying’,
            // ‘blacklist’
    
            case "Simpleswap_fixed":
              setName("Simpleswap") 
              setType("Fixed")       
              setRemainingTime(10*60)
              setInterval(async()=> {
                // Code to be executed at each interval
                const url=`${URL}transactionStatus/Simpleswap`;
                const options={
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({id:transaction_id})
                };
                const response =await fetch(url,options)
                const result=await response.json(response)
                console.log(result.status);
                if(result.status=="confirming" || result.status=="confirmed" || result.status=="exchanging" || result.status=="sending"){
                  setAwating_payment(true)
                }else if(result.status=="finished"){
                  setAwating_payment(false)
                  setProcessing(true)
                }
              }, 30000); // Execute 
            break;
    
            default:
                console.log("This")
            break;
        }
        },[])


    return(
      <>
        <section>
        {/* true?false:true */}
        {/* completion */}
            <Common awating_payment={false} exchanging={exchanging}  processing_swap={processing_swap} pComplete={processComplete}/>
            <div className='container-fluid nav-bg'>
              <div className='row mt-4'>
                <div className='col-md-1 d-none d-md-block arrow-back'>
                    <Link to="/swap">
                        <i className="fa-solid fa-arrow-left" style={{color: "white", float: "right", fontSize:"24px"}}></i>
                    </Link>
                </div>
                <div className='col-10 change'>
                  <div className='price col-lg-4 col-md-4'>
                      <span className='d-block get-s'>You Send:</span>
                      <div className='d-flex'>
                          <img src={image1} className='coins' alt="mypic" width={"30px"} height={"35px"}  />
                          <h3 className='my-auto'>{amountcur} <span>{sell}</span></h3>
                          <span className='dash d-none d-lg-block mx-auto'> to </span>
                      </div>
                  </div>
                  <div className='price col-lg-4 col-sm-12 col-xs-12 col-md-7'>
                      <span className='d-block get-s'>You get:</span>
                      <div className='d-flex'>
                          <img src={image2} className='coins' alt="mypic" width={"30px"} height={"35px"}  />
                          <h3>~ {amount_to}<span>{get}</span><span className='s-chnage-in'>VIA</span><span className='v-ch'>{name}</span></h3>
                      </div>
                  </div>
                  <div className='price col-lg-4 col-sm-12 col-xs-12'>
                    <div className='d-flex price-l'>
                      <h4>
                        {/* <span className='o-track'>order tracker </span>  */}
                        <span className='d-icon'>Order ID: </span>
                        <span className='v-ch'>{transaction_id}</span>
                        <CopyToClipboard text={textToCopy} onCopy={()=> setCopied(true)}>
                          <i className="fa-solid fa-clone" style={{fontSize:"16px",cursor:"pointer",color:"#605564",marginTop:'10px'}} onClick={handleCopy}></i>
                        </CopyToClipboard>
                        {copied && <span style={{color:"#B0B0B0", fontSize: "14px", marginLeft:'10px'}}>Copied!</span>}
                      </h4>
                      {/* <img src={iconimg} alt="mypic" width={"25px"} height={"25px"} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container-fluid nav-bg'>
                <div className='row mb-4'>
                    <div className='col-10 mx-auto d-flex recieve-info'>
                        <div className='col-lg-6 col-sm-12 col-xs-12 payment2 procedure_col_fi'>
                            <div className='' style={{height:'150px', visibility: processComplete? 'visible' : 'hidden'}}>
                                <h2 className='mt-3' style={{color:'#BE980B', fontSize:'27px'}}>Exchange Successful!</h2>
                                <div className='d-flex'>
                                    <p className='od_ban'>
                                        <Link to='/viewoffer'><span>CREATE NEW ORDER</span></Link>
                                    </p>
                                    <p className='ms-4 d-flex flex-wrap' style={{color:'white',width:'250px'}}>
                                        <span className='pt-1'>Rate us on</span>
                                        <a href='https://www.trustpilot.com/evaluate/coinoswap.com' target="_blank" className='d-flex'>
                                            <div><img className='ms-1' src={star} alt='star'/></div>
                                            <span className='rate-label pt-1 ms-1'>Truspilot</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className='exchange_succ'>
                                <h3>
                                    <span>Deposit Address: </span>
                                    1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                                </h3>
                                <h3>
                                    <span>Recipient Address: </span>
                                    0x6fP1eP5QGefi2DMPTfTL5SLmv7DivfNa9976
                                </h3>
                                <h3>
                                    <span>ETH Blockchain TX Hash: </span>
                                    0xcb0d8e51A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa0ed2
                                    <CopyToClipboard text={textToCopy2} onCopy={()=> setCopied2(true)}>
                                    <i className="ms-2 fa-solid fa-clone" style={{fontSize:"16px",cursor:"pointer",color:"#605564",marginTop:'10px'}} onClick={handleCopy2}></i>
                                    </CopyToClipboard>
                                    {copied2 && <span style={{color:"#B0B0B0", fontSize: "14px", marginLeft:'10px'}}>Copied!</span>}
                                </h3>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-xs-12'>
                            <div className='procedure-col procedure-col-sw'>
                                <h3>
                                    <span style={{paddingRight:'5px'}}>Type: </span> Floating
                                    <FontAwesomeIcon
                                    className="dd1"
                                    icon={faUnlock}
                                    style={{ color: "#f4f7fa",fontSize:'14px'}}
                                    />
                                </h3>
                                <h3>
                                <span>Blockchain Confirmation: </span>
                                    <span style={{color:'rgb(190, 152, 11)'}}>0</span>
                                </h3>
                            </div>

                            <div className='process_two_col ps-lg-5 col-lg-12'>
                                <div className='col-lg-12 ps-lg-5'>
                                    <div className='process_two_sub_col ps-lg-5 d-flex'>
                                        <div className='process_two_progress'>
                                            {exchanging ? (
                                                <ClipLoader className='loading' color="#BE980B" size={20} />
                                            ):(
                                                sending?(
                                                    <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                ):(
                                                    finished?(
                                                        <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                    ):(
                                                        processComplete?(
                                                            <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                        ):(
                                                            failed?(
                                                                <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                            ):(
                                                                refunded?(
                                                                    <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                                ):(
                                                                    <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )}
                                        </div>
                                        <div className='progress_message'>
                                            <h3 style={{color: exchanging? '#BE980B': sending? '#BE980B': finished? '#BE980B' : processComplete? '#BE980B' : failed? '#BE980B' : refunded? '#BE980B' : '#fff'}}>Exchanging</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 mt-3 ps-lg-5'>
                                    <div className='process_two_sub_col ps-lg-5 d-flex'>
                                        <div className='process_two_progress'>
                                            {sending? (
                                                <ClipLoader className='loading' color="#BE980B" size={20} />
                                            ):(
                                                finished?(
                                                    <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                ):(
                                                    processComplete?(
                                                        <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                    ):(
                                                        failed?(
                                                            <i class="fa-solid fa-xmark" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                        ):(
                                                            refunded?(
                                                                <i class="fa-solid fa-xmark" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                            ):(
                                                                <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                                            )  
                                                        )
                                                    )
                                                )
                                            )}
                                        </div>
                                        <div className='progress_message'>
                                            <h3 style={{color: sending? '#BE980B': finished? '#BE980B': processComplete? '#BE980B' : failed? '#BE980B' : refunded? '#BE980B' : '#fff'}}>Sending</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 mt-3 ps-lg-5'>
                                    <div className='process_two_sub_col ps-lg-5 d-flex'>
                                        <div className='process_two_progress'>
                                            {finished? (
                                                <ClipLoader className='loading' color="#BE980B" size={20} />
                                            ):(
                                                processComplete?(
                                                    <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                ):(
                                                    failed?(
                                                        <i class="fa-solid fa-xmark" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                    ):(
                                                        refunded?(
                                                            <i class="fa-solid fa-xmark" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                        ):(
                                                            <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                                        )
                                                    )
                                                )
                                            )}
                                        </div>
                                        <div className='progress_message'>
                                            <h3 style={{color: finished? '#BE980B': processComplete? '#BE980B': failed? '#BE980B' : refunded? '#BE980B' : '#fff'}}>Finished</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 mt-3 ps-lg-5'>
                                    <div className='process_two_sub_col ps-lg-5 d-flex'>
                                        <div className='process_two_progress'>
                                            {processComplete? (
                                                <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                            ):(
                                                failed? (
                                                <ClipLoader className='loading' color="#BE980B" size={20} />
                                            ):(
                                                refunded?(
                                                    <i className="fa-solid fa-check" style={{fontSize: "19px",color:"#BE980B"}}></i>
                                                ):(
                                                    <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                                ))
                                            )}
                                        </div>
                                        <div className='progress_message'>
                                            <h3 style={{color: failed? '#BE980B': refunded? '#BE980B' : '#fff'}}>Failed</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 mt-3 ps-lg-5'>
                                    <div className='process_two_sub_col ps-lg-5 d-flex'>
                                        <div className='process_two_progress'>
                                            {processComplete? (
                                                <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                            ):(
                                            refunded? (
                                               <ClipLoader className='loading' color="#BE980B" size={20} />
                                            ):(
                                                <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                            )
                                            )}
                                        </div>
                                        <div className='progress_message'>
                                            <h3 style={{color: refunded? '#BE980B':'#fff'}}>Refunded</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='procedure-col procedure-col-sw'>
                                <ul style={{listStyle:'none'}}>
                                    <li>
                                        <span>It is recomended to retain your order tracker ID untill the completion of the exchange. Should you have any queries, please do not hesitate to reach out to our support team.</span>
                                        <span style={{color:'rgb(190, 152, 11)'}}><a href='mailto:support@coinoswap.com' target='_blank' style={{color:'rgb(190, 152, 11)'}}>support@coinoswap.com</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Modal for showing error */}
         <div className={`modal fade ${showErrorModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showErrorModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title">Error</h5> */}
                            <button type="button" className="close" onClick={() => setShowErrorModal(false)} style={{width:'auto'}}>
                                <span aria-hidden="true" className='xmark-btn'>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center pb-5 mb-5">
                            <i className="fa-regular fa-circle-check me-3" style={{fontSize:"32px"}}></i>
                            <span style={{fontSize:"32px", fontWeight:'700'}}>Success</span>
                            <span style={{display:'block'}}>{errorMessage}</span>
                        </div>
                    </div>
                </div>
            </div>

      </>
    );
};
  
  export default ProcessingSwap;