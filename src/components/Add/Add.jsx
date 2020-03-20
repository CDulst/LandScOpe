import React from 'react';
import {useObserver} from 'mobx-react-lite';
import Form from './Form/Form';
import ImageSelect from './ImageSelect/ImageSelect';
import style from './add.module.css';
const Add = () => {
  return useObserver(() => (
   <>
   <article className = {style.Add}>
   <div className = {style.title__wrapper}>
   <h2 className = {style.title}>Add a new landscape</h2>
   </div>
   <ImageSelect/>
   <Form/>
   </article>
   </>
  ))
}

export default Add;