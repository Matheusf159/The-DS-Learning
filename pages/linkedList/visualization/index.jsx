import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { structures } from '../../../components/structures'
import styles from '../../../styles/LinkedListInterative.module.css'
import { Container, Col, Row } from "reactstrap";
import LinkedListMake from '../../../components/LinkedListMake'

import {
    StructLinkedListCode,
    ListLinkedListCode,
    CreateLinkedListCode,
    InsertBeginCode,
    InsertEndCode,
    RemoveBeginCode,
    RemoveEndCode,
    IsEmptyCode,
    ListPrintCode,
    SearchNodeCode,
    FreeLinkedListCode
} from '../../../components/LinkedListComponents/CodesLinkedList/CodesLinkedList'

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
    const [showStepsInsertBegin, setShowStepsInsertBegin] = useState(false)
    const [showStepsInsertEnd, setShowStepsInsertEnd] = useState(false)
    const [showStepsRemoveBegin, setShowStepsRemoveBegin] = useState(false)
    const [showStepsRemoveEnd, setShowStepsRemoveEnd] =  useState(false)
    const [showStepsIsEmpty, setShowStepsIsEmpty] =  useState(false)

    const [showCodeIsEmptyList, setShowCodeIsEmptyList] = useState(false)
    const [showCodePrintList, setShowCodePrintList] = useState(false)
    
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
            setShowCodeRemoveEnd(false)
            setShowCodeStructLinkedList(false)
            setShowCodeCreateLinkedList(true)
            setShowCodeRemoveStart(false)
            setShowCodeInsertEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodeInsertStart(false)
            setShowCodePrintList(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)

            
            
        }
    }

    function btnInsertEnd() {
        if(!showBtnCreateLinkedList) {
            setShowNextStep(false)
            setShowCodeStructLinkedList(false)
            setShowCodeInsertEnd(true)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodeRemoveEnd(false)
            setShowCodePrintList(false)
            setShowCodeInsertStart(false)
            
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
        }

        if (valueListInsert.length != valueStruct) {
            setShowConfirmInsertEnd(true)
            setShowCodeIsEmptyList(false)
            
            
        }
    }

    function btnInsertStart() {
        if(!showBtnCreateLinkedList) {
            setShowNextStep(false)
            setShowCodeStructLinkedList(false)
            setShowCodeInsertStart(true)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeInsertEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodeRemoveEnd(false)
            setShowCodePrintList(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            
        }

        if (valueListInsert.length != valueStruct) {
            setShowConfirmInsertStart(true)
            setShowCodeIsEmptyList(false)
            
            
        }

        if (valueListInsert.length == valueStruct - 1) {
            setShowConfirmInsertStart(false)
        }
    }

    function btnRemoveStart() {
        if (!showBtnCreateLinkedList) {
            setShowCodeStructLinkedList(false)
            setShowCodeInsertEnd(false)
            setShowCodeRemoveStart(true)
            setShowCodeRemoveEnd(false)
            setShowCodeFreeLinkedList(false)
            setShowBtnCreateLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodeCreateLinkedList(false)
            setShowCodePrintList(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            setShowCodeInsertStart(false)
            setShowStepsIsEmpty(false)
            setShowStepsRemoveBegin(true)
            setShowNextStep(false)
        }

        if (valueListInsert.length == 0) {
            setShowConfirmRemoveStart(false)
            setShowStepsRemoveBegin(false)
            setShowCodeIsEmptyList(true)
            setShowStepsIsEmpty(true)
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
            setShowCodeStructLinkedList(false)
            setShowCodeCreateLinkedList(false)
            setShowCodeInsertEnd(false)
            setShowCodeRemoveEnd(true)
            setShowCodeFreeLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowBtnCreateLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodePrintList(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            setShowCodeInsertStart(false)
            setShowStepsInsertBegin(false)
            setShowStepsRemoveEnd(true)
            setShowNextStep(false)
        }

        if (valueListInsert.length == 0) {
            setShowConfirmRemoveEnd(false);
            setShowCodeIsEmptyList(true)
            setShowStepsIsEmpty(true)
            setShowStepsRemoveEnd(false)
            
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
            setShowCodeStructLinkedList(false)
            setShowCodeInsertEnd(false)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeIsEmptyList(false)
            setShowCodeFreeLinkedList(true)
            setShowCodeInsertStart(false)
            setShowCodeSearch(false)
            setShowConfirmSearch(false)
            setShowConfirmRemoveEnd(false)
            setShowCodeRemoveEnd(false)
            setShowConfirmInsertStart(false)

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
        if(!showBtnCreateLinkedList && valueListInsert != 0) {
            setShowCodeStructLinkedList(false)
            setShowNextStep(false)
            setShowCodeSearch(true)
            setShowConfirmSearch(true)
            setShowCodeInsertEnd(false)
            setShowCodeCreateLinkedList(false)
            setShowCodeRemoveStart(false)
            setShowCodeFreeLinkedList(false)
            setShowCodeIsEmptyList(false)
            setShowCodeRemoveEnd(false)
            setShowCodePrintList(false)
            setShowCodeInsertStart(false)
            
        }
    }

    function confirmSearch() {
        if(!valueListInsert.length == []) {
            setFlagSearch(() => {return true})
        
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
        setShowCodeIsEmptyList(false)

        if (valueListInsert.length <= 1) setShowConfirmRemoveStart(false)
    }

    function confirmRemoveEnd() {
        setValueListInsert(valueListInsert.slice(0, -1))
        setShowCodeIsEmptyList(false)

        if (valueListInsert.length <= 1) setShowConfirmRemoveStart(false)
    }
    

    useEffect(() => {
        setFlagSearch(() => {return false})
    }, [valueSearch])

    return (
        <Container>
            <Row className={styles.buttonsCodes}>
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

                <Row
                    xs="auto"
                    className={styles.contentInput}
                    style={{ display: showCodeInsertEnd ? "": "none"}}
                >
                    <p className={styles.funcInput}>inserir_fim{"("}l, </p>

                    <Col>
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
                    </Col>

                    <p className={styles.funcInput}>{")"}</p>
                
                    <button
                        className={styles.buttonInterative}
                        style={{ display: showConfirmInsertEnd ? " " : "none" }}
                        type="submit"
                        onClick={confirmInsertEnd}
                        >
                        CONFIRMAR
                    </button>
                </Row>
                
                <Row
                    xs="auto"
                    className={styles.contentInput}
                    style={{ display: showCodeInsertStart ? "": "none"}}
                >
                    <p className={styles.funcInput}>inserir_inicio{"("}l,</p>

                    <Col>
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
                    </Col>
                    <p className={styles.funcInput}>{")"}</p>

                    <button
                        className={styles.buttonInterative}
                        style={{ display: showConfirmInsertStart ? " " : "none" }}
                        type="submit"
                        onClick={confirmInsertStart}
                    >
                        CONFIRMAR
                    </button>
                </Row>
                
                <Row
                    xs="auto"
                    className={styles.contentInput}
                    style={{ display: showCodeSeacrh ? "": "none"}}
                >
                    <p className={styles.funcInput}>search{"("}l,</p>
                    
                    <Col>
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
                                setFlagSearch(false)
                            }}
                        />
                    </Col>
                
                    <p className={styles.funcInput}>{")"}</p>
                
                    <button
                        className={styles.buttonInterative}
                        style={{ display: showConfirmSearch ? " " : "none" }}
                        type="submit"
                        onClick={confirmSearch}
                    >
                        CONFIRMAR
                    </button>
                </Row>

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

                <Row className={styles.buttonsUser}>
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
                                style={{ opacity: (showBtnCreateLinkedList || (valueListInsert.length == 0)) ? "0.5" : "1" }}
                                onClick={btnSearchElement}
                            >
                                BUSCAR ELEMENTO
                            </button> 
                        
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
                </Row>
            </Row>
            
            <Row className={styles.codes}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <StructLinkedListCode show={showCodeStructLinkedList} />
                    <ListLinkedListCode show={showCodeStructLinkedList} />

                    <CreateLinkedListCode show={showCodeCreateLinkedList} />

                    <InsertBeginCode show={showCodeInsertStart} showSteps={showStepsInsertBegin} />
                    <InsertEndCode show={showCodeInsertEnd} showSteps={showStepsInsertEnd} />

                    <RemoveBeginCode show={showCodeRemoveStart} showSteps={showStepsRemoveBegin} />
                    <RemoveEndCode show={showCodeRemoveEnd} showSteps={showStepsRemoveEnd} />

                    <IsEmptyCode show={showCodeIsEmptyList} showSteps={showStepsIsEmpty} />
                    <ListPrintCode show={showCodePrintList} /> 

                    <SearchNodeCode show={showCodeSeacrh} />
                    <FreeLinkedListCode show={showCodeFreeLinkedList} />
                </div>
            </Row>

            <Row className={styles.queueInterative}>
                <LinkedListMake 
                    valueStruct={valueStruct} 
                    listTest={valueListInsert}
                    end={valueListInsert.length}
                    flag={flagSearch}
                    searchElement={valueSearch}
                />
            </Row>
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
                    methods={structures}
                />
                {page}
            </section>
        </Layout>
    )
}