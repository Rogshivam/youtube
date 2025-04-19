import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, CircularProgress, IconButton, Tooltip, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import VideoCard from '../components/VideoCard';

interface HistoryItem {
  _id: string;
  video: {
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
  };
  watchedAt: string;
}

const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/history`, {
        withCredentials: true,
      });
      console.log('History response:', response.data);
      if (response.data && response.data.data) {
        setHistory(response.data.data);
      } else {
        setError('Invalid response format from server');
      }
    } catch (err: any) {
      console.error('Error fetching history:', err);
      if (err.response) {
        if (err.response.status === 401) {
          setError('Please login to view your history');
          navigate('/login');
        } else {
          setError(`Error: ${err.response.data?.message || 'Failed to fetch history'}`);
        }
      } else if (err.request) {
        setError('No response from server. Please check if the backend is running.');
      } else {
        setError('An error occurred while fetching history');
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const removeFromHistory = async (videoId: string) => {
    try {
      await axios.delete(`${API_URL}/history/${videoId}`, {
        withCredentials: true,
      });
      setHistory(history.filter(item => item.video._id !== videoId));
    } catch (err: any) {
      console.error('Error removing from history:', err);
      setError(err.response?.data?.message || 'Failed to remove video from history');
    }
  };

  const clearHistory = async () => {
    try {
      await axios.delete(`${API_URL}/history/clear`, {
        withCredentials: true,
      });
      setHistory([]);
    } catch (err: any) {
      console.error('Error clearing history:', err);
      setError(err.response?.data?.message || 'Failed to clear history');
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ color: 'white' }}>
          Watch History
        </Typography>
        {history.length > 0 && (
          <Tooltip title="Clear all history">
            <IconButton 
              onClick={clearHistory}
              sx={{ color: 'white' }}
            >
              <ClearAllIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {history.length === 0 ? (
        <Typography sx={{ color: 'white', textAlign: 'center' }}>
          No videos in your watch history
        </Typography>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
          {history.map((item) => (
            <Box key={item._id} sx={{ position: 'relative' }}>
              <Link to={`/video/${item.video.videoId}`} style={{ textDecoration: 'none' }}>
                <VideoCard video={item.video} />
              </Link>
              <Tooltip title="Remove from history">
                <IconButton
                  onClick={() => removeFromHistory(item.video._id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Typography variant="caption" sx={{ color: 'gray', mt: 1 }}>
                Watched on {new Date(item.watchedAt).toLocaleDateString()}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default History; 