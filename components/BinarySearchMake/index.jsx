import React from 'react'
import BinarySearchPart from '../BinarySearchComponents/BinarySearchPart/BinarySearchPart'
import styles from './BinarySearchMake.module.css'


export default function BinarySearchMake(props) {
    const listBinarySearchPart = []

   

    const listValuePush = props.listTest.map(e => parseInt(e, 10))

    for(let i = 1; i <= props.valueStruct; i++) {
        let meio = props.valueStruct / 2
        
        if(props.valueSearch <  listValuePush[meio]) {
            listBinarySearchPart.push(<BinarySearchPart value={listValuePush[i-1]} color="true" />)
        }
        
    }   

    

    return (
        <div className={styles.container}>
            {listBinarySearchPart.map((s) => s)}
        </div>
    )
}