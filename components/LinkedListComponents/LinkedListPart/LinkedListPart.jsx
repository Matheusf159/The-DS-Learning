import React from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './LinkedListPart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkedListPart(props) {
    return (
        <div className={styles.container}>

            <div>    
                <div 
                    className={styles.partLL} 
                    style={{
                        backgroundColor: props.valueEnqueue != undefined ? "rgb(72, 72, 72)": "", 
                        border: props.valueEnqueue != undefined ? "1px solid black" : '' 
                    }}
                > 
                    <div className={styles.part} style={{ backgroundColor: props.check ? "red" : ""}}>
                        {props.valueEnqueue} <br/>
                    </div>

                    { props.startEnd != " " ?
                        <p>{props.startEnd}</p>
                        : <p style={{color: 'white'}}></p>
                    }
                </div>
            </div>
            
            <div 
                style={{ display: props.arrowDisplay == "true" ? "" : "none" }}
            >
                <div 
                    className={styles.arrow}
                    style={{ display: props.valueEnqueue != undefined ? "" : "none"  , color: 'black' }}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div> 
    )
}