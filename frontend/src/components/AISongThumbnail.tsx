import React from 'react';
import { Box, Typography } from '@mui/material';

interface ThumbnailStyle {
  primaryColor: string;
  secondaryColor: string;
  pattern: string;
  overlay: string;
  textColor: string;
}

interface AISongThumbnailProps {
  title: string;
  artist: string;
  genre: string;
  mood: string;
  duration: string;
  style: 'minimal' | 'gradient' | 'pattern' | 'abstract' | 'vintage';
  thumbnailStyle: ThumbnailStyle;
}

const AISongThumbnail: React.FC<AISongThumbnailProps> = ({
  title,
  artist,
  genre,
  mood,
  duration,
  style,
  thumbnailStyle,
}) => {
  const getBackgroundStyle = () => {
    switch (style) {
      case 'minimal':
        return {
          background: `linear-gradient(135deg, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.secondaryColor})`,
        };
      case 'gradient':
        return {
          background: `linear-gradient(45deg, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.secondaryColor})`,
        };
      case 'pattern':
        return {
          background: `repeating-linear-gradient(45deg, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.primaryColor} 10px, ${thumbnailStyle.secondaryColor} 10px, ${thumbnailStyle.secondaryColor} 20px)`,
        };
      case 'abstract':
        return {
          background: `radial-gradient(circle at center, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.secondaryColor})`,
        };
      case 'vintage':
        return {
          background: `linear-gradient(to right, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.secondaryColor})`,
        };
      default:
        return {
          background: `linear-gradient(135deg, ${thumbnailStyle.primaryColor}, ${thumbnailStyle.secondaryColor})`,
        };
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '12px',
        boxSizing: 'border-box',
        ...getBackgroundStyle(),
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'left',
          width: '100%',
          padding: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '4px',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#fff',
            fontWeight: 500,
            fontSize: '0.95rem',
            mb: 0.5,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#fff',
            fontSize: '0.85rem',
            mb: 0.5,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            opacity: 0.9,
          }}
        >
          {artist}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#fff',
            fontSize: '0.75rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            opacity: 0.8,
          }}
        >
          {genre} • {mood}
        </Typography>
      </Box>
    </Box>
  );
};

export default AISongThumbnail; 