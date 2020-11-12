import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';



class Users extends React.Component {

    render() {
        
        const { user } = this.props;
        
        if (!user) return <div>Loading...</div>

        return(
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { user: state.users.find((user) => user.id === ownProps.userid)}
};

export default connect(mapStateToProps, {fetchUsers})(Users)