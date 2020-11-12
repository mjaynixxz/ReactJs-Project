import React from 'react';


class Operands2 extends React.Component {

onInputChange2 = (event) => {
    this.props.onInputChange2(event.target.value);
}


render () {
    return (
        <div className="four wide column input">
        <div className="ui input">
        <input type="text" placeholder="Type a number..." value={this.props.value2} onChange={this.onInputChange2} />
        </div>        
        </div>
    );
}

}

export default Operands2;