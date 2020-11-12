import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelected, label }) => {
    const [open, setOpen] = useState(false);
    const ref  = useRef();
    


    useEffect(() => {
        document.body.addEventListener('click', (event)=>{
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        });
    },[]);

   
    const renderedOptions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }
        return(
            <div 
            onClick={()=> onSelected(option)}
            key={option.value} 
            className="item">{option.label}
            </div>
        );
    });

    return(
        <div ref={ref} className="ui form">
            <div className="field">
            <label className="label">{label}</label>
            <div 
            className={`ui selection dropdown ${open ? 'visible active': ''}`}
            onClick={()=> setOpen(!open)}
            >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition': '' }`}>{renderedOptions}</div>
            </div>
            </div>
        </div>
    );
}


  


export default Dropdown;