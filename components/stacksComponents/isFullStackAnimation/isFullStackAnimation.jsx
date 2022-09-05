import React from 'react'

import styles from './IsFullStackAnimation.module.css'

export default function IsFullStackAnimation() {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <div className={styles.blocoPushStack1}></div>
                <div className={styles.blocoPushStack1}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <p className={styles.text}><strong>False</strong> <br/> Não Está <br /> Cheia</p>
            </div>

            <div className={styles.side}>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <div className={styles.blocoPushStack1Fill}></div>
                <p className={styles.text}><strong>True</strong> <br/> Está <br /> Cheia</p>
            </div>
        </div>
    )
}