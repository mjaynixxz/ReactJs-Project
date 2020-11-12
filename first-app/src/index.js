import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



//Create a component
const App = () => {
    return (
        
       <div className = "ui container comments">
       <ApprovalCard>
            <h4 style={{color: 'red'}}>Warning!!!</h4>
            <div style={{marginLeft: '10px'}}>Are you sure you want to this</div>
       </ApprovalCard>
       <ApprovalCard>
            <CommentDetail author = "Sam" time = {new Date().toLocaleString()} comments = "I ate rice" fakerImage = {faker.image.avatar()} />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author = "Jay" time = {new Date().toLocaleString()} comments = "I want to sleep" fakerImage = {faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author = "Abdul" time = {new Date().toLocaleString()} comments = "Nice post!!!" fakerImage = {faker.image.avatar()} />
        </ApprovalCard>
        </div>

       
    );
}


//Render using react-dom
ReactDOM.render(<App />, document.querySelector('#root'));