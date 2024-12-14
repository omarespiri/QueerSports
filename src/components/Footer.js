import React from 'react';

function Footer() {
  const styles = {
    footer: {
      padding: '0.5rem 0', // Reduced padding
      color: '#ffffff', // White text for contrast
      fontSize: '0.875rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif', // Global font family
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)', // Slight shadow for text clarity
      borderTop: '1px solid #ccc', // Subtle top border for separation
      backgroundColor: ' #4B9CD3 ', // Dark blue background
    },
    link: {
      color: '#add8e6', // Light blue for links
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      color: '#87cefa', // Lighter blue hover effect
      textDecoration: 'underline',
    },
    paragraph: {
      margin: '0.25rem 0', // Tighten paragraph spacing
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>
        Yale University WGSS 125. Final Project by Omar Espiricueta. Fall 2024.
      </p>
      <p style={styles.paragraph}>
        Powered by{' '}
        <a
          href="https://getbootstrap.com/"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
          onMouseOut={(e) => (e.target.style.color = styles.link.color)}
        >
          Bootstrap
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
