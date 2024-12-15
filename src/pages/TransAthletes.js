import React from 'react';

function TransAthletes() {
  const styles = {
    container: {
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#001f3f',
    },
    separator: {
      border: 'none',
      borderTop: '2px solid #ccc',
      margin: '1.5rem 0',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#001f3f',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#36454F',
      marginBottom: '1.5rem',
    },
    section: {
      marginBottom: '2rem',
      textAlign: 'center',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#001f3f',
      marginBottom: '0.5rem',
    },
    description: {
      fontSize: '1rem',
      color: '#36454F',
      marginBottom: '1rem',
    },
    embed: {
      width: '100%',
      maxWidth: '600px',
      height: '400px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '1rem',
      objectFit: 'cover',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    button: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      color: '#ffffff',
      backgroundColor: '#001f3f',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
    },
  };

  const mediaItems = [
    {
      title: 'The Science Behind Transgender Athletes',
      description:
        "This video explores the science behind transgender athletes and examines whether trans women have an advantage over cisgender women in sports after taking hormone blockers. Two researchers specializing in this field present evidence, ultimately concluding that the issue is far too complex to resolve due to insufficient research. The video underscores the intricate nature of the discussion surrounding transgender athletes and highlights the need for sports leagues and organizations to approach decisions about transgender athletes, particularly transgender women, with care and nuance.",
      type: 'video',
      content: 'https://www.youtube.com/embed/518bOMc9jaQ',
    },
    {
      title: 'Imane Khelif and the Olympic Controversy',
      description:
        "Imane Khelif is an Algerian women's boxer who competed in the women's welterweight division and claimed gold at the 2024 Paris Summer Olympics. Her bout against Italian boxer Angela Carini stirred worldwide controversy when Carini withdrew seconds into the fight. This incident fueled conservative criticism questioning Khelif's gender, citing her previous ineligibility in certain women's boxing competitions. Khelif, who was assigned female at birth, has steadfastly disputed these claims and continues to challenge them legally while fighting to maintain her career as a women's boxer. This article delves deeply into Khelif's situation, providing critical background information that clears up misconceptions about her eligibility and identity.",
      type: 'article',
      content:
        'https://apnews.com/article/olympics-2024-imane-khelif-boxing-paris-2eb07d442ffb29a61e09911884dcdaa9',
      image: '/images/Imane.jpg',
    },
    {
      title: "Overview of the Debate About Trans Women in Women's Sports",
      description:
        "This video provides a comprehensive overview of the global conversation surrounding transgender women athletes across all sports. It highlights the key points of the debate, focusing on concerns about fairness in women’s sports and the perceived 'threat' to their integrity.",
      type: 'video',
      content: 'https://www.youtube.com/embed/dlLx2mySuAE',
    },
    {
      title: "Blaire Fleming and San Jose State Volleyball",
      description:
        "San Jose State's 2024 women's volleyball season garnered significant media attention and controversy after Blaire Fleming, a player on the team, was outed by a former teammate as a transgender woman. Although Fleming had been a member of the team since 2022, seven opposing teams forfeited their matches against San Jose State this season, citing safety concerns over Fleming's participation. Despite the controversy, San Jose State had a successful season, reaching the conference championship game and finishing with an overall record of 14-7. This story underscores the ongoing debate surrounding transgender women in athletics.",
      type: 'article',
      content:
        'https://www.cnn.com/2024/11/30/us/san-jose-state-volleyball-transgender-player-what-we-know/index.html',
      image: '/images/SanJose.jpeg',
    },
    {
      title: "Legislation in the U.S. About Transgender Athletes",
      description:
        "This video examines the legislation affecting transgender athletes, particularly youth transgender athletes, across various U.S. states. It underscores how the conversation extends beyond collegiate and professional sports to include the youngest participants at the local level. Highlighting the far-reaching implications of these laws, the video illustrates how such legislation impacts transgender individuals of all ages, from children and teens to adults.",
      type: 'video',
      content: 'https://www.youtube.com/embed/bm65rhtaWJw',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Trans-Athletes</h1>
      <p style={styles.paragraph}>
        Media coverage and current dialogue of trans-athletes.
      </p>
      <hr style={styles.separator} />
      {mediaItems.map((item, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.title}>{item.title}</h2>
          <p style={styles.description}>{item.description}</p>
          {item.type === 'video' ? (
            <iframe
              src={item.content}
              style={styles.embed}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : item.type === 'article' && item.image ? (
            <div style={styles.imageContainer}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <a
                href={item.content}
                style={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Article
              </a>
            </div>
          ) : item.type === 'article' ? (
            <a
              href={item.content}
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Article
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default TransAthletes;
