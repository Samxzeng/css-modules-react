import React from 'react';
import styles from './App.module.css';
import Title from './Title/Title'
import Background from './Background/Background'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'
import Grid from './Grid/Grid'

import Facts from './NASA_facts.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts:Facts
    }
  }

  updateClicked = id => {
    let stateCopy = Object.assign({},this.state)
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy)
  }

  render () {
    console.log("facts",Facts)
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked} />
        <Rocket />
        <Smoke />
    </div>
    )
  }
}

export default App;
