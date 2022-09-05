import React, { useState, useEffect } from 'react'

import styles from './EnqueueAnimation.module.css'

export default function EnqueueAnimation() {
    const [hide, setHide] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setHide(false)
        }, 2000);
    }, [])

    return (
        <div className={styles.containerQueue}>
            <div className={styles.blocoQueue1Fill}>
                <p className={styles.topFill}>Fim</p>
            </div>
            <div className={styles.blocoQueue2Fill}>
                <p className={styles.topFill2}>Fim</p>
            </div>
            <div className={styles.blocoQueue3Fill}>
                <p className={styles.topFill3}>Fim</p>
            </div>
            <div className={styles.blocoQueue4Fill}>
                <p className={styles.topFill4}>Fim</p>
            </div>
            <div className={styles.blocoQueue5Fill}>
                <p className={styles.topFill5}>Início</p>
                <p className={hide ? styles.topFill6 : styles.topFill6Hide}>Fim</p>
            </div>
        </div>
    )
}