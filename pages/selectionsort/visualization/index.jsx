import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faSignal } from "@fortawesome/free-solid-svg-icons"
import { selectionSortMain } from '../../../components/SelectionSortMake'
import styles from '../../../styles/SelectionSortInterative.module.css'
import { Container } from "reactstrap";

export default function SelectionSortInterative() {
    const [valueLength, setValueLength] = useState(0)
    const [array, setArray] = useState([])

    // state's flag
    const [sortingButton, setSortingButton] = useState(true)
    const [lengthElements, setLengthElements] = useState(true)

    useEffect(() => {
        resetArray()
    }, [valueLength])

    function resetArray(){
        let array = []

        for(let i = 0; i < valueLength; i++) {
            array.push(randomInt(5, 200))
        }

        setArray(array)
    }

    function randomInt(min, max) {
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    function selectionSort() {
        if(valueLength != 0) {
            setSortingButton(false)
            setLengthElements(false)

            let [animations, valuesBubble] = selectionSortMain(array, animations)
            console.log("animationB", animations)
            console.log("valuesBubble", valuesBubble)

            for(let i = 0; i < animations.length; i++) {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1)
                const arrayBars = document.getElementsByClassName(styles.arrayBar)

                if(isColorChange === true) {
                    const color = (i % 4 === 0) ? 'blue' : 'rgb(72, 72, 72)'
                    const [barOneIndex, barTwoIndex] = animations[i]
                    const barOneStyle = arrayBars[barOneIndex].style
                    const barTwoStyle = arrayBars[barTwoIndex].style

                    setTimeout(() => {
                        barOneStyle.backgroundColor = color
                        barTwoStyle.backgroundColor = color

                    }, i * 100);
                } else {
                    const [barIndex, newHeight] = animations[i] 
                    console.log("barIndex", barIndex)
                    console.log("newHeight", newHeight)
                    if(barIndex === -1) {
                        continue
                    }

                    const barStyle = arrayBars[barIndex].style
                    
                    setTimeout(() => {
                        barStyle.height = `${newHeight+50}px`
                    }, i * 100);
                }   
        }
        }
    }

    function restart() {
        setValueLength(0)
        setSortingButton(true)
        setLengthElements(true)
    }

    return (
        <Container>
            <div className={styles.container}>
                <section className={styles.left}>
                    <div 
                        className={styles.selectLength}
                        style={{ display: lengthElements ? '' : 'none' }}
                    >
                        <h2>Selectione o Tamanho: </h2>

                        <input
                            type="number"
                            name="name"
                            min="0" 
                            max="50"
                            maxLength="4"
                            className={styles.inputValues}
                            value={valueLength}
                            onChange={(v) => {
                                const limit = 3;
                                setValueLength(v.target.value.slice(0, limit))
                            }}
                        />
                    </div>

                     <div className={styles.buttons}>
                        <button 
                            className={styles.btnInterative} 
                            onClick={selectionSort}
                            style={{ display: sortingButton ? '' : 'none'}}
                        >
                            ORDENAR
                        </button>

                        <button className={styles.btnInterative} onClick={restart}>REINICIAR</button>
                    </div>
                </section>

                <section className={styles.right}>
                    <div>
                        {
                            array.map((value, index) => (
                                <div key={index}  className={styles.arrayBar} style={{ height: `${value+50}px`}}>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
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