import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import AISongThumbnail from '../components/AISongThumbnail';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

interface Video {
  id: string;
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
  genre: string;
  mood: string;
  style: 'minimal' | 'gradient' | 'pattern' | 'abstract' | 'vintage';
  thumbnailStyle: {
    primaryColor: string;
    secondaryColor: string;
    pattern: string;
    overlay: string;
    textColor: string;
  };
}

// Mock data for a single video
const videoData: Video = {
  id: '1',
  title: 'Building a YouTube Clone with React and TypeScript',
  description: 'In this comprehensive tutorial, we build a YouTube clone using React, TypeScript, and Material-UI. Learn how to create a modern web application with a clean architecture and responsive design.',
  thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  videoId: 'dQw4w9WgXcQ',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  channel: 'Tech Channel',
  channelAvatar: 'https://i.pravatar.cc/150?img=1',
  subscribers: '1.2M subscribers',
  views: '1.2M views',
  timestamp: '2 days ago',
  duration: '10:15',
  likes: '45K',
  dislikes: '1.2K',
  genre: 'Tutorial',
  mood: 'Educational',
  style: 'gradient',
  thumbnailStyle: {
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4',
    pattern: 'waves',
    overlay: 'gradient',
    textColor: '#FFFFFF',
  },
};

// Mock data for related videos
const relatedVideos: Video[] = [
  {
    id: '2',
    title: 'Learn React in 2024 - Complete Tutorial',
    description: 'A comprehensive guide to learning React in 2024, covering all the latest features and best practices.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'React Master',
    channelAvatar: 'https://i.pravatar.cc/150?img=2',
    subscribers: '500K subscribers',
    views: '500K views',
    timestamp: '1 week ago',
    duration: '15:30',
    likes: '25K',
    dislikes: '500',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'pattern',
    thumbnailStyle: {
      primaryColor: '#6B66FF',
      secondaryColor: '#FF66B2',
      pattern: 'dots',
      overlay: 'pattern',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '3',
    title: 'Advanced TypeScript Tips and Tricks',
    description: 'Learn advanced TypeScript concepts and techniques to improve your development workflow.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'TypeScript Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=3',
    subscribers: '300K subscribers',
    views: '300K views',
    timestamp: '3 days ago',
    duration: '12:45',
    likes: '15K',
    dislikes: '300',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'minimal',
    thumbnailStyle: {
      primaryColor: '#66FFB2',
      secondaryColor: '#FFB266',
      pattern: 'lines',
      overlay: 'minimal',
      textColor: '#000000',
    },
  },
  {
    id: '4',
    title: 'Material-UI vs Tailwind CSS: Which is Better?',
    description: 'A detailed comparison between Material-UI and Tailwind CSS for modern web development.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'UI/UX Master',
    channelAvatar: 'https://i.pravatar.cc/150?img=4',
    subscribers: '800K subscribers',
    views: '800K views',
    timestamp: '5 days ago',
    duration: '18:20',
    likes: '40K',
    dislikes: '800',
    genre: 'Comparison',
    mood: 'Informative',
    style: 'abstract',
    thumbnailStyle: {
      primaryColor: '#FF66FF',
      secondaryColor: '#66FFFF',
      pattern: 'abstract',
      overlay: 'abstract',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '5',
    title: 'Building a Full Stack Application with Node.js',
    description: 'Learn how to build a complete full stack application from scratch.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Full Stack Dev',
    channelAvatar: 'https://i.pravatar.cc/150?img=5',
    subscribers: '600K subscribers',
    views: '600K views',
    timestamp: '1 day ago',
    duration: '25:10',
    likes: '30K',
    dislikes: '600',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'vintage',
    thumbnailStyle: {
      primaryColor: '#FFD700',
      secondaryColor: '#8B4513',
      pattern: 'vintage',
      overlay: 'vintage',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '6',
    title: 'Modern JavaScript Best Practices',
    description: 'Learn the best practices for modern JavaScript development.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'JavaScript Guru',
    channelAvatar: 'https://i.pravatar.cc/150?img=6',
    subscribers: '400K subscribers',
    views: '400K views',
    timestamp: '4 days ago',
    duration: '20:45',
    likes: '20K',
    dislikes: '400',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'gradient',
    thumbnailStyle: {
      primaryColor: '#4A90E2',
      secondaryColor: '#50E3C2',
      pattern: 'waves',
      overlay: 'gradient',
      textColor: '#FFFFFF',
    },
  },
];

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video>(videoData);
  const [relatedVideosList, setRelatedVideosList] = useState<Video[]>(relatedVideos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setVideo(videoData);
      setRelatedVideosList(relatedVideos);
      setLoading(false);
    }, 1000);
  }, [id]);

  useEffect(() => {
    const addToHistory = async () => {
      try {
        await axios.post(`${API_URL}/history/${id}`, {}, {
          withCredentials: true,
        });
      } catch (error) {
        console.error("Error adding to history:", error);
      }
    };

    if (id) {
      addToHistory();
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      gap: 3,
      p: { xs: 1, sm: 2 },
      '@media (max-width: 600px)': {
        gap: 2,
        p: 1,
      }
    }}>
      <Box sx={{ flex: '1 1 70%' }}>
        <Box sx={{ 
          position: 'relative', 
          width: '100%', 
          paddingTop: '56.25%',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#0f0f0f',
          '@media (max-width: 600px)': {
            borderRadius: '8px',
          }
        }}>
          <video
            src={video.videoUrl}
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          mb: 2,
          mt: 2,
          gap: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{ 
                width: { xs: 40, sm: 48 }, 
                height: { xs: 40, sm: 48 },
                mr: { xs: 1, sm: 2 }
              }}
              alt={video.channel}
              src={video.channelAvatar}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ 
                color: 'white', 
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}>
                {video.channel}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#aaa',
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}>
                {video.subscribers}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: { xs: 1, sm: 2 },
                backgroundColor: 'white',
                color: 'black',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: { xs: 0.5, sm: 1 }
          }}>
            <Button
              startIcon={<ThumbUpIcon />}
              sx={{ 
                color: 'white',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                minWidth: 'auto'
              }}
            >
              {video.likes}
            </Button>
            <Button
              startIcon={<ThumbDownIcon />}
              sx={{ 
                color: 'white',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                minWidth: 'auto'
              }}
            >
              Dislike
            </Button>
            <Button
              startIcon={<ShareIcon />}
              sx={{ 
                color: 'white',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                minWidth: 'auto'
              }}
            >
              Share
            </Button>
            <Button
              startIcon={<SaveIcon />}
              sx={{ 
                color: 'white',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                minWidth: 'auto'
              }}
            >
              Save
            </Button>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: '#303030', mb: 2 }} />

        <Box sx={{ 
          backgroundColor: '#272727', 
          p: 2, 
          borderRadius: '12px', 
          mb: 2,
          '@media (max-width: 600px)': {
            p: 1.5,
            borderRadius: '8px',
          }
        }}>
          <Typography variant="body2" sx={{ 
            color: 'white', 
            mb: 1,
            fontSize: { xs: '0.8rem', sm: '0.875rem' }
          }}>
            {video.views} views • {video.timestamp}
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'white', 
            whiteSpace: 'pre-line',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            lineHeight: 1.5
          }}>
            {video.description}
          </Typography>
        </Box>

        <Divider sx={{ backgroundColor: '#303030', mb: 2 }} />

        <Typography variant="h6" sx={{ 
          color: 'white', 
          mb: 2,
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}>
          Comments
        </Typography>
        <Typography variant="body1" sx={{ 
          color: '#aaa', 
          mb: 4,
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}>
          Comments are disabled for this video.
        </Typography>
      </Box>

      <Box sx={{ 
        flex: '1 1 30%', 
        mt: { xs: 4, md: 0 },
        '@media (max-width: 600px)': {
          mt: 2,
        }
      }}>
        <Typography variant="h6" sx={{ 
          color: 'white', 
          mb: 2,
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}>
          Related Videos
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {relatedVideosList.map((video) => (
            <Box
              key={video.id}
              sx={{
                display: 'flex',
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                width: '40%', 
                paddingTop: '22.5%',
                flexShrink: 0,
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
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
                    fontWeight: 500,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {video.duration}
                </Box>
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    mb: 0.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    lineHeight: 1.3,
                  }}
                >
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    color: '#aaa', 
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    mb: 0.5,
                  }}
                >
                  {video.channel}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ 
                    color: '#aaa', 
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  }}
                >
                  {video.views} • {video.timestamp}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer; 