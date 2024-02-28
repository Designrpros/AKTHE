import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from './logo.svg'; // Ensure this path is correct
import Studio51 from './Studio51.png';

// Styled components
const ServicesWrapper = styled(motion.div)`
  padding: 5rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  background-color: #f0e7d8; // Background color of the page
  padding-top: 100px; // Adjust based on your toolbar height to prevent overlap
`;

const Card = styled.div`
  background-color: #333; // Dark background for the card
  color: #fff; // White text
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
  width: 80%; // Adjust based on your preference
  max-width: 200px; // Prevents the image from becoming too large
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardLink = styled.a`
  color: #82b1ff; // Light blue for contrast and visibility
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CardDescription = styled.p`
  text-align: center;
`;

// Services component
const Services = () => {
  return (
    <ServicesWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardImage src={logo} alt="Høl-i-CV-en" />
        <CardTitle>Høl-i-CV-en</CardTitle>
        <CardLink href="http://www.holicven.no">www.holicven.no</CardLink>
        <CardDescription>
          Tilbyr arbeidstrening og sosialt nettverk gjennom en brukerstyrt kafe og foodtruck.
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={Studio51} alt="Rap Clinic" />
        <CardTitle>Rap Clinic</CardTitle>
        <CardLink href="http://www.rapclinic.no">www.rapclinic.no</CardLink>
        <CardDescription>
          Fremmer kommunikasjon og uttrykk gjennom musikkaktiviteter og workshops.
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={logo} alt="The Music Truck" />
        <CardTitle>The Music Truck</CardTitle>
        <CardLink href="http://www.musictruck.no">www.musictruck.no</CardLink>
        <CardDescription>
          Ambulerende musikkaktiviteter som tilbyr musikkterapi for mennesker med psykiske lidelser.
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={logo} alt="DSA Groups" />
        <CardTitle>DSA Groups</CardTitle>
        <CardDescription>
          Arbeidstilbud rettet mot mennesker på autismespekteret, fokusert på skogsdrift og naturvern.
        </CardDescription>
      </Card>
    </ServicesWrapper>
  );
};

export default Services;
