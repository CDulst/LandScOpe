import React from 'react';
import {useObserver} from 'mobx-react-lite';
import FormInput from './FormInput/FormInput';
import {useStores} from "../../../hooks/index"
import style from "./form.module.css";
const Form = () => {
  const {uiStore} = useStores();
  const Description = uiStore.Description;
  const Category = uiStore.Category;
  const Location = uiStore.Location;
  return useObserver(() => (
   <>
   {console.log(Description)}
   {console.log(Location)}
   <form>
   <FormInput type = "text" labeltext = "Description" placeholder = "A Wild Land" target = {Description}/>
   <FormInput type = "text" labeltext = "Location" placeholder = "Brussels,Belgium" target = {Location}/>
   <FormInput type = "select" labeltext = "Category" placeholder = "/" target = {Category}/>
   </form>
   <form>
   <FormInput type = "text" labeltext = "Tags" placeholder = "Trees" value = "/"/>
   </form>
   <div className = {style.button__wrapper}>
   <button className = {`${style.button} ${style.disabled}`} disabled> Submit</button>
    
   </div>
   </>
  ))
}

export default Form;