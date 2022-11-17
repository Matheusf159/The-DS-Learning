import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faSignal } from "@fortawesome/free-solid-svg-icons"
import { selectionSortMain } from '../../../components/SelectionSortMake'
import { Container, Col, Row } from "reactstrap";
import { SelectionSortCode } from '../../../components/SelectionSortCodes/CodesSelectionSort'

import styles from '../../../styles/SelectionSortInterative.module.css'
export default function SelectionSortInterative() {

    const [valueLength, setValueLength] = useState(0)
    const [array, setArray] = useState([])

    // state's flag
    const [sortingButton, setSortingButton] = useState(true)
    const [lengthElements, setLengthElements] = useState(true)
    const [valueSpeed, setValueSpeed] = useState(50)

    const [showCodeSelectionSort, setShowCodeSelectionSort] = useState(false)

    useEffect(() => {
        resetArray()
    }, [valueLength])

    // useEffect(() => { selectionSort() }, [valueSpeed])

    function resetArray(){
        let array = []

        for(let i = 0; i < valueLength; i++) {
            array.push(randomInt(5, 200))
        }

        setArray(array)
        setShowCodeSelectionSort(false)
    }

    function randomInt(min, max) {
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    function selectionSort() {
        console.log("v",valueSpeed)
        if(valueLength != 0 && valueSpeed != 0) {
            setSortingButton(false)
            setLengthElements(false)
            setShowCodeSelectionSort(true)

            let [animations, valuesBubble] = selectionSortMain(array, animations)
            console.log("animationB", animations)
            console.log("valuesBubble", valuesBubble)

            let bar1 
            let bar2

            for(let i = 0; i < animations.length; i++) {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1)
                const arrayBars = document.getElementsByClassName(styles.arrayBar)

                if(isColorChange === true) {
                    const color = (i % 4 === 0) ? 'blue' : 'rgb(72, 72, 72)'
                    const [barOneIndex, barTwoIndex] = animations[i]
                    const barOneStyle = arrayBars[barOneIndex].style
                    const barTwoStyle = arrayBars[barTwoIndex].style
                    // bar1 = barOneIndex
                    // bar2 = barTwoIndex

                    // array[bar1] = parseInt(parseFloat(arrayBars[bar2].style.height))
                    // array[bar2] = parseInt(parseFloat(arrayBars[bar1].style.height))

                    setTimeout(() => {
                        barOneStyle.backgroundColor = color
                        barTwoStyle.backgroundColor = color

                    }, i * valueSpeed);
                } else {
                    const [barIndex, newHeight] = animations[i] 
                    if(barIndex === -1) {
                        continue
                    }

                    const barStyle = arrayBars[barIndex].style
                    
                    setTimeout(() => {
                        // array.forEach((element, index) => {
                        //     array[index] = newHeight+50
                        // });
                        // array[bar1] = parseInt(parseFloat(arrayBars[bar2].style.height))
                        // array[bar2] = parseInt(parseFloat(arrayBars[bar1].style.height))
                        // console.log([...array])
                        // setArray((array) => [...array]);
                        barStyle.height = `${newHeight+50}px`
                    }, i * valueSpeed);
                }   
        }
        }
    }

    function restart() {
        setValueLength(0)
        setSortingButton(true)
        setLengthElements(true)
    }

    console.log("speed", valueSpeed)

    return (
        <Container>
            <Row>
                <Row className={styles.content}>
                    <Col 
                        className={styles.selectLength}
                        style={{ display: lengthElements ? '' : 'none' }}
                    >   
                        <h2>Selectione o Tamanho: </h2>

                        <input
                            type="number"
                            name="name"
                            min="0" 
                            max="40"
                            maxLength="4"
                            className={styles.inputValues}
                            value={valueLength}
                            onChange={(v) => {
                                const limit = 3;
                                setValueLength(v.target.value.slice(0, limit))
                            }}
                        />
                    </Col>

                    <Row className={styles.buttons}>
                        <select 
                            className={styles.inputStructQueue}
                            value={valueSpeed}
                            onChange={(q) => setValueSpeed(q.target.value)}
                        >
                            <option value={0}></option>
                            <option value={300}>Lento</option>
                            <option value={100}>Médio</option>
                            <option value={50}>Rápido</option>
                            <option value={30}>Muito rápido</option>
                        </select>
                        
                        <button 
                            className={styles.btnInterative} 
                            onClick={selectionSort}
                            style={{ display: sortingButton ? '' : 'none'}}
                        >
                            ORDENAR
                        </button>

                        <button className={styles.btnInterative} onClick={restart}>
                            REINICIAR
                        </button>

                    </Row>

                    
                </Row>

                <Row className={styles.barSorts}>
                    <div className={styles.rowBars}>
                        {
                            array.map((value, index) => (
                                <div className={styles.bar} key={index}>
                                    <div className={styles.arrayBar} style={{ height: `${value+50}px`}}>                                    
                                            
                                    </div>

                                    <div style={{ fontWeight: 'bold' }}>{value+50}</div>
                                </div>
                            ))
                        }
                    </div>
                </Row>

                <Row>
                    <SelectionSortCode show={showCodeSelectionSort} />
                </Row>
            </Row>
        </Container>
    )
}

SelectionSortInterative.getLayout = function getLayout(page) {
    return (
       <Layout pageTitle="DS-Learning | SelectionSort">
           <Sidebar />
           <section>
               <NavStructMenu 
                   structName="SELECTIONSORT"
                   iconName={faSignal}
                   linkStruct="/selectionsort"
                   linkVisualization="/selectionsort/visualization"
                   linkExercicio="/selectionsort/exercicio"
               />
               {page}
           </section>
       </Layout>
   )
}