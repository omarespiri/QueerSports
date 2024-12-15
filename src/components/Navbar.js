import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const styles = {
    navbarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif', // Global font applied here
    },
    navbarTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#001f3f', // Navy blue for title
      marginBottom: '1rem',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Match global text shadow
    },
    navbarLinks: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
    },
    navLink: {
      fontSize: '1rem',
      color: '#001f3f', // Navy blue text
      textDecoration: 'none',
      borderBottom: '0.25rem solid transparent', // No underline initially
      transition: 'color 0.2s ease, border-bottom-color 0.2s ease',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Match global text shadow
    },
    navLinkHover: {
      color: '#4682B4', // Steel blue on hover
    },
    navLinkActive: {
      color: '#4682B4', // Steel blue for active link text
      borderBottomColor: '#4682B4', // Steel blue underline for active link
    },
  };

  const location = useLocation(); // Get the current route

  return (
    <header style={styles.navbarContainer}>
      <h3 style={styles.navbarTitle}>Queerness in Sports</h3>
      <nav style={styles.navbarLinks}>
        {[
          { to: '/', label: 'Home' },
          { to: '/queer-athletes', label: 'Queer Athletes' },
          { to: '/media-analysis', label: 'Media Analysis' },
          { to: '/trans-athletes', label: 'Trans-Athletes' },
          { to: '/league-actions', label: 'League Actions' },
          { to: '/timeline', label: 'Timeline' },
          { to: '/Essay', label: 'Essay' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) =>
              location.pathname === to // Strict matching
                ? { ...styles.navLink, ...styles.navLinkActive }
                : styles.navLink
            }
            onMouseOver={(e) => (e.target.style.color = styles.navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
