import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
const Mood = ({currentpost, moodemoji,moodtitle,moodnumber}) => {
return useObserver(() => (
<>
<button className = "buttonall" onClick={ e => {currentpost.updateMood(moodtitle)}}>
    <div className = "mood__item">
    <div className = "item__wrapper">
    <img className = "item__emoji" src={`${moodemoji}`} alt=""/>
  <p className = "item__title">{moodtitle}</p>
    </div>
    <p className = "item__number">{moodnumber}</p>
    </div>
    </button>
</>))
}

export default Mood;