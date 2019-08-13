import React from 'react';
import styles from './App.module.css';
import Title from './Title/Title'
import Background from './Background/Background'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'
import Grid from './Grid/Grid'
import Griditm from './Grid/Griditem'


function App() {
  return (
    <div className={styles.app}>

      <Title />
      <Background />
      <Grid />
      <Griditm />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
