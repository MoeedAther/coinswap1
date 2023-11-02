import React, { useState, useEffect, useRef } from "react";
import {Col, Container, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Commonrating from "./Commonrating";
import FastestSwap from "./FastestSwap";
import Bestrating from "./Bestrating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";

// first start
import currency from "./crun";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {set_selcur, setsendindex, setgetindex,  set_getcur, set_amountcur, set_inputcur,   set_changenow_fixed_rateid, set_changehero_fixed_rateid, set_stealthio_fixed_rateid, set_changelly_fixed_rateid} from "./features/offerSlice.js";
//end start

const URL = process.env.REACT_APP_URL;

export default function Viewoffer() {
  const navigate = useNavigate();

  const lang = useSelector((state) => state.offer.lang);
  // const sendindex = useSelector((state) => state.offer.sendindex);
  // const getindex = useSelector((state) => state.offer.getindex);

  const sendindex = localStorage.getItem("sendindex");
  const getindex = localStorage.getItem("getindex");

  // const selcur = useSelector((state) => state.offer.selcur);
  // const getcur = useSelector((state) => state.offer.getcur);

  const selcur = localStorage.getItem("selcur");
  const getcur = localStorage.getItem("getcur");

  const amountcur = useSelector((state) => state.offer.amountcur);
  const getamount = useSelector((state) => state.offer.getamount);

  const [amountErr, setAmountErr] = useState(false);
  const [amountMin, setAmountMin] = useState('');



  const [changenow_EEA, set_changenow_EEA] = useState("");
  const [changenow_fixed_EEA, set_changenow_fixed_EEA] = useState("");
  const [changenow_EET, set_changenow_EET] = useState("10-60 min");

  const [godex_EEA, set_godex_EEA] = useState("");
  const [godex_fixed_EEA, set_godex_fixed_EEA] = useState("");
  const [godex_EET, set_godex_EET] = useState("14-51 min");

  const [changehero_EEA, set_changehero_EEA] = useState("");
  const [changehero_fixed_EEA, set_changehero_fixed_EEA] = useState("");
  const [changehero_EET, set_changehero_EET] = useState("12-26 min");

  const [changelly_EEA, set_changelly_EEA] = useState("");
  const [changelly_fixed_EEA, set_changelly_fixed_EEA] = useState("");
  const [changelly_EET, set_changelly_EET] = useState("5-30 min");

  const [fixedfloat_EEA, set_fixedfloat_EEA] = useState("");
  const [fixedfloat_fixed_EEA, set_fixedfloat_fixed_EEA] = useState("");
  const [fixedfloat_EET, set_fixedfloat_EET] = useState("4-10 min");

  const [simpleswap_EEA, set_simpleswap_EEA] = useState("");
  const [simpleswap_fixed_EEA, set_simpleswap_fixed_EEA] = useState("");
  const [simpleswap_EET, set_simpleswap_EET] = useState("9-50 min");

  const [stealthio_EEA, set_stealthio_EEA] = useState("");
  const [stealthio_fixed_EEA, set_stealthio_fixed_EEA] = useState("");
  const [stealthio_EET, set_stealthio_EET] = useState("7-38 min");

  const [letsexchange_EEA, set_letsexchange_EEA] = useState("");
  const [letsexchange_fixed_EEA, set_letsexchange_fixed_EEA] = useState("");
  const [letsexchange_EET, set_letsexchange_EET] = useState("2-44 min");

  const [xolix_EEA, set_xolix_EEA] = useState("");
  const [xolix_fixed_EEA, set_xolix_fixed_EEA] = useState("");
  const [xolix_EET, set_xolix_EET] = useState("22-46 min");

  const [showPopular1, setShowPopular1]=useState(true);
  const [showPopular2, setShowPopular2]=useState(true);

  var [array, setArray] = useState([]);
  const [lockShow, setlockShow] = useState(0);

  
//************************************* API Call ********************************** */

  const [loading, setLoading] = useState(true);

  //This function contains apis that are called from
  const fetchMultipleData = async (sel, get, amount) => {
    
    try{
     setload(true);
     setLoading(true);

  //    const url1 = "http://localhost:5002/minamount";
  
  //    const options1={
  //      method: 'POST',
  //      headers: {
  //        'Content-Type': 'application/json'
  //      },
  //      body: JSON.stringify({sel:sel,get:get,amount:amount})
  //    }


  //  const response1=await fetch(url1,options1);
  //  console.log(response1)
   
  //  const data1=await response1.json();
  //  console.log(data1)
  //  const minAmount = data1.minAmount;
  //  console.log("minimum amount : ",minAmount);
  //  setAmountMin(minAmount);

    dispatch(set_amountcur(amount))
    console.log("Amount is greater than minAmount");
    setAmountErr(false);

     const url=URL+"multiplefetch";
     const content={
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({sell:sel,get:get,amount:amount})
     }
     const response=await fetch(url,content);
     const data=await response.json();
  
     setgval(data.hightprice)

     if(data.pricearray || load==true){
       setArray(data.pricearray);
       setload(false);
       setLoading(false)

       set_changenow_EEA(data.changenow)
       set_changenow_fixed_EEA(data.changenow_fixed)

       set_godex_EEA(data.godex)

       set_changehero_EEA(data.changehero)
       set_changehero_fixed_EEA(data.changehero_fixed)


       set_changelly_EEA(data.changelly)
       set_changelly_fixed_EEA(data.changelly_fixed)

       set_fixedfloat_EEA(data.fixedfloat)
       set_fixedfloat_fixed_EEA(data.fixedfloat_fixed)


       set_simpleswap_EEA(data.simpleswap)
       set_simpleswap_fixed_EEA(data.simpleswap_fixed)


       set_stealthio_EEA(data.stealthio)
       set_stealthio_fixed_EEA(data.stealthio_fixed)


       set_letsexchange_EEA(data.letsexchange)
       set_letsexchange_fixed_EEA(data.letsexchange_fixed)


       set_xolix_EEA(data.exolix)
       set_xolix_fixed_EEA(data.exolix_fixed)

       data.pricearray.forEach((value, index) => {
        switch (value.name) {
          case "changenow_fixed":
            dispatch(set_changenow_fixed_rateid(value.rateId))
            break;

          case "changehero_fixed":
            dispatch(set_changehero_fixed_rateid(value.rateId))
            break;

          case "stealthio_fixed":
            dispatch(set_stealthio_fixed_rateid(value.rateId))
            break;

          case "changelly_fixed":
            dispatch(set_changelly_fixed_rateid(value.rateId))
            setLoading(false);

          break;     
          default:
            // console.log("no fixed price")
            break;
        }
      });


     }else{
      setLoading(true)
     }
    


    }
     catch (error) {
       // setmsg(error.response6.message);
      //  console.log(error)
     }
   };


  const src ="https://www.youtube.com/embed/watch?v=uQEMDjwc0P0&list=RDuQEMDjwc0P0&start_radio=1";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // ......................................Redux........................................//
  const dispatch = useDispatch();
  const init_get_currency = useSelector(
    (state) => state.offer.init_get_currency
  );

  // .................................useState Hook.....................................//
  const [exc, setexc] = useState(true);
  const [bc, setbc] = useState(false);
  const [showexchangesenddrop, setshowexchangesenddrop] = useState(false);
  const [showexchangegetdrop, setshowexchangegetdrop] = useState(false);
  const [showbuysenddrop, setshowbuysenddrop] = useState(false);
  const [showbuygetdrop, setshowbuygetdrop] = useState(false);
  const [exchangesenddata, setexchangesenddata] = useState(sendindex);
  const [exchangegetdata, setexchangegetdata] = useState(getindex);
  const [buysenddata, setbuysenddata] = useState(0);
  const [buygetdata, setbuygetdata] = useState(0);
  const [err, setmsg] = useState("");
  const [sval, setsval] = useState(amountcur);
  const [getval, setgval] = useState();
  const [load, setload] = useState(false);
  const [cr, setcr] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [filtered1, setfiltered1] = useState([]);
  const [searchv, setsearch] = useState();
  const [searchv1, setsearch1] = useState();
  const [counterchange, setcounterchange] = useState(true);
  const [initval1, setinitval1] = useState(selcur);
  const [initval2, setinitval2] = useState(getcur);

  const cur = filtered.length > 0 ? filtered : cr;
  const cur1 = filtered1.length > 0 ? filtered1 : cr;

  //This function swaps coins
  const changeInput = () => {
    var exchangevar = null;

    //swap variables
    exchangevar = exchangesenddata;
    setexchangesenddata(exchangegetdata);
    setexchangegetdata(exchangevar);

    dispatch(setsendindex(exchangesenddata))
    dispatch(setgetindex(exchangegetdata))

    localStorage.setItem("sendindex",exchangesenddata)
    localStorage.setItem("getindex",exchangegetdata)


    const val1=initval1;
    const val2=initval2;

    // console.log("initval1", val1);
    // console.log("initval2", val2);

    setinitval1(val2);
    setinitval2(val1);

    // console.log("initval1", exchangesenddata);
    // console.log("initval2", exchangegetdata);
    
    dispatch(set_selcur(initval2))
    dispatch(set_getcur(initval1))

    localStorage.setItem("selcur",initval2)
    localStorage.setItem("getcur",initval1)

    setLoading(true)
    fetchMultipleData(initval2, initval1,sval);

    if (counterchange == false) {
      setcounterchange(true);
    } else {
      setcounterchange(false);
    }
  };

  const handleSearchChange = (e) => {
    
    setsearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filteredCryptos = cr.filter((crypto) => {
      const { symbol2, symbol } = crypto;
      return (
        symbol2.toLowerCase().includes(searchTerm) ||
        symbol.toLowerCase().includes(searchTerm)
      );
    });

    const exactMatch = [];
    const partialMatch = [];

    filteredCryptos.forEach((crypto) => {
      const { symbol2, symbol } = crypto;
      if (
        symbol2.toLowerCase() === searchTerm ||
        symbol.toLowerCase() === searchTerm
      ) {
        exactMatch.push(crypto);
      } else {
        partialMatch.push(crypto);
      }
    });

    const rearrangedCryptos = exactMatch.concat(partialMatch);
    // return rearrangedCryptos;

    if (rearrangedCryptos.length > 0) {
      setfiltered(rearrangedCryptos);
    } else {
      setfiltered([]);
    }
  };

  const handleSearchChange1 = (e) => {
    setsearch1(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filteredCryptos = cr.filter((crypto) => {
      const { name, symbol } = crypto;
      return (
        name.toLowerCase().includes(searchTerm) ||
        symbol.toLowerCase().includes(searchTerm)
      );
    });

    const exactMatch = [];
    const partialMatch = [];

    filteredCryptos.forEach((crypto) => {
      const { name, symbol } = crypto;
      if (
        name.toLowerCase() === searchTerm ||
        symbol.toLowerCase() === searchTerm
      ) {
        exactMatch.push(crypto);
      } else {
        partialMatch.push(crypto);
      }
    });

    const rearrangedCryptos = exactMatch.concat(partialMatch);
    // return rearrangedCryptos;

    if (rearrangedCryptos.length > 0) {
      setfiltered1(rearrangedCryptos);
    } else {
      setfiltered1([]);
    }
  };

  const handleClickOutside = (e) => {
    const cn = e.target.className;
    console.log(cn);
    if (
      cn === "searchbar" ||
      cn === "search" ||
      cn === "dropdata" ||
      cn === "usym" ||
      cn === "usym_img" ||
      cn === "sym" ||
      cn === "srch_grp_btn" ||
      cn === "srch_grp_btn2" ||
      cn === "dd"
    ) {
      
    }
    else if(cn==="options 1"|| cn==="unisymbol 1"|| cn==="symbol 1" || cn=="fa-solid fa-chevron-down 1" || cn=="ch 1"){
      setfiltered([]);
    }
    else if(cn==="options 2" || cn==="unisymbol 2"|| cn==="symbol 2" || cn=="fa-solid fa-chevron-down 2"|| cn=="ch 2"){
      setfiltered1([]);
    }

    else {
      setshowexchangesenddrop(false);
      setshowexchangegetdrop(false);
      setshowbuysenddrop(false);
      setshowbuygetdrop(false);
      setsearch("");
      setsearch1("");
    }
  };

  const getCryptodata = async () => {
    const { data } = await axios.get(
      "https://api.changenow.io/v1/currencies?active=true"
    );
    if (data) {
      setcr(
        data.map((coin,index) => {
          var string=coin.name

          const index1 = string.indexOf("(");
          const index2 = string.indexOf(")");

          if(index1>=1){
          const substring1=string.substring(index1+1, index2);
          const substring2=string.substring( index1-1, index2+1);
          const substring3=string.substring( 0, index1);
         
          return { coinindex:index, symbol: coin.ticker, name: coin.name, image: coin.image, chainname1:substring1, chainname2:substring2, symbol2:substring3 };
          }else{

          const substring1=string.substring(index1+1, index2);
          const substring2=string.substring( index1-1, index2+1);
          const substring3=string.substring( 0, index1);
         
          return { coinindex:index, symbol: coin.ticker, name: coin.name, image: coin.image, chainname1:substring1, chainname2:substring2, symbol2:coin.name };
          }
    })
      );
    }
    // console.log(cr);
  };

  const handleExchange = async (e) => {
    setLoading(true);
    fetchMultipleData(initval1, initval2, e);
  };

  const handleExchangedrop = async (sell, get) => {
    console.log(cur)
    console.log(cur1)
    setinitval1(sell)
    setinitval2(get)
    dispatch(set_selcur(sell))
    dispatch(set_getcur(get))

    localStorage.setItem("selcur",sell)
    localStorage.setItem("getcur",get)

    fetchMultipleData(sell, get,sval);
  };

  //*****************************useEffects**********************//

    //This use effect binds outside clicks
    useEffect(() => {
      console.log(sendindex)
      console.log(getindex)
      console.log("moeed ather")
      getCryptodata();
      document.addEventListener("click", handleClickOutside, true);
      console.log(initval1)
      console.log(initval2)
      console.log(sval)

      fetchMultipleData(initval1, initval2,sval);
      }, []);

    // Loads refreshes exchange prices after 30 seconds
    useEffect(() => {
        // setInterval(() => {
        //   setLoading(true);
        //   setload(true)
        //   fetchMultipleData(initval1, initval2,sval);
        // }, 30000);
      }, []);

      
    // String Formatting
  function replaceFirstCommaWithPeriodAndRemoveAlphabets(str) {
    // Use the replace() method to replace the first comma with a period
    let newStr = str.replace(",", ".");

    // Use the replace() method to remove the remaining commas, periods, and alphabets from the string
    newStr = newStr.replace(/[^0-9.]/g, '');

    // If there are multiple periods in the string, remove all but the first one
    const index = newStr.indexOf(".");
    if (index !== -1) {
      newStr =
        newStr.substring(0, index + 1) +
        newStr.substring(index + 1).replace(".", "");
        // console.log(newStr);
    }
    return newStr;
  }


  function scrollToPopular() {
    const popularSection = document.getElementById("popularSection");
    const dropdownContainer = document.querySelector(".dropdown-container");
    console.log('popular section');
    if (dropdownContainer && popularSection) {
      // popularSection.scrollIntoView({ behavior: "smooth" });
      dropdownContainer.scrollTop = popularSection.offsetTop - dropdownContainer.offsetTop;
      console.log('scrolling to popular');
    }
  }

  function scrollToPopular2() {
    const popularSection2 = document.getElementById("popularSection2");
    const dropdownContainer = document.querySelector(".dropdown-container");
    console.log('popular section');
    if (dropdownContainer && popularSection2) {
      // popularSection.scrollIntoView({ behavior: "smooth" });
      dropdownContainer.scrollTop = popularSection2.offsetTop - dropdownContainer.offsetTop;
      console.log('scrolling to popular');
    }
  }

  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedItem2, setSelectedItem2] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleItemClick2 = (index) => {
    setSelectedItem2(index);
  };


  return (
    <>
      <div className="offer-margin">
        <Container>
          <div className="row">
            <div className="col-lg-5">
              <p className="selectam">1. {lang.selectapair}</p>
            </div>
            <div className="col-lg-6">
              <p className="selectam selectam1">2. {lang.selectexchange}</p>
            </div>
          </div>

          <Row>
            <Col sm={12} lg={5}>
              <div>
                {" "}
                {/* <ExchangeCrypto boxHeight="320px" display="none" switchBtn="m-auto" funcCall={fetchMultipleData}/> */}



                {/* start */}
      <div className="formContainer formContainer3" style={{height:"320px"}}>
      <div className="tabs">
        <span
          onClick={() => {
            setexc(true);
            setbc(false);
          }}
          style={{
            borderBottom: exc ? "1px solid #fff" : "1px solid #6b4d68",
            color: exc ? "white" : "#6b4d68",
          }}
        >
          {lang.exchangecrypto}
        </span>
        <span
          onClick={() => {
            setexc(false);
            setbc(true);
          }}
          style={{
            borderBottom: bc ? "1px solid #fff" : "1px solid #6b4d68",
            color: bc ? "white" : "#6b4d68",
          }}
        >
          {lang.buycrypto}
        </span>
      </div>
      {exc ? (
        <>
          <div className="label mylabel">
            <span>{lang.yousent}</span>
          </div>

          {amountErr ? (
            <div className="label mylabel3">
            <span>Minimum Amount {amountMin}</span>
          </div>
          ): (
            <span></span>
          )}

          <div className="inp">
            {err ? (
              <p style={{ color: "red", fontSize: 10, position: "absolute" }}>
                {err}
              </p>
            ) : null}
            {!showexchangesenddrop ? (
              <>
                <input
                  type="text"
                  className="in myin"
                  value={sval}
                  // min={0.1}
                  onChange={(e) => {
                    setsval(replaceFirstCommaWithPeriodAndRemoveAlphabets(e.target.value));
                    handleExchange(e.target.value);
                    dispatch(set_inputcur(sval));
                  }}
                />

                <div
                  className="options 1"
                  onClick={() => setshowexchangesenddrop(true)}
                >
                  <span>
                    <span className="unisymbol 1">
                      <img
                        src={`${cr[exchangesenddata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol 1">
                      {cr[exchangesenddata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch 1">
                    <i className="fa-solid fa-chevron-down 1"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv}
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>

                {/* Popular group */}
                <div className="srch_grp">
                    <ul>
                      <li 
                        className="srch_grp_btn" 
                        style={{cursor:'pointer', color: selectedItem === 0 ? '#996600' : '#fff', borderBottom: selectedItem === 0 ? '2px solid #996600' : 'none'}} 
                        onClick={() => {scrollToPopular();handleItemClick(0); setShowPopular1(true)}}
                      >
                        POPULAR CURRENCIES
                      </li>
                      <li 
                        className="srch_grp_btn2" 
                        style={{cursor:'pointer',color: selectedItem === 1 ? '#996600' : '#fff', borderBottom: selectedItem === 1 ? '2px solid #996600' : 'none'}} 
                        onClick={() => {scrollToPopular2();handleItemClick(1);setShowPopular1(false)}}
                      >
                        OTHER CURRENCIES
                      </li>
                    </ul>
                </div>

                <div className="dropdata dropdown-container">

                    {/* Popular */}
                    {
                  cur?.map((x, index) => (
                    showPopular1?(x.symbol=="btc"||x.symbol=="eth"||x.symbol=="xmr"||x.symbol=="xrp"||x.symbol=="zec"||x.symbol=="usdttrc20"||x.symbol=="trx"||x.symbol=="bnbbsx"?                    
                    <div
                        style={{
                          paddingLeft: 5,
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 4,
                        }}
                        data-id={index}
                        onClick={(e) => {
                          console.log("PARENT DIV CLICKED");
                          setexchangesenddata((x.coinindex));  
                          console.log(x.coinindex) 
                          dispatch(setsendindex(x.coinindex))

                          localStorage.setItem("sendindex",x.coinindex)

                          setshowexchangesenddrop(false);
                          handleExchangedrop(cr[x.coinindex]?.symbol,cr[exchangegetdata]?.symbol);                
                          
                        }}
                        className="dd"
                        id="popularSection2"
                      >
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 27,
                            width: 27,
                            background: "rgba(255, 255, 255, 0.209)",
                            borderRadius: 5,
                          }}
                          className="usym"

                          onClick={(e) => {
                            console.log("image clicked");
                            setexchangesenddata((x.coinindex));  
                            console.log(x.coinindex) 
                            dispatch(setsendindex(x.coinindex))
                            localStorage.setItem("sendindex",x.coinindex)
                            setshowexchangesenddrop(false);
                            handleExchangedrop(cr[x.coinindex]?.symbol,cr[exchangegetdata]?.symbol);                
                            
                          }}
                        >
                          <img
                            src={`${x?.image}`}
                            alt="c"
                            style={{ height: 17, width: 17 }}
                            className="usym_img"

                            onClick={(e) => {
                              console.log("image clicked");
                              setexchangesenddata((x.coinindex));  
                              console.log(x.coinindex) 
                              dispatch(setsendindex(x.coinindex))
                              localStorage.setItem("sendindex",x.coinindex)
                              setshowexchangesenddrop(false);
                              handleExchangedrop(cr[x.coinindex]?.symbol,cr[exchangegetdata]?.symbol);                
                              
                            }}
                          />
                        </span>
                        <span
                          data-id={index}
                          className="sym"
                          style={{
                            width: "90%",
                            fontSize: 13,
                            lineHeightStep: 0.2,
                            lineHeight: 1.2,
                          }}
                        >
                          {" "}
                          {x.chainname2?x?.symbol2:x.name}
                          <span style={{color:"#996600"}}>{x.chainname2?x?.chainname2:""}</span>
                          <br />
                          <span
                            style={{
                              fontSize: 10,
                              color: "rgba(255, 255, 255, 0.209)",
                            }}
                          >
                            {x?.chainname1=="Binance Smart Chain"?"BEP20 "+x?.symbol.toUpperCase():x?.symbol.toUpperCase()}
                          </span>
                        </span>
                      </div>:<div></div>):                  
                      <div
                        style={{
                          paddingLeft: 5,
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 4,
                        }}
                        data-id={index}
                        onClick={(e) => {
                          setexchangesenddata(x.coinindex); 
                          console.log(x.coinindex)                   
                          dispatch(setsendindex(x.coinindex))
                          localStorage.setItem("sendindex",x.coinindex)
                          setshowexchangesenddrop(false);
                          handleExchangedrop(cr[x.coinindex]?.symbol,cr[exchangegetdata]?.symbol);
                        }}
                        className="dd"
                        id="popularSection2"
                      >
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 27,
                            width: 27,
                            background: "rgba(255, 255, 255, 0.209)",
                            borderRadius: 5,
                          }}
                          className="usym"
                        >
                          <img
                            src={`${x?.image}`}
                            alt="c"
                            style={{ height: 17, width: 17 }}
                          />
                        </span>
                        <span
                          data-id={index}
                          className="sym"
                          style={{
                            width: "90%",
                            fontSize: 13,
                            lineHeightStep: 0.2,
                            lineHeight: 1.2,
                          }}
                        >
                          {" "}
                          {x.chainname2?x?.symbol2:x.name}
                          <span style={{color:"#996600"}}>{x.chainname2?x?.chainname2:""}</span>
                          <br />
                          <span
                            style={{
                              fontSize: 10,
                              color: "rgba(255, 255, 255, 0.209)",
                            }}
                          >
                            {x?.chainname1=="Binance Smart Chain"?"BEP20 "+x?.symbol.toUpperCase():x?.symbol.toUpperCase()}
                          </span>
                        </span>
                      </div>
                  ))}

                </div>
              </div>
            )}
          </div>

          <div className="row" style={{ height: "50px" }}>
            <div className="col-8">
              <li
                style={{ fontSize: " 12px", color: "grey" }}
                className=" ms-2 mt-2"
              >
                {lang.noextrafees}
              </li>
              <li
                style={{ fontSize: " 12px", color: "#996600", width:"350px" }}
                className="mb-3 ms-2"
              >
                {lang.estimated} :
                <span>
                  {" "}
                  {1} {cr[exchangesenddata]?.symbol.toUpperCase()} ~{" "}
                  {(getval/sval).toFixed(8)=="Infinity" || (getval/sval).toFixed(8)=="NaN"?0:(getval/sval).toFixed(8)} {cr[exchangegetdata]?.symbol.toUpperCase()}{" "}
                </span>
              </li>
            </div>
            <div className="col-4 mt-2">
              <button
                className="ms-auto new-stepper-button-swap new-stepper-button-swap_dark"
                type="button"
                onClick={()=>{
                  var sendindex1 = null;
                  var getindex1 = exchangegetdata;
                  var exchangevar =null;

                  //Swap variables
                  exchangevar = exchangesenddata;
                  sendindex1=getindex1;
                  getindex1=exchangevar;

                  setexchangesenddata(exchangegetdata);
                  setexchangegetdata(exchangevar);

                  //Setting send index for swap page page
                  dispatch(setsendindex(sendindex1))
                  dispatch(setgetindex(getindex1))

                  localStorage.setItem("sendindex",sendindex1)
                  localStorage.setItem("getindex",getindex1)
             
                  const val1=initval1;
                  const val2=initval2;
              
                  // console.log("initval1", val1);
                  // console.log("initval2", val2);
              
                  setinitval1(val2);
                  setinitval2(val1);
              
                  console.log("send index", sendindex1);
                  console.log("get index", getindex1);
              
                  dispatch(set_selcur(initval2))
                  dispatch(set_getcur(initval1))

                  localStorage.setItem("selcur", initval2)
                  localStorage.setItem("getcur", initval1)

                  fetchMultipleData(initval2, initval1,sval);
              
                  if (counterchange == false) {
                    setcounterchange(true);
                  } else {
                    setcounterchange(false);
                  }
                }}
              >
                <svg
                  className="switch-btn"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z"
                    fill="#996600"
                  ></path>
                  <path
                    d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z"
                    fill="#996600"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mylabel2" style={{ padding: "0px", margin: "0px" }}>
            <span style={{ fontSize: "13px" }} className="">
              {lang.youget}
            </span>
          </div>
          <div className="inp">
            {!showexchangegetdrop ? (
              <>
                {load ? (
                  <div className="in" style={{ padding: 14 }}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  <input
                    type="text"
                    className="in myin2"
                    value={getval}
                    style={{ color: "white" }}
                    disabled
                  />
                )}
                <div
                  className="options 2"
                  onClick={() => setshowexchangegetdrop(true)}
                >
                  <span>
                    <span className="unisymbol 2">
                      <img
                        src={`${cr[exchangegetdata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol 2">
                      {cr[exchangegetdata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch 2">
                    <i className="fa-solid fa-chevron-down 2"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv1}
                    onChange={(e) => handleSearchChange1(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>

                {/* Popular group */}
                <div className="srch_grp">
                    <ul>
                      <li 
                        className="srch_grp_btn" 
                        style={{cursor:'pointer', color: selectedItem2 === 0 ? '#996600' : '#fff', borderBottom: selectedItem2 === 0 ? '2px solid #996600' : 'none'}}
                        onClick={() => {scrollToPopular();handleItemClick2(0);setShowPopular1(true)}}
                      >
                        POPULAR CURRENCIES
                      </li>
                      <li 
                        className="srch_grp_btn2" 
                        style={{cursor:'pointer', color: selectedItem2 === 1 ? '#996600' : '#fff', borderBottom: selectedItem2 === 1 ? '2px solid #996600' : 'none'}}
                        onClick={() => {scrollToPopular2();handleItemClick2(1);setShowPopular1(false)}}
                      >
                        OTHER CURRENCIES
                      </li>
                    </ul>
                </div>

                <div className="dropdata dropdown-container">

                  {/* Popular */}

                  {
                  cur1?.map((x, index) => (
                    showPopular2?(x.symbol=="btc"||x.symbol=="eth"||x.symbol=="xmr"||x.symbol=="xrp"||x.symbol=="zec"||x.symbol=="usdttrc20"||x.symbol=="trx"||x.symbol=="bnbbsx"?                    
//second2
<div
style={{
  paddingLeft: 5,
  height: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 4,
}}
data-id={index}
onClick={(e) => {
  setexchangegetdata(x.coinindex);
  dispatch(setgetindex(x.coinindex))
  localStorage.setItem("getindex", x.coinindex)
  setshowexchangegetdrop(false);
  handleExchangedrop(cr[exchangesenddata]?.symbol,cr[x.coinindex]?.symbol);
}}
className="dd"
id="popularSection2"
>
<span
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 27,
    width: 27,
    background: "rgba(255, 255, 255, 0.209)",
    borderRadius: 5,
  }}
  className="usym"
>
  <img
    src={`${x?.image}`}
    alt="c"
    style={{ height: 17, width: 17 }}
  />
</span>
<span
  data-id={index}
  className="sym"
  style={{
    width: "90%",
    fontSize: 13,
    lineHeightStep: 0.2,
    lineHeight: 1.2,
  }}
>
  {" "}
  {x.chainname2?x?.symbol2:x.name}
  <span style={{color:"#996600"}}>{x.chainname2?x?.chainname2:""}</span>
  <br />
  <span
    style={{
      fontSize: 10,
      color: "rgba(255, 255, 255, 0.209)",
    }}
  >
    {x?.chainname1=="Binance Smart Chain"?"BEP20 "+x?.symbol.toUpperCase():x?.symbol.toUpperCase()}
  </span>
</span>
</div>
:<div></div>):

//second2
<div
style={{
  paddingLeft: 5,
  height: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 4,
}}
data-id={index}
onClick={(e) => {
  setexchangegetdata(x.coinindex);
  dispatch(setgetindex(x.coinindex))
  localStorage.setItem("getindex", x.coinindex)
  setshowexchangegetdrop(false);
  console.log(x)
  handleExchangedrop(cr[exchangesenddata]?.symbol,cr[x.coinindex]?.symbol);
}}
className="dd"
id="popularSection2"
>
<span
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 27,
    width: 27,
    background: "rgba(255, 255, 255, 0.209)",
    borderRadius: 5,
  }}
  className="usym"
>
  <img
    src={`${x?.image}`}
    alt="c"
    style={{ height: 17, width: 17 }}
  />
</span>
<span
  data-id={index}
  className="sym"
  style={{
    width: "90%",
    fontSize: 13,
    lineHeightStep: 0.2,
    lineHeight: 1.2,
  }}
>
  {" "}
  {x.chainname2?x?.symbol2:x.name}
  <span style={{color:"#996600"}}>{x.chainname2?x?.chainname2:""}</span>
  {/* {x?.name} */}
  <br />
  <span
    style={{
      fontSize: 10,
      color: "rgba(255, 255, 255, 0.209)",
    }}
  >
    {x?.chainname1=="Binance Smart Chain"?"BEP20 "+x?.symbol.toUpperCase():x?.symbol.toUpperCase()}
    {/* {x?.symbol.toUpperCase()} */}
  </span>
</span>
</div>
                  ))}


                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="inp">
            {!showbuysenddrop ? (
              <>
                <input type="text" className="in" value={1000} />
                <div
                  className="options"
                  onClick={() => setshowbuysenddrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      {currency[buysenddata].symbol}
                    </span>
                    <span className="symbol">{currency[buysenddata].code}</span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input type="text" className="search" />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {currency.map((x, index) => (
                    <div
                      style={{ paddingLeft: 20 }}
                      data-id={index}
                      onClick={(e) => {
                        setbuysenddata(index);
                        setshowbuysenddrop(false);
                      }}
                    >
                      {/* <span style={{ paddingRight: 10, width: 20 }}>
                        {x.symbol}
                      </span> */}
                      <span className="sym"> {x.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="row" style={{ height: "60px" }}>
          </div>
          <div className="inp">
            {!showbuygetdrop ? (
              <>
                <input
                  type="text"
                  className="in"
                  value={0.12489}
                  style={{ color: "#6b4d68" }}
                />
                <div
                  className="options"
                  onClick={() => setshowbuygetdrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur[buygetdata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur[buygetdata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv}
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {cur?.map((x, index) => (
                    <div
                      style={{
                        paddingLeft: 5,
                        height: 45,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 4,
                      }}
                      data-id={index}
                      onClick={(e) => {
                        setbuygetdata(index);
                        setshowbuygetdrop(false);
                      }}
                      className="dd"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 27,
                          width: 27,
                          background: "rgba(255, 255, 255, 0.209)",
                          borderRadius: 5,
                        }}
                        className="usym"
                      >
                        <img
                          src={`${x?.image}`}
                          alt="c"
                          style={{ height: 17, width: 17 }}
                        />
                      </span>
                      <span
                        data-id={index}
                        className="sym"
                        style={{
                          width: "90%",
                          fontSize: 13,
                          lineHeightStep: 0.2,
                          lineHeight: 1.2,
                        }}
                      >
                        {" "}
                        {x?.name}
                        <br />
                        <span
                          style={{
                            fontSize: 10,
                            color: "rgba(255, 255, 255, 0.209)",
                          }}
                        >
                          {x?.symbol.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <Link
        to="/viewoffer"
        className="nav-margin nav-color"
        style={{ display: "none" }}
      >
        <div className="offerbtn">
          <span>{lang.viewoffers}</span>
        </div>
      </Link>
    </div>
                {/* end */}

              </div>

              <div
                className="d-flex mt-3 mb-3"
                style={{ paddingTop: "400px" }}
                
              >
                <div className="d-flex text-white">
                  Fixed rate mode
                  <div
                    className="l1"
                    style={{ display: lockShow === 1 ? "block" : "none" }}
                  >
                    <FontAwesomeIcon
                      className="dd1 fixed_lock"
                      icon={faLock}
                      style={{ color: "#f4f7fa" }}
                      onClick={()=>{setlockShow(lockShow === 0 ? 1 : 0);}}
                    />
                  </div>
                  <div
                    className="l2"
                    style={{ display: lockShow === 0 ? "block" : "none" }}
                  >
                    <FontAwesomeIcon
                      className="dd1"
                      icon={faUnlock}
                      style={{ color: "#f4f7fa" }}
                      onClick={()=>{setlockShow(lockShow === 0 ? 1 : 0);}}
                    />
                  </div>
                </div>
              </div>

              <div className="text-white">
                <p className="fixedRateMode">
                Coinoswap provides an option for fixed rates as well as floating rates. To select and activate fixed rate mode click on the lock above. Fixed rate mode guarantees you receive the agreed amount regardless of rate fluctuations
                </p>
              </div>
            </Col>

            <Col sm={12} lg={7} className="exchanges">
              <p className="selectam selectam2 mt-2">
                2. {lang.selectexchange}
              </p>

              {loading ? (
                <div
                  className="d-flex"
                  style={{
                    borderBottom: "1px solid #6b4d68",
                    paddingBottom: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginBottom: "0px",
                      paddingBottom: "0px",
                    }}
                    className="mt-4"
                  >
                    Searching for Best Rates
                  </p>
                  <div
                    className="ml-4"
                    style={{ paddingTop: "25px", width: "100px" }}
                  >
                    <ClipLoader
                      width="20px"
                      size={20}
                      height="20px"
                      color="white"
                      className=""
                    ></ClipLoader>
                  </div>
                </div>
              ) : (
                <>
                <Tabs className="navs" defaultActiveKey="first">
                  <Tab
                    className="navs1"
                    eventKey="first"
                    title={lang.sortbyrate}
                  >
                    <Commonrating
                      sortedArray={array}
                      name={"best rate"}
                      rating1={changelly_EET}
                      rating2={changelly_EEA}
                      xolix={xolix_EET}
                      xolix2={xolix_EEA}
                      changehero={changehero_EET}
                      changehero2={changehero_EEA}
                      godex={godex_EET}
                      godex2={godex_EEA}
                      simpleswap={simpleswap_EET}
                      simpleswap2={simpleswap_EEA}
                      changenow={changenow_EET}
                      changenow2={changenow_EEA}
                      stealthio={stealthio_EET}
                      stealthio2={stealthio_EEA}
                      letsexchange={letsexchange_EET}
                      letsexchange2={letsexchange_EEA}
                      lockShow={lockShow}
                    />


                  </Tab>

                  <Tab eventKey="second" title={lang.sortbyeta}>
                    <FastestSwap
                      sortedArray={array}
                      name={"fastest swap"}
                      rating1={changelly_EET}
                      rating2={changelly_EEA}
                      rating3={changelly_fixed_EEA}

                      xolix={xolix_EET}
                      xolix2={xolix_EEA}
                      xolix3={xolix_fixed_EEA}

                      fixedfloat={fixedfloat_EET}
                      fixedfloat2={fixedfloat_EEA}
                      fixedfloat3={fixedfloat_fixed_EEA}

                      changehero={changehero_EET}
                      changehero2={changehero_EEA}
                      changehero3={changehero_fixed_EEA}

                      godex={godex_EET}
                      godex2={godex_EEA}
                      godex3={godex_fixed_EEA}

                      simpleswap={simpleswap_EET}
                      simpleswap2={simpleswap_EEA}
                      simpleswap3={simpleswap_fixed_EEA}

                      changenow={changenow_EET}
                      changenow2={changenow_EEA}
                      changenow3={changenow_fixed_EEA}

                      stealthio={stealthio_EET}
                      stealthio2={stealthio_EEA}
                      stealthio3={stealthio_fixed_EEA}

                      letsexchange={letsexchange_EET}
                      letsexchange2={letsexchange_EEA}
                      letsexchange3={letsexchange_fixed_EEA}

                      lockShow={lockShow}
                    />
                  </Tab>

                  <Tab eventKey="third" title={lang.sortbyrating}>
                    <Bestrating
                      sortedArray={array}
                      name={"best rating"}
                      rating1={changelly_EET}
                      rating2={changelly_EEA}
                      fixedfloat={fixedfloat_EET}
                      fixedfloat2={fixedfloat_EEA}
                      xolix={xolix_EET}
                      xolix2={xolix_EEA}
                      changehero={changehero_EET}
                      changehero2={changehero_EEA}
                      godex={godex_EET}
                      godex2={godex_EEA}
                      simpleswap={simpleswap_EET}
                      simpleswap2={simpleswap_EEA}
                      changenow={changenow_EET}
                      changenow2={changenow_EEA}
                      stealthio={stealthio_EET}
                      stealthio2={stealthio_EEA}
                      letsexchange={letsexchange_EET}
                      letsexchange2={letsexchange_EEA}
                      lockShow={lockShow}
                    />
                  </Tab>
                </Tabs>
                
             </>
              )}
              <div className="p-3" style={{display: getval == 0 ? 'block':'none'}}>
                  <div className="no_offers p-3">
                    <p style={{color:'#fff',fontSize:'16px',fontWeight:'600'}}>No Offers Found!</p>
                    <p className="pb-0 mb-0" style={{color:'#BE980B',fontSize:'13px',fontWeight:'500'}}>You sent amount is below threshold equivalent to $5 USD</p>
                    <p className="pb-0 mb-0" style={{color:'#BE980B',fontSize:'13px',fontWeight:'500'}}>Try changing the pair if send amount is correct</p>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}


