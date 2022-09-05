import React from 'react'
import styles from './QueueMake.module.css'
import QueuePart from '../QueueComponents/QueuePart/QueuePart'

export default function QueueMake(props) {
    const listQueuePart = []
    
    const listValueEnqueue = props.listTest.map(e => parseInt(e, 10))
    
    for(let i = 1; i <= props.valueStruct; i++) {
        if(i == 1 && props.end != 1) {
            listQueuePart.push(<QueuePart valueEnqueue={listValueEnqueue[i-1]} startEnd="início" />)
        }

        if(props.end == 1 && i == 1) {
            listQueuePart.push(<QueuePart valueEnqueue={listValueEnqueue[i-1]} startEnd="início/fim" />)
        }

        if(i == props.end && i != 1) {
            listQueuePart.push(<QueuePart valueEnqueue={listValueEnqueue[i-1]} startEnd="fim" />)
        }

        if(i != 1 && i != props.end) {
            listQueuePart.push(<QueuePart valueEnqueue={listValueEnqueue[i-1]}/>)
        }
               
    }

    console.log("listStackPart.map((s) => s)", listQueuePart.map((q) => q.props.valueEnqueue))

    return (
        <div className={styles.container}>
            {listQueuePart.map((q) => q)}
        </div>
    )

}