import React, {useState, useEffect} from 'react'

import styles from './FreeQueueAnimation.module.css'

export default function FreeQueueAnimation() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setShow(true)
        }, 3000);
    }, [])

    return (
        <>
        <div style={{display: show === false ? "" : "none"}}>
            <div className={styles.containerFreeQueue}>
                <div className={styles.blocoFreeQueue}>Início</div>
                <div className={styles.blocoFreeQueue}></div>
                <div className={styles.blocoFreeQueue}></div>
                <div className={styles.blocoFreeQueue}></div>
                <div className={styles.blocoFreeQueue}>Fim</div>
            </div>
        </div>

        <div style={{display: show === true ? "" : "none"}}>
            <div className={styles.containerFreeQueueAfter}>
                <div className={styles.blocoFreeQueueAfter}></div>
                <div className={styles.blocoFreeQueueAfter}></div>
                <div className={styles.blocoFreeQueueAfter}></div>
                <div className={styles.blocoFreeQueueAfter}></div>
                <div className={styles.blocoFreeQueueAfter}></div>
            </div>
        </div>
        </>
    )
}