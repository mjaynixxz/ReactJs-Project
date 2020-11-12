import React from 'react';


class Calculate extends React.Component {
    onButtonClick = () => {
        this.props.onButtonClick();
    }

    render() {
    return (
            <div>
                <button className="ui primary button" onClick={this.onButtonClick}>Calculate</button>
             </div>
    );
}
}



export default Calculate;