import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import style from './mood.module.css';
const Mood = ({currentpost, moodemoji,moodtitle,moodnumber}) => {
return useObserver(() => (
<>
<button className = {style.buttonall} onClick={ e => {currentpost.updateMood(moodtitle)}}>
    <div className = {style.mood__item}>
    <div className = {style.item__wrapper}>
    <img className = {style.item__emoji} src={`${moodemoji}`} alt=""/>
  <p className = {style.item__title}>{moodtitle}</p>
    </div>
    <p className = {style.item__number}>{moodnumber}</p>
    </div>
</button>
</>))
}


export default Mood;