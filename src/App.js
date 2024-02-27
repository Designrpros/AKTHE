import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Component imports
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// Adjusted Transparent Floating Toolbar Component
const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  nav {
    display: flex;
    gap: 10px;

    & > button:last-child {
      padding-right: 2rem; // Additional padding for the last button
    }
  }

  h1 {
    margin-right: auto;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    nav {
      gap: 5px;
    }
    h1 {
      font-size: 1rem;
    }
  }
`;


// Typography Improvement for TabButton
const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ active }) => (active ? '#333' : '#333')};
  border-bottom: ${({ active }) => (active ? '2px solid #333' : '2px solid transparent')};
  font-weight: bold; // Make the text bold
  text-transform: uppercase; // Optional: uppercase letters for a more structured look

  &:hover {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; // Smaller font size on smaller screens
    padding: 0.4rem 0.8rem; // Smaller padding on smaller screens
  }
`;

// App Component remains the same


// Styled Link Component to remove default styles
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Inherit color from parent (TabButton)

  &:hover {
    text-decoration: none; // Remove underline on hover
  }
`;

// App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <Toolbar>
        <h1>AKTHE</h1>
        <nav>
          <TabButton onClick={() => handleTabClick('home')} active={activeTab === 'home'}>
            <StyledLink to="/">Om Oss</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('services')} active={activeTab === 'services'}>
            <StyledLink to="/tilbud">Tilbud</StyledLink>
          </TabButton>
        </nav>
      </Toolbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tilbud" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
