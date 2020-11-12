import React, { useState } from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Yoruba',
        value: 'yo'
    },
    {
        label: 'Hausa',
        value: 'ha'
    },
    {
        label: 'Igbo',
        value: 'ig'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                <label>Enter a Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown options={options}
            label="Select a Language"
            selected={language}
            onSelected={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output: 
                <Convert language={language}
                text={text}
                />
            </h3>
        </div>
    );
}

export default Translate;