import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import HØL_I_CVEN_TRANS from './Images/HØL_I_CVEN.png';
import Studio51 from './Studio51.png'; 
import Music_Truck_White from './Images/Music_Truck_White.png';

// Styled components
const ServicesWrapper = styled(motion.div)`
  padding: 5rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  background-color: #f0e7d8;
  padding-top: 100px;
`;

const Card = styled.div`
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
  width: 80%;
  max-width: 200px;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardLink = styled.a`
  color: #82b1ff;
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
    <>
      <Helmet>
        <title>Våre Tilbud - AKTHE</title>
        <meta name="description" content="Utforsk vårt utvalg av tjenester, inkludert musikkterapi, arbeidsstøtte og mer." />
      </Helmet>
      <ServicesWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardImage src={HØL_I_CVEN_TRANS} alt="Høl-i-CV-en" />
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
          <CardImage src={Music_Truck_White} alt="The Music Truck" />
          <CardTitle>The Music Truck</CardTitle>
          <CardLink href="http://www.musictruck.no">www.musictruck.no</CardLink>
          <CardDescription>
            Ambulerende musikkaktiviteter som tilbyr musikkterapi for mennesker med psykiske lidelser.
          </CardDescription>
        </Card>

        <Card>
          <CardTitle>DSA Groups</CardTitle>
          <CardDescription>
            Arbeidstilbud rettet mot mennesker på autismespekteret, fokusert på skogsdrift og naturvern.
          </CardDescription>
        </Card>
      </ServicesWrapper>
    </>
  );
};

export default Services;
