import React from 'react';
import { Box, Grid, Typography, Container, Tabs, Tab } from '@mui/material';
import AISongThumbnail from '../components/AISongThumbnail';

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  duration: string;
  style: 'minimal' | 'gradient' | 'pattern' | 'abstract' | 'vintage';
  thumbnailStyle: {
    primaryColor: string;
    secondaryColor: string;
    pattern: string;
    overlay: string;
    textColor: string;
  };
}

const songs: Song[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'DJ Cool',
    genre: 'Electronic',
    mood: 'Happy',
    duration: '3:45',
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
    title: 'Midnight Dreams',
    artist: 'Night Owl',
    genre: 'Ambient',
    mood: 'Calm',
    duration: '4:20',
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
    title: 'Urban Jungle',
    artist: 'City Beats',
    genre: 'Hip Hop',
    mood: 'Energetic',
    duration: '3:15',
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
    title: 'Ocean Waves',
    artist: 'Nature Sounds',
    genre: 'Relaxation',
    mood: 'Peaceful',
    duration: '5:30',
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
    title: 'Retro Vibes',
    artist: 'Time Machine',
    genre: 'Retro',
    mood: 'Nostalgic',
    duration: '3:55',
    style: 'vintage',
    thumbnailStyle: {
      primaryColor: '#FFD700',
      secondaryColor: '#8B4513',
      pattern: 'vintage',
      overlay: 'vintage',
      textColor: '#FFFFFF',
    },
  },
];

const AISongThumbnails = () => {
  const [selectedStyle, setSelectedStyle] = React.useState<string>('all');

  const filteredSongs = selectedStyle === 'all' 
    ? songs 
    : songs.filter(song => song.style === selectedStyle);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 'bold' }}>
        AI-Generated Song Thumbnails
      </Typography>

      <Tabs
        value={selectedStyle}
        onChange={(_, newValue) => setSelectedStyle(newValue)}
        sx={{
          mb: 4,
          '& .MuiTabs-indicator': {
            backgroundColor: 'white',
          },
        }}
      >
        <Tab 
          value="all" 
          label="All Styles" 
          sx={{ color: 'white' }} 
        />
        <Tab 
          value="minimal" 
          label="Minimal" 
          sx={{ color: 'white' }} 
        />
        <Tab 
          value="gradient" 
          label="Gradient" 
          sx={{ color: 'white' }} 
        />
        <Tab 
          value="pattern" 
          label="Pattern" 
          sx={{ color: 'white' }} 
        />
        <Tab 
          value="abstract" 
          label="Abstract" 
          sx={{ color: 'white' }} 
        />
        <Tab 
          value="vintage" 
          label="Vintage" 
          sx={{ color: 'white' }} 
        />
      </Tabs>

      <Grid container spacing={3}>
        {filteredSongs.map((song) => (
          <Grid item xs={12} sm={6} md={4} key={song.id}>
            <Box sx={{ mb: 2 }}>
              <AISongThumbnail
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                mood={song.mood}
                duration={song.duration}
                style={song.style}
                thumbnailStyle={song.thumbnailStyle}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AISongThumbnails; 