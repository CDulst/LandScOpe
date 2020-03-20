import React from 'react';
import {useObserver} from 'mobx-react-lite';
import {useStores} from "../../../../hooks/index";
import style from "./formInput.module.css";
const FormInput = ({type,labeltext,placeholder,target}) => {
const {uiStore} = useStores();
const categories = uiStore.CATEGORIES
const tags = uiStore.AddTags;

const handleChangeinput = (e) => {
    console.log(target);
    uiStore.change(target,e.target.value)
}

const handleClick = (e,tag) => {
    console.log(tag);
    uiStore.RemoveTag(tag);
}

  return useObserver(() => (
   <>
   {console.log(target)}
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
     <button type="button" onClick = {e => handleClick(e,tag)} className = {style.delete}><img src="/assets/png/minicross.png" alt=""/></button>
    </div>
    ))}
    </div>
    
    :
    ""
   }
   
   {(type === "select") ? 
   <select className = {`${style.form__input} ${style.form__select}`} id = "categories" onChange= {e => handleChangeinput(e)}>
    {categories.map(categorie => (
    <option className = {style.form__option} value = {categorie}>{categorie}</option>
    ))};
   </select>
   : 
   (labeltext === "Tags") ? 
   <input value = {uiStore[target]} className = {style.form__input} type = {type} placeholder = {placeholder} maxLength = "8" style = {(uiStore[target] === "") ? (uiStore.AddTags.length === 0) ? {backgroundImage: `url("/assets/png/redCross.png")`, backgroundColor:"rgba(255, 0, 0, 0.2)"} :{backgroundImage: `url("/assets/png/greenCheck.png")`, backgroundColor:"rgba(153, 227, 165, 0.3)" ,backgroundPositionX: "95%"}  :{backgroundImage: `url("/assets/png/Enter.png")`, backgroundColor:"rgba(255, 255, 255, 0.3)", backgroundPositionX: "95%"} } onChange= {e => handleChangeinput(e)}/>
   : 
   <input value = {uiStore[target]} className = {style.form__input} type = {type} placeholder = {placeholder} maxLength = "24" style = {(uiStore[target] === "") ? {backgroundImage: `url("/assets/png/redCross.png")`, backgroundColor:"rgba(255, 0, 0, 0.2)"} : {backgroundImage: `url("/assets/png/greenCheck.png")`, backgroundColor:"rgba(153, 227, 165, 0.3)" ,backgroundPositionX: "95%"} } onChange= {e => handleChangeinput(e)}/>
  }
  </div>
   </>
  ))
}

export default FormInput;