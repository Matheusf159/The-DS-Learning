import React from 'react';

import styles from './BinarySearchPart.module.css'

export default function BinarySearchPart(props) {
    return (
        <div 
            className={styles.partQueue} 
            style={{
                backgroundColor: props.value != undefined ? "rgb(72, 72, 72)": "", 
                color: "white",
                border: props.value != undefined ? "1px solid black" : '' 
            }}
        > 
            <div className={styles.part} style={{ backgroundColor: props.color == "true" ? "red" : "blue"}}>
                {props.value} <br/>
                
            </div>
            {props.startEnd}
        </div> 
    )
}