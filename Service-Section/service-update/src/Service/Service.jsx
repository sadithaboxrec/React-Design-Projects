import React from "react";
import illustration from "../assets/images/illustration.png";
import serviceImage from "../assets/images/istockphoto-1371339413-1024x1024.webp";
import planning from "../assets/images/planning.png";
import stadium from "../assets/images/stadium-3802104_1280.jpg";
import peakpx from "../assets/images/peakpx.jpg";
import evaluation from "../assets/images/evaluation.png";
import ba from "../assets/images/ba.jpg";
import businessAnalyst from "../assets/images/business-analyst.png";

import "./service.css";


function Service() {


    return (
        <>

            <div className="serviceContainer">


                <div className="row">


                    <div className="serviceBox order">

                        <div className="box-sub">
                            <h1>Web Designing</h1>
                            <p>
                                I primarily develop portfolio websites and ECommerce Websites.<br/><br/>
                                I create attrative user interfaces with mobile responding features.<br/><br/>
                                I use PHP for Backend Development ensuring highest security for website and it's data.
                            </p>
                        </div>
                        <div className="img-box">
                            <img src={illustration} alt="New Image" className="logo1" />
                            <img src={serviceImage} alt="" className="serviceimg img1" />

                        </div>


                    </div>


                    <div className="serviceBox inorder">
                        <div className="img-box">
                            <img src={planning} alt="New Image" className="logo1" />
                            <img src={stadium} alt="" className="serviceimg img2" />
                        </div>


                        <div className="box-sub">
                            <h1>Event Planner</h1>
                            <p>
                                I have been a member of Event Organizing Commettees in several Sports events. Prior to
                                that in School and University I contributed to organize several events
                            </p>
                        </div>

                    </div>

                </div>



                <div className="row">


                    <div className="serviceBox order">

                        <div className="box-sub">
                            <h1>Data Analyzation</h1>
                            <p>
                                I specialize in analyzing sports data to uncover patterns and insights. By leveraging
                                data trends and statistical models, I make accurate predictions that help inform
                                decisions and strategies in the sports industry.
                            </p>
                        </div>
                        <div className="img-box">
                            <img src={peakpx} alt="" className="serviceimg img3" />
                            <img src={evaluation} alt="New Image" className="logo2" />
                        </div>


                    </div>


                    <div className="serviceBox inorder">

                        <div className="img-box">
                            <img src={ba} alt="" className="serviceimg img4" />
                            <img src={businessAnalyst} alt="New Image" className="logo2" />
                        </div>

                        <div className="box-sub">
                            <h1>Business Analyst</h1>
                            <p>
                                I am a training Business Analyst expecting a career in Sports Management Field.I am
                                currently studying several courses under University of Moratuwa and MICROSOFT Learning.
                            </p>
                        </div>

                    </div>

                </div>



            </div>



        </>
    )
}

export default Service
