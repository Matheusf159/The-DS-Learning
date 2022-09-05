import React from 'react'

import styles from './IsFullQueueAnimation.module.css'

export default function IsFullQueueAnimation() {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <div className={styles.inside}>
                    <div className={styles.blocoPushQueue1Fill}>Início</div>
                    <div className={styles.blocoPushQueue1Fill}></div>
                    <div className={styles.blocoPushQueue1Fill}>Fim</div>
                    <div className={styles.blocoPushQueue1}></div>
                    <div className={styles.blocoPushQueue1}></div>
                </div>
                <p className={styles.text}><strong>False</strong> <br/> Não Está <br /> Cheia</p>
            </div>

            <div className={styles.side}>
                <div className={styles.inside}>
                    <div className={styles.blocoPushQueue1Fill}>Início</div>
                    <div className={styles.blocoPushQueue1Fill}></div>
                    <div className={styles.blocoPushQueue1Fill}></div>
                    <div className={styles.blocoPushQueue1Fill}></div>
                    <div className={styles.blocoPushQueue1Fill}>Fim</div>
                </div>
                <p className={styles.text}><strong>True</strong> <br/> Está <br /> Cheia</p>
            </div>
        </div>
    )
}