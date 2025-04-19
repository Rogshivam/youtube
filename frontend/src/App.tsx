import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Explore from './pages/Explore';
import History from "./pages/History";
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0000',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1f1f1f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="flex h-screen bg-[#0f0f0f]">
          <Navbar />
          <Sidebar />
          <main className="flex-1 overflow-y-auto ml-[1vh] mt-[56px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/video/:id" element={<VideoPlayer />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
