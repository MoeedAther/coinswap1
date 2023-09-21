import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import letsexchange from './images/letsexchange.png';
import Commonbestrate1 from "./Commonbestrate";
import Commonbestrate2 from "./CommonbestrateTwo";
import Commonbestrate3 from "./CommonbestrateThree";
import Commonbestrate4 from "./CommonbestrateFour";
import Commonbestrate5 from "./CommonbestrateFive";
import Commonbestrate6 from "./CommonbestrateSix";
import Commonbestrate7 from "./CommonbestrateSeven";
import Commonbestrate8 from "./CommonbestrateEight";


export default function FastestSwap(props){

    let {sortedArray}=props

    const [components, setComponents] = useState([]); 
    const [time, setTime] = useState(1); 

    // const getComponent = (name) => {
    //         switch (name) {
    //           case 'changelly':
    //             return Commonbestrate1;
    //           case 'exolix':
    //             return Commonbestrate2;
    //           case 'changehero':
    //             return Commonbestrate3;
    //           case 'godex':
    //             return Commonbestrate4;
    //           case 'simpleswap':
    //             return Commonbestrate5;
    //           case 'changenow':
    //             return Commonbestrate6;
    //           case 'stealthio':
    //             return Commonbestrate7;
    //           default:
    //             return null;
    //         }
    //       };
        
    return(
        <>

             <div data-v-4860c0fa="">
                                     
                <Commonbestrate1 name1={props.name} ratingb={props.rating1} ratingb2={props.rating2} />
                   
                <Commonbestrate2 xolixb={props.xolix} xolixb2={props.xolix2} />
                                   
                <Commonbestrate3 changeherob={props.changehero} changeherob2={props.changehero2} />
                                       
                <Commonbestrate4 godexb={props.godex} godexb2={props.godex2} />
                                    
                <Commonbestrate5 simpleswapb={props.simpleswap} simpleswapb2={props.simpleswap2} />
                                     
                <Commonbestrate6 changenowb={props.changenow} changenowb2={props.changenow2} />
                                     
                <Commonbestrate7 stealthiob={props.stealthio} stealthiob2={props.stealthio2} />
                                      
                <Commonbestrate8 letsexchangeb={props.letsexchange} letsexchangeb2={props.letsexchange2} />
                
            </div>
            
        </>
    )
}

// import React, { useState, useEffect } from 'react';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';
// import Component4 from './Component4';
// import Component5 from './Component5';
// import Component6 from './Component6';
// import Component7 from './Component7';

// const App = () => {
//   const [components, setComponents] = useState([]);

//   useEffect(() => {
//     // Fetch components data from API or any other source
//     const fetchedComponents = [
//       { name: 'Component 1', value: 5 },
//       { name: 'Component 2', value: 10 },
//       { name: 'Component 3', value: 7 },
//       { name: 'Component 4', value: 3 },
//       { name: 'Component 5', value: 2 },
//       { name: 'Component 6', value: 9 },
//       { name: 'Component 7', value: 1 },
//     ];

//     // Sort components in decreasing order based on value
//     const sortedComponents = fetchedComponents.sort((a, b) => b.value - a.value);

//     setComponents(sortedComponents);
//   }, []);

//   const getComponent = (name) => {
//     switch (name) {
//       case 'Component 1':
//         return Component1;
//       case 'Component 2':
//         return Component2;
//       case 'Component 3':
//         return Component3;
//       case 'Component 4':
//         return Component4;
//       case 'Component 5':
//         return Component5;
//       case 'Component 6':
//         return Component6;
//       case 'Component 7':
//         return Component7;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {components.map((component, index) => {
//         const Component = getComponent(component.name);
//         return <Component key={index} value={component.value} />;
//       })}
//     </div>
//   );
// };

// export default App;