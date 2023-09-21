import React, { useState } from "react";
import "./App.css";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoo from './download.jpg'
import logo1 from './slide2.png'
import logo2 from './slide3.png'
import cardimg from './bg-img.jpg'
import cardimg1 from './bg-img2.jpg'
import rec from './images/rechap.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Contactus() {

    const [copied, setCopied] = useState(false);
    const textToCopy = 'pr@coinoswap.com';

    const [copied2, setCopied2] = useState(false);
    const textToCopy2 = 'support@coinoswap.com';
  
    const handleCopy = () => {
      setTimeout(() => setCopied(false), 3000); 
    };

    const handleCopy2 = () => {
        setTimeout(() => setCopied2(false), 3000); 
    };


    return (
     

        <>

            <div className="container">

                <div className="row pb-5 pt-5">
                    <h1 className="mb-4" style={{color:"#fff",fontSize:"30px"}}>Contact Us</h1>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        

                        <form className="contact-form">
                            <div className="row">
                            <div className="form-group col-lg-6">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Name" />
                            </div>
                            <div className="form-group col-lg-12">
                                <select className="form-control" id="exampleFormControlSelect1" style={{height:"60px"}}>
                                    <option>Subject</option>
                                    <option>Support</option>
                                    <option>Become a Partner</option>
                                    <option>Affiliate questions</option>
                                    <option>Marketing & PR</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group col-lg-12">
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Order ID" />
                            </div>
                            <div className="form-group col-lg-12">
                                <textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group col-lg-6">

                              <div className="ps-2 pe-2 pt-2 d-flex" style={{backgroundColor:"#28212A",height:"70px"}}>
                                <div>
                                <input type="checkbox" class="form-check-input ms-1" id="exampleCheck1" style={{padding:"0px",borderRadius:"10px"}}/>
                                <label class="form-check-label ms-5" for="exampleCheck1">I am not a robot</label>
                                </div>
                                <img src={rec} alt="rec" style={{height:'50px',width:"50px",float:"right",marginLeft:"auto"}} />
                              </div>

                            </div>
                            <div className="form-group col-lg-6">
                                <button className="btn btn-primary">NEXT</button>
                            </div>
                            </div>
                        </form>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 socail-in">
                        <p>PR & MARKETING:</p>


                        <h2>
                            <span style={{marginRight:'10px'}}>pr@coinoswap.com</span>
                            <CopyToClipboard text={textToCopy} onCopy={()=> setCopied(true)}>
                                <i className="fa-solid fa-clone" style={{fontSize:"18px",cursor:"pointer",color:"#7D6831"}} onClick={handleCopy}></i>
                            </CopyToClipboard>
                            {copied && <span style={{color:"#B0B0B0", fontSize: "14px", marginLeft:'10px'}}>Copied!</span>}
                        </h2>
                        <p>SUPPORT:</p>
                        <h2>
                            <span style={{marginRight:'10px'}}>support@coinoswap.com</span> 
                            <CopyToClipboard text={textToCopy2} onCopy={()=> setCopied2(true)}>
                                <i className="fa-solid fa-clone" style={{fontSize:"18px",cursor:"pointer",color:"#7D6831"}} onClick={handleCopy2}></i>
                            </CopyToClipboard>
                            {copied2 && <span style={{color:"#B0B0B0", fontSize: "14px", marginLeft:'10px'}}>Copied!</span>}
                        </h2>
                        <p>FOLLOW US:</p>
                        <div className="pt-3">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-youtube ms-4"></i>
                            <i class="fa-brands fa-twitter ms-4"></i>
                            <i class="fa-brands fa-instagram ms-4"></i>
                            <i class="fa-brands fa-tiktok ms-4"></i>
                        </div>
                    </div>
                </div>
    
            </div>
   
        </>


       
    );
}
export default Contactus;