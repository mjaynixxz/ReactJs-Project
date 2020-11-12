import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debounced, setDebounced] = useState(term);
    const [result, setResult] = useState([]);

    useEffect(()=> {
        const timerId = setTimeout(()=> {
            setDebounced(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
         }
    }, [term]);

    useEffect(()=> {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounced
                }
            })
            setResult(data.query.search)
        }
        if (debounced) {
        search();
        }
    },

    [debounced]);


    const renderedResult = result.map((results) => {
        return (
            <div key={results.pageid} className="item">
            <div className="right floated content">
                <a 
                className="ui button"
                target="_blank"
                rel="noopener noreferrer" 
                href={`https://en.wikipedia.org?curid=${results.pageid}`}
                >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {results.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: results.snippet}}></span>
            </div>
            </div>
        );
    });
    return (
        
    <div>
        <div className="ui form">
        <div className="field">
            <label>Enter Search Term</label>
            <input value={term} 
            className="input"
            onChange={e=> setTerm(e.target.value)}
            />
        </div>
        </div>
        <div className="ui celled list">
        {renderedResult}
        </div>
    </div> 
       
        
    );
}

export default Search;