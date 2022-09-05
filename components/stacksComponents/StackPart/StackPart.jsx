import React from 'react';

import styles from './StackPart.module.css'

export default function StackPart(props) {
    // valueInTop = props.lastValue.slice(-1)

    return (
        <div 
            className={styles.partStack} 
            style={{
                backgroundColor: props.valuePush != undefined ? "rgb(72, 72, 72)": "", 
                color: "white", 
                border: props.valuePush != undefined ? "1px solid black" : '' 
            }}
        > 
            {props.top}
            
            <div className={styles.part}>
                {props.valuePush}
            </div>
            
        </div> 
    )
}