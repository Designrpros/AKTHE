import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.div`
  padding: 2rem;
`;

const Contact = () => {
  return (
    <ContentSection>
      <h4>Contact Us</h4>
      <p>
        We'd love to hear from you! Feel free to contact us using the following information:
      </p>
      <ul>
        <li>Email: [email address]</li>
        <li>Phone: [phone number]</li>
        {/* Add social media links or a contact form */}
      </ul>
      <p>
        You can also visit our studio at: [studio address] (optional)
      </p>
    </ContentSection>
  );
};

export default Contact;
