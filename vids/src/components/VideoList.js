import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ vids, onVideoSelect }) => {

   const renderedList = vids.map( (video) => {
      return (
         <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} 
            video={video} 
         />
         );
   });

   return (
      <div className="ui relaxed divided list">
         {renderedList}
      </div>
   );
};

export default VideoList;