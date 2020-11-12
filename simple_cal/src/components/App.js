import React from 'react';
import Operands from './Operands';
import Operands2 from './Operands2';
import Operator from './Operator';
import Result from './Result';
import Calculate from './Button';



class App extends React.Component {
    constructor() {
        super();


        //State initialization
        this.state = {
            operand1: '',
            operator: '',
            operands2: '',
            result: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    //Updating state via props  Input update
    onInputChange(inputValue) {
        this.setState({
            operand1: inputValue,
        });
    }
    onInputChange1 = (inputValue1) => {
        this.setState({
            operator: inputValue1,
        });
    }
    onInputChange2 = (inputValue2) => {
        this.setState({
            operands2: inputValue2,
        });
    }


    //Button State update via props

    onButtonClick = () => {
        try {
        let num = this.state.operand1;
        let num1 = this.state.operands2;
        let sign = this.state.operator;
        let total = eval(num+sign+num1);

        if (isNaN(total)) {
            this.setState({result: 'Invalid input'});
        }
        else {
            this.setState({result: total});
        }
    }

    catch (ex) {
        this.setState({result: 'Error'});
    }

    }

    //     let num1 = Number(this.state.operand1);
    //     let num2 = Number(this.state.operands2);
    //     let total = 0;

    //     switch (this.state.operator) {
    //         case '+':
    //             if ((num1 || num2).isNaN) {
    //                 this.setState({result: 'Invalid inputs'});
    //             }
    //             else {
    //                 total = num1 + num2;
    //                 this.setState({result: total});
    //             }
    //             break;
    //         case '-':
    //             if ((num1 || num2).isNaN) {
    //                 this.setState({result: 'Invalid inputs'});
    //             }
    //             else {
    //                 total = num1 - num2;
    //                 this.setState({result: total});
    //             }
    //             break;
    //         case '*':
    //             if ((num1 || num2).isNaN) {
    //                 this.setState({result: 'Invalid inputs'});
    //             }
    //             else {
    //                 total = num1 * num2;
    //                 this.setState({result: total});
    //             }
    //             break;
    //         case 'x':
    //             if ((num1 || num2).isNaN) {
    //                 this.setState({result: 'Invalid inputs'});
    //             }
    //             else {
    //                 total = num1 * num2;
    //                 this.setState({result: total});
    //             }
    //             break;
    //         case '/':
    //             if ((num1 || num2).isNaN) {
    //                 this.setState({result: 'Invalid inputs'});
    //             }
    //             else {
    //                 total = num1 / num2;
    //                 this.setState({result: total});
    //             }
    //             break;
    //         default:
    //             this.setState({
    //                 operand1: '',
    //                 operands2: '',
    //                 operator: '',
    //                 result: ''
    //             });
    //             break;
    // }
  
    // }

render () {
        return (
            <div className="ui grid container" style={{marginTop: '50px'}}>
                <Operands onInputChange={this.onInputChange} value={this.state.operand1} />
                <Operator  onInputChange1={this.onInputChange1} value1={this.state.operator}/>
                <Operands2 onInputChange2={this.onInputChange2} value2={this.state.operands2} />
                <Result result={this.state.result} />
                <Calculate onButtonClick={this.onButtonClick} />
            </div>

        );
    }
}


export default App;