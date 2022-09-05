import React, { useState, useEffect } from 'react'

import styles from './IsEmptyStackAnimation.module.css'

export default function IsEmptyStackAnimation() {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <div className={styles.blocoPushStack1}></div>
                <div className={styles.blocoPushStack2}></div>
                <div className={styles.blocoPushStack3Fill}></div>
                <div className={styles.blocoPushStack4Fill}></div>
                <div className={styles.blocoPushStack5Fill}></div>
                <p className={styles.text}><strong>False</strong> <br/> Não Está <br /> Vazia</p>
            </div>

            <div className={styles.side}>
                <div className={styles.blocoPushStack1}></div>
                <div className={styles.blocoPushStack2}></div>
                <div className={styles.blocoPushStack3}></div>
                <div className={styles.blocoPushStack4}></div>
                <div className={styles.blocoPushStack5}></div>
                <p className={styles.text}><strong>True</strong> <br/> Está <br /> Vazia</p>
            </div>
        </div>
    )
}