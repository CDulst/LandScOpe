import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import "../style.css";
const Header = () => {
return (
<>
<header>
<h1 className = "hidden">Landscope</h1>
<nav className= "navigator">
<button className = "header__hamburger">
 <img className = "header__hamburger--img" src="assets/svg/hamburger.svg" alt=""/>
</button>
<div className = "header__wrapper">
<img className = "header__logo" src="assets/svg/logo.svg" alt=""/>
<ul className = "nav__items">
<div className = "nav__wrapper home">
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = "nav__item"><Link className = "nav__link" to = "/" alt = "" >HOME</Link></li>
</div>
<div className = "nav__wrapper explore">
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = "nav__item"><Link className = "nav__link" to = "/" alt = "" >EXPLORE</Link></li>
</div>
<div className = "nav__wrapper collection">
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = "nav__item"><Link className = "nav__link" to = "/Overview" alt = "" >COLLECTION</Link></li>
</div>
</ul>
</div>
<div className = "accounts__wrappers">
<Link to="/Add" className = "account__upload" alt = "">UPLOAD</Link>
<div className = "account__wrappers">
<div className = "account__wrapper">
<a href="D" className = "account__link"><img className = "account__img"  src="assets/svg/account-icon.svg" alt=""/></a>
</div>
<div className = "account__wrapper settings__wrapper">
<button className = "messagebutton">
    <img src="assets/svg/messages-icon.svg" alt=""/>
</button>
<button className = "settingsbutton">
    <picture className= "header__settingsicon">
    <img src="assets/svg/settings-icon.svg" alt=""/>
    </picture>
</button>
</div>
</div>
</div>
</nav>

</header>
</>)
}

  
export default Header;