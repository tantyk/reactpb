import React from 'react';
import logo from './Hasacz.gif';
import styles from './Newcomponent.module.scss';

class Newcomponent extends React.Component{
   render() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          {this.props.text}
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className={styles.MyChange}>
          hehehehehhe
        </p>
      </header>
    </div>
  );
   }
  }

export default Newcomponent;