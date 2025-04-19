import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Mic as MicIcon,
} from '@mui/icons-material';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0f0f0f', zIndex: 1201 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Link to="/" className="flex items-center">
          <svg
            height={isMobile ? "16" : "20"}
            viewBox="0 0 90 20"
            className="mr-2"
          >
            <g fill="none">
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="red"
              />
              <path
                d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                fill="white"
              />
            </g>
          </svg>
          {!isMobile && <span className="text-xl font-bold">YouTube</span>}
        </Link>

        {!isMobile ? (
          <div className="flex-1 flex items-center justify-center mx-4">
            <div className="flex items-center bg-[#121212] rounded-full px-4 py-2 w-full max-w-2xl">
              <InputBase
                placeholder="Search"
                className="flex-1 text-white"
                sx={{ ml: 1 }}
              />
              <IconButton type="submit" sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex justify-end">
            <IconButton color="inherit" onClick={toggleSearch}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MicIcon />
            </IconButton>
          </div>
        )}

        <div className="flex items-center">
          {!isMobile && (
            <IconButton color="inherit">
              <VideoCallIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </div>

        {isMobile && searchOpen && (
          <Drawer
            anchor="top"
            open={searchOpen}
            onClose={toggleSearch}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: '#0f0f0f',
                padding: '16px',
              },
            }}
          >
            <div className="flex items-center bg-[#121212] rounded-full px-4 py-2">
              <InputBase
                placeholder="Search"
                className="flex-1 text-white"
                sx={{ ml: 1 }}
                autoFocus
              />
              <IconButton type="submit" sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>
            </div>
          </Drawer>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 