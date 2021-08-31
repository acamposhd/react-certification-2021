import React from 'react';
import VideoListItem from './VideoListItemComponent/VideoListItem.component';
import { VideoFavoriteList } from './VideoFavoriteList.styles';

const FavoriteList = ({ favoriteVideos }) => {
  return (
    <VideoFavoriteList>
      {favoriteVideos?.length > 0 &&
        favoriteVideos.map((item) => <VideoListItem item={item} key={item.etag} />)}
    </VideoFavoriteList>
  );
};

export default FavoriteList;
