import React,{useEffect, useState} from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // console.log(blockchain.account, blockchain.walletConnected);

    // useEffect(()=> {
    //     dispatch(fetchData(blockchain.account));
    // }, [blockchain.account])



    const getData = () => {
        if(blockchain.account !=="" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };
    
    return (
       <header> 
           <Link to="/" className="logo" onClick={closeMobileMenu}> <span>MetaLoan</span></Link>
           <div className="toggle-menu" onClick={handleClick}></div>
            <ul className={click ? "navigation active" : "navigation"}>

                 <li>
                   <Link to="/" onClick={closeMobileMenu}>Home</Link> 
                </li>

                <li>
                    <Link to="/howitWorks" onClick={closeMobileMenu}>How It Works</Link>
                </li>

                <li>
                    <Link to="/about" onClick={closeMobileMenu}>About Us</Link>   
                </li>

                <li>
                    <Link to="/metateam" onClick={closeMobileMenu}>Our Team</Link>
                </li>

                {/* <li>
                    <Link to="/faq" onClick={closeMobileMenu}>FAQ</Link>
                </li> */}

                <li>
                    <Link to="/requestloan" id="lastchild" onClick={closeMobileMenu}>Request a Loan</Link>
                </li>

                <li>
                    <Link to="/launchApp/submitLoan" id="connect" onClick={closeMobileMenu}>My Loan</Link>     
                </li>

                <li>
                    {blockchain.account == 0xb8CeA4b30758f65657287e3bdc2eAC6bf9e68702
                        &&
                    <Link to="/admin" id="connect" onClick={closeMobileMenu}>Admin</Link> }
                </li>

                <li>
                    <button className='btn'
                            id="connect"
                            onClick={(e)=> {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                    }}>
                    
                    {blockchain.walletConnected === false ? "connect wallet" : (
                        <div id='address'>
                            {blockchain.account.substring(0,12)}...
                        </div>
                    )}
                            
                    </button>
                </li>
            </ul>
       </header>
    )
}

export default Navbar;






