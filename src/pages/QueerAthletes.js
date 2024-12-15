import React, { useState } from 'react';

function QueerAthletes() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Queer Athletes</h1>
      <p style={styles.leadParagraph}>Stories of some of the most prominent queer athletes in modern sports.</p>
      <hr style={styles.separator} />
      <Slideshow />
    </div>
  );
}

const Slideshow = () => {
  const slides = [
    {
      image: '/images/JasonCollins.jpg',
      caption: 'Jason Collins',
      paragraph: 'Collins, a former professional basketball player, had a 13-season career in the NBA from 2001 to 2014. On April 19, 2013, he publicly came out as a gay man in a Sports Illustrated story, making history as the first active male athlete to come out publicly in one of the four major North American professional sports leagues (NBA, NFL, MLB, NHL), sending shockwaves through the sports world.',
    },
    {
      image: '/images/MeganRapinoe.jpg',
      caption: 'Megan Rapinoe',
      paragraph: "Rapinoe, one of the most famous and influential athletes in soccer history, is also a significant figure for queer representation in sports. She came out as gay in 2012, just before the London Olympics, becoming one of the first high-profile women's soccer players to do so. Married to WNBA legend Sue Bird, the power couple continues to champion women's rights, LGBTQ+ equality, and racial justice.",
    },
    {
      image: '/images/LiaThomas.jpg',
      caption: 'Lia Thomas',
      paragraph: "Thomas, a former collegiate swimmer for the University of Pennsylvania, made history in 2022 as the first openly transgender athlete to win an NCAA Division I Championship, triumphing in the women's 500-yard freestyle. Her victory placed her at the center of a national debate about transgender athletes, as she transitioned from the men's team to the women's team in her senior year. Despite the controversy, Thomas remains a prominent activist for transgender athletes across all sports.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={styles.slideshowContainer}>
      <div style={styles.imageContainer}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
        <button style={styles.arrowLeft} onClick={handlePrevious}>
          &#8249;
        </button>
        <button style={styles.arrowRight} onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div style={styles.caption}>{slides[currentIndex].caption}</div>
      <div style={styles.paragraph}>{slides[currentIndex].paragraph}</div>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#001f3f', // Navy blue for text
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#001f3f',
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: '1rem',
  },
  leadParagraph: {
    fontSize: '1.25rem',
    color: '#36454F',
    marginBottom: '2rem',
  },
  slideshowContainer: {
    position: 'relative',
    width: '80%',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    maxWidth: '800px', // Increased width
    height: 'auto',
    maxHeight: '500px', // Increased height
    objectFit: 'cover', // Ensures proper aspect ratio
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  separator: {
    border: 'none',
    borderTop: '2px solid #ccc', // Light gray line
    margin: '1.5rem 0', // Spacing around the line
    width: '80%', // Line width relative to the container
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  caption: {
    marginTop: '10px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Match global text shadow
  },
  paragraph: {
    marginTop: '10px',
    fontSize: '1em',
    color: '#555',
    fontFamily: 'Arial, sans-serif',
  },
};


export default QueerAthletes;
