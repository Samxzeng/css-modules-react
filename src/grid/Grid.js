import React, { Component } from 'react'
import Griditem from './Griditem'
import styles from './Grid.module.css'
import mediaStyles from './Media.module.css'
import cx from 'classnames'

export default class Grid extends Component {

    renderFacts() {
        return this.props.facts.map((item,index) => 
                <Griditem key={index} fact={item} updateClicked={this.props.updateClicked} />
        );
    }

    render() {
        return (
            <section className={cx(styles.grid, mediaStyles.grid)}>
               {this.renderFacts()}
            </section>
        )
    }
}
