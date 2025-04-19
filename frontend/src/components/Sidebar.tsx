import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
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
} from '@mui/icons-material';

const drawerWidth = 240;

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

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0f0f0f',
          borderRight: '1px solid #303030',
          color: 'white',
        },
      }}
    >
      <div className="h-[56px]" /> {/* Spacer for navbar */}
      <List>
        {mainMenuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            className="hover:bg-[#272727]"
            sx={{ cursor: 'pointer' }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#303030' }} />
      <List>
        {secondaryMenuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            className="hover:bg-[#272727]"
            sx={{ cursor: 'pointer' }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 