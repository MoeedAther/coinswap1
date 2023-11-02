import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import letsexchange from './images/letsexchange.png';
import Commonbestrate1 from "./fastestswap components/Commonbestrate";
import Commonbestrate2 from "./fastestswap components/CommonbestrateTwo";
import Commonbestrate3 from "./fastestswap components/CommonbestrateThree";
import Commonbestrate4 from "./fastestswap components/CommonbestrateFour";
import Commonbestrate5 from "./fastestswap components/CommonbestrateFive";
import Commonbestrate6 from "./fastestswap components/CommonbestrateSix";
import Commonbestrate7 from "./fastestswap components/CommonbestrateSeven";
import Commonbestrate8 from "./fastestswap components/CommonbestrateEight";
import Commonbestrate9 from "./fastestswap components/CommonbestrateNine";


export default function Bestrating(props){

    const { lockShow, handleComponentToggle } = props;

    let {sortedArray, name, rating1, rating2, xolix, xolix2, fixedfloat, changehero, changehero2, godex, godex2, simpleswap, simpleswap2, changenow, changenow2, stealthio, stealthio2, letsexchange, letsexchange2}= props

    // console.log(sortedArray, name, rating1, rating2, xolix, xolix2, fixedfloat, changehero, changehero2, godex, godex2, simpleswap, simpleswap2, changenow, changenow2, stealthio, stealthio2, letsexchange, letsexchange2)
        
    return(
        <>

            {lockShow == 1 ? (
                <div data-v-4860c0fa="">

                    <Commonbestrate8 name1={props.name} letsexchangeb={props.letsexchange} letsexchangeb2={props.letsexchange2}  bestratetxt={"none"} lockShow={lockShow} />
                                     
                    <Commonbestrate1  ratingb={props.rating1} ratingb2={props.rating2} lockShow={lockShow} />

                    <Commonbestrate7 stealthiob={props.stealthio} stealthiob2={props.stealthio2} bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate5 simpleswapb={props.simpleswap} simpleswapb2={props.simpleswap2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate4 godexb={props.godex} godexb2={props.godex2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate2 xolixb={props.xolix} xolixb2={props.xolix2}  bestratetxt={"none"} lockShow={lockShow} />
                                
                    <Commonbestrate9 fastfloatb={props.fastfloat} fastfloatb2={props.fastfloat2}  bestratetxt={"none"} lockShow={lockShow} />

                
                </div>
             ) : (

                <div>

                    <Commonbestrate8 name1={props.name} letsexchangeb={props.letsexchange} letsexchangeb2={props.letsexchange2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate1 name1={props.name} ratingb={props.rating1} ratingb2={props.rating2} lockShow={lockShow} />

                    <Commonbestrate7 stealthiob={props.stealthio} stealthiob2={props.stealthio2} bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate5 simpleswapb={props.simpleswap} simpleswapb2={props.simpleswap2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate4 godexb={props.godex} godexb2={props.godex2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate6 changenowb={props.changenow} changenowb2={props.changenow2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate3 changeherob={props.changehero} changeherob2={props.changehero2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate2 xolixb={props.xolix} xolixb2={props.xolix2}  bestratetxt={"none"} lockShow={lockShow} />

                    <Commonbestrate9 fastfloatb={props.fastfloat} fastfloatb2={props.fastfloat2}  bestratetxt={"none"} lockShow={lockShow} />

                </div>

             )}
            
        </>
    )
}
