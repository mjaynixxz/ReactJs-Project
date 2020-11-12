import React from 'react';


class Result extends React.Component {
    constructor(props) {
        super(props);

        this.ResultRef = React.createRef();
    }

componentDidMount() {
    this.ResultRef.current.disabled = true;
}

// componentDidUpdate() {
//     this.ResultRef.current.disabled = false;
// }



    render () {
        return (
            <div className="four wide column">
        <div className="ui input">
        <input ref= {this.ResultRef} type="text" placeholder="result" value={this.props.result} />
        </div>
        </div>
        );
    }
}

export default Result;