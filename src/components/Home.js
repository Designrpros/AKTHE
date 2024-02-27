import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from './logo.svg'; // Adjust the path according to your file structure

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

// Optional: Styled component for the logo image
const LogoImage = styled.img`
  width: 300px; 
  margin-bottom: 5rem; // Adds some space below the logo
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust the gap as needed
  margin-top: 2rem; // Adds some space above the logo container
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;

  &::before {
    content: '🎯';
    font-size: 3rem;
    grid-column: 1 / -1;
    text-align: center;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns
  gap: 40px;
  padding-top: 60px; // Increased padding to accommodate the icon

  &::before {
    content: '🏛️';
    font-size: 3rem;
    grid-column: 1 / -1; // Span across all columns
    justify-self: center; // Center the icon in the grid
    margin-bottom: 20px; // Space between the icon and the content
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  &::before {
    content: '📞';
    font-size: 3rem;
    grid-column: 1 / -1;
    text-align: center;
  }
`;



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
        duration: 0.8
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
  font-size: clamp(1rem, 2.5vw, 1.5rem); // Adjusts between 1rem and 1.5rem based on viewport width
  color: #333;
  margin: 1rem 0;
  max-width: 800px;
  text-align: right;
  padding: 0 20px; // Adds padding to prevent text from touching the edges on small screens
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

const BackgroundGraphics = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; // Ensure it stays behind the content
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2); // Semi-transparent black border
  width: 50px; // Initial size, will be overridden
  height: 50px; // Initial size, will be overridden
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
  
  
  
  
  


// Home component
const Home = () => {
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
                <CustomHeading>
                AKTHE
                </CustomHeading>
            </TextRevealContainer>
            <WrappedTextRevealContainer
                initial="hidden"
                animate="visible"
                variants={wrappedTextRevealVariants}
            >
                <CustomParagraph>
                Aktivitetsbasert Helsehjelp (AKTHE) er en nyopprettet avdeling i Bærum
                kommune som tilbyr helsefremmende aktiviteter for personer med psykiske
                lidelser og rusutfordringer.
                </CustomParagraph>
            </WrappedTextRevealContainer>
        <LogoContainer>
          <img src={logo} alt="AKTHE Logo 1" style={{ maxWidth: '80px' }} />
          <img src={logo} alt="AKTHE Logo 2" style={{ maxWidth: '80px' }} />
          <img src={logo} alt="AKTHE Logo 3" style={{ maxWidth: '80px' }} />
          <img src={logo} alt="AKTHE Logo 4" style={{ maxWidth: '80px' }} />
        </LogoContainer>
      </FullScreenIntro>
      
      <GoalsSection
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
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
        viewport={{ once: true, amount: 0.8 }}
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
                <FoundationSection
        variants={contentVariants} // Apply the defined variants
        initial="offscreen" // Initial state before scrolling into view
        whileInView="onscreen" // State when the component scrolls into view
        viewport={{ once: true, amount: 0.8 }} // Configuration for triggering the animation
        >
                {/* Our Foundation */}
                <Heading>Vårt fundament</Heading>
                <List>
                    <ListItem>
                    Recovery: Vi legger til rette for helsetjenester som fremmer brukerens
                    ressurser og styrker.
                    </ListItem>
                    <ListItem>
                    Supported Employment: Vi tilbyr støtte og veiledning for å hjelpe brukere
                    inn i ordinært, lønnet arbeid.
                    </ListItem>
                    <ListItem>
                    Individuell Jobbstøtte: Vi tilbyr et forpliktende samarbeid med NAV for å
                    hjelpe brukere med å finne og beholde en jobb.
                    </ListItem>
                    <ListItem>
                    Erfaringskompetanse: Vi bruker brukermedvirkning og erfaringskompetanse i
                    alt vi gjør.
                    </ListItem>
                    <ListItem>
                    Sosialt entreprenørskap: Vi er innovative og sosialt engasjerte, og har som
                    mål å være økonomisk bærekraftige.
                    </ListItem>
                </List>
                </FoundationSection>
                <FinancialSection
        variants={contentVariants} // Apply the defined variants
        initial="offscreen" // Initial state before scrolling into view
        whileInView="onscreen" // State when the component scrolls into view
        viewport={{ once: true, amount: 0.8 }} // Configuration for triggering the animation
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
        variants={contentVariants} // Apply the defined variants
        initial="offscreen" // Initial state before scrolling into view
        whileInView="onscreen" // State when the component scrolls into view
        viewport={{ once: true, amount: 0.8 }} // Configuration for triggering the animation
        >
                {/* Contact Us */}
                <Heading>Kontakt oss</Heading>
                <Paragraph>
                    For mer informasjon om AKTHE, kontakt oss på telefon eller e-post.
                </Paragraph>
                <Paragraph>
                    Telefon: 12345678 <br></br>
                    E-post: Post@post.com
                </Paragraph>
         </ContactSection>
    </PageWrapper>
  );
};

export default Home;
