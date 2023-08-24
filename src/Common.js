import React from 'react';
// import { Radio } from 'react-loader-spinner';
import ClipLoader from "react-spinners/ClipLoader";

import { useState , useEffect } from 'react';
// import { Puff } from 'react-loader-spinner';
import pict from "./bitcoin.png";
import picture from "./eth.png";
import tick from "./tick.png";
import circle from "./circle.png";

function Common(){
 
    return(
      <>
        <section>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                        <div className='col-10 mx-auto d-flex w-process-p'>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process'>
                            <div className='confirm'>
                                <img src={tick} alt="mypic" width={"25px"} height={"25px"} />
                            </div>
                            <div className='confirm2'>
                                <h3>Confirm wallet address</h3>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process w-process2'>
                            <div className='confirm confirm-load'>
                            <ClipLoader className='loading' color="#BE980B" size={20} />
                            </div>
                            <div className='confirm2'>
                                <h3>Awaiting payment</h3>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5 pt-lg-0 d-flex w-process w-process1'>
                            <div className='confirm'>
                                <img src={circle} alt="mypic" width={"25px"} height={"25px"} />
                            </div>
                            <div className='confirm2 process'>
                                <h3>Processing swap</h3>
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