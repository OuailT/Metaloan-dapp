import React from "react";
import "./HowItoWorks.css";
import metaHeroImg from "../../assets/metaHero.png";
import { useNavigate } from "react-router-dom";


const HowItoWorks = () => {
    const navigate = useNavigate();
    return (
        <div className="howItWorks-content" id="howitworks">
            <div className="imgBox">
                <img src={metaHeroImg} alt="aboutImg" className='metaHero'/>
            </div>

            <div className="textBox">
                <h2>How it Works</h2>
                <p>Get your MetaLoan with just 6 easy steps:</p>
                <ul className="requestLoan_list">
                    <li>1. Fill out the Request a Loan form below.</li>
                    <li>2. MetaLoan will review your inquiry and get back to you with a loan plan.</li>
                    <li>3. You provide requested documentation and the down payment.</li>
                    <li>4. MetaLoan purchases the metaverse land you’re interested in and gives you full use rights.</li>
                    <li>5. You make secure payments via MetaLoan’s decentralized application, which provides you with accurate and verifiable transaction history on the blockchain.</li>
                    <li>6. After you complete your monthly payments, MetaLoan sends the metaverse land to your wallet.</li>
                </ul>
                <button className='btn'
                        onClick={()=> navigate("/requestloan")}>Request a Loan</button>
            </div>
        </div>
)
}


export default HowItoWorks;