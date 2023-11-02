import React from 'react';
import Common from './Common1';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

const URL=process.env.REACT_APP_URL


function Swaptwo(){

    // State to control the modal visibility
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');


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

    // const selcur = useSelector(state => state.offer.selcur)
    // const getcur = useSelector(state => state.offer.getcur)

    const selcur = localStorage.getItem("selcur");
    const getcur = localStorage.getItem("getcur");

    const amountcur = useSelector(state => state.offer.amountcur)
    const amount_to = useSelector(state => state.offer.amount_to)
    // const sendindex = useSelector((state) => state.offer.sendindex);
    // const getindex = useSelector((state) => state.offer.getindex);

    const sendindex = localStorage.getItem("sendindex");
    const getindex = localStorage.getItem("getindex");

    const transaction_id = useSelector(state => state.offer.transaction_id)
    const exchangename = useSelector(state => state.offer.exchangename)
    const sending_wallet_address = useSelector(state => state.offer.sending_wallet_address)
    const recipient_wallet_address = useSelector(state => state.offer.recipient_wallet_address)

    // const [spin, setSpin] = useState(false);


    console.log("This is",exchangename)


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
          localStorage.setItem("currexname","Changelly")
          setType("Floating")
            
        break;

        case "Changelly_fixed":
          setName("Changelly")
          localStorage.setItem("currexname","Changelly")
          setType("Fixed")

        break;

        case "ChangeHero":
          setName("Changehero")
          localStorage.setItem("currexname","Changehero")
          setType("Floating")
          
              
        break;

        case "Changehero_fixed":
          setName("Changehero")
          localStorage.setItem("currexname","Changehero")
          setType("Fixed")
          

        break;

        case "Stealthex":
          setName("Stealthex")
          localStorage.setItem("currexname","Stealthex")
          setType("Floating")
         

        break;

        case "Stealthio_fixed":
          setName("Stealthex")
          localStorage.setItem("currexname","Stealthex")
          setType("Fixed")
          
        
        break;

        case "Changenow":
          setName("Changenow")
          localStorage.setItem("currexname","Changenow")
          setType("Floating")
          

        break;

        case "Changenow_fixed":
          setName("Changenow")
          localStorage.setItem("currexname","Changenow")
          setType("Fixed")
          
        
        break;

        case "Exolix":
          setName("Exolix")
          localStorage.setItem("currexname","Exolix")
          setType("Floating")
        

        break;

        case "Exolix_fixed":
          setName("Exolix")
          localStorage.setItem("currexname","Exolix")
          setType("Fixed")

        break;

        case "Godex":
          setName("Godex")
          localStorage.setItem("currexname","Godex")
          setType("Floating")
        
        break;

        case "Letsexchange":
          setName("Letsexchange")
          localStorage.setItem("currexname","Letsexchange")
          setType("Floating")

        break;

        case "Letsexchange_fixed":
          setName("Letsexchange")
          localStorage.setItem("currexname","Letsexchange")
          setType("Fixed")
        
        break;

        case "Simpleswap":
          setName("Simpleswap")
          localStorage.setItem("currexname","Simpleswap")
          setType("Floating")         

        break;

        case "Simpleswap_fixed":
          setName("Simpleswap") 
          localStorage.setItem("currexname","Simpleswap")
          setType("Fixed")     
           

        break;

        case "FixedFloat":
          setName("FixedFloat") 
          localStorage.setItem("currexname","FixedFloat")
          setType("Floating")     
           

        break;

        case "FixedFloat_fixed":
          setName("FixedFloat") 
          localStorage.setItem("currexname","FixedFloat")
          setType("Fixed")     
           

        break;

        default:
            console.log("This")
        break;
    }
      },[])
    

      const [copied, setCopied] = useState(false);
      const textToCopy = transaction_id;
      const [copied2, setCopied2] = useState(false);
      const textToCopy2 = sending_wallet_address;
    
      const handleCopy = () => {
        console.log("copied :", copied);
        setTimeout(() => setCopied(false), 3000); 
      };

      const handleCopy2 = () => {
        console.log("copied2 :", copied2);
        setTimeout(() => setCopied2(false), 3000); 
      };


      //............. timer ............//


      
      const [timerComplete, setTimerComplete] = useState(true);

      useEffect(() => {
        
        if (remainingTime > 0) {
          const interval = setInterval(() => {
            setRemainingTime(prevTime => Math.max(prevTime - 1, 0));
          }, 1000);
    
          return () => clearInterval(interval);
        }
        else{
          setTimerComplete(false);
          console.log(timerComplete);
        }
      }, [remainingTime]);
    
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

    return(
      <>
        <section>
        {/* true?false:true */}
        {/* completion */}
            <Common awating_payment={true}  processing_swap={false}/>
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
                          <h3>~ {amount_to}<span>{get}</span><span className='s-chnage-in'>VIA</span><span className='v-ch'>{localStorage.getItem("currexname")}</span></h3>
                      </div>
                  </div>
                  <div className='price col-lg-4 col-sm-12 col-xs-12'>
                    <div className='d-flex price-l'>
                      <h4>
                        <span className='o-track'>order tracker </span> 
                        <span className='d-icon'> ,D: </span>
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
                    <div className='col-lg-6 col-sm-12 col-xs-12 payment'>
                        <h3>Send {amountcur} {sell} to the deposit address below</h3>
                        <h4>Scan the QR code below or copy the address to send your coins</h4>
                        <div style={{backgroundColor: ''}}>
                        <QRCode value={sending_wallet_address} style={{border: "10px solid white" }}  className={`${timerComplete ? 'blur' : ''}`}  />
                        </div>
                        <span className={`qr-code1 mt-2 ${timerComplete ? 'blur' : ''}`}>{sending_wallet_address}</span>
                        <span className='copy-add'>
                            <CopyToClipboard text={textToCopy2} onCopy={()=> setCopied2(true)}>
                              <span className={`${timerComplete ? 'blur' : ''}`} onClick={handleCopy2} style={{color: "#0791B4", cursor: 'pointer'}}>copy address to clipboard</span>
                            </CopyToClipboard>
                            {copied2 && <span style={{color:"#B0B0B0", fontSize: "14px", marginLeft:'10px'}}>Copied!</span>}
                          
                        </span>
                        <h3>Recipient Wallet Address:</h3>
                        <h3 className='f-flex qr-code'>{recipient_wallet_address}</h3>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-xs-12'>
                        <div className='procedure-col procedure-col-sw'>
                            {/* <h3><span>Type:</span>~{type}</h3> */}
                            <h3><span style={{paddingRight:'5px'}}>Type: </span> {type}
                                      <FontAwesomeIcon
                                        className="dd1 fixed_lock fixed_lock2"
                                        icon={faLock}
                                        style={{ color: "#f4f7fa",fontSize:'14px',display: type === "Fixed" ? "inline-block" : "none" }}
                                      />
                                      <FontAwesomeIcon
                                        className="dd1"
                                        icon={faUnlock}
                                        style={{ color: "#f4f7fa",fontSize:'14px',display: type === "Floating" ? "inline-block" : "none" }}
                                      />
                                    </h3>
                            <h3>
                              <span>Deposit time: </span>
                              
                                {timerComplete ? (
                                  <span style={{color:'rgb(190, 152, 11)'}}>Time Expired</span>
                                ): (
                                <span className='time'>
                                  {minutes.toString().padStart(2, '0')}:
                                  {seconds.toString().padStart(2, '0')}
                                </span>
                                )}
                              
                            </h3>
                            <ol>
                                <li>To proceed, kindly send the funds to the designated address and ensure that the deposit amount matches what you are requesting</li>
                                <li>The status of your swap will be updated as soon as the service recieve your required deposit</li>
                                <li>Please note that swap times vary based on specific number of confirmations required and the speed of the blockchain network at the time.
                                    <span>It is recomended to retain your order tracker ID untill the completion of the exchange. Should you have any queries, please do not hesitate to reach out to our support team.</span>
                                    <span style={{color:'rgb(190, 152, 11)'}}><a href='mailto:support@coinoswap.com' target='_blank' style={{color:'rgb(190, 152, 11)'}}>support@coinoswap.com</a></span>
                                </li>
                            </ol>
                            <Link to='/processing_swap'>Processing Swap</Link>
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
  
  export default Swaptwo;