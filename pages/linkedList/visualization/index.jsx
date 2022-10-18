import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/LinkedListComponents/methods";
import styles from '../../../styles/LinkedListInterative.module.css'
import { Container } from "reactstrap";
import LinkedListMake from '../../../components/LinkedListMake'

import {
    StructQueueCode,
    CreateQueueCode,
    DequeueCode,
    EnqueueCode,
    FreeQueueCode,
    IsEmptyQueueCode,
    IsFullQueueCode,
    PrintQueueCode,
} from '../../../components/QueueComponents/CodesQueue/CodesQueue'

export default function LinkedListInterative() {
    // values input
    const [valueInsert, setValueInsert] = useState(0)
    const [valueStruct, setValueStruct] = useState(8)
    const [valueSearch, setValueSearch] = useState(0)

    const [valueListInsert, setValueListInsert] = useState([])

    // states infos
    const [showChooseLength, setShowChooseLength] = useState(true)
    const [showNextStep, setShowNextStep] = useState(false)
 
    // button's set state
    const [showBtnCreateLinkedList, setShowBtnCreateLinkedList] = useState(true)

    const [showCodeStructLinkedList, setShowCodeStructLinkedList] = useState(true)
    const [showCodeCreateLinkedList, setShowCodeCreateLinkedList] = useState(false)
    const [showCodeRemoveStart, setShowCodeRemoveStart] = useState(false)
    const [showCodeRemoveEnd, setShowCodeRemoveEnd] = useState(false)
    const [showCodeInsertEnd, setShowCodeInsertEnd] = useState(false)
    const [showCodeInsertStart, setShowCodeInsertStart] = useState(false)
    const [showCodeFreeLinkedList, setShowCodeFreeLinkedList] = useState(false)
    const [showCodeSeacrh, setShowCodeSearch] = useState(false)

    const [flagSearch, setFlagSearch] = useState(false)

    const [showCodeIsEmptyQueue, setShowCodeIsEmptyQueue] = useState(false)
    const [showCodeIsFullQueue, setShowCodeIsFullQueue] = useState(false)
    const [showCodePrintQueue, setShowCodePrintQueue] = useState(false)
    
    const [showConfirmInsertEnd, setShowConfirmInsertEnd] = useState(true)
    const [showConfirmInsertStart, setShowConfirmInsertStart] = useState(true)
    const [showConfirmSearch, setShowConfirmSearch] = useState(false)
    const [showConfirmRemoveStart, setShowConfirmRemoveStart] = useState(true)
    const [showConfirmRemoveEnd, setShowConfirmRemoveEnd] = useState(true)

    // button's functions
    function btnCreateLinkedList() {
        if (valueStruct > 0) {
            setShowBtnCreateLinkedList(false)
            setShowChooseLength(false)
            setShowNextStep(true)
            setShowBtnCreateLinkedList(false)

            setShowCodeStructLinkedList(false)
            setShowCodeCreateLinkedList(true)
            setShowCodeRemoveStart(false)
            setShowCodeInsertEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)

            
            
        }
    }

    function btnInsertEnd() {
        if(!showBtnCreateLinkedList) {
            setShowNextStep(false)

            setShowCodeInsertEnd(true)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeInsertStart(false)
            
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
        }

        if (valueListInsert.length != valueStruct) {
            setShowConfirmInsertEnd(true)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            
        }
    }

    function btnInsertStart() {
        if(!showBtnCreateLinkedList) {
            setShowNextStep(false)

            setShowCodeInsertStart(true)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeInsertEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            
        }

        if (valueListInsert.length != valueStruct) {
            setShowConfirmInsertStart(true)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            
        }

        if (valueListInsert.length == valueStruct - 1) {
            setShowConfirmInsertStart(false)
        }
    }

    function btnRemoveStart() {
        if (!showBtnCreateLinkedList) {
            setShowCodeInsertEnd(false)
            setShowCodeRemoveStart(true)
            setShowCodeRemoveEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowBtnCreateLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)

            
            setShowNextStep(false)
        }

        if (valueListInsert.length == 0) {
            setShowConfirmRemoveStart(false);
            setShowCodeIsEmptyQueue(true)
        }

        if (valueListInsert.length == []) {
            setShowConfirmInsertStart(true);
        }

        if (valueListInsert.length != []) {
            setShowConfirmRemoveStart(true)
        }
    }

    function btnRemoveEnd() {
        if (!showBtnCreateLinkedList) {
            setShowCodeInsertEnd(false)
            setShowCodeRemoveEnd(true)
            setShowCodeFreeLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowBtnCreateLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)

            
            setShowNextStep(false)
        }

        if (valueListInsert.length == 0) {
            setShowConfirmRemoveEnd(false);
            setShowCodeIsEmptyQueue(true)
        }

        if (valueListInsert.length == []) {
            setShowConfirmInsertEnd(true);
        }

        if (valueListInsert.length != []) {
            setShowConfirmRemoveEnd(true)
        }
    }

    function btnFreeLinkedList() {
        if (!showBtnCreateLinkedList && valueStruct > 0) {
            setShowCodeInsertEnd(false)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeFreeLinkedList(true)
            setShowCodeIsFullQueue(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)

            setValueStruct(8)
            setValueInsert(0)
            setValueListInsert([])
            setShowChooseLength(true)
            setShowBtnCreateLinkedList(true)
            setShowNextStep(false)
        }

        if (valueStruct <= 0) {
            
        }
    }

    function btnSearchElement() {
        if(!showBtnCreateLinkedList) {
            setShowNextStep(false)
            setShowCodeSearch(true)
            setShowConfirmSearch(true)
            setShowCodeInsertEnd(false)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)
            setShowCodeInsertStart(false)
            
        }
    }

    function confirmSearch() {
        if(!valueListInsert.length == []) {
            setFlagSearch(true)
        }
    }

    function confirmInsertEnd() {
        if(valueListInsert.length < valueStruct && valueInsert != ''){
            setValueListInsert([...valueListInsert, valueInsert])
        }
        
        if(valueListInsert.length == valueStruct - 1) {
            setShowConfirmInsertEnd(false)
        }

        if(valueListInsert.length == valueStruct - 1) {
            setShowCodeInsertEnd(false)
        }
    }

    function confirmInsertStart() {
        if(valueListInsert.length < valueStruct && valueInsert != ''){
            let x = valueListInsert.splice(0, 0, valueInsert)
            
            if(x.length != 0)
                setValueListInsert([...valueListInsert, x])
                setValueInsert(0)
        }

        if(valueListInsert.length == valueStruct - 1) {
            setShowConfirmInsertStart(false)
        }

        if(valueListInsert.length == valueStruct - 1) {
            setShowCodeInsertStart(false)
        }
    }

    function confirmRemoveStart() {
        setValueListInsert(valueListInsert.slice(1, valueListInsert.length))
        setShowCodeIsEmptyQueue(false)

        if (valueListInsert.length <= 1) setShowConfirmRemoveStart(false)
    }

    function confirmRemoveEnd() {
        setValueListInsert(valueListInsert.slice(0, -1))
        setShowCodeIsEmptyQueue(false)

        if (valueListInsert.length <= 1) setShowConfirmRemoveStart(false)
    }

    return (
        <Container>
                <div className={styles.container}>
                    <section className={styles.buttonsCodes}>
                        <div className={styles.buttons}>
                            
                            
                            <button 
                                className={styles.buttonInterative}
                                style={{ display: showBtnCreateLinkedList ? " " : "none", opacity: valueStruct >=1 ? '1' : '0.5' }}
                                onClick={btnCreateLinkedList} 
                            >
                                    CRIAR LISTA
                            </button>

                            <div className={styles.infos} style={{ display: showChooseLength ? "none": " "}}>
                                <h3 style={{ display: showNextStep ? " " : "none"}}>Selecione a próxima operação</h3>
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeInsertEnd ? "": "none"}}
                            >
                                <p className={styles.funcInput}>inserir_fim{"("}f,</p>

                                <input
                                    type="number"
                                    name="name"
                                    min="0" 
                                    max="999"
                                    maxLength="4"
                                    className={styles.inputValues}
                                    value={valueInsert}
                                    onChange={(v) => {
                                        const limit = 3;
                                        setValueInsert(v.target.value.slice(0, limit))
                                    }}
                                />

                                <p className={styles.funcInput}>{")"}</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmInsertEnd ? " " : "none" }}
                                    type="submit"
                                    onClick={confirmInsertEnd}
                                >
                                    CONFIRMAR
                                </button>
                            </div>
                            
                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeInsertStart ? "": "none"}}
                            >
                                <p className={styles.funcInput}>inserir_inicio{"("}f,</p>

                                <input
                                    type="number"
                                    name="name"
                                    min="0" 
                                    max="999"
                                    maxLength="4"
                                    className={styles.inputValues}
                                    value={valueInsert}
                                    onChange={(v) => {
                                        const limit = 3;
                                        setValueInsert(v.target.value.slice(0, limit))
                                    }}
                                />

                                <p className={styles.funcInput}>{")"}</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmInsertStart ? " " : "none" }}
                                    type="submit"
                                    onClick={confirmInsertStart}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeSeacrh ? "": "none"}}
                            >
                                <p className={styles.funcInput}>search{"("}l,</p>

                                <input
                                    type="number"
                                    name="name"
                                    min="0" 
                                    max="999"
                                    maxLength="4"
                                    className={styles.inputValues}
                                    value={valueSearch}
                                    onChange={(v) => {
                                        const limit = 3;
                                        setValueSearch(v.target.value.slice(0, limit))
                                    }}
                                />

                                <p className={styles.funcInput}>{")"}</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmSearch ? " " : "none" }}
                                    type="submit"
                                    onClick={confirmSearch}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeRemoveStart ? "" : "none" }}
                            >
                                <p className={styles.funcInput}>remover_inicio(f)</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmRemoveStart ? "" : "none" }}
                                    type="submit"
                                    onClick={confirmRemoveStart}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeRemoveEnd ? "" : "none" }}
                            >
                                <p className={styles.funcInput}>remover_fim(f)</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmRemoveEnd ? "" : "none" }}
                                    type="submit"
                                    onClick={confirmRemoveEnd}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div className={styles.buttonsUser}>
                                    <div className={styles.line1}>
                                        <button 
                                            className={styles.buttonInterative}
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnInsertEnd}
                                        >
                                            INSERIR FIM
                                        </button>

                                        <button 
                                            className={styles.buttonInterative}
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnInsertStart}
                                        >
                                            INSERIR INÍCIO
                                        </button>

                                        <button 
                                            className={styles.buttonInterative} 
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnSearchElement}
                                        >
                                            BUSCAR ELEMENTO
                                        </button> 
                                    </div>

                                    <div className={styles.line2}>
                                        <button 
                                            className={styles.buttonInterative} 
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnRemoveEnd}
                                        >
                                                REMOVER FIM
                                        </button>

                                        <button 
                                            className={styles.buttonInterative} 
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnRemoveStart}
                                        >
                                            REMOVER INÍCIO
                                        </button>

                                        <button 
                                            className={styles.buttonInterative} 
                                            style={{ opacity: showBtnCreateLinkedList ? "0.5" : "1" }}
                                            onClick={btnFreeLinkedList}
                                        >
                                            LIBERAR LISTA
                                        </button>
                                    </div>,
                            </div>
                        </div>

                        <div className={styles.codes}>
                            {/* <StructQueueCode
                                show={showCodeStructLinkedList}
                                inputValue={valueStruct}
                                listTest={valueListInsert}
                            />

                            <CreateQueueCode show={showCodeCreateLinkedList} />

                            <EnqueueCode
                                show={showCodeInsertEnd}
                                inputValue={valueInsert}
                            /> */}

                            {/* <DequeueCode show={showCodeRemoveStart} />
                            <FreeQueueCode show={showCodeFreeLinkedList} />
                            <IsEmptyQueueCode show={showCodeIsEmptyQueue} />
                            <IsFullQueueCode show={showCodeIsFullQueue} /> */}
                        </div>
                    </section>

                    <section className={styles.queueInterative}>
                        <LinkedListMake 
                            valueStruct={valueStruct} 
                            listTest={valueListInsert}
                            end={valueListInsert.length}
                            flag={flagSearch}
                            searchElement={valueSearch}
                        />
                    </section>
                </div> 
        </Container>

    )
}


LinkedListInterative.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Lista Encadeada">
            <Sidebar />

            <section>
                <NavStructMenu 
                    structName="LISTA ENCADEADA"
                    iconName={faEllipsis}
                    linkStruct="/linkedList"
                    linkVisualization="/linkedList/visualization"
                    linkExercicio="/linkedList/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}