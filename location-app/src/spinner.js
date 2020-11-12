import React from 'react';


const spinner = (props) => {
   return (
   
  
  <div class="ui active dimmer">
    <div class="ui big text loader">{props.loaderText}</div>
    </div>

);
}

export default spinner;