import React, { useRef } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import AKTHE from './Images/AKTHE.png';
import HØL_I_CVEN_TRANS from './Images/HØL_I_CVEN_TRANS.png';
import Studio51 from './Studio51.png';
import Music_Truck from './Images/Music_Truck.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Wrapper for the entire page
const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f0e7d8;
`;

// Full-screen introduction section with logo
const FullScreenIntro = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  width: 100%;
  background-color: #f0e7d8; // Consistent background color
  padding: 2rem;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust the gap as needed
  margin-top: 2rem; // Adds some space above the logo container
`;

const StyledLink = styled.a`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); // Adjust the scale value as needed
  }
`;
const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 100; // Ensure this is sufficiently high

  // Adjust the icon size, color, and animation as needed
  .chevron-icon {
    font-size: 24px;
    color: #333;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;



// Base style for content sections
const BaseContentSection = styled(motion.div)`
  background-color: #333; /* Dark background */
  color: #fff; /* White text */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;


// Goals Section with specific styling
const GoalsSection = styled(BaseContentSection)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Adjust based on content size
  gap: 20px;
  align-items: start;

  &::before {
    content: '🎯';
    font-size: 3rem;
    grid-column: 1 / -1; // Span across all columns
    text-align: center;
    margin-bottom: 20px; // Add space between the icon and the first item
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column layout on smaller screens
  }
`;



// Services Section with its unique styling
const ServicesSection = styled(BaseContentSection)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  &::before {
    content: '💼';
    font-size: 3rem;
    grid-column: 1 / -1;
    text-align: center;
  }
`;

// Foundation Section with distinct styling
const FoundationSection = styled(BaseContentSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 2rem;

  &::before {
    content: '🏛️';
    font-size: 3rem;
    align-self: center; // This ensures the icon aligns itself to the center of the flex container
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    place-items: center; // This centers the items both horizontally and vertically in their grid cells

    &::before {
      grid-column: 1 / -1; // This makes sure the icon spans all columns
      justify-self: center; // Explicitly center the icon horizontally in the grid layout
    }
  }
`;








// Financial Foundation Section with unique styling
const FinancialSection = styled(BaseContentSection)`
  background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr; // Single column for simplicity
  padding-top: 60px; // Increased padding to accommodate the icon

  &::before {
    content: '💰';
    font-size: 3rem;
    grid-column: 1 / -1; // Span across all columns
    justify-self: center; // Center the icon in the grid
    margin-bottom: 20px; // Space between the icon and the content
  }
`;




// Contact Section with specific styling
const ContactSection = styled(BaseContentSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%; // Adjust based on your design needs
  max-width: 800px; // Keep it consistent with other sections

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin: 20px; // Creates space between the icon and the form
`;


const foundationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

// Define animation variants for the content sections
const contentVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    }
  };


const Heading = styled.h1`
  font-size: calc(2rem + 2vw);
  grid-column: 1 / -1; /* Span across all columns */
  text-align: center; /* Center the heading */
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 1rem 0;
  text-align: center; /* Center the heading */
`;
// Since we're changing the layout approach, List and ListItem adjustments might be minimal or unnecessary.
// Ensure they fit the dark theme:
const List = styled.ul`
  list-style-type: none; /* Remove default list styling */
  padding: 0;
  display: contents; /* Use 'contents' to effectively ignore the list wrapper */
`;

const ListItem = styled.li`
  background-color: #444; /* Slightly lighter than the section background for contrast */
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center; /* Center align the text within each bullet/column */
`;


const CustomHeading = styled(motion.h1)`
  font-size: clamp(5rem, 8vw, 10rem); // Adjusts between 2.5rem and 10rem based on viewport width
  color: #333;
  margin: 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CustomParagraph = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.5rem); // Responsive font size
  line-height: 1.6; // Improved line height for readability
  color: #333; // Adjust based on your design
  text-align: right; // Justify or center based on preference
  padding: 0 20px; // Padding to ensure it doesn't touch the edges
  max-width: 800px; // Limit the width for better readability
  margin: 20px auto; // Center it horizontally
  font-family: 'Open Sans', sans-serif; // Example font
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;



const TextRevealContainer = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;
`;

const textRevealVariants = {
  hidden: { width: 0 },
  visible: { 
    width: '100%', 
    transition: { duration: 2, ease: "easeInOut" }
  },
};

const WrappedTextRevealContainer = styled(motion.div)`
  display: inline-block; // Allows the container to fit the content size
`;

const wrappedTextRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 2, ease: "easeInOut" }
  },
};

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2); // Semi-transparent black border
  width: 50px; // Initial size, will be overridden
  height: 50px; // Initial size, will be overridden
  z-index: 1;
`;



const MovingCircles = () => {
    const numberOfCircles = 3; // Even fewer circles for a minimalist look
  
    const circles = Array.from({ length: numberOfCircles }).map((_, index) => (
      <Circle
        key={index}
        initial={{ x: randomX(), y: randomY() }}
        animate={{
          x: [null, randomX(), randomX()], // Subtle movement
          y: [null, randomY(), randomY()],
        }}
        transition={{
          duration: 30 + Math.random() * 30, // Very slow, subtle movement
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: `${300 + Math.random() * 400}px`, // Very large size between 300px and 700px
          height: `${300 + Math.random() * 400}px`, // Same as width to maintain circle shape
          borderWidth: `${3 + Math.random() * 5}px`, // Thicker border width between 3px and 8px
        }}
      />
    ));
  
    function randomX() {
      // Adjusted for larger circle sizes to keep them within the viewport
      return `${Math.random() * (window.innerWidth - 700)}px`; // Adjust based on max circle size
    }
  
    function randomY() {
      // Adjusted for larger circle sizes to keep them within the viewport
      return `${Math.random() * (window.innerHeight - 700)}px`; // Adjust based on max circle size
    }
  
    return <>{circles}</>;
  };
  
  
  const FoundationComponent = () => {
    return (
        <FoundationSection
        variants={foundationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Heading>Vårt fundament</Heading>
        <List>
          <ListItem>Recovery: Vi legger til rette for helsetjenester som fremmer brukerens ressurser og styrker.</ListItem>
          <ListItem>Supported Employment: Vi tilbyr støtte og veiledning for å hjelpe brukere inn i ordinært, lønnet arbeid.</ListItem>
          <ListItem>Individuell Jobbstøtte: Vi tilbyr et forpliktende samarbeid med NAV for å hjelpe brukere med å finne og beholde en jobb.</ListItem>
          <ListItem>Erfaringskompetanse: Vi bruker brukermedvirkning og erfaringskompetanse i alt vi gjør.</ListItem>
          <ListItem>Sosialt entreprenørskap: Vi er innovative og sosialt engasjerte, og har som mål å være økonomisk bærekraftige.</ListItem>
        </List>
      </FoundationSection>
    );
  };
  
  // Styled components
// Assuming ContactSection spans the full width of its parent


const Form = styled.form`
  width: 80%; // Takes up 80% of ContactSection width
  display: flex;
  flex-direction: column;
  gap: 10px; // Adjust the gap between form elements

  @media (max-width: 768px) {
    width: 90%; // You can increase the width on smaller screens if needed
  }
`;



const Input = styled.input`
width: 95%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #f0e7d;
`;

const Textarea = styled.textarea`
width: 95%;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
background-color: #f0e7d;
`;

const Button = styled.button`
padding: 10px 20px;
background-color: #d0c7b8
;
color: black;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
  background-color: #f0e7d;
}
`;


const AKTHELogo = styled.img`
  width: 120px; // Example size, adjust as needed
  height: auto;
`;

const HolicvenLogo = styled.img`
  width: 100px; // Example size, adjust as needed
  height: auto;
`;

const Studio51Logo = styled.img`
  width: 100px; // Example size, adjust as needed
  height: auto;
`;

// Adjust MusicTruckLogo size as needed
const MusicTruckLogo = styled.img`
  width: 100px; // Adjusted size
  height: auto;
`;

const AnimatedLogo = styled(motion.img)`
  width: 60%; // Initial size, adjust as needed
  max-width: 300px; // Prevents the logo from becoming too large
  height: auto; // Maintains aspect ratio

  // Use a media query to adjust the size on smaller screens
  @media (max-width: 768px) {
    max-width: 150px; // Adjust this value based on your design needs
  }
`;


// Define your animation variants
const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut",
    }
  },
};



// Home component
const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_te60jhg', 'template_94ms6tl', form.current, 'user_YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    // Animation variants for the heading
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };
  
    return (
      <PageWrapper>
            <MovingCircles /> {/* This adds the moving circles to the background */}
        <FullScreenIntro>
        <TextRevealContainer
          initial="hidden"
          animate="visible"
          variants={textRevealVariants}
        >
          <AnimatedLogo 
            src={AKTHE} 
            alt="AKTHE Logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />
        </TextRevealContainer>
            <WrappedTextRevealContainer
                initial="hidden"
                animate="visible"
                variants={wrappedTextRevealVariants}
            >
                <CustomParagraph>
                    <span style={{ fontWeight: 'bold' }}>Aktivitetsbasert Helsehjelp</span> er en nyopprettet avdeling i Bærum kommune som tilbyr helsefremmende aktiviteter for personer med psykiske lidelser og rusutfordringer.
                </CustomParagraph>

            </WrappedTextRevealContainer>
            <LogoContainer>
              <StyledLink href="http://www.holicven.no" rel="noopener noreferrer">
                <HolicvenLogo src={HØL_I_CVEN_TRANS} alt="Høl i CV'en" />
              </StyledLink>
              <StyledLink href="http://www.rapclinic.no" rel="noopener noreferrer">
                <Studio51Logo src={Studio51} alt="Studio 51" />
              </StyledLink>
              <StyledLink href="http://www.musictruck.no" rel="noopener noreferrer">
                <MusicTruckLogo src={Music_Truck} alt="Music Truck" />
              </StyledLink>
            </LogoContainer>


        <ScrollArrow onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>

      </FullScreenIntro>
      
      <GoalsSection
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
      >
        <Heading>Våre mål</Heading>
                    <List>
                        <ListItem>
                        Bidra til bedring og mestring av hverdagen
                        </ListItem>
                        <ListItem>Forebygge og reversere utenforskap</ListItem>
                        <ListItem>
                        Tilby sosialt samhold, arbeidstrening, betalt arbeid og kompetanseheving
                        </ListItem>
                    </List>
                    </GoalsSection>

        <ServicesSection
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        >
                {/* Our Services */}
                <Heading>Våre tilbud</Heading>
                <List>
                    <ListItem>
                    Høl-i-CV-en: En brukerstyrt kafe og foodtruck som tilbyr arbeidstrening og
                    sosialt nettverk
                    </ListItem>
                    <ListItem>
                    Rap Clinic: Musikkaktiviteter og workshops som fremmer kommunikasjon,
                    uttrykk og mestring
                    </ListItem>
                    <ListItem>
                    The Music Truck: Ambulerende musikkaktiviteter som når ut til personer i
                    lokalsamfunnet
                    </ListItem>
                    <ListItem>
                    DSA Groups: Arbeidstilbud for personer på autismespekteret med fokus på
                    skogsdrift og naturvern
                    </ListItem>
                </List>
                </ServicesSection>
                <FoundationComponent />
                <FinancialSection
        variants={contentVariants} // Apply the defined variants
        initial="offscreen" // Initial state before scrolling into view
        whileInView="onscreen" // State when the component scrolls into view
        viewport={{ once: true, amount: 0.7 }} // Configuration for triggering the animation
        >
                {/* Financial Foundation */}
                <Heading>Økonomisk grunnlag</Heading>
                <Paragraph>
                    AKTHE er et kommunalt tiltak med støtte fra Bærum kommune og eksterne
                    organisasjoner. Vi tar ikke ut overskudd, og alle innskytende midler går
                    til å opprettholde og videreutvikle våre tilbud.
                </Paragraph>
                </FinancialSection>
                <ContactSection
                variants={contentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                {/* Contact Us */}
                <IconContainer>📞</IconContainer>
                <Heading>Kontakt oss</Heading>
                <Paragraph>
                    For mer informasjon om AKTHE, kontakt oss på telefon eller e-post.
                </Paragraph>
                <Paragraph>
                    Telefon: 12345678 <br></br>
                    E-post: Post@post.com
                </Paragraph>

                <Form ref={form} onSubmit={sendEmail}>
                    <Input type="text" name="user_name" placeholder="Name" required />
                    <Input type="email" name="user_email" placeholder="Email" required />
                    <Textarea name="message" placeholder="Message" rows="4" required />
                    <Button type="submit">Send</Button>
                </Form>
            </ContactSection>
    </PageWrapper>
  );
};

export default Home;
