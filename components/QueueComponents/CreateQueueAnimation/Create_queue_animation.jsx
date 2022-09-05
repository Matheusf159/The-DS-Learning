import React from 'react'

import styles from './CreateQueueAnimation.module.css'

export default function CreateQueueAnimation() {
    return (
        <div className={styles.containerCreateQueue}>
            <div className={styles.blocoCreateQueueInitial}>
                Início <br />
                Fim
            </div>
            <div className={styles.blocoCreateQueue}></div>
            <div className={styles.blocoCreateQueue}></div>
            <div className={styles.blocoCreateQueue}></div>
            <div className={styles.blocoCreateQueue}></div>
            <div className={styles.blocoCreateQueue}></div>
        </div>
    )
}