import { combineReducers }  from 'redux';


const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05'},
        { title: 'Joro', duration: '2:36' },
        { title: 'No stress', duration: '3.00'}
    ];
};

const selectSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});
