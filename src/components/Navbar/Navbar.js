import React,{useEffect, useState} from 'react'; 
import { Link } from 'react-scroll';
import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [click, setClick] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    // useEffect(()=> {
    //     
    //     dispatch(fetchData(blockchain.account));
    // }, [])


    useEffect(()=> {
        getData();
        fetchAccounts();
    }, [blockchain.account]);


    const getData = () => {
        if(blockchain.account !=="" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    // fetch accounts Data
    async function fetchAccounts() {
        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

        if(metamaskIsInstalled) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });
                  setAccounts(accounts[0]);               
            } catch (error) {
                console.log(error);
            }
        }
    }

    // {accounts.length === 0 ? "Connect Wallet" : (
    //     <div id='address'>
    //         {accounts.substring(0, 12)}...
    //     </div>)}

    

    return (
       <header> 
           <Link to="/" className="logo" onClick={closeMobileMenu}> <span>MetaLoan</span></Link>
           <div className="toggle-menu" onClick={handleClick}></div>
            <ul className={click ? "navigation active" : "navigation"}>

                 <li>
                   <Link to="/" onClick={closeMobileMenu}>Home</Link> 
                </li>

                <li>
                    <Link to="about" spy={true} smooth={true} offset={-222} duration={500} onClick={closeMobileMenu}>About Us</Link>     
                </li>

                <li>
                    <Link to="howItworks" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMobileMenu}>How it Works</Link>
                </li>

                <li>
                    <Link to="metateam" spy={true} smooth={true} offset={-75} duration={500} onClick={closeMobileMenu}>Our Team</Link>
                </li>

                <li>
                    <Link to="faq" spy={true} smooth={true} offset={-30} duration={500} onClick={closeMobileMenu}>FAQ</Link>
                </li>

                <li>
                    <Link to="requestloan" spy={true} smooth={true} offset={50} duration={500} onClick={closeMobileMenu}>Request a Loan</Link>
                </li>

                {/* <li>
                    <Link to="/launchApp/submitLoan" id="connect" onClick={closeMobileMenu}>My Loan</Link>     
                </li> */}

                <li>
                    <button className='btn'
                            id="connect"
                            onClick={(e)=> {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                    }}>
                    
                    {accounts.length === 0 ? "Connect Wallet" : (
                        <div id='address'>
                            {accounts.substring(0,12)}...
                        </div>
                    )}
                            
                    </button>
                </li>
            </ul>
       </header>
    )
}

export default Navbar;






