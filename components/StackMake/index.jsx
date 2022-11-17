import React from 'react'
import styles from './StackMake.module.css'
import StackPart from '../stacksComponents/StackPart/StackPart'


export default function StackMake(props) {
    const listStackPart = []

    const listValuePush = props.listTest.map(e => parseInt(e, 10))
    
    for(let i = 1; i <= props.valueStruct; i++) {
        if(i == 1 && props.topValue != 1) {
            listStackPart.push(<StackPart valuePush={listValuePush[i-1]} />)
        }

        if(i == 1 && props.topValue == 1) {
            listStackPart.push(<StackPart valuePush={listValuePush[i-1]} top="TOPO" />)
        }

        if(i == props.topValue && i != 1) {
            listStackPart.push(<StackPart valuePush={listValuePush[i-1]} top="TOPO" />)
        }
        
        if(i != 1 && i != props.topValue) {
            listStackPart.push(<StackPart valuePush={listValuePush[i-1]} />)
        }
    }

    console.log("listStackPart.map((s) => s)", listStackPart.map((s) => s.props.valuePush))
    return (
        <div className={styles.container} style={{ marginTop: '20px'}}>
            {listStackPart.map((s) => s)}
        </div>
    )
}