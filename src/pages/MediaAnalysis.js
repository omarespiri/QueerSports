import React from 'react';

function MediaAnalysis() {
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
    paragraph: {
      fontSize: '1.25rem', // Consistent font size for the caption
      color: '#36454F',
      marginBottom: '2rem',
    },
    separator: {
      border: 'none',
      borderTop: '2px solid #ccc',
      margin: '1.5rem 0',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
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
      fontSize: '1.25rem', // Match caption font size
      color: '#36454F',
      marginBottom: '1rem',
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
    buttonContainer: {
      display: 'flex',
      gap: '1rem', // Added spacing between buttons
      justifyContent: 'center',
      marginTop: '1rem',
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
    embed: {
      width: '100%',
      maxWidth: '600px',
      height: '400px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
  };

  const mediaItems = [
    {
      title: 'Chris Broussard on Jason Collins',
      description:
        "In this clip, Chris Broussard, a former ESPN columnist and TV analyst, now with Fox Sports 1, made homophobic remarks in 2013 following Jason Collins' coming out. Broussard claimed Collins, as a gay man, was 'openly living in unrepentant sin' and in 'open rebellion to God,' declaring him not a real Christian. LZ Granderson, an openly gay CNN sports columnist at the time, directly challenged Broussard’s comments, offering a thoughtful pushback on his claims about Collins and gay people in general. The remarks sparked immense backlash against Broussard and ESPN, especially for their lack of action. This incident highlights the entrenched homophobia in the sports world and how, despite claims of keeping politics and religion out of sports, these topics resurface when they serve certain agendas or provoke outrage.",
      type: 'video',
      content: 'https://www.youtube.com/embed/42bwxwrpvYg?si=_TKUw6_7me3igTaO',
    },
    {
      title: 'Media Coverage of Lesbian Athletes by William P. Cassidy',
      description: "Abstract: 'This chapter discusses prior research about media coverage of women athletes in general, as well as lesbian athletes, and analyzes the coming out stories of prominent athletes. Scholars have uniformly found that women’s sports receive little coverage, whereas the subject of lesbianism in women’s sports is routinely ignored or presented as a problem. But, recent studies of coming out stories have found reporting to be strongly favorable, suggesting a more hospitable societal and media environment for gay and lesbian athletes.'",
      type: 'pdf',
      content: '/pdfs/MediaCoverageLesbianAthletes.pdf',
      viewOnline: 'https://link.springer.com/chapter/10.1007/978-3-030-30526-0_2',
    },
    {
      title: 'Charly Arnolt on Lia Thomas',
      description: "In this 2023 clip, Charly Arnolt, a former ESPN TV personality, expresses her disdain for ESPN's special about Lia Thomas, a transgender swimmer from the University of Pennsylvania swimming team. Arnolt criticizes ESPN for highlighting a transgender woman during Women’s History Month, insinuating that Thomas is not a woman and even referring to her as a 'man.' Arnolt's rant serves as a stark example of the transphobia still prevalent in the sports world today.",
      type: 'externalVideo',
      content: 'https://www.foxbusiness.com/video/6326322208112',
      image: '/images/CharlyThomas.jpg', // Path to the image
    },
    {
      title: "Lia Thomas' ESPN Special",
      description: "This video features a special aired by ESPN in 2023, highlighting Lia Thomas and her journey of transitioning, becoming a woman, and winning a championship. This segment is significant as it allowed Thomas to share her own story, emotions, and the challenges she faced during a time when people worldwide had opinions about her and her transition. By providing Thomas with this platform, ESPN took an important step forward in promoting equality and visibility for transgender athletes across all sports.",
      type: 'video',
      content: 'https://www.youtube.com/embed/tukcaqEpGYo?si=RBrxgTm_hF6zZwUq',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Media Analysis</h1>
      <p style={styles.paragraph}>Exploring media coverage of queer athletes.</p>
      <hr style={styles.separator} />
      {mediaItems.map((item, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.title}>{item.title}</h2>
          <p style={styles.description}>{item.description}</p>
          {item.image && (
            <div style={styles.imageContainer}>
              <img src={item.image} alt={item.title} style={styles.image} />
              {item.type === 'externalVideo' && (
                <a
                  href={item.content}
                  style={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              )}
            </div>
          )}
          {item.type === 'pdf' && (
            <div>
              <embed
                src={item.content}
                type="application/pdf"
                style={styles.embed}
              />
              <div style={styles.buttonContainer}>
                <a
                  href={item.content}
                  style={styles.button}
                  download
                >
                  Download PDF
                </a>
                <a
                  href={item.viewOnline}
                  style={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Online
                </a>
              </div>
            </div>
          )}
          {item.type === 'video' && (
            <iframe
              src={item.content}
              style={styles.embed}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
}

export default MediaAnalysis;
