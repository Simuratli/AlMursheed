import React, {useState} from 'react';
import './header-center.component.scss'
import { Link } from "react-router-dom";
import BtnDark from '../../button-dark/button-dark'
import BtnLight from '../../button-light/button-light'
import CurrencySelectbox from '../../currency-selectbox/currency-selectbox.component'
import LangSelectbox from '../../language-nav-selectbox/language-nav-selectbox.component'

const HeaderCenter = () =>{

    const [toggle, setToggle] = useState({
        active: false,
      });

    function toggleNav() {
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }


    return (
        <div className="centerNav">
        <div className="container">
            <div className="logo">
                <Link to='/'>
                    <img src={require('../../../images/logo.svg')} alt="mursheed logo" />
                </Link>
            </div>
            <div className="rightContent">
                <div className="currency">
                    <span className="currencyText">Valyuta</span>
                    <CurrencySelectbox />
                </div>
                <div className="language">
                    <span className="langText">Dil</span>
                    <form>
                    <LangSelectbox />
                    </form>
                </div>
                <div className="loginbuttons">
                    <Link to='/login' ><BtnLight name='Daxi Ol'/></Link>
                    <Link to="/register" ><BtnDark name='Qeydiyyat'/></Link>
                </div>
                <div id="hamburger" onClick={toggleNav} className="barIcon">
                    <p className="line"></p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
            </div>
                <div id="openmenu" className={`${toggle.active ? 'activemenu': ''} container menucontainer`} >
                    <div className="openmenu">
                        <Link className="openmenu_item" to="/#">Ana səhifə</Link>
                        <Link className="openmenu_item" to="/about"> Haqqımızda</Link>
                        <Link className="openmenu_item" to="/guide_and_drivers"> Sürücülər & Bələdçilər</Link>
                        <Link className="openmenu_item" to="/accomadation"> Məskən</Link>
                        <Link className="openmenu_item" to="/flight">Uçuş Rezervasiyası</Link>
                        <Link className="openmenu_item" to="/attractive_locations"> Cəlbedici Yerlər</Link>
                        <Link className="openmenu_item" to="/offers">  Təkliflər</Link>
                        <Link className="openmenu_item" to="/#">Dəstək</Link>
                        <Link className="openmenu_item" to="/contact">Bizimlə Əlaqə</Link>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default HeaderCenter;