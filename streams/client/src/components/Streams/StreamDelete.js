import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';




class StreamDelete extends React.Component {

    componentDidMount () {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.stream) return <div>Are you sure you want to delete this Stream</div>;
        return <div>Are you sure you want to delete this Stream with title: {this.props.stream.title}</div>;
    }

    renderActions () {
        const id  = this.props.match.params.id;
        return ( 
            <>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
        </>
        );
    } 

    

    render () {
   
    return(
        <div>StreamDelete
            <Modal 
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
            stopPropagation = {(e) => e.stopPropagation()}
            />
        </div>
    );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);