import React, { useState } from 'react';
import Accordion from './Accordion'
import Dropdown from './Dropdown';
import Search from './Search'
import Translate from './Translate';
import Route from './routes';
import Header from './Header';



const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end Javascript Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is mostly adopted by front end engineers and its light weight'
    },
    {
        title: 'How to use React?',
        content: 'React is used by creating components'
    }
];


const options = [
    {
        label: 'A color green',
        value: 'green'
    },
    {
        label: 'A color red',
        value: 'red'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
    
];



const App = () => {
    const [selected, setSelected] = useState(options[0]);
    

    return (
        <div className="ui container">
        <br />
        <Header />
        <Route path='/'><Accordion items = {items} /></Route>
        <Route path='/search'><Search /></Route>
        
        <Route path='/dropdown'><Dropdown selected={selected}
        options={options}
        onSelected={setSelected}
        label= "Select a color"
    /></Route>
    <Route path='/translate'><Translate /></Route>

       
       
        </div>
    );
}

export default App;