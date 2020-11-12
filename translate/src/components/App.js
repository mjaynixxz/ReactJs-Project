import React from 'react';
import LanguageConext from '../contexts/LanguageConext';
import User from './User';



class App extends React.Component {

    state = { language: ''}

  onLanguageChange = language => {
      this.setState({ language });
      
  }  
  render() {
    return (
      <div className="ui container">
      <div>
        <h3>Select a country: </h3>
      </div>
      
      <i onClick={()=> this.onLanguageChange('english')} className="flag us" />
      <i onClick={()=> this.onLanguageChange('dutch')} className="flag nl" />
    
     <LanguageConext.Provider value={this.state.language}><User /></LanguageConext.Provider>
    
        
      </div>
    )
  }
}

export default App;
