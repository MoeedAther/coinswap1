import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import letsexchange from '../images/letsexchange.png';
import { useNavigate } from 'react-router-dom';

export default function Commonbestrate7(props){
    const { lockShow } = props;
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate("/swap")
    }
    return(
        <>
        <div data-v-4860c0fa="" className="step1-table__row" style={props.stealthiob2==0 || props.stealthiob2==undefined?{display:"none"}:{display:"block"}}>
            <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Exchange
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="stealthex" value="stealthex" from-amount="0.1" to-amount="stealthex" min="0.00015081" max="0" code="btc" network="btc" align="start">
                                                            <div>
                                                                <img data-v-2d10d984="" alt="stealthex" src="https://storage.swapspace.co/static/stealthex-icon.png" className="partner-item__image" />
                                                                <span data-v-2d10d984="">
                                                                    StealthEX
                                                                </span>
                                                            </div>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">

                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                
                                                                {props.stealthiob}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="rate step1-field step1-table__field-type" data-v-49591a1a=""
                                                    ><div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.3651263" path="1.3651263" value="1.3651263" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        
                                                                        {props.stealthiob2}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="yellow">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>

                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.00021594" max="0" code="btc" network="btc" align="start" has-icon="">
                                                        {lockShow ==1 || props.fixed==1? (
                                    
                                    <span data-v-68b0206a="" className="step1-field__value_type">
                                        Fixed 
                                        <svg style={{ marginBottom: "3px" }} data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="fixed-icon__icon">
                                            <path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white">
                                            </path>
                                        </svg>
                                    </span>
                                    ) : (
                                    <span data-v-68b0206a="" className="step1-field__value_type"> 
                                         Floating <svg data-v-68b0206a="" style={{marginRight:"8px"}} width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-floating ms-1" ><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                    </span>
                                
                                )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>
                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">
                                            <div data-v-76d55f6e="" data-v-4860c0fa="" style={{display:props.bestratetxt}} className="step1-tag step1-table__tag step1-tag__top">
                                                    Best Rate
                                                </div>
                                                <button data-v-3411e120="" onClick={handleClick} data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>
            </div>
        </div>
        </>
    )
}