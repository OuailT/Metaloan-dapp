import React, {useEffect} from 'react';
import "./HeroSection.css";
import metaHeroImg from "../../assets/metaHero.png";
import { useNavigate } from 'react-router-dom';
import SplitText from "../../Utilis/split3.min";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import gsap from 'gsap';


const HeroSection = () => {
        const navigate = useNavigate();

        useEffect(()=> {
            const split = new SplitText("#hero-text", {
                type: "lines",
                linesClass: "LineChildren",
            });
    
            const splitParent = new SplitText("#hero-text", {
                type: "lines",
                linesClass: "LineParents",
            });
    
            gsap.to(split.lines, {
                duration: 1.5,
                y: 0,
                opacity: 1,
                stagger:0.1,
                ease:"power2",
            })
        },[])
    
        return (
                <>
                {/* <Navbar/> */}
                <div className="content" data-scroll-section>
                    <div className="textBox">
                        <h4 id="hero-text">FINANCING THE METAVERSE</h4>
                        <h2 id="hero-text">MetaLoan</h2>
                        <p id="hero-text">The metaverse unlocks new opportunities to learn, explore, play and invest in virtual worlds. MetaLoan helps you own your piece of the metaverse by breaking the purchase price into small, affordable payments.</p>

                        <div className="button-container" id="hero-text">
                            <button 
                                className='btn'
                                id='btn-left'
                                onClick={()=> navigate("/requestloan")}>Request A Loan</button>
                            {/* <button className='btn'>WhitePaper</button> */}
                        </div>
                    </div>

                    <div className="imgBox">
                        <img src={metaHeroImg} alt="ImageHero" className='metaHero'/>
                    </div>
                </div>
                {/* <Footer/> */}
            </>

        )
    }


    export default HeroSection;


