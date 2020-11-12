import React from 'react';


class Operator extends React.Component {
   onInputChange1 = (event) => {
       console.log(event.target);
    this.props.onInputChange1(event.target.value);
   }

render () {
    return (
        
        <div className="four wide column">
        <div className="ui input">
        <input type="text" placeholder="Type an operator..." value={this.props.value1} onChange={this.onInputChange1} />
        </div>
        </div>
    
    
    );
}

}

export default Operator;