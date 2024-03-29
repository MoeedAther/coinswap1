import React from 'react';
import Common from './Common';
import pict from "./bitcoin.png";
import picture from "./eth.png";
import pic from "./qr.jpg";
import iconimg from "./order.png";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function Swaptwo(){

    const [name, setName] = useState()
    const [type, setType] = useState()


    const selcur = useSelector(state => state.offer.selcur)
    const getcur = useSelector(state => state.offer.getcur)
    const amountcur = useSelector(state => state.offer.amountcur)
    const amount_to = useSelector(state => state.offer.amount_to)
    const transaction_id = useSelector(state => state.offer.transaction_id)
    const exchangename = useSelector(state => state.offer.exchangename)
    const sending_wallet_address = useSelector(state => state.offer.sending_wallet_address)
    const recipient_wallet_address = useSelector(state => state.offer.recipient_wallet_address)


    console.log("This is",exchangename)


    useEffect(()=>{
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
                
          break;
  
          case "Changehero_fixed":
            setName("Changehero")
            setType("Fixed")
            
  
          break;
  
          case "Stealthex":
            setName("Stealthex")
            setType("Floating")
  
          break;
  
          case "Stealthio_fixed":
            setName("Stealthex")
            setType("Fixed")
            
          
          break;
  
          case "Changenow":
            setName("Changenow")
            setType("Floating")
  
          break;
  
          case "Changenow_fixed":
            setName("Changenow")
            setType("Fixed")
          
          break;
  
          case "Exolix":
            setName("Exolix")
            setType("Floating")
          
  
          break;
  
          case "Exolix_fixed":
            setName("Exolix")
            setType("Fixed")
  
          break;
  
          case "Godex":
            setName("Godex")
            setType("Floating")
          
          break;
  
          case "Letsexchange":
            setName("Letsexchange")
            setType("Floating")
  
          break;
  
          case "Letsexchange_fixed":
            setName("Letsexchange")
            setType("Fixed")
          
          break;
  
          case "Simpleswap":
            setName("Simpleswap")
            setType("Floating")
            setType("Fixed")
  
          break;
  
          case "Simpleswap_fixed":
            setName("Simpleswap") 
            setType("Fixed")       
  
          break;
  
          default:
              console.log("This")
          break;
      }
      },[])

    return(
      <>
        <section>
            <Common />
            <div className='container-fluid nav-bg'>
         <div className='row mt-4'>
         <div className='col-10 mx-auto change'>
         <div className='price col-lg-2 col-md-2'>
                            <span className='d-block get-s'>You Send:</span>
                            <div className='d-flex'>
                                <img src={pict} alt="mypic" width={"20px"} height={"25px"} />
                                <h3>{amountcur} <span>{selcur.toUpperCase()}</span></h3>
                                <span className='dash d-none d-lg-block ml-auto'> - </span>
                            </div>
                        </div>
                        <div className='price col-lg-5 col-sm-12 col-xs-12 col-md-5'>
                            <span className='d-block get-s'>You get:</span>
                            <div className='d-flex'>
                                <img src={picture} alt="mypic" width={"20px"} height={"25px"} />
                                <h3>~ {amount_to}<span>{getcur.toUpperCase()}</span><span className='s-chnage-in'>VIA</span><span className='v-ch'>{name}</span></h3>
                            </div>
                        </div>
                        <div className='price col-lg-4 col-sm-12 col-xs-12 col-md-4'>
                            <div className='d-flex price-l'>
                                <h4><span className='o-track'>order tracker </span> <span className='d-icon'> ,D: </span><span className='v-ch'>{transaction_id}</span></h4>
                                <img src={iconimg} alt="mypic" width={"25px"} height={"25px"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid nav-bg'>
                <div className='row mb-4'>
                    <div className='col-10 mx-auto d-flex recieve-info'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 payment'>
                        <h3>Send {amountcur} {selcur.toUpperCase()} to the deposit address below</h3>
                        <h4>Scan the QR code below or copy the address to send your coins</h4>
                        <img src={pic} alt="mypic" width={"150px"} height={"150px"} />
                        <span className='qr-code1'>{sending_wallet_address}</span>
                        <span className='copy-add'>copy address to clipboard</span>
                        <h3>Recipient Wallet Address:</h3>
                        <h3 className='f-flex qr-code'>{recipient_wallet_address}</h3>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='procedure-col procedure-col-sw'>
                            <h3><span>Type:</span>~{type}</h3>
                            <h3><span>Deposit time: </span><span className='time'> 01:15:15</span></h3>
                            <ol>
                                <li>To proceed, kindly send the funds to the designated address and ensure that the deposit amount matches what you are requesting</li>
                                <li>The status of your swap will be updated as soon as the service recieve your required deposit</li>
                                <li>Please note that swap times vary based on specific number of confirmations required and the speed of the blockchain network at the time.
                                    <span>It is recomended to retain your order tracker ID untill the completion of the exchange. Should you have any queries, please do not hesitate to reach out to our support team.</span>
                                    <span>support@coinoswap.com</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default Swaptwo;