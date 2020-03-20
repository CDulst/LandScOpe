import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import Publisher from './Publisher/Publisher';
import Landscape from './Landscape/Landscape';
import Interaction from './Interaction/Interaction';
import PropTypes from 'prop-types';
const Post= () => {

    
return useObserver(() => (
<>
<Publisher/>
<Landscape/>
<Interaction/>
 </>
    ))

}



export default Post;