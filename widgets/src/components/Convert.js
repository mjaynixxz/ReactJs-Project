

import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Convert = ({language, text}) => {
    const [translated, setTranslated]= useState('');
    const [debounced, setDebounced] = useState(text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounced(text);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [text]);

    useEffect(() => {
        
            const response = async () => {
                const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                 params: {
                     q: debounced,
                     target: language.value,
                     key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                 }
             });
             setTranslated(data.data.translations[0].translatedText)
             }
             if (debounced) {
             response();
             }
    }, [language, debounced]);

    return (
        <div>
            <p className="ui header">
                {translated}
            </p>
        </div>
    );
}

export default Convert;