import React from 'react';

function LeagueActions() {
  const styles = {
    container: {
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#001f3f',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#001f3f',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      marginBottom: '1rem',
    },
    separator: {
      border: 'none',
      borderTop: '2px solid #ccc',
      margin: '1.5rem 0',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#36454F',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem',
      padding: '1rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1.5rem',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    cardImage: {
      width: '100%',
      maxWidth: '300px',
      height: '200px',
      borderRadius: '10px',
      marginBottom: '1rem',
      objectFit: 'cover',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#001f3f',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#36454F',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
    },
    button: {
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      color: '#ffffff',
      backgroundColor: '#001f3f',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    lastCard: {
      gridColumn: '1 / -1', // Span across all columns
      justifySelf: 'center', // Center-align the card
    },
  };

  const articles = [
    {
      title: 'NBA Pride Month Commitment',
      description:
        'Explore how the NBA celebrates Pride Month, promoting inclusivity and supporting LGBTQ+ causes through various initiatives.',
      image: '/images/NBAPride.png', // Replace with actual .jpg file
      url: 'https://www.nba.com/news/nba-continues-commitment-to-inclusivity-during-pride-month',
    },
    {
      title: 'NFL Pride: Football Is for Everyone',
      description:
        'The NFL showcases its commitment to inclusivity during Pride Month with a video and various community events.',
      image: '/images/NFLPride.jpg', // Replace with actual .jpg file
      url: 'https://www.nfl.com/videos/nfl-pride-football-is-for-everyone',
    },
    {
      title: 'WNBA and Pride Through the Years',
      description:
        'Learn about the WNBA’s long-standing commitment to Pride and how it supports LGBTQ+ athletes and fans.',
      image: '/images/WNBAPride.avif', // Replace with actual .jpg file
      url: 'https://www.wnba.com/news/inside-the-w-with-michelle-smith-the-w-and-pride-through-the-years',
    },
    {
      title: 'MLS Pride Training Tops',
      description:
        'A look into MLS’s exclusive Pride training tops, celebrating LGBTQ+ inclusivity in sports.',
      image: '/images/MLSPride.png', // Replace with actual .jpg file
      url: 'https://www.mlssoccer.com/news/love-unites-mls-unveils-2024-pride-top',
    },
    {
      title: 'Soccer for All: Celebrating Pride',
      description:
        'MLS clubs embrace Pride Month with Soccer for All initiatives, supporting LGBTQ+ causes and promoting equality.',
      image: '/images/MLSPrideLogo.png', // Replace with actual .jpg file
      url: 'https://www.mlssoccer.com/news/soccer-for-all-how-mls-clubs-are-celebrating-pride-month',
    },
    {
      title: 'Austin FC Pride Game',
      description:
        'Learn how Austin FC is celebrating Pride Month with a special Pride Game and community engagement.',
      image: '/images/AustinFcTrans.jpeg', // Replace with actual .jpg file
      url: 'https://www.austinfc.com/news/austin-fc-celebrates-international-pride-month',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Actions of Professional Leagues</h1>
      <p style={styles.paragraph}>
        Exploring the actions of professional sports leagues towards queer athletes and causes.
      </p>
      <hr style={styles.separator} />
      <div style={styles.grid}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={
              index === articles.length - 1 && articles.length % 2 !== 0
                ? { ...styles.card, ...styles.lastCard }
                : styles.card
            }
          >
            <img
              src={article.image}
              alt={article.title}
              style={styles.cardImage}
            />
            <h2 style={styles.cardTitle}>{article.title}</h2>
            <p style={styles.cardDescription}>{article.description}</p>
            <a
              href={article.url}
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeagueActions;
