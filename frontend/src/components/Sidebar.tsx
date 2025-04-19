import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  ThumbUp as ThumbUpIcon,
  PlaylistPlay as PlaylistPlayIcon,
  WatchLater as WatchLaterIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 72;
const expandedDrawerWidth = 240;

const mainMenuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Explore', icon: <ExploreIcon />, path: '/explore' },
  { text: 'Subscriptions', icon: <SubscriptionsIcon />, path: '/subscriptions' },
  { text: 'Library', icon: <VideoLibraryIcon />, path: '/library' },
];

const secondaryMenuItems = [
  { text: 'History', icon: <HistoryIcon />, path: '/history' },
  { text: 'Liked Videos', icon: <ThumbUpIcon />, path: '/liked-videos' },
  { text: 'Playlists', icon: <PlaylistPlayIcon />, path: '/playlists' },
  { text: 'Watch Later', icon: <WatchLaterIcon />, path: '/watch-later' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const renderMenuItems = (items: typeof mainMenuItems) => (
    <List sx={{ py: 0 }}>
      {items.map((item) => {
        const isSelected = location.pathname === item.path;
        return (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            sx={{ 
              cursor: 'pointer',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '8px 0',
              minHeight: 'auto',
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              },
            }}
            onClick={isMobile ? onClose : undefined}
          >
            <ListItemIcon sx={{ 
              color: isSelected ? 'white' : 'rgba(255, 255, 255, 0.7)',
              minWidth: 'auto',
              justifyContent: 'center',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'white',
              },
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{
                '& .MuiTypography-root': {
                  fontSize: '0.7rem',
                  color: isSelected ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease-in-out',
                  textAlign: 'center',
                  marginTop: '4px',
                },
                '&:hover .MuiTypography-root': {
                  color: 'white',
                },
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: isMobile ? '100%' : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isMobile ? '100%' : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0f0f0f',
          borderRight: 'none',
          color: 'white',
          transition: 'width 0.2s ease-in-out',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ height: '56px' }} /> {/* Spacer for navbar */}
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>
      )}
      {renderMenuItems(mainMenuItems)}
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />
      {renderMenuItems(secondaryMenuItems)}
    </Drawer>
  );
};

export default Sidebar; 