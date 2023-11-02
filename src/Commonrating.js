import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import letsexchange from './images/letsexchange.png';
import Commonbestrate1 from "./Commonbestrate";
import Commonbestrate1_fixed from "./Commonbestrate1_fixed";
import Commonbestrate2 from "./CommonbestrateTwo";
import Commonbestrate2_fixed from "./Commonbestrate2_fixed";
import Commonbestrate3 from "./CommonbestrateThree";
import Commonbestrate3_fixed from "./Commonbestrate3_fixed";
import Commonbestrate4 from "./CommonbestrateFour";
import Commonbestrate5 from "./CommonbestrateFive";
import Commonbestrate5_fixed from "./Commonbestrate5_fixed";
import Commonbestrate6 from "./CommonbestrateSix";
import Commonbestrate6_fixed from "./Commonbestrate6_fixed";
import Commonbestrate7 from "./CommonbestrateSeven";
import Commonbestrate7_fixed from "./Commonbestrate7_fixed";
import Commonbestrate8 from "./CommonbestrateEight";
import Commonbestrate8_fixed from "./Commonbestrate8_fixed";
import Commonbestrate9 from "./CommonbestrateNine";
import Commonbestrate9_fixed from "./Commonbestrate9_fixed";


export default function Commonrating(props){
  const { lockShow, handleComponentToggle } = props;

    let {sortedArray}=props


    const getComponent1 = (name) => {
      switch (name) {
        case 'changelly':
          return Commonbestrate1;

        case 'changelly_fixed':
          return Commonbestrate1_fixed;

        case 'changehero':
          return Commonbestrate3;

        case 'changehero_fixed':
          return Commonbestrate3_fixed;

        case 'stealthio':
          return Commonbestrate7;

        case 'stealthio_fixed':
          return Commonbestrate7_fixed;

        case 'changenow':
          return Commonbestrate6;

        case 'changenow_fixed':
          return Commonbestrate6_fixed;

        case 'exolix':
          return Commonbestrate2;

        case 'exolix_fixed':
          return Commonbestrate2_fixed;

        case 'godex':
          return Commonbestrate4;

        case 'letsexchange':
          return Commonbestrate8;

        case 'letsexchange_fixed':
          return Commonbestrate8_fixed;

        case 'simpleswap':
          return Commonbestrate5;

        case 'simpleswap_fixed':
          return Commonbestrate5_fixed;
      
        case 'fixedfloat':
          return Commonbestrate9;

        case 'fixedfloat_fixed':
          return Commonbestrate9_fixed;
          
        default:
          return "that";
      }
    };



    const getComponent2 = (name) => {
      switch (name) {
          case 'change_fixed':
            return Commonbestrate1_fixed;
          case 'changehero_fixed':
            return Commonbestrate3_fixed;
          case 'stealthio_fixed':
            return Commonbestrate7_fixed;
          case 'changenow_fixed':
            return Commonbestrate6_fixed;
          case 'exolix_fixed':
            return Commonbestrate2_fixed;
          case 'letsexchange_fixed':
            return Commonbestrate8_fixed;
          case 'simpleswap_fixed':
            return Commonbestrate5_fixed;
          case 'fixedfloat_fixed':
            return Commonbestrate9_fixed;
        default:
          return "this";
      }
    };
        
    return(
        <>

    <div>

      {
      sortedArray==undefined?<></>:sortedArray.map((component, index) => {
        const Component = lockShow === 1 ? getComponent2(component.name) : getComponent1(component.name);
        console.log("EET value:", component.eet);
        return(
         <Component key={index} rate={component.value} EET={component.eet} bestratetxt={index==0?"block":"none"} lockShow={lockShow} />
         ); 
        
      })}
      
    </div>

</>
)
    }