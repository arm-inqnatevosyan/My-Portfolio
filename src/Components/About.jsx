import React from "react";
import imgabout from "../img/about.jpg";

function About(){
    return (
        <main>
            <div className="about" id="main">
                <div className="about-img">
                    <img src={imgabout} />
                </div>
            <div className="about-text">
                    <h1>ABOUT ME</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur mollitia esse dolores, facere quis et dolor atque minima? Aspernatur, quam unde. Nobis quos culpa quam? Sapiente error vero at tenetur dicta sint sit ad, adipisci dolor impedit ipsum cumque laborum aliquam vitae laboriosam corrupti! Suscipit illo tempora fugit mollitia?<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus, voluptatem officia obcaecati at natus doloribus maiores, pariatur, consequatur ratione quod facilis alias soluta ipsum omnis hic. Expedita recusandae error, beatae ea quia nam est, minus voluptate rem, pariatur alias.</h6>
               <div className="about-btn">
                    <button><a href="https://arman.inqnatevosyan.06@gmail.com">Message or CV</a></button>
                    <button>Hire Me</button>
                </div>
            </div>
            </div>
        </main>
    )
}
export default About;