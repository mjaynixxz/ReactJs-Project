import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) => {
if (!song) {
    return <div>Select a Song!</div>;
}

    return(
        <div>
        <h3 style={{textAlign: 'center'}}>Details For</h3>
        <hr style={{border: '1px solid black'}}/>
        <p>title: {song.title}</p>
        <p>duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetails);