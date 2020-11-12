import React, { Component } from 'react'
import LanguageConext from '../contexts/LanguageConext';

export class Field extends Component {
    
    render() {
        
        return (
            <div className="ui field">

                <label>
                    <LanguageConext.Consumer>
                    {(value) => value === 'english'? 'Name': 'Naam' }
                    </LanguageConext.Consumer>
                </label>
                <input />
            </div>
        )
    }
}

export default Field;
