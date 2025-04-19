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
        width: '100%',
        maxWidth: '100%',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s',
        },
        '@media (max-width: 600px)': {
          gap: 0.5,
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
            borderRadius: '12px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '2px 4px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            backdropFilter: 'blur(4px)',
          }}
        >
          {video.duration}
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 1, padding: '8px 0' }}>
        <img
          src={video.channelAvatar}
          alt={video.channel}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              fontWeight: 500,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: '0.95rem',
              lineHeight: '1.3',
              marginBottom: '4px',
              '@media (max-width: 600px)': {
                fontSize: '0.9rem',
                lineHeight: '1.2',
              },
            }}
          >
            {video.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              color: '#aaa', 
              fontSize: '0.85rem',
              marginBottom: '2px',
              '@media (max-width: 600px)': {
                fontSize: '0.8rem',
              },
            }}
          >
            {video.channel}
          </Typography>
          <Typography
            variant="caption"
            sx={{ 
              color: '#aaa', 
              fontSize: '0.85rem',
              '@media (max-width: 600px)': {
                fontSize: '0.8rem',
              },
            }}
          >
            {video.views} • {video.timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard; 