
import React, { useEffect } from 'react';
import Common from './Common';
import pict from "./bitcoin.png";
import picture from "./eth.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {set_recipient_wallet_address, set_sending_wallet_address, set_transaction_id, set_exchangename} from "./features/offerSlice";
import { useSelector } from 'react-redux';
import { useState } from 'react';
const URL=process.env.REACT_APP_URL


function Swap() {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [refAdd, setrefAdd] = useState()
    const [recepientAdd, set_recepientAdd] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [type, setType] = useState()

    const currexchangename = useSelector(state => state.offer.exchangename)
    const selcur = useSelector(state => state.offer.selcur)
    const getcur = useSelector(state => state.offer.getcur)
    const amountcur = useSelector(state => state.offer.amountcur)
    const amount_to = useSelector(state => state.offer.amount_to)

    const changenow_fixed_rateid = useSelector(state => state.offer.changenow_fixed_rateid)
    const changehero_fixed_rateid = useSelector(state => state.offer.changehero_fixed_rateid)
    const stealthio_fixed_rateid = useSelector(state => state.offer.stealthio_fixed_rateid)
    const changelly_fixed_rateid = useSelector(state => state.offer.changelly_fixed_rateid)


    dispatch(set_recipient_wallet_address(recepientAdd))
    dispatch(set_exchangename(currexchangename))

    //set exchange name and exchange type
    useEffect(()=>{
      switch (currexchangename) {
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



    //**************************************** Api Filter *********************************//

    const  checkdata = async (e)=>{
        e.preventDefault();

        switch (currexchangename) {
            case "Changelly":
              setName("Changelly")
                
            break;

            case "Changelly_fixed":
              setName("Changelly")


            break;

            case "ChangeHero":
              setName("Changehero")
                    
            const url3 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Changehero/float"

            const params3={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                recieving_Extra_Id:"",                  
        }
                      
            const options3={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params3)
            }
          
            const response3= await fetch(url3,options3)
            const data3=await response3.json()
            console.log(data3)

            dispatch(set_transaction_id(data3.result.id))
            dispatch(set_sending_wallet_address(data3.result.payinAddress))
            console.log(data3.result.id)
            console.log(data3.result.payinAddress)

            if(data3.result.id){
              navigate("/swaptwo")
            }
                                          
            break;

            case "Changehero_fixed":
              setName("Changehero")

            const url4 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Changehero/fixed";

            const params4={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:changehero_fixed_rateid,
                recieving_Extra_Id:"",                  
        }
                      
            const options4={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params4)
            }
          
            const response4= await fetch(url4,options4)
            const data4=await response4.json()
            console.log(data4)

            dispatch(set_transaction_id(data4.result.id))
            dispatch(set_sending_wallet_address(data4.result.payinAddress))
            console.log(data4.result.id)
            console.log(data4.result.payinAddress)

            if(data4.result.id){
              navigate("/swaptwo")
            }

            break;

            case "Stealthex":
              setName("Stealthex")
            
            const url5 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/StealthEX/float";

            const params5={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:changehero_fixed_rateid,
                recieving_Extra_Id:"",                  
        }
                      
            const options5={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params5)
            }
          
            const response5= await fetch(url5,options5)
            const data5=await response5.json()
            console.log(data5)

            dispatch(set_transaction_id(data5.id))
            dispatch(set_sending_wallet_address(data5.address_from))
            console.log(data5.id)
            console.log(data5.address_from)

            if(data5.id){
              navigate("/swaptwo")
            }

            break;

            case "Stealthio_fixed":
              setName("Stealthex")
            
            const url6 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/StealthEX/fixed";

            const params6={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:stealthio_fixed_rateid,
                recieving_Extra_Id:"",                  
        }
                      
            const options6={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params6)
            }
          
            const response6= await fetch(url6,options6)
            const data6=await response6.json()
            console.log(data6)

            dispatch(set_transaction_id(data6.id))
            dispatch(set_sending_wallet_address(data6.address_from))
            console.log(data6.id)
            console.log(data6.address_from)

            if(data6.id){
              navigate("/swaptwo")
            }

            break;

            case "Changenow":
              setName("Changenow")
            
            const url7 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Changenow/float"

            const params7={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:""                  
        }
                      
            const options7={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params7)
            }
          
            const response7= await fetch(url7,options7)
            const data7=await response7.json()

            console.log(data7)
            dispatch(set_transaction_id(data7.id))
            dispatch(set_sending_wallet_address(data7.payinAddress))

            console.log(data7.id)
            console.log(data7.payinAddress)

            if(data7.id){
              navigate("/swaptwo")
            }

            break;

            case "Changenow_fixed":
              setName("Changenow")
            
            const url8 = "http://localhost:5002/createTransaction/Changenow/fixed"

            const params8={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:changenow_fixed_rateid                  
        }
                      
            const options8={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params8)
            }
          
            const response8= await fetch(url8,options8)
            const data8=await response8.json()

            console.log(data8)
            dispatch(set_transaction_id(data8.id))
            dispatch(set_sending_wallet_address(data8.payinAddress))

            console.log(data8.id)
            console.log(data8.payinAddress)

            break;

            case "Exolix":
              setName("Exolix")
            
            const url9 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Exolix/float"

            const params9={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:""                  
        }
                      
            const options9={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params9)
            }
          
            const response9= await fetch(url9,options9)
            const data9=await response9.json()

            dispatch(set_transaction_id(data9.id))
            dispatch(set_sending_wallet_address(data9.depositAddress))

            if(data9.id){
              navigate("/swaptwo")
            }
            

            break;

            case "Exolix_fixed":
              setName("Exolix")
            
            const url10 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Exolix/fixed"

            const params10={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:""                  
        }
                      
            const options10={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params10)
            }
          
            const response10= await fetch(url10,options10)
            const data10=await response10.json()

            dispatch(set_transaction_id(data10.id))
            dispatch(set_sending_wallet_address(data10.depositAddress))
            console.log(data10.id)
            console.log(data10.depositAddress)

            if(data10.id){
              navigate("/swaptwo")
            }

            break;

            case "Godex":
              setName("Godex")
            
            const url11 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Godex/float"

            const params11={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:""                  
        }
                      
            const options11={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params11)
            }
          
            const response11= await fetch(url11,options11)
            const data11=await response11.json()

            dispatch(set_transaction_id(data11.transaction_id))
            dispatch(set_sending_wallet_address(data11.deposit))
            console.log(data11.transaction_id)
            console.log(data11.deposit)

            if(data11.transaction_id){
              navigate("/swaptwo")
            }

            break;

            case "Letsexchange":
              setName("Letsexchange")

            const url12 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Letsexchange/float"

            const params12={               
                sell: selcur,
                get: getcur,
                amount: parseFloat(amountcur),
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                recieving_Extra_Id:"",                  
        }
                      
            const options12={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params12)
            }
          
            const response12= await fetch(url12,options12)
            const data12=await response12.json()
            console.log(data12)

            dispatch(set_transaction_id(data12.transaction_id))
            dispatch(set_sending_wallet_address(data12.deposit))
            console.log(data12.transaction_id)
            console.log(data12.deposit)

            if(data12.transaction_id){
              navigate("/swaptwo")
            }

            break;

            case "Letsexchange_fixed":
              setName("Letsexchange")
            
            const url13 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Letsexchange/fixed"

            const params13={               
                sell: selcur,
                get: getcur,
                amount: parseFloat(amountcur),
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                recieving_Extra_Id:"",                  
        }
                      
            const options13={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params13)
            }
          
            const response13= await fetch(url13,options13)
            const data13=await response13.json()
            console.log(data13)

            dispatch(set_transaction_id(data13.transaction_id))
            dispatch(set_sending_wallet_address(data13.deposit))
            console.log(data13.transaction_id)
            console.log(data13.deposit)

            if(data13.transaction_id){
              navigate("/swaptwo")
            }

            break;

            case "Simpleswap":
              setName("Simpleswap")

            const url14 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Simpleswap/float"

            const params14={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                recieving_Extra_Id:"",                  
        }
                      
            const options14={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params14)
            }
          
            const response14= await fetch(url14,options14)
            const data14=await response14.json()
            console.log(data14)

            dispatch(set_transaction_id(data14.id))
            dispatch(set_sending_wallet_address(data14.address_from))
            console.log(data14.id)
            console.log(data14.address_from)

            if(data14.id){
              navigate("/swaptwo")
            }
            
            break;

            case "Simpleswap_fixed":
              setName("Simpleswap")
    
            const url15 = "https://easy-hare-helmet.cyclic.cloud/createTransaction/Simpleswap/fixed"

            const params15={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                recieving_Extra_Id:"",                  
        }
                      
            const options15={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params15)
            }
          
            const response15= await fetch(url15,options15)
            const data15=await response15.json()
            console.log(data15)

            dispatch(set_transaction_id(data15.id))
            dispatch(set_sending_wallet_address(data15.address_from))
            console.log(data15.id)
            console.log(data15.address_from)
            
            if(data15.id){
              navigate("/swaptwo")
            }

            break;

            default:
                console.log("This")
            break;
        }

    }
    return (
        <>
            <section>
                <Common />
                <div className='container-fluid nav-bg'>
                    <div className='row mt-4'>
                        <div className='col-10 mx-auto change'>
                            <div className='price col-md-2 col-lg-2'>
                                <span className='d-block'>You Send:</span>
                                <div className='d-flex'>
                                    <img src={pict} alt="mypic" width={"20px"} height={"25px"} />
                                    <h3>{amountcur} <span>{selcur.toUpperCase()}</span></h3>
                                    <span className='dash d-none d-lg-block ml-auto'> - </span>
                                </div>
                            </div>

                            <div className='price col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <span className='d-block'>You get:</span>
                                <div className='d-flex'>
                                    <img src={picture} alt="mypic" width={"20px"} height={"25px"} />
                                    <h3>~ {amount_to} <span>{getcur.toUpperCase()}</span><span className='s-chnage-in'>VIA</span><span className='v-ch'>{name}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid nav-bg'>
                    <div className='row mb-5'>
                        <div className='col-10 mx-auto d-flex recieve-info'>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Wallet address to recieve {getcur.toUpperCase()} (required)</label>
                                        <textarea type="text" class="form-control text-white" id="exampleInputPassword1" placeholder="Recipient wallet address" onChange={(e) => {set_recepientAdd(e.target.value)}} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Wallet address to refund {selcur.toUpperCase()} (required)</label>
                                        <textarea type="text" class="form-control text-white" id="exampleInputPassword1" placeholder="Refund wallet address" onChange={(e) => { setrefAdd(e.target.value) }} />
                                    </div>
                                    <div class="form-group mail-info-p">
                                        <label className='mail-info' for="exampleInputEmail1">Leave your email address to get notified when your exchange is completed(optional)</label>
                                        <input type="email" class="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className='d-flex accept'>
                                        <div class="form-check mr-2">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label mail-info text-white" for="exampleCheck1">I have read and accept the Terms of Use and Privacy Policy</label>
                                        </div>
                                        <div className='ml-auto'>
                                            <button class="btn proceed-btn" onClick={checkdata} >PROCEED TO EXCHANGE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                                <div className='procedure-col'>
                                    <h3><span>Type:</span>~ {type}</h3>
                                    <ol>
                                        <li>Provide your recipient wallet address where to recieve your funds</li>
                                        <li>Enter your refund wallet address</li>
                                        <li>Enter your email address to recieve your order tracker ID and updates of your transaction</li>
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

export default Swap;