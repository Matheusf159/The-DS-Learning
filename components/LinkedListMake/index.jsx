import React from 'react'
import styles from './LinkedListMake.module.css'
import LinkedListPart from '../LinkedListComponents/LinkedListPart/LinkedListPart'

export default function LinkedListMake(props) {
    const listLinkedListPart = []
    let listValueEnqueue1 = []
    
    const listValueEnqueue = props.listTest.map(e => parseInt(e, 10))
    
    for(let i = 1; i <= props.valueStruct; i++) {
        if(i == 1 && props.end != 1) {
            if(props.flag == true && props.searchElement == listValueEnqueue[i-1])
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="início" arrowDisplay="true" check="true" />)
            else
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="início" arrowDisplay="true" />)
        }

        if(props.end == 1 && i == 1) {
            if(props.flag == true && props.searchElement == listValueEnqueue[i-1])
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="início/fim" arrowDisplay="false" check="true" />)
            else
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="início/fim" arrowDisplay="false" />)
        }

        if(i == props.end && i != 1) {
            if(props.flag == true && props.searchElement == listValueEnqueue[i-1])
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="fim" arrowDisplay="false" check="true" />)
            else
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} startEnd="fim" arrowDisplay="false" />)
        }

        if(i != 1 && i != props.end) {
            if(props.flag == true && props.searchElement == listValueEnqueue[i-1])
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} arrowDisplay="true" check="true" />)
            else
                listLinkedListPart.push(<LinkedListPart valueEnqueue={listValueEnqueue[i-1]} arrowDisplay="true" />)
        }
               
    }

    return (
        <div className={styles.container}>
            {listLinkedListPart.map((q) => q)}
        </div>
    )

}