import React from 'react'

import styles from './CreateStackAnimation.module.css'

export default function CreateStackAnimation() {
    return (
        <div className={styles.containerCreateStack}>
            <div className={styles.blocoCreateStack}></div>
            <div className={styles.blocoCreateStack}></div>
            <div className={styles.blocoCreateStack}></div>
            <div className={styles.blocoCreateStack}></div>
            <div className={styles.blocoCreateStack}></div>
        </div>
    )
}