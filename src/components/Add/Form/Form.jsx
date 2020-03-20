import React from 'react';
import {useObserver} from 'mobx-react-lite';
import FormInput from './FormInput/FormInput';
import {useStores} from "../../../hooks/index"
import style from "./form.module.css";
const Form = () => {
  const {uiStore} = useStores();

  const handleSubmit = (e) =>{
      e.preventDefault();
      uiStore.AddTag(uiStore.Tag)
  }
  return useObserver(() => (
   <>
   <form>
   <FormInput type = "text" labeltext = "Description" placeholder = "A Wild Land" target = "Description"/>
   <FormInput type = "text" labeltext = "Location" placeholder = "Brussels,Belgium" target = "Location"/>
   <FormInput type = "select" labeltext = "Category" placeholder = "/" target = "Category"/>
   </form>
   <form onSubmit={e => handleSubmit(e)}>
   <FormInput type = "text" labeltext = "Tags" placeholder = "Trees" target = "Tag"/>
   </form>
   <div className = {style.button__wrapper}>
   <button className = {`${style.button}`} style = {(uiStore.Description === "" || uiStore.Location === "" || uiStore.Category === "" || uiStore.AddTags.length === 0) ? {opacity:"20%", pointerEvents:"none"} : {opacity:"100%", pointerEvents:"auto"} }> Submit</button>
   </div>
   </>
  ))
}

export default Form;