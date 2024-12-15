import React from 'react';

function Timeline() {
  const styles = {
    container: {
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
      color: '#001f3f',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#001f3f',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#36454F',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    timeline: {
      position: 'relative',
      margin: '0 auto',
      padding: '2rem 0',
      width: '80%',
      listStyle: 'none',
    },
    timelineItem: {
      position: 'relative',
      padding: '1.5rem 0',
      borderLeft: '3px solid #001f3f',
      marginLeft: '1rem',
    },
    timelineMarker: {
      position: 'absolute',
      top: '50%',
      left: '-11px',
      transform: 'translateY(-50%)',
      backgroundColor: '#001f3f',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
    },
    timelineContent: {
      marginLeft: '2rem',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    eventYear: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#001f3f',
      marginBottom: '0.5rem',
    },
    eventDescription: {
      fontSize: '1rem',
      color: '#36454F',
      marginBottom: '0.5rem',
    },
    eventExplanation: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '0.5rem',
    },
    eventSource: {
      fontSize: '0.9rem',
      color: '#4682B4',
      textDecoration: 'none',
      fontStyle: 'italic',
    },
    separator: {
      border: 'none',
      borderTop: '2px solid #ccc',
      margin: '1.5rem 0',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

  const timelineData = [
    {
      year: '1924',
      description: 'The first organized LGBTQ+ sports league was established.',
      explanation: 'This league aimed to provide a safe space for LGBTQ+ athletes.',
      source: 'https://example.com/1924-lgbtq-sports',
    },
    {
      year: '1981',
      description: 'The first Gay Games took place in San Francisco.',
      explanation: 'These games brought LGBTQ+ athletes from around the world together.',
      source: 'https://example.com/1981-gay-games',
    },
    {
      year: '2001',
      description: 'Billy Bean came out as gay after retiring from MLB.',
      explanation: 'He later became an advocate for inclusion in professional baseball.',
      source: 'https://example.com/2001-billy-bean',
    },
    {
      year: '2005',
      description: 'Sheryl Swoopes, WNBA star, came out publicly.',
      explanation: 'This was a landmark moment for LGBTQ+ visibility in women’s sports.',
      source: 'https://example.com/2005-swoopes',
    },
    {
      year: '2013',
      description: 'Jason Collins came out as gay.',
      explanation: 'He became the first active NBA player to do so.',
      source: 'https://example.com/2013-jason-collins',
    },
    {
      year: '2014',
      description: 'Michael Sam came out before the NFL draft.',
      explanation: 'He became the first openly gay player to be drafted by an NFL team.',
      source: 'https://example.com/2014-michael-sam',
    },
    {
      year: '2016',
      description: 'Chris Mosier joined the U.S. national team as a transgender athlete.',
      explanation: 'He broke barriers for transgender athletes in the Olympics.',
      source: 'https://example.com/2016-chris-mosier',
    },
    {
      year: '2019',
      description: 'Megan Rapinoe advocated for LGBTQ+ rights during the World Cup.',
      explanation: 'She used her platform to promote equality and inclusion.',
      source: 'https://example.com/2019-rapinoe',
    },
    {
      year: '2021',
      description: 'Carl Nassib came out as gay while playing in the NFL.',
      explanation: 'He became a beacon of hope for LGBTQ+ athletes in football.',
      source: 'https://example.com/2021-nassib',
    },
    {
      year: '2023',
      description: 'NHL players participated in Pride campaigns.',
      explanation: 'These campaigns faced controversies but promoted LGBTQ+ inclusion.',
      source: 'https://example.com/2023-nhl-pride',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Milestones in LGBTQ+ Sports History</h1>
      <p style={styles.paragraph}>
        A timeline of key events highlighting changing attitudes toward LGBTQ+ athletes.
      </p>
      <hr style={styles.separator} />
      <ul style={styles.timeline}>
        {timelineData.map((item, index) => (
          <li key={index} style={styles.timelineItem}>
            <div style={styles.timelineMarker}></div>
            <div style={styles.timelineContent}>
              <div style={styles.eventYear}>{item.year}</div>
              <div style={styles.eventDescription}>{item.description}</div>
              <div style={styles.eventExplanation}>
                {item.explanation}
              </div>
              {item.source && (
                <a
                  href={item.source}
                  style={styles.eventSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;