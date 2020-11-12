import React from 'react';


class Operands extends React.Component {

onInputChange = (event) => {
    this.props.onInputChange(event.target.value);
}


render () {
    return (
        <div className="four wide column input">
        <div className="ui input">
        <input type="text" placeholder="Type a number..." value={this.props.value} onChange={this.onInputChange} />
        </div>        
        </div>
    );
}

}

export default Operands;