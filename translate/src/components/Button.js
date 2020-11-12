import React, { Component } from 'react'
import LanguageConext from '../contexts/LanguageConext';

export class Button extends Component {
   
    render() {
        
        return (
            <div>
               <button className="ui primary button">
                <LanguageConext.Consumer>
                {(value) => value === 'english'? 'Submit': 'voorlegan'}
                </LanguageConext.Consumer>
               </button> 
            </div>
        )
    }
}

export default Button;
