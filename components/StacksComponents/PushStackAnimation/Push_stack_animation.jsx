import React, { useState, useEffect } from 'react'

import styles from './PushStackAnimation.module.css'

export default function PushStackAnimation() {
    const [fill, setFill] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setFill(false)
        }, 2000);
    }, [])

    return (
        <div className={styles.containerPushStack}>
            <div className={fill ? styles.blocoPushStack1 : styles.blocoPushStack1Fill}></div>
            <div className={fill ? styles.blocoPushStack2 : styles.blocoPushStack2Fill}></div>
            <div className={fill ? styles.blocoPushStack3 : styles.blocoPushStack3Fill}></div>
            <div className={fill ? styles.blocoPushStack4 : styles.blocoPushStack4Fill}></div>
            <div className={fill ? styles.blocoPushStack5 : styles.blocoPushStack5Fill}></div>
        </div>
    )
}