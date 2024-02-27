import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.div`
  padding: 2rem;
`;

const About = () => {
  return (
    <ContentSection>
      <h2>About Us</h2>
      <p>
        [Studio Name] was founded in [year] by [founder(s)]. We are a team of [number] passionate 
        designers with a combined [number] years of experience. We believe in the power of design to 
        communicate ideas, create emotional connections, and drive meaningful results.
      </p>
      <p>
        Our mission is to help our clients achieve their business goals through creative and strategic 
        design solutions. We are committed to providing exceptional service, innovative thinking, and 
        a collaborative approach to every project.
      </p>
      {/* Add information about your team, values, or company culture */}
    </ContentSection>
  );
};

export default About;
