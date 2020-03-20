import React from 'react';
import {useObserver} from 'mobx-react-lite';
import {useStores} from "../../../../hooks/index";
import style from "./formInput.module.css";
const FormInput = ({type,labeltext,placeholder,target}) => {
const {uiStore} = useStores();
const categories = uiStore.CATEGORIES
const tags = uiStore.AddTags;

const handleChangeinput = (e) => {
    uiStore.change(target,e.target.value)
}

  return useObserver(() => (
   <>
   <div className = {style.form__item}>
   <div className = {style.label__wrapper}>
   <label className = {style.form__label}>{labeltext}</label>
   </div>
   {console.log(type)}
   {(labeltext === "Tags") ?
    <div className = {style.tags__wrapper}>
    {tags.map(tag => (
    <div className = {style.tag__wrapper}>
     <p className = {style.tag}> {tag} </p>
     <button type="button" className = {style.delete}><img src="/assets/png/minicross.png" alt=""/></button>
    </div>
    ))}
    </div>
    :
    ""
   }
   
   {(type === "select") ? 
   <select className = {`${style.form__input} ${style.form__select}`} id = "categories">
    {categories.map(categorie => (
    <option className = {style.form__option} value = {categorie}>{categorie}</option>
    ))};
   </select>
   : 
   <input className = {style.form__input} type = {type} placeholder = {placeholder} maxLength = "24" onChange= {e => handleChangeinput(e)}/>
  }
  </div>
   </>
  ))
}

export default FormInput;