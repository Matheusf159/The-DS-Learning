import React from 'react'

import styles from './PopStackAnimationFill.module.css'

export default function PopStackAnimation() {
    return (
        <div className={styles.containerPopStack}>
            <div className={styles.blocoPopStack1}></div>
            <div className={styles.blocoPopStack2}></div>
            <div className={styles.blocoPopStack3}></div>
            <div className={styles.blocoPopStack4}></div>
            <div className={styles.blocoPopStack5}></div>
        </div>
    )
}