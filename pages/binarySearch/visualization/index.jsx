import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from 'reactstrap'
import { faSignal } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import styles from '../../../styles/BinarySearchInterative.module.css'
import BinarySearchMake from "../../../components/BinarySearchMake";

export default function BinarySearchInterative() {
    const [valueLength, setValueLength] = useState(0)
    const [array, setArray] = useState([])

    const [searchButton, setSearchButton] = useState(true)
    const [confirmLength, setConfirmLength] = useState(true)
    const [lengthElements, setLengthElements] = useState(true)
    const [valueSearch, setValueSearch] = useState(0)

    const [flagSearch, setFlagSearch] = useState(false)

    function restart() {
        setArray([])
        setValueLength(0)
        setConfirmLength(true)
        setLengthElements(true)
        setSearchButton(true)
    }


    function confirm() {
        let array = []

        for(let i = 0; i < valueLength; i++) {
            array.push(randomInt(1, 30))
        }

        array.sort((a, b) => {
            return a - b;
        })

        setArray(array)
        setConfirmLength(false)
        setLengthElements(false)
    }

    function randomInt(min, max) {
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    function search() {
        setFlagSearch(true)
    }

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div className={styles.container}>
                            <section className={styles.buttonsUser}>
                                {lengthElements ?
                                    <div
                                        className={styles.selectLength}
                                    >
                                        <h2>Selectione o Tamanho</h2>

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

                                        <button
                                            className={styles.btnInterative}
                                            style={{ display: confirmLength ? '' : 'none' }}
                                            onClick={confirm}
                                        >
                                            CONFIRMAR
                                        </button>
                                    </div> :

                                    <div className={styles.inputValueSearch}>
                                        <h2>Selectione o Elemento a ser buscado: </h2>

                                        <input
                                            type="number"
                                            name="name"
                                            min="0" 
                                            max="50"
                                            maxLength="4"
                                            className={styles.inputValues}
                                            value={valueSearch}
                                            onChange={(v) => {
                                                const limit = 3;
                                                setValueSearch(v.target.value.slice(0, limit))
                                            }}  
                                        />
                                    </div>
                                }

                                
                                <div className={styles.buttons}>
                                    <button
                                        className={styles.btnInterative}
                                        style={{ display: searchButton ? '' : 'none' }}
                                        onClick={search}
                                    >
                                        BUSCAR
                                    </button>

                                    <button className={styles.btnInterative} onClick={restart}>
                                        REINICIAR
                                    </button>
                                </div>
                            </section>

                            <section className={styles.struct} style={{ display: confirmLength ? 'none' : ''}}>
                                <BinarySearchMake
                                    valueStruct={valueLength}
                                    listTest={array}
                                    flagSearch={flagSearch}
                                    valueSearch={valueSearch}
                                />
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

BinarySearchInterative.getLayout = function getLayout(page) {
     return (
        <Layout pageTitle="DS-Learning | Busca Binária">
            <Sidebar />
            <section>
                <NavStructMenu 
                    structName="BUSCA BINÁRIA"
                    iconName={faSignal}
                    linkStruct="/binarySearch"
                    linkVisualization="/binarySearch/visualization"
                    linkExercicio="/binarySearch/exercicio"
                />
                {page}
            </section>
        </Layout>
    )
}