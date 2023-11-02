import React, { useEffect } from 'react';
import Common from './Common';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {set_recipient_wallet_address, set_sending_wallet_address, set_transaction_id, set_exchangename} from "./features/offerSlice";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const URL=process.env.REACT_APP_URL


function Swap() {

    const [spin, setSpin] = useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [refAdd, setrefAdd] = useState()
    const [recepientAdd, set_recepientAdd] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [type, setType] = useState()

    const [image1,setImage1]=useState();
    const [image2,setImage2]=useState();
    const [sell,setSell]=useState();
    const [get,setGet]=useState();
    const [selcur,setSelcur]=useState();
    const [getcur,setGetcur]=useState();

    const[showextraId, setShowExtraId] = useState(false);
    const[extraid, setExtraId] = useState("");



    const currexchangename = useSelector(state => state.offer.exchangename)
    const amountcur = useSelector(state => state.offer.amountcur)
    const amount_to = useSelector(state => state.offer.amount_to)

    const sendindex = localStorage.getItem("sendindex");
    const getindex = localStorage.getItem("getindex");

    // const sendindex = useSelector((state) => state.offer.sendindex);
    // const getindex = useSelector((state) => state.offer.getindex);

    const changenow_fixed_rateid = useSelector(state => state.offer.changenow_fixed_rateid)
    const changehero_fixed_rateid = useSelector(state => state.offer.changehero_fixed_rateid)
    const stealthio_fixed_rateid = useSelector(state => state.offer.stealthio_fixed_rateid)
    const changelly_fixed_rateid = useSelector(state => state.offer.changelly_fixed_rateid)


    // State to control the modal visibility
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');


    dispatch(set_recipient_wallet_address(recepientAdd))
    dispatch(set_exchangename(currexchangename))

    //set exchange name and exchange type
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
            setSell(coin.ticker.toUpperCase())
            setSelcur(coin.ticker)
            console.log(coin.hasExternalId)
            if(coin.hasExternalId==true){
              setShowExtraId(true);
            }
          }
        });

        result.forEach((coin,index) => {
          if(index==getindex){
            setImage2(coin.image)
            setGet(coin.ticker.toUpperCase())
            setGetcur(coin.ticker)
          }
        });
      }
      symbolapifunction()
      
      switch (currexchangename) {
        case "Changelly":
          setName("Changelly")
          localStorage.setItem("currexname","Changelly")
          localStorage.setItem("exType","Floating")
          setType("Floating")
            
        break;

        case "Changelly_fixed":
          setName("Changelly")
          localStorage.setItem("currexname","Changelly")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")

        break;

        case "ChangeHero":
          setName("Changehero")
          localStorage.setItem("currexname","Changehero")
          localStorage.setItem("exType","Floating")

          setType("Floating")
          
              
        break;

        case "Changehero_fixed":
          setName("Changehero")
          localStorage.setItem("currexname","Changehero")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")
          

        break;

        case "Stealthex":
          setName("Stealthex")
          localStorage.setItem("currexname","Stealthex")
          localStorage.setItem("exType","Floating")

          setType("Floating")
         

        break;

        case "Stealthio_fixed":
          setName("Stealthex")
          localStorage.setItem("currexname","Stealthex")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")
          
        
        break;

        case "Changenow":
          setName("Changenow")
          localStorage.setItem("currexname","Changenow")
          localStorage.setItem("exType","Floating")

          setType("Floating")
          

        break;

        case "Changenow_fixed":
          setName("Changenow")
          localStorage.setItem("currexname","Changenow")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")
          
        
        break;

        case "Exolix":
          setName("Exolix")
          localStorage.setItem("currexname","Exolix")
          localStorage.setItem("exType","Floating")

          setType("Floating")
        

        break;

        case "Exolix_fixed":
          setName("Exolix")
          localStorage.setItem("currexname","Exolix")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")

        break;

        case "Godex":
          setName("Godex")
          localStorage.setItem("currexname","Godex")
          localStorage.setItem("exType","Floating")

          setType("Floating")
        
        break;

        case "Letsexchange":
          setName("Letsexchange")
          localStorage.setItem("currexname","Letsexchange")
          localStorage.setItem("exType","Floating")

          setType("Floating")

        break;

        case "Letsexchange_fixed":
          setName("Letsexchange")
          localStorage.setItem("currexname","Letsexchange")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")
        
        break;

        case "Simpleswap":
          setName("Simpleswap")
          localStorage.setItem("currexname","Simpleswap")
          localStorage.setItem("exType","Floating")

          setType("Floating")         

        break;

        case "Simpleswap_fixed":
          setName("Simpleswap") 
          localStorage.setItem("currexname","Simpleswap")
          localStorage.setItem("exType","Fixed")
          setType("Fixed")     
           

        break;

        case "FixedFloat":
          setName("FixedFloat") 
          localStorage.setItem("currexname","FixedFloat")
          localStorage.setItem("exType","Floating")

          setType("Floating")     
           

        break;

        case "FixedFloat_fixed":
          setName("FixedFloat") 
          localStorage.setItem("currexname","FixedFloat")
          localStorage.setItem("exType","Fixed")

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

        if(emailIn.trim() === '' || refundIn.trim() === '' || recepientIn.trim() === ''){
          // setErrorMessage('Fill in all required fields.'); 
          // setShowErrorModal(true);
          handleEmailBlur();
          console.log('on click function call');
          
        }else{

        switch (currexchangename) {
            case "Changelly":
              setName("Changelly")
                
            break;

            case "Changelly_fixed":
              setName("Changelly")


            break;

            case "ChangeHero":
              setName("Changehero") 
                    
            const url3 = `${URL}createTransaction/Changehero/float`

            const params3={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                extraid:extraid,                  
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
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo")
            }else{
              setErrorMessage(data3.error.message);
              setShowErrorModal(true);
            }
                                          
            break;

            case "Changehero_fixed":
              setName("Changehero")

            const url4 = `${URL}createTransaction/Changehero/fixed`;

            const params4={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:changehero_fixed_rateid,
                extraid:extraid,                  
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
            console.log(data4.result.payinAddress);

            if(data4.result.id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data4.error.message); 
              setShowErrorModal(true);
            }

            break;

            case "Stealthex":
              setName("Stealthex")
            
            const url5 = `${URL}createTransaction/StealthEX/float`;

            const params5={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:changehero_fixed_rateid,
                extraid:extraid,                  
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
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data5.message); 
              setShowErrorModal(true);
            }

            break;

            case "Stealthio_fixed":
              setName("Stealthex")
            
            const url6 = `${URL}createTransaction/StealthEX/fixed`;
            const params6={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:stealthio_fixed_rateid,
                extraid:extraid,                  
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
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data6.message);
              setShowErrorModal(true);
            }

            break;

            case "Changenow":
              setName("Changenow")
            
            const url7 = `${URL}createTransaction/Changenow/float`;

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
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data7.message); 
              setShowErrorModal(true);
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
            dispatch(set_sending_wallet_address(data8.payinAddress));

            console.log(data8.id)
            console.log(data8.payinAddress)

            if(data8.id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data8.message); 
              setShowErrorModal(true);
            }

            break;

            case "Exolix":
              setName("Exolix")
            
            const url9 = `${URL}createTransaction/Exolix/float`;

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
            dispatch(set_sending_wallet_address(data9.depositAddress));

            if(data9.id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data9.message); 
              setShowErrorModal(true);
            }
            
            break;

            case "Exolix_fixed":
              setName("Exolix")
            
            const url10 = `${URL}createTransaction/Exolix/fixed`;

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
            console.log(data10.depositAddress);

            if(data10.id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data10.message); 
              setShowErrorModal(true);
            }

            break;

            case "Godex":
              setName("Godex")
            
            const url11 = `${URL}createTransaction/Godex/float`;

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
            console.log(data11.deposit);

            if(data11.transaction_id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data11.error); 
              setShowErrorModal(true);
            }

            break;

            case "Letsexchange":
              setName("Letsexchange")

            const url12 = `${URL}createTransaction/Letsexchange/float`;

            const params12={               
                sell: selcur,
                get: getcur,
                amount: parseFloat(amountcur),
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                extraid:extraid,                  
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
            console.log(data12.deposit);

            if(data12.transaction_id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data12.error); 
              setShowErrorModal(true);
            }

            break;

            case "Letsexchange_fixed":
              setName("Letsexchange")
            
            const url13 = `${URL}createTransaction/Letsexchange/fixed`;

            const params13={               
                sell: selcur,
                get: getcur,
                amount: parseFloat(amountcur),
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                extraid:extraid,                  
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
            console.log(data13.deposit);

            if(data13.transaction_id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data13.error); 
              setShowErrorModal(true);
            }

            break;

            case "Simpleswap":
              setName("Simpleswap")

            const url14 = `${URL}createTransaction/Simpleswap/float`;

            const params14={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                extraid:extraid,

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
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data14.description); 
              setShowErrorModal(true);
            }
            
            break;

            case "Simpleswap_fixed":
              setName("Simpleswap")
    
            const url15 = `${URL}createTransaction/Simpleswap/fixed`;

            const params15={               
                sell: selcur,
                get: getcur,
                amount: amountcur,
                recieving_Address: recepientAdd,
                refund_Address: refAdd,
                email: email,
                rateId:"",
                extraid:extraid                  
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
            console.log(data15.id);
            console.log(data15.address_from);
            
            if(data15.id){
              setSpin(true);
              console.log(spin);
              navigate("/swaptwo");
            }else{
              setErrorMessage(data15.description); 
              setShowErrorModal(true);
            }
            break;
            
            case "FixedFloat":
              setName("FixedFloat")
    
              const url16 = `${URL}createTransaction/Fixedfloat/float`;
  
              const params16={               
                  sell: selcur,
                  get: getcur,
                  amount: amountcur,
                  recieving_Address: recepientAdd,
                  refund_Address: refAdd,
                  email: email,
                  rateId:"",
                  extraid:extraid                  
          }
                        
              const options16={
                method:"POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(params16)
              }
            
              const response16= await fetch(url16,options16)
              const data16=await response16.json()
              console.log(data16)
  
              dispatch(set_transaction_id(data16.id))
              dispatch(set_sending_wallet_address(data16.address_from))
              console.log(data16.id);
              console.log(data16.address_from);
              
              if(data16.id){
                setSpin(true);
                console.log(spin);
                navigate("/swaptwo");
              }else{
                setErrorMessage(data16.message); 
                setShowErrorModal(true);
              }
              break;

              case "FixedFloat_fixed":
                setName("FixedFloat")
      
                const url17 = `${URL}createTransaction/Fixedfloat/fixed`;
    
                const params17={               
                    sell: selcur,
                    get: getcur,
                    amount: amountcur,
                    recieving_Address: recepientAdd,
                    refund_Address: refAdd,
                    email: email,
                    rateId:"",
                    extraid:extraid                  
            }
                          
                const options17={
                  method:"POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body:JSON.stringify(params17)
                }
              
                const response17= await fetch(url17,options17)
                const data17=await response17.json()
                console.log(data17)
    
                dispatch(set_transaction_id(data17.id))
                dispatch(set_sending_wallet_address(data17.address_from))
                console.log(data17.id);
                console.log(data17.address_from);
                
                if(data17.id){
                  setSpin(true);
                  console.log(spin);
                  navigate("/swaptwo");
                }else{
                  setErrorMessage(data17.message); 
                  setShowErrorModal(true);
                }
                break;

            default:
                console.log("This filter error");
                  setErrorMessage('Default Case'); 
                  setShowErrorModal(true);
            break;
        }
      }

    }

    const [isChecked, setIsChecked] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
      // Get references to the checkbox and the button
      const checkbox = document.getElementById('flexCheckChecked');
      const proceedButton = document.getElementById('proceedButton');
  
      // Function to update button state and background color
      const updateButtonState = () => {
        const isChecked = checkbox.checked;
        proceedButton.disabled = !isChecked;
        setIsChecked(isChecked);
        proceedButton.className = isChecked ? 'proceed-btn' : 'disabled-button';
      };
  
      // Add an event listener to the checkbox to check its state
      checkbox.addEventListener('change', updateButtonState);
  
      // Initialize the button state and background color based on the checkbox's initial state
      updateButtonState();
  
      // Clean up the event listener when the component unmounts
      return () => {
        checkbox.removeEventListener('change', updateButtonState);
      };
    }, []);


    // input validation

  const [recepientIn, setRecepientIn] = useState('');
  const [refundIn, setRefundIn] = useState('');
  const [emailIn, setEmailIn] = useState('');
  const [recipientErrorVisible, setRecipientErrorVisible] = useState(false);
  const [refundErrorVisible, setRefundErrorVisible] = useState(false);
  const [emailErrorVisible, setEmailErrorVisible] = useState(false);

  const handleRecipientBlur = () => {
    console.log('function call');
    if (recepientIn.trim() === '') {
      setRecipientErrorVisible(true);
      console.log('condition true');
    } else {
      setRecipientErrorVisible(false);
      console.log('condition false');
    }
  };

  const handleRefundBlur = () => {
     handleRecipientBlur();
    console.log('function call');
    if (refundIn.trim() === '') {
      setRefundErrorVisible(true);
      console.log('condition true');
    } else {
      setRefundErrorVisible(false);
      console.log('condition false');
    }
  };

  const handleEmailBlur = () => {
    handleRecipientBlur();
    handleRefundBlur();
   console.log('function call');
   if (emailIn.trim() === '') {
     setEmailErrorVisible(true);
     console.log('condition true');
   } else {
     setEmailErrorVisible(false);
     console.log('condition false');
   }
 };
 

    return (
        <>
            <section>
                <Common confirm_wallet={spin} awating_payment={false} processing_swap={false}/>
                <div className='container-fluid nav-bg'>
                    <div className='row mt-4'>
                      <div className='col-lg-1 col-md-1 d-none d-md-block arrow-back'>
                        <Link to="/viewoffer">
                          <i className="fa-solid fa-arrow-left" style={{color: "white", float: "right", fontSize:"24px"}}></i>
                        </Link>
                      </div>
                        <div className='col-lg-10 col-md-10 change'>
                            <div className='price col-md-4 col-lg-4'>
                                <span className='d-block'>You Send:</span>
                                <div className='d-flex'>

                                    {/* img1 */}
                                    <img src={image1} className='coins' alt="mypic" width={"30px"} height={"35px"} />
                                    <h3>{amountcur} <span>{sell}</span></h3>
                                    <span className='dash d-none d-lg-block mx-auto'> to </span>
                                </div>
                            </div>

                            <div className='price col-lg-6 col-md-8 col-sm-12 col-xs-12'>
                                <span className='d-block'>You get:</span>
                                <div className='d-flex'>
                                    <img src={image2} className='coins' alt="mypic" width={"30px"} height={"35px"} />
                                    <h3> {amount_to} <span>{get}</span><span className='s-chnage-in'>VIA</span><span className='v-ch'>{localStorage.getItem("currexname")}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid nav-bg'>
                    <div className='row mb-5'>
                        <div className='col-lg-10 mx-auto d-flex recieve-info'>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                                <form class="swap-form">
                                    <div class="form-group pt-3">
                                        <label for="exampleInputPassword1">Wallet address to recieve {get} (required)</label>
                                        <textarea 
                                          type="text" 
                                          class="form-control text-white" 
                                          id="exampleInputPassword1" 
                                          placeholder="Recipient wallet address" 
                                          onChange={(e) => {set_recepientAdd(e.target.value); setRecipientErrorVisible(false); setRecepientIn(e.target.value)}}

                                        />
                                        {recipientErrorVisible && (
                                            <div id="recipientError" className="error-message" style={{color:'red'}}>Please enter a valid recipient address.</div>
                                          )}
                                    </div>
                                    <div class="form-group" style={{display: showextraId ? 'block':'none'}}>
                                        <label for="exampleInputPassword1">Enter the XRP Extra ID</label>
                                        <textarea 
                                          type="text" 
                                          class="form-control text-white" 
                                          id="exampleInputPassword1" 
                                          placeholder="Extra ID" 
                                          onChange={(e)=>{setExtraId(e.target.value)}}
                                          />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Wallet address to refund {sell} (required)</label>
                                        <textarea 
                                          type="text" 
                                          class="form-control text-white" 
                                          id="exampleInputPassword1" 
                                          placeholder="Refund wallet address" 
                                          onChange={(e) => { setrefAdd(e.target.value); setRefundErrorVisible(false); setRefundIn(e.target.value) }}
                                          onFocus={handleRecipientBlur}
                                          />
                                          {refundErrorVisible && (
                                            <div id="recipientError" className="error-message" style={{color:'red'}}>Please enter a valid refund address.</div>
                                          )}
                                    </div>
                                    <div class="form-group mail-info-p">
                                        <label className='mail-info' for="exampleInputEmail1">Leave your email address to get notified when your exchange is completed(optional)</label>
                                        <input 
                                          type="email" 
                                          class="form-control text-white" 
                                          id="exampleInputEmail1" 
                                          aria-describedby="emailHelp" 
                                          placeholder="Email address" 
                                          onChange={(e) => { setEmail(e.target.value); setEmailErrorVisible(false); setEmailIn(e.target.value) }}
                                          onFocus={handleRefundBlur}
                                          />
                                          {emailErrorVisible && (
                                            <div id="recipientError" className="error-message" style={{color:'red'}}>Please enter a valid email address.</div>
                                        )}
                                    </div>
                                    <div className='d-flex accept' >
                                        <div class="form-check mr-2 mb-2">
                                            <input type="checkbox" class="form-check-input" id="flexCheckChecked" defaultChecked/>
                                            <label class="form-check-label mail-info text-white" for="flexCheckChecked">I have read and accept the Terms of Use and Privacy Policy</label>
                                        </div>
                                        <div className=''>
                                            <button class="btn proceed-btn" onClick={checkdata} id="proceedButton">PROCEED TO EXCHANGE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                                <div className='procedure-col'>
                                    <h3><span style={{paddingRight:'5px'}}>Type: </span> {localStorage.getItem("exType")}
                                      <FontAwesomeIcon
                                        className="dd1 fixed_lock fixed_lock2"
                                        icon={faLock}
                                        style={{ color: "#996600",fontSize:'14px',display: localStorage.getItem("exType") === "Fixed" ? "inline-block" : "none" }}
                                      />
                                      <FontAwesomeIcon
                                        className="dd1"
                                        icon={faUnlock}
                                        style={{ color: "#f4f7fa",fontSize:'14px',display: localStorage.getItem("exType") === "Floating" ? "inline-block" : "none" }}
                                      />
                                    </h3>
                                    <ol style={{marginTop:'30px'}}>
                                        <li> Provide your recipient wallet address where to recieve your funds</li>
                                        <li> Enter your refund wallet address</li>
                                        <li>Enter your email address to recieve your order tracker ID and updates of your transaction</li>
                                    </ol>
                                    <p className='ml-lg-4 pl-lg-3 mt-4' style={{color:"white", fontSize:'14px'}}>Click on <Link to="/works" style={{color:'rgb(190, 152, 11)'}}>"How It Works"</Link> to get a tutorial of the swap process</p>
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
                            <i className="fa-regular fa-circle-xmark me-3" style={{fontSize:"32px"}}></i>
                            <span style={{fontSize:"32px", fontWeight:'700'}}>Error</span>
                            <span style={{display:'block'}}>{errorMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade ${showErrorModal ? 'show' : ''}`} style={{ display: showErrorModal ? 'block' : 'none' }}></div>

        </>
    );
};

export default Swap;

