import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  Container,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import AISongThumbnail from '../components/AISongThumbnail';

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

// Mock data for videos
const videos: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React and TypeScript',
    description: 'Learn how to build a modern YouTube clone using React and TypeScript',
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
  },
  {
    id: '2',
    title: 'Learn React in 2024 - Complete Tutorial',
    description: 'A comprehensive guide to learning React in 2024',
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
    description: 'Learn advanced TypeScript concepts and techniques',
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
    description: 'A detailed comparison between Material-UI and Tailwind CSS',
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
    description: 'Learn how to build a complete full stack application',
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
    description: 'Learn the best practices for modern JavaScript development',
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
  {
    id: '7',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    description: 'A comprehensive guide to choosing between CSS Grid and Flexbox',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'CSS Expert',
    channelAvatar: 'https://i.pravatar.cc/150?img=7',
    subscribers: '350K subscribers',
    views: '350K views',
    timestamp: '2 days ago',
    duration: '15:20',
    likes: '18K',
    dislikes: '350',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'pattern',
    thumbnailStyle: {
      primaryColor: '#FF8C00',
      secondaryColor: '#4B0082',
      pattern: 'grid',
      overlay: 'pattern',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '8',
    title: 'Building a RESTful API with Express.js',
    description: 'Learn how to create a robust RESTful API using Express.js',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Backend Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=8',
    subscribers: '450K subscribers',
    views: '450K views',
    timestamp: '3 days ago',
    duration: '22:30',
    likes: '22K',
    dislikes: '450',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'minimal',
    thumbnailStyle: {
      primaryColor: '#2E8B57',
      secondaryColor: '#4682B4',
      pattern: 'lines',
      overlay: 'minimal',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '9',
    title: 'State Management in React: Redux vs Context API',
    description: 'Compare Redux and Context API for state management in React',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'React State Master',
    channelAvatar: 'https://i.pravatar.cc/150?img=9',
    subscribers: '550K subscribers',
    views: '550K views',
    timestamp: '1 day ago',
    duration: '16:45',
    likes: '28K',
    dislikes: '550',
    genre: 'Comparison',
    mood: 'Informative',
    style: 'abstract',
    thumbnailStyle: {
      primaryColor: '#FF1493',
      secondaryColor: '#00CED1',
      pattern: 'abstract',
      overlay: 'abstract',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '10',
    title: 'Building a Progressive Web App (PWA)',
    description: 'Learn how to create a Progressive Web App from scratch',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'PWA Expert',
    channelAvatar: 'https://i.pravatar.cc/150?img=10',
    subscribers: '700K subscribers',
    views: '700K views',
    timestamp: '4 days ago',
    duration: '19:15',
    likes: '35K',
    dislikes: '700',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'vintage',
    thumbnailStyle: {
      primaryColor: '#8B0000',
      secondaryColor: '#FFD700',
      pattern: 'vintage',
      overlay: 'vintage',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '11',
    title: 'Web Performance Optimization Techniques',
    description: 'Learn how to optimize your web application performance',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Performance Guru',
    channelAvatar: 'https://i.pravatar.cc/150?img=11',
    subscribers: '650K subscribers',
    views: '650K views',
    timestamp: '2 days ago',
    duration: '17:30',
    likes: '32K',
    dislikes: '650',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'gradient',
    thumbnailStyle: {
      primaryColor: '#FF4500',
      secondaryColor: '#4169E1',
      pattern: 'waves',
      overlay: 'gradient',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '12',
    title: 'Building a Chat Application with Socket.io',
    description: 'Create a real-time chat application using Socket.io',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Real-time Dev',
    channelAvatar: 'https://i.pravatar.cc/150?img=12',
    subscribers: '750K subscribers',
    views: '750K views',
    timestamp: '3 days ago',
    duration: '21:45',
    likes: '38K',
    dislikes: '750',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'pattern',
    thumbnailStyle: {
      primaryColor: '#9932CC',
      secondaryColor: '#00FA9A',
      pattern: 'dots',
      overlay: 'pattern',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '13',
    title: 'Building a Full Stack E-commerce Application',
    description: 'Learn how to build a complete e-commerce application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'E-commerce Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=13',
    subscribers: '850K subscribers',
    views: '850K views',
    timestamp: '2 days ago',
    duration: '24:30',
    likes: '42K',
    dislikes: '850',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'minimal',
    thumbnailStyle: {
      primaryColor: '#FF6347',
      secondaryColor: '#4682B4',
      pattern: 'lines',
      overlay: 'minimal',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '14',
    title: 'Building a Full Stack Social Media Application',
    description: 'Learn how to build a complete social media application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Social Media Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=14',
    subscribers: '900K subscribers',
    views: '900K views',
    timestamp: '3 days ago',
    duration: '23:15',
    likes: '45K',
    dislikes: '900',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'gradient',
    thumbnailStyle: {
      primaryColor: '#FF69B4',
      secondaryColor: '#4169E1',
      pattern: 'waves',
      overlay: 'gradient',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '15',
    title: 'Building a Full Stack Blog Application',
    description: 'Learn how to build a complete blog application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Blog Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=15',
    subscribers: '950K subscribers',
    views: '950K views',
    timestamp: '4 days ago',
    duration: '22:45',
    likes: '47K',
    dislikes: '950',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'pattern',
    thumbnailStyle: {
      primaryColor: '#FF8C00',
      secondaryColor: '#4B0082',
      pattern: 'dots',
      overlay: 'pattern',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '16',
    title: 'Building a Full Stack Todo Application',
    description: 'Learn how to build a complete todo application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Todo Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=16',
    subscribers: '1M subscribers',
    views: '1M views',
    timestamp: '5 days ago',
    duration: '21:30',
    likes: '50K',
    dislikes: '1K',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'abstract',
    thumbnailStyle: {
      primaryColor: '#FF1493',
      secondaryColor: '#00CED1',
      pattern: 'abstract',
      overlay: 'abstract',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '17',
    title: 'Building a Full Stack Weather Application',
    description: 'Learn how to build a complete weather application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Weather Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=17',
    subscribers: '1.1M subscribers',
    views: '1.1M views',
    timestamp: '6 days ago',
    duration: '20:15',
    likes: '55K',
    dislikes: '1.1K',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'vintage',
    thumbnailStyle: {
      primaryColor: '#8B0000',
      secondaryColor: '#FFD700',
      pattern: 'vintage',
      overlay: 'vintage',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '18',
    title: 'Building a Full Stack Recipe Application',
    description: 'Learn how to build a complete recipe application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Recipe Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=18',
    subscribers: '1.2M subscribers',
    views: '1.2M views',
    timestamp: '7 days ago',
    duration: '19:45',
    likes: '60K',
    dislikes: '1.2K',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'minimal',
    thumbnailStyle: {
      primaryColor: '#2E8B57',
      secondaryColor: '#4682B4',
      pattern: 'lines',
      overlay: 'minimal',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '19',
    title: 'Building a Full Stack Music Player Application',
    description: 'Learn how to build a complete music player application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Music Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=19',
    subscribers: '1.3M subscribers',
    views: '1.3M views',
    timestamp: '8 days ago',
    duration: '18:30',
    likes: '65K',
    dislikes: '1.3K',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'gradient',
    thumbnailStyle: {
      primaryColor: '#FF4500',
      secondaryColor: '#4169E1',
      pattern: 'waves',
      overlay: 'gradient',
      textColor: '#FFFFFF',
    },
  },
  {
    id: '20',
    title: 'Building a Full Stack Video Streaming Application',
    description: 'Learn how to build a complete video streaming application',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    channel: 'Video Pro',
    channelAvatar: 'https://i.pravatar.cc/150?img=20',
    subscribers: '1.4M subscribers',
    views: '1.4M views',
    timestamp: '9 days ago',
    duration: '17:15',
    likes: '70K',
    dislikes: '1.4K',
    genre: 'Tutorial',
    mood: 'Educational',
    style: 'pattern',
    thumbnailStyle: {
      primaryColor: '#9932CC',
      secondaryColor: '#00FA9A',
      pattern: 'dots',
      overlay: 'pattern',
      textColor: '#FFFFFF',
    },
  }
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ 
      py: 2, 
      px: { xs: 1, sm: 2 },
      '@media (max-width: 600px)': {
        py: 1,
        px: 0.5,
      }
    }}>
      {/* Categories Bar */}
      <Box sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid #303030',
        mb: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '@media (max-width: 600px)': {
          mb: 1,
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 1, 
          p: 1,
          '@media (max-width: 600px)': {
            gap: 0.5,
            p: 0.5,
          }
        }}>
          {['All', 'Music', 'Gaming', 'Live', 'React', 'TypeScript', 'Programming', 'Web Development', 'Computer Science', 'Recently uploaded', 'Watched', 'New to you'].map((category) => (
            <Chip 
              key={category}
              label={category} 
              color={category === 'All' ? 'primary' : 'default'}
              sx={{ 
                '@media (max-width: 600px)': {
                  fontSize: '0.8rem',
                  height: '28px',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Main Content */}
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        {videos.map((video) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={video.id}
          >
            <Card
              component={Link}
              to={`/video/${video.videoId}`}
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                textDecoration: 'none',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                width: '100%', 
                paddingTop: '56.25%', // 16:9 aspect ratio
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0f0f0f',
                '&:hover': {
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.2s ease-in-out',
                  }
                }
              }}>
                <AISongThumbnail
                  title={video.title}
                  artist={video.channel}
                  genre={video.genre}
                  mood={video.mood}
                  duration={video.duration}
                  style={video.style}
                  thumbnailStyle={video.thumbnailStyle}
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
                  }}
                >
                  {video.duration}
                </Box>
              </Box>
              <CardContent sx={{ p: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Avatar
                    sx={{ 
                      width: 36, 
                      height: 36,
                      border: '1px solid #303030',
                      flexShrink: 0,
                    }}
                    alt={video.channel}
                    src={video.channelAvatar}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 0.5,
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
                      sx={{ 
                        color: '#aaa', 
                        fontSize: '0.85rem',
                        mb: 0.5,
                      }}
                    >
                      {video.channel}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#aaa', 
                        fontSize: '0.85rem',
                      }}
                    >
                      {video.views} • {video.timestamp}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 