import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  CircularProgress,
  Box,
  Chip,
  Tabs,
  Tab,
  CardActionArea,
  Button,
  Divider,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import AISongThumbnail from '../components/AISongThumbnail';

// YouTube API key - in a real app, this would be in an environment variable
const API_KEY = 'YOUR_YOUTUBE_API_KEY';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
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

// Categories for the Explore page
const categories = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Sports',
  'Learning',
  'Technology',
  'Entertainment',
  'Fashion',
];

const Explore = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    fetchTrendingVideos();
  }, [selectedCategory]);

  const fetchTrendingVideos = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, you would use the YouTube Data API
      // For now, we'll use mock data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data for demonstration
      const mockVideos: Video[] = [
        {
          id: '1',
          title: 'AI Generated Symphony Orchestra',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Digital Philharmonic',
          channelAvatar: 'https://i.pravatar.cc/150?img=20',
          views: '3.2M views',
          timestamp: '1 day ago',
          duration: '22:15',
          genre: 'Classical',
          mood: 'Epic',
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
          id: '2',
          title: 'Future of Music: AI Composition',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Music Evolution',
          channelAvatar: 'https://i.pravatar.cc/150?img=21',
          views: '1.8M views',
          timestamp: '3 days ago',
          duration: '18:30',
          genre: 'Electronic',
          mood: 'Futuristic',
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
          id: '3',
          title: 'AI Generated Guitar Solos',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Digital Guitarist',
          channelAvatar: 'https://i.pravatar.cc/150?img=22',
          views: '950K views',
          timestamp: '1 week ago',
          duration: '14:45',
          genre: 'Rock',
          mood: 'Energetic',
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
          id: '4',
          title: 'Electronic Beats by AI',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Future Rhythm',
          channelAvatar: 'https://i.pravatar.cc/150?img=23',
          views: '2.5M views',
          timestamp: '5 days ago',
          duration: '16:20',
          genre: 'EDM',
          mood: 'Dance',
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
          id: '5',
          title: 'AI Vocal Synthesis Showcase',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Virtual Vocalist',
          channelAvatar: 'https://i.pravatar.cc/150?img=24',
          views: '1.4M views',
          timestamp: '2 days ago',
          duration: '19:55',
          genre: 'Pop',
          mood: 'Melodic',
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
          id: '6',
          title: 'Experimental AI Sound Design',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Sound Explorer',
          channelAvatar: 'https://i.pravatar.cc/150?img=25',
          views: '780K views',
          timestamp: '4 days ago',
          duration: '12:40',
          genre: 'Experimental',
          mood: 'Ethereal',
          style: 'abstract',
          thumbnailStyle: {
            primaryColor: '#000000',
            secondaryColor: '#FFFFFF',
            pattern: 'abstract',
            overlay: 'abstract',
            textColor: '#FFFFFF',
          },
        },
        {
          id: '7',
          title: 'AI Music Production Tutorial',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'AI Producer',
          channelAvatar: 'https://i.pravatar.cc/150?img=26',
          views: '1.1M views',
          timestamp: '6 days ago',
          duration: '25:15',
          genre: 'Educational',
          mood: 'Inspirational',
          style: 'gradient',
          thumbnailStyle: {
            primaryColor: '#FF4500',
            secondaryColor: '#FFA500',
            pattern: 'waves',
            overlay: 'gradient',
            textColor: '#FFFFFF',
          },
        },
        {
          id: '8',
          title: 'World Music Generated by AI',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          channel: 'Global Sounds AI',
          channelAvatar: 'https://i.pravatar.cc/150?img=27',
          views: '920K views',
          timestamp: '1 week ago',
          duration: '21:30',
          genre: 'World',
          mood: 'Global',
          style: 'pattern',
          thumbnailStyle: {
            primaryColor: '#000000',
            secondaryColor: '#FFFFFF',
            pattern: 'dots',
            overlay: 'pattern',
            textColor: '#FFFFFF',
          },
        },
      ];
      
      setVideos(mockVideos);
      
      // In a real app, you would use the YouTube Data API like this:
      /*
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=24&regionCode=US&videoCategoryId=${getCategoryId(selectedCategory)}&key=${API_KEY}`
      );
      
      const formattedVideos = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        channelAvatar: '', // Would need another API call to get channel avatar
        views: formatViews(item.statistics.viewCount),
        timestamp: formatTimestamp(item.snippet.publishedAt),
        duration: formatDuration(item.contentDetails.duration),
      }));
      
      setVideos(formattedVideos);
      */
      
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to load videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  // Different video card design for Explore page
  const ExploreVideoCard = ({ video }: { video: Video }) => {
    return (
      <Card
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          transition: 'transform 0.2s ease-in-out',
          height: '100%',
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}
      >
        <CardActionArea component={Link} to={`/video/${video.id}`}>
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
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              color: '#aaa',
              '&.Mui-selected': {
                color: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Typography color="error">{error}</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {videos.map((video) => (
            <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
              <ExploreVideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Explore; 