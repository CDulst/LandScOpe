import React from 'react';
import {useObserver} from 'mobx-react-lite';
import FormInput from './FormInput/FormInput';
import {useStores} from "../../../hooks/index"
import {useHistory} from "react-router-dom";
import {v4} from 'uuid';
import style from "./form.module.css";
const Form = () => {
  const {dataStore,uiStore} = useStores();
  const history = useHistory();
  const handleClick = (e) => {
      dataStore.addPost(uiStore.Image,uiStore.Category,uiStore.Location,uiStore.Description,uiStore.AddTags)
      history.push("/");
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      uiStore.AddTag(uiStore.Tag)
  }
  return useObserver(() => (
   <>
   <div className = {style.forms__wrapper}>
   <form>
   <FormInput type = "text" labeltext = "Description" placeholder = "A Wild Land" target = "Description"/>
   <FormInput type = "text" labeltext = "Location" placeholder = "Brussels,Belgium" target = "Location"/>
   <FormInput type = "select" labeltext = "Category" placeholder = "/" target = "Category"/>
   </form>
   <form onSubmit={e => handleSubmit(e)}>
   <FormInput type = "text" labeltext = "Tags" placeholder = "Trees" target = "Tag"/>
   </form>
   <div className = {style.button__wrapper}>
   <button onClick = {e => handleClick(e)} className = {`${style.button}`} style = {(uiStore.Description === "" || uiStore.Location === "" || uiStore.Category === "" || uiStore.AddTags.length === 0) ? {opacity:"20%", pointerEvents:"none"} : {opacity:"100%", pointerEvents:"auto"}  }> Submit</button>
   </div>
   </div>
   </>
  ))
}

export default Form;