import React from 'react';
import {useObserver} from 'mobx-react-lite';
import style from './imageselect.module.css';
const ImageSelect = () => {
  return useObserver(() => (
   <>
   <section className = {style.add__Landscape}>
   <h3 className = {style.Landscape__title}>Select Image</h3>
    <div className = {style.arrow__wrapper}>
    <button className = {style.arrow} ><img src="assets/svg/arrowleft.svg" alt=""/></button>
    <button className = {style.arrow}><img src="assets/svg/arrowright.svg" alt=""/></button>
    </div>
   </section>
   </>
  ))
}

export default ImageSelect;