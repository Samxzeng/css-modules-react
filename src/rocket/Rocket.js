import React, { Component } from 'react'
import styles from './Rocket.module.css'

export default class Rocket extends Component {
    render() {
        return (
            <div>
                <img src="/shuttle.png" className={styles.img} alt="shuttle" />
            </div>
        )
    }
}
