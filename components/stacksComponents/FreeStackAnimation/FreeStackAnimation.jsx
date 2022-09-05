import React, {useState, useEffect} from 'react'

import styles from './FreeStackAnimation.module.css'

export default function FreeStackAnimation() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setShow(true)
        }, 3000);
    }, [])

    return (
        <>
        <div style={{display: show === false ? "" : "none"}}>
            <div className={styles.containerFreeStack}>
                <div className={styles.blocoFreeStack}></div>
                <div className={styles.blocoFreeStack}></div>
                <div className={styles.blocoFreeStack}></div>
                <div className={styles.blocoFreeStack}></div>
                <div className={styles.blocoFreeStack}></div>
            </div>
        </div>

        <div style={{display: show === true ? "" : "none"}}>
            <div className={styles.containerFreeStackAfter}>
                <div className={styles.blocoFreeStackAfter}></div>
                <div className={styles.blocoFreeStackAfter}></div>
                <div className={styles.blocoFreeStackAfter}></div>
                <div className={styles.blocoFreeStackAfter}></div>
                <div className={styles.blocoFreeStackAfter}></div>
            </div>
        </div>
        </>
    )
}