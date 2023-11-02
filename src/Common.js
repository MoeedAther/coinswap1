import React from 'react';
// import { Radio } from 'react-loader-spinner';
import ClipLoader from "react-spinners/ClipLoader";
import { useState , useEffect } from 'react';
// import { Puff } from 'react-loader-spinner';
import pict from "./bitcoin.png";
import picture from "./eth.png";
import tick from "./tick.png";
import circle from "./circle.png";

function Common(props){
    const  spins  = props.spins;
    const confirmation = props.confirmations;
    const confirm_wallet = props.confirm_wallet;
    // const exchange_v = props.exchanging;

    const awating_payment=props.awating_payment;
    const processing_swap=props.processing_swap;

    const [complete, setComplete] = useState(true);
    
    console.log('SPIN', props.spin);
 
    return(
      <>
        <section>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto d-flex w-process-p'>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process ps-0'>
                            <div className={` ${confirm_wallet ? 'confirm' : 'confirm-load'}`} style={{paddingTop: confirm_wallet ? '13px' :'0px',paddingLeft: confirm_wallet ? '15px' :'10px'}}>
                                {confirm_wallet ? (
                                    <i className="fa-solid fa-check" style={{fontSize: "19px"}}></i>
                                ) : (
                                
                                    <ClipLoader className='loading' color="#BE980B" size={20} />
                                )}
                            </div>
                            <div className='confirm2'>
                                <h3 style={{color: "#BE980B"}}>Confirm wallet address</h3>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process w-process2'>
                            <div className='confirm3'>
                                
                                {confirm_wallet==false ? (
                                    <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                ) : (
                                    confirmation || complete ? (
                                    <i className="fa-solid fa-check" style={{fontSize: "19px"}}></i>
                                ) : (
                                    <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
                                )
                                )}
                            </div>
                            <div className='confirm2'>
                                <h3 style={{ color: confirm_wallet? "#BE980B" : "white" }}>Awaiting payment</h3>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process w-process1'>
                        <div className='confirm3'>
    
                            <i className="fa-regular fa-circle" style={{ color: "#6B4D68", fontSize: "19px" }}></i>
    
                        </div>

                        <div className='confirm2 process'>
                            <h3 style={{ color:  "white" }}>Processing swap</h3>
                        </div>
                        </div>
                        
                    </div>
                </div>
           </div>


        </section>
      </>
    );
  };
  
  export default Common;