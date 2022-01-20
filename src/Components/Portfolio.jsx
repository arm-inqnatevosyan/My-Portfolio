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
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img1} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Portfolio</h2>
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img2} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Phone</h2>
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            </div>

            <div className="portfolio">
            <div className="child" id="child">
                <div className="img-div">
                    <img src={img3} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website PhotoGrapher</h2>
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img4} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Portfolio</h2>
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            <div className="child">
                <div className="img-div">
                    <img src={img5} className="img"/>
                </div>
                <div className="texts">
                    <h2>My Website Menu</h2>
                    <h6>CLick view My Website</h6>
                </div>
            </div>
            </div>
        </main>
    )
}
export default Portfolio;