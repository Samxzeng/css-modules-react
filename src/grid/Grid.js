import React, { Component } from 'react'
import Griditem from './Griditem'
import styles from './Grid.module.css'

export default class Grid extends Component {
    renderFacts () {
        return this.props.facts.map(item => 
            <Griditem key={item.id} fact={item} />
        )
    }

    render() {
        return (
            <section className={styles.grid}>
                <p>Grid</p>
            </section>
        )
    }
}
