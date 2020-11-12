import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

import Users from './Users';

class Postlist extends Component {
componentDidMount() {
    return this.props.fetchPost();
}


renderedList() {
    return this.props.post.map((pos) => {
        return(
            <div className="item" key={pos.id}>
                <i className="large middle aligned icon user"></i>
                <div className="content">
                    <div className="description">
                    <h2>{pos.title}</h2>
                    <p>{pos.body}</p>
                    </div>
                    <Users userid={pos.userId}/>
                </div>
                </div>
        );
    });
}

    render() {
        
        return (
            <div className="ui relaxed divided list">
                {this.renderedList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { post: state.post }
};

export default connect(mapStateToProps, { fetchPost })(Postlist)
