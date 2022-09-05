import React, { useState, useEffect } from 'react'

import styles from './DequeueAnimation.module.css'

export default function DequeuekAnimation() {
    return (
        <div className={styles.containerDequeue}>
            <div className={styles.blocoDequeue1Fill}>
                <p className={styles.dequeueFill}>Fim</p>
            </div>
            <div className={styles.blocoDequeue2Fill}>
                <p className={styles.dequeueFill2}>Início</p>
            </div>
            <div className={styles.blocoDequeue3Fill}>
                <p className={styles.dequeueFill3}>Início</p>
            </div>
            <div className={styles.blocoDequeue4Fill}>
                <p className={styles.dequeueFill4}>Início</p>
            </div>
            <div className={styles.blocoDequeue5Fill}>
                <p className={styles.dequeueFill5}>Início</p>
            </div>
        </div>
    )
}