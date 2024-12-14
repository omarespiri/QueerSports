import React from 'react';

function Home() {
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Full viewport height
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif', // Global font
      color: '#001f3f', // Navy blue for text
    },
    container: {
      maxWidth: '42em',
      padding: '1rem',
    },
    heading: {
      fontSize: '3.5rem',
      margin: '0',
      padding: '1rem 0',
      fontWeight: 'bold',
      color: '#001f3f', // Navy blue for heading
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Match global text shadow
    },
    lead: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      color: '#36454F', // Charcoal for the paragraph
    },
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Breaking Barriers and Changing the Game.</h1>
        <p style={styles.lead}>An overview of queerness in sports.</p>
      </div>
    </main>
  );
}

export default Home;