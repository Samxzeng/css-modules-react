import React, { Component } from 'react'
import Griditem from './Griditem'
import styles from './Grid.module.css'

export default class Grid extends Component {
    renderFacts() {
        return this.props.facts.map((item,index) => 
            <>
                <Griditem key={index} fact={item}/>
            </>
        );
    }

    render() {
        return (
            <section className={styles.grid}>
               {this.renderFacts()}
            </section>
        )
    }
}
