import { combineReducers } from 'redux';


const songReducer = () => {
   return [
      {title: 'song 1', duration: '4:40'},
      {title: 'song 2', duration: '3:40'},
      {title: 'song 3', duration: '2:40'},
      {title: 'song 4', duration: '1:40'},
      {title: 'song 5', duration: '0:40'}
   ];
};

const selectedSongReducer = ( selectedSong=null, action) => {
   if(action.type === 'SONG_SELECTED') {
      return action.payload;
   };

   return selectedSong;
};

export default combineReducers({
   songs: songReducer,
   selectedSong: selectedSongReducer
});