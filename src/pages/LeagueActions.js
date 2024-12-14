import React from 'react';

function LeagueActions() {
  const styles = {
    container: {
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif', // Global font
      color: '#001f3f', // Navy blue for text
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Actions of Professional Leagues</h1>
      <p style={styles.paragraph}>
        Exploring the actions of professional sports leagues towards queer athletes and causes.
      </p>
    </div>
  );
}

export default LeagueActions;
