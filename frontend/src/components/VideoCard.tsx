import React from 'react';
import { Box, Typography } from '@mui/material';

interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  videoUrl: string;
  channel: string;
  channelAvatar: string;
  subscribers: string;
  views: string;
  timestamp: string;
  duration: string;
  likes: string;
  dislikes: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 4,
            right: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '2px 4px',
            borderRadius: '4px',
            fontSize: '12px',
          }}
        >
          {video.duration}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
        <img
          src={video.channelAvatar}
          alt={video.channel}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: '0.95rem',
              lineHeight: '1.3',
            }}
          >
            {video.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#aaa', fontSize: '0.85rem' }}
          >
            {video.channel}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: '#aaa', fontSize: '0.85rem' }}
          >
            {video.views} • {video.timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard; 