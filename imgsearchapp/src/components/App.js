import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/unsplash';
import ImageList from './imageList';



class App extends React.Component {

    

    state = { images: [] };

    onSearchterm = async (term) => {
        const response = await Unsplash.get('/search/photos', {params: {query:term}});

        this.setState({ images: response.data.results});
        
    }

    
    render () {
    return (
        <div className = "ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchterm}/>
            <ImageList images = {this.state.images}/>
        </div>

    );

    }
    
} 

export default App;