import React from 'react'

import styles from './IsEmptyQueueAnimation.module.css'

export default function IsEmptyQueueAnimation() {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <div className={styles.inside}>
                    <div className={styles.blocoPushQueue3Fill}>Início</div>
                    <div className={styles.blocoPushQueue4Fill}></div>
                    <div className={styles.blocoPushQueue5Fill}>Fim</div>
                    <div className={styles.blocoPushQueue1}></div>
                    <div className={styles.blocoPushQueue2}></div>
                </div>
                
                <p className={styles.text}><strong>False</strong> <br/> Não Está <br /> Vazia</p>
            </div>

            <div className={styles.side}>
                <div className={styles.inside}>
                    <div className={styles.blocoPushQueue}>
                        Início <br />
                        Fim
                    </div>
                    <div className={styles.blocoPushQueue1}></div>
                    <div className={styles.blocoPushQueue2}></div>
                    <div className={styles.blocoPushQueue3}></div>
                    <div className={styles.blocoPushQueue4}></div>
                    <div className={styles.blocoPushQueue5}></div>
                </div>
                <p className={styles.text}><strong>True</strong> <br/> Está <br /> Vazia</p>
            </div>
        </div>
    )
}