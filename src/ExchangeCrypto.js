import React, { useEffect, useRef, useState } from "react";
import currency from "./crun";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {set_selcur, set_getcur, set_amountcur, set_inputcur, setsendindex, setgetindex, setgetamount} from "./features/offerSlice.js";
import { useSelector } from "react-redux";
const URL = process.env.REACT_APP_URL;

function ExchangeCrypto(props) {
  // ...........................Redux..................................//
  const dispatch = useDispatch();
  const init_get_currency = useSelector((state) => state.offer.init_get_currency);
  const selcur = useSelector((state) => state.offer.selcur);
  const getcur = useSelector((state) => state.offer.getcur);
  const amountcur = useSelector((state) => state.offer.amountcur);
  const lang = useSelector((state) => state.offer.lang);

  // .............................useState Hook........................//
  const [exc, setexc] = useState(true);
  const [bc, setbc] = useState(false);
  const [showexchangesenddrop, setshowexchangesenddrop] = useState(false);
  const [showexchangegetdrop, setshowexchangegetdrop] = useState(false);
  const [showbuysenddrop, setshowbuysenddrop] = useState(false);
  const [showbuygetdrop, setshowbuygetdrop] = useState(false);

  //Exchange currency object index storing state
  const [exchangesenddata, setexchangesenddata] = useState(0);
  const [exchangegetdata, setexchangegetdata] = useState(1);

  const [buysenddata, setbuysenddata] = useState(0);
  const [buygetdata, setbuygetdata] = useState(0);

  //It stores error message such as minimum amount
  const [err, setmsg] = useState("");

  //This state stores sell vall
  const [sval, setsval] = useState(0.1);
  //This state stores get vall
  const [getval, setgval] = useState();

  //This state sets loading
  const [load, setload] = useState(false);

  //This state stores crypto bojects in array
  const [cr, setcr] = useState([]);

  //Stores filtered crypto objects in array
  const [filtered, setfiltered] = useState([]);
  //Stores filtered crypto objects in array
  const [filtered1, setfiltered1] = useState([]);

  //Purpose to store first crypto search value
  const [searchv, setsearch] = useState();

  //Purpose to store first crypto search1 value
  const [searchv1, setsearch1] = useState();

  //States checks change in value
  const [counterchange, setcounterchange] = useState(true);

  //Inital values for api
  const [initval1, setinitval1] = useState("btc");
  const [initval2, setinitval2] = useState("eth");

  //Array state
  var [array, setArray] = useState([]);

  //..........................Exchange Variables Hooks...............//

  const [changenow_EEA, set_changenow_EEA] = useState("");

  const [godex_EEA, set_godex_EEA] = useState("");

  const [changehero_EEA, set_changehero_EEA] = useState("");

  const [changelly_EEA, set_changelly_EEA] = useState("");

  const [fixedfloat_EEA, set_fixedfloat_EEA] = useState("");

  const [simpleswap_EEA, set_simpleswap_EEA] = useState("");

  const [stealthio_EEA, set_stealthio_EEA] = useState("");

  const [letsexchange_EEA, set_letsexchange_EEA] = useState("");

  const [xolix_EEA, set_xolix_EEA] = useState("");


  const cur = filtered.length > 0 ? filtered : cr;
  const cur1 = filtered1.length > 0 ? filtered1 : cr;

  //.............................Switch Variable........................//
  const changeInput = () => {
    var exchangevar = null;

    //swap variables
    exchangevar = exchangesenddata;
    setexchangesenddata(exchangegetdata);
    setexchangegetdata(exchangevar);

    const val1=initval1;
    const val2=initval2;

    console.log("initval1", val1);
    console.log("initval2", val2);

    setinitval1(val2);
    setinitval2(val1);

    console.log("initval1", exchangesenddata);
    console.log("initval2", exchangegetdata);

    dispatch(set_selcur(initval2))
    dispatch(set_getcur(initval1))
    console.log("i am called")
    fetchMultipleData(initval2, initval1,sval);

    if (counterchange == false) {
      setcounterchange(true);
    } else {
      setcounterchange(false);
    }
  };


    //This functions filters cryptos and store crypto objects in an array and rearrange in setfiltered array state
    const handleSearchChange = (e) => {

    // "e"is the input search value of first column
    setsearch(e.target.value);

    const searchTerm = e.target.value.toLowerCase();

    const filteredCryptos = cr.filter((crypto) => {
      const { name, symbol } = crypto;
      return (
        name.toLowerCase().includes(searchTerm) ||
        symbol.toLowerCase().includes(searchTerm)
      );
    });
    console.log(filteredCryptos)

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
      setfiltered(rearrangedCryptos);
    } else {
      setfiltered([]);
    }
  };

    //This functions filters cryptos and store crypto objects in an array and rearrange in setfiltered1 array state
  const handleSearchChange1 = (e) => {

    // "e"is the input search value of first column
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

  //This function detects outside click
  const handleClickOutside = (e) => {
    const cn = e.target.className;
    if (
      cn === "searchbar" ||
      cn === "search" ||
      cn === "dropdata" ||
      cn === "usym" ||
      cn === "sym" ||
      cn === "dd"
    ) {
    } else {
      setshowexchangesenddrop(false);
      setshowexchangegetdrop(false);
      setshowbuysenddrop(false);
      setshowbuygetdrop(false);
      setfiltered([]);
      setfiltered1([]);
      setsearch("");
      setsearch1("");
    }
  };

  //This api stores crypto data in array setcr
  const getCryptodata = async () => {
    const { data } = await axios.get("https://api.changenow.io/v1/currencies?active=true");
    if (data) {
      setcr(
        data.map((coin) => {
          return { symbol: coin.ticker, name: coin.name, image: coin.image };
        })
      );
    }
  };

  //This function contains apis that are called from
    var fetchMultipleData = async (sel, get, amount) => {
   try{
    setload(true);
    const url=URL+"multiplefetch";
    const content={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sell:sel,get:get,amount:amount})
    }
    const response=await fetch(url,content);
    console.log(response)
    const data=await response.json();
    console.log(data);
    setgval(data.hightprice)
    if(data){
      setload(false);
    }
   }
    catch (error) {
      // setmsg(error.response6.message);
      console.log(error)
    }
  };

  //This function calls exchange APIs
  const handleExchange = async (e) => {
    fetchMultipleData(cur[exchangesenddata]?.symbol, cur[exchangegetdata]?.symbol,e);
  };

  //This function is called when we select a coin from the dropdown menu 
  const handleExchangedrop = async (sell, get) => {
    console.log(sell,get,sval)
    setinitval1(sell)
    setinitval2(get)
    dispatch(set_selcur(sell))
    dispatch(set_getcur(get))
    fetchMultipleData(sell, get,sval);
  };

  //...........................useEffects.............................//

    //This useeffect binds outside clicks
    useEffect(() => {
    getCryptodata();
    document.addEventListener("click", handleClickOutside, true);
    fetchMultipleData(initval1, initval2,sval);
    }, []);

    //This function is used to replace , with dott
    function replaceFirstCommaWithPeriodAndRemoveAlphabets(str) {
    // Use the replace() method to replace the first comma with a period
    let newStr = str.replace(",", ".");

    // Use the replace() method to remove the remaining commas, periods, and alphabets from the string
    newStr = newStr.replace(/[|a-zA-Z]/g, "");

    // If there are multiple periods in the string, remove all but the first one
    const index = newStr.indexOf(".");
    if (index !== -1) {
      newStr =
        newStr.substring(0, index + 1) +
        newStr.substring(index + 1).replace(".", "");
    }

    return newStr;
    }



  //Set currency symbol
  function setIndex()
  {
    dispatch(setsendindex(exchangesenddata))
    dispatch(setgetindex(exchangegetdata))
  }

  return (
    <div className="formContainer" style={{ height: props.boxHeight }}>
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
                  min={0.1}
                  onChange={(e) => {
                    setsval(replaceFirstCommaWithPeriodAndRemoveAlphabets(e.target.value));
                    handleExchange(e.target.value);
                    dispatch(set_inputcur(sval));
                  }}
                />

                <div
                  className="options"
                  onClick={() => setshowexchangesenddrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur[exchangesenddata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur[exchangesenddata]?.symbol.toUpperCase()}
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
                        setexchangesenddata(index);
                        setshowexchangesenddrop(false);
                        handleExchangedrop(cur[index]?.symbol,cur[exchangegetdata]?.symbol);
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

          <div className="row" style={{ height: "50px" }}>
            <div className="col-8" style={{ display: props.display }}>
              <li
                style={{ fontSize: " 12px", color: "grey" }}
                className=" ms-2 mt-2"
              >
                {lang.noextrafees}
              </li>
              <li
                style={{ fontSize: " 12px", color: "grey", width:"350px"}}
                className="mb-3 ms-2"
                
              >
                {lang.estimated} :
                <span>
                  {" "}
                  {sval} {cur[exchangesenddata]?.symbol.toUpperCase()} ~{" "}
                  {getval} {cur[exchangegetdata]?.symbol.toUpperCase()}{" "}
                </span>
              </li>
            </div>
            <div className={props.switchBtn}>
              <button
                className="ms-auto new-stepper-button-swap new-stepper-button-swap_dark"
                type="button"
                onClick={changeInput}
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
                    disabled></input>
                )}
                <div
                  className="options"
                  onClick={() => setshowexchangegetdrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur1[exchangegetdata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur1[exchangegetdata]?.symbol.toUpperCase()}
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
                    value={searchv1}
                    onChange={(e) => handleSearchChange1(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {cur1?.map((x, index) => (
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
                        setexchangegetdata(index);
                        setshowexchangegetdrop(false);
                        handleExchangedrop(
                          cur1[exchangesenddata]?.symbol,
                          cur1[index]?.symbol
                        );
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
            {/* <div className="col-8">
              <li style={{ fontSize: " 12px", color: "grey" }} className=" ms-2 mt-2">No extra fees</li>
              <li style={{ fontSize: " 12px", color: "grey" }} className="mb-3 ms-2">Estimated :<span>1 BTC ~ 13.25 ETH </span></li>
            </div>
            <div className="col-4 m-auto">
              <button className="ms-auto new-stepper-button-swap new-stepper-button-swap_dark" type="button">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z" fill="#996600"></path><path d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z" fill="#996600"></path>
                </svg>
              </button>
            </div> */}
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
        style={{ display: props.display }}
        onClick={setIndex}
      >
        <div className="offerbtn">
          <span>{lang.viewoffers}</span>
        </div>
      </Link>
    </div>
  );
}

export default ExchangeCrypto;
