import React, { useState, useEffect } from 'react'

import styles from './TopStackAnimation.module.css'

export default function TopStackAnimation() {
    const [fill, setFill] = useState(true)
    const [pFill, setPFill] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setFill(false)
            setPFill(false)
        }, 2000);
    }, [])

    return (
        <div className={styles.containerPushStack}>
            <div className={fill ? styles.blocoPushStack1 : styles.blocoPushStack1Fill}>
                <p className={pFill ? styles.top : styles.topFill}>TOPO</p>
            </div>
            <div className={fill ? styles.blocoPushStack2 : styles.blocoPushStack2Fill}>
                <p className={pFill ? styles.top2 : styles.topFill2}>TOPO</p>
            </div>
            <div className={fill ? styles.blocoPushStack3 : styles.blocoPushStack3Fill}>
                <p className={pFill ? styles.top3 : styles.topFill3}>TOPO</p>
            </div>
            <div className={fill ? styles.blocoPushStack4 : styles.blocoPushStack4Fill}>
                <p className={pFill ? styles.top4 : styles.topFill4}>TOPO</p>
            </div>
            <div className={fill ? styles.blocoPushStack5 : styles.blocoPushStack5Fill}>
                <p className={pFill ? styles.top5 : styles.topFill5}>TOPO</p>
            </div>
        </div>
    )
}