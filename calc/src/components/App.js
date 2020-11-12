import React from 'react';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            operand1: '',
            operand2: '',
            operator: '',
            result: ''
        };

        this.resultRef = React.createRef();
    }
    
   componentDidMount() {
       this.resultRef.current.disabled = true;
   }

   onInputOperand1 = (event) => {
        this.setState({operand1: event.target.value});
   }

   onInputOperator = (event) => {
        this.setState({operator: event.target.value});
   }

   onInputOperand2 = (event) => {
        this.setState({operand2: event.target.value});
   }

   
   
      
onClickButton = () => {
try {
    let num1 = Number(this.state.operand1);
    let num2 = Number(this.state.operand2);
    let total = 0;
    
    switch(this.state.operator) {
        case '+':
            if (isNaN(num1 || num2)) {
                this.setState({result: 'invalid Input'});
            }
            total = num1 + num2;
            this.resultRef.current.disabled = false;
            this.setState({result: total});
            break;
             
        case '-':
            if (isNaN(num1 || num2)) {
                this.setState({result: 'invalid Input'});
            }
            total = num1 - num2;
            this.resultRef.current.disabled = false;
            this.setState({result: total});
            break;
             
        case 'x':
            if (isNaN(num1 || num2)) {
                this.setState({result: 'invalid Input'});
            }
            total = num1 * num2;
            this.resultRef.current.disabled = false;
            this.setState({result: total});
            break;

        case '*':
            if (isNaN(num1 || num2)) {
                this.setState({result: 'invalid Input'});
            }
            total = num1 * num2;
            this.resultRef.current.disabled = false;
            this.setState({result: total});
            break;
             
        case '/':
            if (isNaN(num1 || num2)) {
                this.setState({result: 'invalid Input'});
            }
            total = num1 / num2;
            this.resultRef.current.disabled = false;
            this.setState({result: total});
            break;
        default:
            this.resultRef.current.disabled = true;
            this.setState({operand1: ''});
            this.setState({operand2: ''});
            this.setState({operator: ''});
            this.setState({result: ''});
            break;
    }
    }
    catch (ex) {
        this.setState({result: 'Error'});
    }
}
  
   
    
    render() {

        return (
            <div className="ui container" style={{marginTop:'50px'}}>
                <div className=" ui grid">

                    <div className="four wide column">
                        <div className="ui input">
                            <input type="text" value={this.state.operand1} placeholder="Enter a number..." onChange={this.onInputOperand1} style={{border: '1px solid black'}}/>
                        </div>
                    </div>

                    <div className="four wide column">
                    <div className="ui input">
                        <input type="text" value={this.state.operator} placeholder="Enter an operator" onChange={this.onInputOperator} style={{border: '1px solid black'}} />
                    </div>
                    </div>

                    <div className="four wide column">
                    <div className="ui input">
                         <input type="text" value={this.state.operand2} placeholder="Enter a number..." onChange={this.onInputOperand2} style={{border: '1px solid black'}} />
                    </div>
                    </div>

                    <div className="four wide column">
                    <div className="ui input">
                        <input ref={this.resultRef} type="text" value = {this.state.result} placeholder="Result" />
                    </div>  
                    </div>

                </div>

                <br />
                <div>
                <button className="ui primary button" onClick={this.onClickButton}>Calculate</button>
                </div>
            </div>
        );
    }
}

export default App;