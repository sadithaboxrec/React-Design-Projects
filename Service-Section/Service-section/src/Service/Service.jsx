import React from "react";
import "./service.css";

import img1 from "../assets/illustration.png";
import img2 from "../assets/istockphoto-1371339413-1024x1024.webp";
import img3 from "../assets/planning.png";
import img4 from "../assets/stadium-3802104_1280.jpg";
import img5 from "../assets/peakpx.jpg";
import img6 from "../assets/evaluation.png";
import img7 from "../assets/ba.jpg";
import img8 from "../assets/business-analyst.png";

function Service() {
    return (
        <div className="container">
            {/* First Row */}
            <div className="row">
                <div className="box order">
                    <div className="box-sub">
                        <h1>Web Designing</h1>
                        <p>
                            I primarily develop portfolio websites and ECommerce Websites.<br /><br />
                            I create attractive user interfaces with mobile responding features.<br /><br />
                            I use PHP for Backend Development ensuring highest security for website and its data.
                        </p>
                    </div>
                    <div className="img-box">
                        <img src={img1} alt="New Image" className="logo1" />
                        <img src={img2} alt="" className="img img1" />
                    </div>
                </div>

                <div className="box inorder">
                    <div className="img-box">
                        <img src={img3} alt="New Image" className="logo1" />
                        <img src={img4} alt="" className="img img2" />
                    </div>
                    <div className="box-sub">
                        <h1>Event Planner</h1>
                        <p>
                            I have been a member of Event Organizing Committees in several Sports events.
                            Prior to that in School and University I contributed to organize several events.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="row">
                <div className="box order">
                    <div className="box-sub">
                        <h1>Data Analyzation</h1>
                        <p>
                            I specialize in analyzing sports data to uncover patterns and insights.
                            By leveraging data trends and statistical models, I make accurate predictions
                            that help inform decisions and strategies in the sports industry.
                        </p>
                    </div>
                    <div className="img-box">
                        <img src={img5} alt="" className="img img3" />
                        <img src={img6} alt="New Image" className="logo2" />
                    </div>
                </div>

                <div className="box inorder">
                    <div className="img-box">
                        <img src={img7} alt="" className="img img4" />
                        <img src={img8} alt="New Image" className="logo2" />
                    </div>
                    <div className="box-sub">
                        <h1>Business Analyst</h1>
                        <p>
                            I am a training Business Analyst expecting a career in the Sports Management field.
                            I am currently studying several courses under University of Moratuwa and MICROSOFT Learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
