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
      year: '1975',
      description: 'Dave Kopay becomes the first NFL player to come out publicly as gay.',
      explanation: "Kopay was retired at the time, but his coming out marked a monumental moment in history, challenging traditional perceptions of what it means to be a football player.",
      source: 'https://magazine.washington.edu/feature/husky-legend-and-gay-icon-david-kopay-is-at-peace-and-at-home/',
    },
    {
      year: '1982',
      description: 'The first Gay Games took place in San Francisco.',
      explanation: "These games brought together over 1,300 athletes from 170 cities to compete in a variety of sports, including basketball, track and field, volleyball, and more.",
      source: 'https://www.advocate.com/sports/2018/8/03/7-fascinating-facts-about-gay-games#rebelltitem5',
    },
    {
      year: '1999',
      description: 'ESPN airs "World of the Gay Athlete"',
      explanation: 'This was the first time a major mainstream media outlet highlighted queer athletes.',
      source: 'https://www.outsports.com/2011/9/13/4051830/moment-19-espn-airs-world-of-the-gay-athlete/',
    },
    {
      year: '2005',
      description: 'Sheryl Swoopes, WNBA star, came out publicly.',
      explanation: "Swoopes' story sparked confusion for some, as she had previously been married to a man. Nevertheless, her coming out was a landmark moment for queer women athletes.",
      source: 'https://www.espn.com/espnw/voices/story/_/id/23532000/the-unexpected-legacy-sheryl-swoopes',
    },
    {
      year: '2013',
      description: 'Jason Collins came out as gay.',
      explanation: "He became the first active male player in the four major North American professional sports leagues to come out.",
      source: 'https://www.si.com/nba/2013/04/29/jason-collins-comes-out-openly-gay-male-athlete-wizards-david-stern-arn-tellem-ernie-grunfeld',
    },
    {
      year: '2014',
      description: 'Michael Sam became the first openly gay player to be drafted into the NFL.',
      explanation: "This was a monumental moment, paving the way for future athletes to live authentically without hiding who they are to be accepted in professional leagues.",
      source: 'https://www.nytimes.com/2014/02/10/sports/michael-sam-college-football-star-says-he-is-gay-ahead-of-nfl-draft.html',
    },
    {
      year: '2015',
      description: 'Caitlyn Jenner publicly came out as transgender.',
      explanation: "Jenner, a former Olympic gold medalist, became one of the most visible and famous transgender individuals and athletes of all time.",
      source: 'https://www.theguardian.com/tv-and-radio/2017/may/08/caitlyn-jenner-bruce-transitioning-kardashians-reality-tv-star',
    },
    {
      year: '2021',
      description: 'Carl Nassib came out as gay while playing in the NFL.',
      explanation: 'He became the first gay active player in the NFL.',
      source: 'https://www.outsports.com/2021/6/21/22544294/raiders-player-carl-nassib-gay-nfl-coming-out/',
    },
    {
      year: '2022',
      description: 'Lia Thomas becomes the first openly transgender athlete to win an NCAA Division 1 Championship in any sport.',
      explanation: "Despite the media firestorm, she emerged as a trailblazer for transgender athletes.",
      source: 'https://www.nytimes.com/2022/03/17/sports/lia-thomas-swimmer-wins.html',
    },
    {
      year: '2024',
      description: '199 openly LGBTQ+ athletes competed in the 2024 Paris Olympics.',
      explanation: "This number marked a milestone and set a record for queer athletes.",
      source: 'https://www.outsports.com/olympics/team-lgbtq/',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Milestones in LGBTQ+ Sports History</h1>
      <p style={styles.paragraph}>
        A timeline of key events highlighting important events for LGBTQ+ athletes.
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