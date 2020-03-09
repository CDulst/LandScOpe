import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import style from "./header.module.css";
const Header = () => {
return (
<>
<header>
<h1 className = {style.hidden}>Landscope</h1>
<nav className= {style.navigator}>
<button className = {style.header__hamburger}>
 <img className = {style.header__hamburgerimg} src="assets/svg/hamburger.svg" alt=""/>
</button>
<div className = {style.header__wrapper}>
<img className = {style.header__logo} src="assets/svg/logo.svg" alt=""/>
<ul className = {style.nav__items}>
<div className = {`${style.nav__wrapper} ${style.home}`}>
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = {style.nav__item}><Link className = {style.nav__link} to = "/" alt = "" >HOME</Link></li>
</div>
<div className = {`${style.nav__wrapper} ${style.explore}`}>
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = {style.nav__item}><Link className = {style.nav__link} to = "/" alt = "" >EXPLORE</Link></li>
</div>
<div className = {`${style.nav__wrapper} ${style.collection}`}>
    <img src="assets/svg/seperator.svg" alt=""/>
    <li className = {style.nav__item}><Link className = {style.nav__link} to = "/Overview" alt = "" >COLLECTION</Link></li>
</div>
</ul>
</div>
<div className = {style.accounts__wrappers}>
<Link to="/Add" className = {style.account__upload} alt = "">UPLOAD</Link>
<div className = {style.account__wrappers}>
<div className = {style.account__wrapper}>
<a href="D" className = {style.account__link}><img className = {style.account__img} src="assets/svg/account-icon.svg" alt=""/></a>
</div>
<div className = {`${style.account__wrapper} ${style.settings__wrapper}`}>
<button className = {style.messagebutton}>
    <img src="assets/svg/messages-icon.svg" alt=""/>
</button>
<button className = {style.settingsbutton}>
    <picture className= {style.header__settingsicon}>
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