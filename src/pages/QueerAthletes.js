import React, { useState } from 'react';

function QueerAthletes() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Queer Athletes</h1>
      <p style={styles.leadParagraph}>Stories and activism from queer athletes.</p>
      <Slideshow />
    </div>
  );
}

const Slideshow = () => {
  const slides = [
    {
      image: '/images/JasonCollins.jpg',
      caption: 'Jason Collins',
      paragraph: 'This athlete broke barriers and advocated for inclusivity in sports.',
    },
    {
      image: '/images/MeganRapinoe.jpg',
      caption: 'Megan Rapinoe',
      paragraph: 'Paving the way for future generations, this athlete made history.',
    },
    {
      image: '/images/LiaThomas.jpg',
      caption: 'Lia Thomas',
      paragraph: 'Through resilience and determination, this athlete inspires others.',
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
    maxWidth: '600px', // Ensures consistent width
    height: 'auto',
    maxHeight: '400px', // Ensures consistent height
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
