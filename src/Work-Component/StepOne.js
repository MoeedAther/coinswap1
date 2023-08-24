import React from 'react';


function StepOne(props) {
    return(
        <>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{marginTop:"30px",borderBottom:"1px solid grey",...props.styles}}>
                    <h3 className='mt-5' style={{color:"#fff",fontSize:"34px"}}>{props.heading}</h3>
                    <p className='mt-5' style={{color:"#996600",fontSize:"18px"}}>{props.sno}</p>
                    <h2 style={{color:"#fff",fontSize:"26px"}}>{props.head}</h2>
                    <p style={{color:"#fff",fontSize:""}}>
                       {props.para}
                    </p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5' style={{borderBottom:"1px solid grey"}}>
                   <img style={{width:"100%",height:"400px"}} src={props.imgsrc} alt='step'/>
                </div>
        </>
    )
};


export default StepOne;