import React from 'react';

function Essay() {
  const styles = {
    container: {
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif', // Global font
      color: '#001f3f', // Navy blue for text
    },
    separator: {
      border: 'none',
      borderTop: '2px solid #ccc', // Light gray line
      margin: '1.5rem 0', // Spacing around the line
      width: '80%', // Line width relative to the container
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#001f3f', // Navy blue for heading
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Match global text shadow
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#36454F', // Charcoal for paragraph
    },
    iframe: {
      width: '80%',
      height: '600px',
      border: 'none',
      marginTop: '1.5rem',
    },
    link: {
      fontSize: '1.25rem',
      color: '#007bff', // Link blue
      textDecoration: 'none',
      marginTop: '1rem',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Essay</h1>
      <p style={styles.paragraph}>
        Below is the essay that explains this project. You can view it directly or download it using the link below.
      </p>
      <iframe
        src="/pdfs/FinalEssay.pdf"
        style={styles.iframe}
        title="Final Essay"
      ></iframe>
      <hr style={styles.separator} />
      <a href="/pdfs/FinalEssay.pdf" style={styles.link} target="_blank" rel="noopener noreferrer">
        Download Final Essay
      </a>
    </div>
  );
}

export default Essay;
