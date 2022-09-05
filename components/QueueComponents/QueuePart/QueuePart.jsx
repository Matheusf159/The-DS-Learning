import React from 'react';

import styles from './QueuePart.module.css'

export default function QueuePart(props) {
    return (
        <div 
            className={styles.partQueue} 
            style={{
                backgroundColor: props.valueEnqueue != undefined ? "rgb(72, 72, 72)": "", 
                color: "white", 
                border: props.valueEnqueue != undefined ? "1px solid black" : '' 
            }}
        > 
            <div className={styles.part}>
                {props.valueEnqueue} <br/>
                
            </div>
            {props.startEnd}
        </div> 
    )
}