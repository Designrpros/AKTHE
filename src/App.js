import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Component imports
import Home from './components/Home';
import Services from './components/Services';


import AKTHE from './components/Images/AKTHE.png';

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0); /* Fully transparent background */
  color: black; /* White text */
  backdrop-filter: blur(10px);
  z-index: 1000;

  nav {
    display: flex;
    gap: 10px;
  }

  h1 {
    margin-right: auto;
    font-size: 1.2rem;
  }

  img {
    height: 20px; /* Adjust based on your preference */
    margin-right: 10px; /* Space between the image and the title */
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


const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: black; /* White text */
  border-bottom: ${({ active }) => (active ? '2px solid black' : '2px solid transparent')};
  font-weight: bold; // Make the text bold
  text-transform: uppercase; // Optional: uppercase letters for a more structured look
  padding-right: 2rem;

  &:hover {
    color: #007bff; /* Light blue on hover */
    border-bottom: 2px solid #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; // Smaller font size on smaller screens
    padding: 0.4rem 0.8rem; // Smaller padding on smaller screens
  }
`;



// Styled Link Component to remove default styles
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Inherit color from parent (TabButton)
  z-index: 2;
  &:hover {
    text-decoration: none; // Remove underline on hover
  }
`;

const ToolbarLogo = () => (
  <Link to="/">
    <Logo src={AKTHE} alt="AKTHE Logo" />
  </Link>
);

const Logo = styled.img`
  width: 80%; // Adjust based on your preference
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); // Slightly enlarge the logo on hover
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
        <h1>
          <StyledLink to="/">
          <ToolbarLogo />
          </StyledLink>
        </h1>
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
