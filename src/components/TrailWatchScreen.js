import React, { Component } from 'react'

import styles from './TrailWatchScreen.module.scss'

export default class TrailWatchScreen extends Component {
    render() {
        return (
            <div className={styles.TrailWatchScreen} onClick={this.props.hide}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/01ON04GCwKs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
