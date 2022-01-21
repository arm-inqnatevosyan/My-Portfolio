import React from "react";
import img from "../img/Screenshot_1 .png";
import img1 from "../img/Screenshot_6.png";
import img2 from "../img/Screenshot_2.png";
import img3 from "../img/Screenshot_3.png";
import img4 from "../img/Screenshot_4.png";
import img5 from "../img/Screenshot_5.png";

function Portfolio(){
    return (
        <main className="aside2">
            <div className="fl-dir">
            <div className="title" id="portfolio">
                <h1>My Latest Projects</h1>
                <h6>There are many variations of passages of Lorem Ipsum availaibe,</h6>
                <h6>but the majority have suffered alternation.</h6>
            </div>
            <div className="portfolio">
            <div className="child">
               <div className="img-div">
                    <img src={img} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Shop</h2>
                    <a href="https://github.com/arm-inqnatevosyan/Eccomerce-shop-Template"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img1} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Portfolio</h2>
                    <a href="https://github.com/arm-inqnatevosyan/My-Portfolio"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img2} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Phone</h2>
                    <a href="https://github.com/arm-inqnatevosyan/Mobile-Web"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            </div>

            <div className="portfolio" id="port2">
            <div className="child" id="child">
                <div className="img-div">
                    <img src={img3} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website PhotoGrapher</h2>
                    <a href="https://github.com/arm-inqnatevosyan/Photographer-page"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img4} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Portfolio</h2>
                    <a href="https://github.com/arm-inqnatevosyan/web-site1"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img5} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Menu</h2>
                    <a href="https://github.com/arm-inqnatevosyan/food-app.github.io"><h6>CLick view My Website</h6></a>
                </div>
            </div>
            </div>
            </div>
        </main>
    )
}
export default Portfolio;