import React from 'react';
import VideoList from './VideoListItemComponent/VideoListItem.component';
import { VideoSuggestedList } from './VideoSuggestedList.styles';

const VideoSugesstedList = ({ relatedVideos }) => {
  return (
    <VideoSuggestedList>
      {relatedVideos?.items?.length > 0 &&
        relatedVideos.items.map((item) => <VideoList item={item} key={item.etag} />)}
    </VideoSuggestedList>
  );
};

export default VideoSugesstedList;
